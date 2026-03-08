import { useState } from "react";
import { Play, FileText, BookOpen, GraduationCap, ArrowRight, Download, HelpCircle, Microscope, Video, Presentation, ClipboardList, Snowflake, Circle, Droplets, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import PageHero from "@/components/PageHero";
import medicalTraining from "@/assets/medical-training.jpg";

// ── Thumbnail imports ──
import imgRfaCervical from "@/assets/resource-rfa-cervical.png";
import imgCryoSafety from "@/assets/resource-cryo-safety.png";
import imgBalloonOutcomes from "@/assets/resource-balloon-outcomes.png";
import imgOrthoEvidence from "@/assets/resource-ortho-evidence.png";
import imgGenicularBlock from "@/assets/resource-genicular-block.png";
import imgIntercostalCryo from "@/assets/resource-intercostal-cryo.png";
import imgEpiduralProcedure from "@/assets/resource-epidural-procedure.png";
import imgLaserPldd from "@/assets/resource-laser-pldd.png";
import imgPrpProcedure from "@/assets/resource-prp-procedure.png";
import imgWebinarPanel from "@/assets/resource-webinar-panel.png";
import imgAnimationMoa from "@/assets/resource-animation-moa.png";
import imgCryoDevice from "@/assets/cryo-device.jpg";
import imgHeroSurgery from "@/assets/hero-surgery.jpg";
import imgProcedureHands from "@/assets/procedure-hands.jpg";
import imgTreatmentDiagram from "@/assets/treatment-diagram.png";

// ── Pillar definitions ──
const pillars = [
    { id: "all", label: "All Resources", icon: Filter },
    { id: "evidence", label: "Clinical Evidence", icon: BookOpen },
    { id: "videos", label: "Procedural Videos", icon: Play },
    { id: "animations", label: "Animations & MOA", icon: Video },
    { id: "webinars", label: "Webinars & Expert Talks", icon: Presentation },
    { id: "guides", label: "Clinical Guides", icon: ClipboardList },
];

// ── Featured bands ──
const featuredBands = [
    {
        title: "Introduction to Cryoanalgesia",
        description: "Foundations of cryoneurolysis technology, mechanisms of reversible nerve modulation, and clinical applications.",
        tag: "FEATURED",
        href: "/technologies/cryotherapy",
        color: "from-blue-600 to-cyan-600",
        icon: Snowflake,
    },
    {
        title: "Understanding Balloon Decompression",
        description: "Epidural balloon adhesiolysis, ZiNeu catheter technology, and patient selection pathways.",
        tag: "FEATURED",
        href: "/technologies/balloon-technology",
        color: "from-amber-600 to-orange-600",
        icon: Circle,
    },
    {
        title: "Foundations of Orthobiologics",
        description: "PRP, bone marrow concentrate, anticoagulant protocols, and regenerative medicine frameworks.",
        tag: "FEATURED",
        href: "/technologies/orthobiologics",
        color: "from-rose-600 to-pink-600",
        icon: Droplets,
    },
];

// ── Resource items with thumbnail images ──
const resourceItems = [
    // Clinical Evidence
    { id: 1, pillar: "evidence", tag: "ARTICLE", title: "The Role of RFA in Cervical Facet Pain", description: "Peer-reviewed evidence review on radiofrequency ablation outcomes in cervical facet-mediated pain.", time: "8 min read", date: "Added 2 weeks ago", link: "/education#studies", image: imgRfaCervical },
    { id: 2, pillar: "evidence", tag: "STUDY", title: "Cryoneurolysis Safety Data Summary", description: "Comprehensive safety outcomes from multicentre cryoanalgesia studies.", time: "12 min read", date: "Recently added", link: "/education#studies", image: imgCryoSafety },
    { id: 3, pillar: "evidence", tag: "EVIDENCE", title: "Balloon Decompression Outcome Studies", description: "Published outcome data on epidural balloon adhesiolysis for failed back surgery syndrome.", time: "10 min read", date: "Recently added", link: "/education#studies", image: imgBalloonOutcomes },
    { id: 4, pillar: "evidence", tag: "REVIEW", title: "Orthobiologics in Degenerative Joint Disease", description: "Evidence summaries for PRP and BMAC in osteoarthritis and tendinopathy management.", time: "15 min read", date: "Recently added", link: "/education#studies", image: imgOrthoEvidence },

    // Procedural Videos
    { id: 5, pillar: "videos", tag: "VIDEO", title: "Ultrasound-Guided Genicular Nerve Block", description: "High-definition technique guide for genicular nerve cryoneurolysis under ultrasound.", time: "6 min", date: "Added 2 days ago", link: "/education#videos", image: imgGenicularBlock, featured: true },
    { id: 6, pillar: "videos", tag: "VIDEO", title: "Cryoanalgesia: Intercostal Nerve Procedure", description: "Intraoperative cryoanalgesia technique for thoracic pain management.", time: "8 min", date: "Recently added", link: "/education#videos", image: imgIntercostalCryo },
    { id: 7, pillar: "videos", tag: "VIDEO", title: "Balloon Decompression: Lumbar Epidural", description: "Fluoroscopy-guided ZiNeu catheter deployment for epidural adhesiolysis.", time: "12 min", date: "Recently added", link: "/education#videos", image: imgEpiduralProcedure },
    { id: 8, pillar: "videos", tag: "VIDEO", title: "PRP Preparation & Knee Injection", description: "Point-of-care platelet-rich plasma preparation and ultrasound-guided intra-articular delivery.", time: "9 min", date: "Recently added", link: "/education#videos", image: imgPrpProcedure },
    { id: 9, pillar: "videos", tag: "VIDEO", title: "Laser Disc Decompression (PLDD)", description: "Percutaneous laser disc decompression under fluoroscopic guidance.", time: "10 min", date: "Recently added", link: "/education#videos", image: imgLaserPldd },

    // Animations & MOA
    { id: 10, pillar: "animations", tag: "ANIMATION", title: "Balloon Inflation Mechanism", description: "Step-by-step animation showing ZiNeu balloon catheter inflation and adhesiolysis mechanics.", time: "3 min", date: "Recently added", link: "/education#videos", image: imgAnimationMoa },
    { id: 11, pillar: "animations", tag: "ANIMATION", title: "Laser Disc Decompression: How It Works", description: "Animated overview of intradiscal laser energy delivery and volume reduction.", time: "4 min", date: "Recently added", link: "/education#videos", image: imgLaserPldd },
    { id: 12, pillar: "animations", tag: "ANIMATION", title: "PRP & Biologics: Mechanism of Action", description: "Platelet degranulation, growth factor release, and tissue regeneration cascade.", time: "5 min", date: "Recently added", link: "/education#videos", image: imgPrpProcedure },
    { id: 13, pillar: "animations", tag: "ANIMATION", title: "Cryoneurolysis: Wallerian Degeneration", description: "How controlled freezing induces reversible nerve degeneration while preserving neural structure.", time: "3 min", date: "Recently added", link: "/education#videos", image: imgCryoSafety },

    // Webinars & Expert Talks
    { id: 14, pillar: "webinars", tag: "WEBINAR", title: "Expert Panel: Cryotherapy in Modern Practice", description: "On-demand panel discussion with leading interventional pain specialists on cryoanalgesia.", time: "45 min", date: "Recently added", link: "/education#webinars", image: imgWebinarPanel },
    { id: 15, pillar: "webinars", tag: "WEBINAR", title: "Grand Rounds: Complex Spine Cases", description: "Case-based discussion of challenging interventional spine pathology management.", time: "60 min", date: "Recently added", link: "/education#webinars", image: imgHeroSurgery },
    { id: 16, pillar: "webinars", tag: "WEBINAR", title: "Biologics Masterclass: PRP to BMAC", description: "Expert talk on autologous biologic preparation, evidence, and clinical decision-making.", time: "50 min", date: "Recently added", link: "/education#webinars", image: imgOrthoEvidence },

    // Clinical Guides & Downloads
    { id: 17, pillar: "guides", tag: "PDF", title: "2024 Spasticity Management Protocol", description: "Clinical protocol for spasticity assessment and cryotherapy-based management pathways.", time: "12 pages", date: "Added 1 week ago", link: "/education#webinars", image: imgCryoDevice },
    { id: 18, pillar: "guides", tag: "PDF", title: "Patient Selection Guide: Balloon Decompression", description: "Criteria and decision algorithms for identifying candidates for epidural balloon adhesiolysis.", time: "8 pages", date: "Recently added", link: "/resources", image: imgBalloonOutcomes },
    { id: 19, pillar: "guides", tag: "PDF", title: "Procedural Checklist: Cryoanalgesia", description: "Step-by-step pre-procedure, intra-procedure, and post-procedure checklist for cryoneurolysis.", time: "4 pages", date: "Recently added", link: "/resources", image: imgProcedureHands },
    { id: 20, pillar: "guides", tag: "GUIDE", title: "Treatment Algorithm: Spine Pain Pathway", description: "Evidence-based algorithm for interventional spine pain management from conservative to procedural.", time: "6 pages", date: "Recently added", link: "/resources", image: imgTreatmentDiagram },
    { id: 21, pillar: "guides", tag: "GUIDE", title: "Post-Procedure Pathway: Orthobiologics", description: "Rehabilitation and follow-up protocols following PRP and BMAC injection procedures.", time: "5 pages", date: "Recently added", link: "/resources", image: imgOrthoEvidence },
];

const tagColors: Record<string, string> = {
    VIDEO: "bg-blue-100 text-blue-700",
    ARTICLE: "bg-emerald-100 text-emerald-700",
    STUDY: "bg-emerald-100 text-emerald-700",
    EVIDENCE: "bg-emerald-100 text-emerald-700",
    REVIEW: "bg-emerald-100 text-emerald-700",
    PDF: "bg-purple-100 text-purple-700",
    GUIDE: "bg-purple-100 text-purple-700",
    ANIMATION: "bg-violet-100 text-violet-700",
    WEBINAR: "bg-amber-100 text-amber-700",
    FEATURED: "bg-primary text-primary-foreground",
};

const Resources = () => {
    const [activePillar, setActivePillar] = useState("all");

    const filteredItems = activePillar === "all"
        ? resourceItems
        : resourceItems.filter(item => item.pillar === activePillar);

    const featuredVideo = resourceItems.find(item => item.featured);

    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero Section */}
            <PageHero
                image={medicalTraining}
                title="Clinical Resources for Interventional Practice"
                subtitle="IPMA provides clinicians with curated educational materials designed to support procedural understanding, clinical decision-making, and safe adoption."
                breadcrumbs={[{ label: "Resources" }]}
            />

            {/* Featured Bands */}
            <section className="section-container py-20 lg:py-24">
                <div className="mb-12">
                    <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                        <span className="w-8 h-[2px] bg-primary"></span>
                        Featured Resources
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                        Essential reading for interventional clinicians
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {featuredBands.map((band) => (
                        <Link
                            key={band.title}
                            to={band.href}
                            className="group relative overflow-hidden rounded-2xl p-8 text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${band.color}`} />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                                    <band.icon className="w-6 h-6" />
                                </div>
                                <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-4">
                                    {band.tag}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{band.title}</h3>
                                <p className="text-white/80 text-sm leading-relaxed mb-5">{band.description}</p>
                                <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Featured Procedure of the Month */}
            {featuredVideo && (
                <section className="bg-secondary/30 border-y border-border py-16">
                    <div className="section-container">
                        <div className="flex items-center gap-3 mb-8">
                            <Star className="w-6 h-6 text-amber-500 fill-amber-500" />
                            <h2 className="text-2xl font-display font-bold text-foreground">Featured Procedure of the Month</h2>
                        </div>
                        <Link to={featuredVideo.link} className="group flex flex-col md:flex-row gap-0 bg-background border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                            <div className="md:w-1/3 aspect-video md:aspect-auto relative overflow-hidden">
                                <img src={featuredVideo.image} alt={featuredVideo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                                    </div>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <div className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-700 text-xs font-bold">⭐ FEATURED</div>
                                </div>
                            </div>
                            <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{featuredVideo.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">{featuredVideo.description}</p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <span>{featuredVideo.time}</span>
                                    <span>•</span>
                                    <span>{featuredVideo.date}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* 5 Pillars Filter + Content Grid */}
            <section className="section-container py-20 lg:py-24">
                {/* Pillar Filter Bar */}
                <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm py-4 mb-12 border-b border-border/50">
                    {/* Mobile: Dropdown */}
                    <div className="md:hidden">
                        <select
                            value={activePillar}
                            onChange={(e) => setActivePillar(e.target.value)}
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background/50 text-base focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                        >
                            {pillars.map((p) => (
                                <option key={p.id} value={p.id}>{p.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Desktop: Buttons */}
                    <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {pillars.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => setActivePillar(p.id)}
                                className={cn(
                                    "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap border",
                                    activePillar === p.id
                                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                                        : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                                )}
                            >
                                <p.icon className="w-4 h-4" />
                                {p.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pillar Description */}
                <div className="mb-10">
                    {activePillar === "evidence" && (
                        <p className="text-lg text-muted-foreground">Key publications, evidence summaries, safety data, and outcome studies supporting interventional techniques.</p>
                    )}
                    {activePillar === "videos" && (
                        <p className="text-lg text-muted-foreground">High-definition procedural footage across cryoanalgesia, balloon decompression, orthobiologics, and laser procedures.</p>
                    )}
                    {activePillar === "animations" && (
                        <p className="text-lg text-muted-foreground">Mechanism of action animations for balloon, laser, and biologic technologies — ideal for clinician education and patient explanation.</p>
                    )}
                    {activePillar === "webinars" && (
                        <p className="text-lg text-muted-foreground">On-demand webinars, expert panels, and case discussions with leading interventional pain specialists.</p>
                    )}
                    {activePillar === "guides" && (
                        <p className="text-lg text-muted-foreground">Patient selection guides, procedural checklists, treatment algorithms, and post-procedure pathways.</p>
                    )}
                </div>

                {/* Resource Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {(item.pillar === "videos" || item.pillar === "animations") && (
                                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                        </div>
                                    </div>
                                )}
                                {item.pillar === "guides" && (
                                    <div className="absolute inset-0 bg-black/10" />
                                )}
                                <div className="absolute top-3 left-3">
                                    <div className={`px-2.5 py-1 rounded-lg text-xs font-bold ${tagColors[item.tag] || "bg-gray-100 text-gray-700"}`}>
                                        {item.tag}
                                    </div>
                                </div>
                                {item.featured && (
                                    <div className="absolute top-3 right-3">
                                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wide">
                                    <span>{item.date}</span>
                                    <span>•</span>
                                    <span>{item.time}</span>
                                </div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                                <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    {item.pillar === "guides" ? "Download" : item.pillar === "videos" || item.pillar === "animations" ? "Watch Now" : item.pillar === "webinars" ? "Watch Now" : "Read Now"}
                                    {item.pillar === "guides" ? <Download className="w-4 h-4 ml-1" /> : <ArrowRight className="w-4 h-4 ml-1" />}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-muted-foreground">
                        <p className="text-lg">No resources in this category yet.</p>
                        <button onClick={() => setActivePillar("all")} className="mt-4 text-primary font-bold hover:underline">View all resources</button>
                    </div>
                )}
            </section>

            {/* Explore the Library — Existing cards preserved */}
            <section className="section-container py-20 lg:py-24 border-t border-border">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-display font-bold text-foreground">Explore the Library</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* FAQ */}
                    <Link to="/faq" className="bg-white border border-border p-8 rounded-[2.5rem] hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                            <HelpCircle className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-blue-900 group-hover:text-cyan-700 transition-colors mb-4">FAQ's</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8 min-h-[3rem]">Common questions about procedures, recovery times, and expected outcomes.</p>
                        <div className="flex items-center text-sm font-bold text-cyan-600 group-hover:translate-x-2 transition-transform">
                            View Questions <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </Link>

                    {/* Procedure Videos */}
                    <Link to="/education#videos" className="bg-white border border-border p-8 rounded-[2.5rem] hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                            <Play className="w-7 h-7 fill-current" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-blue-900 group-hover:text-blue-700 transition-colors mb-4">Procedure Video Library</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8 min-h-[3rem]">High-definition technique guides, live case demonstrations, and anatomy reviews.</p>
                        <div className="flex items-center text-sm font-bold text-primary group-hover:translate-x-2 transition-transform">
                            Explore Videos <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </Link>

                    {/* Research */}
                    <Link to="/education#studies" className="bg-white border border-border p-8 rounded-[2.5rem] hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <BookOpen className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-blue-900 group-hover:text-emerald-700 transition-colors mb-4">Research & Evidence</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8 min-h-[3rem]">Curated lists of peer-reviewed articles supporting interventional techniques.</p>
                        <div className="flex items-center text-sm font-bold text-emerald-600 group-hover:translate-x-2 transition-transform">
                            Browse Research <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </Link>

                    {/* Educational Materials */}
                    <Link to="/education#webinars" className="bg-white border border-border p-8 rounded-[2.5rem] hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 group cursor-pointer relative overflow-hidden">
                        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                            <BookOpen className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-blue-900 group-hover:text-amber-700 transition-colors mb-4">Educational Materials</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8 min-h-[3rem]">Comprehensive resources for the Cryo Workshop: Procedural videos, clinical studies, and webinar recordings.</p>
                        <div className="flex items-center text-sm font-bold text-amber-600 group-hover:translate-x-2 transition-transform">
                            View Materials <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                    </Link>

                    {/* Workshops CTA */}
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-[2.5rem] hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 group cursor-pointer relative overflow-hidden md:col-span-2 lg:col-span-4 shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shrink-0">
                                <GraduationCap className="w-7 h-7" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-display font-bold text-white mb-2">Workshops & Masterclasses</h3>
                                <p className="text-white/80 leading-relaxed max-w-xl text-lg">
                                    Join our hands-on training sessions. Next event: <span className="text-white font-bold decoration-2 underline decoration-white/30 underline-offset-4">Advanced Cryo Techniques (March 15th)</span>
                                </p>
                            </div>
                            <Link to="/clinical-education" className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform shrink-0 bg-white/20 hover:bg-white/30 px-6 py-3 rounded-full backdrop-blur-sm">
                                Register Now <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
