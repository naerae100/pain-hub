import { Link } from "react-router-dom";
import { ChevronRight, Zap, BookOpen, Video, FileText, ArrowRight, CheckCircle2, AlertTriangle, Users, Microscope, Shield, Snowflake, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import procedureHands from "@/assets/procedure-hands.jpg";

const escalationSteps = [
    {
        step: "01",
        title: "Cryoanalgesia (Facet Denervation)",
        icon: Snowflake,
        description: "Targeted cryoneurolysis of facet-mediated pain. Non-destructive, reversible nerve modulation as an initial or diagnostic step.",
        href: "/procedures/cryoanalgesia",
        color: "from-blue-500 to-blue-600",
    },
    {
        step: "02",
        title: "Epidural Balloon Decompression",
        icon: Circle,
        description: "Catheter-based decompression and adhesiolysis for central and foraminal stenosis, disc-related pain, and epidural adhesions.",
        href: "/procedures/epidural-balloon-decompression",
        color: "from-primary to-primary/80",
    },
    {
        step: "03",
        title: "Percutaneous Laser Disc Decompression",
        icon: Zap,
        description: "Laser energy to reduce intradiscal pressure in contained disc herniations causing persistent radicular pain.",
        href: "/procedures/pldd",
        color: "from-amber-500 to-amber-600",
    },
];

const advantages = [
    "Minimally invasive — performed percutaneously under image guidance",
    "Outpatient or same-day procedure",
    "Reduced intradiscal pressure provides neural decompression",
    "Preservation of disc integrity — no tissue removal",
    "Lower surgical risk compared with open discectomy",
    "Suitable for patients who are not surgical candidates or prefer conservative approach",
];

const clinicalApplications = [
    "Contained lumbar disc herniation with radicular symptoms",
    "Contained cervical disc herniation causing radiculopathy",
    "Disc protrusions causing persistent pain despite conservative therapy",
    "Patients who have not responded to epidural steroid injections",
    "Patients seeking alternatives to open or endoscopic discectomy",
];

const faqs = [
    {
        question: "What is PLDD?",
        answer: "Percutaneous Laser Disc Decompression (PLDD) is a minimally invasive procedure where a thin optical fibre is inserted into the centre of the intervertebral disc under image guidance. Controlled laser energy is delivered to vaporise a small amount of disc tissue, reducing intradiscal pressure and relieving neural compression.",
    },
    {
        question: "Who is a suitable candidate for PLDD?",
        answer: "PLDD is indicated for patients with contained disc herniations (the outer annulus is intact) causing radicular symptoms that have not responded to conservative treatment including physiotherapy, medication, and epidural injections. It is not suitable for extruded or sequestrated disc fragments.",
    },
    {
        question: "How does PLDD compare to open discectomy?",
        answer: "PLDD is less invasive — performed through a needle under local anaesthesia with minimal tissue disruption. Recovery is faster, surgical risks are lower, and the procedure preserves disc structure. However, it is indicated for contained herniations, whereas open discectomy may address a wider range of disc pathologies.",
    },
    {
        question: "What are the expected outcomes?",
        answer: "Clinical studies report significant pain improvement in selected patients with contained disc herniations. Success rates vary by patient selection, but favourable outcomes are reported in 70–89% of well-selected patients, with sustained benefit documented at 1–2 year follow-up.",
    },
    {
        question: "What are the risks of PLDD?",
        answer: "PLDD is generally considered a low-risk procedure. Potential risks include transient increase in pain, local soreness, and rare complications such as discitis (disc infection), nerve injury, or thermal damage. Risks are minimised through proper patient selection, image guidance, and controlled laser delivery.",
    },
    {
        question: "How does PLDD fit into a treatment pathway?",
        answer: "PLDD is positioned as part of a spine procedure escalation pathway: Cryo facet denervation → Epidural balloon decompression → PLDD. This stepwise approach allows clinicians to escalate from reversible nerve modulation through catheter-based decompression to disc-level intervention based on patient response and pathology.",
    },
];

const PLDDDetail = () => {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                image={procedureHands}
                title="Percutaneous Laser Disc Decompression (PLDD)"
                subtitle="Precision energy delivery for modern minimally invasive surgery."
                breadcrumbs={[{ label: "Procedures", href: "/procedures" }, { label: "PLDD" }]}
            />

            {/* CTA Bar */}
            <section className="bg-primary/5 border-b border-border">
                <div className="section-container py-4">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link to="/clinical-education">
                            <Button variant="outline" size="sm" className="rounded-full gap-2">
                                <BookOpen className="w-4 h-4" /> View Training
                            </Button>
                        </Link>
                        <Link to="/videos">
                            <Button variant="outline" size="sm" className="rounded-full gap-2">
                                <Video className="w-4 h-4" /> Watch Videos
                            </Button>
                        </Link>
                        <Link to="/resources">
                            <Button variant="outline" size="sm" className="rounded-full gap-2">
                                <FileText className="w-4 h-4" /> Read Evidence
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                Overview
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                What is PLDD?
                            </h2>
                        </div>
                        <div className="space-y-5">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Percutaneous Laser Disc Decompression (PLDD) is a minimally invasive treatment for contained disc pathology causing persistent radicular pain. A thin optical fibre is inserted into the disc nucleus under image guidance, and controlled laser energy is delivered to vaporise a small volume of disc tissue.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                This reduces intradiscal pressure, allowing the disc bulge to recede and relieving neural compression — without the need for open surgery or tissue removal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spine Procedure Escalation Pathway */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="flex items-center justify-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Treatment Pathway
                            <span className="w-8 h-[2px] bg-primary"></span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Spine Procedure Escalation Pathway
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            The three procedures form a clear escalation pathway for spine-related pain, from reversible nerve modulation to disc-level intervention.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-400 via-primary to-amber-400" />

                        <div className="grid lg:grid-cols-3 gap-8">
                            {escalationSteps.map((step) => (
                                <Link
                                    key={step.step}
                                    to={step.href}
                                    className="bg-background border border-border/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group relative"
                                >
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <div className="text-sm text-primary font-bold mb-2">Step {step.step}</div>
                                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
                                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mechanism of Action */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                                <Microscope className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                                Mechanism of Action
                            </h2>
                        </div>
                        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                PLDD works by delivering controlled laser energy (typically Nd:YAG or diode laser) through a thin optical fibre inserted percutaneously into the disc nucleus pulposus.
                            </p>
                            <p>
                                The laser energy vaporises a small volume of disc tissue, converting it to gas. This creates a reduction in intradiscal pressure, which allows the disc bulge to retract away from the compressed nerve root.
                            </p>
                            <p>
                                The procedure is performed under fluoroscopic or CT guidance to ensure precise fibre positioning, and typically takes 30–60 minutes under local anaesthesia.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Advantages */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Key Advantages
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {advantages.map((item) => (
                                <div key={item} className="flex items-start gap-3 bg-background border border-border/50 rounded-xl p-5">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Applications */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Clinical Applications
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            PLDD is indicated for patients with contained disc pathology causing radicular symptoms that have not responded to conservative management:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {clinicalApplications.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-muted-foreground text-lg">
                                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Patient Selection & Contraindications */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-foreground">Ideal Candidates</h2>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Contained disc herniation confirmed on MRI",
                                    "Radicular pain consistent with disc level",
                                    "Failure of conservative therapy (6+ weeks)",
                                    "No significant neurological deficit requiring urgent surgery",
                                    "Patients preferring minimally invasive approach",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-foreground">Contraindications</h2>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Extruded or sequestrated disc fragments",
                                    "Severe spinal stenosis not related to disc pathology",
                                    "Significant neurological deficit (e.g. cauda equina syndrome)",
                                    "Active infection at the procedure site",
                                    "Severe disc space narrowing (>50% height loss)",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risks */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Risks & Safety
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            PLDD is generally considered a low-risk procedure when performed with appropriate patient selection and image guidance.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card border border-border rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-emerald-600" /> Low-Risk Profile
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "No tissue removal — disc structure preserved",
                                        "Local anaesthesia reduces systemic risk",
                                        "Image guidance ensures precise fibre positioning",
                                        "Short procedure time (30–60 min)",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-card border border-border rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-500" /> Potential Risks
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Transient increase in pain",
                                        "Local soreness at insertion site",
                                        "Discitis / disc infection (rare)",
                                        "Nerve injury or thermal damage (rare with guidance)",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Outcomes */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Clinical Outcomes
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <div className="text-4xl font-display font-bold text-primary mb-2">70–89%</div>
                                <p className="text-sm text-muted-foreground">Favourable outcomes in well-selected patients</p>
                            </div>
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <div className="text-4xl font-display font-bold text-primary mb-2">1–2 yr</div>
                                <p className="text-sm text-muted-foreground">Sustained benefit documented at follow-up</p>
                            </div>
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <div className="text-4xl font-display font-bold text-primary mb-2">30–60 min</div>
                                <p className="text-sm text-muted-foreground">Typical procedure duration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-card border border-border rounded-2xl p-8">
                                    <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Links */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-t border-border">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Education & Further Information
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "Clinical Education", href: "/clinical-education", icon: BookOpen, desc: "Explore training programs covering PLDD technique, patient selection, and laser safety." },
                            { title: "Resources & Evidence", href: "/resources", icon: FileText, desc: "Access clinical evidence, imaging studies, and published outcomes for PLDD." },
                            { title: "Procedural Videos", href: "/videos", icon: Video, desc: "Watch PLDD procedure demonstrations and patient assessment techniques." },
                        ].map((item) => (
                            <Link
                                key={item.title}
                                to={item.href}
                                className="bg-background border border-border/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{item.desc}</p>
                                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PLDDDetail;
