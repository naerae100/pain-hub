import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { workshops } from "@/data/workshops";
import { Calendar, MapPin, Clock, Award, ChevronDown, CheckCircle2, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
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
            {/* Hero Section - Clean & Minimal but Premium */}
            <section className="relative bg-secondary/30 border-b border-border">
                <div className="section-container py-16 md:py-24 grid gap-12 lg:grid-cols-2 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-3 mb-8">
                            {workshop.status === "OPEN" ? (
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 text-sm font-bold uppercase tracking-wider border border-green-500/20">
                                    Registration Open
                                </span>
                            ) : (
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-bold uppercase tracking-wider border border-slate-200">
                                    {workshop.status}
                                </span>
                            )}
                            <span className="px-4 py-1.5 rounded-full bg-white border border-border text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" /> {workshop.date}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
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

            <div className="section-container py-20 grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">

                {/* Main Content */}
                <div className="space-y-16">

                    {/* About */}
                    <section className="surface-card p-8 md:p-10">
                        <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                            About the Workshop
                        </h2>
                        <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed">
                            {workshop.description.map((p, i) => (
                                <p key={i} className="mb-4">{p}</p>
                            ))}
                        </div>
                    </section>

                    {/* Learning Objectives */}
                    {workshop.learningObjectives.length > 0 && (
                        <section className="bg-secondary/30 rounded-[2rem] p-8 md:p-10 border border-border">
                            <h3 className="text-xl font-display font-bold text-foreground mb-6">Learning Objectives</h3>
                            <ul className="grid gap-4">
                                {workshop.learningObjectives.map((obj, i) => (
                                    <li key={i} className="flex gap-4 items-start bg-white p-4 rounded-2xl border border-border/50 shadow-sm">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-0.5">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-foreground/80 font-medium leading-relaxed">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Program */}
                    {workshop.program.length > 0 && (
                        <section id="program" className="scroll-mt-32">
                            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Program Schedule</h2>
                            <div className="space-y-6">
                                {workshop.program.map((session, i) => (
                                    <div key={i} className="surface-card p-6 md:p-8 hover:border-primary/30 transition-colors group">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                            <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{session.title}</h4>
                                            <span className="inline-flex px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wide">
                                                Session {i + 1}
                                            </span>
                                        </div>
                                        <ul className="space-y-3">
                                            {session.items.map((item, j) => (
                                                <li key={j} className="text-muted-foreground text-base flex items-center gap-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                                    {item}
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
                            <h2 className="text-2xl font-display font-bold text-foreground mb-8">Expert Faculty</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {workshop.faculty.map((member, i) => (
                                    <div key={i} className="surface-card p-6 flex gap-5 items-center hover:border-primary/30 transition-colors">
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/10 shrink-0">
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-foreground mb-1">{member.name}</h4>
                                            <p className="text-sm text-muted-foreground font-medium">{member.credentials}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Venue */}
                    <section>
                        <h2 className="text-2xl font-display font-bold text-foreground mb-8">Location</h2>
                        <div className="surface-card p-0 overflow-hidden">
                            <div className="p-8 md:p-10">
                                <div className="flex gap-5 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{workshop.venue.name}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{workshop.venue.address}</p>
                                        {workshop.venue.googleMapsUrl && (
                                            <a href={workshop.venue.googleMapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-3 text-primary font-bold hover:underline">
                                                View on Google Maps <Navigation className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3 p-5 bg-secondary/30 rounded-2xl">
                                    {workshop.venue.directions.map((dir, i) => (
                                        <div key={i} className="flex gap-3 text-sm text-muted-foreground">
                                            <Navigation className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>{dir}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* Sidebar */}
                <div className="relative">
                    <div className="sticky top-28 space-y-8">
                        <div className="surface-card p-8 text-center border-t-4 border-t-primary shadow-xl">
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">Registration Fee</div>
                            <div className="text-5xl font-display font-bold text-foreground mb-8 tracking-tight">{workshop.price}</div>

                            {workshop.status === "OPEN" ? (
                                <Button
                                    onClick={handleRegister}
                                    className="w-full h-14 text-lg font-bold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 mb-8"
                                >
                                    Register Now
                                </Button>
                            ) : (
                                <Button disabled className="w-full h-14 rounded-full mb-8 bg-slate-100 text-slate-400">
                                    Closed
                                </Button>
                            )}

                            <div className="space-y-4 text-left border-t border-border pt-6">
                                {workshop.cpdPoints && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="font-bold text-foreground">CPD Points</span>
                                        <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">{workshop.cpdPoints}</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold text-foreground">Duration</span>
                                    <span className="text-muted-foreground">8 Hours</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold text-foreground">Includes</span>
                                    <span className="text-muted-foreground">Catering & Materials</span>
                                </div>
                            </div>
                        </div>

                        {workshop.eligibility.length > 0 && (
                            <div className="surface-card p-8">
                                <h4 className="font-bold text-foreground border-b border-border pb-4 mb-4">Who Should Attend?</h4>
                                <ul className="space-y-3">
                                    {workshop.eligibility.map((role, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {role}
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
