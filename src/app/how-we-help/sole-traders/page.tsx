import PageHeader from "@/components/PageHeader";

const SoleTradersPage = () => {
  return (
    <div>
      <PageHeader 
        title="Sole Traders"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <p className="text-lg text-gray-700 mb-4">Taxplus Accountants offers a comprehensive range of services specifically designed for sole traders, aiming to simplify accounting and tax compliance. We act as a "One Stop Accounting Shop" for self-employed individuals and small businesses.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Our Services for Sole Traders include:</h2>
          <ul className="list-disc list-inside text-lg mb-4 text-gray-700">
            <li><strong>Self-Assessment Tax Return Preparation:</strong> We handle the preparation and filing of Self Assessment Tax returns to ensure compliance with HMRC regulations.</li>
            <li><strong>Personal Tax Liability Calculation:</strong> We prepare and compute personal tax liabilities.</li>
            <li><strong>Tax Planning:</strong> We provide advice on personal tax planning for current and subsequent years, with the objective of helping clients pay as little tax as possible within legal boundaries.</li>
            <li><strong>HMRC Liaison:</strong> We deal with HMRC on behalf of our clients.</li>
            <li><strong>Payment Guidance:</strong> We inform clients about when and how to pay HMRC, including payments on account.</li>
            <li><strong>Financial Control:</strong> We help sole traders gain better control over their finances, identify risks and opportunities, and focus on areas like cash flow projection, profitability, and financing options.</li>
            <li><strong>Business Entity Selection:</strong> We can assist in discussing the advantages and disadvantages of operating as a sole trader versus other formal structures to help clients make informed decisions.</li>
            <li><strong>Bookkeeping/Write-Up:</strong> We offer comprehensive bookkeeping services for businesses that may not have accounting staff or are outgrowing their current systems.</li>
          </ul>
          <p className="text-lg text-gray-700">Taxplus Accountants serves sole traders across various sectors, including hairdressers, barbers, carpenters, electricians, plumbers, construction workers, health/wellness professionals, and landlords. We emphasize providing tailored solutions and proactive services with fixed fees.</p>
        </div>
      </div>
    </div>
  );
};

export default SoleTradersPage;