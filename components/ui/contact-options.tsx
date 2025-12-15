import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Defines the props for a single button within a card
interface CardButton {
    text: string;
    icon?: React.ReactNode;
    variant?: 'default' | 'secondary' | 'ghost' | 'outline' | 'link';
    onClick?: () => void;
}

// Defines the props for a single contact card
interface ContactCardProps {
    title: string;
    description: string;
    lightImage: string;
    darkImage: string;
    mockupImage: string;
    buttons: CardButton[];
}

// The reusable ContactCard component with animation
const ContactCard: React.FC<ContactCardProps> = ({
    title,
    description,
    lightImage,
    darkImage,
    mockupImage,
    buttons,
}) => {
    return (
        <div className="group relative flex w-full flex-col justify-between gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-indigo-500/50">
            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="mb-1 text-lg font-medium text-white">{title}</h3>
                <p className="text-sm text-white/70">{description}</p>
            </div>

            {/* Animated Mockup Image */}
            <img
                alt={`${title} mockup`}
                className="animate-float relative z-10 mx-auto aspect-square w-full max-w-[200px] rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                src={mockupImage}
            />

            {/* Action Buttons */}
            <div className="relative z-10 flex w-full flex-col gap-2">
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        variant={button.variant || 'secondary'}
                        className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white border-0"
                        onClick={button.onClick}
                    >
                        {button.icon && <span className="mr-2 h-4 w-4">{button.icon}</span>}
                        {button.text}
                    </Button>
                ))}
            </div>
        </div>
    );
};

// The main component that showcases all contact options
export const ContactOptions = () => {
    const router = useRouter();

    // Data for the cards
    const contactMethods: ContactCardProps[] = [
        {
            title: 'Schedule a Meeting',
            description: 'Book a time that works for you',
            lightImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400',
            darkImage: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400',
            mockupImage: '/calendar-meeting.png',
            buttons: [
                {
                    text: 'Schedule Now',
                    icon: <Calendar className="h-4 w-4" />,
                    onClick: () => window.open('https://cal.com/zenvoa-technologies-gwkagn', '_blank')
                },
            ],
        },
        {
            title: 'Email Us',
            description: 'Send us a detailed message',
            lightImage: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400',
            darkImage: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=400',
            mockupImage: '/email-contact.png',
            buttons: [
                {
                    text: 'Send Message',
                    icon: <Mail className="h-4 w-4" />,
                    onClick: () => router.push('/contact')
                }
            ],
        },
        {
            title: 'Call Us',
            description: 'Speak directly with our team',
            lightImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400',
            darkImage: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=400',
            mockupImage: '/phone-contact.png',
            buttons: [
                {
                    text: 'Call Now',
                    icon: <Phone className="h-4 w-4" />,
                    onClick: () => window.location.href = 'tel:+917904729229'
                }
            ],
        },
    ];

    return (
        <>
            {/* Keyframes for the floating animation */}
            <style>
                {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
            </style>
            <div className="relative p-6 lg:p-8">
                <div className="flex flex-col items-center gap-8">
                    <h2 className="max-w-md text-center text-3xl font-semibold text-white">
                        Choose Your <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Preferred Way</span> to Connect
                    </h2>
                    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                        {contactMethods.map((card, index) => (
                            <ContactCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
