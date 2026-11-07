import { z } from 'zod';
const optional = z.string().trim().max(2000).optional().default('');
const validFutureDate=(value:string)=>{const parsed=new Date(value+'T12:00:00Z');return /^\d{4}-\d{2}-\d{2}$/.test(value)&&!Number.isNaN(parsed.getTime())&&parsed.toISOString().slice(0,10)===value&&value>=new Date().toLocaleDateString('en-CA',{timeZone:'Africa/Lagos'});};
export const bookingSchema = z.object({
 name:z.string().trim().min(2,'Please enter your full name.').max(100),
 phone:z.string().trim().regex(/^\+?[\d\s()-]{7,20}$/,'Please enter a valid phone number.'),
 email:z.union([z.literal(''),z.email('Please enter a valid email.')]),
 service:z.string().min(1,'Please select a service.'), date:z.string().min(1,'Please choose a date.').refine(validFutureDate,'Choose today or a future date.'),
 event:optional,location:optional,guests:optional,staff:optional,style:optional,placement:optional,size:optional,people:optional,design:optional,notes:optional,
}).superRefine((data,ctx)=>{if(data.service==='Tattoo Artistry'){for(const key of ['style','placement','size','design'] as const)if(!data[key])ctx.addIssue({code:'custom',path:[key],message:'Please complete this field.'});}else{for(const key of ['event','location'] as const)if(!data[key])ctx.addIssue({code:'custom',path:[key],message:'Please complete this field.'});if(data.service==='Makeup Artistry'&&!data.style)ctx.addIssue({code:'custom',path:['style'],message:'Please choose a makeup style.'});}for(const key of ['guests','staff','people'] as const)if(data[key]&&!/^[1-9]\d*$/.test(data[key]))ctx.addIssue({code:'custom',path:[key],message:'Enter a whole number greater than zero.'});});
export type BookingInput = z.input<typeof bookingSchema>;
