import { quickLinks } from "@/app/data/navigation";
import FooterHeading from "../../ui/FooterHeading";
import LinkWithIcon from "../../ui/LinkWithIcon";

function FooterQuickLinks() {
  return (
    <div>
      <FooterHeading>Enlaces Rápidos</FooterHeading>
      <ul className="space-y-2">
        {quickLinks.map((link) => (
          <LinkWithIcon key={link.name} href={link.path}>
            {link.name}
          </LinkWithIcon>
        ))}
      </ul>
    </div>
  );
}

export default FooterQuickLinks;
