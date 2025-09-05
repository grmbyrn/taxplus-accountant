"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

const HowWeHelpPage = () => {
  const [activeTab, setActiveTab] = useState("limited");

  return (
    <div>
      <PageHeader
        title="Types of Businesses We Help"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop"
      />

      <div className="container mx-auto px-6 py-16 md:py-20 max-w-6xl">
        {/* Intro Card */}
        <div className="p-8 bg-white rounded-2xl shadow-medium hover:shadow-large transition-shadow duration-300 border mb-14 mx-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            TaxPlus Accountants helps SMEs, including small Limited Companies, sole traders and partnerships, that provide a service or trade to maximise their accounts.
          </p>
          <p className="text-gray-600 mb-4">
            Many businesses struggle with their accounts. We have a range of solutions that help business owners get better control over their finances so they can run and grow profitable companies.
          </p>
          <p className="text-gray-600">
            Our expertise and experience lie in understanding accounts so that our clients can build, run and grow profitable businesses.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 md:gap-6 mb-12 flex-wrap">
          {[
            { key: "limited", label: "Limited Companies" },
            { key: "partnerships", label: "Partnerships" },
            { key: "sole", label: "Sole Traders" },
            { key: "startups", label: "Start Ups" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-sm transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="p-8 bg-white rounded-2xl shadow-medium hover:shadow-large transition-shadow duration-300 border mx-8">
          {activeTab === "limited" && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Limited Companies</h2>
              <p className="mb-4">
                If you wish to set up a limited company, we will fully discuss with you the advantages and disadvantages of this structure...
              </p>
              <p className="mb-4">
                We will also assist you to manage your obligations – which can be quite onerous for this type structure.
              </p>
              <p>
                Take the next step in your financial journey and see what TaxPlus Accountants can do for your business.
              </p>
            </>
          )}

          {activeTab === "partnerships" && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Partnerships</h2>
              <p className="mb-4">
                If you intend to set up business with more than one person, then a partnership may be the more appropriate structure for you.
              </p>
              <p className="mb-4">
                At TaxPlus Accountants, we can assist you with setting up the partnership, i.e., we can have a legally binding partnership agreement drawn up...
              </p>
              <p>
                Take the next step in your financial journey and see what TaxPlus Accountants can do for your business.
              </p>
            </>
          )}

          {activeTab === "sole" && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Sole Traders</h2>
              <p className="mb-4">
                Being a sole trader is one of the simplest ways to get started in business – but there are still many processes that need to be followed.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Cash flow projection</li>
                <li>Commercial risks</li>
                <li>Profitability</li>
                <li>Financing options</li>
                <li>Tax planning</li>
              </ul>
              <p>
                Take the next step in your financial journey and see what TaxPlus Accountants can do for your business.
              </p>
            </>
          )}

          {activeTab === "startups" && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Start Ups</h2>
              <p className="mb-4">
                About to start in business or already have a new business? Come and see us for a free, no obligation consultation...
              </p>
              <ul className="list-disc pl-6">
                <li>Business Plan</li>
                <li>Cash Flow Projection</li>
                <li>Tax Planning</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HowWeHelpPage;
