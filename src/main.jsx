import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* เรียก Component ชื่อ StrictMode มากับ React */}
    {/* เรียก Component ชื่อ App อยู่ใน Project ถูกสร้างขึ้นมาตอนสร้างโปรเจ็กต์ */}
    <App />
  </StrictMode>,
)
