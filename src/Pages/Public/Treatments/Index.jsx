import React from "react";
import { useNavigate } from "react-router-dom";

const Treatments = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/90 backdrop-blur-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white cursor-pointer flex items-center" onClick={() => navigate("/")}>
            <span className="text-3xl mr-2">🦷</span>
            Dentex
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-green-400 transition-colors duration-300">Home</a>
            <a href="/about" className="text-white hover:text-green-400 transition-colors duration-300">About Us</a>
            <a href="/services" className="text-white hover:text-green-400 transition-colors duration-300">Services</a>
            <a href="/treatments" className="text-white border-b-2 border-blue-400 pb-1">Treatments</a>
            <a href="/contact" className="text-white hover:text-green-400 transition-colors duration-300">Contact</a>
          </nav>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
            <span>📞</span>
            <span>+91 915 987 5674</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">Dental Treatments</h1>
            <p className="text-xl text-white opacity-80 max-w-3xl mx-auto">
              Advanced dental treatments using cutting-edge technology and techniques
            </p>
          </div>

          {/* Treatment Categories */}
          <div className="space-y-16">
            {/* Preventive Treatments */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Preventive Treatments</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Teeth Cleaning</h3>
                  <p className="text-gray-600 mb-4">Deep cleaning to remove plaque and tartar buildup, preventing gum disease and cavities.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹2,000 - ₹3,000</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Fluoride Treatment</h3>
                  <p className="text-gray-600 mb-4">Strengthens tooth enamel and helps prevent cavities, especially beneficial for children.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹1,500 - ₹2,500</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Restorative Treatments */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Restorative Treatments</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Dental Fillings</h3>
                  <p className="text-gray-600 mb-4">Composite and amalgam fillings to restore teeth damaged by decay.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹3,000 - ₹5,000</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Root Canal Therapy</h3>
                  <p className="text-gray-600 mb-4">Advanced endodontic treatment to save infected teeth and relieve pain.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹8,000 - ₹15,000</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cosmetic Treatments */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Cosmetic Treatments</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Teeth Whitening</h3>
                  <p className="text-gray-600 mb-4">Professional whitening treatment to brighten your smile by several shades.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹5,000 - ₹8,000</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Dental Veneers</h3>
                  <p className="text-gray-600 mb-4">Thin porcelain shells to improve the appearance of front teeth.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹15,000 - ₹25,000</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Surgical Treatments */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Surgical Treatments</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Dental Implants</h3>
                  <p className="text-gray-600 mb-4">Permanent tooth replacement solution using titanium implants.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹30,000 - ₹50,000</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Wisdom Tooth Extraction</h3>
                  <p className="text-gray-600 mb-4">Safe removal of impacted or problematic wisdom teeth.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-semibold">₹5,000 - ₹12,000</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Process */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Treatment Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultation</h3>
                <p className="text-gray-600 text-sm">Initial examination and treatment planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Treatment Plan</h3>
                <p className="text-gray-600 text-sm">Detailed treatment options and pricing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Treatment</h3>
                <p className="text-gray-600 text-sm">Professional treatment execution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow-up</h3>
                <p className="text-gray-600 text-sm">Post-treatment care and monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white opacity-70">
            <p>© 2024 Dentex. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 space-y-4 z-50">
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <span className="text-white text-xl">📞</span>
        </button>
        <button className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <span className="text-white text-xl">💬</span>
        </button>
      </div>
    </div>
  );
};

export default Treatments;
