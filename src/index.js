import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Kosarprovider } from './contexts/KosarContext';

// Itt hozzuk létre a React root-ot
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Kosarprovider>
      <App />
    </Kosarprovider>
  </React.StrictMode>
);

// (opcionális) teljesítménymérés
reportWebVitals();
