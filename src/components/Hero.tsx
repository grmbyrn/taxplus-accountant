import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Better Accounts Start Here</h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">Welcome to Taxplus Accountants, specialists in accounting solutions</h2>
            <p className="text-lg text-gray-700 mb-8">Your trusted local experts, simplifying accounting, tax, and financial management for individuals and businesses across Drogheda.</p>
            <div className="flex space-x-4">
              <a href="tel:041-9844525" className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                Call Us
              </a>
              <a href="/contact" className="bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-md hover:bg-gray-300 transition duration-300">
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:w-1/2 mt-8 md:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Accountants"
              fill
              className="object-cover rounded-lg shadow-md"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
