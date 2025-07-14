
const ServicesPage = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Taxation</h2>
          <p>We offer a full range of taxation services for start-ups, sole traders, limited companies, and partnerships. Our experts will ensure you are compliant and help you minimize your tax liabilities.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Payroll</h2>
          <p>Our payroll services are designed to be efficient and reliable. We handle all aspects of payroll management, so you can focus on your business.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Accounting</h2>
          <p>We provide comprehensive accounting services for a variety of business structures. From bookkeeping to financial statements, we have you covered.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Business Start-Up</h2>
          <p>We specialize in helping new businesses get started. We can assist with everything from company formation to business planning.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
