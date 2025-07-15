import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Accounting Solutions for Start-ups and SMEs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Taxation</h3>
              <p>Comprehensive tax services for all business structures.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Payroll</h3>
              <p>Reliable and efficient payroll management services.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Accounting</h3>
              <p>Full-service accounting for start-ups, sole traders, and limited companies.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Construction</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Trades</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Services</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900">Landlords</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
