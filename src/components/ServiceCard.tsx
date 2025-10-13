import React from "react";

interface ServiceCardProps {
  heading: string;
  paragraph: string;
  items: string[];
}

const ServiceCard = ({ heading, paragraph, items }: ServiceCardProps) => (
  <div
    className="
      bg-white rounded-2xl shadow
      p-8 pb-28           /* extra bottom space on small screens so overlays don't cover text */
      lg:pb-8             /* revert to normal padding on large screens */
      w-full text-left
      lg:pr-80            /* reserve space on the right on large screens so ReceiveCallCard won't overlap text */
    "
  >
    <div className="border-l-4 border-blue-700 pl-4 mb-4">
      <h2 className="text-2xl font-bold text-blue-700">{heading}</h2>
    </div>
    <p className="text-lg text-gray-700 mb-4">{paragraph}</p>
    <ul className="list-disc pl-6 space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;