import { Link } from "react-router-dom";
import { BookOpen, FileText, Mail } from "lucide-react";
import { treatments } from "@/data/treatments";
import PageHero from "@/components/PageHero";
import proceduresHero from "@/assets/Cryoanalgesia procedure in OR (1).png";
import governanceImg from "@/assets/IPMA Clinical Governance.png";

const Treatments = () => {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero Section */}
            <PageHero
                image={proceduresHero}
                title="Minimally Invasive Interventional Procedures"
                breadcrumbs={[{ label: "Procedures" }]}
            />

            {/* Why Minimally Invasive Interventional Care */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Why Minimally Invasive Interventional Care?
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Conventional pain management pathways often rely on prolonged pharmacotherapy or major surgical intervention. Image-guided interventional techniques provide an alternative approach — targeting the anatomical source of pain through precise, minimally invasive procedures.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {[
                            {
                                title: "Reduced Tissue Disruption",
                                desc: "Procedures are performed using needle-based or small-access techniques, limiting tissue trauma and supporting earlier functional recovery."
                            },
                            {
                                title: "Evidence-Informed Practice",
                                desc: "Techniques are applied within contemporary, evidence-informed procedural frameworks aligned with interventional pain and spine standards."
                            },
                            {
                                title: "Expanded Therapeutic Options",
                                desc: "Interventional approaches may provide alternatives for patients who have not responded to conservative therapy or who are seeking options other than major surgery."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="border-l-2 border-primary/30 pl-6">
                                <h3 className="text-xl font-display font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-foreground/90 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clinical Governance Section */}
            <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="w-full rounded-2xl overflow-hidden aspect-[4/3]">
                            <img src={governanceImg} alt="IPMA Clinical Governance" className="w-full h-full object-contain object-center" />
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                Clinical Governance &amp; Excellence
                            </h2>
                            <div className="space-y-5 text-lg text-foreground/90 leading-relaxed">
                                <p>
                                    <strong className="text-primary font-semibold">IPMA</strong> supports image-guided, minimally invasive procedures designed to reduce tissue disruption, support recovery, and expand treatment options for patients who have not responded to conventional therapies.
                                </p>
                                <p>
                                    These procedures are grounded in evidence-based interventional pain and spine practice and are delivered within structured clinical governance frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedures Grid */}
            <section className="py-16 lg:py-24">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="pill mb-6">Procedural Platforms</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Interventional Procedures
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Image-guided procedures enabling minimally invasive interventional pain and spine care.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {treatments.map((treatment) => (
                            <Link
                                key={treatment.id}
                                to={`/procedures/${treatment.slug}`}
                                className="bg-card border border-slate-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                            >
                                <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {treatment.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-base">
                                    {treatment.summary}
                                </p>

                                <div className="flex items-center text-primary font-bold mt-auto text-sm">
                                    Read More →
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary/95 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
                <div className="section-container relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-14">
                        <h3 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                            Ready to Learn More?
                        </h3>
                        <p className="text-white/85 text-xl leading-relaxed">
                            Whether you are a clinician seeking training in minimally invasive procedures, or exploring treatment options, IPMA is here to support you.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link to="/clinical-education#workshops" className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                            <BookOpen className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                            <span className="text-lg font-bold text-white text-center">Explore Clinical Education</span>
                            <span className="text-white/60 text-base text-center">Workshops, webinars, and structured training</span>
                        </Link>
                        <Link to="/resources" className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                            <FileText className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                            <span className="text-lg font-bold text-white text-center">Access Resources</span>
                            <span className="text-white/60 text-base text-center">Evidence libraries and clinical documentation</span>
                        </Link>
                        <Link to="/contact" className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                            <Mail className="w-8 h-8 text-white/80 group-hover:text-white transition-colors" />
                            <span className="text-lg font-bold text-white text-center">Enquire About Reference Centres</span>
                            <span className="text-white/60 text-base text-center">Observation opportunities and access</span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Treatments;
