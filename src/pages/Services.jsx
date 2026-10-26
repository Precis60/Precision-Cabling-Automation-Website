import Seo from "../components/Seo";
import ServiceCards from "../components/ServiceCards";

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Precision Cabling & Automation"
        description="Security and CCTV, access and intercom, networks and cabling, lighting and automation, AV and meeting rooms, and home and garden maintenance."
        path="/services"
      />
      <section className="section services-index">
        <div className="wrap">
          <h1>Services</h1>
          <ServiceCards as="h2" />
        </div>
      </section>
    </>
  );
}
