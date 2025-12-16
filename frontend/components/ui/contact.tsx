"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

interface ContactSectionProps {
  title?: string;
  mainMessage?: string;
  contactEmail?: string;
  socialLinks?: Array<{ id: string; name: string; icon: React.ReactNode; href: string }>;
  backgroundImageSrc?: string;
  onSubmit?: (data: any) => void;
}

const defaultSocialLinks = [
  { id: '1', name: 'Instagram', icon: <Instagram className="h-4 w-4" />, href: 'https://www.instagram.com/zenvoa.technologies/' },
  { id: '2', name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/company/zenova-technologies/' },
  { id: '3', name: 'Github', icon: <Github className="h-4 w-4" />, href: 'https://github.com/zenvoatechnologies' },
];

// Predetermined bubble configurations to avoid hydration mismatch
const bubbleConfigs = [
  { width: 25, height: 18, left: 12, top: 8, delay: 1.5, duration: 18 },
  { width: 22, height: 28, left: 78, top: 45, delay: 3.2, duration: 22 },
  { width: 28, height: 25, left: 35, top: 72, delay: 0.8, duration: 25 },
  { width: 19, height: 21, left: 60, top: 15, delay: 5.1, duration: 16 },
  { width: 26, height: 24, left: 88, top: 55, delay: 2.3, duration: 20 },
  { width: 15, height: 19, left: 45, top: 88, delay: 4.7, duration: 14 },
  { width: 23, height: 27, left: 8, top: 32, delay: 6.2, duration: 23 },
  { width: 20, height: 16, left: 92, top: 68, delay: 1.1, duration: 19 },
  { width: 27, height: 22, left: 25, top: 5, delay: 3.8, duration: 21 },
  { width: 18, height: 29, left: 68, top: 78, delay: 5.5, duration: 17 },
  { width: 24, height: 20, left: 52, top: 25, delay: 2.9, duration: 24 },
  { width: 21, height: 23, left: 15, top: 62, delay: 4.2, duration: 15 },
  { width: 29, height: 17, left: 75, top: 38, delay: 1.8, duration: 26 },
  { width: 16, height: 26, left: 40, top: 92, delay: 6.5, duration: 13 },
  { width: 25, height: 19, left: 5, top: 48, delay: 3.5, duration: 22 },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "We can turn your dream project into reality",
  mainMessage = "Let's talk! 👋",
  contactEmail = "zenvoatechnologies@gmail.com",
  socialLinks = defaultSocialLinks,
  backgroundImageSrc = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
    projectType: [] as string[],
  });
  const [messageError, setMessageError] = React.useState('');
  const MIN_MESSAGE_LENGTH = 20;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate message length
    if (name === 'message') {
      if (value.length > 0 && value.length < MIN_MESSAGE_LENGTH) {
        setMessageError(`Please enter at least ${MIN_MESSAGE_LENGTH} characters (${value.length}/${MIN_MESSAGE_LENGTH})`);
      } else {
        setMessageError('');
      }
    }
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate message length before submission
    if (formData.message.length < MIN_MESSAGE_LENGTH) {
      setMessageError(`Please enter at least ${MIN_MESSAGE_LENGTH} characters`);
      return;
    }

    const success = await onSubmit?.(formData);

    // Reset form only if submission was successful
    if (success) {
      setFormData({ name: '', email: '', message: '', projectType: [] });
      setMessageError('');
    }
  };

  const projectTypeOptions = [
    'Website', 'Mobile App', 'Web App', 'E-Commerce',
    'Brand Identity', '3D & Animation', 'Social Media Marketing',
    'Brand Strategy & Consulting', 'Other'
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image and Animated Bubbles */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out opacity-20"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      >
        {/* Animated Bubbles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {bubbleConfigs.map((config, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bubble opacity-0"
              style={{
                background: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#8b5cf6' : '#f43f5e',
                width: `${config.width}px`,
                height: `${config.height}px`,
                left: `${config.left}%`,
                animationDelay: `${config.delay}s`,
                animationDuration: `${config.duration}s`,
                top: `${config.top}%`,
                filter: 'blur(2px)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8 lg:p-12">
        {/* Main Section - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl p-4 md:p-8 rounded-xl">
          {/* Left Side: Title */}
          <div className="flex flex-col justify-center p-4 lg:p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg max-w-lg">
              {title}
            </h1>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-background/30 backdrop-blur-xl p-6 md:p-8 rounded-lg shadow-xl border border-white/10">
            <h2 className="text-2xl font-bold text-foreground mb-6">{mainMessage}</h2>

            {/* Email & Socials */}
            <div className="mb-6">
              <p className="text-muted-foreground mb-2">Mail us at</p>
              <a href={`mailto:${contactEmail}`} className="text-indigo-400 hover:text-indigo-300 hover:underline font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {contactEmail}
              </a>

              {/* Phone Call Option */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-muted-foreground mb-2">Or call us directly</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919363978578"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline font-medium flex items-center gap-2 text-lg"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 93639 78578
                  </a>
                  <a
                    href="tel:+917904729229"
                    className="text-indigo-400 hover:text-indigo-300 hover:underline font-medium flex items-center gap-2 text-lg"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 79047 29229
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Available Mon-Fri, 9AM-6PM IST</p>
              </div>

              <div className="flex items-center space-x-3 mt-6">
                <span className="text-muted-foreground">OR</span>
                {socialLinks.map((link) => (
                  <Button key={link.id} variant="outline" size="icon" asChild className="border-white/20 hover:bg-white/10">
                    <a href={link.href} aria-label={link.name}>
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <hr className="my-6 border-white/10" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-muted-foreground">Leave us a brief message</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Briefly describe your project idea...</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Briefly describe your project idea..."
                  className={`min-h-[80px] ${messageError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div className="flex justify-between items-center text-xs">
                  {messageError ? (
                    <span className="text-red-400 font-medium">{messageError}</span>
                  ) : (
                    <span className={`${formData.message.length >= MIN_MESSAGE_LENGTH ? 'text-green-400' : 'text-white/50'}`}>
                      {formData.message.length >= MIN_MESSAGE_LENGTH ? '✓ ' : ''}
                      {formData.message.length}/{MIN_MESSAGE_LENGTH} characters minimum
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">I'm looking for...</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectTypeOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.replace(/\s/g, '-').toLowerCase()}
                        checked={formData.projectType.includes(option)}
                        onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                      />
                      <Label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-sm font-normal cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500">
                Send a message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* CSS for bubble animation */}
      <style jsx global>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100vh) translateX(10vw) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble 15s ease-in-out infinite;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
