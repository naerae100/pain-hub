import { Link } from "react-router-dom";
import {
    ChevronRight, ArrowRight, Shield, Activity, BookOpen, Video,
    FileText, CheckCircle2, AlertTriangle, Users, Microscope, Target,
    Stethoscope, MapPin, Heart, Layers, Zap, Expand,
    CircleDot, Info, TrendingUp, BarChart3, Syringe, Snowflake,
    Clock, Eye, Ban, Disc, Crosshair, Timer
} from "lucide-react";
import PageHero from "@/components/PageHero";

// Images
import heroImg from "@/assets/Percutaneous Laser Disc Decompression_technology2 (2).png";
import procedureImg from "@/assets/Dr Stogicza performs an X-ray guided procedure.png";

const PLDDDetail = () => {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero */}
            <PageHero
                image={heroImg}
                title="Percutaneous Laser Disc Decompression (PLDD)"
                subtitle="Minimally Invasive Intradiscal Decompression for Contained Disc Herniation"
                breadcrumbs={[
                    { label: "Procedures", href: "/procedures" },
                    { label: "PLDD" },
                ]}
            />

            {/* Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <span className="pill mb-6">Overview</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            What is PLDD?
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Percutaneous Laser Disc Decompression (PLDD) is a minimally invasive intradiscal procedure designed to reduce pressure within a contained intervertebral disc herniation.
                            </p>
                            <p>
                                Using controlled laser energy delivered through a percutaneous needle, a small portion of nucleus pulposus material is vaporised. This reduces intradiscal pressure, which in turn decreases nerve root compression and radicular symptoms.
                            </p>
                            <p className="text-foreground font-medium italic border-l-4 border-primary pl-4 py-2">
                                PLDD is typically considered after failure of structured conservative management and before escalation to open surgical intervention.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mechanism of Action */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Science</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Mechanism of Action
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                PLDD works through controlled intradiscal decompression:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {[
                                { icon: Zap, title: "Targeted Vaporisation", desc: "Controlled vaporisation of nucleus pulposus material" },
                                { icon: TrendingUp, title: "Pressure Reduction", desc: "Reduction of intradiscal pressure" },
                                { icon: Expand, title: "Neural Relief", desc: "Secondary reduction of nerve root compression" },
                                { icon: Heart, title: "Symptom Resolution", desc: "Relief of radicular symptoms" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-background border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="max-w-4xl mx-auto space-y-6">
                            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Even small reductions in disc volume can produce meaningful decreases in internal disc pressure, improving neural irritation without destabilising the spinal segment.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
                                        <p className="text-sm text-muted-foreground">
                                            <strong className="text-foreground">Unlike epidural balloon decompression:</strong> PLDD acts <em>within the disc itself</em>, not in the epidural space.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
                                        <p className="text-sm text-muted-foreground">
                                            <strong className="text-foreground">Unlike cryoanalgesia:</strong> PLDD does not interrupt nerve conduction — it reduces <em>mechanical compression</em>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Where It Fits Clinically */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            <div>
                                <span className="pill mb-6">Clinical Positioning</span>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                    Where It Fits Clinically
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    PLDD may be considered for patients with:
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Persistent radicular pain",
                                        "Contained lumbar or cervical disc herniation",
                                        "Disc bulge without annular rupture",
                                        "Symptoms persisting beyond ~6 weeks of conservative therapy"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-lg text-foreground font-medium mb-4">It is generally considered after:</p>
                                <ul className="space-y-2 mb-8">
                                    {[
                                        "Anti-inflammatory medication",
                                        "Physiotherapy",
                                        "Targeted spinal injections"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground">Not indicated</strong> for large sequestered fragments or advanced structural instability. Careful patient selection is essential to optimise outcomes.
                                    </p>
                                </div>
                            </div>

                            {/* Procedure Image */}
                            <div>
                                <div className="content-img-wrap shadow-xl">
                                    <img src={procedureImg} alt="Dr Stogicza performs an X-ray guided PLDD procedure" className="content-img" />
                                </div>
                                <p className="text-xs text-center text-muted-foreground mt-3 italic">X-ray guided intradiscal procedure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indications & Contraindications */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Patient Selection</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Indications & Contraindications
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Indications */}
                            <div className="bg-background border border-green-200 rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" /> Indications
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Contained lumbar disc protrusion",
                                        "Contained cervical disc protrusion",
                                        "Radicular pain with imaging correlation",
                                        "Disc bulge without significant disc height collapse"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                            <ChevronRight className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-muted-foreground mt-4 italic border-l-4 border-green-300 pl-3">
                                    The annulus fibrosus should remain intact.
                                </p>
                            </div>

                            {/* Contraindications */}
                            <div className="bg-background border border-red-200 rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Ban className="w-6 h-6 text-red-500" /> Contraindications
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Sequestered disc fragments",
                                        "Complete annular rupture",
                                        "Absolute bony spinal or foraminal stenosis",
                                        "Significant spondylolisthesis with instability",
                                        "Progressive neurological deficit requiring open decompression",
                                        "Active infection or malignancy",
                                        "Severe disc space collapse"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                            <ChevronRight className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-muted-foreground mt-4 italic">
                                    Appropriate imaging evaluation is mandatory prior to treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedural Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Technique</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Procedural Overview
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                PLDD is performed under local anaesthesia with image guidance.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Lumbar Spine */}
                            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Activity className="w-6 h-6 text-primary" /> Lumbar Spine
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Patient positioned prone",
                                        "Dorsolateral needle approach (typically 7–10 cm from midline)",
                                        "Needle placement confirmed under fluoroscopy",
                                        "Intradiscal contrast discography performed",
                                        "Laser fibre introduced via introducer needle",
                                        "Controlled energy delivery with intermittent pauses"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-muted-foreground mt-4 bg-primary/5 rounded-xl p-3">
                                    Total energy delivery depends on disc level and anatomy. In lumbar applications, typical total energy ranges around <strong>1000–1200J per disc</strong>.
                                </p>
                            </div>

                            {/* Cervical Spine */}
                            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Activity className="w-6 h-6 text-primary" /> Cervical Spine
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Patient positioned supine with slight extension",
                                        "Careful anterior approach",
                                        "Protection of trachea, oesophagus, and carotid structures",
                                        "Discography performed prior to ablation",
                                        "Controlled pulsed or continuous energy delivery"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-muted-foreground mt-4 bg-primary/5 rounded-xl p-3">
                                    Typical total energy for cervical discs may be lower (e.g., <strong>~800J per disc</strong>).
                                </p>
                            </div>
                        </div>

                        {/* Intra-Procedure Considerations */}
                        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-transparent border border-border rounded-3xl p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                <Eye className="w-6 h-6 text-primary" /> Intra-Procedure Considerations
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "Pain provocation testing may confirm correct fibre positioning",
                                    "Gradual energy delivery in intervals",
                                    "Saline irrigation between energy cycles",
                                    "Continuous physiological monitoring"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />{item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-foreground font-medium italic mt-6 border-l-4 border-primary pl-4 py-2">
                                The goal is controlled decompression without structural destabilisation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Post-Procedure Pathway */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <span className="pill mb-6">Recovery</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Post-Procedure Pathway
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Clock, step: "01", title: "Observation", desc: "Approximately 2–4 hours post-procedure" },
                                { icon: Timer, step: "02", title: "Same-Day Discharge", desc: "Day-case procedure" },
                                { icon: Shield, step: "03", title: "Activity Modification", desc: "Avoid prolonged sitting/standing for ~2 weeks" },
                                { icon: TrendingUp, step: "04", title: "Rehabilitation", desc: "Gradual rehabilitation beginning 3–4 weeks post-procedure" }
                            ].map((item, i) => (
                                <div key={i} className="bg-background border border-border rounded-2xl p-6 text-center shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                                    <h4 className="font-bold text-foreground text-sm mb-2">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-muted-foreground italic mt-8">
                            No fusion or structural instrumentation is required.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clinical Outcomes */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <span className="pill mb-6">Outcomes</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Clinical Outcomes
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Published and reported data indicate:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "Pain relief in appropriately selected patients",
                                "Reported improvement rates up to ~80% in selected cohorts",
                                "Reduced recovery time compared with open surgery",
                                "Repeatability if clinically indicated"
                            ].map((item, i) => (
                                <div key={i} className="bg-card border border-border rounded-xl p-4 flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic">
                            As with all intradiscal therapies, outcomes depend heavily on proper patient selection, imaging correlation, and technical precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Benefits</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Advantages
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                "Minimally invasive",
                                "Local anaesthesia",
                                "Day-case procedure",
                                "Minimal muscle disruption",
                                "Low scarring risk",
                                "Short rehabilitation timeline",
                                "Repeatable if required"
                            ].map((item, i) => (
                                <div key={i} className="bg-background border border-border rounded-xl p-5 flex items-start gap-3 shadow-sm hover:shadow-md transition-shadow">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-muted-foreground italic mt-8">
                            PLDD does not involve open decompression or fusion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Risks & Limitations */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <span className="pill mb-6">Safety</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Risks & Limitations
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card border border-amber-200 rounded-3xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-500" /> Potential Risks
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Incomplete symptom relief",
                                        "Transient increase in radicular pain",
                                        "Discitis (rare)",
                                        "Nerve irritation",
                                        "Bleeding or infection",
                                        "Progression of underlying degeneration"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-primary" /> PLDD Does Not Address
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Advanced bony stenosis",
                                        "Instability",
                                        "Extruded/sequestered disc fragments"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-sm text-muted-foreground mt-4 italic">
                                    Careful indication selection remains critical.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Differs */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Comparison</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                How It Differs from Other IPMA Procedures
                            </h2>
                        </div>

                        <div className="overflow-x-auto mb-12">
                            <table className="w-full text-sm border-collapse bg-background rounded-2xl overflow-hidden shadow-sm border border-border">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-6 text-left font-bold text-foreground bg-red-50 border-b-2 border-red-200">PLDD</th>
                                        <th className="py-4 px-6 text-left font-bold text-foreground bg-purple-50 border-b-2 border-purple-200">Balloon Decompression</th>
                                        <th className="py-4 px-6 text-left font-bold text-foreground bg-blue-50 border-b-2 border-blue-200">Cryoanalgesia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border">
                                        <td className="py-3 px-6 text-muted-foreground">Intradiscal decompression</td>
                                        <td className="py-3 px-6 text-muted-foreground">Epidural mechanical decompression</td>
                                        <td className="py-3 px-6 text-muted-foreground">Peripheral nerve interruption</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="py-3 px-6 text-muted-foreground">Acts within disc nucleus</td>
                                        <td className="py-3 px-6 text-muted-foreground">Acts in epidural space</td>
                                        <td className="py-3 px-6 text-muted-foreground">Acts on peripheral nerves</td>
                                    </tr>
                                    <tr className="border-b border-border">
                                        <td className="py-3 px-6 text-muted-foreground">Mechanical pressure reduction</td>
                                        <td className="py-3 px-6 text-muted-foreground">Adhesiolysis + expansion</td>
                                        <td className="py-3 px-6 text-muted-foreground">Wallerian degeneration</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-6 text-red-600 font-medium">Structural pressure relief</td>
                                        <td className="py-3 px-6 text-purple-600 font-medium">Space restoration</td>
                                        <td className="py-3 px-6 text-blue-600 font-medium">Analgesic modulation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="text-center">
                            <p className="text-muted-foreground leading-relaxed">
                                Each modality addresses a different pain generator: <strong>Intradiscal pressure</strong>, <strong>Epidural adhesions / stenosis</strong>, <strong>Peripheral neural pain</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Resources CTA */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-10 lg:p-16 text-white shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-4">Education & Resources</h3>
                                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                                    Explore PLDD training, procedural protocols, evidence, and clinical implementation support.
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                                    <Link to="/clinical-education" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors">
                                        <BookOpen className="w-5 h-5" />
                                        View PLDD Training
                                    </Link>
                                    <Link to="/resources" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        <FileText className="w-5 h-5" />
                                        Access Protocols & Evidence
                                    </Link>
                                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        <MapPin className="w-5 h-5" />
                                        Enquire About Implementation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* One-Line Summary */}
            <section className="py-16">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center shadow-lg">
                        <h3 className="text-2xl font-display font-bold mb-4">Summary</h3>
                        <p className="text-lg lg:text-xl font-medium leading-relaxed opacity-90">
                            Percutaneous Laser Disc Decompression is a minimally invasive intradiscal decompression technique designed to relieve radicular pain in selected patients with contained disc herniation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PLDDDetail;
