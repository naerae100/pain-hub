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
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            What is PLDD?
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                            <p>
                                Percutaneous Laser Disc Decompression (PLDD) is a minimally invasive intradiscal procedure designed to reduce pressure within a contained intervertebral disc herniation.
                            </p>
                            <p>
                                Using controlled laser energy delivered through a percutaneous needle, a small portion of nucleus pulposus material is vaporised. This reduces intradiscal pressure, which in turn decreases nerve root compression and radicular symptoms.
                            </p>
                            <p className="text-foreground font-medium border-l-4 border-primary pl-6 py-2">
                                PLDD is typically considered after failure of structured conservative management and before escalation to open surgical intervention.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mechanism of Action */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Mechanism of Action
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-10">
                            PLDD works through controlled intradiscal decompression:
                        </p>

                        <div className="space-y-4 mb-12">
                            {[
                                { title: "Targeted Vaporisation", desc: "Controlled vaporisation of nucleus pulposus material" },
                                { title: "Pressure Reduction", desc: "Reduction of intradiscal pressure" },
                                { title: "Neural Relief", desc: "Secondary reduction of nerve root compression" },
                                { title: "Symptom Resolution", desc: "Relief of radicular symptoms" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <p className="text-lg text-foreground/90">
                                        <strong className="text-foreground">{item.title}:</strong> {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            Even small reductions in disc volume can produce meaningful decreases in internal disc pressure, improving neural irritation without destabilising the spinal segment.
                        </p>

                        <div className="space-y-4">
                            <div className="border-l-4 border-purple-400 pl-6 py-2">
                                <p className="text-lg text-foreground/90">
                                    <strong className="text-foreground">Unlike epidural balloon decompression:</strong> PLDD acts <em>within the disc itself</em>, not in the epidural space.
                                </p>
                            </div>
                            <div className="border-l-4 border-blue-400 pl-6 py-2">
                                <p className="text-lg text-foreground/90">
                                    <strong className="text-foreground">Unlike cryoanalgesia:</strong> PLDD does not interrupt nerve conduction — it reduces <em>mechanical compression</em>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Where It Fits Clinically */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                    Where It Fits Clinically
                                </h2>
                                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                                    PLDD may be considered for patients with:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Persistent radicular pain",
                                        "Contained lumbar or cervical disc herniation",
                                        "Disc bulge without annular rupture",
                                        "Symptoms persisting beyond ~6 weeks of conservative therapy"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-lg text-foreground font-medium mb-4">It is generally considered after:</p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Anti-inflammatory medication",
                                        "Physiotherapy",
                                        "Targeted spinal injections"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="border-l-4 border-amber-400 pl-6 py-2">
                                    <p className="text-lg text-foreground/90">
                                        <strong className="text-foreground">Not indicated</strong> for large sequestered fragments or advanced structural instability. Careful patient selection is essential to optimise outcomes.
                                    </p>
                                </div>
                            </div>

                            {/* Procedure Image */}
                            <div>
                                <div className="content-img-wrap">
                                    <img src={procedureImg} alt="Dr Stogicza performs an X-ray guided PLDD procedure" className="content-img" />
                                </div>
                                <p className="text-sm text-center text-foreground/90 mt-3">X-ray guided intradiscal procedure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indications & Contraindications */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Indications & Contraindications
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Indications</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Contained lumbar disc protrusion",
                                        "Contained cervical disc protrusion",
                                        "Radicular pain with imaging correlation",
                                        "Disc bulge without significant disc height collapse"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-foreground/90 mt-6">
                                    The annulus fibrosus should remain intact.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Contraindications</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Sequestered disc fragments",
                                        "Complete annular rupture",
                                        "Absolute bony spinal or foraminal stenosis",
                                        "Significant spondylolisthesis with instability",
                                        "Progressive neurological deficit requiring open decompression",
                                        "Active infection or malignancy",
                                        "Severe disc space collapse"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <ChevronRight className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-foreground/90 mt-6">
                                    Appropriate imaging evaluation is mandatory prior to treatment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedural Overview */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Procedural Overview
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                            PLDD is performed under local anaesthesia with image guidance.
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-12">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Lumbar Spine</h3>
                                <ul className="space-y-4 mb-6">
                                    {[
                                        "Patient positioned prone",
                                        "Dorsolateral needle approach (typically 7–10 cm from midline)",
                                        "Needle placement confirmed under fluoroscopy",
                                        "Intradiscal contrast discography performed",
                                        "Laser fibre introduced via introducer needle",
                                        "Controlled energy delivery with intermittent pauses"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-foreground/90">
                                    Typical total energy ranges around <strong>1000–1200J per disc</strong>.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Cervical Spine</h3>
                                <ul className="space-y-4 mb-6">
                                    {[
                                        "Patient positioned supine with slight extension",
                                        "Careful anterior approach",
                                        "Protection of trachea, oesophagus, and carotid structures",
                                        "Discography performed prior to ablation",
                                        "Controlled pulsed or continuous energy delivery"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-foreground/90">
                                    Typical total energy for cervical discs may be lower (e.g., <strong>~800J per disc</strong>).
                                </p>
                            </div>
                        </div>

                        {/* Intra-Procedure Considerations */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Intra-Procedure Considerations</h3>
                            <ul className="space-y-4 mb-6">
                                {[
                                    "Pain provocation testing may confirm correct fibre positioning",
                                    "Gradual energy delivery in intervals",
                                    "Saline irrigation between energy cycles",
                                    "Continuous physiological monitoring"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />{item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-foreground font-medium border-l-4 border-primary pl-6 py-2 text-lg">
                                The goal is controlled decompression without structural destabilisation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Post-Procedure Pathway */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Post-Procedure Pathway
                        </h2>
                        <div className="space-y-6">
                            {[
                                { step: "01", title: "Observation", desc: "Approximately 2–4 hours post-procedure" },
                                { step: "02", title: "Same-Day Discharge", desc: "Day-case procedure" },
                                { step: "03", title: "Activity Modification", desc: "Avoid prolonged sitting/standing for ~2 weeks" },
                                { step: "04", title: "Rehabilitation", desc: "Gradual rehabilitation beginning 3–4 weeks post-procedure" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <span className="text-primary font-bold text-lg shrink-0 w-8">{item.step}</span>
                                    <div>
                                        <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                                        <p className="text-lg text-foreground/90">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-foreground/90 mt-10">
                            No fusion or structural instrumentation is required.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clinical Outcomes */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Clinical Outcomes
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            Published and reported data indicate:
                        </p>
                        <ul className="space-y-4 mb-12">
                            {[
                                "Pain relief in appropriately selected patients",
                                "Reported improvement rates up to ~80% in selected cohorts",
                                "Reduced recovery time compared with open surgery",
                                "Repeatability if clinically indicated"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />{item}
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">Expanded Clinical Evidence Summary</h3>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            PLDD stands as one of the most studied minimally invasive intradiscal procedures, supported by over 30 years of clinical data.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="border-l-4 border-primary pl-6 py-2">
                                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-primary" /> Equivalent to Microdiscectomy
                                </h4>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    A landmark non-inferiority RCT (Brouwer et al.) demonstrated that PLDD achieves comparable clinical outcomes to surgical microdiscectomy at 1-year and 2-year follow-up for contained disc herniations, while offering a faster return to work.
                                </p>
                            </div>
                            <div className="border-l-4 border-green-500 pl-6 py-2">
                                <h4 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-green-500" /> High Success Rates
                                </h4>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Large observational cohorts (some exceeding 1,000 patients) report success rates of 75-89% when strict inclusion criteria are applied (contained herniation, intact annulus).
                                </p>
                            </div>
                        </div>

                        <p className="text-lg text-foreground/90 leading-relaxed border-l-4 border-primary pl-6 py-2">
                            Careful patient selection is the most significant predictor of success. PLDD is not indicated for extruded or sequestered fragments. As with all intradiscal therapies, outcomes depend heavily on proper patient selection, imaging correlation, and technical precision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Advantages
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Minimally invasive",
                                "Local anaesthesia",
                                "Day-case procedure",
                                "Minimal muscle disruption",
                                "Low scarring risk",
                                "Short rehabilitation timeline",
                                "Repeatable if required"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-lg text-foreground/90">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-foreground/90 mt-10">
                            PLDD does not involve open decompression or fusion.
                        </p>
                    </div>
                </div>
            </section>

            {/* Risks & Limitations */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Risks & Limitations
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Potential Risks</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Incomplete symptom relief",
                                        "Transient increase in radicular pain",
                                        "Discitis (rare)",
                                        "Nerve irritation",
                                        "Bleeding or infection",
                                        "Progression of underlying degeneration"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">PLDD Does Not Address</h3>
                                <ul className="space-y-4 mb-4">
                                    {[
                                        "Advanced bony stenosis",
                                        "Instability",
                                        "Extruded/sequestered disc fragments"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-foreground/90">
                                    Careful indication selection remains critical.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Differs */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            How It Differs from Other IPMA Procedures
                        </h2>

                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-lg border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-foreground/20">
                                        <th className="py-4 pr-6 text-left font-bold text-foreground">PLDD</th>
                                        <th className="py-4 pr-6 text-left font-bold text-foreground">Balloon Decompression</th>
                                        <th className="py-4 text-left font-bold text-foreground">Cryoanalgesia</th>
                                    </tr>
                                </thead>
                                <tbody className="text-foreground/90">
                                    <tr className="border-b border-foreground/10">
                                        <td className="py-4 pr-6">Intradiscal decompression</td>
                                        <td className="py-4 pr-6">Epidural mechanical decompression</td>
                                        <td className="py-4">Peripheral nerve interruption</td>
                                    </tr>
                                    <tr className="border-b border-foreground/10">
                                        <td className="py-4 pr-6">Acts within disc nucleus</td>
                                        <td className="py-4 pr-6">Acts in epidural space</td>
                                        <td className="py-4">Acts on peripheral nerves</td>
                                    </tr>
                                    <tr className="border-b border-foreground/10">
                                        <td className="py-4 pr-6">Mechanical pressure reduction</td>
                                        <td className="py-4 pr-6">Adhesiolysis + expansion</td>
                                        <td className="py-4">Wallerian degeneration</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 pr-6 font-medium text-foreground">Structural pressure relief</td>
                                        <td className="py-4 pr-6 font-medium text-foreground">Space restoration</td>
                                        <td className="py-4 font-medium text-foreground">Analgesic modulation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Each modality addresses a different pain generator: <strong>Intradiscal pressure</strong>, <strong>Epidural adhesions / stenosis</strong>, <strong>Peripheral neural pain</strong>.
                        </p>
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
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">Summary</h3>
                        <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
                            Percutaneous Laser Disc Decompression is a minimally invasive intradiscal decompression technique designed to relieve radicular pain in selected patients with contained disc herniation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PLDDDetail;
