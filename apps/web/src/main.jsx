import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AuthCallback from './pages/AuthCallback.jsx'
import Attributes from './pages/Attributes.jsx';
import Positions from './pages/Positions.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/attributes" element={<Attributes />} />
        <Route path="/positions" element={<Positions />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)