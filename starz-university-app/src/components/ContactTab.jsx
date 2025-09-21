import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactTab = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    confirmEmail: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.fullname.trim()) return 'Full name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.confirmEmail.trim()) return 'Please confirm your email';
    if (formData.email !== formData.confirmEmail) return 'Email addresses do not match';
    if (!formData.message.trim()) return 'Message is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address';
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send the data to the university's contact endpoint
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        fullname: '',
        email: '',
        confirmEmail: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      {/* Header */}
      <div className="starz-primary p-4 mb-6 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <Mail size={28} className="starz-text-gold" />
          <h1 className="starz-font-serif text-2xl font-bold text-white">
            Contact Us
          </h1>
        </div>
        <p className="starz-font-sans text-gray-300">
          Get in touch with Starz University for inquiries about programs and services
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <MapPin size={20} className="starz-text-gold" />
            <h3 className="starz-font-serif font-semibold">Location</h3>
          </div>
          <p className="starz-font-sans text-sm text-gray-600">
            Starz L.L.C Cheeseman<br />
            Avenue Airfield, Sinkor<br />
            P.O. Box 1040<br />
            Monrovia, Liberia
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Phone size={20} className="starz-text-gold" />
            <h3 className="starz-font-serif font-semibold">Phone</h3>
          </div>
          <p className="starz-font-sans text-sm text-gray-600">
            (+231) 886-248-210<br />
            (+231) 777-271-313
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Mail size={20} className="starz-text-gold" />
            <h3 className="starz-font-serif font-semibold">Email</h3>
          </div>
          <p className="starz-font-sans text-sm text-gray-600">
            contact@starzit.com
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="starz-font-serif text-xl font-bold text-gray-800 mb-6">
          Write to Us
        </h2>
        <p className="starz-font-sans text-gray-600 mb-6">
          Contact us today if you have any questions or inquiries regarding our programs and services.
        </p>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
            <CheckCircle size={20} className="text-green-600" />
            <div>
              <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
              <p className="text-sm text-green-600">We'll get back to you as soon as possible.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
            <AlertCircle size={20} className="text-red-600" />
            <div>
              <h4 className="font-semibold text-red-800">Error Sending Message</h4>
              <p className="text-sm text-red-600">Please try again or contact us directly.</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Full Name *
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Confirm Email */}
          <div className="form-group">
            <label htmlFor="confirmEmail" className="form-label">
              Confirm Email Address *
            </label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={formData.confirmEmail}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Confirm your email address"
              required
            />
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-input form-textarea"
              placeholder="Enter your message or inquiry"
              rows={6}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`submit-btn w-full flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Additional Information */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="starz-font-serif font-semibold text-gray-800 mb-2">
            Office Hours
          </h4>
          <p className="starz-font-sans text-sm text-gray-600">
            Monday - Friday: 8:00 AM - 5:00 PM<br />
            Saturday: 9:00 AM - 2:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;

