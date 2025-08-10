import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contact Brentwood Darshani
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to bring authentic South Indian flavors to your special occasion? 
            Get in touch with us for custom catering solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <Card className="shadow-elegant animate-fade-in text-center">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-semibold text-xl mb-3 text-accent">
                Call Us
              </h3>
              <p className="text-2xl font-bold text-primary mb-3">11111</p>
              <p className="text-muted-foreground mb-4">
                Ready to place an order or have questions? 
                Call us for immediate assistance.
              </p>
              <Button variant="spice" size="lg">
                Call Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant animate-fade-in text-center">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold text-xl mb-3 text-accent">
                Visit Us
              </h3>
              <p className="text-lg font-semibold text-foreground mb-3">The White House</p>
              <p className="text-muted-foreground mb-4">
                Located conveniently for your catering needs.
              </p>
              <Link to="/contact">
                <Button variant="warm" size="lg">
                  Get Directions
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant animate-fade-in text-center">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="font-semibold text-xl mb-3 text-accent">
                Get Quote
              </h3>
              <p className="text-muted-foreground mb-4">
                Need a custom quote for your event? 
                Fill out our detailed contact form.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Form
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        {/* Service Info */}
        <div className="mt-12 text-center animate-fade-in">
          <Card className="shadow-warm max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3 text-accent">
                🕒 Service Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 9:00 AM - 9:00 PM</p>
                <p className="text-sm text-warning font-semibold">*24hr notice required for catering orders</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;