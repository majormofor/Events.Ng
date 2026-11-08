import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({mode})=>{
 const env=loadEnv(mode,'.','');
 const origin=env.VITE_SITE_URL||env.RENDER_EXTERNAL_URL||'https://june-events-ng.macetron-lim-5720.chatgpt.site';
 return { plugins: [react(), tailwindcss()], define:{'import.meta.env.VITE_SITE_URL':JSON.stringify(origin.replace(/\/$/,''))} };
});
