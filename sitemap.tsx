import { Link } from 'react-router-dom';

export default function Sitemap() {
  const siteStructure = [
    {
      title: "Home",
      path: "/",
      description: "Welcome to Parking POP - Smart parking solutions"
    },
    {
      title: "About",
      path: "/about",
      description: "Learn about our mission, vision, and team"
    },
    {
      title: "Services",
      path: "/services",
      description: "Comprehensive parking solutions for drivers and operators"
    },
    {
      title: "Contact",
      path: "/contact",
      description: "Get in touch with our team for support and inquiries"
    },
    {
      title: "Sitemap",
      path: "/sitemap",
      description: "Website navigation and structure overview"
    }
  ];

  return (
    <div className="relative z-10 min-h-[calc(100vh-200px)] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl md:text-5xl tracking-tight text-foreground">
            <span className="text-primary">Sitemap</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Navigate through our website and discover all available pages and features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {siteStructure.map((page, index) => (
            <Link 
              key={index}
              to={page.path}
              className="block p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-card-foreground group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <div className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors">
                  →
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-2">
                {page.description}
              </p>
              <code className="text-xs text-primary/70 bg-primary/5 px-2 py-1 rounded">
                {page.path}
              </code>
            </Link>
          ))}
        </div>

        <div className="p-8 bg-muted/20 backdrop-blur-sm border border-border/30 rounded-3xl">
          <h2 className="mb-4 text-center text-foreground">Website Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <div className="w-6 h-6 bg-primary rounded-lg"></div>
              </div>
              <h4 className="mb-2 text-foreground">Responsive Design</h4>
              <p className="text-sm text-muted-foreground">
                Optimized for all devices and screen sizes
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <div className="w-6 h-6 bg-secondary rounded-lg"></div>
              </div>
              <h4 className="mb-2 text-foreground">Modern Navigation</h4>
              <p className="text-sm text-muted-foreground">
                Clean and intuitive user interface
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mb-3 mx-auto">
                <div className="w-6 h-6 bg-accent-foreground rounded-lg"></div>
              </div>
              <h4 className="mb-2 text-foreground">Enhanced Theme</h4>
              <p className="text-sm text-muted-foreground">
                Premium design system with advanced effects
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need help navigating? 
            <Link to="/contact" className="text-primary hover:text-primary/80 transition-colors ml-1">
              Contact Us
            </Link>
            {" or "}
            <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
              Return to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
