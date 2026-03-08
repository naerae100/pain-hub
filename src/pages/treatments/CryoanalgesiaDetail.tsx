import { Link } from "react-router-dom";
import { ChevronRight, Snowflake, Shield, Activity, Zap, BookOpen, Video, FileText, ArrowRight, CheckCircle2, AlertTriangle, Users, Microscope, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import cryoDevice from "@/assets/cryo-device.jpg";

const advantages = {
    clinical: [
        "Immediate and often significant pain reduction",
        "Sustained relief lasting months (and in some cases longer)",
        "Reduction or cessation of opioid use",
        "Reduced risk of acute pain transitioning to chronic pain",
    ],
    safety: [
        "Selective targeting of nerve tissue",
        "Preservation of nerve sheath allowing regeneration",
        "Low risk of neuroma formation",
        "Minimal impact on surrounding structures",
    ],
    procedural: [
        "Image-guided precision (ultrasound or fluoroscopy)",
        "Can treat multiple targets in a single session",
        "Enables earlier mobilisation and rehabilitation",
        "May shorten hospital stay and reduce need for epidural analgesia",
    ],
};

const clinicalApplications = [
    "Peripheral neuralgia (e.g. trigeminal, occipital, suprascapular)",
    "Spine-related pain (facet-mediated pain, radicular contributors)",
    "Orthopaedic pain (genicular nerve, shoulder, hip)",
    "Postoperative pain (thoracic, chest wall)",
    "Neuromas and neuropathic pain syndromes",
    "Spasticity with pain (upper and lower limb)",
];



const riskCategories = [
    {
        title: "Common and usually temporary",
        items: [
            "Localised numbness or altered sensation at the treatment site",
            "Bruising or mild swelling around the probe insertion area",
            "Transient dysesthesia or tingling during nerve regeneration",
            "Local soreness lasting a few days",
        ],
    },
    {
        title: "Less common risks",
        items: [
            "Prolonged sensory change beyond the expected regeneration period",
            "Temporary motor weakness when mixed or motor nerves are intentionally targeted",
            "Incomplete or variable pain relief, depending on anatomy and pathology",
        ],
    },
    {
        title: "Rare complications",
        items: [
            "Skin injury or frostbite (primarily with superficial or poorly insulated probe placement)",
            "Infection at the needle insertion site",
            "Bleeding or hematoma, particularly in anticoagulated patients",
            "Unintended nerve injury (rare when image guidance is used)",
        ],
    },
];

const CryoanalgesiaDetail = () => {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                image={cryoDevice}
                title="Cryoanalgesia"
                subtitle="Targeted nerve modulation for durable pain relief"
                breadcrumbs={[{ label: "Procedures", href: "/procedures" }, { label: "Cryoanalgesia" }]}
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
                                What is Cryoanalgesia?
                            </h2>
                        </div>
                        <div className="space-y-5">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Cryoanalgesia is a minimally invasive nerve modulation technique that temporarily interrupts sensory nerve conduction using controlled low temperatures.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The nerve structure is preserved, allowing regeneration over time while providing sustained pain relief.
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
                                <Activity className="w-7 h-7" />
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                                Where Cryoanalgesia Fits
                            </h2>
                        </div>
                        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Cryoanalgesia is used for patients with neuropathic, peripheral, orthopaedic, and spine-related pain who have not achieved adequate relief with conservative therapy or injections.
                            </p>
                            <p>
                                It is used both as a standalone outpatient intervention and intraoperatively to support postoperative recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Advantages — 3 columns */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Key Advantages
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Clinical */}
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-5">Clinical Advantages</h3>
                            <ul className="space-y-3">
                                {advantages.clinical.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Safety */}
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-5">Safety & Tissue Preservation</h3>
                            <ul className="space-y-3">
                                {advantages.safety.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Procedural */}
                        <div className="bg-card border border-border rounded-2xl p-8">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-5">Procedural & Recovery Benefits</h3>
                            <ul className="space-y-3">
                                {advantages.procedural.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Applications */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Clinical Applications
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Cryoanalgesia and cryoneurolysis have a broad range of clinical applications, primarily focused on managing pain and neurological symptoms across various medical specialties. These techniques are utilized both intraoperatively during surgical procedures and as standalone, minimally invasive treatments.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {clinicalApplications.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-muted-foreground text-lg">
                                    <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-background border border-border/50 rounded-2xl p-6">
                            <p className="text-muted-foreground leading-relaxed italic">
                                Detailed indication lists, case examples, and procedural videos are available in <Link to="/resources" className="text-primary font-medium hover:underline">Resources</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intraoperative Use */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                                <Microscope className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-primary uppercase tracking-wider">Intraoperative</p>
                                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                                    Intraoperative Applications
                                </h2>
                            </div>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Cryoanalgesia is widely used intraoperatively, particularly in thoracic and cardiac surgery, to provide prolonged postoperative pain control and reduce opioid requirements.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/videos">
                                <Button variant="outline" className="rounded-full gap-2">
                                    <Video className="w-4 h-4" /> Procedural Videos
                                </Button>
                            </Link>
                            <Link to="/resources">
                                <Button variant="outline" className="rounded-full gap-2">
                                    <FileText className="w-4 h-4" /> Clinical Evidence
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Patient Selection & Contraindications */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-foreground">Ideal Candidates</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Patients who have not achieved adequate relief through conservative therapy or injections.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-foreground">Contraindications</h2>
                            </div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Contraindications are reviewed during training and outlined in clinical guidelines.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Risks */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Risks & Safety Profile
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            Cryoanalgesia is generally well tolerated and considered a low-risk interventional procedure when performed with appropriate technique and patient selection.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {riskCategories.map((cat) => (
                                <div key={cat.title} className="bg-card border border-border rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-foreground mb-4">{cat.title}</h3>
                                    <ul className="space-y-3">
                                        {cat.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                                                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Neuroma risk */}
                        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 mb-8">
                            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-emerald-600" /> Neuroma Risk
                            </h3>
                            <p className="text-muted-foreground leading-relaxed mb-3">
                                Unlike thermal neurolysis, cryoanalgesia:
                            </p>
                            <ul className="space-y-2">
                                {["Preserves the nerve sheath", "Does not typically cause neuroma formation", "Allows predictable nerve regeneration"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Risk mitigation */}
                        <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                            <h3 className="text-lg font-bold text-foreground mb-4">Risk Mitigation</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">The risk profile of cryoanalgesia is minimised through:</p>
                            <ul className="space-y-2">
                                {["Careful patient selection", "Use of image guidance (ultrasound or fluoroscopy)", "Appropriate probe positioning and temperature control", "Clinician training and adherence to established procedural protocols"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Important note */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                <strong className="text-foreground">Important:</strong> Cryoanalgesia produces temporary nerve modulation, not permanent denervation. As the nerve regenerates, symptoms may recur over time, and repeat treatment may be considered when clinically appropriate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* FAQ Area */}
            <FAQSection />

            {/* Summary Line */}
            <section className="py-12 bg-primary/5 border-b border-border">
                <div className="section-container">
                    <p className="text-center text-lg font-medium text-foreground max-w-4xl mx-auto italic">
                        Cryoanalgesia is a minimally invasive, reversible nerve modulation technique with a favourable safety profile when performed by trained clinicians using image guidance.
                    </p>
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
                            { title: "Clinical Education", href: "/clinical-education", icon: BookOpen, desc: "Explore structured training programs including hands-on workshops for cryoanalgesia procedures." },
                            { title: "Clinical Resources & Evidence", href: "/resources", icon: FileText, desc: "Access clinical resources, case studies, published evidence, and procedural guidelines." },
                            { title: "Procedural Videos", href: "/videos", icon: Video, desc: "Watch procedural demonstrations, patient testimonials, and conference presentations." },
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

export default CryoanalgesiaDetail;
