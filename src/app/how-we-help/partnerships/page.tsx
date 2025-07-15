import PageHeader from "@/components/PageHeader";

const PartnershipsPage = () => {
  return (
    <div>
      <PageHeader 
        title="Partnerships"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-lg text-gray-700 mb-4">Taxplus Accountants offers a range of services specifically tailored for partnerships. We understand the unique financial and tax considerations that partnerships face and provide expert guidance to help you navigate them.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Services for Partnerships:</h2>
          <ul className="list-disc list-inside text-lg mb-4 text-gray-700">
            <li><strong>Accounts Preparation & Bookkeeping:</strong> We prepare year-end accounts for partnerships and provide meticulous monthly or quarterly bookkeeping services. We also offer bookkeeping system health checks, assistance with software selection, and training.</li>
            <li><strong>Taxation Services:</strong> Our primary service involves the preparation of income tax returns for partnerships. We also offer tax planning, support with IRS correspondence, and amendments for previous tax returns.</li>
            <li><strong>Payroll and Pension Management:</strong> We handle payroll processing, time tracking, and reporting, as well as pension management.</li>
            <li><strong>Company Formation:</strong> We provide guidance on selecting appropriate business structures, such as partnerships, and manage the associated administrative and compliance tasks.</li>
            <li><strong>Financial Reporting:</strong> This service ensures accurate financial statements and reconciled books.</li>
            <li><strong>Business Advisory & Consulting:</strong> We offer general business advice and tailored support for new and established businesses.</li>
          </ul>
          <p className="text-lg text-gray-700">We are committed to providing comprehensive support to partnerships, ensuring compliance and fostering financial growth.</p>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;