import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV } from "../site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="wordmark" to="/" onClick={close}>
          <strong>Precision Cabling &amp; Automation</strong>
          <span>Yarraville</span>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <ul id="site-nav" className={open ? "nav-links is-open" : "nav-links"}>
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end} onClick={close}>
                {item.label}
              </NavLink>
            </li>
          ))}
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
