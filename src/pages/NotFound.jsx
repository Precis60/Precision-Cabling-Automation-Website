import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Precision Cabling & Automation"
        description="This page is not on the Precision Cabling & Automation website."
        path="/404"
      />
      <section className="narrow-hero">
        <div className="wrap prose">
          <h1>Page not found</h1>
          <p>That address is not part of this site.</p>
          <p>
            <Link className="button" to="/">Back to the home page</Link>
          </p>
        </div>
      </section>
    </>
  );
}
