import { Link } from "react-router-dom";
import { treatments } from "@/data/treatments";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import proceduresHero from "@/assets/Cryoanalgesia procedure in OR.png";

const Treatments = () => {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero Section */}
            <PageHero
                image={proceduresHero}
                title="Minimally Invasive Procedures"
                subtitle="IPMA supports procedures designed to reduce tissue disruption, support recovery, and expand treatment options for patients who have not responded to conventional therapies."
                breadcrumbs={[{ label: "Procedures" }]}
            />

            {/* Procedures Grid */}
            <section className="section-container py-20">
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
            </section>

            {/* Why Minimally Invasive */}
            <section className="bg-secondary/30 py-24 border-y border-border">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                Why Minimally Invasive
                            </div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                                Why Choose Interventional Pain Management?
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                Traditional pain management often relies on prolonged medication use or major surgery. Interventional techniques offer a different approach — targeting the source of pain directly through precise, minimally invasive procedures.
                            </p>

                            <div className="flex flex-col gap-6">
                                {[
                                    { title: "Reduced Tissue Disruption", desc: "Procedures are performed through small incisions or needles, minimising trauma and supporting faster recovery." },
                                    { title: "Evidence-Informed", desc: "Treatments supported by clinical evidence and contemporary procedural frameworks." },
                                    { title: "Expanded Options", desc: "Offering alternatives for patients who have not responded to conventional therapies or wish to avoid major surgery." }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                                            <p className="text-muted-foreground">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] -rotate-6 transform" />
                            <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-[2.5rem] p-10 lg:p-12 text-white shadow-2xl">
                                <h3 className="text-3xl font-display font-bold mb-6">Ready to learn more?</h3>
                                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                                    Whether you are a clinician seeking training in minimally invasive procedures, or exploring treatment options, IPMA is here to support you.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/about#contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-primary font-bold hover:bg-white/90 transition-colors">
                                        Contact Us
                                    </Link>
                                    <Link to="/clinical-education" className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
                                        View Education
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
