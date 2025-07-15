import PageHeader from "@/components/PageHeader";

const HowWeHelpPage = () => {
  return (
    <div>
      <PageHeader 
        title="How We Help"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto px-6 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">The Type of Businesses that TaxPlus Accountants Help</h1>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-lg text-gray-700">This page provides an overview of the different types of businesses that Taxplus Accountants proudly serves. We offer tailored accounting and taxation solutions to meet the unique needs of each business structure.</p>
          <ul className="list-disc list-inside text-lg mt-4 text-gray-700">
            <li><a href="/how-we-help/limited-companies" className="text-blue-600 hover:underline">Limited Companies</a>: Comprehensive accounting and tax services for incorporated businesses.</li>
            <li><a href="/how-we-help/partnerships" className="text-blue-600 hover:underline">Partnerships</a>: Expert financial guidance and tax planning for partnerships.</li>
            <li><a href="/how-we-help/sole-traders" className="text-blue-600 hover:underline">Sole Traders</a>: Simplified accounting and tax solutions for self-employed individuals.</li>
            <li><a href="/how-we-help/start-ups" className="text-blue-600 hover:underline">Start Ups</a>: Essential financial support and advice for new businesses.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelpPage;