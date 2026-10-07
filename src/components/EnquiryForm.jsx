import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ENQUIRY_TYPES,
  SITE,
  SITE_TYPES,
  SYSTEM_OPTIONS,
  TIMELINES,
} from "../site";
import { mailtoHref, postEnquiry } from "../lib/enquiry";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  siteType: "",
  systems: [],
  timeline: "",
  message: "",
  company: "",
};

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function EnquiryForm({ defaultIntent }) {
  const [params] = useSearchParams();
  const initialIntent = defaultIntent || params.get("intent") || "consultation";
  const [intent, setIntent] = useState(
    ENQUIRY_TYPES.some((item) => item.value === initialIntent) ? initialIntent : "consultation",
  );
  const [fields, setFields] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [sent, setSent] = useState(null);
  const [submitError, setSubmitError] = useState("");

  const enquiryLabel = useMemo(
    () => ENQUIRY_TYPES.find((item) => item.value === intent)?.label || "Enquiry",
    [intent],
  );

  function update(name, value) {
    setFields((current) => ({ ...current, [name]: value }));
  }

  function toggleSystem(system) {
    setFields((current) => {
      const has = current.systems.includes(system);
      return {
        ...current,
        systems: has
          ? current.systems.filter((item) => item !== system)
          : [...current.systems, system],
      };
    });
  }

  function validate() {
    const next = {};
    if (!fields.name.trim()) next.name = "Enter your name.";
    if (!validEmail(fields.email.trim())) next.email = "Enter a valid email address.";
    if (!fields.siteType) next.siteType = "Choose a site type.";
    if (!fields.systems.length) next.systems = "Select at least one system, or “Not sure yet”.";
    if (!fields.timeline) next.timeline = "Choose a timeline.";
    if (fields.message.trim().length < 10) next.message = "Add a short note about the site or the fault.";
    return next;
  }

  async function onSubmit(event) {
    event.preventDefault();
    setSubmitError("");
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("idle");
      return;
    }

    const data = {
      ...fields,
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim(),
      message: fields.message.trim(),
      enquiryLabel,
    };

    if (fields.company) {
      setSent({ mode: "endpoint" });
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const posted = await postEnquiry(data);
      if (posted) {
        setSent({ mode: "endpoint" });
        setStatus("sent");
        if (window.plausible) window.plausible("Consultation enquiry");
        return;
      }
      const mail = mailtoHref(data);
      setSent({ mode: "mailto", ...mail });
      setStatus("sent");
      window.location.href = mail.href;
    } catch (error) {
      const mail = mailtoHref(data);
      setSent({ mode: "mailto", ...mail });
      setSubmitError(error.message || "The form could not be sent.");
      setStatus("fallback");
    }
  }

  if (status === "sent" && sent?.mode === "endpoint") {
    return (
      <div className="form-success" role="status">
        <p>
          Enquiry sent to {SITE.adminEmail}. We will reply to {fields.email}.
        </p>
        <p>
          If the matter is urgent, call <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="enquiry" onSubmit={onSubmit} noValidate>
      {status === "fallback" && (
        <div className="form-error" role="alert">
          <p>{submitError} Use the email link below so the enquiry still reaches {SITE.adminEmail}.</p>
        </div>
      )}
      {status === "sent" && sent?.mode === "mailto" && (
        <div className="form-success" role="status">
          <p>
            Your email application should open with this enquiry addressed to {SITE.adminEmail}.
            If it does not, copy the text and send it yourself.
          </p>
          <p>
            <a className="button" href={sent.href}>Open email</a>
          </p>
          <pre className="copy-block">{sent.text}</pre>
        </div>
      )}

      <fieldset className="radios">
        <legend className="legend">What do you need?</legend>
        {ENQUIRY_TYPES.map((item) => (
          <label key={item.value}>
            <input
              type="radio"
              name="intent"
              value={item.value}
              checked={intent === item.value}
              onChange={() => setIntent(item.value)}
            />
            {item.label}
          </label>
        ))}
      </fieldset>

      <div className="field-row">
        <div>
          <label htmlFor="name">Name (required)</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={fields.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            onChange={(event) => update("name", event.target.value)}
          />
          {errors.name && <p id="name-error" className="form-error">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email (required)</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            onChange={(event) => update("email", event.target.value)}
          />
          {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
        </div>
      </div>

      <div className="field-row">
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="siteType">Site type (required)</label>
          <select
            id="siteType"
            name="siteType"
            value={fields.siteType}
            aria-invalid={Boolean(errors.siteType)}
            aria-describedby={errors.siteType ? "site-error" : undefined}
            onChange={(event) => update("siteType", event.target.value)}
          >
            <option value="">Select</option>
            {SITE_TYPES.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.siteType && <p id="site-error" className="form-error">{errors.siteType}</p>}
        </div>
      </div>

      <fieldset>
        <legend className="legend">Systems of interest (required)</legend>
        <div className="checks">
          {SYSTEM_OPTIONS.map((system) => (
            <label key={system}>
              <input
                type="checkbox"
                name="systems"
                value={system}
                checked={fields.systems.includes(system)}
                onChange={() => toggleSystem(system)}
              />
              {system}
            </label>
          ))}
        </div>
        {errors.systems && <p className="form-error">{errors.systems}</p>}
      </fieldset>

      <div>
        <label htmlFor="timeline">Timeline (required)</label>
        <select
          id="timeline"
          name="timeline"
          value={fields.timeline}
          aria-invalid={Boolean(errors.timeline)}
          aria-describedby={errors.timeline ? "timeline-error" : undefined}
          onChange={(event) => update("timeline", event.target.value)}
        >
          <option value="">Select</option>
          {TIMELINES.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
        {errors.timeline && <p id="timeline-error" className="form-error">{errors.timeline}</p>}
      </div>

      <div>
        <label htmlFor="message">Message (required)</label>
        <textarea
          id="message"
          name="message"
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message && <p id="message-error" className="form-error">{errors.message}</p>}
      </div>

      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="company">Company website</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={fields.company}
          onChange={(event) => update("company", event.target.value)}
        />
      </div>

      <div>
        <button className="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </div>
      <p className="placeholder-note">
        Enquiries go to {SITE.adminEmail}. For an urgent fault, call{" "}
        <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>.
      </p>
    </form>
  );
}
