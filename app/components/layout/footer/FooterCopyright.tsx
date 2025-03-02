import { legalLinks } from "@/app/data/legal";
import Link from "next/link";

function FooterCopyright() {
  return (
    <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
        {legalLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="hover:text-white transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <p className="text-center md:text-right">
        Copyright &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">AS-TESIS</span>. Todos los
        Derechos Reservados
      </p>
    </div>
  );
}

export default FooterCopyright;
