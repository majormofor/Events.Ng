import { contact } from '../data/contact.ts';
export function whatsappUrl(message = `Hello ${contact.name}, I would like to enquire about your services.`) { return `https://wa.me/${contact.number}?text=${encodeURIComponent(message)}`; }
export function serviceEnquiry(service:string) {return whatsappUrl(`Hello JUNE EVENTS.NG, I would like to enquire about booking ${service}. Please share your availability and booking process.`);}
export function bookingMessage(data:Record<string,string>) {return ['Hello JUNE EVENTS.NG, I would like to make a booking enquiry.', ...Object.entries(data).filter(([,value])=>value.trim()).map(([key,value])=>`${key}: ${value}`), 'Please share availability and next steps.'].join('\n');}
