import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/app';

import '@/assets/styles/main.css';
import 'react-toastify/dist/ReactToastify.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
