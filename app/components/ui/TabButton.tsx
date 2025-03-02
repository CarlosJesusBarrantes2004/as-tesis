"use client";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function TabButton({ active, onClick, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg transition-all ${
        active
          ? "bg-primary text-white shadow-blue-glow"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

export default TabButton;
