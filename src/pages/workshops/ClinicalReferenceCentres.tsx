import { Link } from "react-router-dom";
import { MapPin, Stethoscope, Eye, Snowflake, Minimize2, Zap, Dna, ArrowRight, FileText, Download, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import referenceHero from "@/assets/Dr Chalk teaches intercostal cryo nerve block.jpg";
import amitLakkaraju1 from "@/assets/Dr Amit Lakkaraju Cryo Reference Centre_VIC.png";
import amitLakkaraju2 from "@/assets/Dr Amit Lakkaraju Cryo Reference Centre_VIC_2.png";
import referenceCentresImg from "@/assets/Clinical reference centres.png";

const observationItems = [
    "Image-guided interventional pain and spine procedures",
    "Patient assessment and selection pathways",
    "Procedural workflow and safety considerations",
    "Post-procedure recovery, follow-up, and rehabilitation planning",
];

const enquiryItems = [
    "Available observation opportunities",
    "Upcoming reference centre locations",
    "Future program development in their region",
];

const resources = [
    {
        title: "Cryoanalgesia & Cryoneurolysis",
        description: "155 peer-reviewed studies across 9 anatomical areas.",
        icon: Snowflake,
        href: "/resources#cryo",
    },
    {
        title: "Epidural Adhesiolysis & Balloon Technologies",
        description: "Systematic reviews, RCTs, and health economics.",
        icon: Minimize2,
        href: "/resources#balloon",
    },
    {
        title: "PRP & Bone Marrow–derived Biologics",
        description: "Superdose PRP and orthobiologic studies.",
        icon: Dna,
        href: "/resources#prp",
    },
    {
        title: "Percutaneous Laser Disc Decompression (PLDD)",
        description: "Clinical outcomes and radiological analysis.",
        icon: Zap,
        href: "/resources#pldd",
    },
];

const ClinicalReferenceCentres = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <PageHero
                image={referenceHero}
                title="Clinical Reference Centres"
                subtitle="Observe real-world interventional pain and spine procedures in established clinical environments."
                breadcrumbs={[{ label: "Clinical Education", href: "/clinical-education" }, { label: "Reference Centres" }]}
                imagePosition="object-top"
            />

            {/* Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-6">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                Overview
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                                Real-world clinical observation for deeper procedural understanding
                            </h2>
                            <div className="flex flex-col gap-5">
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    IPMA Clinical Reference Centres provide clinicians with the opportunity to observe image-guided interventional pain and spine procedures within established, real-world clinical environments.
                                </p>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    The centres support deeper procedural understanding through direct exposure to clinical workflow, patient selection, technical execution, and peri-procedural care in routine practice.
                                </p>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Observation within a functioning clinical service enables visiting clinicians to contextualise minimally invasive techniques within everyday clinical decision-making and patient management.
                                </p>
                            </div>
                        </div>
                        <div className="w-full rounded-2xl overflow-hidden aspect-[4/3]">
                            <img src={referenceCentresImg} alt="Clinical Reference Centres" className="w-full h-full object-contain object-center" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reference Centre — Meridian */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <MapPin className="w-7 h-7" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-primary uppercase tracking-wider">Reference Centre</p>
                                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
                                    Meridian Vein & Pain (VIC)
                                </h2>
                            </div>
                        </div>

                        <div className="bg-background border border-border/50 rounded-3xl p-8 lg:p-12 shadow-lg">
                            <div className="flex flex-col lg:flex-row items-center gap-3 mb-6">
                                <Stethoscope className="w-5 h-5 text-primary" />
                                <p className="text-lg font-semibold text-foreground">
                                    Clinical Lead: <span className="text-primary">Dr Amit Lakkaraju</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="content-img-wrap shadow-md">
                                    <img src={amitLakkaraju1} alt="Dr Amit Lakkaraju Cryo Reference Centre" className="content-img" />
                                </div>
                                <div className="content-img-wrap shadow-md">
                                    <img src={amitLakkaraju2} alt="Dr Amit Lakkaraju Cryo Reference Centre Session" className="content-img" />
                                </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                                Meridian Vein & Pain, located in Victoria, serves as an IPMA Clinical Reference Centre under the clinical leadership of Dr Amit Lakkaraju, an experienced interventional pain specialist actively engaged in contemporary minimally invasive spine and pain procedures.
                            </p>

                            <h3 className="text-xl font-bold text-foreground mb-5">
                                The centre provides visiting clinicians with the opportunity to observe:
                            </h3>
                            <ul className="space-y-4 mb-8">
                                {observationItems.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <Eye className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-secondary/50 rounded-2xl p-6 border border-border/30">
                                <p className="text-muted-foreground leading-relaxed">
                                    Exposure is structured to reflect routine clinical practice, supporting practical clinical insight rather than theoretical demonstration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expansion */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center">
                                    <Globe className="w-7 h-7" />
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                                    Expansion across Australia
                                </h2>
                            </div>
                            <p className="text-lg text-foreground/90 leading-relaxed">
                                IPMA is progressively developing a national network of Clinical Reference Centres to support clinician education across multiple regions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-5">
                                Clinicians interested in reference centre access are encouraged to enquire regarding:
                            </h3>
                            <ul className="space-y-4 mb-8">
                                {enquiryItems.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/about#contact">
                                <Button size="lg" className="h-14 px-8 rounded-full text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                    Enquire About Access
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources & Downloads */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-t border-border">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Related Resources
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Supporting materials for clinicians planning or preparing for reference centre observation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {resources.map((resource) => (
                            <Link
                                key={resource.title}
                                to={resource.href}
                                className="bg-background border border-border/50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <resource.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{resource.title}</h3>
                                <p className="text-muted-foreground text-base leading-relaxed mb-4 flex-grow">{resource.description}</p>
                                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                                    <ArrowRight className="w-4 h-4" />
                                    View Evidence
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClinicalReferenceCentres;
