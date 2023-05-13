// src/index.tsx

import React from "react";
import { createRoot } from 'react-dom/client';
import App from './app';
import './styles/global.scss';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);