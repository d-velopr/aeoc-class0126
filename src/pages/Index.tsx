import { MapPin, Clock, ChevronDown } from "lucide-react";
import SignUpForm from "@/components/SignUpForm";
import PricingCard from "@/components/PricingCard";
import PaymentInfo from "@/components/PaymentInfo";
import heroImage from "@/assets/hero-workshop.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Students learning 3D printing techniques" },
  { src: gallery2, alt: "CNC machining workshop demonstration" },
  { src: gallery3, alt: "Laser cutting class in action" },
  { src: gallery4, alt: "CAD software training session" },
  { src: gallery5, alt: "Students showcasing completed projects" },
  { src: gallery6, alt: "Workshop group photo" },
];


const Index = () => {
  const scrollToForm = () => {
    document.getElementById("signup-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Digital fabrication workshop with 3D printers and CNC machines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl animate-fade-up">
            <span className="badge-fire mb-4 inline-flex">New Class Available</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4 leading-tight">
              Digital Design &<br />
              <span className="text-primary">Fabrication Class</span>
            </h1>
            <p className="text-lg text-secondary-foreground/80 mb-6 max-w-lg">
              Master Fusion 360, CorelDRAW, 3D printing, CNC, and laser cutting in this intensive 3-day hands-on workshop.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-secondary-foreground/70 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>3 Full Days</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Huntington Beach, CA</span>
              </div>
            </div>

            <button onClick={scrollToForm} className="btn-fire rounded-md flex items-center gap-2">
              Reserve Your Spot
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Content */}
      <section id="signup-section" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
            {/* Left Column - Form */}
            <div className="order-2 lg:order-1">
              <div className="sticky top-8">
                <div className="card-elevated p-8">
                  <div className="mb-6">
                    <h2 className="section-title">Sign Up Now</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below to reserve your spot in the upcoming class.
                    </p>
                  </div>
                  <SignUpForm />
                </div>
              </div>
            </div>

            {/* Right Column - Pricing & Info */}
            <div className="order-1 lg:order-2 space-y-8">
              <PricingCard />
              <PaymentInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16 md:py-24 bg-gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">See Our Students in Action</h2>
            <p className="text-muted-foreground text-lg">
              Highlights from Previous Workshops
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-lg font-bold mb-4">Automotive Entertainment OC</h3>
              <p className="text-secondary-foreground/70 text-sm">
                Digital Design & Fabrication Training
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Location</h4>
              <p className="text-secondary-foreground/70 text-sm">
                7442 Talbert Avenue<br />
                Huntington Beach, California
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-secondary-foreground/70 text-sm">
                <a href="tel:714-848-8489" className="hover:text-primary transition-colors">
                  +1 (714) 848-8489
                </a>
                <br />
                <a href="mailto:customerservice@ae-hb.com" className="hover:text-primary transition-colors">
                  customerservice@ae-hb.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/50">
            <p>&copy; {new Date().getFullYear()} Automotive Entertainment OC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
