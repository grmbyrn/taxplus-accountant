
const ContactPage = () => {
  return (
    <div className="container mx-auto px-6 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium mb-2 text-gray-700">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-700">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium mb-2 text-gray-700">Message</label>
              <textarea id="message" rows={5} className="w-full p-3 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Details</h2>
          <p className="text-lg mb-4 text-gray-700"><strong>Address:</strong><br />Bridge House, John Street, Drogheda, Co. Louth, A92 D253</p>
          <p className="text-lg mb-4 text-gray-700"><strong>Phone:</strong><br />041-9844525<br />041-9844515</p>
          <p className="text-lg mb-4 text-gray-700"><strong>Email:</strong><br /><a href="mailto:info@taxplusaccountants.ie" className="text-blue-600 hover:underline">info@taxplusaccountants.ie</a></p>
          <p className="text-lg text-gray-700"><strong>Hours:</strong><br />Monday – Friday 9am-6pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
