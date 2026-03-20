import {
  BarChart2,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  MessageCircle,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_URL = "https://wa.me/1234567890";

function trackEvent(event: string) {
  console.log(`[Meta Pixel] Event: ${event}`);
  // TODO: Replace with real Meta Pixel call: fbq('track', event)
}

function openWhatsApp() {
  trackEvent("Lead");
  window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
}

const trades = [
  {
    pair: "XAU/USD",
    type: "BUY",
    entry: "2318.40",
    exit: "2334.10",
    pnl: "+$158.00",
    profit: true,
  },
  {
    pair: "EUR/USD",
    type: "BUY",
    entry: "1.0842",
    exit: "1.0878",
    pnl: "+$72.00",
    profit: true,
  },
  {
    pair: "BTC/USD",
    type: "SELL",
    entry: "67,420",
    exit: "66,880",
    pnl: "+$108.00",
    profit: true,
  },
  {
    pair: "GBP/JPY",
    type: "BUY",
    entry: "196.32",
    exit: "195.80",
    pnl: "-$52.00",
    profit: false,
  },
  {
    pair: "XAU/USD",
    type: "SELL",
    entry: "2341.00",
    exit: "2328.50",
    pnl: "+$125.00",
    profit: true,
  },
  {
    pair: "USD/JPY",
    type: "BUY",
    entry: "154.20",
    exit: "154.88",
    pnl: "+$68.00",
    profit: true,
  },
  {
    pair: "EUR/GBP",
    type: "SELL",
    entry: "0.8543",
    exit: "0.8571",
    pnl: "-$28.00",
    profit: false,
  },
  {
    pair: "NAS100",
    type: "BUY",
    entry: "18,240",
    exit: "18,410",
    pnl: "+$170.00",
    profit: true,
  },
  {
    pair: "GBP/USD",
    type: "BUY",
    entry: "1.2680",
    exit: "1.2714",
    pnl: "+$68.00",
    profit: true,
  },
  {
    pair: "ETH/USD",
    type: "SELL",
    entry: "3,520",
    exit: "3,489",
    pnl: "+$62.00",
    profit: true,
  },
];

const testimonials = [
  {
    initials: "RK",
    name: "Rahul K.",
    location: "Mumbai, India",
    text: "I was sceptical at first, but after seeing the first month\u2019s results I was genuinely surprised. The algo handles everything \u2014 I just check my phone.",
    stars: 5,
  },
  {
    initials: "SC",
    name: "Sarah C.",
    location: "Lagos, Nigeria",
    text: "As a complete beginner I had no idea where to start. AlgoEdge\u2019s setup guidance made it easy. Two months in and I\u2019m seeing steady returns.",
    stars: 5,
  },
  {
    initials: "MF",
    name: "Marco F.",
    location: "Milan, Italy",
    text: "It\u2019s not a get-rich-quick thing \u2014 it\u2019s a system. Some weeks are slow, but overall it\u2019s been consistent. Happy I joined.",
    stars: 4,
  },
];

const faqs = [
  {
    q: "Is this safe?",
    a: "Our algo uses risk-managed strategies with defined stop-losses on every trade. No strategy is without risk, but ours is disciplined and rule-based.",
  },
  {
    q: "How much capital is required?",
    a: "You can start with as little as $100\u2013$500. We recommend starting small to get comfortable with the system before scaling.",
  },
  {
    q: "Do I need trading experience?",
    a: "No experience needed. The algo handles execution automatically. We guide you through the setup step by step in the WhatsApp group.",
  },
  {
    q: "Can I withdraw anytime?",
    a: "Yes. Your funds stay in your own broker account. You have full control of your capital at all times.",
  },
];

const monthlyBars = [
  { label: "Jan", pct: 72 },
  { label: "Feb", pct: 88 },
  { label: "Mar", pct: 65 },
  { label: "Apr", pct: 91 },
  { label: "May", pct: 78 },
];

const steps = [
  {
    title: "Join WhatsApp Group",
    desc: "Click the button and get instant access to our private trading community.",
    Icon: MessageCircle,
  },
  {
    title: "Get Setup Guidance",
    desc: "Our team walks you through broker setup and algo configuration step by step.",
    Icon: CheckCircle,
  },
  {
    title: "Algo Executes Trades",
    desc: "The algorithm monitors markets 24/5 and places trades automatically on your behalf.",
    Icon: TrendingUp,
  },
  {
    title: "Track Results Easily",
    desc: "View your performance in real-time directly from your broker dashboard.",
    Icon: BarChart2,
  },
];

const benefits = [
  {
    Icon: CheckCircle,
    title: "No Prior Experience Needed",
    desc: "Built for beginners. The algo does the heavy lifting. You don\u2019t need to know what a pip is to get started.",
  },
  {
    Icon: Clock,
    title: "Time-Saving Automated System",
    desc: "No chart watching. No late nights. The system runs 24/5 so you can focus on what matters to you.",
  },
  {
    Icon: Shield,
    title: "Structured Risk Management",
    desc: "Every trade has a predefined stop-loss. Your maximum risk per trade is always controlled and defined.",
  },
  {
    Icon: TrendingUp,
    title: "Works in Different Market Conditions",
    desc: "Trending, ranging, volatile \u2014 the algo adapts its strategy to current market behaviour.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-lg overflow-hidden"
      data-ocid={`faq.item.${index + 1}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 text-left text-foreground font-medium hover:bg-accent transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gold flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gold flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 text-muted-foreground text-sm leading-relaxed border-t border-border">
          {a}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowStickyBar(heroBottom < 0);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
        data-ocid="nav.panel"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl text-gold tracking-tight">
            AlgoEdge
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <button
              type="button"
              className="hover:text-foreground transition-colors"
              onClick={() => scrollTo("how-it-works")}
              data-ocid="nav.link"
            >
              How It Works
            </button>
            <button
              type="button"
              className="hover:text-foreground transition-colors"
              onClick={() => scrollTo("results")}
              data-ocid="nav.link"
            >
              Results
            </button>
            <button
              type="button"
              className="hover:text-foreground transition-colors"
              onClick={() => scrollTo("faq")}
              data-ocid="nav.link"
            >
              FAQ
            </button>
          </nav>
          <button
            type="button"
            className="bg-gold text-primary-foreground font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
            onClick={openWhatsApp}
            data-ocid="nav.primary_button"
          >
            <MessageCircle className="w-4 h-4" />
            Join Now
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden hero-gradient"
      >
        <div className="chart-grid" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-24">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 text-xs text-gold-bright font-medium mb-8">
            <Zap className="w-3.5 h-3.5" />
            Automated. Disciplined. Transparent.
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight uppercase text-gold mb-4">
            Turn Your Capital Into Consistent Growth
          </h1>
          <p className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mb-6">
            with Smart Algo Trading
          </p>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            No complicated charts. No emotional trading. Just a structured
            system that works while you live your life.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-gold text-primary-foreground font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-gold mb-5"
            onClick={openWhatsApp}
            data-ocid="hero.primary_button"
          >
            <MessageCircle className="w-5 h-5" />
            Join Free WhatsApp Group
          </button>
          <p className="text-amber-400 text-sm font-semibold mb-8">
            \u26a1 Limited slots available \u2014 Only a few spots left this
            month
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
            {["Free Access", "No Spam", "Cancel Anytime"].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-success" />
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section id="results" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            Verified Performance
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-foreground uppercase mb-4">
            Real Trades. Real Results.
          </h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-14">
            We show both wins and losses. Transparency builds trust \u2014 and
            trust is the foundation of every good system.
          </p>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            <div
              className="lg:col-span-2 glass-card rounded-2xl overflow-hidden"
              data-ocid="results.table"
            >
              <div className="px-5 py-4 border-b border-border flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Recent Trade Log
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="px-5 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Pair
                      </th>
                      <th className="px-3 py-3 text-left text-xs uppercase tracking-wider text-muted-foreground">
                        Dir
                      </th>
                      <th className="px-3 py-3 text-right text-xs uppercase tracking-wider text-muted-foreground">
                        Entry
                      </th>
                      <th className="px-3 py-3 text-right text-xs uppercase tracking-wider text-muted-foreground">
                        Exit
                      </th>
                      <th className="px-5 py-3 text-right text-xs uppercase tracking-wider text-muted-foreground">
                        P&amp;L
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {trades.map((t, i) => (
                      <tr
                        key={`${t.pair}-${t.type}-${t.entry}`}
                        className="border-b border-border/50 hover:bg-accent/40 transition-colors"
                        data-ocid={`results.row.${i + 1}`}
                      >
                        <td className="px-5 py-3 font-semibold text-foreground">
                          {t.pair}
                        </td>
                        <td className="px-3 py-3">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded ${
                              t.type === "BUY"
                                ? "bg-success-subtle text-success"
                                : "bg-destructive-subtle text-destructive-trade"
                            }`}
                          >
                            {t.type}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-right text-muted-foreground">
                          {t.entry}
                        </td>
                        <td className="px-3 py-3 text-right text-muted-foreground">
                          {t.exit}
                        </td>
                        <td
                          className={`px-5 py-3 text-right font-bold ${t.profit ? "text-success" : "text-destructive-trade"}`}
                        >
                          {t.pnl}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="glass-card rounded-2xl p-6 flex flex-col justify-between"
              data-ocid="results.card"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                  Avg. Monthly Growth
                </p>
                <p className="font-display font-extrabold text-5xl text-foreground mb-1">
                  6\u201310%
                </p>
                <p className="text-muted-foreground text-sm">
                  Projected monthly returns based on historical performance
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {monthlyBars.map((bar) => (
                  <div
                    key={bar.label}
                    className="flex items-center gap-3 text-xs"
                  >
                    <span className="w-8 text-muted-foreground">
                      {bar.label}
                    </span>
                    <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold rounded-full"
                        style={{ width: `${bar.pct}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-gold font-medium">
                      {bar.pct}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/70 italic">
                Past performance does not guarantee future results.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="glass-card rounded-2xl p-5"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center font-bold text-gold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3.5 h-3.5 ${star <= t.stars ? "text-gold fill-gold" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="py-20 sm:py-28 px-4 sm:px-6 bg-card/40"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            Simple Process
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-foreground uppercase mb-16">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center"
                data-ocid={`steps.item.${i + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mb-5 relative">
                  <step.Icon className="w-6 h-6 text-gold" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-20 sm:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            Why AlgoEdge
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-foreground uppercase mb-14">
            Why Smart Traders Choose AlgoEdge
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="glass-card rounded-2xl p-6 flex gap-4"
                data-ocid={`benefits.item.${i + 1}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <b.Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-16 px-4 sm:px-6 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground uppercase mb-8 text-center">
            Our Commitment to Transparency
          </h2>
          <div className="border-l-4 border-gold pl-6 py-2">
            <p className="text-muted-foreground leading-relaxed">
              Market conditions affect results. Past performance does not
              guarantee future returns. Our system follows a disciplined,
              rule-based strategy designed to manage risk \u2014 not eliminate
              it. Always trade with capital you can afford to allocate.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CTA */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden hero-gradient">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gold uppercase mb-4">
            Ready to Trade Smarter?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Join 500+ members who are already using AlgoEdge to grow their
            capital systematically.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-3 bg-gold text-primary-foreground font-bold text-lg px-10 py-4 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-gold"
            onClick={openWhatsApp}
            data-ocid="cta.primary_button"
          >
            <MessageCircle className="w-5 h-5" />
            Join Now \u2014 It&apos;s Free
          </button>
          <p className="mt-4 text-sm text-muted-foreground">
            Free access | No spam | Join 500+ members
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 bg-card/30">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-gold font-semibold mb-3">
            Got Questions?
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-foreground uppercase mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="font-display font-bold text-xl text-gold">
              AlgoEdge
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button
                type="button"
                onClick={() => scrollTo("how-it-works")}
                className="hover:text-foreground transition-colors"
              >
                How It Works
              </button>
              <button
                type="button"
                onClick={() => scrollTo("results")}
                className="hover:text-foreground transition-colors"
              >
                Results
              </button>
              <button
                type="button"
                onClick={() => scrollTo("faq")}
                className="hover:text-foreground transition-colors"
              >
                FAQ
              </button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/60 text-center max-w-2xl mx-auto mb-4 leading-relaxed">
            Trading carries risk and is not suitable for all investors. Past
            performance does not guarantee future results. AlgoEdge does not
            provide financial advice. Always seek independent advice before
            investing.
          </p>
          <p className="text-xs text-muted-foreground/50 text-center">
            &copy; {new Date().getFullYear()}. Built with \u2764\ufe0f using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-muted-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      {showStickyBar && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3"
          data-ocid="sticky.panel"
        >
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-gold text-primary-foreground font-bold text-base py-3.5 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-gold"
            onClick={openWhatsApp}
            data-ocid="sticky.primary_button"
          >
            <MessageCircle className="w-5 h-5" />
            Join Free WhatsApp Group
          </button>
        </div>
      )}
    </div>
  );
}
