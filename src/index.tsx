import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "./component/header/app-bar.css"
import "./component/text.css"
import "./pages/login/login.css"
import "./pages/login/components/label.css"
import "@stream-io/video-react-sdk/dist/css/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);