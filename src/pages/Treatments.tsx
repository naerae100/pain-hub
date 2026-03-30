import { Link } from "react-router-dom";
import { treatments } from "@/data/treatments";
import PageHero from "@/components/PageHero";
import proceduresHero from "@/assets/Cryoanalgesia procedure in OR (1).png";

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
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="pill mb-6">Approach</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Why Minimally Invasive Interventional Care?
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Conventional pain management pathways often rely on prolonged pharmacotherapy or major surgical intervention. Image-guided interventional techniques provide an alternative approach — targeting the anatomical source of pain through precise, minimally invasive procedures.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                            <div key={idx} className="bg-card border border-slate-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Mission / Introductory Text (Restyled to be grounded) */}
            <section className="py-16 lg:py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />

                <div className="section-container relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 text-primary">
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-display font-semibold text-slate-800">
                            Clinical Governance & Excellence
                        </h2>
                        <div className="space-y-6 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            <p>
                                <strong className="text-primary font-semibold">IPMA</strong> supports image-guided, minimally invasive procedures designed to reduce tissue disruption, support recovery, and expand treatment options for patients who have not responded to conventional therapies.
                            </p>
                            <p>
                                These procedures are grounded in evidence-based interventional pain and spine practice and are delivered within structured clinical governance frameworks.
                            </p>
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
                        <p className="text-lg text-muted-foreground leading-relaxed">
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

                                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-sm">
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
            <section className="py-16 lg:py-20 bg-secondary/30 border-t border-slate-100">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-10 lg:p-16 text-white shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">Ready to Learn More?</h3>
                                <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                                    Whether you are a clinician seeking training in minimally invasive procedures, or exploring treatment options, IPMA is here to support you.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/clinical-education" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors">
                                        Explore Clinical Education
                                    </Link>
                                    <Link to="/resources" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        Access Resources
                                    </Link>
                                    <Link to="/clinical-education/reference-centres" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        Enquire About Reference Centre Observation
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Treatments;
