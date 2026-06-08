"use client";

import dynamic from 'next/dynamic';

const BookingWidget = dynamic(() => import('./components/BookingWidget'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">Cedarsky</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#booking" className="text-gray-700 hover:text-blue-600">Book</a>
              <a href="tel:+2348067773143" className="text-gray-700 hover:text-blue-600">Call Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Your Background Image */}
      <section className="relative bg-gradient-to-r from-blue-600/90 to-blue-800/90">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cedarsky/study.jpg')"
          }}
        ></div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Your Education & Career Partner
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Find the perfect course, university, or career path with expert guidance from Cedarsky.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://calendly.com/chambershalal/30min" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Book Free Consultation
              </a>
              <a 
                href="tel:+2348067773143" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for your educational journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Course Selection",
                description: "Find the right course for your academic and career goals.",
                icon: "🎓"
              },
              {
                title: "University Guidance",
                description: "Choose the best local or international university for you.",
                icon: "🏛️"
              },
              {
                title: "Visa Applications",
                description: "Expert help with study visa applications worldwide.",
                icon: "✈️"
              },
              {
                title: "Career Consultation",
                description: "Plan your career change with personalized advice.",
                icon: "💼"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "50+", label: "Students Guided" },
              { number: "98%", label: "Success Rate" },
              { number: "95%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-blue-600">{stat.number}</div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Study Destinations</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We help students pursue education in these countries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {[
              "🇬🇧 United Kingdom",
              "🇮🇹 Italy",
              "🇷🇼 Rwanda",
              "🇲🇺 Mauritius",
              "🇺🇸 USA"
            ].map((country, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <span className="text-lg font-medium text-gray-700">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Book Your Consultation</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule an online or in-person consultation to discuss your education or career goals.
            </p>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Cedarsky</h3>
              <p className="text-sm">Your trusted partner in education and career success.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="#booking" className="hover:text-white">Book Consultation</a></li>
                <li><a href="tel:+2348067773143" className="hover:text-white">Call Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>📧 <a href="mailto:cedarsky27@gmail.com" className="hover:text-white">cedarsky27@gmail.com</a></li>
                <li>📞 <a href="tel:+2348067773143" className="hover:text-white">+234 806 777 3143</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Cedarsky Educational Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}