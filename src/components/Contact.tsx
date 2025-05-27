import React, { useState, FormEvent, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { contactInfo, locations } from '../data';
import { Phone, Mail, Clock, Send, Bug, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import EmailFallback from './EmailFallback';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'generator',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [showDebug, setShowDebug] = useState(false);
  const [debugResult, setDebugResult] = useState<{success?: boolean; message?: string} | null>(null);

  // Check for admin mode with key combo (Ctrl+Shift+D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setShowDebug(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Map the EmailJS field names to our form state
    const fieldMap: Record<string, string> = {
      'user_name': 'name',
      'user_email': 'email',
      'user_phone': 'phone',
      'service_type': 'service',
      'message': 'message'
    };

    const stateField = fieldMap[name] || name;
    setFormData((prev) => ({ ...prev, [stateField]: value }));
  };

  // Test the webhook directly
  const testWebhook = async () => {
    setDebugResult(null);
    setIsSubmitting(true);

    try {
      // Try all endpoints in sequence
      let success = false;

      // 1. Try the simple endpoint first (most likely to succeed)
      try {
        console.log('Testing simple-discord endpoint...');
        const simpleResponse = await fetch('/api/simple-discord', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'Test User',
            email: 'test@example.com',
            message: 'This is a test message from the debug panel',
            service: 'Testing'
          }),
        });

        const simpleData = await simpleResponse.json().catch(() => ({ error: 'Failed to parse response' }));

        if (simpleResponse.ok) {
          setDebugResult({
            success: true,
            message: `Simple Discord endpoint success! ${simpleData.message || 'Message sent'}`
          });
          success = true;
        } else {
          console.warn('Simple Discord test failed, trying direct endpoint...');
        }
      } catch (simpleError) {
        console.error('Error testing simple endpoint:', simpleError);
        // Continue to next endpoint
      }

      // 2. Try the direct Discord endpoint if simple failed
      if (!success) {
        try {
          console.log('Testing direct Discord endpoint...');
          const directResponse = await fetch('/api/discord', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'Test User',
              email: 'test@example.com',
              message: 'This is a test message from the debug panel',
              service: 'Testing'
            }),
          });

          const directData = await directResponse.json().catch(() => ({ error: 'Failed to parse response' }));

          if (directResponse.ok) {
            setDebugResult({
              success: true,
              message: `Direct Discord endpoint success! ${directData.message || 'Message sent'}`
            });
            success = true;
          } else {
            console.warn('Direct Discord test failed, trying test-webhook endpoint...');
          }
        } catch (directError) {
          console.error('Error testing direct endpoint:', directError);
          // Continue to fallback
        }
      }

      // Fallback to the test-webhook endpoint
      const response = await fetch('/api/test-webhook');
      const data = await response.json();

      if (response.ok) {
        setDebugResult({
          success: true,
          message: `Success! ${data.message}`
        });
      } else {
        setDebugResult({
          success: false,
          message: `Error: ${data.error} - ${data.details || ''}`
        });
      }
    } catch (error) {
      setDebugResult({
        success: false,
        message: `Exception: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("4aPK-KWk8Vh3rcA7K"); // EmailJS public key
  }, []);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      if (!formRef.current) {
        throw new Error('Form reference is not available');
      }

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_abhijitpower', // EmailJS service ID
        'template_contact_form', // EmailJS template ID
        formRef.current,
        '4aPK-KWk8Vh3rcA7K' // EmailJS public key
      );

      if (result.text !== 'OK') {
        throw new Error(`Failed to send email: ${result.text}`);
      }

      console.log('Email sent successfully:', result.text);

      // Set success message
      setSubmitMessage('Thank you for your message! We will get back to you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'generator',
      });

      // Clear success message after some time
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);

    } catch (error) {
      console.error('Error in form submission:', error);

      // Show a specific error message
      if (error instanceof Error) {
        setSubmitError(
          `There was an error sending your message: ${error.message}. Please try again or contact us directly.`
        );
      } else {
        setSubmitError(
          'There was an error sending your message. Please try again or contact us directly using the phone number or email listed above.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background with pattern and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-primary-dark/80 z-10"></div>
      <div className="absolute inset-0 bg-[url('/assets/pattern-bg.svg')] opacity-10 z-20"></div>
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/contact-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-30">
        <div className="flex flex-col items-center mb-12">
          <span className="text-sm font-medium text-white bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4">Get In Touch</span>
          <h2 className="section-title text-white">Contact Us</h2>
          <p className="text-gray-300 max-w-2xl text-center mt-4">Have questions about our products or services? Our team is ready to assist you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-xl">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-5 flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2 text-white">Phone</h4>
                    <div className="space-y-2">
                      <a
                        href={`tel:${contactInfo.phone.gensetSales}`}
                        className="block text-gray-300 hover:text-primary transition-colors"
                      >
                        <span className="text-sm text-gray-400">{contactInfo.phoneLabels.gensetSales}:</span><br />
                        <span className="text-lg">{contactInfo.phone.gensetSales}</span>
                      </a>
                      <a
                        href={`tel:${contactInfo.phone.tractorSales}`}
                        className="block text-gray-300 hover:text-primary transition-colors"
                      >
                        <span className="text-sm text-gray-400">{contactInfo.phoneLabels.tractorSales}:</span><br />
                        <span className="text-lg">{contactInfo.phone.tractorSales}</span>
                      </a>
                      <a
                        href={`tel:${contactInfo.phone.serviceSpare}`}
                        className="block text-gray-300 hover:text-primary transition-colors"
                      >
                        <span className="text-sm text-gray-400">{contactInfo.phoneLabels.serviceSpare}:</span><br />
                        <span className="text-lg">{contactInfo.phone.serviceSpare}</span>
                      </a>
                      <a
                        href={`tel:${contactInfo.phone.headOfDealership}`}
                        className="block text-gray-300 hover:text-primary transition-colors"
                      >
                        <span className="text-sm text-gray-400">{contactInfo.phoneLabels.headOfDealership}:</span><br />
                        <span className="text-lg">{contactInfo.phone.headOfDealership}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-5 flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2 text-white">Email</h4>
                    {contactInfo.email.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-gray-300 hover:text-primary transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mr-5 flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-2 text-white">Working Hours</h4>
                    <p className="text-gray-300">{contactInfo.hours}</p>
                    {/*<p className="text-gray-300">Sunday: Closed</p>*/}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h4 className="font-medium text-xl mb-4 text-white">Visit Our Offices</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {locations.map(location => (
                    <div key={location.id} className="bg-white/5 rounded-lg p-4">
                      <h5 className="font-medium mb-2">{location.name}</h5>
                      <p className="text-gray-300 text-sm mb-3">{location.address}</p>
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline inline-flex items-center"
                      >
                        Get Directions <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>

              {submitMessage && (
                <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6">
                  {submitMessage}
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
                  <p className="mb-2">{submitError}</p>
                  <EmailFallback
                    name={formData.name}
                    email={formData.email}
                    phone={formData.phone}
                    message={formData.message}
                    service={formData.service}
                    contactEmail={contactInfo.email[0]}
                  />
                </div>
              )}

              {/* Debug panel for administrators */}
              {showDebug && (
                <div className="mb-6 p-4 border border-gray-300 rounded-md bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold flex items-center">
                      <Bug className="h-4 w-4 mr-2" />
                      Admin Debug Panel
                    </h4>
                    <button
                      type="button"
                      onClick={() => setShowDebug(false)}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Close
                    </button>
                  </div>

                  <div className="mb-4">
                    <button
                      type="button"
                      onClick={testWebhook}
                      disabled={isSubmitting}
                      className="btn bg-gray-700 text-white hover:bg-gray-800 text-xs py-1 px-3"
                    >
                      Test Discord Webhook
                    </button>
                  </div>

                  {debugResult && (
                    <div className={`text-xs p-2 rounded ${
                      debugResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {debugResult.message}
                    </div>
                  )}
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                {/* Hidden field for recipient email */}
                <input type="hidden" name="to_email" value="abhijit.genset@gmail.com" />
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="user_phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested In
                  </label>
                  <select
                    id="service"
                    name="service_type"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="generator">Mahindra Generators</option>
                    <option value="tractor">Gromax Tractors</option>
                    <option value="service">Service & Maintenance</option>
                    <option value="spare-parts">Spare Parts</option>
                    <option value="amc">AMC & Warranty</option>
                    <option value="installation">Installation & Commissioning</option>
                    <option value="finance">Finance Options</option>
                    <option value="dealership">Dealership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex items-center justify-center py-3 text-base"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    ) : (
                      <Send className="h-5 w-5 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Hidden debug button - triple click to show debug panel */}
                  <button
                    type="button"
                    onClick={() => setShowDebug(true)}
                    className="text-[0.5rem] text-gray-300 hover:text-gray-500 transition-colors mt-2 self-end"
                  >
                    Debug
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;