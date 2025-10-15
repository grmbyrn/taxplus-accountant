import { Button } from "@/components/ui/button";
import Service from "@/components/Service";
import taxPlanningImage from '@/assets/tax-planning.jpg';
import auditServicesImage from '@/assets/audit-services.jpg';
import financialConsultingImage from '@/assets/financial-consulting.jpg';
import payrollProcessingImage from '@/assets/payroll-processing.jpg';
import taxPreparationImage from '@/assets/tax-preparation.jpg';
import bookkeepingImage from '@/assets/bookkeeping.jpg';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#2563eb] rounded-2xl p-10 mb-16">
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
          {/* Using the Service component for each service */}
          <Service 
            image={taxPlanningImage} 
            alt="Tax Planning" 
            link="tax-planning" 
            service="Tax Planning" 
          />
          <Service 
            image={auditServicesImage} 
            alt="Audit Services" 
            link="audit-services" 
            service="Audit Services" 
          />
          <Service 
            image={financialConsultingImage} 
            alt="Financial Consulting" 
            link="financial-consulting" 
            service="Financial Consulting" 
          />
          <Service 
            image={payrollProcessingImage} 
            alt="Payroll Processing" 
            link="payroll-processing" 
            service="Payroll Processing" 
          />
          <Service 
            image={taxPreparationImage} 
            alt="Tax Preparation" 
            link="tax-preparation" 
            service="Tax Preparation" 
          />
          <Service 
            image={bookkeepingImage} 
            alt="Bookkeeping" 
            link="bookkeeping" 
            service="Bookkeeping" 
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
