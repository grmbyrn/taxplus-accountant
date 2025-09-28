// import { Calculator, FileText, BookOpen, TrendingUp, ArrowUpRight } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';;
import { Button } from '@/components/ui/button';
import accountantsImage from '@/assets/accountants.jpg';
import Image from 'next/image';

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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 border-l-4 border-blue-500 inline-block text-left pl-4">
            Professional Financial
            <span className="text-primary block">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            We provide comprehensive accounting and financial services tailored to meet 
            the unique needs of small businesses and individuals.
          </p>
          <div className="flex mt-6">
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

        {/* Blue Container */}
        <div className="bg-[#2563eb] rounded-2xl p-10 mb-16"> {/* Warmer blue: Tailwind blue-600 */}
          <h3 className="text-3xl font-bold text-white mb-6">
            All-in-one accounting services
          </h3>
          <div className="flex flex-row gap-4 mb-10">
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
            >
              Browse All Services
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <a href="#" className="flex flex-col group w-full">
              <Image
                src={accountantsImage}
                alt="Tax Planning"
                width={384}
                height={180}
                className="rounded-2xl mb-4 w-full"
                style={{ objectFit: 'cover' }}
              />
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-semibold text-white group-hover:underline">Tax Planning</span>
                <ArrowUpRight className="text-white group-hover:text-blue-200" size={22} />
              </div>
            </a>
            {/* Service 2 */}
            <a href="#" className="flex flex-col group w-full">
              <Image
                src={accountantsImage}
                alt="Audit Services"
                width={384}
                height={180}
                className="rounded-2xl mb-4 w-full"
                style={{ objectFit: 'cover' }}
              />
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-semibold text-white group-hover:underline">Audit Services</span>
                <ArrowUpRight className="text-white group-hover:text-blue-200" size={22} />
              </div>
            </a>
            {/* Service 3 */}
            <a href="#" className="flex flex-col group w-full">
              <Image
                src={accountantsImage}
                alt="Financial Consulting"
                width={384}
                height={180}
                className="rounded-2xl mb-4 w-full"
                style={{ objectFit: 'cover' }}
              />
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-semibold text-white group-hover:underline">Financial Consulting</span>
                <ArrowUpRight className="text-white group-hover:text-blue-200" size={22} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;