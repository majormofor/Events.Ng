export type GalleryItem = {src:string; title:string; category:string; note:string; placeholder?:boolean};
export const gallery: GalleryItem[] = [
 {src:'/images/team.jpeg',title:'A warm welcome, beautifully delivered',category:'Professional Ushers',note:'Team photograph supplied by JUNE EVENTS.NG'},
 {src:'/images/events-flier.jpeg',title:'Behind the scenes of an occasion',category:'Event Coordination',note:'Brand event collage supplied by JUNE EVENTS.NG'},
 {src:'/images/staffing-flier.jpeg',title:'Your event, our priority',category:'Hostesses',note:'Promotional artwork supplied by JUNE EVENTS.NG'},
];
export const categories = ['All','Professional Ushers','Hostesses','Bridal Assistants','Weddings','Corporate Events','Event Coordination','Nail Technician','Semi-Permanent Tattoo Artistry'];
export const nailPortfolio:GalleryItem[] = [
 {src:'/images/nails/leopard-manicure.jpeg',title:'Nude manicure with leopard-print tips',category:'Manicure',note:'Nail portfolio photograph'},
 {src:'/images/nails/red-detail.jpeg',title:'Glossy red nails with shimmer accents',category:'Manicure',note:'Nail portfolio photograph'},
 {src:'/images/nails/leopard-detail.jpeg',title:'Leopard-print nail art, a closer look',category:'Manicure',note:'Nail portfolio photograph'},
 {src:'/images/nails/red-manicure.jpeg',title:'Red manicure with a sparkling finish',category:'Manicure',note:'Nail portfolio photograph'},
];
export const tattooPortfolio:GalleryItem[] = [
 {src:'/images/tattoos/rose-forearm.jpeg',title:'Rose tattoo on the forearm',category:'Botanical',note:'Tattoo portfolio photograph'},
 {src:'/images/tattoos/heartbeat-hand.png',title:'Heartbeat and lettering hand tattoo',category:'Line Art',note:'Still from a tattoo portfolio video'},
 {src:'/images/tattoos/butterfly-semicolon.png',title:'Butterfly and semicolon design',category:'Line Art',note:'Still from a tattoo portfolio video'},
 {src:'/images/tattoos/rose-detail.jpeg',title:'Rose line work, a closer look',category:'Botanical',note:'Tattoo portfolio photograph'},
];
export const creativePortfolio = (kind:string):GalleryItem[] => kind==='Nail Technician'?nailPortfolio:tattooPortfolio;
