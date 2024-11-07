import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ParallaxSection from '../components/ParallaxSection';
import GlassCard from '../components/GlassCard';
import Card3D from '../components/Card3D';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+91 (970) 609-4667',
      link: 'tel:+15551234567',
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'info@designbydarpan.com',
      link: 'mailto:info@designbydarpan.com',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Address',
      content: 'H No-176, Rajgarh Road, Guwahati, Assam. Pin -781007',
      link: 'https://maps.app.goo.gl/rY23RdV4VanwfwDj8',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <ParallaxSection speed={0.5}>
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-transparent" />
          </div>
        </ParallaxSection>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-8 rounded-2xl max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Get in Touch
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Let's discuss how we can transform your space into something
              extraordinary
            </p>
          </GlassCard>
        </div>
      </div>

      {/* Contact Section */}
      <section
        ref={ref}
        className={`py-20 transition-opacity duration-1000 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <Card3D>
                <GlassCard className="p-8 rounded-xl">
                  {/* <h2 className="text-3xl font-bold text-gradient mb-8"> */}
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 inline-block text-transparent bg-clip-text mb-8">
                    Contact Information
                  </h2>
                  <div className="space-y-8 mb-12">
                    {contactInfo.map((info) => (
                      <a
                        key={info.title}
                        href={info.link}
                        className="flex items-start space-x-4 text-gray-600 hover:text-gray-900 group"
                      >
                        <div className="flex-shrink-0 p-4 bg-indigo-100 rounded-lg text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gradient">
                            {info.title}
                          </h3>
                          <p>{info.content}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </GlassCard>
              </Card3D>
            </div>

            {/* Contact Form */}
            <div>
              <Card3D>
                <GlassCard className="p-8 rounded-xl">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-violet-500 to-purple-600 inline-block text-transparent bg-clip-text mb-8">
                    {/* <h2 className="text-3xl  font-bold text-gray-400 mb-4"> */}
                    Send Us a Message
                  </h2>
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Service Interested In
                      </label>
                      <select
                        name="service"
                        id="service"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Design</option>
                        <option value="styling">Interior Styling</option>
                        <option value="consultation">
                          Design Consultation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-white/50 backdrop-blur-sm"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg transform-gpu transition-all duration-300 hover:-translate-y-1'
                      }`}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5 animate-float" />
                        </>
                      )}
                    </button>

                    {submitStatus === 'success' && (
                      <p className="text-green-600 text-center">
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    )}

                    {submitStatus === 'error' && (
                      <p className="text-red-600 text-center">
                        There was an error sending your message. Please try
                        again.
                      </p>
                    )}
                  </form>
                </GlassCard>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <Card3D>
          <div className="rounded-xl overflow-hidden h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.16594091906705!2d91.77013070981273!3d26.170026920167828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5975b0227283%3A0x6d62d558ab262e7c!2sIndisoft%20Solutions!5e0!3m2!1sen!2sin!4v1730657922528!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </Card3D>
      </section>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent opacity-20 pointer-events-none" />
      <div className="fixed -bottom-12 -left-12 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed -bottom-12 -right-12 w-48 h-48 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}



// To Name: {{to_name}}
// From Name: {{from_name}}
// From Email: {{from_email}}
// Phone: {{phone}}
// Service: {{service}}
// Message: {{message}}