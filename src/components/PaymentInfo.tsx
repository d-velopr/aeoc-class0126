import { CreditCard, Phone, Zap } from "lucide-react";

const PaymentInfo = () => {
  return (
    <div className="space-y-8">
      {/* How to Reserve */}
      <div className="card-elevated p-6">
        <h4 className="font-display text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
          <span className="text-xl">📌</span> How to Reserve Your Spot
        </h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
            <span>30% deposit secures your seat</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
            <span>Remaining balance due 1 week before the event</span>
          </li>
        </ul>
        
        <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Spots are limited</span> to keep the class hands-on and high quality.
          </p>
          <p className="text-xs text-primary font-medium mt-1 flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Early Bird pricing ends once those spots are filled.
          </p>
        </div>
      </div>

      {/* Payment Options */}
      <div className="card-elevated p-6">
        <h4 className="font-display text-lg font-semibold text-secondary mb-4 flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" /> Payment Options
        </h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <span>We can email you an invoice so you can place your deposit</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <span>PayPal invoice available with <span className="font-semibold text-foreground">6 months same as cash</span> through PayPal</span>
          </li>
        </ul>
      </div>

      {/* Contact */}
      <div className="bg-secondary text-secondary-foreground rounded-lg p-6">
        <h4 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
          <Phone className="w-5 h-5" /> Questions?
        </h4>
        <p className="text-lg font-medium">
          Call or text:{" "}
          <a href="tel:714-848-8489" className="text-primary hover:underline">
            714-848-8489
          </a>
        </p>
      </div>

      {/* CTA Banner */}
      <div className="relative overflow-hidden rounded-lg p-6 text-center" style={{ background: 'var(--gradient-fire)' }}>
        <div className="relative z-10">
          <p className="text-primary-foreground font-display text-xl font-bold mb-2">
            💥 Ready to Learn Modern Digital Fabrication?
          </p>
          <p className="text-primary-foreground/90 text-sm">
            This intensive 3-day training is designed for serious makers.
          </p>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      </div>
    </div>
  );
};

export default PaymentInfo;
