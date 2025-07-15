
const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">About Taxplus Accountants</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h2>
        <p className="text-lg mb-4 text-gray-700">Taxplus Accountants was founded in 2015 by John Byrne. With over 32 years of experience in a multinational company, John established Taxplus with a clear vision: to provide comprehensive accounting solutions tailored for small business owners, helping them to maximize their accounts and achieve financial success.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What We Do</h2>
        <p className="text-lg mb-4 text-gray-700">We offer a wide range of services designed to simplify financial management for businesses of all sizes. Our expertise includes:</p>
        <ul className="list-disc list-inside text-lg mb-4 text-gray-700">
          <li>Bookkeeping</li>
          <li>Payroll</li>
          <li>Taxation</li>
          <li>Management Accounts</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Who We Serve</h2>
        <p className="text-lg mb-4 text-gray-700">We proudly work with a diverse client base, including:</p>
        <ul className="list-disc list-inside text-lg mb-4 text-gray-700">
          <li>SMEs (Small and Medium-sized Enterprises)</li>
          <li>Start-ups</li>
          <li>Sole Traders</li>
          <li>Limited Companies</li>
          <li>Partnerships</li>
        </ul>
        <p className="text-lg text-gray-700">Our commitment is to help our clients maximize their profits, ensure full compliance with Revenue and CRO regulations, and provide clear, actionable financial insights.</p>
      </div>
    </div>
  );
};

export default AboutPage;
