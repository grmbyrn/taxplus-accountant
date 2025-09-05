import { Button } from './ui/button';
import heroImage from '@/assets/hero-accounting.jpg';
import Image from 'next/image';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 lg:pt-24 pb-16 lg:pb-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Financial
              <br />
              <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                Solutions
              </span>
              <br />
              for Your Business
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Professional accounting, tax preparation, and financial planning services 
              designed to help your business thrive. Trust our experienced team to handle 
              your finances with precision and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary-blue-dark text-white shadow-blue text-lg px-8 py-6"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <Image 
                src={heroImage}
                alt="Professional accounting office with financial documents and calculator"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-large p-6 max-w-sm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">CPA Certified</div>
                  <div className="text-sm text-muted-foreground">Licensed & Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;