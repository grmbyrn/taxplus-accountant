import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What specific services do you offer to help businesses?",
    answer: "Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus."
  },
  {
    question: "Do you offer any type of discount or promotion?",
    answer: "Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus."
  },
  {
    question: "How do they structure fees for services?",
    answer: "Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus."
  },
  {
    question: "Do you offer financial consulting services?",
    answer: "Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper lorem lectus."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-blue-600 m-4 rounded-2xl text-white">
      <div className="container mx-auto px-4 max-w-2xl ">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
          Frequently asked questions
        </h2>
        <p className="text-lg text-blue-100 mb-10 text-center">
          Sed convallis tincidunt nunc magna tincidunt suscipit mattis massa nisl et adipiscing semper leo lorem urna lectus nunc integer duis.
        </p>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => {
            // Array of Tailwind blue background classes
            const bgColors = [
              "bg-blue-50",
              "bg-blue-100",
              "bg-blue-200",
              "bg-blue-300"
            ];
            return (
              <div
                key={idx}
                className={`rounded-xl shadow p-6 ${bgColors[idx % bgColors.length]}`}
              >
                <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(idx)}>
                  <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                  {openIndex === idx ? (
                    <Minus className="text-blue-900" size={28} />
                  ) : (
                    <Plus className="text-blue-900" size={28} />
                  )}
                </div>
                {openIndex === idx && (
                  <p className="mt-4 text-blue-900">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;