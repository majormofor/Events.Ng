import { build, loadEnv } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { contact } from '../src/data/contact.ts';
const env=loadEnv('production',process.cwd(),'VITE_');
const origin=(env.VITE_SITE_URL||'https://june-events-ng.macetron-lim-5720.chatgpt.site').replace(/\/$/,'');
const pages={'/':['Your Event, Our Priority','Professional event staffing, planning and coordination in Nigeria. Exceptional people, seamless events.'],'/about':['About Us','Our story, mission, vision and commitment to thoughtful guest service.'],'/founder':['Meet the Founder','Meet the vision behind JUNE EVENTS.NG.'],'/services':['Our Services','Professional ushers, hostesses, bridal assistants, bouncers, event planning and coordination.'],'/tattoo':['Tattoo Artistry','Explore personalised tattoo ideas and enquire about a creative consultation.'],'/makeup':['Makeup Artistry','Discover beauty services for weddings, celebrations and special occasions.'],'/gallery':['Gallery','Discover the people, brand materials and details behind JUNE EVENTS.NG.'],'/testimonials':['Client Experiences','Share your experience with JUNE EVENTS.NG.'],'/contact':['Contact & Booking','Start an event staffing, planning or creative-service enquiry via WhatsApp.'],'/privacy':['Privacy Policy','How the June Events website handles your enquiry information.']};
await build({build:{ssr:'src/render.tsx',outDir:'.prerender',emptyOutDir:true},logLevel:'warn'});
const {render}=await import(pathToFileURL(path.resolve('.prerender/render.js')).href);
const template=await readFile('dist/index.html','utf8');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const [route,[title,description]] of Object.entries({...pages,'/404':['Page Not Found','This page could not be found.']})){
 const markup=render(route);const canonical=origin+(route==='/'?'':route);
 const metadata=`<link rel="canonical" href="${canonical}"/><meta property="og:title" content="${esc(title)} | JUNE EVENTS.NG"/><meta property="og:description" content="${esc(description)}"/><meta property="og:url" content="${canonical}"/><meta property="og:type" content="website"/><meta property="og:image" content="${origin}/images/team.jpeg"/><meta name="twitter:card" content="summary_large_image"/>${route==='/404'?'<meta name="robots" content="noindex"/>':''}<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:contact.name,url:origin,email:contact.email,telephone:'+'+contact.number,logo:origin+'/images/logo.jpeg',sameAs:[contact.tiktok]})}</script>`;
 const html=template.replace(/<title>.*?<\/title>/,`<title>${esc(title)} | JUNE EVENTS.NG</title>`).replace(/<meta name="description" content="[^"]*"\s*\/?>/,`<meta name="description" content="${esc(description)}"/>`).replace('</head>',metadata+'</head>').replace('<div id="root"></div>',`<div id="root">${markup}</div>`);
 const file=route==='/'?'dist/index.html':route==='/404'?'dist/404.html':`dist${route}/index.html`;await mkdir(path.dirname(file),{recursive:true});await writeFile(file,html);
}
await writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pages).map(route=>`<url><loc>${origin}${route==='/'?'':route}</loc></url>`).join('')}</urlset>`);
console.log(`Prerendered ${Object.keys(pages).length} pages and 404, sitemap and metadata.`);

