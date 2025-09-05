import PageHeader from "@/components/PageHeader";

const ServicesPage = () => {
  return (
    <div>
      <PageHeader
        title="Our Services"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-16">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Taxation</h2>
          <p className="text-gray-700">We offer a full range of taxation services for start-ups, sole traders, limited companies, and partnerships. Our experts will ensure you are compliant and help you minimize your tax liabilities.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Payroll</h2>
          <p className="text-gray-700">Our payroll services are designed to be efficient and reliable. We handle all aspects of payroll management, so you can focus on your business.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Accounting</h2>
          <p className="text-gray-700">We provide comprehensive accounting services for a variety of business structures. From bookkeeping to financial statements, we have you covered.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Business Start-Up</h2>
          <p className="text-gray-700">We specialize in helping new businesses get started. We can assist with everything from company formation to business planning.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
