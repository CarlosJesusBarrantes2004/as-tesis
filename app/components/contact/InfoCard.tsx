interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string | { WEEKDAYS: string; SATURDAY: string };
}

function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 bg-primary-blue/10 p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        {typeof content === "string" ? (
          <p className="text-gray-600 mt-1">{content}</p>
        ) : (
          <>
            <p className="text-gray-600 mt-1">{content.WEEKDAYS}</p>
            <p className="text-gray-600 mt-1">{content.SATURDAY}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
