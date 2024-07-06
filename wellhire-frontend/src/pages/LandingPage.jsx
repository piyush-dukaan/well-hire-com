import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    { name: 'Priya Sharma', college: 'IIT Delhi', text: "WellHire's OA question bank was instrumental in my preparation. I cleared OAs for 5 dream companies!" },
    { name: 'Rahul Verma', college: 'BITS Pilani', text: "The community support on WellHire is unparalleled. It's like having a personal prep team." },
    { name: 'Ananya Desai', college: 'NIT Trichy', text: "Thanks to WellHire, I felt confident tackling even the toughest OA questions. Landed my dream job at Google!" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-indigo-600"
        >
          WellHire
        </motion.h1>
        <nav className="hidden md:flex space-x-6">
          {['OA Questions', 'Companies', 'Community', 'About Us'].map((item, index) => (
            <motion.a 
              key={item}
              href="#"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-600 hover:text-indigo-600"
            >
              {item}
            </motion.a>
          ))}
        </nav>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-4"
        >
          <a href="#" className="text-gray-600 hover:text-indigo-600">Login</a>
          <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Get started</a>
        </motion.div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ace your tech OAs with WellHire
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Access real Online Assessment questions from top tech companies visiting tier 1 colleges across India. Prepare smarter, succeed faster.
              </p>
              <a href="#" className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition">
                Start Preparing Now
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 relative"
            >
              <img src="https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Students collaborating" className="rounded-lg shadow-2xl w-full h-auto" />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-xl"
              >
                <h3 className="text-lg font-semibold mb-2">OA Success Rate</h3>
                <p className="text-3xl font-bold text-indigo-600">85%</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose WellHire?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Real OA Questions', desc: 'Access actual questions asked in company OAs' },
                { title: 'Community Support', desc: 'Learn from peers and share experiences' },
                { title: 'Comprehensive Coverage', desc: 'Questions from all major tech companies' },
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { stat: '10,000+', desc: 'Students Helped' },
                { stat: '500+', desc: 'OA Questions' },
                { stat: '50+', desc: 'Top Companies' },
                { stat: '85%', desc: 'Success Rate' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-4xl font-bold mb-2">{item.stat}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <motion.div 
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg p-8 shadow-xl max-w-2xl mx-auto"
            >
              <p className="text-xl mb-4">"{testimonials[currentTestimonial].text}"</p>
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-gray-600">{testimonials[currentTestimonial].college}</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to ace your next OA?</h2>
            <p className="text-xl text-gray-600 mb-8">Join thousands of students preparing smarter with WellHire</p>
            <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition">
              Get Started for Free
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">WellHire</h4>
              <p className="text-gray-400">Empowering Indian students to ace their Online Assessments and land their dream tech jobs.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">OA Questions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;