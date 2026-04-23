import ServiceHeader from "../components/services/ServiceHeader";
import ServicesList from "../components/services/ServicesList";
import "../styles/_services.scss";

function Services() {
  return (
    <div className="services-page" id="services">
      <ServiceHeader />
      <ServicesList />
    </div>
  );
}

export default Services;