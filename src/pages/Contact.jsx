import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { PageTransition } from '../components/layout/PageTransition';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/SocialIcons';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Front-end only form submission placeholder.
    // NOTE: To wire this form up to a live backend, you can replace the logic here 
    // with an API call to Formspree, EmailJS, or similar.
    // Example:
    // fetch("https://formspree.io/f/YOUR_FORM_ID", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData)
    // })
    console.log("Form data submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contact | Mohammed Faadil</title>
        <meta name="description" content="Get in touch with Mohammed Faadil. Open for backend, AI/ML, and cybersecurity roles." />
      </Helmet>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <ScrollReveal>
          <SectionHeading 
            eyebrow="Get In Touch" 
            title="Let's build something secure & intelligent together" 
            description="If you're looking for a backend engineer, an AI/ML developer, or a cybersecurity researcher, I'd love to chat. Reach out using the form or direct links."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-12">
          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6">
                <a 
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-steel/15 bg-white dark:bg-carbon/20 hover:border-aqua/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-aqua/10 text-aqua">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-steel">Email</p>
                    <p className="text-sm sm:text-base font-semibold text-carbon dark:text-white group-hover:text-aqua transition-colors">{profileData.contact.email}</p>
                  </div>
                </a>

                <a 
                  href={`tel:${profileData.contact.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl border border-steel/15 bg-white dark:bg-carbon/20 hover:border-aqua/50 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-aqua/10 text-aqua">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-steel">Phone</p>
                    <p className="text-sm sm:text-base font-semibold text-carbon dark:text-white group-hover:text-aqua transition-colors">{profileData.contact.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-steel/15 bg-white dark:bg-carbon/20">
                  <div className="p-3 rounded-lg bg-aqua/10 text-aqua">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase text-steel">Location</p>
                    <p className="text-sm sm:text-base font-semibold text-carbon dark:text-white">{profileData.contact.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Currently Open To Panel */}
            <ScrollReveal delay={0.2}>
              <Card className="border border-steel/20 bg-white dark:bg-carbon/50">
                <CardHeader>
                  <CardTitle className="text-lg">Currently Open To</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {profileData.openTo.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-steel dark:text-steel/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-aqua"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.15}>
              <Card className="border border-steel/20 bg-white dark:bg-carbon/50 p-6 sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="p-4 rounded-full bg-aqua/10 text-aqua mb-4">
                      <Send className="h-8 w-8 animate-pulse" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-carbon dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-steel max-w-sm">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    <Button onClick={() => setSubmitted(false)} className="mt-6" variant="outline">
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs font-mono uppercase text-steel mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full h-11 px-4 rounded-md border border-steel/20 bg-white dark:bg-carbon/30 text-carbon dark:text-white placeholder-steel/50 focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua transition-all font-sans"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-mono uppercase text-steel mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full h-11 px-4 rounded-md border border-steel/20 bg-white dark:bg-carbon/30 text-carbon dark:text-white placeholder-steel/50 focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua transition-all font-sans"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-mono uppercase text-steel mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full h-11 px-4 rounded-md border border-steel/20 bg-white dark:bg-carbon/30 text-carbon dark:text-white placeholder-steel/50 focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua transition-all font-sans"
                        placeholder="Collaboration opportunity"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-mono uppercase text-steel mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-steel/20 bg-white dark:bg-carbon/30 text-carbon dark:text-white placeholder-steel/50 focus:outline-none focus:border-aqua focus:ring-1 focus:ring-aqua transition-all font-sans resize-none"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    <Button type="submit" className="w-full flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
