import { contact } from './contact';
export const business = { ...contact, origin: (import.meta.env.VITE_SITE_URL || 'https://june-events-ng.macetron-lim-5720.chatgpt.site').replace(/\/$/,'') };
export const founder = { name: 'Name to be added', title: 'Founder & Creative Director', photo: '/images/founder.jpeg', biography: 'Behind JUNE EVENTS.NG is a passionate entrepreneur with a vision to make event experiences more seamless, elegant, and memorable. With an appreciation for organisation, creativity and exceptional service, the founder’s vision guides the brand’s approach to thoughtful customer experiences.', verified: false, message: '' };
export type Testimonial = { name: string; review: string; event: string; date: string; photo?: string; rating?: number };
export const testimonials: Testimonial[] = [];
export const values = ['Excellence', 'Professionalism', 'Respect', 'Reliability', 'Integrity', 'Teamwork', 'Attention to detail', 'Client satisfaction'];
