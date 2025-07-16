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
          <p className="text-lg text-gray-700">TaxPlus Accountants helps SMEs, including small Limited Companies, sole traders and partnerships, that provide a service or trade to maximise their accounts.</p>
          <p>Many businesses struggle with their accounts. We have a range of solutions that help business owners get better control over their finances so they can run and grow profitable companies.</p>
          <p>Our expertise and experience lie in understanding accounts so that our clients can build, run and grow profitable businesses.</p>
        </div>
        <div id="limited-companies" className="bg-white p-8 rounded-xl shadow-lg">
          <h2>Limited Companies</h2>
          <p>If you wish to set up a limited company, we will fully discuss with you the advantages and disadvantages of this structure. If you decide to proceed with this structure, there are formation costs involved but TaxPlus Accountants will help you set up your company quickly and in a cost effective manner.</p>
          <p>We will also assist you to manage your obligations – which can be quite onerous for this type structure.</p>
          <p>Take the next step in your financial journey and see what TaxPlus Accountants can do for your business</p>
        </div>
        <div id="partnerships" className="bg-white p-8 rounded-xl shadow-lg">
          <h2>Partnerships</h2>
          <p>If you intend to set up business with more than one person, then a partnership may be the more appropriate structure for you.</p>
          <p>At TaxPlus Accountants, we can assist you with setting up the partnership, i.e., we can have a legally binding partnership agreement drawn up and we can discuss with you the benefits, as well as any drawbacks, of entering into such an arrangement.</p>
          <p>Again, we will fully discuss with you the advantages and disadvantages of entering into a partnership so that your decision is as fully informed as possible.</p>
          <p>If you have already established a partnership, we can help you maximise it.</p>
          <p>Take the next step in your financial journey and see what TaxPlus Accountants can do for your business</p>
        </div>
        <div id="sole-traders" className="bg-white p-8 rounded-xl shadow-lg">
          <h2>Sole Traders</h2>
          <p>Being a sole trader is one of the simplest ways to get started in business – but there are still many processes that need to be followed.</p>
          <p>At TaxPlus Accountants, we are a “One Stop Accounting Shop” for accounting and tax services for small businesses and self-employed individuals and help you comply with those processes.</p>
          <p>There are many advantages to setting up in business as a sole trader but there are also many disadvantages vis-à-vis other formal structures.</p>
          <p>We can take you through a comprehensive discussion of the advantages and disadvantages to assist you in making an informed decision. This will help you identify risks and opportunities and will focus on the following areas:</p>
          <ul>
            <li>Cash flow projection</li>
            <li>Commercial risks</li>
            <li>Profitability</li>
            <li>Financing options</li>
            <li>Tax planning</li>
            <li>Car - personal or company</li>
            <li>Business objectives</li>
          </ul>
          <p>Take the next step in your financial journey and see what TaxPlus Accountants can do for your business</p>
        </div>
        <div id="start-ups" className="bg-white p-8 rounded-xl shadow-lg">
          <h2>Start Ups</h2>
          <p>About to start in business or already have a new business? Come and see us for a free, no obligation consultation and we will discuss with you.</p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3>Structure</h3>
            <p>We will discuss the best legal structure e.g. sole trader, partnership, limited company for you and your new business.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3>Business Plan</h3>
            <p>At TaxPlus Accountants we can help you prepare a business plan for you new venture. This will help you identify risks and opportunities and will focus on the following areas:</p>
            <ul>
              <li>Cash flow projection</li>
              <li>Commercial risks</li>
              <li>Profitability</li>
              <li>Financing options</li>
              <li>Tax planning</li>
              <li>Car - personal or company</li>
              <li>Business objectives</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3>Other</h3>
            <p>At TaxPlusAccountants we will guide you through the entire process of setting up a new business and help you avoid some of the common pitfalls e.g. to register or not for Vat, understand your cashflow, use of own car for business mileage and much more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeHelpPage;