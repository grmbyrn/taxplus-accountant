import React from 'react';

interface TestimonialProps {
  quote: string[];
  author: string;
}

const StarIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.92 7.929c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
  </svg>
);

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <section className="bg-blue-900 py-16 md:py-20 text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        {quote.map((paragraph, index) => (
          <p key={index} className="text-xl md:text-2xl text-center leading-relaxed mb-4 last:mb-0">
            &quot;{paragraph}&quot;
          </p>
        ))}
        <p className="text-lg font-semibold text-center mt-8">
          - {author}
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
