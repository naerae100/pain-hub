import { Link } from "react-router-dom";
import {
    ChevronRight, ArrowRight, Shield, Activity, BookOpen, Video,
    FileText, CheckCircle2, AlertTriangle, Users, Microscope, Target,
    Stethoscope, MapPin, Heart, Eye, Layers, Expand, Droplets, Move,
    CircleDot, Info, HelpCircle, TrendingUp, Ruler, BarChart3
} from "lucide-react";
import PageHero from "@/components/PageHero";

// Images
import heroImg from "@/assets/Epidural Balloon Decompression Procedure.png";
import adhesiolysisImg from "@/assets/15-JCM_2020-Efectiveness of and Factors Associated with Balloon Adhesiolysis.jpg";
import inflatedBalloonImg from "@/assets/Image showing the inflated balloon during procedure.png";

const EpiduralBalloonDetail = () => {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero */}
            <PageHero
                image={heroImg}
                title="Epidural Balloon Decompression"
                subtitle="Minimally Invasive Treatment for Lumbar Spinal Stenosis and Radicular Pain"
                breadcrumbs={[
                    { label: "Procedures", href: "/procedures" },
                    { label: "Epidural Balloon Decompression" },
                ]}
            />

            {/* Overview */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            What is Epidural Balloon Decompression?
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                            <p>
                                Spinal Epidural Balloon Decompression and Adhesiolysis is a minimally invasive, non-surgical interventional technique developed to address persistent lumbar spinal stenosis, disc-related radicular pain, and epidural adhesions in patients who have not responded to conventional therapy.
                            </p>
                            <p>
                                The technique builds upon established neuroplasty and adhesiolysis principles, incorporating controlled mechanical balloon dilation within the epidural space to improve neural mobility, restore epidural dynamics, and enhance targeted medication delivery.
                            </p>
                            <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 py-2">
                                It is positioned within a structured, stepwise spine care pathway and does not replace surgical decompression in cases requiring operative management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mechanisms of Action */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Mechanisms of Action
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-10">
                            Pain and functional limitation may improve through several complementary mechanisms:
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    title: "Mechanical Decompression",
                                    desc: "Balloon expansion creates additional space within the spinal canal or neural foramen, reducing neural crowding and improving nerve mobility."
                                },
                                {
                                    title: "Microcirculatory Improvement",
                                    desc: "Expansion of restricted regions may restore local blood flow and reduce ischemia-related neural dysfunction contributing to claudication."
                                },
                                {
                                    title: "Enhanced Adhesiolysis",
                                    desc: "Balloon dilation disrupts fibrotic adhesions across a broader area than conventional catheter manipulation, improving catheter mobility and medication distribution."
                                },
                                {
                                    title: "Retrodiscal Decompression",
                                    desc: "In selected cases, balloon expansion within the anterior or retrodiscal epidural space may improve mechanical dynamics without removal of disc material."
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
                                    Epidural balloon decompression may be considered in patients with:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Chronic low back and leg pain",
                                        "Structural lumbar pathology",
                                        "Imaging-confirmed central or foraminal stenosis",
                                        "Epidural adhesions",
                                        "Post-spinal surgery pain syndrome",
                                        "Neurogenic claudication (leg pain, heaviness, weakness, or numbness that occurs with walking or prolonged standing due to compression of spinal nerves)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-lg text-foreground font-medium mb-4">Particularly when there has been:</p>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Insufficient or short-lived relief from medication",
                                        "Limited response to physiotherapy",
                                        "Inadequate durability following standard epidural injections or conventional neuroplasty"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-lg text-foreground/90 border-l-4 border-primary pl-6 py-2">
                                    Within multidisciplinary care models, it is typically positioned between repeat epidural therapy and surgical intervention.
                                </p>
                            </div>

                            {/* Case Study Image */}
                            <div>
                                <div className="rounded-2xl overflow-hidden">
                                    <img src={adhesiolysisImg} alt="Percutaneous epidural adhesiolysis combined with balloon decompression case study" className="w-full h-auto object-contain" />
                                </div>
                                <p className="text-base text-foreground/70 mt-3 leading-relaxed">
                                    <strong className="not-italic text-foreground/80">Figure:</strong> Percutaneous epidural adhesiolysis combined with balloon decompression in a patient with lumbar post-laminectomy syndrome. A 61-year-old male with a history of L4-5 partial laminectomy and flavectomy 1 year prior underwent combined epidural adhesiolysis and balloon decompression. (A) Adhesive cauda equina in cross-sectional MRI at L4-5. (B) Sagittal MRI showing well-decompressed state. (C) AP fluoroscopic view showing contrast filling defect. (D) Lateral fluoroscopic image showing filling defect. (E) Inflatable balloon catheter placed with contrast medium. (F) Contrast flow detected after balloon procedure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Indications and Patient Selection */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Indications and Patient Selection
                        </h2>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            <div className="space-y-10 lg:order-2">
                                <div>
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-5">Key Indications</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Lumbar spinal stenosis (central or foraminal)",
                                            "Chronic disc herniation with persistent radicular symptoms",
                                            "Epidural adhesions",
                                            "Post-spinal surgery pain syndrome"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />{item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-5">Predictors of Favourable Response</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Prior temporary relief from epidural block or neuroplasty",
                                            "Imaging consistent with compressive or adhesive pathology",
                                            "Predominantly mechanical or claudicant symptom profile"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />{item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-8 lg:order-1">
                                {/* Inflated Balloon Image */}
                                <div>
                                    <div className="w-full rounded-2xl overflow-hidden">
                                        <img src={inflatedBalloonImg} alt="Inflated balloon during procedure" className="w-full h-auto object-contain" />
                                    </div>
                                    <p className="text-base text-foreground/70 mt-3">
                                        Showing the inflated balloon during procedure
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-5 flex items-center gap-2">
                                        <AlertTriangle className="w-6 h-6 text-amber-500" /> Factors Associated with Reduced Response
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "Severe neuropathic pain phenotype",
                                            "Diabetes mellitus",
                                            "Redundant nerve roots on MRI",
                                            "Significant psychological comorbidity"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                                <ChevronRight className="w-5 h-5 text-amber-500 shrink-0 mt-1" />{item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-lg text-foreground/90 mt-4">
                                        Careful clinical and radiological correlation is essential.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What the Procedure Involves */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            What the Procedure Involves
                        </h2>

                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            Under fluoroscopic guidance, a small inflatable balloon catheter is introduced into the epidural space, most commonly via a caudal approach. Transforaminal or interlaminar access may be used for focal pathology.
                        </p>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-6">Controlled balloon inflation is used to:</h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Mechanically expand stenosed epidural or foraminal regions",
                                "Detach fibrotic epidural adhesions",
                                "Improve local circulation",
                                "Enhance neural mobility",
                                "Facilitate broader and more targeted medication spread"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                            Compared with conventional epidural catheter techniques, balloon dilation enables mechanical expansion of restricted compartments rather than medication delivery alone.
                        </p>
                        <p className="text-lg text-foreground font-medium border-l-4 border-primary pl-6 py-2">
                            The objective is restoration of epidural space dynamics — not surgical decompression.
                        </p>
                    </div>
                </div>
            </section>

            {/* Procedural Overview and Safety */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Procedural Overview and Safety
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            Balloon decompression is most commonly performed via a caudal epidural approach, with transforaminal or interlaminar access selected based on anatomical and pathological considerations.
                        </p>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-6">Key procedural considerations include:</h3>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Gradual, controlled balloon inflation to minimise discomfort",
                                "Positioning within the anterior epidural space when feasible",
                                "Continuous fluoroscopic guidance",
                                "Correlation of catheter contact or symptom reproduction with the patient's typical pain pattern"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <Shield className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            The procedure is performed under image guidance to support accuracy and procedural safety.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clinical Evidence and Outcomes */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            Clinical Evidence and Outcomes
                        </h2>

                        {/* Prospective Clinical Studies */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-5 flex items-center gap-3">
                                <BarChart3 className="w-6 h-6 text-primary" /> Prospective Clinical Studies
                            </h3>
                            <ul className="space-y-4 mb-6">
                                {[
                                    "Sustained improvement in back and leg pain",
                                    "Meaningful reduction in disability scores (ODI) lasting beyond one year in selected cohorts",
                                    "Progressive improvement in walking capacity for patients with neurogenic claudication"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Imaging Analyses */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-5 flex items-center gap-3">
                                <Ruler className="w-6 h-6 text-primary" /> Imaging Analyses
                            </h3>
                            <ul className="space-y-4 mb-4">
                                {[
                                    "Increased foraminal diameter (approximately 28%)",
                                    "Substantial expansion of foraminal volume (approximately 98%)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-lg text-foreground/90 leading-relaxed">
                                Randomised comparisons suggest higher patient satisfaction and longer-lasting benefit compared with conventional neuroplasty techniques in selected populations.
                            </p>
                        </div>

                        {/* Expanded Summary */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Expanded Clinical Evidence Summary</h3>
                            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                                Percutaneous epidural adhesiolysis addresses epidural fibrosis by mechanically disrupting scar tissue and restoring access to the affected nerve root. Balloon catheter systems enhance this mechanical disruption.
                            </p>

                            <div className="space-y-8">
                                <div className="border-l-4 border-primary pl-6">
                                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-primary" /> Randomized Controlled Trials
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-lg text-foreground/90"><ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" /> Significant reductions in pain scores</li>
                                        <li className="flex items-start gap-3 text-lg text-foreground/90"><ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" /> Improved functional outcomes</li>
                                        <li className="flex items-start gap-3 text-lg text-foreground/90"><ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" /> Sustained benefit when repeated</li>
                                        <li className="flex items-start gap-3 text-lg text-foreground/90"><ChevronRight className="w-5 h-5 text-primary shrink-0 mt-1" /> Greater improvements in pain/function vs conventional adhesiolysis</li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-primary pl-6">
                                    <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                                        <Activity className="w-5 h-5 text-primary" /> 10-Year Long-Term Follow-up
                                    </h4>
                                    <p className="text-lg text-foreground/90 leading-relaxed">
                                        A landmark 10-year RCT follow-up demonstrated sustained clinical benefit — the <strong className="text-foreground">longest follow-up evidence</strong> available for a minimally invasive intervention in this population.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-foreground/90 leading-relaxed">
                            As with all interventional procedures, outcomes depend on appropriate patient selection and operator expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Risks and Limitations */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Risks and Limitations
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            As with any epidural intervention, potential risks include:
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Transient pain exacerbation or discomfort",
                                "Bleeding or infection",
                                "Dural puncture",
                                "Neurological irritation (rare)",
                                "Balloon rupture (rare with appropriate technique)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                            Balloon decompression is not indicated in all cases of spinal stenosis and should be integrated within a structured spine care pathway.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Careful patient selection, image guidance, and procedural expertise are essential to minimise complications.
                        </p>
                    </div>
                </div>
            </section>

            {/* Education and Further Information */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Education and Further Information
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            Epidural balloon decompression requires structured training in:
                        </p>

                        <ul className="space-y-4 mb-12">
                            {[
                                "Advanced epidural access techniques",
                                "Image-guided catheter navigation",
                                "Controlled balloon inflation protocols",
                                "Evidence-based patient selection"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-lg text-foreground/90">
                                    <BookOpen className="w-5 h-5 text-primary shrink-0 mt-1" />{item}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-10 lg:p-16 text-white overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-8">Get Started</h3>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/clinical-education" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors">
                                        <BookOpen className="w-5 h-5" />
                                        View Clinical Education
                                    </Link>
                                    <Link to="/resources" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        <FileText className="w-5 h-5" />
                                        Access Resources & Evidence
                                    </Link>
                                    <Link to="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        <MapPin className="w-5 h-5" />
                                        Enquire About Training
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
                        <p className="text-lg lg:text-xl text-foreground/90 font-medium leading-relaxed">
                            Epidural balloon decompression is a minimally invasive, image-guided technique combining mechanical dilation and adhesiolysis to improve epidural space dynamics, neural mobility, and functional outcomes in selected patients with lumbar spinal stenosis and radicular pain.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EpiduralBalloonDetail;
