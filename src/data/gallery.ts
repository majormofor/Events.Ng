export type GalleryItem = {src:string; title:string; category:string; note:string; placeholder?:boolean};
export const gallery: GalleryItem[] = [
 {src:'/images/team.jpeg',title:'A warm welcome, beautifully delivered',category:'Professional Ushers',note:'Team photograph supplied by JUNE EVENTS.NG'},
 {src:'/images/events-flier.jpeg',title:'Behind the scenes of an occasion',category:'Event Coordination',note:'Brand event collage supplied by JUNE EVENTS.NG'},
 {src:'/images/staffing-flier.jpeg',title:'Your event, our priority',category:'Hostesses',note:'Promotional artwork supplied by JUNE EVENTS.NG'},
];
export const categories = ['All','Professional Ushers','Hostesses','Bridal Assistants','Weddings','Corporate Events','Event Coordination','Makeup Artistry','Tattoo Artistry'];
export const creativePortfolio = (kind:string):GalleryItem[] => (kind==='Makeup Artistry'?['Bridal','Traditional','Soft Glam','Full Glam','Photoshoots']:['Fine-Line','Minimalist','Lettering','Custom Design']).map((category,index)=>({src:kind==='Makeup Artistry'?'/images/makeup-placeholder.svg':'/images/tattoo-placeholder.svg',title:`${category} inspiration`,category,note:'Illustrative placeholder · authentic portfolio coming soon',placeholder:true, id:index}));
