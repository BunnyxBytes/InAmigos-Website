import React from 'react';
import { motion } from 'framer-motion';
import { HandHeart, GraduationCap, Gift, Mail, Phone, MapPin } from 'lucide-react';

const GetInvolved = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary py-16 border-b border-primary-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get <span className="text-secondary">Involved</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-white/90 max-w-2xl mx-auto font-medium"
          >
            Whether you want to volunteer your time, partner with us, or make a donation, your contribution makes a massive difference.
          </motion.p>
        </div>
      </section>

      {/* Ways to get involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all text-center flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <HandHeart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 font-medium mb-8 flex-grow">
                Join our network of passionate volunteers. Participate in food drives, teaching sessions, and awareness campaigns.
              </p>
              <a href="mailto:volunteer@inamigos.org" className="block w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-primary-dark transition-colors">
                Apply to Volunteer
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.2, duration: 0.6 } } }}
              className="p-8 rounded-2xl bg-secondary/10 border border-secondary/20 hover:shadow-lg transition-all text-center flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-secondary/30 text-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Internships</h3>
              <p className="text-gray-600 font-medium mb-8 flex-grow">
                Looking for experience? We offer internships in marketing, operations, social media, and on-ground coordination.
              </p>
              <a href="mailto:internships@inamigos.org" className="block w-full py-3 bg-gray-900 text-secondary font-bold rounded-md hover:bg-gray-800 transition-colors">
                View Open Positions
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { delay: 0.4, duration: 0.6 } } }}
              className="p-8 rounded-2xl bg-green-50 border border-green-100 hover:shadow-lg transition-all text-center flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Donate</h3>
              <p className="text-gray-600 font-medium mb-8 flex-grow">
                Every contribution counts. Your donations help us buy study materials, sanitary pads, and nutritious food.
              </p>
              <button className="block w-full py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition-colors">
                Donate Now
              </button>
            </motion.div>
          </div>
          
          {/* Contact Section */}
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Reach out to us</h2>
                <p className="text-gray-400 mb-8 font-medium">Have questions or want to discuss a partnership? We'd love to hear from you.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Call Us</p>
                      <p className="font-bold">+91 626 730 9902</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email Us</p>
                      <p className="font-bold break-all">inamigosfoundation@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={24} className="text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Visit Us</p>
                      <p className="font-bold text-sm leading-relaxed">Ward No. 5, Gram Post, Sipat Ujwal Nagar,<br />Bilaspur, Chhattisgarh - 495555</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Contact Us" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
