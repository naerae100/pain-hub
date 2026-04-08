import { Link } from "react-router-dom";
import { ChevronRight, Snowflake, Target, Shield, Activity, Microscope, BookOpen, ArrowRight, Settings, Maximize2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import cryoHero from "@/assets/Cryotherapy-Technology.png";
import iceBallImg from "@/assets/CRYO-S Painless with ice ball.png";
import consoleImg from "@/assets/Cryotherapy_technology.png";
import usImg from "@/assets/Cryoprobe-with-ice-ball-under-ultrasound.jpg";
import teachingImg from "@/assets/Dr Urbanczak teaches US guided techniques.png";

const Cryotherapy = () => {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                image={cryoHero}
                title="Image-Guided Cryoneurolysis Platforms in Interventional Pain and Spine"
                subtitle=""
                breadcrumbs={[{ label: "Technologies", href: "/technologies" }, { label: "CRYOTHERAPY TECHNOLOGY" }]}
            />

            {/* Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Cryotherapy Overview</h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Modern cryotherapy systems used in interventional pain and spine medicine generate controlled low temperatures at the probe tip to temporarily interrupt peripheral nerve conduction while preserving the structural framework of the nerve.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Unlike thermal neurodestructive technologies, cryoneurolysis produces a reversible conduction block through selective axonal injury while maintaining connective tissue architecture. This biological reversibility underpins its role in contemporary minimally invasive pain management.
                        </p>
                    </div>
                </div>
            </section>

            {/* Biological Effect */}
            <section className="py-20 lg:py-24 bg-secondary/30">
                <div className="section-container">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Biological Effect on Nerve Tissue
                        </h2>

                        <div className="space-y-10 mb-10">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Cryoneurolysis induces:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Axonal degeneration (Wallerian degeneration)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Preservation of endoneurium, perineurium, and epineurium</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Because sheaths remain intact:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Axonal regeneration occurs gradually</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Typical regeneration rate approximates 1–1.5 mm per day</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-lg text-foreground/90">
                                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Neuroma formation risk is lower compared with thermal ablation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-border">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Importantly:</h3>
                            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                                Muscle, vascular, and adipose tissues demonstrate minimal structural change at therapeutic temperatures.
                            </p>
                            <p className="text-lg text-foreground font-semibold">
                                This tissue selectivity differentiates cryotherapy from heat-based neurodestructive technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cryophysics */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <span className="pill mb-6">Science</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                Cryophysics: How the Technology Works
                            </h2>
                            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                                Modern cryotherapy systems exploit the Joule–Thomson effect, in which high-pressure gases expand and absorb heat, creating rapid cooling.
                            </p>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Representative gases used in clinical systems include:</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-4 bg-secondary/50 p-4 rounded-xl">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">CO₂</div>
                                    <span className="text-lg text-foreground font-medium">Carbon dioxide (CO₂) <span className="text-muted-foreground font-normal">(approx. –78°C)</span></span>
                                </li>
                                <li className="flex items-center gap-4 bg-secondary/50 p-4 rounded-xl">
                                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 font-bold shrink-0">N₂O</div>
                                    <span className="text-lg text-foreground font-medium">Nitrous oxide (N₂O) <span className="text-muted-foreground font-normal">(approx. –89°C)</span></span>
                                </li>
                            </ul>
                            <p className="text-lg text-foreground/90 mb-4">
                                These gases are delivered through console-controlled cooling units to cryoprobes, forming an "ice-ball" around the probe tip. Ice-ball size and thermal gradient are influenced by:
                            </p>
                            <ul className="space-y-2 mb-6 text-lg text-foreground">
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Gas type</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Probe diameter and tip geometry</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Freeze duration and freezing mode</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Local tissue perfusion and hydration</li>
                            </ul>
                            <p className="font-medium text-lg text-foreground">
                                Controlled cooling enables predictable lesion formation within target nerve tissues.
                            </p>
                        </div>
                        <div className="content-img-wrap">
                            <img src={iceBallImg} alt="CRYO-S Painless with ice ball" className="content-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Architecture */}
            <section className="py-20 lg:py-24 bg-secondary/20">
                <div className="section-container">
                    <div className="mb-16">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Platform Architecture: Cryo-S Painless System
                        </h2>
                        <h3 className="text-xl text-primary font-medium mb-4">Advanced Cryoanalgesia – TGA Registered in Australia</h3>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            The CRYO-S Painless cryosurgery system is TGA registered and available in Australia, supporting minimally invasive management of acute and chronic pain conditions within interventional practice.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div className="content-img-wrap">
                            <img src={consoleImg} alt="Cryo-S Console" className="content-img" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                                <Settings className="w-6 h-6 text-primary" /> Core Technical Features
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Touchscreen interface",
                                    "Automatic probe recognition via RFiD",
                                    "Automatic gas flow and pressure optimisation",
                                    "Two freezing modes, Carbon dioxide (CO₂) & Nitrous oxide (N₂O)",
                                    "Integrated probe test system",
                                    "Built-in voice guidance",
                                    "Optional integrated diagnostic neurostimulation"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground/90">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                                        </div>
                                        <span className="text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-border/50 text-foreground font-medium text-lg">
                                Integrated neurostimulation supports differentiation between sensory and motor nerves prior to freezing.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Probe Ecosystem */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="mb-16">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Cryoprobe Ecosystem
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Cryotherapy effectiveness is strongly influenced by probe geometry, diameter, and tip configuration. The Cryo-S Painless system supports multiple cryoprobe types.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto space-y-16">
                        {/* Standard Probes */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Standard Probes</h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-primary mb-3 text-lg">Straight Probes (A-13 and A-20 series)</h4>
                                    <ul className="space-y-2 text-lg text-foreground/90">
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Fits through an 14G introducer needle (A-13)</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Active freezing length 7mm (A-13) and 10 mm (A-20)</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Neurostimulation capability</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="font-semibold block mb-2 text-lg text-foreground">Used for:</span>
                                    <ul className="space-y-1 text-lg text-foreground/90">
                                        <li>• Cervical, thoracic, and lumbar medial branches</li>
                                        <li>• Intercostal nerves</li>
                                        <li>• Peripheral joint denervation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Specialised Probes */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Specialised Probes</h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-bold text-primary mb-3 text-lg">Genicular nerves Cryoprobe (A-20/SIJ/T/RF) - K</h4>
                                    <ul className="space-y-2 text-lg text-foreground/90">
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Extended 4.5 cm freezing zone</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Anatomical curvature</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Designed for a strip lesion of the genicular nerves</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-3 text-lg">SIJ Cryoprobe (A-20/SIJ/T/RF)</h4>
                                    <p className="text-lg text-foreground/90 mb-2">Designed for sacroiliac joint applications:</p>
                                    <ul className="space-y-2 text-lg text-foreground/90">
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Extended 4.5 cm zone</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Anatomical curvature</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Homogeneous coverage</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Echogenic triangular tip</li>
                                    </ul>
                                </div>
                                <p className="text-lg text-foreground/90">
                                    The extended freezing field is designed to address anatomical variability of lateral sacral branches.
                                </p>
                            </div>
                        </div>

                        {/* Intercostal / Thoracoscopic */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Intercostal / Thoracoscopic Probe</h3>
                            <p className="text-lg text-muted-foreground mb-4">(A-30/PEA/R/RF)</p>
                            <p className="text-lg font-semibold text-foreground mb-2">Used in:</p>
                            <ul className="space-y-1 text-lg text-foreground/90 mb-4">
                                <li>• Thoracotomy</li>
                                <li>• VATS</li>
                                <li>• Chest wall procedures</li>
                            </ul>
                            <p className="text-lg text-primary">Designed for intraoperative cryoanalgesia applications.</p>
                        </div>

                        {/* Small Diameter Probes */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-2">Small Diameter Facial & Peripheral Probes</h3>
                            <p className="text-lg text-muted-foreground mb-4">(A-08 Series)</p>
                            <ul className="space-y-2 text-lg text-foreground/90 mb-4">
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Fits through an 18G introducer needle</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> 7mm active tip</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Neurostimulation capability</li>
                            </ul>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-secondary/50 rounded-full text-lg font-medium">Supraorbital</span>
                                <span className="px-3 py-1 bg-secondary/50 rounded-full text-lg font-medium">Infraorbital</span>
                                <span className="px-3 py-1 bg-secondary/50 rounded-full text-lg font-medium">Auriculotemporal</span>
                                <span className="px-3 py-1 bg-secondary/50 rounded-full text-lg font-medium">Mental</span>
                            </div>
                            <p className="text-lg text-primary">Smaller diameter supports precision in superficial neural targets.</p>
                        </div>

                        {/* Tip Geometries */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Tip Geometries</h3>
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2 text-lg">Round Tip Probes <span className="text-lg text-muted-foreground font-normal">(e.g., A-13/120/R/RF)</span></h4>
                                    <ul className="space-y-1 text-lg text-foreground/90">
                                        <li>• Less traumatic to surrounding tissue</li>
                                        <li>• Preferred in anatomically sensitive regions (e.g., intercostal nerves)</li>
                                        <li>• Produce a more spherical ice-ball pattern</li>
                                    </ul>
                                </div>
                                <div className="border-t border-border pt-6">
                                    <h4 className="font-semibold text-foreground mb-2 text-lg">Triangular Tip Probes <span className="text-lg text-muted-foreground font-normal">(e.g., A-13/120/T/RF)</span></h4>
                                    <ul className="space-y-1 text-lg text-foreground/90">
                                        <li>• Facilitate smoother tissue penetration</li>
                                        <li>• May not require longer catheter introduction</li>
                                        <li>• Produce a more elliptical ice-ball configuration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Ice-Ball Determinants */}
                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Ice-Ball Determinants</h3>
                            <p className="text-lg text-foreground/90 mb-4">Ice-ball diameter depends on:</p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-base font-bold mt-0.5">1</div>
                                    <span className="text-lg text-foreground">Probe diameter</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-base font-bold mt-0.5">2</div>
                                    <span className="text-lg text-foreground">Freezing duration <span className="text-lg text-muted-foreground block mt-1">(e.g., ~90 seconds may achieve ~10–11 mm diameter depending on probe type)</span></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-base font-bold mt-0.5">3</div>
                                    <span className="text-lg text-foreground">Tissue vascularity and hydration</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Geometry & Ice ball */}
            <section className="py-20 lg:py-24 bg-secondary/30">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 content-img-wrap relative">
                            <img src={usImg} alt="Cryoprobe with ice ball under ultrasound" className="content-img" />
                            <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-2xl border border-border text-center text-base font-medium text-foreground">
                                Real-time visualisation of cryolesion under ultrasound
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="pill mb-6">Visualisation</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                Lesion Geometry & Ice-Ball Control
                            </h2>
                            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                                Cryolesion is visible under ultrasound, allowing:
                            </p>
                            <ul className="space-y-4 mb-8 text-lg">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                    Real-time visualisation of the ice-ball
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                    Assessment of nerve contact
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                    Adjustments for optimal nerve coverage
                                </li>
                            </ul>
                            <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
                                <p>
                                    Probe orientation relative to the nerve (parallel vs perpendicular) influences effective lesion length and completeness.
                                </p>
                                <p>
                                    Standardisation of freezing duration (e.g., 60–90 seconds) affects ice-ball diameter, commonly reaching approximately 10–11 mm depending on probe type.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-5xl mx-auto">
                        <div className="mb-12">
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                Safety and Procedural Integration
                            </h2>
                            <p className="text-lg text-foreground/90 leading-relaxed">
                                Cryoablation technology is integrated within image-guided interventional workflows (ultrasound and/or fluoroscopy) to support procedural excellence.
                            </p>
                        </div>

                        <div className="space-y-10 mb-12">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Image guidance supports:</h3>
                                <ul className="space-y-4 text-lg">
                                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-primary" /> Accurate anatomical targeting</li>
                                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-primary" /> Real-time ice-ball visualisation</li>
                                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-primary" /> Procedural safety</li>
                                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-primary" /> Reproducibility across anatomical regions</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-bold text-foreground mb-6">Platform safety considerations:</h3>
                                <ul className="space-y-4 text-lg">
                                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-primary" /> Appropriate gas management and supply</li>
                                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-primary" /> Sterile procedural setup</li>
                                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-primary" /> Recognition of contraindications (coagulopathy)</li>
                                    <li className="flex items-center gap-3"><ChevronRight className="w-5 h-5 text-primary" /> Image guidance proficiency</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-400 p-6">
                            <p className="text-lg text-amber-800 font-medium">
                                Diagnostic neurostimulation may be used adjunctively to differentiate between sensory and motor fibres prior to freezing. Technology alone does not ensure safety; clinician skill and procedural governance remain paramount.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IPMA specific */}
            <section className="py-20 lg:py-24 bg-secondary/30">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                How Cryotherapy Fits Within IPMA
                            </h2>
                            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                                Cryoanalgesia technology is presented within IPMA as an enabling platform that supports:
                            </p>
                            <ul className="space-y-4 text-foreground mb-8 text-lg">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Target className="w-4 h-4 text-primary" />
                                    </div>
                                    Targeted reversible neural interruption
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Activity className="w-4 h-4 text-primary" />
                                    </div>
                                    Minimally invasive outpatient interventional workflows
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Zap className="w-4 h-4 text-primary" />
                                    </div>
                                    Intraoperative analgesia when indicated
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <BookOpen className="w-4 h-4 text-primary" />
                                    </div>
                                    Rehabilitation-aligned pain management pathways
                                </li>
                            </ul>
                            <p className="text-foreground/90 leading-relaxed border-l-4 border-primary pl-4 py-2 text-lg">
                                Its utility is contextualised within the Cryoanalgesia procedural framework, which incorporates clinical indications, patient selection, expected outcomes, and safety considerations.
                            </p>
                        </div>
                        <div className="content-img-wrap">
                            <img src={teachingImg} alt="Dr Urbanczak teaches US guided techniques" className="content-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* End Summary */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-t border-border">
                <div className="section-container">
                    <div className="">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">CRYO-S Painless & Modern Cryotherapy</h3>
                        <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
                            CRYO-S Painless exemplifies modern cryotherapy technology — a TGA-registered, microprocessor-controlled platform combining automated probe optimisation, integrated neurostimulation, and an extensive probe ecosystem to enable precise, image-guided, reversible peripheral nerve modulation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cryotherapy;
