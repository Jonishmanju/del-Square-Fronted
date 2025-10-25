import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../../themes/ThemeProvider";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Upload, X, Calendar, Users, Building2, Calculator, FileText, Camera, Video, Mic, Star, Heart, Zap, Shield, Award, Globe, Download } from "lucide-react";

const Contact = () => {
  const theme = useContext(ThemeContext);
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
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showVideoCall, setShowVideoCall] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! I'm here to help with your structural engineering needs. What can I assist you with?", sender: "bot", timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [showCostCalculator, setShowCostCalculator] = useState(false);
  const [projectArea, setProjectArea] = useState('');
  const [estimatedCost, setEstimatedCost] = useState('');
  const heroRef = useRef(null);
  const chatRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // Typing animation effect
  useEffect(() => {
    const heroText = "Get in Touch with Del Square";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < heroText.length) {
        setTypingText(heroText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    return () => clearInterval(typeInterval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1000);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const calculateCost = () => {
    if (projectArea) {
      const area = parseInt(projectArea);
      const baseCost = 50000;
      const perSqFt = 100;
      const total = baseCost + (area * perSqFt);
      setEstimatedCost(`₹${total.toLocaleString()} - ₹${(total * 1.2).toLocaleString()}`);
    }
  };

  const sendChatMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        text: newMessage,
        sender: "user",
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, message]);
      setNewMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        const responses = [
          "Thank you for your message! Our team will get back to you within 2-4 hours.",
          "I've noted your requirements. Would you like to schedule a consultation?",
          "Great! I'll connect you with our structural engineer for your project.",
          "Perfect! Let me get more details about your project timeline."
        ];
        const botResponse = {
          id: Date.now() + 1,
          text: responses[Math.floor(Math.random() * responses.length)],
          sender: "bot",
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1500);
    }
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
      setUploadedFiles([]);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 915 987 5674",
      description: "Available Mon-Sat: 9:00 AM – 6:00 PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "info@delsquare.com",
      description: "We respond within 2-4 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Tamil Nadu, India",
      description: "Serving across Tamil Nadu"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon - Sat: 9:00 AM – 6:00 PM",
      description: "Sunday: Emergency only"
    }
  ];

  const services = [
    "Structural Design",
    "Project Management", 
    "Cost Efficient Solutions",
    "Green Building",
    "Structural Audit",
    "Site Supervision",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section ref={heroRef} className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border-2 border-white/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-lg"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -180, -360],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
          style={{ y }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block"
              animate={{ 
                textShadow: [
                  '0 0 0px rgba(255,255,255,0)',
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 0px rgba(255,255,255,0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {typingText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-blue-300"
              >
                |
              </motion.span>
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with our structural engineering team. We're here to help with all your construction needs.
          </motion.p>

          {/* Floating Action Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setShowLiveChat(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Live Chat
            </motion.button>
            <motion.button
              onClick={() => setShowCostCalculator(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calculator className="w-5 h-5" />
              Cost Calculator
            </motion.button>
            <motion.button
              onClick={() => setShowCalendar(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Book Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 text-blue-600">
                      {info.icon}
                </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                      <p className="text-gray-600 font-semibold">{info.value}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </motion.div>
              ))}
                </div>

            {/* WhatsApp Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://wa.me/919159875674"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">WhatsApp Us</span>
              </a>
            </motion.div>
            </div>

            {/* Contact Form */}
            <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            
            <motion.form
              className="bg-white p-8 rounded-xl shadow-lg"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                    <input 
                      type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                  required
                    />
                  </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter your phone number"
                  required
                />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Project Type *</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="infrastructure">Infrastructure</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Location *</label>
                  <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Enter project location"
                  required
                  />
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Requirement *</label>
                <select 
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  required
                >
                  <option value="">Select your requirement</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-1lakh">Under ₹1 Lakh</option>
                  <option value="1-5lakh">₹1-5 Lakhs</option>
                  <option value="5-10lakh">₹5-10 Lakhs</option>
                  <option value="10-25lakh">₹10-25 Lakhs</option>
                  <option value="25-50lakh">₹25-50 Lakhs</option>
                  <option value="above-50lakh">Above ₹50 Lakhs</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Timeline</label>
                <select 
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (Within 1 month)</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6-12months">6-12 months</option>
                  <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                    rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {/* File Upload Section */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Upload Project Files</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.dwg,.dxf"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC, Images, CAD files (Max 10MB each)</p>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-700">{file.name}</span>
                          <span className="text-xs text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                <button 
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
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

              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              ) : null}

              <motion.button 
                  type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                >
                <Send className="w-5 h-5" />
                  Send Message
              </motion.button>
            </motion.form>
            </div>
          </div>

          {/* Quick Contact Options */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Contact Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              href="tel:+919159875674"
              className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Call Now</h3>
                <p className="text-sm opacity-90">Speak directly with our team</p>
            </motion.a>
            <motion.a
              href="https://wa.me/919159875674"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                <p className="text-sm opacity-90">Quick chat support</p>
            </motion.a>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gray-600 hover:bg-gray-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-8 h-8 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Get Quote</h3>
              <p className="text-sm opacity-90">Fill the form above</p>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Live Chat Modal */}
      <AnimatePresence>
        {showLiveChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-2xl w-full max-w-md h-96 flex flex-col"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold">Del Square Support</div>
                    <div className="text-xs text-green-100">Online now</div>
                  </div>
                </div>
                <button onClick={() => setShowLiveChat(false)} className="text-white/80 hover:text-white">
                  <X className="w-5 h-5" />
              </button>
            </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-3" ref={chatRef}>
                {chatMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <div className="text-sm">{message.text}</div>
                      <div className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-green-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString()}
          </div>
        </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 text-sm"
                  />
                  <motion.button
                    onClick={sendChatMessage}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
          </div>
        </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cost Calculator Modal */}
      <AnimatePresence>
        {showCostCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Cost Calculator</h3>
                <button onClick={() => setShowCostCalculator(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
        </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500">
                    <option value="structuralDesign">Structural Design</option>
                    <option value="projectManagement">Project Management</option>
                    <option value="siteSupervision">Site Supervision</option>
                    <option value="structuralAudit">Structural Audit</option>
                    <option value="greenBuilding">Green Building</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area (sq ft)</label>
                  <input
                    type="number"
                    value={projectArea}
                    onChange={(e) => setProjectArea(e.target.value)}
                    placeholder="Enter area"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                
                <motion.button
                  onClick={calculateCost}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Calculate Cost
                </motion.button>
                
                {estimatedCost && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-purple-50 p-4 rounded-lg"
                  >
                    <div className="text-sm text-purple-600 mb-1">Estimated Cost</div>
                    <div className="text-2xl font-bold text-purple-800">{estimatedCost}</div>
                    <div className="text-xs text-purple-600 mt-1">*Final cost may vary based on project complexity</div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calendar Modal */}
      <AnimatePresence>
        {showCalendar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Book Consultation</h3>
                <button onClick={() => setShowCalendar(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
        </button>
      </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500">
                    <option value="">Select time slot</option>
                    <option value="9-10am">9:00 AM - 10:00 AM</option>
                    <option value="10-11am">10:00 AM - 11:00 AM</option>
                    <option value="11-12pm">11:00 AM - 12:00 PM</option>
                    <option value="2-3pm">2:00 PM - 3:00 PM</option>
                    <option value="3-4pm">3:00 PM - 4:00 PM</option>
                    <option value="4-5pm">4:00 PM - 5:00 PM</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500">
                    <option value="">Select consultation type</option>
                    <option value="phone">Phone Call</option>
                    <option value="video">Video Call</option>
                    <option value="office">Office Visit</option>
                    <option value="site">Site Visit</option>
                  </select>
                </div>
                
                <motion.button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Consultation
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
