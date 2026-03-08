import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, FileText } from "lucide-react";

const EducationEvidenceSection = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

            <div className="section-container relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16"
                >
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20">
                        Education + Evidence
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-6 mb-5 leading-tight">
                        Built on Evidence.<br />Delivered Through Education.
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
                        IPMA integrates scientific literature with hands-on clinical training to support confident procedural adoption.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    {[
                        {
                            icon: FileText,
                            title: "Clinical Evidence",
                            description: "Access published research, clinical outcomes data, and systematic reviews supporting interventional procedures.",
                            href: "/resources",
                            cta: "View evidence",
                            accent: "from-emerald-500/10 to-emerald-600/5",
                        },
                        {
                            icon: BookOpen,
                            title: "Clinical Education & Training",
                            description: "Structured workshops, hands-on procedural training, and evidence-based educational pathways for clinicians.",
                            href: "/clinical-education",
                            cta: "View training",
                            accent: "from-blue-500/10 to-blue-600/5",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <Link
                                to={item.href}
                                className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-500 p-8 md:p-10 flex flex-col h-full"
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-6`}>
                                    <item.icon className="w-7 h-7 text-slate-700" />
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                                    {item.description}
                                </p>
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                                    {item.cta} <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationEvidenceSection;
