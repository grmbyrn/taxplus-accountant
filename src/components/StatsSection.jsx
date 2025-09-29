import { Button } from './ui/button';

const StatsSection = () => (
  <section className="bg-gray-900 py-20 m-4 rounded-2xl">
    <div className="container mx-auto px-4">
      <div className="relative max-w-3xl mx-auto bg-gray-900 rounded-3xl p-8 text-left shadow-lg overflow-hidden">
        {/* Globe SVG background image */}
        <img
          src="https://cdn.prod.website-files.com/65b6ddb62be86fb56b8c3873/65b90c9e1bb4ffb36c31441f_globe-illustration-impactful-accountant-x-webflow-template.svg"
          alt="Globe Illustration Impactful"
          className="absolute top-1/2 right-0 transform -translate-y-1/2 md:w-2/3 w-3/4 h-auto pointer-events-none z-0"
          style={{ opacity: 0.42, filter: 'contrast(1.2) brightness(1.1)' }}
          loading="eager"
        />
        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">We have impactful numbers</h2>
          <p className="text-lg text-gray-300 mb-8">
            Sed convallis tincidunt nunc magna tincidun dolorsuscipit mattis massa nisl et adipiscing semper.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-blue-dark text-white text-lg px-8 py-6 rounded-2xl mb-12"
          >
            Contact Us
          </Button>
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-4xl font-bold text-white">10k</span>
              <span className="block text-gray-300 text-lg mt-2">Happy Clients</span>
            </div>
            <div>
              <span className="text-4xl font-bold text-white">50+</span>
              <span className="block text-gray-300 text-lg mt-2">Team Members</span>
            </div>
            <div>
              <span className="text-4xl font-bold text-white">97%</span>
              <span className="block text-gray-300 text-lg mt-2">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
