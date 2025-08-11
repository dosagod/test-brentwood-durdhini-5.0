import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-feast.jpg"; // Ensure this path is correct

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">{/* Added pt-16 for header space */}
      {/* Hero Image Background */}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}

      
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          inset: 0,
          zIndex: 10,
          
          pointerEvents: "none",
        }}
      
      {/* Content */}
      <div className="relative z-20 text-center text-black px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              <span className="text-5xl sm:text-6xl mb-8 text-black/90 animate-fade-in max-w-2xl mx-auto">
                Brentwood Darshani
              </span>
              <span className="text-xl sm:text-2xl mb-8 text-black/90 animate-fade-in max-w-2xl mx-auto">
                Authentic South Indian Catering
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-brown/90 animate-fade-in max-w-2xl mx-auto">
              Experience the rich flavors and traditional recipes of South India, 
              crafted with love and served fresh for your special occasions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/menu">
                <Button variant="spice" size="xl">
                  View Our Menu
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="warm" size="xl">Order Now</Button>
              </Link>
            </div>
        </div>
          
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce z-30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
      </div>
    </section>
  );
};

export default Hero;
