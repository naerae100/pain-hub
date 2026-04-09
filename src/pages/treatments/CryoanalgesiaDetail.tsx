import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ChevronRight, Snowflake, Activity, Zap, BookOpen, Video,
    FileText, CheckCircle2, AlertTriangle, Users,
    Thermometer, Stethoscope,
    X
} from "lucide-react";
import PageHero from "@/components/PageHero";

const cryoPublications = [
    {
        title: "Ultrasound-guided Percutaneous Cryoneurolysis for the Treatment of Pain after Traumatic Rib Fracture: A Randomized, Active controlled, Participant and Observer-masked Study",
        author: "John J. Finneran et al.",
        journal: "Anesthesiology, 2025",
        pdf: "/Sorted Pdfs/Thorax_chest wall_intercostal/Level II/US-guided Percutaneous Cryoneurolysis for the Treatment of Pain after Traumatic Rib Fracture A Randomized, Activecontrolled, Participantand Observer-masked Study_Finneran_2025.PDF",
    },
    {
        title: "Bedside percutaneous cryoneurolysis technique for management of acute rib fracture pain in adult trauma patients",
        author: "C. Villalta et al.",
        journal: "Trauma Surgery & Acute Care Open, 2024",
        pdf: "/Sorted Pdfs/Thorax_chest wall_intercostal/Level IV/Bedside percutaneous cryoneurolysis technique for management of acute rib fracture pain in adult trauma patients_Villalta_2024.pdf",
    },
    {
        title: "Percutaneous Cryoneurolysis for Pain Control After Rib Fractures in Older Adults",
        author: "S. Wang et al.",
        journal: "JAMA Surgery, 2024",
        pdf: "/Sorted Pdfs/Thorax_chest wall_intercostal/Level V/Percutaneous Cryoneurolysis for Pain Control_ Jamasurgery_Wang_2024.pdf",
    },
    {
        title: "Rib fracture management: A review of surgical stabilization, regional analgesia, and intercostal nerve cryoablation",
        author: "S. Stopenski et al.",
        journal: "Surgery in Practice and Science, 2022",
        pdf: "/Sorted Pdfs/Thorax_chest wall_intercostal/Level V/Rib fracture management A review of surgical stabilization, regional analgesia, and intercostal nerve cryoablation_Stopenski_2022.pdf",
    },
];

// Images
import heroImg from "@/assets/Cryoanalgesia of the genicular nerves using ultrasound guidance.png";
import nerveInjuryImg from "@/assets/Nerve injury grade mechanism.png";
import kneeCryoImg from "@/assets/Knee cryoanalgesia under ultrasound guidance.png";

