import { serviceCategories } from "@/app/data/services";
import FooterHeading from "../../ui/FooterHeading";
import LinkWithIcon from "../../ui/LinkWithIcon";

function FooterServices() {
  return (
    <div>
      <FooterHeading>Nuestros Servicios</FooterHeading>
      <ul className="space-y-2">
        {serviceCategories.map((service) => (
          <LinkWithIcon key={service.title} href={`/servicios/${service.id}`}>
            {service.title}
          </LinkWithIcon>
        ))}
      </ul>
    </div>
  );
}

export default FooterServices;
