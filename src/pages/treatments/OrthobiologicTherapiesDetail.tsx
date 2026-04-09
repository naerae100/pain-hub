import { Link } from "react-router-dom";
import {
    ChevronRight, ArrowRight, Shield, Activity, BookOpen, Video,
    FileText, CheckCircle2, AlertTriangle, Users, Microscope, Target,
    Stethoscope, MapPin, Heart, Layers, Droplets, Beaker,
    CircleDot, Info, TrendingUp, BarChart3, Syringe, Snowflake,
    Expand, FlaskConical, Eye
} from "lucide-react";
import PageHero from "@/components/PageHero";

// Images
import heroImg from "@/assets/Orthobiologic Therapies_procedure (1).png";
import prpProtocolsImg from "@/assets/PRP protocols.png";
import marrowAspirationImg from "@/assets/Bone marrow aspiration procedure.png";

const OrthobiologicTherapiesDetail = () => {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero */}
            <PageHero
                image={heroImg}
                title="Orthobiologic Therapies"
                subtitle="Biologic therapies supporting regenerative interventional care."
                breadcrumbs={[
                    { label: "Procedures", href: "/procedures" },
                    { label: "Orthobiologic Therapies" },
                ]}
            />

            {/* Overview */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            What are Orthobiologic Therapies?
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                            <p>
                                Orthobiologic therapies utilise autologous biologic materials to support tissue repair and structural healing in spine and musculoskeletal pathology.
                            </p>
                            <p>
                                Within interventional pain practice, outcomes are influenced not only by injection technique, but by biologic composition and total cellular dose.
                            </p>
                            <p>
                                Unlike cryoanalgesia or epidural balloon decompression, orthobiologics do not interrupt neural transmission or mechanically expand anatomical structures. Their intent is to support biological repair and regenerative signalling within targeted tissues.
                            </p>
                            <p className="text-foreground font-medium border-l-4 border-primary pl-4 py-2">
                                IPMA promotes disciplined, evidence-informed integration of regenerative therapies into contemporary interventional pathways.
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
                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            Orthobiologic therapies act through multiple regenerative pathways:
                        </p>

                        <ul className="space-y-3 mb-12">
                            {[
                                "Delivery of platelets and growth factors",
                                "Modulation of the inflammatory cascade",
                                "Recruitment of progenitor and reparative cells",
                                "Enhancement of tissue repair pathways"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>

                        {/* Growth Factors */}
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                            Platelet Alpha Granule Contents
                        </h3>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                            Platelets contain alpha granules rich in growth factors and mediators:
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                { abbr: "PDGF", full: "Platelet-Derived Growth Factor" },
                                { abbr: "TGF-β", full: "Transforming Growth Factor-beta" },
                                { abbr: "VEGF", full: "Vascular Endothelial Growth Factor" },
                                { abbr: "IGF", full: "Insulin-like Growth Factor" },
                                { abbr: "Cytokines", full: "Local immune signalling mediators" }
                            ].map((gf, i) => (
                                <div key={i} className="flex items-baseline gap-3">
                                    <span className="text-primary font-bold text-lg">{gf.abbr}</span>
                                    <span className="text-lg text-foreground/90">{gf.full}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                            These mediators influence cellular proliferation, angiogenesis, matrix synthesis, and local immune signalling.
                        </p>
                        <p className="text-foreground font-medium border-l-4 border-primary pl-6 py-2 text-lg">
                            Leukocyte composition further affects inflammatory phenotype and antimicrobial activity. Therefore, biologic preparation is not interchangeable — <strong>composition matters</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Platelet Dose & Blood Volume */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Platelet Dose & Blood Volume: Why It Matters
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                            Increasingly, literature suggests that therapeutic response correlates not only with concentration factor, but with total platelet dose delivered.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                            While many systems advertise "x-times baseline concentration," clinical relevance depends on:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Final platelet concentration",
                                "Final injected volume",
                                "Absolute platelet number delivered"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>

                        <p className="text-lg text-foreground/90 leading-relaxed border-l-4 border-blue-300 pl-6 mb-8">
                            A 2021 peer-reviewed publication in <strong>Nature</strong> (Basal et al.) investigating knee osteoarthritis demonstrated that sustained chondroprotective effects were associated with preparations delivering approximately <strong>≥10 billion platelets</strong> in moderate OA cohorts over one year.
                        </p>

                        <p className="text-xl font-bold text-foreground mb-12">
                            Concentration alone is insufficient — total dose matters.
                        </p>

                        {/* The Volume Advantage */}
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">The Volume Advantage</h3>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                            Low-volume PRP systems (10–20mL blood draw) are physically limited in the absolute platelet dose they can generate. Higher initial blood volumes allow:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Greater platelet reservoir",
                                "Improved flexibility in leukocyte modulation",
                                "Reduced hematocrit contamination",
                                "Achievement of meaningful therapeutic dose within practical injection volumes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>

                        <p className="text-lg text-foreground/90 border-l-4 border-primary/30 pl-6 py-2 mb-6">
                            Higher blood draw → Higher platelet capture → Greater ability to reach therapeutic threshold.
                        </p>

                        <p className="text-lg text-foreground/90 border-l-4 border-primary pl-6 py-2">
                            IPMA encourages clinicians to understand and calculate total platelet delivery rather than relying solely on concentration multipliers.
                        </p>
                    </div>
                </div>
            </section>

            {/* IPMA Evaluation & Biologic Quality Assessment */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Content — left */}
                            <div>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                    IPMA Evaluation & Biologic Quality Assessment
                                </h2>
                                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                                    IPMA has undertaken internal evaluation of PRP preparation protocols across varying blood draw volumes, centrifugation strategies, leukocyte profiles, and final injection volumes.
                                </p>

                                <p className="text-lg font-bold text-foreground mb-4">
                                    Laboratory analysis has demonstrated significant variability between preparation methods in:
                                </p>
                                <ul className="space-y-3 mb-10">
                                    {[
                                        "Platelet concentration",
                                        "Hematocrit contamination",
                                        "White cell distribution",
                                        "Final absolute platelet dose"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-lg font-bold text-foreground mb-4">These comparisons reinforce that:</p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Visual appearance does not determine biologic quality",
                                        "Hematocrit contamination must be controlled",
                                        "Leukocyte inclusion should be intentional",
                                        "Absolute platelet dose should be calculated"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 py-2">
                                    IPMA's educational framework emphasises biologic literacy in regenerative practice.
                                </p>
                            </div>

                            {/* Image — right */}
                            <div className="rounded-2xl overflow-hidden">
                                <img src={prpProtocolsImg} alt="Multiple PRP preparations generated under different protocols" className="w-full h-auto object-contain" />
                                <p className="text-sm text-center text-foreground/60 mt-3">Multiple PRP preparations generated under different protocols</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Where It Fits Clinically */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Where It Fits Clinically
                        </h2>

                        <div className="border-l-4 border-green-400 pl-6 mb-10">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">May be considered for:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Tendinopathy",
                                    "Facet-mediated pain",
                                    "Sacroiliac dysfunction",
                                    "Early degenerative joint disease",
                                    "Adjunct to structural procedures"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-green-500 shrink-0 mt-1" />{item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-l-4 border-amber-400 pl-6">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Not substitutes for:</h3>
                            <ul className="space-y-3 mb-4">
                                {[
                                    "Mechanical decompression in stenosis",
                                    "Structural correction in advanced instability",
                                    "Neuroablative interventions for clear nerve-mediated pain"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-1" />{item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-foreground/90">Appropriate indication selection is essential.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indications & Patient Selection */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Indications & Patient Selection
                        </h2>

                        <div className="border-l-4 border-primary pl-6 mb-10">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Indications</h3>
                            <ul className="space-y-3 mb-4">
                                {[
                                    "Chronic tendon pathology",
                                    "Enthesopathy",
                                    "Degenerative joint conditions",
                                    "Selected discogenic pain (investigational context)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-foreground/90">
                                Use should align with current evidence and regulatory frameworks.
                            </p>
                        </div>

                        <div className="border-l-4 border-green-400 pl-6 mb-10">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Best Suited For</h3>
                            <ul className="space-y-3">
                                {[
                                    "Degenerative or inflammatory soft tissue pathology",
                                    "Early-stage joint degeneration",
                                    "Patients seeking non-ablative options",
                                    "Individuals without advanced structural collapse"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-green-500 shrink-0 mt-1" />{item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border-l-4 border-amber-400 pl-6">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Less Suited For</h3>
                            <ul className="space-y-3 mb-4">
                                {[
                                    "Severe mechanical compression",
                                    "Advanced joint destruction",
                                    "Unstable structural pathology requiring surgical correction"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-1" />{item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-foreground/90">
                                Expectation management is critical, as regenerative response may be gradual.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedural Overview */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Procedural Overview
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Blood Draw or Marrow Aspiration", desc: "Autologous blood draw or marrow aspiration" },
                                    { step: "02", title: "Controlled Processing", desc: "Controlled processing under sterile conditions" },
                                    { step: "03", title: "Cellular Composition", desc: "Adjustment of cellular composition where appropriate" },
                                    { step: "04", title: "Image-Guided Injection", desc: "Image-guided injection into target tissue" },
                                    { step: "05", title: "Outpatient Procedure", desc: "Outpatient procedure with minimal recovery time" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-5">
                                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-foreground mb-1">{item.title}</h4>
                                            <p className="text-lg text-foreground/90">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}

                                <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 py-2">
                                    Precision of injection is as important as biologic composition.
                                </p>
                            </div>

                            <div>
                                <div className="content-img-wrap mb-3">
                                    <img src={marrowAspirationImg} alt="Bone marrow aspiration procedure" className="content-img" />
                                </div>
                                <p className="text-sm text-center text-foreground/60">Bone marrow aspiration procedure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Outcomes & Evidence */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Clinical Outcomes & Evidence
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                            Evidence varies by indication and biologic preparation protocol. Outcomes depend on:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Absolute platelet dose",
                                "Leukocyte composition",
                                "Hematocrit control",
                                "Accurate tissue targeting",
                                "Proper patient selection"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                            In knee osteoarthritis and selected musculoskeletal conditions, higher platelet doses have been associated with improved structural and symptomatic outcomes in moderate disease cohorts. Current evidence supports symptom relief and functional improvement, though claims of reliable cartilage regeneration are not yet clinically proven. Patients should be counselled with realistic expectations.
                        </p>

                        <h3 className="text-2xl font-display font-bold text-foreground mb-8">Key Literature Synthesis</h3>
                        <div className="space-y-6 mb-10">
                            {[
                                { t: "Bansal et al., 2021", d: "~10.45B platelets, 90% recovery, zero leukocytes. Significantly better WOMAC at 12 months vs hyaluronic acid." },
                                { t: "Patel et al., 2024 (Triple-blind RCT)", d: "2.82B vs 5.65B platelets — higher dose showed significantly better outcomes at 6 months." },
                                { t: "Berrigan et al., 2024 (Systematic Review)", d: "Positive studies at 6 months used mean ~5.5B platelets vs ~2.3B in negative studies." },
                                { t: "ESSKA-ORBIT Consensus, 2024", d: "Sufficient evidence supports PRP for KL 1-3 knee OA. Clinically better than HA, longer than corticosteroids." },
                                { t: "ESSKA-ICRS RAND/UCLA, 2024", d: "PRP appropriate for ≤80yrs with KL 0-III after failure of conservative treatment; not as first-line." },
                                { t: "De Matthaeis et al., 2024", d: "High-dose neutrophil-depleted PRP: ~70% OMERACT-OARSI responder rates at 3–12 months." },
                            ].map((r, i) => (
                                <div key={i} className="border-b border-border/50 pb-5 last:border-0">
                                    <p className="text-lg font-bold text-foreground mb-1">{r.t}</p>
                                    <p className="text-lg text-foreground/90 leading-relaxed">{r.d}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-foreground/90 leading-relaxed">
                            IPMA supports ongoing appraisal of emerging regenerative literature.
                        </p>
                    </div>
                </div>
            </section>

            {/* Risks & Limitations */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Risks & Limitations
                        </h2>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Post-injection soreness",
                                "Variable response",
                                "Delayed onset of benefit",
                                "Temporary inflammatory flare"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                            Orthobiologics are not immediate analgesic interventions. Their effect is biologic and time-dependent.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            They should not replace mechanical decompression where structural pathology is dominant.
                        </p>
                    </div>
                </div>
            </section>

            {/* How It Differs */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            How It Differs from Other Interventions
                        </h2>

                        {/* Comparison Table */}
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-foreground/20">
                                        <th className="py-4 pr-6 text-lg font-bold text-foreground">Orthobiologics</th>
                                        <th className="py-4 pr-6 text-lg font-bold text-foreground">Cryoanalgesia</th>
                                        <th className="py-4 text-lg font-bold text-foreground">Balloon Decompression</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-border/50">
                                        <td className="py-4 pr-6 text-lg text-foreground/90">Biologic repair</td>
                                        <td className="py-4 pr-6 text-lg text-foreground/90">Reversible nerve interruption</td>
                                        <td className="py-4 text-lg text-foreground/90">Mechanical decompression</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-4 pr-6 text-lg text-foreground/90">Non-ablative</td>
                                        <td className="py-4 pr-6 text-lg text-foreground/90">Neuroablative</td>
                                        <td className="py-4 text-lg text-foreground/90">Structural expansion</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 pr-6 text-lg text-green-600 font-medium">Regenerative intent</td>
                                        <td className="py-4 pr-6 text-lg text-blue-600 font-medium">Analgesic intent</td>
                                        <td className="py-4 text-lg text-purple-600 font-medium">Decompressive intent</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-lg text-foreground/90 leading-relaxed mb-2">
                            Each modality addresses a different pain pathway: <strong>Neural</strong>, <strong>Structural</strong>, <strong>Biological</strong>.
                        </p>
                        <p className="text-lg text-foreground/90">
                            Appropriate integration requires clinical discernment.
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
                                    Explore training, preparation protocols, evidence, and implementation support.
                                </p>
                                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                                    <Link to="/clinical-education" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors">
                                        <BookOpen className="w-5 h-5" />
                                        View Clinical Training
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
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">Summary</h3>
                        <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
                            Autologous biologic therapies support regenerative pathways in interventional spine and pain care when applied with appropriate platelet dose, controlled composition, and precise clinical targeting.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OrthobiologicTherapiesDetail;
