import { createRoot } from 'react-dom/client';
import App, { type PageKey } from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;
const pageAttr = (rootEl.getAttribute('data-page') as PageKey | null) || undefined;

createRoot(rootEl).render(<App page={pageAttr} />);
