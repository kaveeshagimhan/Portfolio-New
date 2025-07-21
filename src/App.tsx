import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Calendar, Users, ShoppingCart, Droplets, Video, Globe, Zap, Brain, Cpu, MessageSquare,
  Code,
  Database,
  GraduationCap,
  User,
  Send,
  ChevronDown,
  Monitor,
  Smartphone,
  Target,
  Settings,
  Layers,
  Coffee,
  Terminal,
  Palette,
  Server,
  Wrench,
  FileCode
} from 'lucide-react';


function App() {
  // ==================== STATE MANAGEMENT ====================
  // Contact form state - handles form input data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Mobile menu visibility state
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  // Animation visibility state for sections
  const [isVisible, setIsVisible] = useState({});

  // ==================== INTERSECTION OBSERVER SETUP ====================
  // This handles the scroll-triggered animations for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // ==================== EVENT HANDLERS ====================
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Optional: Log to debug
    console.log("Sending form data:", formData);
  
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,         // your template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY          // your public key
    )
    .then((res) => {
      console.log('✅ Email sent:', res.status);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    })
    .catch((error) => {
      console.error('❌ Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  // Handle CV download - UPDATE THIS FUNCTION TO LINK TO ACTUAL CV FILE
  const handleDownloadCV = () => {
    // Create a link element and trigger download of your actual CV
    const link = document.createElement('a');
    link.href = '/Thennakoon TMKG.pdf'; // Your actual CV file in public folder
    link.download = 'Kaveesha_Gimhan_CV.pdf'; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 relative overflow-x-hidden">
      {/* ==================== ANIMATED BACKGROUND ELEMENTS ==================== */}
      {/* These create the floating background effects - you can modify colors/positions */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Small floating tech icons - you can add/remove/reposition these */}
        <div className="absolute top-1/4 left-1/4 animate-bounce delay-300">
          <Code className="w-6 h-6 text-blue-400/30" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-bounce delay-700">
          <Database className="w-5 h-5 text-purple-400/40" />
        </div>
        <div className="absolute top-1/2 left-3/4 animate-bounce delay-1000">
          <Globe className="w-4 h-4 text-indigo-400/30" />
        </div>
        <div className="absolute top-1/3 right-1/2 animate-bounce delay-1500">
          <Zap className="w-5 h-5 text-yellow-400/30" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-bounce delay-2000">
          <Settings className="w-4 h-4 text-green-400/30" />
        </div>
        <div className="absolute top-2/3 left-1/6 animate-bounce delay-500">
          <Layers className="w-5 h-5 text-pink-400/30" />
        </div>
      </div>


      {/* ==================== NAVIGATION BAR ==================== */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo/Name - UPDATE THIS WITH YOUR PREFERRED BRANDING */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-blue-400 animate-pulse">Kaveesha Gimhan</h1>
            </div>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">About</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Education</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Projects</button>
              <button onClick={() => scrollToSection('ai-ml')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">AI/ML</button>
              <button onClick={() => scrollToSection('learning')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Learning</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105">Contact</button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-blue-400 transition-colors"
            >
              <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${showMobileMenu ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {showMobileMenu && (
            <div className="md:hidden border-t border-gray-700/50 py-4 animate-fadeIn">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('about')} className="text-left px-2 py-1 text-gray-300 hover:text-blue-400 transition-colors">About</button>
                <button onClick={() => scrollToSection('education')} className="text-left px-2 py-1 text-gray-300 hover:text-blue-400 transition-colors">Education</button>
                <button onClick={() => scrollToSection('skills')} className="text-left px-2 py-1 text-gray-300 hover:text-blue-400 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('projects')} className="text-left px-2 py-1 text-gray-300 hover:text-blue-400 transition-colors">Projects</button>
                <button onClick={() => scrollToSection('ai-ml')} className="text-left px-2 py-1 text-gray-300 hover:text-blue-400 transition-colors">AI/ML</button>
                <button onClick={() => scrollToSection('learning')} className="text-left px-2 py-1 text-gray-300 hover:text-blue-400 transition-colors">Learning</button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-2 py-1 text-gray-300 hover:text-blue-400 transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* ==================== HERO/HEADER SECTION ==================== */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left animate-slideInLeft">
              {/* Main name and title - UPDATE THESE WITH YOUR DETAILS */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-blue-400 animate-pulse">Kaveesha</span> Gimhan
              </h1>
              {/* Professional titles - MODIFY THESE TO MATCH YOUR EXPERTISE */}
              <div className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                <p className="mb-2 animate-fadeIn delay-300">Software Engineering Undergraduate</p>
                <p className="mb-2 animate-fadeIn delay-500">Full Stack Developer</p>
                <p className="mb-2 animate-fadeIn delay-700">AI/ML Enthusiast</p>
                <p className="animate-fadeIn delay-1000">Embedded Engineer</p>
              </div>
              {/* Call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeIn delay-1200">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={handleDownloadCV}
                  className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>
            {/* Right side - Profile image */}
            <div className="flex justify-center lg:justify-end animate-slideInRight">
              <div className="relative">
                {/* Profile image container - REPLACE IMAGE URL WITH YOUR PHOTO */}
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 transform">
                  <img 
                    src="/1000543863new.png" 
                    alt="Kaveesha Gimhan" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating icon badge */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ME SECTION ==================== */}
      <section id="about" className={`py-16 bg-gray-800/50 backdrop-blur-sm transition-all duration-1000 ${isVisible.about ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInUp">About Me</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scaleX"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 transform">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <User className="w-8 h-8 text-blue-400 animate-pulse" />
                </div>
                <div>
                  {/* About me paragraphs - UPDATE THESE WITH YOUR PERSONAL STORY */}
                  <p className="text-lg text-gray-300 leading-relaxed mb-6 animate-fadeIn delay-300">
                    I am a passionate and dedicated Software Engineering undergraduate at the University of Jaffna, 
                    currently in my final year. My expertise spans across multiple domains including full-stack web development, 
                    embedded systems programming, and artificial intelligence/machine learning.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6 animate-fadeIn delay-500">
                    With a strong foundation in object-oriented programming and modern development frameworks, 
                    I enjoy creating innovative solutions that bridge the gap between software and hardware. 
                    My experience includes developing scalable web applications, working with microcontrollers, 
                    and implementing AI/ML algorithms for real-world applications.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed animate-fadeIn delay-700">
                    I am always eager to learn new technologies and take on challenging projects that push the 
                    boundaries of what's possible. Currently, I'm working on an e-commerce platform and exploring 
                    advanced machine learning techniques for computer vision applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EDUCATION SECTION ==================== */}
      <section id="education" className={`py-16 transition-all duration-1000 ${isVisible.education ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInUp">Education</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scaleX"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 transform">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <GraduationCap className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  {/* Education details - UPDATE WITH YOUR ACTUAL EDUCATION INFO */}
                  <h3 className="text-2xl font-bold text-white mb-2 animate-fadeIn">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-lg text-purple-400 font-semibold mb-2 animate-fadeIn delay-300">University of Jaffna</p>
                  <p className="text-gray-400 mb-4 animate-fadeIn delay-500">2022 – Present (Final Year)</p>
                  <p className="text-gray-300 leading-relaxed animate-fadeIn delay-700">
                    Comprehensive program covering software engineering principles, computer systems architecture, 
                    algorithms and data structures, database systems, web development, mobile application development, 
                    artificial intelligence, and embedded systems programming. Actively involved in research projects 
                    and practical applications of emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TECHNICAL SKILLS SECTION ==================== */}
      <section id="skills" className={`py-16 bg-gray-800/50 backdrop-blur-sm transition-all duration-1000 ${isVisible.skills ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInUp">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scaleX"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* ==================== PROGRAMMING LANGUAGES BLOCK ==================== */}
            <div className="bg-gradient-to-br from-blue-900/80 to-indigo-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-300 relative overflow-hidden">
              {/* Floating logos inside Programming Languages block */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Java logo */}
                <div className="absolute top-4 right-4 animate-bounce delay-500">
                  <Coffee className="w-8 h-8 text-orange-400/40" />
                </div>
                {/* Python logo */}
                <div className="absolute bottom-8 right-6 animate-bounce delay-1000">
                  <Terminal className="w-7 h-7 text-yellow-400/40" />
                </div>
                {/* JavaScript logo */}
                <div className="absolute top-20 right-16 animate-bounce delay-1500">
                  <FileCode className="w-6 h-6 text-yellow-300/40" />
                </div>
                {/* C++ logo */}
                <div className="absolute top-32 right-4 animate-bounce delay-2000">
                  <Code className="w-7 h-7 text-blue-300/40" />
                </div>
              </div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Programming Languages</h3>
              </div>
              <div className="space-y-4 relative z-10">
                {/* Programming languages list - ADD/REMOVE LANGUAGES AS NEEDED */}
                {['Java', 'Python', 'C++', 'JavaScript', 'Embedded C', 'MATLAB'].map((skill, index) => (
                  <div key={skill} className={`flex items-center animate-fadeIn`} style={{animationDelay: `${index * 100}ms`}}>
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== WEB DEVELOPMENT BLOCK ==================== */}
            <div className="bg-gradient-to-br from-green-900/80 to-emerald-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-500 relative overflow-hidden">
              {/* Floating logos inside Web Development block */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* React logo */}
                <div className="absolute top-4 right-4 animate-bounce delay-700">
                  <Globe className="w-8 h-8 text-cyan-400/40" />
                </div>
                {/* Node.js logo */}
                <div className="absolute bottom-8 right-6 animate-bounce delay-1200">
                  <Server className="w-7 h-7 text-green-400/40" />
                </div>
                {/* CSS logo */}
                <div className="absolute top-20 right-16 animate-bounce delay-1700">
                  <Palette className="w-6 h-6 text-blue-400/40" />
                </div>
                {/* Express.js logo */}
                <div className="absolute top-32 right-4 animate-bounce delay-2200">
                  <Layers className="w-7 h-7 text-teal-400/40" />
                </div>
              </div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                  <Monitor className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Web Development</h3>
              </div>
              <div className="space-y-4 relative z-10">
                {/* Web technologies list - ADD/REMOVE TECHNOLOGIES AS NEEDED */}
                {['React', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Tailwind CSS'].map((skill, index) => (
                  <div key={skill} className={`flex items-center animate-fadeIn`} style={{animationDelay: `${index * 100}ms`}}>
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ==================== DATABASE & SYSTEMS BLOCK ==================== */}
            <div className="bg-gradient-to-br from-purple-900/80 to-violet-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-700 relative overflow-hidden">
              {/* Floating logos inside Database & Systems block */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* MySQL/MongoDB logo */}
                <div className="absolute top-4 right-4 animate-bounce delay-900">
                  <Database className="w-8 h-8 text-blue-400/40" />
                </div>
                {/* Arduino logo */}
                <div className="absolute bottom-8 right-6 animate-bounce delay-1400">
                  <Cpu className="w-7 h-7 text-teal-400/40" />
                </div>
                {/* Git logo */}
                <div className="absolute top-20 right-16 animate-bounce delay-1900">
                  <Wrench className="w-6 h-6 text-orange-400/40" />
                </div>
                {/* Systems logo */}
                <div className="absolute top-32 right-4 animate-bounce delay-2400">
                  <Settings className="w-7 h-7 text-purple-300/40" />
                </div>
              </div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Database & Systems</h3>
              </div>
              <div className="space-y-4 relative z-10">
                {/* Database and systems list - ADD/REMOVE TECHNOLOGIES AS NEEDED */}
                {['MySQL', 'MongoDB', 'Arduino', 'Embedded Systems', 'Linux', 'Git'].map((skill, index) => (
                  <div key={skill} className={`flex items-center animate-fadeIn`} style={{animationDelay: `${index * 100}ms`}}>
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className={`py-16 transition-all duration-1000 ${isVisible.projects ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInUp">Projects</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scaleX"></div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

            {/* ==================== PROJECT PLACEHOLDERS ==================== */}
            {/* ==================== PROJECT CARDS ==================== */}
            {/* ADD YOUR ACTUAL PROJECTS HERE - Replace these placeholders with your real projects */}
            {/* ==================== BEAUTYBAY E-COMMERCE PROJECT ==================== */}
            <div className="bg-gradient-to-br from-pink-900/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-300 relative overflow-hidden">
              {/* Floating tech icons inside project card */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 right-4 animate-bounce delay-500">
                  <Globe className="w-6 h-6 text-cyan-400/30" />
                </div>
                <div className="absolute bottom-8 right-6 animate-bounce delay-1000">
                  <Database className="w-5 h-5 text-green-400/30" />
                </div>
                <div className="absolute top-20 right-16 animate-bounce delay-1500">
                  <Server className="w-5 h-5 text-blue-400/30" />
                </div>
              </div>
              
              <div className="relative z-10">
                {/* Project header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                      <Smartphone className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">BeautyBay</h3>
                      <p className="text-pink-400 font-semibold">Cosmetic E-Commerce Platform</p>
                    </div>
                  </div>
                  {/* Status badge */}
                  <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Ongoing
                  </div>
                </div>
                
                {/* Project description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Full-featured e-commerce platform for cosmetic products using the MERN stack, 
                  supporting product browsing, cart management, and secure checkout with modern UI/UX design.
                </p>
                
                {/* Key features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                      User authentication & product filtering
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                      Dynamic UI with React.js & Tailwind CSS
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                      Supabase integration for image storage
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                      API testing with Postman
                    </li>
                  </ul>
                </div>
                
                {/* Technology stack */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'Tailwind CSS', 'Postman', 'Supabase'].map((tech, index) => (
                      <span 
                        key={tech} 
                        className={`bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-medium animate-fadeIn`}
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project timeline */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                    May 2025 - Present
                  </div>
                  {/* Add GitHub link when available */}
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com/kaveeshagimhan/Cosmetic-E-commerce-platform.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <button className="text-gray-400 hover:text-pink-400 transition-colors opacity-50 cursor-not-allowed">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== PROJECT PLACEHOLDER #2 ==================== */}
            {/* ADD YOUR SECOND PROJECT HERE - Replace this placeholder with your next project */}
            {/* ==================== SMART WATER MANAGEMENT SYSTEM PROJECT ==================== */}
            <div className="bg-gradient-to-br from-teal-900/80 to-cyan-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-500 relative overflow-hidden">
              {/* Floating tech icons inside project card */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 right-4 animate-bounce delay-600">
                  <Cpu className="w-6 h-6 text-orange-400/30" />
                </div>
                <div className="absolute bottom-8 right-6 animate-bounce delay-1100">
                  <Database className="w-5 h-5 text-blue-400/30" />
                </div>
                <div className="absolute top-20 right-16 animate-bounce delay-1600">
                  <Globe className="w-5 h-5 text-teal-400/30" />
                </div>
              </div>
              
              <div className="relative z-10">
                {/* Project header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                      <Cpu className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Smart Water Management System</h3>
                      <p className="text-teal-400 font-semibold">IoT Based Automated System</p>
                    </div>
                  </div>
                  {/* Status badge */}
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Completed
                  </div>
                </div>
                
                {/* Project description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Real-time water monitoring system using ESP32 and sensors to track temperature, TDS, water level, 
                  and inflow/outflow rates with responsive React.js dashboard and remote control capabilities.
                </p>
                
                {/* Key features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                      Real-time monitoring with ESP32 and sensors
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                      Responsive React.js dashboard with Firebase
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                      Remote motor and solenoid valve control
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                      Live data visualization with interactive charts
                    </li>
                  </ul>
                </div>
                
                {/* Technology stack */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['ReactJS', 'Embedded C', 'Arduino', 'Firebase'].map((tech, index) => (
                      <span 
                        key={tech} 
                        className={`bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium animate-fadeIn`}
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project timeline */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Jan 2025 - May 2025
                  </div>
                  {/* Add GitHub link when available */}
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com/Dama-27/Real-Time-Household-Water-Management-System.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <button className="text-gray-400 hover:text-teal-400 transition-colors opacity-50 cursor-not-allowed">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
             {/* ==================== PROJECT PLACEHOLDER #3 ==================== */}
              {/* ConnectNow Project */}
      <div className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-300 relative overflow-hidden">
              {/* Floating tech icons inside project card */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-4 right-4 animate-bounce delay-500">
                  <Globe className="w-6 h-6 text-cyan-400/30" />
                </div>
                <div className="absolute bottom-8 right-6 animate-bounce delay-1000">
                  <Database className="w-5 h-5 text-green-400/30" />
                </div>
                <div className="absolute top-20 right-16 animate-bounce delay-1500">
                  <Server className="w-5 h-5 text-blue-400/30" />
                </div>
              </div>
              
              <div className="relative z-10">
                {/* Project header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                      <Video className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">ConnectNow</h3>
                      <p className="text-blue-400 font-semibold">Real-Time Video Conferencing App</p>
                    </div>
                  </div>
                  {/* Status badge */}
                  <div className="bg-blue-700/20 text-blue-200 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Completed
                  </div>
                </div>
                
                {/* Project description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Developed a browser-based video conferencing platform supporting real-time multi-user communication with advanced features.
                </p>
                
                {/* Key features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      Real-time multi-user video communication
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      Screen sharing and in-call messaging
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      Emoji reactions and recording functionality
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                      Interactive and responsive interface design
                    </li>
                  </ul>
                </div>
                
                {/* Technology stack */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['WebRTC', 'Socket.IO', 'JavaScript', 'NodeJS', 'Railway'].map((tech, index) => (
                      <span 
                        key={tech} 
                        className={`bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium animate-fadeIn`}
                        style={{animationDelay: `${index * 100}ms`}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project timeline */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                    Jan 2025 - May 2025
                  </div>
                  {/* Add GitHub link when available */}
                  <div className="flex space-x-3">
                    <a 
                      href="https://github.com/kaveeshagimhan/Real-Time-Video-Conferencing-Application-using-WebRTC.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href = "https://webrtc-25c52.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors opacity-50"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== AI/ML ENGINEERING SECTION ==================== */}
      <section id="ai-ml" className={`py-16 bg-gray-800/50 backdrop-blur-sm transition-all duration-1000 ${isVisible['ai-ml'] ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInUp">AI/ML Engineering</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scaleX"></div>
          </div>

          <div className="flex flex-col items-center mb-16 space-y-12">
            {/* AI/ML Tools & Frameworks */}
            <div className="max-w-2xl w-full bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-indigo-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInLeft">
                <div className="flex items-center mb-6">
                  <Brain className="w-8 h-8 text-indigo-400 mr-3 animate-pulse" />
                  <h3 className="text-2xl font-bold text-white">Tools & Frameworks</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* AI/ML tools list - ADD/REMOVE TOOLS AS NEEDED */}
                  {['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Keras', 'Pandas', 'NumPy', 'Matplotlib'].map((tool, index) => (
                    <div key={tool} className={`flex items-center animate-fadeIn`} style={{animationDelay: `${index * 100}ms`}}>
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-gray-300">{tool}</span>
                    </div>
                  ))}
              </div>
            </div>
            
            
            <div className="text-center mb-4">
            <h2 className="text-4xl sm:text-3xl font-bold text-white mb-4 animate-slideInUp">AI/ML Projects</h2>
            <div className="w-24 h-0.5 bg-blue-400 mx-auto rounded-full animate-scaleX"></div>
          </div>

            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* ==================== PROJECT PLACEHOLDER AI #1 ==================== */}
              {/* ==================== Research PROJECT==================== */}
              <div className="bg-gradient-to-br from-emerald-800/80 to-cyan-700/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-dashed border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-500 relative overflow-hidden">
                {/* Floating tech icons inside project card */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-4 right-4 animate-bounce delay-600">
                    <Cpu className="w-6 h-6 text-orange-400/30" />
                  </div>
                  <div className="absolute bottom-8 right-6 animate-bounce delay-1100">
                    <Database className="w-5 h-5 text-blue-400/30" />
                  </div>
                  <div className="absolute top-20 right-16 animate-bounce delay-1600">
                    <Globe className="w-5 h-5 text-teal-400/30" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  {/* Project header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                        <Cpu className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Optimizing AI Algorithms for Low-Power and Edge Devices in Resource-Constrained Environments  </h3>
                        <p className="text-teal-400 font-semibold">Edge Device Base AI Algorithms</p>
                      </div>
                    </div>
                    {/* Status badge */}
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Ongoing Research 
                    </div>
                  </div>
                  
                  {/* Project description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    optimizing AI model selection for low-power, resource-constrained environments such as edge and embedded systems. The system intelligently matches input data and device specs with the most efficient AI model using a lightweight Transformer classifier and a custom model library.
                  </p>
                  
                  {/* Key features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                        Lightweight Transformer-based model selector for edge AI deployment
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                        Model library with metadata
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                        Model ID system for easy referencing and selection
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                        Tailored for embedded systems and real-time inference under hardware constraints
                      </li>
                    </ul>
                  </div>
                  
                  {/* Technology stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python ', 'C', 'TFLite', 'PyTorch', 'LM Studio'].map((tech, index) => (
                        <span 
                          key={tech} 
                          className={`bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium animate-fadeIn`}
                          style={{animationDelay: `${index * 100}ms`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project timeline */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Jan 2025 to Present
                    </div>
                    {/* Add GitHub link when available */}
                    <div className="flex space-x-3">
                      <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-teal-400 transition-colors cursor-not-allowed"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <button className="text-gray-400 hover:text-teal-400 transition-colors opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
               {/* ==================== PROJECT PLACEHOLDER AI #2 ==================== */}
              {/* ==================== Toyo AI==================== */}
              <div className="bg-gradient-to-br from-indigo-800/80 to-fuchsia-700/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-dashed border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-500 relative overflow-hidden">
                {/* Floating tech icons inside project card */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-4 right-4 animate-bounce delay-600">
                    <Cpu className="w-6 h-6 text-orange-400/30" />
                  </div>
                  <div className="absolute bottom-8 right-6 animate-bounce delay-1100">
                    <Database className="w-5 h-5 text-blue-400/30" />
                  </div>
                  <div className="absolute top-20 right-16 animate-bounce delay-1600">
                    <Globe className="w-5 h-5 text-teal-400/30" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  {/* Project header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                        <MessageSquare className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Toyo AI Assistant  </h3>
                        <p className="text-purple-400 font-semibold">Chat & Translator Web App</p>
                      </div>
                    </div>
                    {/* Status badge */}
                    <div className="bg-green-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Completed
                    </div>
                  </div>
                  
                  {/* Project description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Developed a conversational AI web app featuring a chatbot powered by Gemini and a multilingual translator supporting 20+ languages via dynamic prompt chaining. Built using Streamlit for the frontend and LangChain for structured language model interaction and memory management.
                  </p>
                  
                  {/* Key features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                        Conversational AI chatbot powered by Gemini API
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                        Multilingual translator supporting 20+ languages
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                        Streamlit frontend with LangChain integration
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                        Persistent chat history and memory management
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
                        Secure API key configuration and cloud deployment
                      </li>
                    </ul>
                  </div>
                  
                  {/* Technology stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Streamlit', 'LangChain', 'Gemini API'].map((tech, index) => (
                        <span 
                          key={tech} 
                          className={`bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium animate-fadeIn`}
                          style={{animationDelay: `${index * 100}ms`}}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project timeline */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                      July 2025
                    </div>
                    {/* Add GitHub link when available */}
                    <div className="flex space-x-3">
                      <a 
                        href = "https://github.com/kaveeshagimhan/Toyo-Chat.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <button className="text-gray-400 hover:text-purple-400 transition-colors opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CURRENT LEARNING GOALS SECTION ==================== */}
      <section id="learning" className={`py-16 transition-all duration-1000 ${isVisible.learning ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInUp">Current Learning Goals</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scaleX"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Learning Goals Block */}
            <div className="bg-gradient-to-br from-teal-900/80 to-cyan-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-teal-400/50 transition-all duration-500 hover:scale-105 transform animate-slideInUp delay-300">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-teal-400 mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold text-white">Areas of Focus</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Learning areas list - UPDATE WITH YOUR CURRENT LEARNING GOALS */}
                {['Computer Vision', 'Natural Language Processing', 'Image Processing', 'Data Analysis'].map((area, index) => (
                  <div key={area} className={`flex items-center animate-fadeIn`} style={{animationDelay: `${index * 100}ms`}}>
                    <div className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-300">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className={`py-16 bg-gray-800/50 backdrop-blur-sm transition-all duration-1000 ${isVisible.contact ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 animate-slideInUp">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full animate-scaleX"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ==================== CONTACT INFORMATION ==================== */}
            <div className="animate-slideInLeft">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-lg text-gray-300 mb-8">
                I'm always interested in discussing new opportunities, collaborations, or just having 
                a conversation about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                {/* Email contact - YOUR ACTUAL EMAIL IS ALREADY UPDATED */}
                <div className="flex items-center animate-fadeIn delay-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:kaveeshagimhan20@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                      kaveeshagimhan20@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone contact - UPDATE WITH YOUR ACTUAL PHONE NUMBER */}
                <div className="flex items-center animate-fadeIn delay-400">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a href="tel:+94776936850" className="text-gray-400 hover:text-green-400 transition-colors">
                      +94 776936850
                    </a>
                  </div>
                </div>
                
                {/* GitHub contact - YOUR ACTUAL GITHUB IS ALREADY UPDATED */}
                <div className="flex items-center animate-fadeIn delay-500">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                    <Github className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <a 
                      href="https://github.com/kaveeshagimhan?tab=overview&from=2024-12-01&to=2024-12-31" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      github.com/kaveeshagimhan
                    </a>
                  </div>
                </div>
                
                {/* LinkedIn contact - YOUR ACTUAL LINKEDIN IS ALREADY UPDATED */}
                <div className="flex items-center animate-fadeIn delay-700">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 animate-pulse">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/kaveesha-gimhan-thennakoon-26572832b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/kaveesha-gimhan-thennakoon
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== CONTACT FORM ==================== */}
            <div className="bg-gradient-to-br from-gray-800/80 to-blue-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 animate-slideInRight">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Name input field */}
                <div className="animate-fadeIn delay-300">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                
                {/* Email input field */}
                <div className="animate-fadeIn delay-500">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                {/* Message textarea field */}
                <div className="animate-fadeIn delay-700">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Your message here..."
                  />
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transform animate-fadeIn delay-1000"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900/90 backdrop-blur-sm text-white py-12 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer branding */}
            <div className="text-center md:text-left mb-6 md:mb-0 animate-fadeIn">
              <h3 className="text-2xl font-bold mb-2 text-blue-400">Kaveesha Gimhan</h3>
              <p className="text-gray-400">Software Engineering Undergraduate</p>
            </div>
            
            {/* Social media links - ALL LINKS ARE ALREADY UPDATED WITH YOUR ACTUAL PROFILES */}
            <div className="flex space-x-6 animate-fadeIn delay-300">
              <a href="mailto:kaveeshagimhan20@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+94776936850" className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110 transform">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://github.com/kaveeshagimhan?tab=overview&from=2024-12-01&to=2024-12-31" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 transform">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/kaveesha-gimhan-thennakoon-26572832b/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110 transform">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Copyright notice */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 animate-fadeIn delay-500">
            <p>&copy; 2025 Kaveesha Gimhan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;


