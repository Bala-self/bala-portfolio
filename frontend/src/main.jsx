import { createRoot } from 'react-dom/client'
import './styles/index.css'
import './styles/App.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Blogs from './pages/blog.jsx'

createRoot(document.getElementById('root')).render( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/*" element={<App />} />
        </Routes>
    </BrowserRouter>
)
