import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import accountantsImage from '@/assets/accountants.jpg';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4">
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
            asChild
          >
            <a href="/services">
              Browse All Services
            </a>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <a href="/services/tax-planning" className="flex flex-col group w-full">
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
          <a href="/services/audit-services" className="flex flex-col group w-full">
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
          <a href="/services/financial-consulting" className="flex flex-col group w-full">
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
          {/* Service 4 */}
          <a href="/services/payroll-processing" className="flex flex-col group w-full">
            <Image
              src={accountantsImage}
              alt="Payroll Processing"
              width={384}
              height={180}
              className="rounded-2xl mb-4 w-full"
              style={{ objectFit: 'cover' }}
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-semibold text-white group-hover:underline">Payroll Processing</span>
              <ArrowUpRight className="text-white group-hover:text-blue-200" size={22} />
            </div>
          </a>
          {/* Service 5 */}
          <a href="/services/tax-preparation" className="flex flex-col group w-full">
            <Image
              src={accountantsImage}
              alt="Tax Preparation"
              width={384}
              height={180}
              className="rounded-2xl mb-4 w-full"
              style={{ objectFit: 'cover' }}
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-semibold text-white group-hover:underline">Tax Preparation</span>
              <ArrowUpRight className="text-white group-hover:text-blue-200" size={22} />
            </div>
          </a>
          {/* Service 6 */}
          <a href="/services/bookkeeping" className="flex flex-col group w-full">
            <Image
              src={accountantsImage}
              alt="Bookkeeping"
              width={384}
              height={180}
              className="rounded-2xl mb-4 w-full"
              style={{ objectFit: 'cover' }}
            />
            <div className="flex items-center justify-between w-full">
              <span className="text-lg font-semibold text-white group-hover:underline">Bookkeeping</span>
              <ArrowUpRight className="text-white group-hover:text-blue-200" size={22} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
