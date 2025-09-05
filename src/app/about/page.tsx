import PageHeader from '@/components/PageHeader';
import { Award, Users, Shield, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "15+",
      label: "Years of Excellence",
      description: "Serving businesses with expert financial guidance"
    },
    {
      icon: Users,
      number: "500+",
      label: "Satisfied Clients",
      description: "From startups to established enterprises"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Compliance Rate",
      description: "Always up-to-date with tax laws and regulations"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support Available",
      description: "We're here when you need us most"
    }
  ];

  return (
    <section id="about" className="bg-gradient-subtle">
      <PageHeader
        title="About"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary block">TaxPlus Accountants</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2009, Premier Accounting has been the trusted financial partner 
                for hundreds of businesses across the region. Our team of certified public 
                accountants and financial experts brings decades of combined experience to 
                help you navigate complex financial challenges.
              </p>
              
              <p>
                We believe that every business deserves professional financial guidance, 
                regardless of size. From sole proprietors to growing corporations, we 
                provide personalized solutions that drive growth and ensure compliance.
              </p>
              
              <p>
                Our commitment to excellence, integrity, and client satisfaction has made 
                us the go-to accounting firm for businesses who value precision, reliability, 
                and strategic financial insight.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Integrity & Trust</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Professional Excellence</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Client-Focused Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Continuous Innovation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid sm:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-medium hover:shadow-large transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certified professionals bring years of experience and dedication 
              to every client relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson, CPA",
                role: "Senior Partner & Tax Specialist",
                experience: "12+ years of tax and accounting expertise"
              },
              {
                name: "Michael Chen, CPA",
                role: "Financial Planning Director",
                experience: "10+ years in business advisory services"
              },
              {
                name: "Emily Rodriguez, CPA",
                role: "Bookkeeping & Compliance Manager",
                experience: "8+ years in financial record management"
              }
            ].map((member, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-soft">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{member.name}</h4>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;