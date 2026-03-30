import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { workshops } from "@/data/workshops";
import { Calendar, MapPin, Clock, Award, ChevronDown, CheckCircle2, Navigation, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "../NotFound";
import { useCart } from "@/context/CartContext";

const WorkshopDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const workshop = workshops.find((w) => w.slug === slug);

    const handleRegister = () => {
        if (workshop) {
            addToCart(workshop);
            navigate("/checkout");
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!workshop) return <NotFound />;

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="relative bg-secondary/30 border-b border-border overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="section-container py-16 md:py-24 grid gap-12 lg:grid-cols-2 items-center relative z-10">
                    <div className="order-2 lg:order-1">
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            {workshop.status === "OPEN" ? (
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-bold uppercase tracking-wider border border-green-500/20">
                                    Registration Open
                                </span>
                            ) : (
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-wider border border-slate-200">
                                    {workshop.status}
                                </span>
                            )}
                            <span className="px-5 py-1.5 rounded-full bg-white border border-border text-sm font-medium text-muted-foreground flex items-center gap-2 shadow-sm">
                                <Calendar className="w-4 h-4 text-primary" /> {workshop.date.split('(')[0].trim()}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl border-l-[6px] border-primary pl-6 lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
                            {workshop.title}
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                            {workshop.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            {workshop.status === "OPEN" && (
                                <Button
                                    size="lg"
                                    onClick={handleRegister}
                                    className="h-14 px-10 text-lg font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                                >
                                    Register Now
                                </Button>
                            )}
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-10 text-lg font-semibold rounded-full border-2 hover:bg-secondary/50 transition-colors"
                                onClick={() => document.getElementById("program")?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Program
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                            <img src={workshop.image} alt={workshop.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-container py-20 grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">

                {/* Main Content */}
                <div className="space-y-16">

                    {/* About */}
                    <section className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-sm">
                        <h2 className="text-3xl font-display font-bold text-foreground mb-8 flex items-center gap-3">
                            About the Workshop
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            {workshop.description.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </section>

                    {/* Learning Objectives */}
                    {workshop.learningObjectives.length > 0 && (
                        <section className="bg-secondary/30 rounded-[2rem] p-8 md:p-12 border border-border relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
                            <h3 className="text-3xl font-display font-bold text-foreground mb-8 relative z-10">Learning Objectives</h3>
                            <ul className="grid gap-5 relative z-10">
                                {workshop.learningObjectives.map((obj, i) => (
                                    <li key={i} className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-1">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <span className="text-foreground/80 font-medium leading-relaxed text-lg">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Program */}
                    {workshop.program.length > 0 && (
                        <section id="program" className="scroll-mt-32">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-10">Program Schedule</h2>
                            <div className="grid gap-6">
                                {workshop.program.map((session, i) => (
                                    <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-50">
                                            <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{session.title}</h4>
                                            <span className="inline-flex px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wide">
                                                Session {i + 1}
                                            </span>
                                        </div>
                                        <ul className="space-y-4">
                                            {session.items.map((item, j) => (
                                                <li key={j} className="text-muted-foreground text-lg flex items-start gap-3">
                                                    <span className="w-2 h-2 rounded-full bg-primary/60 shrink-0 mt-2" />
                                                    <span className="leading-snug">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Faculty */}
                    {workshop.faculty.length > 0 && (
                        <section>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-10">Expert Faculty</h2>
                            <div className="space-y-8">
                                {workshop.faculty.map((member, i) => (
                                    <div key={i} className="bg-white border border-slate-100 shadow-sm rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 hover:shadow-md transition-shadow">
                                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] overflow-hidden border-4 border-slate-50 shrink-0 shadow-lg">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-2xl md:text-3xl text-foreground mb-2">{member.name}</h4>
                                            <p className="font-semibold text-primary mb-6 text-lg">{member.credentials}</p>
                                            {member.bio && member.bio.length > 0 && (
                                                <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                                                    {member.bio.map((paragraph, idx) => (
                                                        <p key={idx}>{paragraph}</p>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Venue */}
                    <section>
                        <h2 className="text-3xl font-display font-bold text-foreground mb-10">Workshop Location</h2>
                        <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                            <div className="p-8 md:p-12">
                                <div className="flex gap-6 mb-10">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-3">{workshop.venue.name}</h3>
                                        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{workshop.venue.address}</p>
                                    </div>
                                </div>

                                {workshop.venue.directions.length > 0 && (
                                    <div className="grid gap-4 p-8 bg-secondary/30 rounded-2xl mb-8">
                                        <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                            <Navigation className="w-5 h-5 text-primary" /> Getting There
                                        </h4>
                                        {workshop.venue.directions.map((dir, i) => (
                                            <div key={i} className="flex gap-4 text-muted-foreground bg-white/50 p-4 rounded-xl">
                                                <span>{dir}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {workshop.venue.googleMapsUrl && (
                                    <div className="w-full h-[300px] rounded-2xl overflow-hidden border border-slate-200">
                                        <iframe
                                            src={workshop.venue.googleMapsUrl}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>

                </div>

                {/* Sidebar */}
                <div className="relative">
                    <div className="sticky top-28 space-y-8">
                        <div className="bg-white p-8 lg:p-10 text-center border-t-[6px] border-t-primary shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Join the Workshop</h3>
                            <p className="text-muted-foreground mb-10 leading-relaxed">
                                Secure your spot to receive direct, hands-on training from leading interventional pain specialists.
                            </p>

                            {workshop.status === "OPEN" ? (
                                <Button
                                    onClick={handleRegister}
                                    className="w-full h-16 text-xl font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 mb-8"
                                >
                                    Register Now
                                </Button>
                            ) : (
                                <Button disabled className="w-full h-16 text-lg font-bold rounded-full mb-8 bg-slate-100 text-slate-400 border border-slate-200">
                                    Registration Closed
                                </Button>
                            )}

                            <div className="space-y-5 text-left border-t border-slate-100 pt-8">
                                {workshop.cpdPoints && (
                                    <div className="flex justify-between items-start gap-4">
                                        <span className="font-bold text-foreground flex items-center gap-2 shrink-0">
                                            <Award className="w-4 h-4 text-primary" /> CPD Points
                                        </span>
                                        <span className="text-sm font-medium text-right text-muted-foreground leading-snug">{workshop.cpdPoints}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center text-sm pt-2">
                                    <span className="font-bold text-foreground flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary" /> Duration
                                    </span>
                                    <span className="text-muted-foreground font-medium">1-Day Workshop</span>
                                </div>
                            </div>
                        </div>

                        {workshop.eligibility.length > 0 && (
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                                <h4 className="font-bold text-foreground border-b border-slate-100 pb-5 mb-5 flex items-center gap-2 text-lg">
                                    <UserCheck className="w-5 h-5 text-primary" /> Who Should Attend?
                                </h4>
                                <ul className="space-y-4">
                                    {workshop.eligibility.map((role, i) => (
                                        <li key={i} className="flex items-start gap-4 text-muted-foreground">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                                            <span className="leading-snug text-[15px]">{role}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkshopDetail;
