import ServiceCard from "@/components/ServiceCard";
import ReceiveCallCard from "@/components/ReceiveCallCard";
import Image from "next/image";
import accountantsImage from '@/assets/accountants.jpg';

const TaxPlanning = () => (
  <div className="container mx-auto px-4 py-20">
    <div className="max-w-7xl mx-auto">
      <div className="lg:grid lg:grid-cols-[1fr,20rem] lg:items-start lg:gap-0">
        {/* left column - ServiceCard; lg:pr-80 reserved inside ServiceCard prevents text overlap */}
        <div className="w-full">
          <ServiceCard
            heading="Tax Planning"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore cillum dolore eu."
            items={[
              "Reduced liability",
              "Compliance assurance",
              "Cash flow management"
            ]}
          />
        </div>

        {/* right column - ReceiveCallCard
            - mobile: in-flow (below ServiceCard) and uses negative margin inside the component to visually overlap.
            - lg: placed in the right column and nudged left with negative margin so it overlaps the right edge of ServiceCard
              without covering its text (ServiceCard reserves space with lg:pr-80). */}
        <div className="mt-6 lg:mt-0 relative">
          <div className="lg:absolute lg:top-0 lg:left-0 lg:-translate-x-[6rem]">
            <ReceiveCallCard />
          </div>
        </div>
      </div>
    </div>

    {/* following content always sits below the grid, so it won't be overlapped */}
    <div className="mt-10">
      <h2>About the service</h2>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <Image
        src={accountantsImage}
        alt="Audit Services"
        width={384}
        height={180}
        className="rounded-2xl mb-4 w-full"
        style={{ objectFit: 'cover' }}
      />
    </div>
  </div>
);

export default TaxPlanning;