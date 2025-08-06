import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      detail: "hello@parkingpop.com",
      description: "Get in touch via email for general inquiries"
    },
    {
      icon: "📞",
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      description: "Speak directly with our support team"
    },
    {
      icon: "💬",
      title: "Live Chat",
      detail: "Available 24/7",
      description: "Instant support through our website chat"
    },
    {
      icon: "📍",
      title: "Visit Us",
      detail: "123 Innovation St, Tech City",
      description: "Drop by our headquarters for a meeting"
    }
  ];

  return (
    <div className="relative z-10 min-h-[calc(100vh-200px)] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl md:text-5xl tracking-tight text-foreground">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about our parking solutions? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <h2 className="mb-8 text-foreground">Contact Information</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="group p-6 bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl hover:bg-card/80 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-card-foreground group-hover:text-primary transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-primary/80 mb-1">{method.detail}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-primary/5 backdrop-blur-sm border border-primary/15 rounded-2xl">
              <h3 className="mb-3 text-foreground">Business Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-card/60 backdrop-blur-md border border-border/60 rounded-3xl shadow-xl shadow-primary/5">
              <h2 className="mb-8 text-foreground">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block mb-2 text-foreground">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full px-4 py-3 bg-input-background/80 backdrop-blur-sm border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 hover:border-primary/30 ${
                        focused === 'name' ? 'bg-input-background border-primary/40 shadow-lg shadow-primary/10' : 'border-border/60'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block mb-2 text-foreground">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      className={`w-full px-4 py-3 bg-input-background/80 backdrop-blur-sm border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 hover:border-primary/30 ${
                        focused === 'email' ? 'bg-input-background border-primary/40 shadow-lg shadow-primary/10' : 'border-border/60'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block mb-2 text-foreground">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3 bg-input-background/80 backdrop-blur-sm border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 hover:border-primary/30 ${
                        focused === 'phone' ? 'bg-input-background border-primary/40 shadow-lg shadow-primary/10' : 'border-border/60'
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block mb-2 text-foreground">Inquiry Type</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      onFocus={() => setFocused('inquiryType')}
                      onBlur={() => setFocused(null)}
                      className={`w-full px-4 py-3 bg-input-background/80 backdrop-blur-sm border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 hover:border-primary/30 ${
                        focused === 'inquiryType' ? 'bg-input-background border-primary/40 shadow-lg shadow-primary/10' : 'border-border/60'
                      }`}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="business">Business Partnership</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="feature">Feature Request</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <label className="block mb-2 text-foreground">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    required
                    className={`w-full px-4 py-3 bg-input-background/80 backdrop-blur-sm border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 hover:border-primary/30 ${
                      focused === 'subject' ? 'bg-input-background border-primary/40 shadow-lg shadow-primary/10' : 'border-border/60'
                    }`}
                    placeholder="What can we help you with?"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block mb-2 text-foreground">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 bg-input-background/80 backdrop-blur-sm border rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 hover:border-primary/30 resize-none ${
                      focused === 'message' ? 'bg-input-background border-primary/40 shadow-lg shadow-primary/10' : 'border-border/60'
                    }`}
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 focus:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({
                      name: '', email: '', phone: '', subject: '', message: '', inquiryType: 'general'
                    })}
                    className="px-8 py-4 bg-secondary/60 text-secondary-foreground rounded-xl hover:bg-secondary/80 focus:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all duration-200"
                  >
                    Clear Form
                  </button>
                </div>

                <p className="text-sm text-muted-foreground">
                  * Required fields. We'll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="mb-8 text-foreground">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300">
              <h3 className="mb-3 text-card-foreground">How quickly do you respond?</h3>
              <p className="text-muted-foreground text-sm">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
            
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300">
              <h3 className="mb-3 text-card-foreground">Do you offer phone support?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Our phone support is available Monday-Friday, 9 AM to 6 PM EST.
              </p>
            </div>
            
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300">
              <h3 className="mb-3 text-card-foreground">Can I schedule a demo?</h3>
              <p className="text-muted-foreground text-sm">
                Absolutely! Contact us to schedule a personalized demo of our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
