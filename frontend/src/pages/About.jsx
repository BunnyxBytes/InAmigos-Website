import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Award } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-900/70 z-10" />
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="About InAmigos"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="text-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Learn about our journey, our mission, and the passionate team driving change at InAmigos Foundation.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h4 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">Our Story</h4>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Started?</h2>
              <div className="space-y-4 text-gray-600 font-medium leading-relaxed">
                <p>2020 was a year when the world was struggling through the COVID-19 pandemic.</p>
                <p>During those difficult times, a group of high school students came together to help underprivileged communities using whatever resources they could arrange.</p>
                <p>They started conducting relief efforts, food distribution drives, and community support activities.</p>
                <p className="font-bold text-gray-900 pt-2">On 28 March 2021, InAmigos Foundation officially began its journey to serve society and empower communities through youth-led initiatives.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Community work" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us & Credentials */}
      <section className="py-20 bg-primary/5 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h4 className="text-primary font-bold text-sm tracking-wider uppercase mb-2">About Us</h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">InAmigos Foundation</h2>
            <p className="text-gray-700 font-medium text-lg leading-relaxed max-w-4xl mx-auto">
              InAmigos Foundation, founded on September 23, 2020, by Mr. Govind Shukla (Founder & CEO), is a Section 8 registered non-profit organization committed to creating lasting social impact. With its base in Chhattisgarh, the foundation operates across India, addressing critical societal issues through a network of dedicated professionals and volunteers.
            </p>
          </motion.div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">Our Credentials & Recognitions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Registered under Section 8 - Licensed by the Central Government',
                '80G & 12A Certified - Ensuring transparency, accountability, and tax exemptions for donors',
                'CSR-1 Registered - Eligible for corporate CSR partnerships',
                'NITI Aayog Registered - Aligning with national development goals',
                'IAF ISO 9001:2015 Certified - Committed to maintaining high-quality standards'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.split(' - ')[0]}</h4>
                    {item.split(' - ')[1] && <p className="text-gray-600 font-medium text-sm leading-relaxed">{item.split(' - ')[1]}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Initiatives & Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Driving change through dedicated projects across India.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Project SEVA', desc: 'Over 50,000+ meals and clothing distributed to the underprivileged.' },
              { title: 'Project BACHPANSHALA', desc: 'Bridging educational gaps by training underprivileged children in basic digital literacy, life skills, and school education support.' },
              { title: 'Project JEEV', desc: 'Dedicated to animal welfare, feeding 50+ stray animals daily through our volunteer network.' },
              { title: 'Project UDAAN', desc: 'Empowering women by collaborating with self-help groups in rural areas, promoting financial independence, skill development, and menstrual hygiene awareness.' },
              { title: 'Project PRAKRITI', desc: 'Advocating for sustainability and environmental conservation by planting 20,000+ saplings and supporting eco-friendly agriculture.' },
              { title: 'Project VIKAS', desc: 'Facilitating employment and skill development through internships in various fields, having trained 30,000+ interns in the last four years in data operations, finance, research, content writing, digital marketing, social work, and more.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 shrink-0">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 font-medium leading-relaxed mb-16">
              At InAmigos Foundation, we believe in the power of collective action. Our transparent operations and strong partnerships enable us to bring real, measurable change to society. Through our social media presence and online platforms, we ensure that every initiative reaches the right audience, encouraging more individuals and organizations to join our mission.
            </p>
            
            <div className="bg-primary/5 rounded-3xl p-10 md:p-14 border border-primary/10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Making a Difference</h2>
              <p className="text-gray-600 font-medium mb-10 text-lg max-w-2xl mx-auto">
                Whether through volunteering, partnerships, or donations, every contribution strengthens our cause and enables us to expand our reach and impact. Together, we can build a more inclusive, compassionate, and empowered society.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Involved Today
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
