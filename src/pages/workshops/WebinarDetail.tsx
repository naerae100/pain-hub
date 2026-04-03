import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { webinars } from "@/data/webinars";
import {
  Calendar, Clock, Users, ChevronRight, Video, ArrowLeft,
  CheckCircle2, Globe, Monitor, BookOpen
} from "lucide-react";
import NotFound from "../NotFound";

const WebinarDetail = () => {
  const { slug } = useParams();
  const webinar = webinars.find((w) => w.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!webinar) return <NotFound />;

  // Format date: "08.04.2026" → "8 April 2026"
  const formatDate = (d: string) => {
    const [dd, mm, yyyy] = d.split(".");
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return `${parseInt(dd)} ${months[parseInt(mm) - 1]} ${yyyy}`;
  };

  const allWebinars = webinars.filter((w) => w.id !== webinar.id);

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #d9522a 0%, #e8673c 60%, #c44420 100%)" }}>
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-72 h-72 border-[3px] border-white/20 rounded-none translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-16 w-40 h-40 border-[3px] border-white/15 rounded-none pointer-events-none" />

        <div className="section-container py-16 md:py-24 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-10">
            <Link to="/clinical-education" className="hover:text-white transition-colors">Clinical Education</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/clinical-education/webinars-h1-2026" className="hover:text-white transition-colors">H1 2026 Webinars</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/50 truncate max-w-[200px]">{webinar.speaker}</span>
          </nav>

          {/* Status pill */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold uppercase tracking-wider border border-white/30">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
              Upcoming Webinar
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">
              <Monitor className="w-4 h-4" /> Online · Free to attend
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-8 max-w-3xl">
            {webinar.topic}
          </h1>

          {/* Speaker + logistics */}
          <div className="flex flex-wrap gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-base">{webinar.speaker}</p>
                <p className="text-white/70 text-xs">{webinar.speakerCredentials}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-white/70" />
              <span className="font-medium">{formatDate(webinar.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-white/70" />
              <span className="font-medium">{webinar.timing}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-white/70" />
              <span className="font-medium">Online (free registration)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

            {/* Left — content */}
            <div className="space-y-14">

              {/* About */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-[2px] bg-[#d9522a]" />
                  <span className="text-[#d9522a] text-sm font-bold uppercase tracking-wider">About This Webinar</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">Overview</h2>
                <p className="text-foreground/70 leading-relaxed text-lg">{webinar.description}</p>
              </div>

              {/* Target audience */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-[2px] bg-[#d9522a]" />
                  <span className="text-[#d9522a] text-sm font-bold uppercase tracking-wider">Who Should Attend</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Target Audience</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {webinar.targetGroups.map((group, i) => (
                    <div key={i} className="flex items-start gap-3 text-foreground/75">
                      <CheckCircle2 className="w-5 h-5 text-[#d9522a] shrink-0 mt-0.5" />
                      <span>{group}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Format */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-[2px] bg-[#d9522a]" />
                  <span className="text-[#d9522a] text-sm font-bold uppercase tracking-wider">Format</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Webinar Details</h2>
                <div className="grid sm:grid-cols-3 gap-8">
                  {[
                    { icon: Monitor, label: "Format", value: "Live online webinar" },
                    { icon: Globe, label: "Platform", value: "Metrum Cryoflex / Online" },
                    { icon: BookOpen, label: "Cost", value: "Free to attend" },
                  ].map(({ icon: Icon, label, value }, i) => (
                    <div key={i} className="border-l-2 border-[#d9522a]/30 pl-5">
                      <Icon className="w-5 h-5 text-[#d9522a] mb-2" />
                      <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold mb-1">{label}</p>
                      <p className="font-bold text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="border-l-4 border-[#d9522a] pl-6 py-2">
                <p className="text-foreground/70 text-sm mb-4">Registration details will be announced closer to the event date. Contact IPMA or visit the Metrum Cryoflex website to register your interest.</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.metrumcryoflex.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-200"
                    style={{ background: "#d9522a" }}
                  >
                    <Video className="w-4 h-4" />
                    Register at Metrum Cryoflex
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm border-2 border-[#d9522a] text-[#d9522a] hover:bg-[#d9522a]/5 transition-colors"
                  >
                    Register Interest via IPMA
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — sidebar */}
            <div className="space-y-6">

              {/* Quick info card */}
              <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
                <div className="p-1" style={{ background: "#d9522a" }}>
                  <p className="text-white text-center text-xs font-bold uppercase tracking-wider py-1">Event Details</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#d9522a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Date</p>
                      <p className="font-bold text-foreground">{formatDate(webinar.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#d9522a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Time</p>
                      <p className="font-bold text-foreground">{webinar.timing}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#d9522a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Speaker</p>
                      <p className="font-bold text-foreground">{webinar.speaker}</p>
                      <p className="text-foreground/60 text-xs">{webinar.speakerCredentials}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Monitor className="w-5 h-5 text-[#d9522a] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">Format</p>
                      <p className="font-bold text-foreground">Online · Free</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a
                    href="https://www.metrumcryoflex.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                    style={{ background: "#d9522a" }}
                  >
                    Register Now
                  </a>
                </div>
              </div>

              {/* Other webinars */}
              <div>
                <p className="text-sm font-bold text-foreground/60 uppercase tracking-wider mb-4">Other Webinars in This Series</p>
                <div className="space-y-3">
                  {allWebinars.slice(0, 4).map((w) => (
                    <Link
                      key={w.id}
                      to={`/clinical-education/webinar/${w.slug}`}
                      className="block p-4 rounded-xl border border-border hover:border-[#d9522a]/40 hover:bg-[#d9522a]/5 transition-all duration-200 group"
                    >
                      <p className="text-xs text-[#d9522a] font-semibold mb-1">{w.date}</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-[#d9522a] leading-snug">{w.topic}</p>
                      <p className="text-xs text-foreground/50 mt-1">{w.speaker}</p>
                    </Link>
                  ))}
                  <Link
                    to="/clinical-education/webinars-h1-2026"
                    className="flex items-center gap-2 text-sm font-bold text-[#d9522a] hover:underline mt-2"
                  >
                    View all webinars <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-16">
        <div className="section-container">
          <Link
            to="/clinical-education/webinars-h1-2026"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to H1 2026 Webinar Series
          </Link>
        </div>
      </section>
    </main>
  );
};

export default WebinarDetail;
