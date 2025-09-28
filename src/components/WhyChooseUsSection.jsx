import Image from 'next/image';
import { Users2, CheckCircle2, CalendarDays } from 'lucide-react';
import accountantsImage from '@/assets/accountants.jpg';

const WhyChooseUsSection = () => (
  <section className="bg-background">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-center">
        We're the best option for your finances
      </h2>
      <div className="relative flex flex-col items-start mb-20">
        {/* Image */}
        <Image
          src={accountantsImage}
          alt="Accountants team"
          width={600}
          height={300}
          className="rounded-2xl"
          style={{ objectFit: 'cover' }}
        />

        {/* Cards */}
        <div className="flex flex-col gap-8 mx-auto w-full max-w-md mt-[-2rem] relative z-10 items-start text-left">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start w-full">
            <Users2 className="text-black mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Dedicated accounting team</h3>
            <p className="text-muted-foreground">Excepteur sint occaecat cupidatat non proiden offici.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start w-full">
            <CheckCircle2 className="text-black mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Filing and compliance</h3>
            <p className="text-muted-foreground">Excepteur sint occaecat cupidatat non proiden offici.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start w-full">
            <CalendarDays className="text-black mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Unlimited bookkeeping</h3>
            <p className="text-muted-foreground">Excepteur sint occaecat cupidatat non proiden offici.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;