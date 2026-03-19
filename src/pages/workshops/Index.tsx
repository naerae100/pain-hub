import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { workshops } from "@/data/workshops";
import {
    Calendar, MapPin, ArrowRight, BookOpen, Microscope, Eye, UserCheck, Sparkles, ChevronRight, Users, Video, FileText, UserPlus, Award
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import QuoteSection from "@/components/QuoteSection";
import educationHero from "@/assets/Education of minimally invasive procedures for pain management.png";
import heroSurgery from "@/assets/hero-surgery.jpg";

// New Gallery & Anatomy Assets
import shoulderAnatomy1 from "@/assets/Shoulder anatomy drwaings.png";
import shoulderAnatomy2 from "@/assets/Shoulder anatomy drwaings results.png";
import sydneyWorkshop1 from "@/assets/Ultrasound-guided cryoanalgesia workshop Sydney.png";
import sydneyWorkshop2 from "@/assets/Ultrasound-guided cryoanalgesia workshop Sydney_3.png.png";
import brisbaneWorkshop from "@/assets/Ultrasound-guided cryoanalgesia workshop Brisbane.png.png";
import referenceCentresImg from "@/assets/Clinical reference centres.png";
import cryoDevice from "@/assets/Cryo-S-Painless_1.jpg";
import proceduresImg from "@/assets/Cryoanalgesia procedure in OR.png";

const offerings = [
    {
        icon: Users,
        title: "Hands-on Workshops",
        description: "Intensive, small-group sessions focused on practical skill acquisition with real equipment and expert supervision.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Microscope,
        title: "Cadaver Labs",
        description: "Anatomy-focused sessions providing realistic procedural practice under controlled, lab-based conditions.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: Video,
        title: "Live Case Observation",
        description: "Observe experienced practitioners perform procedures in real clinical settings with guided commentary.",
        color: "bg-teal-100 text-teal-600",
    },
    {
        icon: UserPlus,
        title: "Proctorship Support",
        description: "One-on-one mentorship with an expert proctor during your first independent cases, ensuring safety and confidence.",
        color: "bg-amber-100 text-amber-600",
    },
    {
        icon: Award,
        title: "Technique Masterclasses",
        description: "Advanced sessions for experienced practitioners looking to refine specific techniques or adopt new modalities.",
        color: "bg-rose-100 text-rose-600",
    },
];

const pathwaySteps = [
    {
        step: "01",
        title: "Foundation",
        description: "Didactic learning covering anatomy, evidence base, patient selection, and safety protocols.",
    },
    {
        step: "02",
        title: "Hands-on Training",
        description: "Practical workshops with simulators, cadaver labs, and guided technique practice.",
    },
    {
        step: "03",
        title: "Proctorship",
        description: "Supervised clinical cases with expert mentors to build confidence in real-world settings.",
    },
    {
        step: "04",
        title: "Independent Practice",
        description: "Competent, confident practice supported by ongoing education and peer community.",
    },
];

const WorkshopIndex = () => {
    const [filter, setFilter] = useState<"ALL" | "UPCOMING" | "PAST">("ALL");

    const filteredWorkshops = workshops.filter((workshop) => {
        if (filter === "ALL") return true;
        if (filter === "UPCOMING") return workshop.status === "OPEN" || workshop.status === "WAITLIST";
        if (filter === "PAST") return workshop.status === "CLOSED";
        return true;
    });

    return (
        <div className="min-h-screen bg-background">
            {/* ── Hero ── */}
            <PageHero
                image={educationHero}
                title="Clinical Education for Procedural Medicine"
                subtitle="Structured educational pathways for safe, evidence-based adoption of minimally invasive procedures."
                breadcrumbs={[{ label: "Clinical Education" }]}
            />

            {/* ── Intro Section ── */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                Clinical Education Overview
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                IPMA delivers structured educational pathways designed to support safe, evidence-based adoption of minimally invasive procedures.
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Our programs are built around a philosophy of progressive competency — ensuring practitioners develop both the knowledge and the hands-on confidence to deliver outstanding patient outcomes.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Scientific foundation & evidence base",
                                    "Hands-on training with real equipment",
                                    "Expert mentorship & proctorship",
                                    "International and domestic faculty",
                                    "Real-world clinical insight",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="content-img-wrap shadow-xl"
                        >
                            <img src={sydneyWorkshop1} alt="Sydney Workshop 1" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="content-img-wrap shadow-xl"
                        >
                            <img src={sydneyWorkshop2} alt="Sydney Workshop 2" className="w-full h-full object-cover" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="content-img-wrap shadow-xl"
                        >
                            <img src={shoulderAnatomy1} alt="Anatomy Drawing" className="content-img" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Training Pathways ── */}
            <section className="py-20 lg:py-24 bg-secondary/40">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Training Pathways
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A clear progression from foundational knowledge to confident independent practice.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pathwaySteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative bg-background border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
                            >
                                {/* Step Number */}
                                <div className="text-5xl font-display font-black text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                                {/* Arrow connector (hidden on last item and on mobile) */}
                                {index < pathwaySteps.length - 1 && (
                                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-primary text-white items-center justify-center shadow-md">
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Anatomy & Clinical Insight ── */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border overflow-hidden">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="pill mb-6">Anatomy & Evidence</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                Visualising Precision: Anatomy & Procedural Planning
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Deep anatomical understanding is the cornerstone of interventional success. Our workshops use detailed anatomical mapping and high-resolution ultrasound to ensure precision in every procedure.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="content-img-wrap shadow-sm">
                                    <img src={shoulderAnatomy1} alt="Shoulder Anatomy Drawing" className="w-full h-full object-cover" />
                                </div>
                                <div className="content-img-wrap shadow-sm">
                                    <img src={shoulderAnatomy2} alt="Shoulder Anatomy Results" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="content-img-wrap content-img-wrap--auto shadow-xl rounded-2xl overflow-hidden">
                                <img src={sydneyWorkshop1} alt="Sydney Workshop" className="w-full h-auto object-cover" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-background hidden md:block">
                                <img src={sydneyWorkshop2} alt="Workshop Session" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Clinical Reference Centre CTA ── */}
            <section className="py-12 bg-primary/5">
                <div className="section-container">
                    <div className="bg-background border border-primary/20 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl relative">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 relative z-10">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <div className="flex-grow text-center md:text-left relative z-10">
                            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                                Clinical Reference Centres
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                IPMA Clinical Reference Centres allow clinicians to observe image-guided interventional pain and spine procedures in real-world practice.
                            </p>
                        </div>
                        <Link to="/clinical-education/reference-centres" className="shrink-0 relative z-10">
                            <Button size="lg" className="rounded-full gap-2 px-8">
                                Learn more <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Offerings ── */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Our Offerings
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Comprehensive educational formats designed for every stage of your clinical journey.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((offering, index) => (
                            <motion.div
                                key={offering.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="bg-background border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${offering.color} flex items-center justify-center mb-6`}>
                                    <offering.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{offering.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{offering.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Workshops Listing ── */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-t border-border">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Upcoming Workshops
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Browse our scheduled workshops and secure your place.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex justify-center gap-2 mb-12">
                        {["ALL", "UPCOMING", "PAST"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setFilter(tab as any)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === tab
                                    ? "bg-primary text-primary-foreground shadow-glow"
                                    : "bg-background text-secondary-foreground hover:bg-background/80 border border-border"
                                    }`}
                            >
                                {tab.charAt(0) + tab.slice(1).toLowerCase()}
                            </button>
                        ))}
                    </div>

                    {/* Workshop Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredWorkshops.map((workshop, index) => (
                            <motion.div
                                key={workshop.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-glow-lg transition-all duration-300"
                            >
                                <Link to={`/clinical-education/${workshop.slug}`} className="block h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={workshop.image}
                                            alt={workshop.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <Badge
                                                className={`${workshop.status === "OPEN"
                                                    ? "bg-green-500 hover:bg-green-600"
                                                    : workshop.status === "CLOSED"
                                                        ? "bg-slate-500 hover:bg-slate-600"
                                                        : "bg-amber-500 hover:bg-amber-600"
                                                    } text-white border-none shadow-sm`}
                                            >
                                                {workshop.status === "OPEN" ? "Registration Open" : workshop.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {workshop.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                                            {workshop.subtitle}
                                        </p>

                                        <div className="mt-auto space-y-3">
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                <span>{workshop.date}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <MapPin className="w-4 h-4 text-primary" />
                                                <span>{workshop.location}</span>
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-sm font-medium text-primary">
                                            <span>View details</span>
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <QuoteSection />
        </div>
    );
};

export default WorkshopIndex;
