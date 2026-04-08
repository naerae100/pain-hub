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
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-foreground/90 text-sm font-bold uppercase tracking-wider border border-slate-200">
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
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <img src={workshop.image} alt={workshop.title} className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-container py-16 grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">

                {/* Main Content */}
                <div className="space-y-12">

                    {/* About */}
                    <section>
                        <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                            About the Workshop
                        </h2>
                        {/* First paragraph as intro, rest as highlights */}
                        {workshop.description.length > 0 && (
                            <p className="text-lg text-foreground/90 leading-relaxed mb-6">{workshop.description[0]}</p>
                        )}
                        {workshop.description.length > 1 && (
                            <ul className="space-y-3">
                                {workshop.description.slice(1).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>

                    {/* Learning Objectives */}
                    {workshop.learningObjectives.length > 0 && (
                        <section>
                            <h3 className="text-3xl font-display font-bold text-foreground mb-6">Learning Objectives</h3>
                            <ul className="space-y-4">
                                {workshop.learningObjectives.map((obj, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <span className="text-foreground/90 leading-relaxed text-lg">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Program */}
                    {workshop.program.length > 0 && (
                        <section id="program" className="scroll-mt-32">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Program Schedule</h2>
                            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
                                {workshop.program.map((session, i) => (
                                    <div key={i}>
                                        <h4 className="text-xl font-display font-bold text-foreground mb-3">{session.title}</h4>
                                        <ul className="space-y-2">
                                            {session.items.map((item, j) => (
                                                <li key={j} className="text-foreground/90 text-lg flex items-start gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5" />
                                                    <span className="leading-relaxed">{item}</span>
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
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Expert Faculty</h2>
                            <div className="space-y-10">
                                {workshop.faculty.map((member, i) => (
                                    <div key={i} className={i < workshop.faculty.length - 1 ? "pb-10 border-b border-border/50" : ""}>
                                        <div className="flex items-center gap-5 mb-4">
                                            <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center shrink-0">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-2xl text-foreground">{member.name}</h4>
                                                <p className="font-semibold text-primary text-lg">{member.credentials}</p>
                                            </div>
                                        </div>
                                        {member.bio && member.bio.length > 0 && (
                                            <div className="space-y-3 text-foreground/90 leading-relaxed text-lg">
                                                {member.bio.map((paragraph, idx) => (
                                                    <p key={idx}>{paragraph}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Venue */}
                    <section>
                        <h2 className="text-3xl font-display font-bold text-foreground mb-6">Workshop Location</h2>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{workshop.venue.name}</h3>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-6">{workshop.venue.address}</p>

                        {workshop.venue.directions.length > 0 && (
                            <div className="mb-6">
                                <h4 className="font-bold text-foreground mb-3">Getting There</h4>
                                <ul className="space-y-2">
                                    {workshop.venue.directions.map((dir, i) => (
                                        <li key={i} className="text-foreground/90 text-lg">{dir}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {workshop.venue.googleMapsUrl && (
                            <div className="w-full h-[300px] rounded-2xl overflow-hidden">
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
                    </section>

                </div>

                {/* Sidebar */}
                <div className="relative">
                    <div className="sticky top-28 space-y-6">
                        <div className="bg-secondary/30 p-8 rounded-2xl">
                            <h3 className="text-xl font-display font-bold text-foreground mb-3">Join the Workshop</h3>
                            <p className="text-foreground/90 mb-6 leading-relaxed">
                                Secure your spot for hands-on training from leading interventional pain specialists.
                            </p>

                            {workshop.status === "OPEN" ? (
                                <Button
                                    onClick={handleRegister}
                                    className="w-full h-14 text-lg font-bold rounded-full mb-6"
                                >
                                    Register Now
                                </Button>
                            ) : (
                                <Button disabled className="w-full h-14 text-lg font-bold rounded-full mb-6 bg-slate-100 text-foreground/60">
                                    Registration Closed
                                </Button>
                            )}

                            <div className="space-y-3 text-left border-t border-border/50 pt-6">
                                {workshop.cpdPoints && (
                                    <div className="flex justify-between items-start gap-4">
                                        <span className="font-bold text-foreground">CPD Points</span>
                                        <span className="text-base font-medium text-right text-foreground/90 leading-snug">{workshop.cpdPoints}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-foreground">Duration</span>
                                    <span className="text-foreground/90 font-medium">1-Day Workshop</span>
                                </div>
                            </div>
                        </div>

                        {workshop.eligibility.length > 0 && (
                            <div>
                                <h4 className="font-bold text-foreground mb-4 text-lg">Who Should Attend?</h4>
                                <ul className="space-y-3">
                                    {workshop.eligibility.map((role, i) => (
                                        <li key={i} className="flex items-start gap-3 text-foreground/90">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="leading-relaxed text-base">{role}</span>
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
