import { HISTORY_TIMELINE } from "@/app/data/about";
import TimelineItem from "../../ui/TimelineItem";
import Image from "next/image";

function HistoryTimeline() {
  return (
    <section className="py-16 bg-gray-50" id="historia">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nuestra Historia
            </h2>
            <div className="space-y-6">
              {HISTORY_TIMELINE.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  number={item.id}
                  title={item.period}
                  description={item.description}
                  isLast={index === HISTORY_TIMELINE.length - 1}
                ></TimelineItem>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-lg opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg opacity-20"></div>
              <Image
                src="/images/historia-empresa.jpg"
                alt="Nuestra historia"
                width={600}
                height={500}
                className="relative z-10 rounded-xl shadow-card w-full object-cover"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryTimeline;
