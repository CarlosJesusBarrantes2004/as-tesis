interface FooterHeadingProps {
  children: React.ReactNode;
}

function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
      {children}
    </h3>
  );
}

export default FooterHeading;
