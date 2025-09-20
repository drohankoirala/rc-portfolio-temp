import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/style.css';
import './styles/responsive.css';

const container = document.getElementsByClassName('__drk')[0];
const root = createRoot(container);
root.render(<App />);
