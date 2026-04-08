import { Link } from "react-router-dom";
import { webinars } from "@/data/webinars";
import { Calendar, Clock, Users, Monitor, ArrowRight, Video } from "lucide-react";
import PageHero from "@/components/PageHero";
import educationHero from "@/assets/Education of minimally invasive procedures for pain management.png";

// Format date: "08.04.2026" → "8 Apr 2026"
const formatDate = (d: string) => {
  const [dd, mm, yyyy] = d.split(".");
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${parseInt(dd)} ${months[parseInt(mm) - 1]} ${yyyy}`;
};

// Month abbreviation for the date bubble
const monthAbbr = (d: string) => {
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return months[parseInt(d.split(".")[1]) - 1];
};

const ORANGE = "#d9522a";

// Gradient patterns per card (cycle through a few variations)
const cardGradients = [
  "linear-gradient(135deg, #d9522a 0%, #e8673c 100%)",
  "linear-gradient(135deg, #c44420 0%, #d9522a 100%)",
  "linear-gradient(135deg, #e06030 0%, #d9522a 80%, #c03d1a 100%)",
  "linear-gradient(135deg, #d04828 0%, #e0602e 100%)",
  "linear-gradient(135deg, #c84024 0%, #dc5c30 100%)",
  "linear-gradient(135deg, #da5428 0%, #e86a38 100%)",
  "linear-gradient(135deg, #d05030 0%, #d9522a 100%)",
];

const WebinarSeriesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        image={educationHero}
        title="H1 2026 Webinar Series"
        subtitle="Live online education from internationally recognised pain management and surgical experts — free to attend."
        breadcrumbs={[
          { label: "Clinical Education", href: "/clinical-education" },
          { label: "H1 2026 Webinars" },
        ]}
      />

      {/* ── Orange strip ── */}
      <section className="py-4 border-b border-border" style={{ background: ORANGE }}>
        <div className="section-container flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Monitor className="w-5 h-5 text-white/80" />
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Metrum Cryoflex — Don't Miss the Freeze!
            </span>
          </div>
          <span className="text-white/80 text-sm">7 events · H1 2026 · Free online</span>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-[2px]" style={{ background: ORANGE }} />
                <span className="text-sm font-bold uppercase tracking-wider" style={{ color: ORANGE }}>
                  Webinar Series · H1 2026
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Global Online Education, Free to Attend
              </h2>
              <p className="text-foreground/90 leading-relaxed text-lg">
                Seven live webinars from April to July 2026, featuring world-leading specialists in cryoanalgesia, laser therapy, phlebology, and interventional pain management. Each session is practical, evidence-based, and open to a wide range of healthcare professionals at no cost.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "7", label: "Live webinars" },
                { value: "Free", label: "No registration fee" },
                { value: "7", label: "International speakers" },
                { value: "H1 2026", label: "Apr – Jul 2026" },
              ].map(({ value, label }, i) => (
                <div key={i} className="border-l-2 pl-5" style={{ borderColor: ORANGE + "55" }}>
                  <p className="text-3xl font-display font-bold mb-1" style={{ color: ORANGE }}>{value}</p>
                  <p className="text-sm text-foreground/60">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Card Grid ── */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-foreground">Full Webinar Schedule</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, idx) => (
              <Link
                key={webinar.id}
                to={`/clinical-education/webinar/${webinar.slug}`}
                className="group block"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:border-[#d9522a]/30 transition-all duration-300 flex flex-col h-full">

                  {/* Visual header — orange gradient with decorative elements */}
                  <div className="relative h-48 overflow-hidden" style={{ background: cardGradients[idx % cardGradients.length] }}>
                    {/* Decorative rectangle corners (Metrum style) */}
                    <div className="absolute top-3 right-3 w-14 h-14 border-2 border-white/20 rounded-none pointer-events-none" />
                    <div className="absolute bottom-3 left-3 w-8 h-8 border-2 border-white/15 rounded-none pointer-events-none" />

                    {/* Video icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Date bubble top-left */}
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-2 text-center min-w-[52px]">
                      <p className="text-white text-xl font-bold leading-none">{webinar.date.split(".")[0]}</p>
                      <p className="text-white/80 text-xs uppercase tracking-wide">{monthAbbr(webinar.date)}</p>
                    </div>

                    {/* Status badge top-right */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                        Upcoming
                      </span>
                    </div>

                    {/* Webinar number */}
                    <div className="absolute bottom-4 right-4">
                      <span className="text-white/40 text-4xl font-black font-display leading-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-[#d9522a] transition-colors line-clamp-3">
                      {webinar.topic}
                    </h3>

                    <div className="mt-3 space-y-2 flex-1">
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Users className="w-4 h-4 shrink-0" style={{ color: ORANGE }} />
                        <span className="font-medium text-foreground/90">{webinar.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Calendar className="w-4 h-4 shrink-0" style={{ color: ORANGE }} />
                        <span>{formatDate(webinar.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Clock className="w-4 h-4 shrink-0" style={{ color: ORANGE }} />
                        <span>{webinar.timing}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Monitor className="w-4 h-4 shrink-0" style={{ color: ORANGE }} />
                        <span>Online · Free to attend</span>
                      </div>
                    </div>

                    {/* Footer link */}
                    <div className="mt-6 pt-5 border-t border-border flex items-center justify-between text-sm font-bold" style={{ color: ORANGE }}>
                      <span>View details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 border-t border-border">
        <div className="section-container text-center">
          <h3 className="text-2xl font-display font-bold text-foreground mb-4">Register Your Interest</h3>
          <p className="text-foreground/90 mb-8 max-w-xl mx-auto">
            Registration links are published by Metrum Cryoflex closer to each event date. Contact IPMA to register your interest and receive updates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.metrumcryoflex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm text-white transition-all hover:opacity-90"
              style={{ background: ORANGE }}
            >
              <Video className="w-4 h-4" /> Visit Metrum Cryoflex
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm border-2 transition-colors hover:opacity-80"
              style={{ borderColor: ORANGE, color: ORANGE }}
            >
              Contact IPMA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarSeriesPage;
