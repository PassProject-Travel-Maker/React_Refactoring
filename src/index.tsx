import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/main.scss';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider
} from "react-router-dom";
import { router } from 'router/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
reportWebVitals();
