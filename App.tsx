import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Sitemap from './components/Sitemap';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="relative z-20 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Parking POP Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg">
            {/* Parking meter style design */}
            <div className="absolute inset-1 bg-primary-foreground rounded-lg"></div>
            {/* P symbol */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-primary text-lg font-black">P</div>
            </div>
            {/* Top indicator light */}
            <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm"></div>
            {/* Side coin slot */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-2 bg-primary rounded-full"></div>
          </div>
          <span className="text-xl text-foreground tracking-tight">Parking POP</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className={`px-4 py-2 transition-colors ${
              location.pathname === '/' 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`px-4 py-2 transition-colors ${
              location.pathname === '/about' 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`px-4 py-2 transition-colors ${
              location.pathname === '/services' 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className={`px-4 py-2 transition-colors ${
              location.pathname === '/contact' 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Contact
          </Link>
          <Link 
            to="/sitemap" 
            className={`px-4 py-2 transition-colors ${
              location.pathname === '/sitemap' 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Sitemap
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="relative z-20 p-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">© 2025 Parking POP. All rights reserved.</p>
        <p className="text-xs text-muted-foreground/60 mt-1">Theme designed by Claude AI Assistant</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background relative">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0">
          {/* Multi-layer mesh gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-background to-secondary/6"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-accent/8 via-transparent to-primary/3"></div>
          
          {/* Enhanced geometric shapes with better blur */}
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary/12 via-primary/6 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-accent/20 via-secondary/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-secondary/10 to-accent/15 rounded-full blur-2xl"></div>
          
          {/* Enhanced dot grid pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:28px_28px]"></div>
          </div>
          
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        </div>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* Catch-all route for unmatched paths */}
          <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
