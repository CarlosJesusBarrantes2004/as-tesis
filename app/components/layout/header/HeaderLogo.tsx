"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderLogoProps {
  onClick?: () => void;
}

function HeaderLogo({ onClick }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      className="relative w-32 h-12 md:w-40 md:h-14 transition-all duration-300 hover:opacity-90"
      onClick={onClick}
    >
      <Image
        src="/images/logo-as-tesis.png"
        alt="Logo de As-Tesis"
        fill
        priority
        sizes="(max-width: 768px) 128px, 160px"
        className="object-contain"
      />
    </Link>
  );
}

export default HeaderLogo;
