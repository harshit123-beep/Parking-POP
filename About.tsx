export default function About() {
  return (
    <div className="relative z-10 min-h-[calc(100vh-200px)] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl md:text-5xl tracking-tight text-foreground">
            About <span className="text-primary">Parking POP</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing urban parking through innovative technology and smart solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded-lg"></div>
              </div>
              <h3 className="mb-3 text-card-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To make parking effortless and accessible for everyone while optimizing urban space utilization through cutting-edge technology.
              </p>
            </div>

            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-secondary rounded-lg"></div>
              </div>
              <h3 className="mb-3 text-card-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                A future where finding parking is no longer a challenge, creating smarter, more livable cities for all.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
              <div className="w-12 h-12 bg-accent/30 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-accent-foreground rounded-lg"></div>
              </div>
              <h3 className="mb-3 text-card-foreground">Founded</h3>
              <p className="text-muted-foreground">
                2024 - Born from the frustration of endless parking searches in busy urban areas.
              </p>
            </div>

            <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-primary rounded-lg"></div>
              </div>
              <h3 className="mb-3 text-card-foreground">Team</h3>
              <p className="text-muted-foreground">
                A diverse group of urban planners, technologists, and mobility experts passionate about solving parking challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-8 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-3xl">
          <h2 className="mb-4 text-foreground">Why Parking POP?</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We believe that parking should be the least of your worries. Our platform combines real-time data, 
            predictive analytics, and user-friendly design to transform how people interact with urban parking infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
