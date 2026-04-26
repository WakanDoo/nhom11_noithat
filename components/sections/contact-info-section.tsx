"use client";

import { InfoCard } from "@/components/ui/info-card";

const cards = [
  {
    icon: "clock" as const,
    title: "Opening Hours",
    lines: [
      "Monday - Friday: 9:00 - 18:00",
      "Saturday: 10:00 - 16:00",
      "Sunday: Closed",
    ],
  },
  {
    icon: "pin" as const,
    title: "Location",
    lines: ["123 Design Avenue", "New York, NY 10001", "United States"],
  },
  {
    icon: "globe" as const,
    title: "Connect",
    lines: ["+1 (555) 123-4567", "owlhome@gmail.com", "@owlhome_design"],
  },
];

export function ContactInfoSection() {
  return (
    <section className="w-full flex justify-center bg-white px-4 md:px-6 lg:px-8 py-14 md:py-[72px] lg:py-20 lg:pb-[88px]">
      <div className="w-full max-w-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {cards.map((card) => (
          <InfoCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            lines={card.lines}
          />
        ))}
      </div>
    </section>
  );
}

