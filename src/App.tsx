// ============================================================
// 🌐 ALL-IN-ONE BILL TRACKER — PRESENTATION WEBSITE
// ============================================================
// 📝 To customize text/URLs/content → edit src/config.ts
// 🎨 To change layout/design → edit this file
// ============================================================

import { useState, useEffect, useRef, type ReactNode } from "react";
import {
  APP,
  NAV_LINKS,
  HERO,
  KEY_FEATURES,
  HOW_IT_WORKS,
  TESTIMONIALS,
  CURRENCIES,
  PREMIUM_COMPARISON,
  PRICING,
  FAQ_ITEMS,
  SUPPORT_CENTER,
  PRIVACY_POLICY,
  TERMS_OF_SERVICE,
  COOKIE_POLICY,
  FOOTER,
  STATS_BAR,
  WHY_CHOOSE_US,
  PAYMENT_OPTIONS,
  DOWNLOAD_SECTION,
} from "./config";

// =============================================================
// 🪝 HOOKS
// =============================================================

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// =============================================================
// 🧩 UTILITY COMPONENTS
// =============================================================

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionTitle({
  badge,
  title,
  subtitle,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <FadeIn className="mb-10 sm:mb-14 text-center">
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300 sm:text-sm">
          {badge}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400 sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}

function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all duration-300 sm:text-base cursor-pointer";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95"
      : "border border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500 active:scale-95";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

// =============================================================
// 📱 NAVIGATION
// =============================================================

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <img
            src={APP.logo}
            alt={APP.name}
            className="h-9 w-9 rounded-xl object-cover"
          />
          <span className="text-lg font-bold tracking-tight hidden sm:inline">
            {APP.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#download"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Download
          </a>
          <CTAButton href="#pricing">💎 Go Premium</CTAButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex lg:hidden flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
            <CTAButton href="#download" variant="secondary" className="w-full">
              📱 Download App
            </CTAButton>
            <CTAButton href="#pricing" className="w-full">
              💎 Go Premium
            </CTAButton>
          </div>
        </nav>
      </div>
    </header>
  );
}

