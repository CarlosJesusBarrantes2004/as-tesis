import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterServices from "./FooterServices";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <FooterAbout></FooterAbout>
          <FooterQuickLinks></FooterQuickLinks>
          <FooterServices></FooterServices>
          <FooterContact></FooterContact>
        </div>
        <FooterCopyright></FooterCopyright>
      </div>
    </footer>
  );
}

export default Footer;
