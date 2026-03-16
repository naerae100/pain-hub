import { motion } from "framer-motion";

const areas = [
    {
        title: "Pain Medicine",
        description: "Interventional techniques for acute and chronic pain, including cryoanalgesia, nerve blocks, and neuromodulation.",
        color: "bg-blue-500",
    },
    {
        title: "Spine",
        description: "Minimally invasive spine procedures — epidural balloon decompression, PLDD, and facet denervation.",
        color: "bg-violet-500",
    },
    {
        title: "Orthopaedics",
        description: "Orthobiologic therapies, PRP, and regenerative techniques for musculoskeletal repair and joint preservation.",
        color: "bg-emerald-500",
    },
];

const ClinicalAreasSection = () => {
    return (
        <section className="section-container section-padding relative overflow-hidden">
            {/* Background */}
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/5 to-blue-400/5 rounded-full blur-3xl" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mb-12 md:mb-16"
            >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary border border-primary/20">
                    Clinical Areas
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-6 mb-5">
                    Clinical Areas We Support
                </h2>
            </motion.div>

            {/* Cards */}
            <div className="relative grid md:grid-cols-3 gap-5 md:gap-6">
                {areas.map((area, index) => (
                    <motion.div
                        key={area.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 p-6 md:p-8"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className={`w-2 h-2 rounded-full ${area.color}`} />
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{area.title}</span>
                        </div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-slate-800 mb-3">
                            {area.title}
                        </h3>
                        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                            {area.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ClinicalAreasSection;