// =============================================================
// 🏠 HERO SECTION
// =============================================================

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10">
      {/* Background effects */}
      <div className="absolute inset-0 bg-slate-950 pointer-events-none">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[128px] animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-[128px] animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-violet-500/5 blur-[200px] animate-pulse-glow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text */}
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Version {APP.version} — Now Available
              </span>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                {HERO.headline}{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {HERO.headlineHighlight}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg lg:text-xl leading-relaxed">
                {HERO.subheadline}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton href={APP.downloadUrl}>
                  🚀 {HERO.primaryCta}
                </CTAButton>
                <CTAButton href="#features" variant="secondary">
                  {HERO.secondaryCta} →
                </CTAButton>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {HERO.stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="text-2xl font-extrabold text-white sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Mock Dashboard Preview — visible on lg+ */}
          <FadeIn delay={200} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-2xl opacity-40" />
              <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900 p-5 shadow-2xl shadow-black/50 space-y-4">
                {/* Mini header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={APP.logo} alt="Logo" className="h-8 w-8 rounded-lg object-cover" />
                    <div>
                      <div className="h-3 w-36 rounded bg-slate-700" />
                      <div className="mt-1 h-2 w-24 rounded bg-slate-800" />
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-6 w-14 rounded-lg border border-slate-700 bg-slate-950" />
                    <div className="h-6 w-6 rounded-lg border border-slate-700 bg-slate-950" />
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Monthly income", val: "$4,500", color: "text-emerald-400" },
                    { label: "Monthly bills", val: "$1,250", color: "text-red-400" },
                    { label: "Balance left", val: "$3,250", color: "text-cyan-400" },
                    { label: "Upcoming in 7 days", val: "3", color: "text-amber-300" },
                  ].map((card) => (
                    <div key={card.label} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                      <p className="text-[10px] text-slate-500">{card.label}</p>
                      <p className={`text-lg font-bold ${card.color}`}>{card.val}</p>
                    </div>
                  ))}
                </div>

                {/* Financial Health */}
                <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">💯 Financial Health</span>
                    <span className="font-bold text-emerald-400">82/100</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                      style={{ width: "82%" }}
                    />
                  </div>
                </div>

                {/* Smart Tip */}
                <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-3 flex items-center gap-2">
                  <span className="text-sm">💡</span>
                  <p className="text-[11px] text-amber-200 font-medium">
                    3 bills due this week — total $185
                  </p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-1.5">
                  {[
                    { icon: "➕", label: "Add Bill" },
                    { icon: "✅", label: "Mark Paid" },
                    { icon: "💾", label: "Export" },
                    { icon: "🔄", label: "Refresh" },
                  ].map((action) => (
                    <div
                      key={action.label}
                      className="flex flex-col items-center gap-1 rounded-lg border border-slate-800 bg-slate-950 p-2"
                    >
                      <span className="text-sm">{action.icon}</span>
                      <span className="text-[9px] text-slate-500">{action.label}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="flex justify-around border-t border-slate-800 pt-3">
                  {[
                    { icon: "🏠", active: true },
                    { icon: "💰", active: false },
                    { icon: "📊", active: false },
                    { icon: "🎯", active: false },
                    { icon: "⚙️", active: false },
                  ].map((tab, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center gap-0.5 ${
                        tab.active ? "text-cyan-400" : "text-slate-600"
                      }`}
                    >
                      <span className="text-sm">{tab.icon}</span>
                      <div className="h-1.5 w-6 rounded bg-slate-800" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// ✨ FEATURES GRID
// =============================================================

function FeaturesGrid() {
  return (
    <Section id="features" className="bg-slate-900/30">
      <SectionTitle
        badge="✨ Features"
        title="Everything You Need in One App"
        subtitle="From smart dashboards to deep analytics — every tool is designed to give you complete financial clarity."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {KEY_FEATURES.map((feature, i) => (
          <FadeIn key={feature.title} delay={i * 80}>
            <div className="group h-full rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800 text-3xl transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-1 text-sm text-cyan-300 font-medium">
                {feature.tagline}
              </p>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {feature.highlights.slice(0, 3).map((h) => (
                  <span
                    key={h}
                    className="rounded-full border border-slate-700/60 bg-slate-950 px-2.5 py-1 text-[11px] text-slate-400"
                  >
                    {h.length > 30 ? h.substring(0, 30) + "…" : h}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

// =============================================================
// 🔄 HOW IT WORKS
// =============================================================

function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionTitle
        badge="🔄 How It Works"
        title={HOW_IT_WORKS.title}
        subtitle={HOW_IT_WORKS.subtitle}
      />
      <div className="grid gap-8 md:grid-cols-3">
        {HOW_IT_WORKS.steps.map((step, i) => (
          <FadeIn key={step.step} delay={i * 150}>
            <div className="relative text-center">
              {/* Connector line (desktop only) */}
              {i < HOW_IT_WORKS.steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-slate-700" />
              )}
              {/* Step number */}
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30">
                <span className="text-4xl">{step.icon}</span>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-xs font-black text-slate-950">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

// =============================================================
// 🔍 FEATURE SHOWCASE (Reusable)
// =============================================================

function FeatureShowcase({
  id,
  featureIndex,
  mockUI,
}: {
  id: string;
  featureIndex: number;
  mockUI: ReactNode;
}) {
  const feature = KEY_FEATURES[featureIndex];
  const isEven = featureIndex % 2 === 0;
  return (
    <Section id={id} className={isEven ? "" : "bg-slate-900/30"}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Text side */}
        <div className={isEven ? "" : "lg:order-2"}>
          <FadeIn>
            <span className="inline-block text-4xl mb-3">{feature.icon}</span>
            <h2 className="text-2xl font-extrabold sm:text-3xl lg:text-4xl">
              {feature.title}
            </h2>
            <p className="mt-1 text-sm text-cyan-300 font-semibold">
              {feature.tagline}
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              {feature.description}
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <ul className="mt-6 space-y-3">
              {feature.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] text-cyan-300">
                    ✓
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Mock UI side */}
        <div className={isEven ? "" : "lg:order-1"}>
          <FadeIn delay={250}>{mockUI}</FadeIn>
        </div>
      </div>
    </Section>
  );
}

// =============================================================
// 🖥️ MOCK UI COMPONENTS
// =============================================================

function DashboardMockUI() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 blur-xl opacity-50" />
      <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900 p-5 shadow-2xl shadow-black/40 space-y-4">
        {/* Payment Calendar */}
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold">📅 Payment Calendar</span>
            <span className="text-xs text-slate-500">June 2025</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-500">
            {"MoTuWeThFrSaSu".match(/.{1,2}/g)?.map((d) => (
              <div key={d} className="py-1 font-medium">{d}</div>
            ))}
            {[
              { d: "", paid: false }, { d: "", paid: false }, { d: "", paid: false },
              { d: "", paid: false }, { d: "", paid: false }, { d: "", paid: false },
              { d: "1", paid: false }, { d: "2", paid: false }, { d: "3", paid: false },
              { d: "4", paid: false }, { d: "5", paid: true }, { d: "6", paid: false },
              { d: "7", paid: false }, { d: "8", paid: false }, { d: "9", paid: true },
              { d: "10", paid: false }, { d: "11", paid: false }, { d: "12", paid: false },
              { d: "13", paid: false }, { d: "14", paid: false }, { d: "15", paid: true },
              { d: "16", paid: false }, { d: "17", paid: false }, { d: "18", paid: false },
              { d: "19", paid: false }, { d: "20", paid: false }, { d: "21", paid: false },
              { d: "22", paid: false }, { d: "23", paid: false }, { d: "24", paid: false },
              { d: "25", paid: true }, { d: "26", paid: false }, { d: "27", paid: false },
              { d: "28", paid: false }, { d: "29", paid: false }, { d: "30", paid: false },
            ].map((cell, i) =>
              cell.d ? (
                <div key={i} className="relative rounded p-1 text-slate-300">
                  {cell.d}
                  {cell.paid && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-emerald-400" />
                  )}
                </div>
              ) : (
                <div key={i} />
              )
            )}
          </div>
          <div className="mt-2 flex gap-3 text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Paid
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Upcoming
            </span>
          </div>
        </div>

        {/* Smart Tips */}
        <div className="space-y-2">
          {[
            { icon: "🚨", type: "red", title: "Electricity bill overdue", sub: "Due 3 days ago — $85.00" },
            { icon: "🌟", type: "emerald", title: "Great savings rate!", sub: "You're saving 72% of income" },
            { icon: "📅", type: "amber", title: "Netflix due in 2 days", sub: "Subscription — $15.99" },
          ].map((tip) => (
            <div key={tip.title} className={`rounded-lg border border-${tip.type}-500/30 bg-${tip.type}-950/20 p-3 flex items-start gap-2`}>
              <span className="text-sm">{tip.icon}</span>
              <div>
                <p className={`text-xs font-medium text-${tip.type}-200`}>{tip.title}</p>
                <p className="text-[10px] text-slate-500">{tip.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BillsMockUI() {
  const bills = [
    { name: "Electricity", icon: "💡", amount: "$85.00", due: 12, cat: "Utilities", paid: true },
    { name: "Netflix", icon: "🔄", amount: "$15.99", due: 15, cat: "Entertainment", paid: false },
    { name: "Internet", icon: "💡", amount: "$59.99", due: 18, cat: "Utilities", paid: false },
    { name: "Spotify", icon: "🔄", amount: "$9.99", due: 22, cat: "Entertainment", paid: false },
    { name: "Rent", icon: "💡", amount: "$1,200", due: 1, cat: "Housing", paid: true },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-xl opacity-50" />
      <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900 p-5 shadow-2xl shadow-black/40 space-y-3">
        {/* Templates */}
        <div className="flex flex-wrap gap-1.5">
          {["Netflix", "Spotify", "Internet", "Rent", "Phone"].map((t) => (
            <span key={t} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[10px] text-slate-300">
              {t}
            </span>
          ))}
        </div>
        {/* Bills list */}
        {bills.map((bill) => (
          <div key={bill.name} className="rounded-lg border border-slate-800 bg-slate-950 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">{bill.icon}</span>
              <div>
                <p className="text-xs font-medium">{bill.name}</p>
                <p className="text-[10px] text-slate-500">{bill.amount} · day {bill.due} · {bill.cat}</p>
              </div>
            </div>
            <span className={`text-[10px] font-medium ${bill.paid ? "text-emerald-400" : "text-amber-400"}`}>
              {bill.paid ? "✓ Paid" : `${bill.due - 10}d left`}
            </span>
          </div>
        ))}
        {/* Search bar */}
        <div className="rounded-lg border border-slate-800 bg-slate-950 p-2.5 flex items-center gap-2">
          <span className="text-slate-500 text-xs">🔍</span>
          <div className="h-2.5 flex-1 rounded bg-slate-800" />
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockUI() {
  const categories = [
    { name: "Housing", pct: 45, color: "#06b6d4" },
    { name: "Utilities", pct: 25, color: "#f59e0b" },
    { name: "Entertainment", pct: 18, color: "#8b5cf6" },
    { name: "Food", pct: 12, color: "#10b981" },
  ];

  const months = [
    { label: "Jan", val: 35 }, { label: "Feb", val: 42 }, { label: "Mar", val: 38 },
    { label: "Apr", val: 50 }, { label: "May", val: 45 }, { label: "Jun", val: 55, current: true },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-violet-500/10 blur-xl opacity-50" />
      <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900 p-5 shadow-2xl shadow-black/40 space-y-5">
        {/* Income vs Expenses */}
        <div>
          <p className="text-xs font-semibold mb-3">📈 Income vs Expenses</p>
          <div className="flex items-end gap-4 h-36">
            {[
              { label: "Income", h: "80%", color: "#10b981" },
              { label: "Expenses", h: "28%", color: "#ef4444" },
              { label: "Balance", h: "72%", color: "#06b6d4" },
            ].map((bar) => (
              <div key={bar.label} className="flex-1 flex flex-col items-center">
                <div className="w-full rounded-t bg-slate-800 h-32 flex items-end overflow-hidden">
                  <div className="w-full rounded-t" style={{ height: bar.h, backgroundColor: bar.color }} />
                </div>
                <p className="mt-1 text-[10px] font-medium" style={{ color: bar.color }}>{bar.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* 6-month trend */}
        <div>
          <p className="text-xs font-semibold mb-3">📉 6-Month Trend</p>
          <div className="flex items-end gap-1.5 h-24">
            {months.map((m) => (
              <div key={m.label} className="flex-1 flex flex-col items-center">
                <div className="w-full rounded-t bg-slate-800 h-20 flex items-end overflow-hidden">
                  <div className="w-full rounded-t" style={{ height: `${m.val}%`, backgroundColor: m.current ? "#06b6d4" : "#475569" }} />
                </div>
                <p className={`mt-1 text-[9px] ${m.current ? "font-bold text-cyan-300" : "text-slate-600"}`}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Category breakdown */}
        <div>
          <p className="text-xs font-semibold mb-3">📊 By Category</p>
          <div className="space-y-2">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="flex justify-between text-[10px] mb-1">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: cat.color }} />
                    {cat.name}
                  </span>
                  <span className="text-slate-500">{cat.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-2 rounded-full" style={{ width: `${cat.pct}%`, backgroundColor: cat.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GoalsMockUI() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-violet-500/10 to-amber-500/10 blur-xl opacity-50" />
      <div className="relative rounded-2xl border border-slate-700/50 bg-slate-900 p-5 shadow-2xl shadow-black/40 space-y-4">
        {/* Accounts */}
        <div>
          <p className="text-xs font-semibold mb-2">🏦 Accounts</p>
          <div className="space-y-2">
            {[
              { icon: "🏦", name: "Main Bank", bal: "$8,450", color: "#06b6d4" },
              { icon: "💵", name: "Cash", bal: "$320", color: "#10b981" },
              { icon: "📱", name: "Mobile Pay", bal: "$1,200", color: "#8b5cf6" },
            ].map((acc) => (
              <div key={acc.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 p-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full text-sm" style={{ backgroundColor: acc.color + "20" }}>
                    {acc.icon}
                  </div>
                  <span className="text-xs font-medium">{acc.name}</span>
                </div>
                <span className="text-xs font-bold text-emerald-400">{acc.bal}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Budget Guard */}
        <div className="rounded-lg border border-slate-800 bg-slate-950 p-3">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-slate-400">🛡️ Budget Guard</span>
            <span className="font-medium text-amber-300">62% used</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-amber-400" style={{ width: "62%" }} />
          </div>
          <p className="mt-1 text-[10px] text-slate-500">$775 remaining of $1,250 budget</p>
        </div>
        {/* Savings Goal */}
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/10 p-3">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-xs font-medium">🎯 Vacation Fund</p>
              <p className="text-[10px] text-slate-500">$1,800 / $3,000</p>
            </div>
            <span className="text-xs font-bold text-emerald-400">60%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <div className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500" style={{ width: "60%" }} />
          </div>
          <p className="mt-1 text-[10px] text-slate-500">$1,200 left · 3 months to go</p>
        </div>
        {/* Projection */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { months: "3mo", amount: "$400" },
            { months: "6mo", amount: "$200" },
            { months: "12mo", amount: "$100" },
          ].map((p) => (
            <div key={p.months} className="rounded-lg border border-slate-800 bg-slate-950 p-2 text-center">
              <p className="text-[10px] text-slate-500">{p.months}</p>
              <p className="text-xs font-bold text-slate-200">{p.amount}/mo</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =============================================================
// 💬 TESTIMONIALS
// =============================================================

function TestimonialsSection() {
  return (
    <Section id="testimonials" className="">
      <SectionTitle
        badge="💬 Testimonials"
        title="Loved by Thousands"
        subtitle="See what our users say about taking control of their finances."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.name} delay={i * 100}>
            <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/80 p-5 flex flex-col transition-all hover:border-slate-700 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <div className="mb-3 flex gap-0.5">
                {"★★★★★".split("").map((star, j) => (
                  <span key={j} className="text-amber-400 text-sm">{star}</span>
                ))}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">"{t.text}"</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

// =============================================================
// 💱 CURRENCY SHOWCASE
// =============================================================

function CurrencyShowcase() {
  return (
    <Section id="currencies" className="bg-slate-900/30">
      <SectionTitle
        badge="💱 Multi-Currency"
        title="22+ Currencies with Live Rates"
        subtitle="Track bills and manage finances in your local currency with real-time exchange rate conversion."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {CURRENCIES.map((c, i) => (
          <FadeIn key={c.code} delay={i * 30}>
            <div className="group rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center transition-all hover:border-cyan-500/30 hover:bg-slate-900 hover:shadow-md hover:shadow-cyan-500/5 hover:-translate-y-0.5">
              <span className="text-2xl">{c.flag}</span>
              <p className="mt-1 text-sm font-bold">{c.code}</p>
              <p className="text-[10px] text-slate-500">{c.name}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={200} className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live FX rates · Auto-refresh · Fallback for offline
        </div>
      </FadeIn>
    </Section>
  );
}

// =============================================================
// 💎 PREMIUM COMPARISON
// =============================================================

function PremiumComparison() {
  return (
    <Section id="premium" className="">
      <SectionTitle
        badge="💎 Premium"
        title="Free vs Premium"
        subtitle="Start free, upgrade when you're ready. Unlock the full power of All-in-One Bill Tracker."
      />
      <FadeIn>
        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950">
                {PREMIUM_COMPARISON.headers.map((h) => (
                  <th key={h} className="px-6 py-4 text-left font-semibold text-slate-300 last:text-center">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PREMIUM_COMPARISON.rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-800/50 last:border-b-0">
                  <td className="px-6 py-3 text-slate-300 font-medium">{row.feature}</td>
                  <td className="px-6 py-3 text-slate-400">
                    {row.free === "✓" ? (
                      <span className="text-emerald-400">✓</span>
                    ) : row.free === "✗" ? (
                      <span className="text-slate-600">—</span>
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {["✓", "✓ Full", "✓ Advanced"].includes(row.premium) ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-300">
                        {row.premium}
                      </span>
                    ) : (
                      <span className="text-amber-300 font-medium">{row.premium}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="grid gap-4 md:hidden">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-lg font-bold mb-3">🆓 Free Plan</h3>
            <div className="space-y-2">
              {PREMIUM_COMPARISON.rows.map((row, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{row.feature}</span>
                  <span className={row.free === "✓" ? "text-emerald-400" : row.free === "✗" ? "text-slate-600" : "text-slate-300"}>
                    {row.free === "✗" ? "—" : row.free}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
            <h3 className="text-lg font-bold mb-3">💎 Premium</h3>
            <div className="space-y-2">
              {PREMIUM_COMPARISON.rows.map((row, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{row.feature}</span>
                  <span className="text-emerald-300">{row.premium}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

// =============================================================
// 💲 PRICING
// =============================================================

function PricingSection() {
  return (
    <Section id="pricing" className="bg-slate-900/30">
      <SectionTitle
        badge="💲 Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that works for you. Upgrade, downgrade, or cancel anytime."
      />
      <div className="mx-auto max-w-4xl grid gap-6 sm:grid-cols-2">
        {/* Monthly */}
        <FadeIn>
          <div className="h-full rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col">
            <h3 className="text-lg font-bold">{PRICING.monthly.label}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">{PRICING.monthly.price}</span>
              <span className="text-slate-500">{PRICING.monthly.period}</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {PRICING.monthly.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="#premium-pay"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-3 text-sm font-bold text-slate-200 transition-all hover:bg-slate-800 hover:border-slate-500 active:scale-95"
            >
              {PRICING.monthly.cta}
            </a>
          </div>
        </FadeIn>

        {/* Yearly */}
        <FadeIn delay={100}>
          <div className="relative h-full rounded-2xl border border-cyan-500/30 bg-slate-900 p-6 flex flex-col shadow-lg shadow-cyan-500/5">
            {PRICING.yearly.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-1 text-xs font-bold text-slate-950">
                {PRICING.yearly.badge}
              </span>
            )}
            <h3 className="text-lg font-bold">{PRICING.yearly.label}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">{PRICING.yearly.price}</span>
              <span className="text-slate-500">{PRICING.yearly.period}</span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {PRICING.yearly.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400">✓</span> {f}
                </li>
              ))}
            </ul>
            <a
              href="#premium-pay"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 active:scale-95"
            >
              {PRICING.yearly.cta}
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

// =============================================================
// ❓ FAQ
// =============================================================

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section id="faq">
      <SectionTitle
        badge="❓ FAQ"
        title="Frequently Asked Questions"
        subtitle="Got questions? We've got answers."
      />
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <FadeIn key={i} delay={i * 50}>
            <div className="rounded-xl border border-slate-800 bg-slate-900/80 transition-colors hover:border-slate-700">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold sm:text-base pr-4">
                  {item.question}
                </span>
                <span
                  className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-4 text-sm text-slate-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

// =============================================================
// 📞 SUPPORT CENTER
// =============================================================

function SupportCenter() {
  return (
    <Section id="support" className="bg-slate-900/30">
      <SectionTitle
        badge="📞 Support"
        title={SUPPORT_CENTER.title}
        subtitle={SUPPORT_CENTER.description}
      />

      {/* "We're Here to Help" banner */}
      <FadeIn className="mb-10">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-emerald-500/10 p-8 sm:p-10 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
          <span className="text-5xl sm:text-6xl">🤝</span>
          <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold">
            {SUPPORT_CENTER.subtitle}
          </h3>
          <p className="mt-3 text-slate-400 max-w-lg mx-auto leading-relaxed">
            {SUPPORT_CENTER.description}
          </p>
        </div>
      </FadeIn>

      {/* Support channels */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SUPPORT_CENTER.channels.map((channel, i) => (
          <FadeIn key={channel.title} delay={i * 100}>
            <a
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800 text-3xl transition-transform group-hover:scale-110">
                {channel.icon}
              </div>
              <h3 className="text-lg font-bold">{channel.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400 leading-relaxed">
                {channel.description}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                {channel.action}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>

      {/* Bottom help prompt */}
      <FadeIn delay={200} className="mt-10 text-center">
        <div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-6 py-4">
          <p className="text-sm text-slate-400">
            Can't find what you're looking for?
          </p>
          <CTAButton href={`mailto:${APP.contactEmail}`} variant="secondary" className="text-xs px-4 py-2">
            📧 Contact Us Directly
          </CTAButton>
        </div>
      </FadeIn>
    </Section>
  );
}

// =============================================================
// 🚀 CTA SECTION
// =============================================================

function CTASection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-slate-950 to-emerald-500/10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <span className="text-5xl sm:text-6xl">💰</span>
          <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Ready to Take Control of{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Your Finances?
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            Join thousands of users who trust {APP.name} to manage
            their bills, subscriptions, and savings goals — across 22+ currencies.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href={APP.downloadUrl}>🚀 Download Free</CTAButton>
            <CTAButton href="#pricing" variant="secondary">💎 View Pricing</CTAButton>
          </div>
          <p className="mt-6 text-xs text-slate-600">
            Free to start · No credit card required · Cancel anytime
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

// =============================================================
// 🦶 UPGRADED FOOTER
// =============================================================

function FooterSection({ onLegalClick }: { onLegalClick: (page: "privacy" | "terms" | "cookies" | null) => void }) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={APP.logo}
                alt={APP.name}
                className="h-10 w-10 rounded-xl object-cover"
              />
              <span className="text-lg font-bold">{APP.name}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mb-6">
              {FOOTER.tagline}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { name: "Facebook", href: APP.social.facebook, icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                )},
                { name: "Instagram", href: APP.social.instagram, icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                )},
                { name: "YouTube", href: APP.social.youtube, icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                )},
                { name: "TikTok", href: APP.social.tiktok, icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                )},
                { name: "X (Twitter)", href: APP.social.twitter, icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                )},
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:text-white hover:border-slate-700 hover:bg-slate-800"
                  title={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-200 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-cyan-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-200 uppercase tracking-wider">
              Features
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.links.features.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-cyan-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-200 uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2.5">
              {FOOTER.links.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-cyan-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-slate-200 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onLegalClick("privacy")}
                  className="text-sm text-slate-500 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  🛡️ Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLegalClick("terms")}
                  className="text-sm text-slate-500 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  📜 Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLegalClick("cookies")}
                  className="text-sm text-slate-500 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  🍪 Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Secure Payment Section */}
      <div className="border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center gap-5">
            {/* Security badge */}
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-semibold text-emerald-400">100% Secure Payment</span>
            </div>

            {/* Payment methods */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {APP.paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="flex items-center gap-1.5 rounded-lg border border-slate-700/50 bg-slate-900 px-3 py-2 text-xs text-slate-400"
                >
                  <span className="text-base">{method.icon}</span>
                  <span className="font-medium">{method.name}</span>
                </div>
              ))}
            </div>

            {/* Trust text */}
            <p className="text-xs text-slate-600 text-center max-w-md">
              🔒 Payments processed securely via <strong className="text-slate-400">Gumroad</strong> (supports PayPal, credit cards &amp; Apple Pay). Your payment info is encrypted and never stored on our servers. Cancel anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            {FOOTER.bottomText}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLegalClick("privacy")}
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onLegalClick("terms")}
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onLegalClick("cookies")}
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =============================================================
// 📜 LEGAL MODAL (Privacy / Terms / Cookies)
// =============================================================

type LegalDoc = typeof PRIVACY_POLICY;

function LegalModal({
  doc,
  isOpen,
  onClose,
}: {
  doc: LegalDoc;
  isOpen: boolean;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black/50 transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{doc.icon}</span>
            <div>
              <h2 className="text-lg font-bold sm:text-xl">{doc.title}</h2>
              <p className="text-xs text-slate-500">Last updated: {doc.lastUpdated}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-800 text-slate-400 transition-all hover:bg-slate-700 hover:text-white active:scale-90"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {doc.sections.map((section, i) => (
            <div key={i}>
              <h3 className="text-sm font-bold text-cyan-300 mb-2 flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-[10px] text-cyan-300 font-bold">
                  {i + 1}
                </span>
                {section.heading}
              </h3>
              <div className="ml-8 text-sm text-slate-400 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4 shrink-0">
          <p className="text-xs text-slate-600">
            📧 Questions? <a href={`mailto:${APP.contactEmail}`} className="text-cyan-400 hover:underline">{APP.contactEmail}</a>
          </p>
          <button
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-5 py-2 text-sm font-bold text-slate-950 transition-all hover:scale-105 active:scale-95"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

// =============================================================
// 📊 STATS BAR (Social Proof)
// =============================================================

function StatsBar() {
  return (
    <section className="relative border-y border-slate-800/50 bg-gradient-to-r from-cyan-500/5 via-slate-900 to-emerald-500/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <FadeIn>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {STATS_BAR.map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-2xl">{stat.icon}</span>
                <p className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">{stat.value}</p>
                <p className="text-xs text-slate-500 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// =============================================================
// 🏆 WHY CHOOSE US
// =============================================================

function WhyChooseUs() {
  return (
    <Section id="why-us" className="">
      <SectionTitle
        badge="🏆 Why Us"
        title={WHY_CHOOSE_US.title}
        subtitle={WHY_CHOOSE_US.subtitle}
      />
      <FadeIn>
        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950">
                <th className="px-6 py-4 text-left font-semibold text-slate-300">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-cyan-300 bg-cyan-500/5">
                  ✅ All-in-One Bill Tracker
                </th>
                <th className="px-6 py-4 text-center font-semibold text-slate-500">❌ Other Apps</th>
              </tr>
            </thead>
            <tbody>
              {WHY_CHOOSE_US.rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-800/50 last:border-b-0">
                  <td className="px-6 py-3 text-slate-300 font-medium">{row.feature}</td>
                  <td className="px-6 py-3 text-center bg-cyan-500/5">
                    {row.us.startsWith("✓") ? (
                      <span className="text-emerald-300 font-medium">{row.us}</span>
                    ) : (
                      <span className="text-cyan-200 font-medium">{row.us}</span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-center">
                    {row.other === "✗" ? (
                      <span className="text-red-400/60">—</span>
                    ) : (
                      <span className="text-slate-500">{row.other}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 md:hidden">
          {WHY_CHOOSE_US.rows.map((row, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-sm font-bold text-slate-200 mb-2">{row.feature}</p>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-cyan-300 font-medium">All-in-One Bill Tracker</span>
                  <p className={`text-xs ${row.us.startsWith("✓") ? "text-emerald-300" : "text-cyan-200"}`}>{row.us}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-600 font-medium">Other Apps</span>
                  <p className="text-xs text-slate-500">{row.other}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}

// =============================================================
// 📲 DOWNLOAD SECTION
// =============================================================

function DownloadSection() {
  return (
    <section id="download" className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-500/5 to-emerald-500/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        <FadeIn>
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-8 sm:p-12 text-center">
            {/* App icon */}
            <img
              src={APP.logo}
              alt={APP.name}
              className="mx-auto h-20 w-20 rounded-2xl shadow-lg shadow-cyan-500/20 mb-6"
            />

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {DOWNLOAD_SECTION.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {DOWNLOAD_SECTION.subtitle}
            </p>

            {/* Feature pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {DOWNLOAD_SECTION.features.map((f) => (
                <span key={f} className="rounded-full border border-slate-700 bg-slate-900/50 px-4 py-1.5 text-xs text-slate-300">
                  {f}
                </span>
              ))}
            </div>

            {/* Download buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Google Play Button */}
              <a
                href={APP.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" fill="#000"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500 leading-none">GET IT ON</p>
                  <p className="text-sm font-bold text-gray-900 leading-tight">Google Play</p>
                </div>
              </a>

              {/* App Store Button (placeholder) */}
              <a
                href={APP.appStoreUrl}
                className="inline-flex items-center gap-3 rounded-xl border border-slate-600 bg-slate-900 px-6 py-3 transition-all hover:bg-slate-800 hover:border-slate-500 hover:scale-105 active:scale-95"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 leading-none">COMING SOON ON</p>
                  <p className="text-sm font-bold text-white leading-tight">App Store</p>
                </div>
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-600">
              Free download · No credit card required · Set up in 2 minutes
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// =============================================================
// 💎 PREMIUM PAYMENT PAGE
// =============================================================

function PremiumPaymentPage() {
  return (
    <Section id="premium-pay" className="bg-slate-900/30">
      <SectionTitle
        badge="💎 Upgrade Now"
        title={PAYMENT_OPTIONS.title}
        subtitle={PAYMENT_OPTIONS.subtitle}
      />

      {/* How it works */}
      <FadeIn className="mb-10">
        <div className="mx-auto max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PAYMENT_OPTIONS.instructions.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-xl">
                {s.icon}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-snug">{s.text}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Accepted Payment Methods */}
      <FadeIn className="mb-8">
        <div className="mx-auto max-w-md flex flex-wrap justify-center gap-3">
          {PAYMENT_OPTIONS.acceptedPayments.map((p) => (
            <span key={p.name} className="rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs text-slate-300 flex items-center gap-1.5">
              <span className="text-sm">{p.icon}</span> {p.name}
            </span>
          ))}
        </div>
      </FadeIn>

      {/* Single Gumroad Payment Card */}
      <FadeIn delay={100}>
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl border border-pink-500/30 bg-slate-900 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500/10 border border-pink-500/20 text-3xl">
                {PAYMENT_OPTIONS.gumroad.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold">{PAYMENT_OPTIONS.gumroad.name}</h3>
                <p className="text-xs text-slate-400">{PAYMENT_OPTIONS.gumroad.description}</p>
              </div>
            </div>

            {/* Monthly */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm font-bold">Monthly Plan</p>
                  <p className="text-xs text-slate-500">$2.99/month · Cancel anytime</p>
                </div>
                <span className="text-2xl font-extrabold text-white">$2.99</span>
              </div>
              <a
                href={PAYMENT_OPTIONS.gumroad.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-xl bg-pink-600 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-pink-500 hover:scale-[1.02] active:scale-95"
              >
                🛒 Subscribe — Monthly
              </a>
            </div>

            {/* Yearly */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
              <div className="flex items-center justify-between mb-1">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold">Yearly Plan</p>
                    <span className="rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-2 py-0.5 text-[10px] font-bold text-slate-950">SAVE 44%</span>
                  </div>
                  <p className="text-xs text-slate-500">$19.99/year · Best value</p>
                </div>
                <span className="text-2xl font-extrabold text-amber-300">$19.99</span>
              </div>
              <p className="text-[11px] text-emerald-300 mb-3">💰 Save $15.89 per year vs monthly!</p>
              <a
                href={PAYMENT_OPTIONS.gumroad.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-3 text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-95"
              >
                🛒 Subscribe — Yearly
              </a>
            </div>

            <p className="mt-4 text-[11px] text-slate-500 text-center">
              ⚠️ Use the same email address you used in the app for automatic activation.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Premium Features */}
      <FadeIn delay={200} className="mt-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="text-lg font-bold text-center mb-4">✨ Everything included in Premium</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {PAYMENT_OPTIONS.premiumFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Trust badges */}
      <FadeIn delay={300} className="mt-6 text-center">
        <div className="inline-flex flex-wrap justify-center gap-4 text-xs text-slate-600">
          <span className="flex items-center gap-1">🔒 Secure payment</span>
          <span className="flex items-center gap-1">↩️ Cancel anytime</span>
          <span className="flex items-center gap-1">⚡ Instant activation</span>
          <span className="flex items-center gap-1">📧 support@app4clients.com</span>
        </div>
      </FadeIn>
    </Section>
  );
}

// =============================================================
// ⬆️ BACK TO TOP BUTTON
// =============================================================

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-90 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

// =============================================================
// 📱 MOBILE FLOATING DOWNLOAD BAR
// =============================================================

function MobileDownloadBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 py-3 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <img src={APP.logo} alt="" className="h-8 w-8 rounded-lg object-cover shrink-0" />
          <div className="min-w-0">
            <p className="text-xs font-bold truncate">{APP.name}</p>
            <p className="text-[10px] text-slate-500">Free download</p>
          </div>
        </div>
        <a
          href="#download"
          className="shrink-0 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 active:scale-95 transition-transform"
        >
          🚀 Install
        </a>
      </div>
    </div>
  );
}

// =============================================================
// 🏠 MAIN APP
// =============================================================

export default function App() {
  const [legalModal, setLegalModal] = useState<"privacy" | "terms" | "cookies" | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <FeaturesGrid />
      <HowItWorks />

      {/* Feature Deep-Dive Showcases */}
      <FeatureShowcase id="dashboard" featureIndex={0} mockUI={<DashboardMockUI />} />
      <FeatureShowcase id="bills" featureIndex={1} mockUI={<BillsMockUI />} />
      <FeatureShowcase id="analytics" featureIndex={2} mockUI={<AnalyticsMockUI />} />
      <FeatureShowcase id="goals" featureIndex={3} mockUI={<GoalsMockUI />} />

      <TestimonialsSection />
      <WhyChooseUs />
      <CurrencyShowcase />
      <PremiumComparison />
      <PricingSection />
      <FAQSection />
      <SupportCenter />
      <CTASection />
      <PremiumPaymentPage />
      <DownloadSection />
      <FooterSection onLegalClick={setLegalModal} />

      {/* Floating elements */}
      <BackToTop />
      <MobileDownloadBar />

      {/* Legal Modals */}
      <LegalModal doc={PRIVACY_POLICY} isOpen={legalModal === "privacy"} onClose={() => setLegalModal(null)} />
      <LegalModal doc={TERMS_OF_SERVICE} isOpen={legalModal === "terms"} onClose={() => setLegalModal(null)} />
      <LegalModal doc={COOKIE_POLICY} isOpen={legalModal === "cookies"} onClose={() => setLegalModal(null)} />
    </div>
  );
}
