import { useEffect, useId, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SERVICES } from "../serviceContent";
import { NAV, SHOP_NAV, SITE } from "../site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const servicesBtnRef = useRef(null);
  const menuId = useId();
  const servicesMenuId = useId();
  const { pathname } = useLocation();
  const servicesActive = pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return undefined;

    function onKey(event) {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesBtnRef.current?.focus();
      }
    }

    function onPointer(event) {
      if (!servicesRef.current?.contains(event.target)) setServicesOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [servicesOpen]);

  function close() {
    setOpen(false);
    setServicesOpen(false);
  }

  function onServicesClick() {
    setServicesOpen((value) => !value);
  }

  function onServicesKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setServicesOpen(true);
      requestAnimationFrame(() => {
        servicesRef.current?.querySelector(".nav-sub a")?.focus();
      });
    }
  }

  function onMenuKeyDown(event) {
    const links = [...(servicesRef.current?.querySelectorAll(".nav-sub a") || [])];
    const index = links.indexOf(document.activeElement);
    if (index < 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      links[(index + 1) % links.length]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      links[(index - 1 + links.length) % links.length]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      links[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      links[links.length - 1]?.focus();
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" onClick={close}>
          <span className="mark" aria-hidden="true">PCA</span>
          <span className="wordmark">
            <strong>Precision Cabling &amp; Automation</strong>
            <span>Yarraville</span>
          </span>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul id={menuId} className={open ? "nav-links is-open" : "nav-links"}>
          {NAV.map((item) => (
            item.menu === "services" ? (
              <li
                key={item.label}
                className="nav-dropdown"
                ref={servicesRef}
              >
                <button
                  ref={servicesBtnRef}
                  type="button"
                  className={servicesActive ? "nav-parent is-current" : "nav-parent"}
                  aria-expanded={servicesOpen}
                  aria-controls={servicesMenuId}
                  aria-haspopup="true"
                  onClick={onServicesClick}
                  onKeyDown={onServicesKeyDown}
                >
                  {item.label}
                </button>
                <ul
                  id={servicesMenuId}
                  className={servicesOpen ? "nav-sub is-open" : "nav-sub"}
                  onKeyDown={onMenuKeyDown}
                >
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <NavLink to={`/services/${service.slug}`} onClick={close}>
                        {service.title}
                      </NavLink>
                    </li>
                  ))}
                  <li>
                    <NavLink to="/services" end onClick={close}>All services</NavLink>
                  </li>
                </ul>
              </li>
            ) : (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end} onClick={close}>
                  {item.label}
                </NavLink>
              </li>
            )
          ))}
          {SHOP_NAV.enabled && SHOP_NAV.href ? (
            <li>
              <a href={SHOP_NAV.href} onClick={close}>{SHOP_NAV.label}</a>
            </li>
          ) : null}
          <li>
            <a href={`tel:${SITE.phoneTel}`} onClick={close}>{SITE.phoneDisplay}</a>
          </li>
          <li>
            <NavLink className="button header-cta" to="/consultation" onClick={close}>
              Book a consultation
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
