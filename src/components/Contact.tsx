import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1500);
  };
  
  return (
    <div className="notebook-card h-full">
      <div className="notebook-card-inner">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-1">Contact</h2>
          <div className="flex items-center">
            <div className="h-[2px] w-16 bg-accent-blue dark:bg-accent-yellow/70 mr-3"></div>
            <p className="font-caveat text-xl text-primary/70">Let's chat!</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-patrick text-lg mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="hand-drawn-border bg-white dark:bg-secondary/10 w-full py-2 px-3"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-patrick text-lg mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="hand-drawn-border bg-white dark:bg-secondary/10 w-full py-2 px-3"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-patrick text-lg mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="hand-drawn-border bg-white dark:bg-secondary/10 w-full py-2 px-3"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={formStatus === 'submitting'}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`hand-drawn-btn w-full ${
                  formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus === 'success' && (
                <div className="bg-accent-green p-3 rounded-lg text-center font-patrick">
                  <p>Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}
            </form>
          </div>
          
          <div>
            <div className="bg-white dark:bg-secondary/10 p-4 rounded-lg border-2 border-primary/60 dark:border-primary/40 h-full">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Get In Touch
              </h3>
              
              <div className="space-y-4 font-patrick">
                <div className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-3 mt-1">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <p className="text-primary/70 mb-1">Email</p>
                    <p className="text-lg">contact@janedoe.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-3 mt-1">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <p className="text-primary/70 mb-1">Location</p>
                    <p className="text-lg">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <p className="text-xl mb-3">Connect with me</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="text-primary hover:text-primary/70 transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;