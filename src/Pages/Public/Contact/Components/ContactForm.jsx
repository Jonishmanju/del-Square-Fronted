import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import ScrollReveal from "../../../../components/animations/ScrollReveal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirement: '',
    message: '',
    budget: '',
    timeline: '',
    projectType: '',
    location: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const services = [
    "Structural Design",
    "Project Management",
    "Cost Efficient Solutions",
    "Green Building",
    "Structural Audit",
    "Site Supervision",
    "Other"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', phone: '', email: '', requirement: '', message: '',
        budget: '', timeline: '', projectType: '', location: ''
      });
    }, 3000);
  };

  return (
    <div>
      <ScrollReveal delay={0.2} y={30} rotateY={-15}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

        <motion.form
          className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
          onSubmit={handleSubmit}
          whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)",
                "linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
                "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative z-10">
            {/* Form Fields with Staggered Animation */}
            {[
              { name: "name", label: "Name *", type: "text", placeholder: "Enter your full name", required: true },
              { name: "phone", label: "Phone *", type: "tel", placeholder: "Enter your phone number", required: true },
              { name: "email", label: "Email", type: "email", placeholder: "Enter your email address", required: false },
            ].map((field, index) => (
              <motion.div
                key={field.name}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.label
                  className="block text-gray-700 font-semibold mb-2"
                  whileHover={{ color: "#3B82F6" }}
                >
                  {field.label}
                </motion.label>
                <motion.input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                  placeholder={field.placeholder}
                  required={field.required}
                  whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                  whileHover={{ borderColor: "#93C5FD" }}
                />
              </motion.div>
            ))}

            {/* Select Fields with Animation */}
            {[
              {
                name: "projectType",
                label: "Project Type *",
                options: [
                  { value: "", label: "Select project type" },
                  { value: "residential", label: "Residential" },
                  { value: "commercial", label: "Commercial" },
                  { value: "industrial", label: "Industrial" },
                  { value: "infrastructure", label: "Infrastructure" }
                ],
                required: true
              },
              {
                name: "location",
                label: "Location *",
                type: "text",
                placeholder: "Enter project location",
                required: true
              },
              {
                name: "requirement",
                label: "Requirement *",
                options: [
                  { value: "", label: "Select your requirement" },
                  ...services.map(service => ({ value: service, label: service }))
                ],
                required: true
              },
              {
                name: "budget",
                label: "Budget Range",
                options: [
                  { value: "", label: "Select budget range" },
                  { value: "under-1lakh", label: "Under ₹1 Lakh" },
                  { value: "1-5lakh", label: "₹1-5 Lakhs" },
                  { value: "5-10lakh", label: "₹5-10 Lakhs" },
                  { value: "10-25lakh", label: "₹10-25 Lakhs" },
                  { value: "25-50lakh", label: "₹25-50 Lakhs" },
                  { value: "above-50lakh", label: "Above ₹50 Lakhs" }
                ],
                required: false
              },
              {
                name: "timeline",
                label: "Timeline",
                options: [
                  { value: "", label: "Select timeline" },
                  { value: "urgent", label: "Urgent (Within 1 month)" },
                  { value: "1-3months", label: "1-3 months" },
                  { value: "3-6months", label: "3-6 months" },
                  { value: "6-12months", label: "6-12 months" },
                  { value: "flexible", label: "Flexible" }
                ],
                required: false
              }
            ].map((field, index) => (
              <motion.div
                key={field.name}
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              >
                <motion.label
                  className="block text-gray-700 font-semibold mb-2"
                  whileHover={{ color: "#3B82F6" }}
                >
                  {field.label}
                </motion.label>
                {field.type === "text" ? (
                  <motion.input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    placeholder={field.placeholder}
                    required={field.required}
                    whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                    whileHover={{ borderColor: "#93C5FD" }}
                  />
                ) : (
                  <motion.select
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                    required={field.required}
                    whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                    whileHover={{ borderColor: "#93C5FD" }}
                  >
                    {field.options.map((option, optIndex) => (
                      <option key={optIndex} value={option.value}>{option.label}</option>
                    ))}
                  </motion.select>
                )}
              </motion.div>
            ))}

            {/* Message Field */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.label
                className="block text-gray-700 font-semibold mb-2"
                whileHover={{ color: "#3B82F6" }}
              >
                Message
              </motion.label>
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                placeholder="Tell us about your project requirements..."
                whileFocus={{ scale: 1.02, borderColor: "#3B82F6" }}
                whileHover={{ borderColor: "#93C5FD" }}
              />
            </motion.div>
          </div>



          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-sm text-blue-600 flex items-center gap-2"
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span>Saving your information...</span>
            </motion.div>
          )}

          {isSubmitted && (
            <motion.div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-200/50 to-emerald-200/50"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <CheckCircle className="w-5 h-5 relative z-10" />
              </motion.div>
              <span className="relative z-10">Message sent successfully! We'll get back to you soon.</span>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Send className="w-5 h-5 relative z-10" />
            </motion.div>
            <span className="relative z-10">Send Message</span>
          </motion.button>
        </motion.form>
      </ScrollReveal>
    </div>
  );
};

export default ContactForm;