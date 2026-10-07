# Precision Cabling & Automation

Public marketing website for Precision Cabling & Automation, Yarraville.

The site is a static React application (Vite) for GitHub Pages. It presents the practice — consultation, design, specification, installation, programming, and support — to residential and commercial clients.

Staff operations are not part of this website.

## Develop

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

```bash
npm run build
npm run preview
npm run lint
```

`npm run deploy` builds and publishes `dist/` with `gh-pages`.

## Contact form

The consultation and contact forms collect name, email, phone, site type, systems of interest, timeline, and a message.

- Set `VITE_CONTACT_FORM_ENDPOINT` to post the enquiry in the page. A Formspree endpoint looks like `https://formspree.io/f/xxxxxxxx`. A Resend setup should be a URL you control that accepts the JSON body (`name`, `email`, `phone`, `siteType`, `systems`, `timeline`, `enquiryType`, `message`) and sends it to `admin@precisioncabling.com.au`.
- When the variable is empty, **Send enquiry** opens the visitor’s email application with the message addressed to `admin@precisioncabling.com.au`. The same text is shown on the page so it can be copied if the mail app does not open.

Copy `.env.example` to `.env` for local values. In GitHub Actions, store `VITE_CONTACT_FORM_ENDPOINT` and, if you want cookieless analytics, `VITE_PLAUSIBLE_DOMAIN` as repository secrets. Analytics is not loaded when the domain is unset.

## GitHub Pages and the custom domain

The published project site is:

https://precis60.github.io/Precision-Cabling-Automation-Website/

`base` in `vite.config.js` is `/Precision-Cabling-Automation-Website/` so asset paths match that URL.

To serve the site on `precisioncabling.com.au`:

1. In the GitHub repository, set the Pages custom domain and turn on HTTPS.
2. At the DNS host for `precisioncabling.com.au`, point the name at GitHub Pages:
   - Apex `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` `CNAME` to `precis60.github.io`
3. Change `base` in `vite.config.js` to `'/'`, add a `CNAME` file if GitHub does not create one, and redeploy. Until `base` is `/`, a custom domain will request assets under the repository path and the pages will not load correctly.
4. After the new host answers, redirect the old Squarespace site to it.

DNS is not changed by this repository.

## Contact details on the site

- 15a Hawkhurst Street, Yarraville VIC 3013
- 0413 729 663
- admin@precisioncabling.com.au
- support@precisioncabling.com.au

ABN, consultation fee, insurance, licences, and case-study narratives are marked as placeholders until the principal supplies them.

## What this repository no longer contains

The embedded customer and staff application (CRM, dashboards, calendars, project editors, client portals, and the Express API under `backend/`) has been removed. If a Render service for that API is still running from an earlier deploy, shut it down. This site does not call it.
