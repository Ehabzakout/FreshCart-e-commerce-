import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import App from './App.jsx'
import { register } from 'swiper/element/bundle';
import "react-image-gallery/styles/css/image-gallery.css";
// register Swiper custom elements
register();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
