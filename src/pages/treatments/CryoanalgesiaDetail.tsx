import { Link } from "react-router-dom";
import {
    ChevronRight, Snowflake, Shield, Activity, Zap, BookOpen, Video,
    FileText, ArrowRight, CheckCircle2, AlertTriangle, Users, Microscope,
    Heart, Eye, Thermometer, Brain, Target, Syringe, Stethoscope, Clock,
    CircleDot, Info, HelpCircle, ExternalLink, Layers
} from "lucide-react";
import PageHero from "@/components/PageHero";

// Images
import heroImg from "@/assets/Cryoanalgesia of the genicular nerves using ultrasound guidance.png";
import nerveInjuryImg from "@/assets/Nerve injury grade mechanism.png";
import kneeCryoImg from "@/assets/Knee cryoanalgesia under ultrasound guidance.png";

const CryoanalgesiaDetail = () => {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero */}
            <PageHero
                image={heroImg}
                title="Cryoanalgesia"
                subtitle="Targeted, reversible nerve interruption via Wallerian Degeneration for durable pain relief"
                breadcrumbs={[
                    { label: "Procedures", href: "/procedures" },
                    { label: "Cryoanalgesia" },
                ]}
            />

            {/* Quick CTA Links */}
            <section className="py-8 bg-secondary/20 border-b border-border">
                <div className="section-container">
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: "View Training", href: "/clinical-education", icon: BookOpen },
                            { label: "Watch Videos", href: "/videos", icon: Video },
                            { label: "Read Evidence", href: "/resources", icon: FileText },
                            { label: "Training Availability", href: "/clinical-education", icon: Users },
                            { label: "Workshops", href: "/clinical-education", icon: Stethoscope },
                        ].map((cta, idx) => (
                            <Link
                                key={idx}
                                to={cta.href}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background text-sm font-medium text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                            >
                                <cta.icon className="w-4 h-4" />
                                {cta.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <span className="pill mb-6">Overview</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            What is Cryoanalgesia?
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Cryoanalgesia (cryoneurolysis) is a minimally invasive, image-guided technique that produces controlled axonotmesis, resulting in temporary interruption of peripheral nerve conduction through Wallerian degeneration.
                            </p>
                            <p>
                                The connective tissue architecture of the nerve (endoneurium and perineurium) is preserved, allowing gradual axonal regeneration over time while providing sustained analgesia aligned with nerve recovery timelines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mechanism of Action */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Science</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Mechanism of Action
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                Cryoneurolysis works by applying extreme cold to a peripheral nerve, inducing a controlled Sunderland Grade II injury (Axonotmesis). This process triggers Wallerian degeneration distal to the treatment site, effectively silencing pain signals while maintaining the physical pathway for the nerve to eventually heal.
                            </p>
                        </div>

                        {/* Key Structural Advantages */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            {[
                                {
                                    icon: Shield,
                                    title: "Intact Nerve Sheath",
                                    desc: "The endoneurium, perineurium, and epineurium remain structurally sound."
                                },
                                {
                                    icon: Layers,
                                    title: "Preserved Scaffolding",
                                    desc: "Because the internal 'tubes' (the basal lamina) are not destroyed, they provide the essential structural guidance for axonal regeneration."
                                },
                                {
                                    icon: Clock,
                                    title: "Predictable Regrowth",
                                    desc: "Axonal regrowth occurs predictably over time — typically at a rate of 1mm per day — ensuring the return of normal sensation and function without the risk of neuroma formation."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-background border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Cryo vs RF vs PRF */}
                        <div className="bg-background border border-border rounded-3xl p-8 lg:p-12 shadow-sm">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                                <Zap className="w-6 h-6 text-primary" />
                                Cryoneurolysis vs. Radiofrequency (RF) vs. PRF
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                The clinical distinction between these modalities lies in the degree of tissue destruction:
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <Snowflake className="w-5 h-5 text-blue-500" /> Cryoneurolysis
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Produces a reversible interruption of axonal continuity. Because it spares the connective tissue matrix, it is classified as a Grade II injury, which carries a 100% prognosis for functional recovery.
                                    </p>
                                </div>
                                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <Thermometer className="w-5 h-5 text-red-500" /> Thermal Radiofrequency (Neurotomy)
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Unlike cryo, traditional thermal RF uses high-frequency heat (60°C to 80°C) to create a Grade IV or V injury (Neurotmesis). This destroys the internal architecture of the nerve (including the endoneurium and perineurium).
                                    </p>
                                </div>
                                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-purple-500" /> Pulsed Radiofrequency
                                    </h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Operates differently by using electromagnetic fields to alter nerve signaling via gene expression and cytokine modulation without causing structural disruption.
                                    </p>
                                </div>
                            </div>

                            {/* Nerve Injury Image */}
                            <div className="content-img-wrap content-img-wrap--wide shadow-md mb-6">
                                <img src={nerveInjuryImg} alt="Nerve injury grade mechanism — Cryoneurolysis Grade II vs Radiofrequency Grade IV" className="content-img" />
                            </div>
                            <p className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4">
                                <strong>Clinical Note:</strong> While RF aims to "destroy" the nerve's signaling ability through thermal coagulation of the entire nerve bundle, cryoneurolysis selectively disrupts the axon while leaving the "blueprint" of the nerve intact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Where Cryoanalgesia Fits */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Clinical Positioning</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Where Cryoanalgesia Fits
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                Cryoanalgesia is used in patients with focal neuropathic, peripheral, orthopaedic, and spine-related pain who have not achieved adequate relief with conservative therapy or injections. It may be integrated into various stages of patient care:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Standalone Intervention",
                                    desc: "Utilized as a primary outpatient or perioperative procedure for targeted pain relief."
                                },
                                {
                                    icon: Syringe,
                                    title: "Intraoperative",
                                    desc: "Applied during surgery to facilitate prolonged postoperative analgesia, potentially reducing opioid requirements during recovery."
                                },
                                {
                                    icon: Layers,
                                    title: "Multimodal Strategy",
                                    desc: "Incorporated as a key component of a comprehensive interventional pain management plan."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-card border border-border rounded-3xl p-8 text-center hover:shadow-lg transition-all">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Applications — Indications */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Indications</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Clinical Applications
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                                Cryoanalgesia is utilised across multiple interventional pain and surgical contexts.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-8">
                                {/* Peripheral Neuralgia */}
                                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                        <Brain className="w-5 h-5 text-primary" /> Peripheral Neuralgia
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {["Trigeminal neuralgia", "Occipital neuralgia", "Suprascapular neuralgia", "Ilioinguinal and genitofemoral neuralgia"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" />{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Spine-Related Pain */}
                                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-primary" /> Spine-Related Pain
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {["Facet-mediated lumbar, thoracic, and cervical pain", "Selected radicular contributors"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" />{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Orthopaedic Applications */}
                                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                        <CircleDot className="w-5 h-5 text-primary" /> Orthopaedic Applications
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {["Genicular nerve-mediated knee pain", "Shoulder and hip-related peripheral nerve pain"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" />{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Postoperative Pain */}
                                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                        <Heart className="w-5 h-5 text-primary" /> Postoperative Pain
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {["Thoracic surgery", "Chest wall procedures", "Intraoperative intercostal cryoanalgesia"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" />{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {/* Knee Cryo Image */}
                                <div className="content-img-wrap shadow-xl">
                                    <img src={kneeCryoImg} alt="Knee cryoanalgesia under ultrasound guidance" className="content-img" />
                                </div>

                                {/* Neuromas & Neuropathic Syndromes */}
                                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-primary" /> Neuromas & Neuropathic Syndromes
                                    </h3>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {["Post-surgical neuromas", "Post-amputation pain", "Phantom limb pain"].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0" />{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Spasticity */}
                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 shadow-sm">
                                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                        <Microscope className="w-5 h-5 text-primary" /> Spasticity-Associated Pain
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Upper and lower limb spasticity where motor nerve targeting is clinically appropriate.
                                    </p>
                                    <a
                                        href="https://ipmaustralia.com.au/cryoanalgesia/spasticity/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        View Spasticity Programme & Case Examples
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intraoperative Use */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-transparent border border-border rounded-3xl p-8 lg:p-12">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
                            <Syringe className="w-6 h-6 text-primary" /> Intraoperative Use
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Cryoanalgesia is widely applied intraoperatively, particularly in thoracic and selected cardiac procedures, to provide prolonged postoperative analgesia and reduce opioid requirements within enhanced recovery pathways.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/videos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                                <Video className="w-4 h-4" /> View Procedural Videos
                            </Link>
                            <Link to="/resources" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors">
                                <FileText className="w-4 h-4" /> Review Clinical Evidence
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Patient Selection */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Patient Selection</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Ideal Candidates
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Users className="w-6 h-6 text-primary" /> Appropriate Candidates
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Patients with focal peripheral nerve–mediated pain",
                                        "Individuals who have not responded adequately to conservative therapy",
                                        "Patients seeking minimally invasive alternatives to long-term pharmacotherapy or major surgery"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Info className="w-6 h-6 text-primary" /> Important Note
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Careful anatomical correlation and image-guided technique are essential. Cryoanalgesia produces temporary, controlled axonal interruption (axonotmesis) rather than permanent neurodestruction. As the nerve regenerates, symptoms may recur over time. Repeat treatment may be considered where clinically appropriate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Clinical Advantages */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">Advantages</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Key Clinical Advantages
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Clinical Effects */}
                            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                                    <Activity className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">Clinical Effects</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {[
                                        "Immediate or early pain reduction in appropriately selected patients",
                                        "Sustained analgesia lasting several months, corresponding with nerve regeneration timelines",
                                        "Associated reduction in opioid requirements in postoperative and selected chronic pain settings",
                                        "Emerging evidence suggests a potential role in reducing the transition from acute to persistent postoperative pain",
                                        "Lower risk of neuroma formation compared with thermal neurodestructive techniques"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Safety & Tissue Preservation */}
                            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6">
                                    <Shield className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">Safety & Tissue Preservation</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {[
                                        "Selective targeting of nerve tissue under image guidance",
                                        "Preservation of connective tissue architecture allowing regeneration",
                                        "Minimal impact on surrounding vascular and soft tissue structures",
                                        "Reversible biological effect"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Procedural & Recovery Benefits */}
                            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                                    <ArrowRight className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">Procedural & Recovery</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {[
                                        "Image-guided precision (ultrasound or fluoroscopy)",
                                        "Ability to treat multiple nerve targets during a single session",
                                        "May facilitate earlier mobilisation and rehabilitation",
                                        "In selected surgical settings, may reduce reliance on epidural analgesia"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contraindications */}
            <section className="py-16 lg:py-20 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto bg-background border border-amber-200 rounded-3xl p-8 lg:p-12 shadow-sm">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6 text-amber-500" /> Contraindications
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Contraindications and risk considerations are reviewed during formal training and outlined within procedural guidelines.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="pill mb-6">FAQ</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {/* Q1 */}
                            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm">
                                <h4 className="text-lg font-bold text-foreground mb-4 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    How does cryoanalgesia work?
                                </h4>
                                <p className="text-muted-foreground leading-relaxed pl-8">
                                    Cryoanalgesia involves placing a probe adjacent to a peripheral nerve and applying controlled low temperatures (typically approximately −70°C). This produces temporary axonal interruption via Wallerian degeneration while preserving the connective tissue structure, allowing regeneration over time.
                                </p>
                            </div>

                            {/* Q2 */}
                            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm">
                                <h4 className="text-lg font-bold text-foreground mb-4 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    How long does the pain relief last?
                                </h4>
                                <p className="text-muted-foreground leading-relaxed pl-8">
                                    Analgesia typically lasts between 3 and 12 months, corresponding to the time required for axonal regeneration. In selected cohorts, relief has been documented beyond 12 months. As regeneration occurs, symptoms may gradually return, and repeat treatment may be considered where clinically appropriate.
                                </p>
                            </div>

                            {/* Q3 — Comparison Table */}
                            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm">
                                <h4 className="text-lg font-bold text-foreground mb-4 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    How is cryoanalgesia different from RFA and PRF?
                                </h4>
                                <p className="text-muted-foreground leading-relaxed pl-8 mb-6">
                                    Cryoanalgesia produces controlled, reversible axonal interruption while preserving nerve connective tissue architecture. Thermal radiofrequency ablation produces heat-mediated neurodestruction. Pulsed radiofrequency alters neural signalling without structural axonal disruption. Cryoneurolysis is associated with a lower risk of neuroma formation compared with thermal neurodestructive techniques.
                                </p>
                                <div className="overflow-x-auto pl-8">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b-2 border-primary/20">
                                                <th className="py-3 px-4 text-left font-bold text-foreground bg-blue-50 rounded-tl-xl">Cryo</th>
                                                <th className="py-3 px-4 text-left font-bold text-foreground bg-red-50">RFA</th>
                                                <th className="py-3 px-4 text-left font-bold text-foreground bg-purple-50 rounded-tr-xl">Pulsed RF</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-border">
                                                <td className="py-3 px-4 text-muted-foreground">Wallerian degeneration</td>
                                                <td className="py-3 px-4 text-muted-foreground">Thermal coagulation</td>
                                                <td className="py-3 px-4 text-muted-foreground">Electrical modulation</td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="py-3 px-4 text-muted-foreground">Reversible</td>
                                                <td className="py-3 px-4 text-muted-foreground">Often longer-lasting</td>
                                                <td className="py-3 px-4 text-muted-foreground">Modulatory effect</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 text-green-600 font-medium">Lower neuroma risk</td>
                                                <td className="py-3 px-4 text-red-600 font-medium">Higher neuroma risk</td>
                                                <td className="py-3 px-4 text-muted-foreground">No structural degeneration</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm">
                                <h4 className="text-lg font-bold text-foreground mb-4 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    Is image guidance used?
                                </h4>
                                <p className="text-muted-foreground leading-relaxed pl-8">
                                    Yes. Cryoanalgesia is performed under ultrasound or fluoroscopic guidance to ensure accurate probe positioning and procedural safety.
                                </p>
                            </div>

                            {/* Q5 — Risks */}
                            <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm">
                                <h4 className="text-lg font-bold text-foreground mb-4 flex items-start gap-3">
                                    <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    What are the risks of cryoanalgesia?
                                </h4>
                                <p className="text-muted-foreground leading-relaxed pl-8 mb-6">
                                    Cryoanalgesia is generally well tolerated when performed by trained clinicians under image guidance.
                                </p>
                                <div className="pl-8 space-y-4">
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                        <h5 className="font-bold text-foreground text-sm mb-2">Common and Usually Temporary Effects</h5>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            {["Localised numbness or altered sensation", "Mild bruising or swelling", "Transient dysesthesia during regeneration", "Local soreness"].map((r, i) => (
                                                <li key={i} className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-green-500" />{r}</li>
                                            ))}
                                        </ul>
                                        <p className="text-xs text-green-600 mt-2 italic">These effects typically resolve spontaneously.</p>
                                    </div>
                                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                                        <h5 className="font-bold text-foreground text-sm mb-2">Less Common Risks</h5>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            {["Prolonged sensory change beyond expected regeneration period", "Temporary motor weakness when mixed or motor nerves are targeted", "Variable analgesic response depending on pathology"].map((r, i) => (
                                                <li key={i} className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-amber-500" />{r}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                        <h5 className="font-bold text-foreground text-sm mb-2">Rare Complications</h5>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            {["Skin injury (in superficial applications)", "Infection", "Bleeding or haematoma", "Unintended nerve injury"].map((r, i) => (
                                                <li key={i} className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-red-500" />{r}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                        <h5 className="font-bold text-foreground text-sm mb-2">Risk Mitigation</h5>
                                        <p className="text-sm text-muted-foreground mb-2">The risk profile of cryoanalgesia is minimized through:</p>
                                        <ul className="space-y-1 text-sm text-muted-foreground">
                                            {["Careful patient selection", "Use of image guidance (ultrasound or fluoroscopy)", "Appropriate probe positioning and temperature control", "Clinician training and adherence to established procedural protocols"].map((r, i) => (
                                                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-blue-500" />{r}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Note & Summary */}
            <section className="py-16">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center shadow-lg">
                        <h3 className="text-2xl font-display font-bold mb-4">Important Note</h3>
                        <p className="text-lg lg:text-xl font-medium leading-relaxed opacity-90 mb-6">
                            Cryoanalgesia produces temporary, controlled axonal interruption (axonotmesis) rather than permanent neurodestruction. As the nerve regenerates, symptoms may recur over time. Repeat treatment may be considered where clinically appropriate.
                        </p>
                        <div className="w-20 h-[2px] bg-white/30 mx-auto mb-6" />
                        <p className="text-md opacity-80 italic max-w-3xl mx-auto">
                            Cryoanalgesia is a minimally invasive technique that produces controlled, reversible axonal interruption with a favourable safety profile when performed by trained clinicians.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CryoanalgesiaDetail;
