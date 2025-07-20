import React from 'react';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import App from './App';
import  store  from './app/store';

const cotainer = document.getElementById("root");
const root = createRoot(cotainer);

root.render(<Provider store={store}><App /></Provider>)
