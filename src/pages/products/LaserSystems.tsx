import { Link } from "react-router-dom";
import { ChevronRight, Shield, Activity, Target, Settings, Zap, CheckCircle2, AlertTriangle, Eye } from "lucide-react";
import PageHero from "@/components/PageHero";
import laserHero from "@/assets/Percutaneous Laser Disc Decompression_technology2.png";
import plddLeadImage from "@/assets/PLDD_lumbar spine_technology.png";
import plddXrayImage from "@/assets/2024_MC_SWING - PLDD_lumbar spine_needle placement.jpg";
import plddBubblesImage from "@/assets/PLDD_observation of air relaease bubbles.png";

const contraindications = [
    "Sequestered disc fragments or complete rupture of the annulus fibrosus",
    "Absolute bony spinal or foraminal stenosis",
    "Spondylolisthesis or significant structural instability",
    "Active systemic/local infections or malignant tumors",
    "Significant reduction of disk space",
    "Nerve paralysis requiring open surgery"
];

const LaserSystems = () => {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                image={laserHero}
                title="Precision Energy Delivery Platforms for Minimally Invasive Spine Decompression"
                subtitle=""
                breadcrumbs={[{ label: "Technologies", href: "/technologies" }, { label: "Laser Systems" }]}
            />

            {/* Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Laser Systems Overview</h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Medical laser systems used in interventional spine care are designed to deliver controlled energy to targeted tissue structures through percutaneous access. In spine applications, diode laser platforms support procedures such as:
                        </p>
                        <ul className="space-y-3 mt-4 mb-6">
                            <li className="flex items-center gap-3 text-lg text-foreground/90"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Percutaneous Laser Disc Decompression (PLDD)</li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Laser nucleoplasty</li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Selective intradiscal volume reduction</li>
                        </ul>
                        <div className="border-l-4 border-primary pl-6">
                            <p className="text-primary font-bold text-lg mb-2">The Objective</p>
                            <p className="font-medium text-foreground">
                                A controlled reduction of nucleus pulposus volume, resulting in decreased intradiscal pressure and indirect neural decompression.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1470nm Diode Laser Technology */}
            <section className="py-20 lg:py-24 bg-secondary/30">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="content-img-wrap">
                                <img src={plddLeadImage} alt="PLDD Lumbar Spine Technology Lead" className="content-img" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <span className="pill mb-4 px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 font-bold tracking-widest uppercase text-xs rounded-full">1470nm Wavelength</span>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                    Diode Laser Technology
                                </h2>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Contemporary spine-focused systems utilize a 1470nm wavelength diode laser platform.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Zap className="w-6 h-6 text-yellow-500" /> Why 1470nm?
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-lg text-foreground/90">It provides high absorption in water and fat.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-lg text-foreground/90">It features significantly greater absorption in cellular water compared with 980nm <strong className="text-foreground">(40 times better)</strong> and 1064nm <strong className="text-foreground">(160 times better)</strong> systems.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-lg text-foreground/90">It has lower relative absorption in hemoglobin and melanin.</span>
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-border">
                                    <p className="font-semibold text-foreground flex items-start gap-2">
                                        <Target className="w-5 h-5 text-primary" /> Supported by precision photothermal interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 max-w-5xl">
                        <div className="mb-6">
                            <h3 className="text-3xl font-display font-bold text-foreground mb-4">Platform Characteristics</h3>
                            <p className="text-lg text-foreground/90">Modern diode laser systems used in PLDD typically include:</p>
                        </div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <Zap className="w-5 h-5 text-primary shrink-0" /> 15W output capability (1470nm)
                            </li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <Activity className="w-5 h-5 text-primary shrink-0" /> Continuous Wave (CW) & Pulse modes
                            </li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <Settings className="w-5 h-5 text-primary shrink-0" /> Programmable touchscreen interface
                            </li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <Shield className="w-5 h-5 text-primary shrink-0" /> Service maintenance reminders
                            </li>
                        </ul>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Laser fibers are introduced via percutaneous needle systems and connected through Luer-lock Y-connectors, maintaining a sterile procedural workflow. Proper use requires manufacturer-approved optical fibers and adherence to protective protocols.
                        </p>
                    </div>
                </div>
            </section>

            {/* Procedural Integration: PLDD */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-3xl mb-16">
                        <span className="pill mb-4">Workflow</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Procedural Integration: PLDD
                        </h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Percutaneous Laser Disc Decompression (PLDD) is a minimally invasive intradiscal procedure performed under local anesthesia.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto mb-20 items-center">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-4">Core Principles</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                                    <p className="text-lg text-foreground/90 font-medium pt-1">Needle placement is confirmed under fluoroscopic (X-ray) guidance.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                                    <p className="text-lg text-foreground/90 font-medium pt-1">Discography with contrast is used to confirm the target zone and simulate energy distribution.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                                    <p className="text-lg text-foreground/90 font-medium pt-1">An optical fiber is inserted directly into the nucleus pulposus.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                                    <p className="text-lg text-foreground/90 font-medium pt-1">Controlled laser energy is delivered to vaporize a small portion of the disc.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">5</div>
                                    <p className="text-lg text-foreground/90 font-medium pt-1">Intradiscal pressure reduction occurs, relieving neural compression and radicular symptoms.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="content-img-wrap">
                            <img src={plddXrayImage} alt="X-ray PLDD Lumbar Spine Needle Placement" className="content-img" />
                            <p className="text-base font-semibold text-muted-foreground mt-4">Fluoroscopic Confirmation</p>
                        </div>
                    </div>

                    {/* Energy Delivery Parameters */}
                    <div className="">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Energy Delivery Parameters</h3>
                        </div>

                        <p className="text-lg text-foreground/90 mb-6">Typical parameter ranges described in the technical guidance include:</p>

                        <div className="grid sm:grid-cols-2 gap-12 mb-8">
                            <div>
                                <h4 className="font-bold text-primary mb-3">Lumbar Spine</h4>
                                <ul className="space-y-2 text-lg text-foreground font-medium">
                                    <li>• CW mode</li>
                                    <li>• 8–10W power</li>
                                    <li>• Total energy: ~1000–1200J per disc</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary mb-3">Cervical / Thoracic Spine</h4>
                                <ul className="space-y-2 text-lg text-foreground font-medium">
                                    <li>• Pulse mode (1s/1s) at 10W for ~800J per disc</li>
                                    <li>• OR CW mode at 5W for ~800J per disc</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-foreground/90">
                            Incremental energy delivery (150J-200J intervals) with intermittent pauses and saline irrigation is used to optimize tissue control. Pain provocation testing (50–100J) helps confirm correct needle positioning prior to full ablation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Patient Selection & Contraindications */}
            <section className="py-20 lg:py-24 bg-secondary/30">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        <div className="space-y-8">
                            <h3 className="text-3xl font-display font-bold text-foreground">Clinical Integration & Patient Selection</h3>
                            <p className="text-lg text-foreground/90">Laser decompression technology is typically considered for:</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-lg text-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    Contained disc protrusions and closed herniations.
                                </li>
                                <li className="flex items-start gap-3 text-lg text-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    Disc bulges without annular rupture.
                                </li>
                                <li className="flex items-start gap-3 text-lg text-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    Radicular symptoms persisting after 6 weeks of conservative therapy (anti-inflammatory drugs, physiotherapy, injections).
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-red-900 flex items-center gap-2">
                                <AlertTriangle className="w-6 h-6 text-red-600" /> Contraindications
                            </h3>
                            <p className="text-foreground/80 text-lg">PLDD is not appropriate in cases of:</p>
                            <ul className="space-y-3">
                                {contraindications.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-foreground text-lg font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Recovery, Operations & Image */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto mb-20">

                        <div className="order-2 lg:order-1 space-y-6">
                            <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-border/50 pb-4">Safety & Operational Considerations</h3>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-lg text-foreground/90 leading-relaxed">The use of manufacturer-supplied accessories, including protective glasses and approved fibers.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Settings className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-lg text-foreground/90 leading-relaxed">Regular technical inspections and maintenance.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Eye className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-lg font-bold text-foreground leading-relaxed">Observation for the release of air (gas) bubbles through the Y-connector during the ablation process.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="content-img-wrap mb-6">
                                <img src={plddBubblesImage} alt="Observation of Air Bubbles in PLDD" className="content-img" />
                            </div>
                            <p className="text-base font-medium text-muted-foreground">Observation of air bubbles during the procedure.</p>
                        </div>
                    </div>

                    <div className=" mb-20">
                        <h3 className="text-3xl font-display font-bold text-foreground mb-6">Clinical Workflow Advantages</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Local anesthesia vs general
                            </li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> 2-4 hours observation
                            </li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Minimal tissue disruption
                            </li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Shorter rehabilitation
                            </li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> Repeatability if indicated
                            </li>
                            <li className="flex items-center gap-3 text-lg text-foreground/90">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> No arthrodesis (fusion) required
                            </li>
                        </ul>
                    </div>

                    {/* Summary & IPMA */}
                    <div className=" space-y-16">
                        <div>
                            <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                                <Target className="w-5 h-5 text-primary" /> Relationship to IPMA Procedural Framework
                            </h4>
                            <p className="text-lg text-foreground/90 mb-4">Within IPMA programs, laser systems are presented as:</p>
                            <ul className="space-y-2 text-lg text-foreground/90 mb-6">
                                <li>• Precision decompression technologies</li>
                                <li>• Structural intervention platforms</li>
                                <li>• Alternatives to open discectomy</li>
                            </ul>
                            <div className="space-y-2">
                                <Link to="/procedures/pldd" className="text-base text-primary font-bold hover:underline flex items-center gap-1">→ Percutaneous Laser Disc Decompression</Link>
                                <Link to="/education" className="text-base text-primary font-bold hover:underline flex items-center gap-1">→ Education & Training</Link>
                                <Link to="/research" className="text-base text-primary font-bold hover:underline flex items-center gap-1">→ Clinical Evidence</Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Summary</h3>
                            <p className="text-lg leading-relaxed text-foreground/90">
                                1470nm diode laser systems enable controlled percutaneous intradiscal decompression through precise photothermal energy delivery within minimally invasive spine care pathways.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LaserSystems;
