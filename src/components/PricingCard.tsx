import { Flame, Star } from "lucide-react";

const PricingCard = () => {
  return (
    <div className="card-elevated p-8 relative overflow-hidden">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[100px]" />
      
      <div className="relative">
        <h3 className="section-title text-2xl md:text-3xl mb-6 flex items-center gap-2">
          <span className="text-2xl">💰</span> Class Pricing
        </h3>

        <div className="space-y-4 mb-8">
          <h4 className="font-display text-xl font-semibold text-secondary">
            Digital Design Training — 3 Days
          </h4>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
              <Flame className="w-5 h-5 text-primary animate-pulse-slow" />
              <div>
                <span className="badge-fire text-xs mb-1">Early Bird</span>
                <p className="text-2xl font-bold text-secondary">$1,295</p>
                <p className="text-xs text-muted-foreground">Limited spots available</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              <Star className="w-5 h-5 text-gold" />
              <div>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Regular Price</span>
                <p className="text-2xl font-bold text-secondary">$1,495</p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="space-y-4">
          <h4 className="font-display text-lg font-semibold text-secondary">
            What's Included:
          </h4>
          
          <ul className="space-y-3 text-sm">
            {[
              "3 full days of hands-on training",
              "Fusion 360 + CorelDRAW instruction",
              "3D scanning, CNC, laser, and 3D printing access",
              "All project materials",
              "Morning coffee, donuts, and bagels",
              "Lunch each day",
              "End-of-class BBQ",
              "Extra instructors and hands-on help",
              "A finished take-home project",
            ].map((item, index) => (
              <li key={index} className="feature-item">
                {item}
              </li>
            ))}
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary font-bold text-xl leading-tight">🎁</span>
              <span className="font-medium">
                Entry into the 3D printer raffle{" "}
                <span className="text-muted-foreground">($699 regular price)</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
