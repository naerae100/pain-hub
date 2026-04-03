import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Shield, Activity, Target, Circle, Settings, Zap, CheckCircle2, AlertTriangle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
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
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Technology Overview
                        </div>
                        <p className="text-lg text-foreground/75 leading-relaxed">
                            Medical laser systems used in interventional spine care are designed to deliver controlled energy to targeted tissue structures through percutaneous access. In spine applications, diode laser platforms support procedures such as:
                        </p>
                        <ul className="space-y-3 mt-4 mb-6">
                            <li className="flex items-center gap-3 text-foreground font-medium bg-secondary/30 p-4 rounded-xl shadow-sm border border-border/50"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Percutaneous Laser Disc Decompression (PLDD)</li>
                            <li className="flex items-center gap-3 text-foreground font-medium bg-secondary/30 p-4 rounded-xl shadow-sm border border-border/50"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Laser nucleoplasty</li>
                            <li className="flex items-center gap-3 text-foreground font-medium bg-secondary/30 p-4 rounded-xl shadow-sm border border-border/50"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Selective intradiscal volume reduction</li>
                        </ul>
                        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 text-center">
                            <p className="text-primary font-bold text-lg mb-2">The Objective</p>
                            <p className="font-medium text-foreground">
                                A controlled reduction of nucleus pulposus volume, resulting in decreased intradiscal pressure and indirect neural decompression.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1470nm Diode Laser Technology */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="content-img-wrap shadow-xl">
                                <img src={plddLeadImage} alt="PLDD Lumbar Spine Technology Lead" className="content-img" />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div>
                                <span className="pill mb-4 px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 font-bold tracking-widest uppercase text-xs rounded-full">1470nm Wavelength</span>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                    Diode Laser Technology
                                </h2>
                                <p className="text-lg text-foreground/75 leading-relaxed">
                                    Contemporary spine-focused systems utilize a 1470nm wavelength diode laser platform.
                                </p>
                            </div>

                            <div className="bg-background rounded-3xl p-8 border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                    <Zap className="w-6 h-6 text-yellow-500" /> Why 1470nm?
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">It provides high absorption in water and fat.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">It features significantly greater absorption in cellular water compared with 980nm <strong className="text-foreground">(40 times better)</strong> and 1064nm <strong className="text-foreground">(160 times better)</strong> systems.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-muted-foreground">It has lower relative absorption in hemoglobin and melanin.</span>
                                    </li>
                                </ul>
                                <div className="mt-6 pt-6 border-t border-border">
                                    <p className="font-semibold text-foreground italic flex items-center justify-center gap-2">
                                        <Target className="w-5 h-5 text-primary" /> Supported by precision photothermal interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-3xl font-display font-bold text-foreground mb-4">Platform Characteristics</h3>
                            <p className="text-muted-foreground">Modern diode laser systems used in PLDD typically include:</p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-background p-6 rounded-2xl border border-border text-center shadow-sm flex flex-col items-center justify-center gap-3">
                                <Zap className="w-8 h-8 text-primary" />
                                <span className="font-bold text-sm">15W output capability (1470nm)</span>
                            </div>
                            <div className="bg-background p-6 rounded-2xl border border-border text-center shadow-sm flex flex-col items-center justify-center gap-3">
                                <Activity className="w-8 h-8 text-primary" />
                                <span className="font-bold text-sm">Continuous Wave (CW) & Pulse modes</span>
                            </div>
                            <div className="bg-background p-6 rounded-2xl border border-border text-center shadow-sm flex flex-col items-center justify-center gap-3">
                                <Settings className="w-8 h-8 text-primary" />
                                <span className="font-bold text-sm">Programmable touchscreen interface</span>
                            </div>
                            <div className="bg-background p-6 rounded-2xl border border-border text-center shadow-sm flex flex-col items-center justify-center gap-3">
                                <Shield className="w-8 h-8 text-primary" />
                                <span className="font-bold text-sm">Service maintenance reminders</span>
                            </div>
                        </div>
                        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-6 text-sm text-blue-900 text-center mx-auto max-w-3xl leading-relaxed shadow-sm">
                            Laser fibers are introduced via percutaneous needle systems and connected through Luer-lock Y-connectors, maintaining a sterile procedural workflow. Proper use requires manufacturer-approved optical fibers and adherence to protective protocols.
                        </div>
                    </div>
                </div>
            </section>

            {/* Procedural Integration: PLDD */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="pill mb-4">Workflow</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Procedural Integration: PLDD
                        </h2>
                        <p className="text-lg text-foreground/75 leading-relaxed">
                            Percutaneous Laser Disc Decompression (PLDD) is a minimally invasive intradiscal procedure performed under local anesthesia.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto mb-20 items-center">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-4">Core Principles</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                                    <p className="text-muted-foreground font-medium pt-1">Needle placement is confirmed under fluoroscopic (X-ray) guidance.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                                    <p className="text-muted-foreground font-medium pt-1">Discography with contrast is used to confirm the target zone and simulate energy distribution.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">3</div>
                                    <p className="text-muted-foreground font-medium pt-1">An optical fiber is inserted directly into the nucleus pulposus.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">4</div>
                                    <p className="text-muted-foreground font-medium pt-1">Controlled laser energy is delivered to vaporize a small portion of the disc.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">5</div>
                                    <p className="text-muted-foreground font-medium pt-1">Intradiscal pressure reduction occurs, relieving neural compression and radicular symptoms.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="content-img-wrap shadow-sm">
                            <img src={plddXrayImage} alt="X-ray PLDD Lumbar Spine Needle Placement" className="content-img" />
                            <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-4">Fluoroscopic Confirmation</p>
                        </div>
                    </div>

                    {/* Energy Delivery Parameters */}
                    <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-md">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Energy Delivery Parameters</h3>
                        </div>

                        <p className="text-muted-foreground mb-6">Typical parameter ranges described in the technical guidance include:</p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="bg-background border border-border p-6 rounded-2xl">
                                <h4 className="font-bold text-primary mb-3">Lumbar Spine</h4>
                                <ul className="space-y-2 text-sm text-foreground font-medium">
                                    <li>• CW mode</li>
                                    <li>• 8–10W power</li>
                                    <li>• Total energy: ~1000–1200J per disc</li>
                                </ul>
                            </div>
                            <div className="bg-background border border-border p-6 rounded-2xl">
                                <h4 className="font-bold text-primary mb-3">Cervical / Thoracic Spine</h4>
                                <ul className="space-y-2 text-sm text-foreground font-medium">
                                    <li>• Pulse mode (1s/1s) at 10W for ~800J per disc</li>
                                    <li>• OR CW mode at 5W for ~800J per disc</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-secondary/50 p-6 rounded-2xl border border-border/50 text-sm leading-relaxed text-muted-foreground italic">
                            Incremental energy delivery (150J-200J intervals) with intermittent pauses and saline irrigation is used to optimize tissue control. Pain provocation testing (50–100J) helps confirm correct needle positioning prior to full ablation.
                        </div>
                    </div>
                </div>
            </section>

            {/* Patient Selection & Contraindications */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        <div className="space-y-8">
                            <h3 className="text-3xl font-display font-bold text-foreground">Clinical Integration & Patient Selection</h3>
                            <p className="text-muted-foreground">Laser decompression technology is typically considered for:</p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span className="font-medium text-foreground">Contained disc protrusions and closed herniations.</span>
                                </li>
                                <li className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span className="font-medium text-foreground">Disc bulges without annular rupture.</span>
                                </li>
                                <li className="flex items-start gap-3 bg-background p-4 rounded-xl border border-border shadow-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <span className="font-medium text-foreground">Radicular symptoms persisting after 6 weeks of conservative therapy (anti-inflammatory drugs, physiotherapy, injections).</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8 lg:p-10 relative overflow-hidden h-full flex flex-col justify-center">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <AlertTriangle className="w-32 h-32 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2 relative z-10">
                                <AlertTriangle className="w-6 h-6 text-red-600" /> Contraindications
                            </h3>
                            <p className="text-red-800/80 mb-6 relative z-10 text-sm">PLDD is not appropriate in cases of:</p>
                            <ul className="space-y-3 relative z-10">
                                {contraindications.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-red-900 text-sm font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
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

                        <div className="bg-secondary/20 border border-border rounded-3xl p-8 h-full flex flex-col justify-center shadow-sm order-2 lg:order-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 opacity-10">
                                <Eye className="w-64 h-64 text-primary -mr-8 -mt-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10 border-b border-border/50 pb-4">Safety & Operational Considerations</h3>
                            <ul className="space-y-5 relative z-10">
                                <li className="flex items-start gap-4 bg-background p-4 rounded-xl shadow-sm border border-border/50">
                                    <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-muted-foreground leading-relaxed">The use of manufacturer-supplied accessories, including protective glasses and approved fibers.</span>
                                </li>
                                <li className="flex items-start gap-4 bg-background p-4 rounded-xl shadow-sm border border-border/50">
                                    <Settings className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-medium text-muted-foreground leading-relaxed">Regular technical inspections and maintenance.</span>
                                </li>
                                <li className="flex items-start gap-4 bg-background p-4 rounded-xl shadow-sm border border-border/50 border-primary/20 bg-primary/5">
                                    <Eye className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span className="text-sm font-bold text-foreground leading-relaxed">Observation for the release of air (gas) bubbles through the Y-connector during the ablation process.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="content-img-wrap shadow-xl mb-6">
                                <img src={plddBubblesImage} alt="Observation of Air Bubbles in PLDD" className="content-img" />
                            </div>
                            <p className="text-center text-sm font-medium text-muted-foreground italic">Observation of air bubbles during the procedure.</p>
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto mb-20">
                        <h3 className="text-3xl font-display font-bold text-center text-foreground mb-10">Clinical Workflow Advantages</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-sm font-medium text-emerald-900 shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                Local anesthesia vs general
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-sm font-medium text-emerald-900 shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                2-4 hours observation
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-sm font-medium text-emerald-900 shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                Minimal tissue disruption
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-sm font-medium text-emerald-900 shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                Shorter rehabilitation
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-sm font-medium text-emerald-900 shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                Repeatability if indicated
                            </div>
                            <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-2 text-sm font-medium text-emerald-900 shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                No arthrodesis (fusion) required
                            </div>
                        </div>
                    </div>

                    {/* Summary & IPMA */}
                    <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-6 items-stretch">
                        <div className="md:col-span-5 bg-secondary/30 border border-border rounded-3xl p-8 flex flex-col justify-center">
                            <h4 className="font-bold text-foreground mb-4 border-b border-border pb-2 flex items-center gap-2">
                                <Target className="w-5 h-5 text-primary" /> Relationship to IPMA Procedural Framework
                            </h4>
                            <p className="text-sm text-muted-foreground mb-4">Within IPMA programs, laser systems are presented as:</p>
                            <ul className="space-y-2 text-sm font-medium text-foreground mb-6">
                                <li>• Precision decompression technologies</li>
                                <li>• Structural intervention platforms</li>
                                <li>• Alternatives to open discectomy</li>
                            </ul>
                            <div className="space-y-2 mt-auto">
                                <Link to="/procedures/pldd" className="text-xs text-primary font-bold hover:underline flex items-center gap-1">→ Percutaneous Laser Disc Decompression</Link>
                                <Link to="/education" className="text-xs text-primary font-bold hover:underline flex items-center gap-1">→ Education & Training</Link>
                                <Link to="/research" className="text-xs text-primary font-bold hover:underline flex items-center gap-1">→ Clinical Evidence</Link>
                            </div>
                        </div>

                        <div className="md:col-span-7 bg-primary text-primary-foreground rounded-3xl p-8 lg:p-12 flex flex-col justify-center text-center shadow-lg">
                            <h3 className="text-2xl font-display font-bold mb-6">Summary</h3>
                            <p className="text-lg lg:text-xl font-medium leading-relaxed opacity-90">
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
