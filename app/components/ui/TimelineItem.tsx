interface TimelineItemProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

function TimelineItem({
  number,
  title,
  description,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="mr-4 flex flex-col items-center">
        <div className="rounded-full w-8 h-8 bg-secondary flex items-center justify-center text-white font-bold">
          {number}
        </div>
        {isLast && <div className="h-full w-0.5 bg-gray-300 my-1"></div>}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
