import React from "react";
import * as ReactDomClient from "react-dom/client";

import App from './App';
import './index.css'

const rootElement = document.getElementById
('root');
const root = ReactDomClient.createRoot
(rootElement);
root.render (<App />);
