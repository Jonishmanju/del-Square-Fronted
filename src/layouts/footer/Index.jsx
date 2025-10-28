import React from "react";
import { useNavigate } from "react-router-dom";
import { Building2, Phone, Mail, MapPin, Clock } from "lucide-react";
import logoImage from "../../assets/images/del-square-logo.svg";

export default function Footer() {
  const navigate = useNavigate();

  const services = [
    { key: "structural-design", label: "Structural Design" },
    { key: "project-management", label: "Project Management" },
    { key: "cost-efficient", label: "Cost Efficient Solutions" },
    { key: "green-building", label: "Green Building" },
    { key: "structural-audit", label: "Structural Audit" },
    { key: "site-supervision", label: "Site Supervision" },
  ];
  return (
<footer className="bg-[#111827] text-white pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={logoImage}
                alt="Del Square Logo"
                className="w-16 h-16 mr-3"
              />
              <div>
                <div className="font-semibold text-lg">
                  DEL SQUARE
                </div>
                <div className="text-sm text-gray-400">
                  Structural Engineering & Construction Consultancy
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional structural engineering services with 15–20% guaranteed cost savings. 
              Building safely and cost-effectively since 2017.
            </p>
            {/* <p className="text-white-400 mb-4">
              Your trusted partner for electrical and plumbing solutions.
              Quality products, professional services, and customer satisfaction
              guaranteed.
            </p> */}

            {/* Social Icons */}
            {/* <div className="flex space-x-3">
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="bg-pink-500 p-2 rounded-full hover:bg-pink-400 transition"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="bg-green-500 p-2 rounded-full hover:bg-green-400 transition"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <span
                  onClick={() => navigate("/")}
                  className="text- hover:text-white cursor-pointer relative footer-link"
                >
                  Home
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/about")}
                  className="text-white-400 hover:text-white cursor-pointer relative footer-link"
                >
                  About Us
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/projects")}
                  className="text-gray-400 hover:text-white cursor-pointer relative footer-link"
                >
                  Projects
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/contact")}
                  className="text-gray-400 hover:text-white cursor-pointer relative footer-link"
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.key}>
                  <span
                    onClick={() => navigate("/services")}
                    className="text-gray-400 hover:text-white cursor-pointer relative footer-link"
                  >
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-blue-400" />
                <span>+91 915 987 5674</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-400" />
                <span>info@delsquare.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-blue-400 mt-1" />
                <span>Tamil Nadu, India</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-3 text-blue-400" />
                <span>Mon - Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white py-6 px-6 rounded-2xl text-center">
          <h3 className="text-lg md:text-xl font-semibold">
            Ready to Start Your Project?
          </h3>
          <p className="text-blue-100 mt-2">
            Contact us for professional structural engineering services
          </p>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>
            © 2025 DEL SQUARE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
