import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
const root=document.getElementById('root')!;
const app=<StrictMode><BrowserRouter><App/></BrowserRouter></StrictMode>;
const normalise=(path:string)=>path.replace(/\/$/,'')||'/';
if(root.hasChildNodes()&&normalise(root.dataset.route||'')===normalise(location.pathname))hydrateRoot(root,app);else createRoot(root).render(app);
