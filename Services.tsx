export default function Services() {
  const services = [
    {
      title: "Real-Time Parking Finder",
      description: "Find available parking spots instantly with live updates and availability tracking.",
      icon: "🅿️",
      features: ["Live spot availability", "Real-time updates", "Multiple location search"]
    },
    {
      title: "Smart Reservations",
      description: "Reserve your parking spot in advance and never worry about availability again.",
      icon: "📅",
      features: ["Advance booking", "Guaranteed spots", "Flexible timing"]
    },
    {
      title: "Payment Integration",
      description: "Seamless payment processing with multiple options for your convenience.",
      icon: "💳",
      features: ["Contactless payments", "Multiple payment methods", "Digital receipts"]
    },
    {
      title: "Navigation Assistance",
      description: "Get turn-by-turn directions to your reserved parking spot.",
      icon: "🗺️",
      features: ["GPS navigation", "Optimal route planning", "Spot location guidance"]
    },
    {
      title: "Price Comparison",
      description: "Compare parking rates across different locations to find the best deals.",
      icon: "💰",
      features: ["Rate comparison", "Best price alerts", "Discount notifications"]
    },
    {
      title: "Analytics Dashboard",
      description: "For parking operators - comprehensive analytics and management tools.",
      icon: "📊",
      features: ["Usage analytics", "Revenue tracking", "Occupancy insights"]
    }
  ];

  return (
    <div className="relative z-10 min-h-[calc(100vh-200px)] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="mb-6 text-4xl md:text-5xl tracking-tight text-foreground">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive parking solutions designed to make your urban mobility seamless and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-primary/5 backdrop-blur-sm border border-primary/10 rounded-3xl">
            <h2 className="mb-4 text-foreground">For Drivers</h2>
            <p className="text-muted-foreground mb-6">
              Never circle the block looking for parking again. Our app shows you exactly where to go.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Save time and fuel
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Reduce stress and frustration
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                Smart cost optimization
              </li>
            </ul>
          </div>

          <div className="p-8 bg-secondary/5 backdrop-blur-sm border border-secondary/10 rounded-3xl">
            <h2 className="mb-4 text-foreground">For Parking Operators</h2>
            <p className="text-muted-foreground mb-6">
              Maximize your parking facility's efficiency and revenue with our management platform.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                Increase occupancy rates
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                Real-time monitoring
              </li>
              <li className="flex items-center text-muted-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                Data-driven insights
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