const CryoanalgesiaDetail = () => {
    const [activePdf, setActivePdf] = useState<{ url: string; title: string } | null>(null);

    const openPdf = (pdf: string, title: string) => {
        const safeUrl = pdf.replace(/ /g, "%20");
        if (window.innerWidth <= 768) {
            window.open(safeUrl, "_blank");
        } else {
            setActivePdf({ url: safeUrl, title });
        }
    };

    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* PDF Modal */}
            {activePdf && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 !m-0">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setActivePdf(null)} />
                    <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh] md:h-[90vh] animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                            <h3 className="text-lg font-bold text-foreground truncate pr-4">{activePdf.title}</h3>
                            <button onClick={() => setActivePdf(null)} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors shrink-0">
                                <X className="w-5 h-5 text-foreground" />
                            </button>
                        </div>
                        <div className="flex-1 w-full bg-gray-100 relative">
                            <iframe src={activePdf.url} className="w-full h-full border-0 absolute inset-0" title={activePdf.title} />
                        </div>
                    </div>
                </div>
            )}
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
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            What is Cryoanalgesia?
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
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
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Mechanism of Action
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                            Cryoneurolysis works by applying extreme cold to a peripheral nerve, inducing a controlled Sunderland Grade II injury (Axonotmesis). This process triggers Wallerian degeneration distal to the treatment site, effectively silencing pain signals while maintaining the physical pathway for the nerve to eventually heal.
                        </p>

                        {/* Key Structural Advantages */}
                        <div className="space-y-6 mb-16">
                            {[
                                {
                                    title: "Intact Nerve Sheath",
                                    desc: "The endoneurium, perineurium, and epineurium remain structurally sound."
                                },
                                {
                                    title: "Preserved Scaffolding",
                                    desc: "Because the internal 'tubes' (the basal lamina) are not destroyed, they provide the essential structural guidance for axonal regeneration."
                                },
                                {
                                    title: "Predictable Regrowth",
                                    desc: "Axonal regrowth occurs predictably over time — typically at a rate of 1mm per day — ensuring the return of normal sensation and function without the risk of neuroma formation."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="border-l-4 border-primary pl-6">
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-lg text-foreground/90 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Cryo vs RF vs PRF — side by side */}
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                            Cryoneurolysis vs. Radiofrequency (RF) vs. PRF
                        </h3>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-10">
                            The clinical distinction between these modalities lies in the degree of tissue destruction:
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border-t-4 border-blue-400 pt-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Snowflake className="w-5 h-5 text-blue-500" />
                                    <h4 className="text-lg font-bold text-foreground">Cryoneurolysis</h4>
                                </div>
                                <p className="text-foreground/80 leading-relaxed">
                                    Reversible axonal interruption. Spares connective tissue matrix — classified as a Grade II injury with 100% prognosis for functional recovery.
                                </p>
                            </div>
                            <div className="border-t-4 border-red-400 pt-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Thermometer className="w-5 h-5 text-red-500" />
                                    <h4 className="text-lg font-bold text-foreground">Thermal RF (Neurotomy)</h4>
                                </div>
                                <p className="text-foreground/80 leading-relaxed">
                                    High-frequency heat (60–80°C) creates a Grade IV or V injury. Destroys internal nerve architecture including endoneurium and perineurium.
                                </p>
                            </div>
                            <div className="border-t-4 border-purple-400 pt-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Activity className="w-5 h-5 text-purple-500" />
                                    <h4 className="text-lg font-bold text-foreground">Pulsed Radiofrequency</h4>
                                </div>
                                <p className="text-foreground/80 leading-relaxed">
                                    Electromagnetic fields alter nerve signaling via gene expression and cytokine modulation — no structural disruption.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nerve Injury Grade Diagram */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg text-foreground/90 leading-relaxed mb-10">
                            The Seddon–Sunderland classification provides the anatomical framework for understanding why cryoneurolysis targets Grade II injury specifically — ensuring Wallerian degeneration proceeds with a 100% prognosis for recovery, unlike higher-grade injuries common with thermal techniques.
                        </p>
                        <div className="w-full overflow-hidden rounded-2xl shadow-md mb-4">
                            <img src={nerveInjuryImg} alt="Nerve injury grade mechanism — Cryoneurolysis Grade II vs Radiofrequency Grade IV" className="w-full h-auto object-contain" />
                        </div>
                        <p className="text-lg text-foreground/90 border-l-4 border-primary pl-4">
                            <strong>Clinical Note:</strong> While RF aims to "destroy" the nerve's signaling ability through thermal coagulation of the entire nerve bundle, cryoneurolysis selectively disrupts the axon while leaving the "blueprint" of the nerve intact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Where Cryoanalgesia Fits */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Where Cryoanalgesia Fits
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                            Cryoanalgesia is used in patients with focal neuropathic, peripheral, orthopaedic, and spine-related pain who have not achieved adequate relief with conservative therapy or injections. It may be integrated into various stages of patient care:
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Standalone Intervention",
                                    desc: "Utilized as a primary outpatient or perioperative procedure for targeted pain relief."
                                },
                                {
                                    title: "Intraoperative",
                                    desc: "Applied during surgery to facilitate prolonged postoperative analgesia, potentially reducing opioid requirements during recovery."
                                },
                                {
                                    title: "Multimodal Strategy",
                                    desc: "Incorporated as a key component of a comprehensive interventional pain management plan."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="border-l-4 border-primary pl-6">
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-lg text-foreground/90 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Applications — Indications */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Clinical Applications
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12 max-w-4xl">
                            Cryoanalgesia is utilised across multiple interventional pain and surgical contexts.
                        </p>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            <div className="space-y-10">
                                {[
                                    {
                                        title: "Peripheral Neuralgia",
                                        items: ["Trigeminal neuralgia", "Occipital neuralgia", "Suprascapular neuralgia", "Ilioinguinal and genitofemoral neuralgia"]
                                    },
                                    {
                                        title: "Spine-Related Pain",
                                        items: ["Facet-mediated lumbar, thoracic, and cervical pain", "Selected radicular contributors"]
                                    },
                                    {
                                        title: "Orthopaedic Applications",
                                        items: ["Genicular nerve-mediated knee pain", "Shoulder and hip-related peripheral nerve pain"]
                                    },
                                    {
                                        title: "Postoperative Pain",
                                        items: ["Thoracic surgery", "Chest wall procedures", "Intraoperative intercostal cryoanalgesia"]
                                    },
                                    {
                                        title: "Neuromas & Neuropathic Syndromes",
                                        items: ["Post-surgical neuromas", "Post-amputation pain", "Phantom limb pain"]
                                    }
                                ].map((group, idx) => (
                                    <div key={idx}>
                                        <h3 className="text-2xl font-display font-bold text-foreground mb-3">{group.title}</h3>
                                        <ul className="space-y-2">
                                            {group.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-lg text-foreground/90 leading-relaxed">
                                                    <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div>
                                {/* Knee Cryo Image */}
                                <div className="w-full rounded-2xl overflow-hidden sticky top-24">
                                    <img src={kneeCryoImg} alt="Knee cryoanalgesia under ultrasound guidance" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spasticity-Associated Pain */}
            <section className="py-16 lg:py-20 bg-primary text-white">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-white/60 text-sm font-bold uppercase tracking-widest">Emerging Indication</p>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
                            Spasticity-Associated Pain
                        </h2>
                        <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-6 max-w-4xl">
                            Cryoneurolysis is an effective emerging modality for upper and lower limb spasticity, targeting motor and mixed nerves to reduce muscle overactivity, improve function, and relieve associated pain without permanent neurodestruction.
                        </p>
                        <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-3xl">
                            It offers a reversible, repeatable alternative to chemical neurolysis — particularly valuable where a prolonged or titratable effect is needed.
                        </p>
                        <Link
                            to="/procedures/cryoanalgesia/spasticity"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-bold text-sm hover:bg-white/90 transition-colors"
                        >
                            View Spasticity Programme & Case Examples
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intraoperative Use */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                            Intraoperative Use
                        </h3>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            Cryoanalgesia is widely applied intraoperatively, particularly in thoracic and selected cardiac procedures, to provide prolonged postoperative analgesia and reduce opioid requirements within enhanced recovery pathways.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/resources" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
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
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Ideal Candidates
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Appropriate Candidates</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Patients with focal peripheral nerve–mediated pain",
                                        "Individuals who have not responded adequately to conservative therapy",
                                        "Patients seeking minimally invasive alternatives to long-term pharmacotherapy or major surgery"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90 leading-relaxed">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Important Note</h3>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Careful anatomical correlation and image-guided technique are essential. Cryoanalgesia produces temporary, controlled axonal interruption (axonotmesis) rather than permanent neurodestruction. As the nerve regenerates, symptoms may recur over time. Repeat treatment may be considered where clinically appropriate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Clinical Advantages */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-12">
                            Key Clinical Advantages
                        </h2>

                        <div className="space-y-12">
                            {/* Clinical Effects */}
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Clinical Effects</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Immediate or early pain reduction in appropriately selected patients",
                                        "Sustained analgesia lasting several months, corresponding with nerve regeneration timelines",
                                        "Associated reduction in opioid requirements in postoperative and selected chronic pain settings",
                                        "Emerging evidence suggests a potential role in reducing the transition from acute to persistent postoperative pain",
                                        "Lower risk of neuroma formation compared with thermal neurodestructive techniques"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90 leading-relaxed">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-1" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Safety & Tissue Preservation */}
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Safety & Tissue Preservation</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Selective targeting of nerve tissue under image guidance",
                                        "Preservation of connective tissue architecture allowing regeneration",
                                        "Minimal impact on surrounding vascular and soft tissue structures",
                                        "Reversible biological effect"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90 leading-relaxed">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Procedural & Recovery Benefits */}
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Procedural & Recovery</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Image-guided precision (ultrasound or fluoroscopy)",
                                        "Ability to treat multiple nerve targets during a single session",
                                        "May facilitate earlier mobilisation and rehabilitation",
                                        "In selected surgical settings, may reduce reliance on epidural analgesia"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90 leading-relaxed">
                                            <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-1" />{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contraindications */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6 text-amber-500" /> Contraindications
                        </h3>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Contraindications and risk considerations are reviewed during formal training and outlined within procedural guidelines.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clinical Evidence */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Clinical Evidence Summary
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                            The current clinical literature demonstrates a predominantly favorable evidence base for targeted cryoanalgesia and cryoneurolysis.
                        </p>

                        {/* Executive Summary Stats */}
                        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-16">
                            <div>
                                <span className="block text-5xl font-display font-bold text-green-600 mb-1">123</span>
                                <span className="block text-lg font-bold text-foreground">Positive Outcomes</span>
                                <span className="text-lg text-foreground/70">79% of studies</span>
                            </div>
                            <div>
                                <span className="block text-5xl font-display font-bold text-amber-500 mb-1">24</span>
                                <span className="block text-lg font-bold text-foreground">Mixed / Neutral</span>
                                <span className="text-lg text-foreground/70">15% of studies</span>
                            </div>
                            <div>
                                <span className="block text-5xl font-display font-bold text-red-500 mb-1">8</span>
                                <span className="block text-lg font-bold text-foreground">Unfavorable</span>
                                <span className="text-lg text-foreground/70">5% of studies</span>
                            </div>
                        </div>

                        {/* Detailed Breakdown */}
                        <h3 className="text-2xl font-display font-bold text-foreground mb-8">Anatomical Focus and Outcomes</h3>
                        <div className="grid md:grid-cols-2 gap-10 mb-12">
                            <div>
                                <h4 className="text-lg font-bold text-foreground mb-2">
                                    Thoracic & Intercostal
                                    <span className="ml-3 text-sm font-medium text-primary">76 studies</span>
                                </h4>
                                <p className="text-lg text-primary font-semibold mb-2">60 Pro · 9 Mixed · 7 Con</p>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Largest evidence body. Contains most cautionary reports — technique and patient selection critical.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-foreground mb-2">
                                    Knee & Orthopaedic
                                    <span className="ml-3 text-sm font-medium text-primary">29 studies</span>
                                </h4>
                                <p className="text-lg text-primary font-semibold mb-2">25 Pro · 4 Mixed · 0 Con</p>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Highly consistent results. Strongly supports cryoanalgesia in TKA perioperative pain management.
                                </p>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto mb-16">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-primary/20">
                                        <th className="py-4 px-5 font-bold text-foreground text-lg">Additional Areas</th>
                                        <th className="py-4 px-5 font-bold text-foreground text-center text-lg">Studies</th>
                                        <th className="py-4 px-5 font-semibold text-green-600 text-center text-lg">Pro</th>
                                        <th className="py-4 px-5 font-semibold text-amber-500 text-center text-lg">Mixed</th>
                                        <th className="py-4 px-5 font-semibold text-red-500 text-center text-lg">Con</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {[
                                        ["Low back / lumbar spine", 10, 9, 1, 0],
                                        ["Upper extremity / spasticity", 8, 8, 0, 0],
                                        ["Head / face", 6, 3, 3, 0],
                                        ["Phantom limb / amputation", 5, 4, 1, 0],
                                    ].map(([a,s,p,m,c], i) => (
                                        <tr key={i} className="hover:bg-secondary/10 transition-colors">
                                            <td className="py-4 px-5 font-medium text-foreground text-lg">{a}</td>
                                            <td className="py-4 px-5 text-center text-foreground/70 text-lg">{s}</td>
                                            <td className="py-4 px-5 text-center font-semibold text-green-600 text-lg">{p}</td>
                                            <td className="py-4 px-5 text-center font-semibold text-amber-500 text-lg">{m}</td>
                                            <td className="py-4 px-5 text-center font-semibold text-red-500 text-lg">{c}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Quality of Evidence */}
                        <h3 className="text-2xl font-display font-bold text-foreground mb-6">Quality of Evidence</h3>
                        <div className="space-y-6 mb-16">
                            {[
                                { label: "High-Level (I & II)", detail: "33 studies (25 Pro, 4 Mix, 4 Con). Comprising randomized trials, prospective studies, and systematic reviews." },
                                { label: "Observational (III & IV)", detail: "82 studies (79 Pro, 1 Mix, 2 Con). Reflecting real-world clinical practice." },
                                { label: "Expert Commentary (V)", detail: "37 publications (19 Pro, 16 Mix, 2 Con). Focused on protocol optimization and emerging indications." },
                            ].map(({ label, detail }, i) => (
                                <div key={i} className="border-l-4 border-primary pl-6">
                                    <p className="text-lg font-bold text-foreground mb-1">{label}</p>
                                    <p className="text-lg text-foreground/90 leading-relaxed">{detail}</p>
                                </div>
                            ))}
                        </div>

                        {/* Overall Interpretation */}
                        <div className="rounded-2xl p-8 lg:p-12 shadow-lg" style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.85) 100%)" }}>
                            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">Overall Interpretation</p>
                            <p className="text-2xl lg:text-3xl font-display font-bold text-white leading-snug mb-4">
                                Across 155 peer-reviewed studies, cryoanalgesia is widely studied, predominantly positive, and supported by expanding higher-quality evidence.
                            </p>
                            <p className="text-white/80 text-lg leading-relaxed">
                                However, outcomes depend strongly on clinical indication, nerve selection, technique, and patient selection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Selected Publications */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-10">Selected Publications</h3>
                        <div className="space-y-6">
                            {cryoPublications.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => openPdf(item.pdf, item.title)}
                                    className="block w-full text-left py-5 border-b border-border hover:border-primary/30 transition-all duration-200 group"
                                >
                                    <h4 className="text-lg font-bold text-primary group-hover:underline mb-2 leading-snug">{item.title}</h4>
                                    <div className="text-lg text-foreground/70 flex items-center gap-2">
                                        <span className="font-semibold text-foreground">{item.author}</span>
                                        <span className="text-foreground/30">·</span>
                                        <span>{item.journal}</span>
                                        <FileText className="w-4 h-4 ml-auto text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="divide-y divide-border">
                            {/* Q1 */}
                            <div className="py-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">
                                    How does cryoanalgesia work?
                                </h4>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Cryoanalgesia involves placing a probe adjacent to a peripheral nerve and applying controlled low temperatures (typically approximately −70°C). This produces temporary axonal interruption via Wallerian degeneration while preserving the connective tissue structure, allowing regeneration over time.
                                </p>
                            </div>

                            {/* Q2 */}
                            <div className="py-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">
                                    How long does the pain relief last?
                                </h4>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Analgesia typically lasts between 3 and 12 months, corresponding to the time required for axonal regeneration. In selected cohorts, relief has been documented beyond 12 months. As regeneration occurs, symptoms may gradually return, and repeat treatment may be considered where clinically appropriate.
                                </p>
                            </div>

                            {/* Q3 — Comparison Table */}
                            <div className="py-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">
                                    How is cryoanalgesia different from RFA and PRF?
                                </h4>
                                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                                    Cryoanalgesia produces controlled, reversible axonal interruption while preserving nerve connective tissue architecture. Thermal radiofrequency ablation produces heat-mediated neurodestruction. Pulsed radiofrequency alters neural signalling without structural axonal disruption. Cryoneurolysis is associated with a lower risk of neuroma formation compared with thermal neurodestructive techniques.
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b-2 border-primary/20">
                                                <th className="py-3 px-4 font-bold text-foreground text-lg">Cryo</th>
                                                <th className="py-3 px-4 font-bold text-foreground text-lg">RFA</th>
                                                <th className="py-3 px-4 font-bold text-foreground text-lg">Pulsed RF</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-border">
                                                <td className="py-3 px-4 text-lg text-foreground/90">Wallerian degeneration</td>
                                                <td className="py-3 px-4 text-lg text-foreground/90">Thermal coagulation</td>
                                                <td className="py-3 px-4 text-lg text-foreground/90">Electrical modulation</td>
                                            </tr>
                                            <tr className="border-b border-border">
                                                <td className="py-3 px-4 text-lg text-foreground/90">Reversible</td>
                                                <td className="py-3 px-4 text-lg text-foreground/90">Often longer-lasting</td>
                                                <td className="py-3 px-4 text-lg text-foreground/90">Modulatory effect</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 text-lg text-green-600 font-medium">Lower neuroma risk</td>
                                                <td className="py-3 px-4 text-lg text-red-600 font-medium">Higher neuroma risk</td>
                                                <td className="py-3 px-4 text-lg text-foreground/90">No structural degeneration</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="py-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">
                                    Is image guidance used?
                                </h4>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Yes. Cryoanalgesia is performed under ultrasound or fluoroscopic guidance to ensure accurate probe positioning and procedural safety.
                                </p>
                            </div>

                            {/* Q5 — Risks */}
                            <div className="py-8">
                                <h4 className="text-lg font-bold text-foreground mb-3">
                                    What are the risks of cryoanalgesia?
                                </h4>
                                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                                    Cryoanalgesia is generally well tolerated when performed by trained clinicians under image guidance.
                                </p>
                                <div className="space-y-8">
                                    <div>
                                        <h5 className="text-lg font-bold text-foreground mb-3">Common and Usually Temporary Effects</h5>
                                        <ul className="space-y-2">
                                            {["Localised numbness or altered sensation", "Mild bruising or swelling", "Transient dysesthesia during regeneration", "Local soreness"].map((r, i) => (
                                                <li key={i} className="flex items-center gap-3 text-lg text-foreground/90 leading-relaxed"><ChevronRight className="w-4 h-4 text-green-500 shrink-0" />{r}</li>
                                            ))}
                                        </ul>
                                        <p className="text-lg text-foreground/70 mt-3">These effects typically resolve spontaneously.</p>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-foreground mb-3">Less Common Risks</h5>
                                        <ul className="space-y-2">
                                            {["Prolonged sensory change beyond expected regeneration period", "Temporary motor weakness when mixed or motor nerves are targeted", "Variable analgesic response depending on pathology"].map((r, i) => (
                                                <li key={i} className="flex items-center gap-3 text-lg text-foreground/90 leading-relaxed"><ChevronRight className="w-4 h-4 text-amber-500 shrink-0" />{r}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-foreground mb-3">Rare Complications</h5>
                                        <ul className="space-y-2">
                                            {["Skin injury (in superficial applications)", "Infection", "Bleeding or haematoma", "Unintended nerve injury"].map((r, i) => (
                                                <li key={i} className="flex items-center gap-3 text-lg text-foreground/90 leading-relaxed"><ChevronRight className="w-4 h-4 text-red-500 shrink-0" />{r}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-lg font-bold text-foreground mb-3">Risk Mitigation</h5>
                                        <p className="text-lg text-foreground/90 leading-relaxed mb-3">The risk profile of cryoanalgesia is minimized through:</p>
                                        <ul className="space-y-2">
                                            {["Careful patient selection", "Use of image guidance (ultrasound or fluoroscopy)", "Appropriate probe positioning and temperature control", "Clinician training and adherence to established procedural protocols"].map((r, i) => (
                                                <li key={i} className="flex items-center gap-3 text-lg text-foreground/90 leading-relaxed"><CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />{r}</li>
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
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">Important Note</h3>
                        <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-8">
                            Cryoanalgesia produces temporary, controlled axonal interruption (axonotmesis) rather than permanent neurodestruction. As the nerve regenerates, symptoms may recur over time. Repeat treatment may be considered where clinically appropriate.
                        </p>
                        <div className="w-20 h-[2px] bg-border mx-auto mb-8" />
                        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                            Cryoanalgesia is a minimally invasive technique that produces controlled, reversible axonal interruption with a favourable safety profile when performed by trained clinicians.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CryoanalgesiaDetail;
