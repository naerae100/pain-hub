import { Link } from "react-router-dom";
import { ChevronRight, Circle, BookOpen, Video, FileText, ArrowRight, CheckCircle2, AlertTriangle, Users, Microscope, Shield, TrendingUp, Droplets, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import heroSurgery from "@/assets/hero-surgery.jpg";

const mechanisms = [
    {
        title: "Mechanical Decompression",
        icon: Zap,
        color: "bg-blue-100 text-blue-600",
        description: "Balloon expansion creates additional space within the spinal canal or neural foramen, reducing neural compression.",
    },
    {
        title: "Microcirculatory Improvement",
        icon: Droplets,
        color: "bg-emerald-100 text-emerald-600",
        description: "Restoration of local blood flow may reduce ischemia-related nerve dysfunction contributing to claudication.",
    },
    {
        title: "Enhanced Adhesiolysis",
        icon: Shield,
        color: "bg-purple-100 text-purple-600",
        description: "Balloon expansion detaches fibrotic adhesions across a broader area than conventional catheters, improving catheter mobility and medication spread.",
    },
];

const indications = [
    "Lumbar spinal stenosis",
    "Chronic disc herniation",
    "Epidural adhesions",
    "Post-spinal surgery pain syndrome",
];

const favourablePredictors = [
    "Prior temporary relief from epidural block or neuroplasty",
    "Imaging consistent with compressive or adhesive pathology",
];

const poorerOutcomes = [
    "Severe neuropathic pain phenotype",
    "Diabetes mellitus",
    "Redundant nerve roots on MRI",
    "Significant psychological comorbidity",
];

const faqs = [
    {
        question: "What is spinal epidural balloon decompression?",
        answer: "It is a minimally invasive, nonsurgical technique that uses a small inflatable balloon catheter within the epidural space to mechanically expand stenosed regions, detach epidural adhesions, and improve local circulation and neural mobility.",
    },
    {
        question: "Who is this procedure suitable for?",
        answer: "Patients with chronic low back and leg pain, neurogenic claudication, or structural lumbar pathology who have experienced insufficient or short-lived relief from medication, physiotherapy, standard epidural injections, or neuroplasty.",
    },
    {
        question: "How effective is balloon decompression?",
        answer: "Prospective clinical studies demonstrate sustained improvement in back and leg pain, meaningful reduction in disability scores (ODI) lasting beyond one year, and progressive improvement in walking capacity. Imaging analyses show increased foraminal diameter (~28%) and substantial expansion of foraminal volume (~98%).",
    },
    {
        question: "How is the procedure performed?",
        answer: "Balloon decompression is most commonly performed via a caudal epidural approach, with transforaminal or interlaminar access used for focal pathology. Gradual balloon inflation minimises discomfort, and the procedure is performed under image guidance for accuracy and safety.",
    },
    {
        question: "What are the risks?",
        answer: "As with any epidural intervention, potential risks include transient pain exacerbation or discomfort, bleeding or infection, and dural puncture or neurological irritation (rare). Careful patient selection, imaging guidance, and procedural expertise are essential to minimise complications.",
    },
];

const EpiduralBalloonDetail = () => {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                image={heroSurgery}
                title="Epidural Balloon Decompression"
                subtitle="Minimally invasive treatment for lumbar spinal stenosis and radicular pain."
                breadcrumbs={[{ label: "Procedures", href: "/procedures" }, { label: "Epidural Balloon Decompression" }]}
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
                                What is Epidural Balloon Decompression?
                            </h2>
                        </div>
                        <div className="space-y-5">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Spinal Epidural Balloon Decompression and Adhesiolysis is a minimally invasive, nonsurgical interventional technique developed to address persistent lumbar spinal stenosis, disc-related radicular pain, and epidural adhesions in patients who have not responded to conventional therapy.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The technique uses a small inflatable balloon catheter within the epidural space to mechanically expand stenosed regions, detach epidural adhesions, and improve local circulation and neural mobility.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                This enables more effective decompression and targeted medication delivery than conventional epidural catheter techniques.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Where It Fits */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                <Circle className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                                Where It Fits Clinically
                            </h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                            Epidural balloon decompression is considered for patients with:
                        </p>
                        <ul className="space-y-3 mb-6">
                            {["Chronic low back and leg pain", "Neurogenic claudication", "Structural lumbar pathology"].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-muted-foreground text-lg">
                                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            …who have experienced insufficient or short-lived relief from medication, physiotherapy, standard epidural injections, or neuroplasty.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mechanisms of Action */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Mechanisms of Action
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Pain and functional limitation may improve through three complementary effects:
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {mechanisms.map((mech) => (
                            <div key={mech.title} className="bg-card border border-border rounded-2xl p-8 text-center">
                                <div className={`w-14 h-14 rounded-2xl ${mech.color} flex items-center justify-center mx-auto mb-6`}>
                                    <mech.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{mech.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{mech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Indications & Patient Selection */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10 text-center">
                            Indications & Patient Selection
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Key Indications */}
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                                    <Microscope className="w-5 h-5 text-primary" /> Key Indications
                                </h3>
                                <ul className="space-y-3">
                                    {indications.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Favourable Predictors */}
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-emerald-600" /> Favourable Predictors
                                </h3>
                                <ul className="space-y-3">
                                    {favourablePredictors.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Poor Outcome Factors */}
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" /> Poorer Outcome Factors
                                </h3>
                                <ul className="space-y-3">
                                    {poorerOutcomes.map((item) => (
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

            {/* Procedural Overview & Safety */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Procedural Overview & Safety
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Balloon decompression is most commonly performed via a caudal epidural approach, with transforaminal or interlaminar access used for focal pathology.
                        </p>
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <h3 className="text-lg font-bold text-foreground mb-4">Key procedural considerations:</h3>
                            <ul className="space-y-3">
                                {[
                                    "Gradual balloon inflation to minimise discomfort",
                                    "Positioning within the anterior epidural space when feasible",
                                    "Correlation of stimulation or contact with the patient's typical pain pattern",
                                    "Performed under image guidance to support accuracy and safety",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Evidence */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Clinical Evidence & Outcomes
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Prospective clinical studies demonstrate:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-4">Clinical Outcomes</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Sustained improvement in back and leg pain",
                                        "Meaningful reduction in disability scores (ODI) lasting beyond one year",
                                        "Progressive improvement in walking capacity for patients with claudication",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-4">Imaging Analysis</h3>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-4xl font-display font-bold text-primary mb-1">~28%</div>
                                        <p className="text-sm text-muted-foreground">Increased foraminal diameter</p>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-display font-bold text-primary mb-1">~98%</div>
                                        <p className="text-sm text-muted-foreground">Expansion of foraminal volume</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic">
                            Randomised comparisons suggest higher patient satisfaction and longer-lasting benefit compared with conventional neuroplasty techniques.
                        </p>
                    </div>
                </div>
            </section>

            {/* Risks */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Risks & Limitations
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            As with any epidural intervention, potential risks include:
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Transient pain exacerbation or discomfort",
                                "Bleeding or infection",
                                "Dural puncture or neurological irritation (rare)",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-muted-foreground text-lg">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                <strong className="text-foreground">Important:</strong> Careful patient selection, imaging guidance, and procedural expertise are essential to minimise complications.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-background border border-border/50 rounded-2xl p-8">
                                    <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Education & Links */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Education & Further Information
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "Clinical Education", href: "/clinical-education", icon: BookOpen, desc: "View clinical education opportunities related to advanced spine decompression techniques." },
                            { title: "Resources & Evidence", href: "/resources", icon: FileText, desc: "Access procedural resources, clinical evidence, and published outcomes data." },
                            { title: "Training Enquiries", href: "/about#contact", icon: Users, desc: "Enquire about training in advanced spine decompression techniques." },
                        ].map((item) => (
                            <Link
                                key={item.title}
                                to={item.href}
                                className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group flex flex-col"
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

export default EpiduralBalloonDetail;
