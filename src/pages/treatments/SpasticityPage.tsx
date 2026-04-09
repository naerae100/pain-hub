import {
    Snowflake, Shield, Users, DollarSign, Syringe
} from "lucide-react";
import PageHero from "@/components/PageHero";

import heroImg from "@/assets/cryotherapy-hero.png";

const SpasticityPage = () => {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero */}
            <PageHero
                image={heroImg}
                title="Cryoneurolysis for Spasticity"
                subtitle="An evolving treatment paradigm for spasticity management"
                breadcrumbs={[
                    { label: "Procedures", href: "/procedures" },
                    { label: "Cryoanalgesia", href: "/procedures/cryoanalgesia" },
                    { label: "Spasticity" },
                ]}
            />

            {/* Introduction */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Advancing Care for Patients with Spasticity in Australia</p>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            A Modern Approach to a Decades-Old Technique
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                            <p>
                                Cryoneurolysis, rooted in a pain technique initially described in 1961, has undergone a significant global resurgence and innovation. Its application in spasticity management represents a critical advancement. This minimally invasive procedure utilises cryogens to achieve precisely controlled temperatures, typically between &minus;20&deg;C and &minus;100&deg;C.
                            </p>
                            <p>
                                At these specific temperatures, the procedure induces reversible neurolysis, leading to what's known as Wallerian degeneration or secondary axonotmesis. Crucially, the surrounding endoneurium, perineurium, and epineurium of the nerve remain intact. This preservation is fundamental, as it allows for nerve regeneration at a predictable rate of 1 to 2 mm per day, offering sustained, yet non-permanent, therapeutic effects.
                            </p>
                            <p className="text-foreground font-medium border-l-4 border-primary pl-6 py-2">
                                In 2018, this approach was adapted for spasticity, evolving from sensory nerve targets to effectively address motor and sensorimotor nerves under mini-invasive percutaneous ultrasound (US) guidance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Video */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Featured Presentation</p>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Cryoneurolysis for Spasticity — Dr. Paul Winston
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-10">
                            Stroke Buddies Recovery & Science Meeting — a comprehensive overview of the cryoneurolysis approach to spasticity management.
                        </p>
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                            <div className="aspect-video relative">
                                <iframe
                                    className="w-full h-full absolute inset-0"
                                    src="https://www.youtube.com/embed/QGE-O6EiJts"
                                    title="Cryoneurolysis for Spasticity — Dr. Paul Winston"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Precision and Personalisation */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Precision and Personalisation: The Cryoneurolysis Pathway
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                            The development of the cryoneurolysis pathway for spasticity began in 2017, building upon the principles of diagnostic motor nerve blocks (DNBs). These DNBs, performed with lidocaine and typically guided by ultrasound and e-stimulation, are essential for:
                        </p>
                        <div className="space-y-4 mb-10">
                            {[
                                "Identifying specific muscles contributing to spasticity.",
                                "Differentiating true contracture from a 'reducible deformity' — a muscle group that lengthens after a nerve block."
                            ].map((item, i) => (
                                <div key={i} className="border-l-4 border-primary pl-6">
                                    <p className="text-lg text-foreground/90 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                            At IPMA Australia, we recognise the importance of this precise pre-screening. The integration of US guidance in DNBs allows for fast, efficient targeting of a broad range of nerves, including sensorimotor trunks, individual motor branches, and intramuscular targets. This detailed diagnostic phase represents a paradigm shift, enabling clinicians to demonstrate potential patient outcomes <em>before</em> the definitive cryoneurolysis procedure, thereby facilitating truly informed patient consent.
                        </p>
                        <p className="text-xl font-bold text-foreground">
                            Nerve-targeted procedures aim not just to reduce tone but to increase range of motion and improve power.
                        </p>
                    </div>
                </div>
            </section>

            {/* Clinical Evidence */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Compelling Evidence: Clinical Outcomes and Safety Profile
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                            Recent studies underscore the growing body of evidence supporting cryoneurolysis in spasticity management:
                        </p>

                        <div className="space-y-10">
                            <div className="border-l-4 border-primary pl-6">
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Initial Proof-of-Concept</p>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    An early case series (Winston et al., 2019) demonstrated the safety and effectiveness of cryoneurotomy as an adjunctive treatment for limb spasticity in patients who had plateaued with standard care. This included two stroke patients with elbow spasticity and a pregnant patient with multiple sclerosis and a spastic equinovarus foot where botulinum toxin was contraindicated. All showed improved active and passive range of motion and/or decreased clonus after the procedure.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6">
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Dynamic Treatment & Sustained Benefits</p>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    A separate case series (Guynn, 2025) involving 10 patients showed that percutaneous cryoneurolysis of specific nerves resulted in <strong>immediate improvements</strong> in lower or upper-extremity pain, weakness, spasticity, or neuropathic gait. These benefits were <strong>sustained for 1 to 12 months</strong> post-treatment, highlighting cryoneurolysis as a safe, effective, and accessible option.
                                </p>
                            </div>

                            <div className="border-l-4 border-primary pl-6">
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Comprehensive Safety Analysis</p>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    A publication on 113 patients and 277 treated nerves (Winston et al., 2023) provided the first detailed analysis of side effects for motor and mixed nerves. Notably, <strong>96.75% of nerve treatments had no pain or dysesthesias beyond the immediate procedure</strong>. Few patients experienced pain or numbness beyond 3 months, with only minor interventions required for residual discomfort. This study, alongside other published case literature, indicates that <strong>sustained benefits from a single treatment are maintained at the 1-year follow-up</strong> and can be further prolonged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Stats Banner */}
            <section className="py-16 lg:py-20 bg-primary text-white">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                            {[
                                { value: "96.75%", label: "No pain beyond procedure" },
                                { value: "1–12mo", label: "Sustained benefit duration" },
                                { value: "113", label: "Patients studied (safety)" },
                                { value: "277", label: "Nerves treated" },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <span className="block text-4xl lg:text-5xl font-display font-bold text-white mb-2">{stat.value}</span>
                                    <span className="text-white/70 text-sm font-medium">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Advantages */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Key Advantages
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                            Cryoneurolysis offers several distinct advantages over traditional spasticity treatments:
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: Syringe,
                                    title: "No Maximal Dose Limit",
                                    desc: "Unlike some injectables, cryoneurolysis has no maximal dose restriction, allowing for a greater number of muscles to be treated, including all muscles from a single nerve trunk."
                                },
                                {
                                    icon: Shield,
                                    title: "Tissue Sparing",
                                    desc: "At specified temperatures (\u221288\u00B0C in spasticity applications), cryoneurolysis selectively destroys the neuron while sparing surrounding tissues. The 'heat sink' effect of adjacent blood vessels protects their integrity, allowing for safe application even near vascular structures. This contrasts with chemical neurolysis, which can lead to tissue destruction and vessel thrombosis."
                                },
                                {
                                    icon: Snowflake,
                                    title: "Addressing Concurrent Pain",
                                    desc: "Spasticity often presents with pain at rest or with movement. Cryoneurolysis is a well-established pain management technique; targeting sensory and mixed sensorimotor nerves (e.g., suprascapular, superficial fibular, genicular nerves) can provide dual therapeutic benefits of tone reduction and pain relief. This extends to challenging conditions like spastic claw hand contractures via ulnar and median nerve trunks."
                                },
                                {
                                    icon: Users,
                                    title: "Broad Patient Applicability",
                                    desc: "The technique has been safely and effectively performed across a wide age range, from children as young as 3 years to nonagenarians."
                                },
                                {
                                    icon: DollarSign,
                                    title: "Potential Cost-Effectiveness",
                                    desc: "Initial financial analyses suggest significant cost savings compared to current dominant techniques, which could enhance global accessibility. Current equipment costs are approximately $500\u2013$700 for a single treatment, with most patients averaging less than one treatment per year."
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-lg text-foreground/90 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Implementation & Global Adoption */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Clinical Implementation and Global Adoption
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                            <p>
                                While the treatment can cause temporary discomfort (cramping/burning sensation, muscle fasciculations), various analgesic strategies are employed, including nitrous oxide gas, methoxyflurane (Penthrox), oral medications, sedatives, and topical preparations. Specialised paediatric sedation clinics are also emerging in key international centres to manage discomfort effectively.
                            </p>
                            <p>
                                Since its introduction in 2018, cryoneurolysis for spasticity has seen rapid and widespread adoption across numerous centres in Canada, USA, Luxembourg, UK, France, Denmark, and Spain. This global integration has been bolstered by a robust training education platform, including publications, international presentations, and hands-on workshops.
                            </p>
                            <p>
                                At IPMA Australia, we are actively following and contributing to the evolving evidence base. Multiple studies are currently underway globally, including comparisons of cryoneurolysis against neurectomy and botulinum toxin, and a large multi-centre sham-controlled study. These ongoing efforts, coupled with the typically longer-term follow-ups in cryoneurolysis research (often 1 year or more), will further solidify its role in comprehensive spasticity management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Insights — LinkedIn Embeds */}
            <section className="py-16 lg:py-20">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Community Insights & Case Examples
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-12">
                            Clinicians worldwide are sharing real-world outcomes with cryoneurolysis for spasticity.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7347755770471428096?collapsed=1",
                                "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7341280538252480512?collapsed=1",
                                "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7339426324748320768?collapsed=1",
                            ].map((src, i) => (
                                <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white h-[500px]">
                                    <iframe
                                        src={src}
                                        className="w-full h-full border-0"
                                        title={`LinkedIn post ${i + 1}`}
                                        allowFullScreen
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* References */}
            <section className="py-16 lg:py-20 bg-secondary/20">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                            References
                        </h2>

                        <div className="space-y-0 divide-y divide-border">
                            {[
                                {
                                    authors: "Guynn, C. C.",
                                    year: "2025",
                                    title: "Percutaneous Cryoneurolysis as a Dynamic Treatment for Spasticity: A Case Series.",
                                    journal: "Archives of Rehabilitation Research and Clinical Translation, 7, 100426.",
                                    doi: "https://doi.org/10.1016/j.arrct.2025.100426",
                                },
                                {
                                    authors: "Winston, P., Mills, P. B., Reebye, R., & Vincent, D.",
                                    year: "2019",
                                    title: "Cryoneurotomy as a Percutaneous Mini-invasive Therapy for the Treatment of the Spastic Limb: Case Presentation, Review of the Literature, and Proposed Approach for Use.",
                                    journal: "Archives of Rehabilitation Research and Clinical Translation, 1, 100030.",
                                    doi: "https://doi.org/10.1016/j.arrct.2019.100030",
                                },
                                {
                                    authors: "Winston, P. W., & Vincent, D.",
                                    year: "2024",
                                    title: "Cryoneurolysis as a Novel Treatment for Spasticity, Associated Pain and Presumed Contracture.",
                                    journal: "Advances in Rehabilitation Science and Practice.",
                                    doi: "https://doi.org/10.1177/27536351241285198",
                                },
                            ].map((ref, i) => (
                                <a
                                    key={i}
                                    href={ref.doi}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-5 group hover:bg-white/50 -mx-4 px-4 transition-colors"
                                >
                                    <p className="text-lg text-foreground/90 leading-relaxed">
                                        <span className="font-semibold text-foreground">{ref.authors}</span> ({ref.year}). <span className="font-bold text-primary group-hover:underline">{ref.title}</span> <em>{ref.journal}</em>
                                    </p>
                                    <p className="text-sm text-primary/70 mt-1">{ref.doi}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpasticityPage;
