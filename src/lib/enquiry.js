import { SITE } from "../site";

export function buildEnquiryText(data) {
  return [
    `Enquiry: ${data.enquiryLabel}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Site type: ${data.siteType}`,
    `Systems: ${data.systems.length ? data.systems.join(", ") : "—"}`,
    `Timeline: ${data.timeline}`,
    "",
    data.message,
  ].join("\n");
}

export function mailtoHref(data) {
  const text = buildEnquiryText(data);
  const subject = encodeURIComponent(`${data.enquiryLabel} — ${data.name}`);
  const body = encodeURIComponent(text);
  return {
    href: `mailto:${SITE.adminEmail}?subject=${subject}&body=${body}`,
    text,
  };
}

export async function postEnquiry(data) {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim();
  if (!endpoint) return null;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      phone: data.phone,
      siteType: data.siteType,
      systems: data.systems.join(", "),
      timeline: data.timeline,
      enquiryType: data.enquiryLabel,
      message: data.message,
      _subject: `${data.enquiryLabel} — ${data.name}`,
    }),
  });

  if (!response.ok) {
    throw new Error(`The form service returned ${response.status}.`);
  }
  return true;
}
