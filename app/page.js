export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#1E88E5] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Cedarsky: Your Education and Career Partner</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Find the perfect course, university, or career path with expert guidance.
        </p>
        <div className="mt-8 space-x-4">
          <a href="tel:+2348067773143" className="bg-[#FF9800] text-white px-6 py-3 rounded hover:bg-orange-600">
            Call Now
          </a>
          <a href="https://calendly.com/your-username/consultation" className="bg-[#4CAF50] text-white px-6 py-3 rounded hover:bg-green-600">
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="p-6 bg-[#B0BEC5] rounded">
            <h3 className="text-xl font-medium">Course Selection</h3>
            <p>Find the right course for your academic and career goals.</p>
          </div>
          <div className="p-6 bg-[#B0BEC5] rounded">
            <h3 className="text-xl font-medium">University Guidance</h3>
            <p>Choose the best local or international university for you.</p>
          </div>
          <div className="p-6 bg-[#B0BEC5] rounded">
            <h3 className="text-xl font-medium">Visa Applications</h3>
            <p>Expert help with study visa applications.</p>
          </div>
          <div className="p-6 bg-[#B0BEC5] rounded">
            <h3 className="text-xl font-medium">Career Consultation</h3>
            <p>Plan your career change with personalized advice.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold">Book Your Consultation</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Schedule an online or in-person consultation to discuss your education or career goals.
        </p>
        <div className="mt-8 max-w-4xl mx-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/your-username/consultation?hide_gdpr_banner=1"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          ></script>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E88E5] text-white py-6 text-center">
        <p>Contact us: cedarsky27@gmail.com | © 2025 Cedarsky</p>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Cedarsky | Educational Consultancy for University and Visa Guidance',
  description: 'Cedarsky offers expert consultancy for course selection, university admissions, visa applications, and career changes. Book your consultation today!',
  keywords: 'educational consultancy, university selection, visa application help, career consultation, study abroad',
  openGraph: {
    title: 'Cedarsky Educational Consultancy',
    description: 'Your path to the right course, university, and career. Book a free consultation!',
    url: 'https://oseno.github.io/cedarsky',
    type: 'website',
  },
};