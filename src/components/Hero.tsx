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
    <section id="home" className="pt-24 lg:pt-24 pb-16 lg:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-large">
            {/* Background Image */}
            <Image
              src={heroImage}
              alt="Professional accounting office with financial documents and calculator"
              fill
              priority
              className="object-cover"
              style={{ zIndex: 1 }}
            />
            {/* Improved overlays for better contrast */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-20"></div>
            {/* Content */}
            <div className="relative z-30 px-8 py-12 text-left">
              <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-left drop-shadow-lg">
                Expert Financial
                <br />
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent drop-shadow-lg">
                  Solutions
                </span>
                <br />
                for Your Business
              </h1>
              <div className="flex flex-col gap-6 items-start max-w-2xl border-l-4 border-blue-500 pl-6">
                <p className="text-lg lg:text-2xl leading-relaxed font-medium text-white drop-shadow">
                  Professional accounting, tax preparation, and financial planning services 
                  designed to help your business thrive. Trust our experienced team to handle 
                  your finances with precision and care.
                </p>
                <div className="flex flex-row gap-4 justify-start w-full">
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-primary hover:bg-primary-blue-dark text-white shadow-blue text-lg px-8 py-6 rounded-3xl"
                  >
                    Contact us
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 rounded-3xl"
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Our Services
                  </Button>
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