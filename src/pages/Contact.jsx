import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent. We will contact you at ${formData.email} shortly.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const whatsappNumber = "94770000000"; 
    const whatsappMessage = "Hello! I need help with the Lk Supply Chain platform.";

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans overflow-x-hidden">
            
            {/* --- HERO SECTION --- */}
            <section className='relative pt-32 pb-24 bg-[#f8fafc] overflow-hidden flex items-center'>
                <div className='absolute inset-0 bg-gradient-to-br from-teal-50 via-green-50 to-emerald-100 opacity-60'></div>
                <div className='absolute inset-0 opacity-10' style={{backgroundImage: "radial-gradient(#2d9b6x 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
                
                <div className='container relative z-10 px-5 mx-auto max-w-7xl lg:px-8'>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className='max-w-3xl mx-auto text-center'>
                        <motion.div variants={fadeIn} className='inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/70 backdrop-blur-md border border-white/50 rounded-full shadow-sm'>
                            <span className='text-xs font-bold tracking-wider text-green-900 uppercase'>Support & Inquiries</span>
                        </motion.div>
                        <motion.h2 variants={fadeIn} className='mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl drop-shadow-sm'>
                            Let's Build the <br />
                            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-500'>Future Together</span>
                        </motion.h2>
                        <motion.p variants={fadeIn} className='max-w-2xl mx-auto text-lg leading-relaxed text-gray-600 lg:text-xl'>
                            Have questions about our supply chain, seeds, or services? Fill out the form and our team will get back to you within 24 hours.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* --- CONTACT GRID --- */}
            <section className="relative z-20 pb-32 -mt-8">
                <div className="container px-5 mx-auto max-w-7xl lg:px-8">
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="grid grid-cols-1 overflow-hidden bg-white/60 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[3rem] lg:grid-cols-5">
                        
                        {/* LEFT: Contact Info (Takes 2 cols) */}
                        <div className="relative flex flex-col justify-between p-10 lg:p-16 text-white bg-gradient-to-br from-teal-600 to-green-600 lg:col-span-2 overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black rounded-full mix-blend-overlay filter blur-3xl opacity-10 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <h3 className="mb-4 text-3xl font-extrabold">Contact Info</h3>
                                <p className="mb-12 text-teal-100">Reach out directly through our dedicated support channels.</p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-5 group">
                                        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 text-white bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold tracking-wider text-teal-200 uppercase">Phone</p>
                                            <p className="text-xl font-bold">+94 11 234 5678</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 text-white bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold tracking-wider text-teal-200 uppercase">Email</p>
                                            <p className="text-xl font-bold">support@lksupply.lk</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 text-white bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform shadow-inner">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold tracking-wider text-teal-200 uppercase">Address</p>
                                            <p className="text-xl font-bold">123 Agrarian Way, CM 07</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Contact Form (Takes 3 cols) */}
                        <div className="p-10 lg:p-16 lg:col-span-3 bg-white/40">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-500 uppercase">First Name</label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Danushka" required className="w-full px-5 py-4 transition-all bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xs font-bold tracking-wide text-gray-500 uppercase">Last Name</label>
                                        <input type="text" placeholder="Perera" className="w-full px-5 py-4 transition-all bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-500 uppercase">Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="danushkaper@gmail.com" required className="w-full px-5 py-4 transition-all bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm" />
                                </div>

                                <div>
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-500 uppercase">Subject</label>
                                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-5 py-4 transition-all bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-700 shadow-sm appearance-none">
                                        <option value="">Select a topic module</option>
                                        <option value="seeds">Buying Seeds / Products</option>
                                        <option value="logistics">Dashboard Logistics Support</option>
                                        <option value="partnership">API / Partnership Inquiry</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-500 uppercase">Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="How can we help you?" required className="w-full px-5 py-4 transition-all bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm resize-none"></textarea>
                                </div>

                                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 text-lg font-bold text-white transition-all shadow-xl bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl hover:shadow-teal-500/30">
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- FAQ SECTION --- */}
            <section className="py-24 bg-white">
                <div className="container px-5 mx-auto max-w-4xl lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16 text-center">
                        <span className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-widest text-teal-800 uppercase bg-teal-100 rounded-full">Knowledge Base</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Frequently Asked Questions</h2>
                    </motion.div>
                    
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                        {[
                            { q: "How do I track my seed order?", a: "You can track your order status directly from your profile dashboard under 'Recent Orders'. Real-time map tracking is also available for bulk shipments." },
                            { q: "Do you deliver to remote farming areas?", a: "Yes, our highly robust logistics network covers all 25 districts in Sri Lanka, including specialized delivery chains for remote agrarian zones." },
                            { q: "Are the seeds certified?", a: "Absolutely. every single batch of seeds listed on the platform is rigorously verified and certified by the Department of Agriculture." }
                        ].map((faq, index) => (
                            <motion.div variants={fadeIn} key={index} className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl hover:border-teal-200 group cursor-pointer">
                                <h3 className="mb-3 text-xl font-bold text-gray-800 flex items-center justify-between">
                                    {faq.q}
                                    <span className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors">+</span>
                                </h3>
                                <p className="text-base leading-relaxed text-gray-600">{faq.a}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="fixed z-50 flex items-center justify-center transition-all duration-300 transform shadow-2xl bottom-8 right-8 w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full hover:scale-110 hover:-translate-y-2 group shadow-[#25D366]/40" aria-label="Chat with us on WhatsApp">
                <span className="absolute px-4 py-2 mb-3 text-xs font-bold tracking-wider text-white uppercase transition-opacity duration-300 transform -translate-x-1/2 bg-gray-900 rounded-xl opacity-0 pointer-events-none -top-12 left-1/2 group-hover:opacity-100 whitespace-nowrap shadow-xl">Chat with Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
        </div>
    );
};

export default Contact;