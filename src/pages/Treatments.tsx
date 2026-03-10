import { Link } from "react-router-dom";
import { treatments } from "@/data/treatments";
import { ArrowRight, Minimize2, BookOpen, MapPin, Shield, Microscope, Layers } from "lucide-react";
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

            {/* Introductory Text Below Hero */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                            IPMA supports image-guided, minimally invasive procedures designed to reduce tissue disruption, support recovery, and expand treatment options for patients who have not responded to conventional therapies.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            These procedures are grounded in evidence-based interventional pain and spine practice and are delivered within structured clinical governance frameworks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Procedures Grid */}
            <section className="py-16 lg:py-20 bg-secondary/20 border-y border-border">
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
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {treatments.map((treatment) => (
                            <Link
                                key={treatment.id}
                                to={`/procedures/${treatment.slug}`}
                                className="bg-card border border-border p-8 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group flex flex-col h-full"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                                    <treatment.icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {treatment.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-sm">
                                    {treatment.summary}
                                </p>

                                <div className="flex items-center text-primary font-bold mt-auto group/link text-sm">
                                    Read More
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

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

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Minimize2,
                                title: "Reduced Tissue Disruption",
                                desc: "Procedures are performed using needle-based or small-access techniques, limiting tissue trauma and supporting earlier functional recovery."
                            },
                            {
                                icon: Microscope,
                                title: "Evidence-Informed Practice",
                                desc: "Techniques are applied within contemporary, evidence-informed procedural frameworks aligned with interventional pain and spine standards."
                            },
                            {
                                icon: Layers,
                                title: "Expanded Therapeutic Options",
                                desc: "Interventional approaches may provide alternatives for patients who have not responded to conservative therapy or who are seeking options other than major surgery."
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-card border border-border rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300">
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 lg:py-20 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-10 lg:p-16 text-white shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6">Ready to Learn More?</h3>
                                <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                                    Whether you are a clinician seeking training in minimally invasive procedures, or exploring treatment options, IPMA is here to support you.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/clinical-education" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors">
                                        <BookOpen className="w-5 h-5" />
                                        Explore Clinical Education
                                    </Link>
                                    <Link to="/resources" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        <Shield className="w-5 h-5" />
                                        Access Resources
                                    </Link>
                                    <Link to="/clinical-education/reference-centres" className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        <MapPin className="w-5 h-5" />
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
