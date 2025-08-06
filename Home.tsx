export default function Home() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Parking POP Logo */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-3xl mb-8 shadow-xl">
            <div className="w-16 h-16 bg-primary rounded-3xl relative overflow-hidden shadow-lg">
              {/* Parking meter body */}
              <div className="absolute inset-2 bg-primary-foreground rounded-2xl"></div>
              
              {/* Large P symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-primary text-2xl font-black">P</div>
              </div>
              
              {/* Digital display area */}
              <div className="absolute top-1 left-1 right-1 h-2 bg-green-400/80 rounded-lg"></div>
              
              {/* Coin slot */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-3 bg-primary rounded-l-full"></div>
              
              {/* Status indicators */}
              <div className="absolute bottom-1 left-1 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              
              {/* Parking lines */}
              <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary/30"></div>
              <div className="absolute bottom-0.5 left-1.5 right-1.5 h-0.5 bg-primary/20"></div>
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="mb-4 text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground">
            Parking
            <span className="block text-primary mt-2">POP</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Smart parking solutions for the modern city
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-1 h-1 bg-secondary/60 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse delay-700"></div>
          
          {/* Car-like shapes */}
          <div className="absolute top-2/3 left-1/5 w-4 h-2 bg-primary/20 rounded-full"></div>
          <div className="absolute top-1/5 right-1/4 w-3 h-1.5 bg-secondary/30 rounded-full"></div>
          
          {/* Parking space indicators */}
          <div className="absolute top-1/2 left-12 w-8 h-0.5 bg-primary/15 rounded-full"></div>
          <div className="absolute top-3/4 right-16 w-6 h-0.5 bg-secondary/20 rounded-full"></div>
          <div className="absolute bottom-1/2 left-1/3 w-5 h-0.5 bg-accent/25 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
