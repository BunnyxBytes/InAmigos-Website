import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Utensils, Shield, Heart } from 'lucide-react';

const OurWorks = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const programs = [
    {
      title: 'Project SEVA',
      description: 'Over 50,000+ meals and clothing distributed to the underprivileged.',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      title: 'Project BACHPANSHALA',
      description: 'Bridging educational gaps by training underprivileged children in basic digital literacy, life skills, and school education support.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Project JEEV',
      description: 'Dedicated to animal welfare, feeding 50+ stray animals daily through our volunteer network.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      title: 'Project UDAAN',
      description: 'Empowering women by collaborating with self-help groups in rural areas, promoting financial independence, skill development, and menstrual hygiene awareness.',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      title: 'Project PRAKRITI',
      description: 'Advocating for sustainability and environmental conservation by planting 20,000+ saplings and supporting eco-friendly agriculture.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Project VIKAS',
      description: 'Facilitating employment and skill development through internships in various fields, having trained 30,000+ interns in the last four years in data operations, finance, research, content writing, digital marketing, social work, and more.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      color: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-primary">Works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover the initiatives and programs we run to support, educate, and empower the communities that need it most.
          </motion.p>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {programs.map((prog, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${prog.color}`}>
                  <prog.icon size={32} className={prog.iconColor} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{prog.title}</h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed">
                  {prog.description}
                </p>
                <button className="px-6 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors">
                  Support this program
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurWorks;
