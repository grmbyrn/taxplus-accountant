import PageHeader from "@/components/PageHeader";

const LimitedCompaniesPage = () => {
  return (
    <div>
      <PageHeader 
        title="Limited Companies"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-lg text-gray-700 mb-4">Taxplus Accountants offers a comprehensive range of services specifically designed for limited companies, including Small to Medium-Sized Enterprises (SMEs), startups, and established companies. Our services aim to help businesses with financial management, regulatory compliance, and profit maximization.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Services for Limited Companies:</h2>
          <ul className="list-disc list-inside text-lg mb-4 text-gray-700">
            <li><strong>Annual Accounts Preparation:</strong> Ensuring compliance with Companies House and HMRC obligations.</li>
            <li><strong>Corporation Tax Returns:</strong> Handling calculations and timely submissions.</li>
            <li><strong>VAT Services:</strong> Assistance with VAT registration, compliance, and advisory to optimize VAT position.</li>
            <li><strong>Payroll and Pension Management:</strong> Efficiently managing employee payments, tax withholding, and compliance with PAYE and National Insurance requirements.</li>
            <li><strong>Bookkeeping Services:</strong> Providing meticulous bookkeeping to keep financial records up-to-date and organized.</li>
            <li><strong>Strategic Financial Advice/Business Advisory Services:</strong> Offering tailored advice to help businesses grow, make strategic decisions, and improve reporting.</li>
            <li><strong>Company Administration Services:</strong> Including company incorporation, maintenance of statutory records, and filing of annual returns.</li>
            <li><strong>Tax Planning and Preparation:</strong> Minimizing tax liabilities and maximizing tax savings through strategic planning.</li>
          </ul>
          <p className="text-lg text-gray-700">We provide a friendly service, free initial consultations, and fixed fees with upfront quotes. Our expertise in accounting, tax, payroll, and bookkeeping has been serving clients since 2012.</p>
        </div>
      </div>
    </div>
  );
};

export default LimitedCompaniesPage;