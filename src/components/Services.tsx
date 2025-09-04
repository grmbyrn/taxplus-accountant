import { Calculator, FileText, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';;
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Tax Preparation & Planning",
      description: "Comprehensive tax services including preparation, planning, and year-round tax advisory to minimize your tax burden and maximize savings.",
      features: ["Individual & Business Tax Returns", "Tax Planning Strategies", "IRS Representation", "Quarterly Estimated Payments"]
    },
    {
      icon: FileText,
      title: "Accounting Services",
      description: "Full-service accounting solutions to keep your financial records accurate, organized, and compliant with all regulations.",
      features: ["Financial Statement Preparation", "General Ledger Management", "Accounts Receivable/Payable", "Monthly Financial Reports"]
    },
    {
      icon: BookOpen,
      title: "Bookkeeping",
      description: "Professional bookkeeping services to maintain accurate financial records and provide insights into your business performance.",
      features: ["Daily Transaction Recording", "Bank Reconciliation", "Invoice Management", "Expense Tracking"]
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial planning and advisory services to help you achieve your business goals and secure your financial future.",
      features: ["Cash Flow Analysis", "Budget Planning", "Financial Forecasting", "Business Advisory"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Professional Financial
            <span className="text-primary block">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive accounting and financial services tailored to meet 
            the unique needs of small businesses and individuals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-primary-foreground hover:bg-primary group p-0 h-auto font-semibold"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us handle your financial needs so you can focus on growing your business. 
            Schedule a free consultation today.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-blue-dark text-white shadow-blue text-lg px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;