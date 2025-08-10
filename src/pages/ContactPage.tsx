import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">{/* Added pt-16 for header */}
      {/* Header */}
      <header className="bg-gradient-hero text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact Brentwood Darshani
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Get in touch for authentic South Indian catering services
          </p>
          <Link to="/">
            <Button variant="warm" size="lg">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Ready to bring authentic South Indian flavors to your special occasion? 
                  Contact Brentwood Darshani for custom catering solutions.
                </p>
              </div>

              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-2xl mb-4 text-accent flex items-center gap-2">
                    📞 Phone
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-2">11111</p>
                  <p className="text-muted-foreground mb-4">
                    Call us for immediate assistance and orders
                  </p>
                  <Button variant="spice" size="lg">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-2xl mb-4 text-accent flex items-center gap-2">
                    📍 Address
                  </h3>
                  <p className="text-xl font-semibold text-foreground mb-2">The White House</p>
                  <p className="text-muted-foreground mb-4">
                    Visit us or we'll come to you for catering services
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shadow-warm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-accent">
                    🕒 Service Hours
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday - Sunday: 9:00 AM - 9:00 PM</p>
                    <p className="text-sm text-warning font-semibold">*24hr notice required for catering orders</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-warm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-accent">
                    🍽️ Our Specialties
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Wedding & Event Catering</li>
                    <li>• Corporate Lunch Boxes</li>
                    <li>• Festival Celebrations</li>
                    <li>• Custom Menu Planning</li>
                    <li>• Traditional South Indian Cuisine</li>
                    <li>• Fresh Daily Preparations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Request a Quote</CardTitle>
                  <CardDescription className="text-lg">
                    Tell us about your event and we'll provide a custom quote within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-base">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                      <Input id="phone" placeholder="Your phone number" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-base">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="event-type" className="text-base">Event Type</Label>
                    <Input id="event-type" placeholder="Wedding, Corporate, Birthday, etc." className="mt-1" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="event-date" className="text-base">Event Date</Label>
                      <Input id="event-date" type="date" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="guest-count" className="text-base">Number of Guests</Label>
                      <Input id="guest-count" placeholder="Approx. guest count" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="menu-preferences" className="text-base">Menu Preferences & Special Requests</Label>
                    <Textarea 
                      id="menu-preferences" 
                      placeholder="Tell us about your preferred dishes, dietary restrictions, spice levels, or any special requirements..."
                      className="min-h-32 mt-1"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Request Quote
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond to your inquiry within 24 hours with a detailed quote and menu suggestions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Why Choose Brentwood Darshani?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👩‍🍳</div>
              <h3 className="font-semibold text-lg mb-2">Authentic Recipes</h3>
              <p className="text-muted-foreground">Traditional South Indian recipes passed down through generations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="font-semibold text-lg mb-2">Fresh Ingredients</h3>
              <p className="text-muted-foreground">Only the freshest spices and ingredients for authentic flavors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="font-semibold text-lg mb-2">Event Expertise</h3>
              <p className="text-muted-foreground">Experienced in catering for all types of celebrations and events</p>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;