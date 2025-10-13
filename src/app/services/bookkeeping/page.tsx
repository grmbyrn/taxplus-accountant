import ServiceCard from "@/components/ServiceCard";

const Bookkeeping = () => (
  <div className="container mx-auto px-4 py-0">
    <ServiceCard
      heading="Bookkeeping"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore cillum dolore eu."
      items={[
        "Reduced liability",
        "Compliance assurance",
        "Cash flow management"
      ]}
    />
  </div>
);

export default Bookkeeping;