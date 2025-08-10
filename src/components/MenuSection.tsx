import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description?: string;
}

interface MenuSectionProps {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  image?: string;
  reverse?: boolean;
}

const MenuSection = ({ title, subtitle, items, image, reverse = false }: MenuSectionProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content */}
          <div className={`${reverse ? 'lg:order-2' : ''} animate-fade-in`}>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground text-lg mb-8">{subtitle}</p>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {items.map((item, index) => (
                <Card key={index} className="group hover:shadow-warm transition-all duration-300 transform hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 hover:border-accent/50">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-card-foreground mb-1 group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Image */}
          {image && (
            <div className={`${reverse ? 'lg:order-1' : ''} animate-fade-in`}>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant group">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent group-hover:from-primary/30 transition-all duration-300" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;