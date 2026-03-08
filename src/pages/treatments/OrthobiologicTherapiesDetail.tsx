import { Link } from "react-router-dom";
import { ChevronRight, Droplets, BookOpen, Video, FileText, ArrowRight, CheckCircle2, AlertTriangle, Users, Microscope, Shield, Heart, Zap, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import heroMedical from "@/assets/hero-medical.jpg";

const platforms = [
    {
        title: "Platelet Biologics (PRP)",
        icon: Droplets,
        color: "bg-rose-100 text-rose-600",
        description: "Supports tissue healing through concentrated growth factors derived from the patient's own blood. PRP is prepared by centrifuging a small blood sample to produce a platelet-rich concentrate.",
        uses: ["Tendinopathy management", "Joint preservation and cartilage support", "Soft tissue healing enhancement", "Adjunct to surgical procedures"],
    },
    {
        title: "Bone Marrow & Autograft",
        icon: Beaker,
        color: "bg-amber-100 text-amber-600",
        description: "Provides osteogenic and osteoinductive material for advanced orthopaedic and spine applications. Bone marrow aspirate concentrate (BMAC) contains mesenchymal stem cells and growth factors.",
        uses: ["Bone healing support", "Spinal fusion adjuncts", "Non-union fracture management", "Osteonecrosis treatment"],
    },
];

const clinicalUses = [
    { title: "Tendinopathies", desc: "Chronic tendon conditions including lateral epicondylitis, Achilles tendinopathy, rotator cuff tendinopathy, and patellar tendinopathy." },
    { title: "Joint Preservation", desc: "Early to moderate osteoarthritis of the knee, hip, and shoulder. Aims to reduce inflammation, support cartilage health, and delay surgical intervention." },
    { title: "Spine Adjuncts", desc: "Disc regeneration research, facet joint applications, and use alongside minimally invasive spine procedures." },
    { title: "Bone Healing", desc: "Non-union fracture management, spinal fusion support, and bone defect repair using autologous biologic material." },
];

const faqs = [
    {
        question: "What are orthobiologic therapies?",
        answer: "Orthobiologic therapies use substances naturally found in the body — such as platelets, growth factors, and stem cells — to support the healing of musculoskeletal tissues including tendons, ligaments, cartilage, and bone.",
    },
    {
        question: "What is PRP (Platelet-Rich Plasma)?",
        answer: "PRP is prepared from a small sample of the patient's own blood, which is centrifuged to concentrate the platelets and growth factors. This concentrate is then injected into the target area to support tissue repair and reduce inflammation.",
    },
    {
        question: "What conditions can be treated with orthobiologics?",
        answer: "Common applications include chronic tendinopathies (elbow, shoulder, Achilles, patellar), early to moderate joint osteoarthritis, soft tissue injuries, and as adjuncts to spine and orthopaedic procedures for bone healing.",
    },
    {
        question: "How effective are orthobiologic treatments?",
        answer: "Clinical evidence is growing. PRP has shown benefit in tendinopathy and mild-moderate osteoarthritis in multiple systematic reviews. Bone marrow concentrate is used in orthopaedic and spine surgery with supportive evidence for enhanced bone healing. Outcomes depend on patient selection, preparation technique, and indication.",
    },
    {
        question: "Are orthobiologic treatments safe?",
        answer: "Because orthobiologics use the patient's own blood or bone marrow, the risk of allergic reaction or disease transmission is minimal. Common side effects include temporary injection site soreness, swelling, or bruising. Infection risk is low with standard sterile technique.",
    },
    {
        question: "How is the procedure performed?",
        answer: "For PRP, a blood sample is drawn and centrifuged chairside. The platelet concentrate is then injected under image guidance (ultrasound) into the target tissue. For bone marrow aspirate, the sample is typically harvested from the posterior iliac crest and processed for concentrated application.",
    },
];

const advantages = [
    "Uses the patient's own biologic material (autologous)",
    "Minimal risk of allergic reaction or disease transmission",
    "Outpatient or day-case procedures",
    "Can be combined with other interventional techniques",
    "Supports tissue healing and may delay or avoid surgery",
    "Image-guided delivery for precision",
];

const OrthobiologicTherapiesDetail = () => {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                image={heroMedical}
                title="Orthobiologic Therapies"
                subtitle="Harnessing the body's regenerative potential to support musculoskeletal repair."
                breadcrumbs={[{ label: "Procedures", href: "/procedures" }, { label: "Orthobiologic Therapies" }]}
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
                                What are Orthobiologic Therapies?
                            </h2>
                        </div>
                        <div className="space-y-5">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Orthobiologic therapies encompass a range of treatments that use substances naturally found in the body — including platelets, growth factors, and stem cells — to support the healing and regeneration of musculoskeletal tissues.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                These therapies are increasingly used in interventional pain management and orthopaedic practice to augment tissue repair, reduce inflammation, and support functional recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Biologic Platforms
                        </h2>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {platforms.map((platform) => (
                            <div key={platform.title} className="bg-background border border-border/50 rounded-2xl p-8">
                                <div className={`w-14 h-14 rounded-2xl ${platform.color} flex items-center justify-center mb-6`}>
                                    <platform.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{platform.title}</h3>
                                <p className="text-muted-foreground leading-relaxed mb-6">{platform.description}</p>
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3">Key Applications</h4>
                                <ul className="space-y-2">
                                    {platform.uses.map((use) => (
                                        <li key={use} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            <span>{use}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinical Uses */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Clinical Uses
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {clinicalUses.map((use) => (
                            <div key={use.title} className="bg-card border border-border rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-foreground mb-3">{use.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{use.desc}</p>
                            </div>
                        ))}
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

            {/* Patient Selection */}
            <section className="py-20 lg:py-24">
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
                                    "Patients with chronic tendinopathy not responding to physiotherapy",
                                    "Early to moderate osteoarthritis seeking non-surgical options",
                                    "Athletes or active individuals with soft tissue injuries",
                                    "Patients requiring biologic support for bone healing",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
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
                                <h2 className="text-2xl font-display font-bold text-foreground">Considerations</h2>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Advanced joint destruction may limit benefit",
                                    "Active infection at the treatment site is a contraindication",
                                    "Anticoagulation therapy may require management",
                                    "Patient expectations should be discussed — recovery enhancement, not instant cure",
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
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Safety Profile
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Because orthobiologics use the patient's own biologic material, the risk profile is generally favourable.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-emerald-600" /> Safety Advantages
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Autologous — minimal rejection or allergy risk",
                                        "No disease transmission risk",
                                        "Well tolerated with standard technique",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-background border border-border/50 rounded-2xl p-8">
                                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-500" /> Common Side Effects
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Temporary injection site soreness or discomfort",
                                        "Mild swelling or bruising",
                                        "Transient stiffness at the injection site",
                                        "Infection risk (low with sterile technique)",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <ChevronRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
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
                            { title: "Clinical Education", href: "/clinical-education", icon: BookOpen, desc: "Explore training programs covering PRP preparation, injection techniques, and bone marrow aspirate procedures." },
                            { title: "Resources & Evidence", href: "/resources", icon: FileText, desc: "Access clinical evidence, case reports, and published outcomes for orthobiologic treatments." },
                            { title: "Procedural Videos", href: "/videos", icon: Video, desc: "Watch demonstrations of PRP preparation, ultrasound-guided injection, and bone marrow harvesting." },
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

export default OrthobiologicTherapiesDetail;
