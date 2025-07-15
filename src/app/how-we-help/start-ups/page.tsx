import PageHeader from "@/components/PageHeader";

const StartUpsPage = () => {
  return (
    <div>
      <PageHeader 
        title="Start Ups"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-lg text-gray-700 mb-4">Taxplus Accountants offers a range of services tailored to support startups and new businesses. We understand the challenges and opportunities that come with starting a new venture and are here to provide comprehensive financial guidance.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Our Services for Start Ups include:</h2>
          <ul className="list-disc list-inside text-lg mb-4 text-gray-700">
            <li><strong>Business Advisory and Planning:</strong> We assist with preparing business plans, identifying risks and opportunities, and focusing on areas such as cash flow projections, profitability, financing options, and overall business objectives.</li>
            <li><strong>Company Formation and Administration:</strong> We guide new ventures in choosing the most suitable business structure (sole trader, limited company, or partnership), help with registration procedures with relevant authorities, and manage company secretarial issues.</li>
            <li><strong>Tax Planning and Returns:</strong> Our services include expert tax planning to minimize liabilities and maximize savings, ensuring compliance with tax regulations, and handling corporation tax calculations and submissions.</li>
            <li><strong>Bookkeeping and Financial Reporting:</strong> We provide meticulous bookkeeping services to keep financial records current and prepare annual accounts for various business types.</li>
            <li><strong>VAT Services:</strong> We offer comprehensive support for navigating VAT complexities, ensuring compliance, and optimizing VAT positions.</li>
            <li><strong>Payroll and Pension Management:</strong> This includes managing employee payments, PAYE, and National Insurance requirements to ensure compliance.</li>
            <li><strong>Software Advice and Training:</strong> We can advise on and help with the installation and training for suitable bookkeeping software, including cloud accounting solutions.</li>
            <li><strong>General Startup Guidance:</strong> We provide guidance through the entire process of setting up a new business, helping to avoid common pitfalls.</li>
          </ul>
          <p className="text-lg text-gray-700">We are dedicated to helping your startup thrive by providing the financial foundation and expert advice you need.</p>
        </div>
      </div>
    </div>
  );
};

export default StartUpsPage;