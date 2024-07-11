import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/main.scss';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { router } from 'router/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
);
reportWebVitals();
