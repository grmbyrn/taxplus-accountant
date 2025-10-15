// import { Calculator, FileText, BookOpen, TrendingUp, ArrowUpRight } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import Service from './Service';

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';;
import { Button } from '@/components/ui/button';
import accountantsImage from '@/assets/accountants.jpg';
import Image from 'next/image';

import taxPlanningImage from '@/assets/tax-planning.jpg';
import auditServicesImage from '@/assets/audit-services.jpg';
import financialConsultingImage from '@/assets/financial-consulting.jpg';

const Services = () => {
  // const services = [
  //   {
  //     icon: Calculator,
  //     title: "Tax Preparation & Planning",
  //     description: "Comprehensive tax services including preparation, planning, and year-round tax advisory to minimize your tax burden and maximize savings.",
  //     features: ["Individual & Business Tax Returns", "Tax Planning Strategies", "IRS Representation", "Quarterly Estimated Payments"]
  //   },
  //   {
  //     icon: FileText,
  //     title: "Accounting Services",
  //     description: "Full-service accounting solutions to keep your financial records accurate, organized, and compliant with all regulations.",
  //     features: ["Financial Statement Preparation", "General Ledger Management", "Accounts Receivable/Payable", "Monthly Financial Reports"]
  //   },
  //   {
  //     icon: BookOpen,
  //     title: "Bookkeeping",
  //     description: "Professional bookkeeping services to maintain accurate financial records and provide insights into your business performance.",
  //     features: ["Daily Transaction Recording", "Bank Reconciliation", "Invoice Management", "Expense Tracking"]
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Financial Planning",
  //     description: "Strategic financial planning and advisory services to help you achieve your business goals and secure your financial future.",
  //     features: ["Cash Flow Analysis", "Budget Planning", "Financial Forecasting", "Business Advisory"]
  //   }
  // ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 border-l-4 border-blue-500 inline-block text-left pl-4">
                Professional Financial
                <span className="text-primary block">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                We provide comprehensive accounting and financial services tailored to meet 
                the unique needs of small businesses and individuals.
              </p>
            </div>
            {/* Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <Image
                src={accountantsImage}
                alt="Accountants working together"
                width={600}
                height={300}
                className="rounded-2xl"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Blue Container */}
        <div className="bg-[#2563eb] rounded-2xl p-10 mb-16 relative overflow-hidden">
          {/* Top right SVG */}
          <img
            src="https://cdn.prod.website-files.com/65b6ddb62be86fb56b8c3873/65b910d5619cfeb9823ad0f5_bg-square-inside-shape-decoration-white-06-accountant-x-webflow-template.svg"
            alt=""
            loading="eager"
            className="absolute top-[-5.5rem] right-[-1.5rem] w-[22rem] h-[22rem] pointer-events-none select-none z-0"
            style={{ opacity: 0.85, filter: 'contrast(2) brightness(2)' }}
          />
          {/* Bottom left SVG */}
          <img
            src="https://cdn.prod.website-files.com/65b6ddb62be86fb56b8c3873/65b910d5619cfeb9823ad0f5_bg-square-inside-shape-decoration-white-06-accountant-x-webflow-template.svg"
            alt=""
            loading="eager"
            className="absolute bottom-[-5.5rem] left-[-1.5rem] w-[22rem] h-[22rem] pointer-events-none select-none z-0"
            style={{ opacity: 0.85, filter: 'contrast(2) brightness(2)' }}
          />
          {/* Header and Buttons Row */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10 relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6 lg:mb-0">
              All-in-one accounting services
            </h3>
            <div className="flex flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-blue-700 font-semibold px-8 py-6 rounded-2xl w-64"
              >
                Contact Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white font-semibold px-8 py-6 rounded-2xl w-64"
                asChild
              >
                <a href="/services">
                  Browse All Services
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <Service image={taxPlanningImage} alt={'Tax Planning'} link={'tax-planning'} service={'Tax Planning'} />
            <Service image={auditServicesImage} alt={'Audit Services'} link={'audit-services'} service={'Audit Services'} />
            <Service image={financialConsultingImage} alt={'Financial Consulting'} link={'financial-consulting'} service={'Financial Consulting'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;