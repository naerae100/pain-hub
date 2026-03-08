import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Shield, Activity, Target, Circle, MoveHorizontal, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import balloonHero from "@/assets/Balloon-catheter_Technology.jpg";
import platformCatheter from "@/assets/Balloon Decompression_Catheter_2.jpg";
import inflatedBalloon from "@/assets/Inflated balloon with 0_1cc contrast dye.jpg";
import ecoSeriesImg from "@/assets/Balloon Decompression_Catheter.jpg";
import zineu01Img from "@/assets/The ZiNeu01 catheter..jpg";
import zineu1sImg from "@/assets/The ZiNeuS catheter. The articulated part bends more.jpg";
import tipsComparison from "@/assets/Differences between the ZiNeu01 and ZiNeuS.jpg";

const structuralVsNeural = [
    { tech: "Balloon", target: "Epidural space", mechanism: "Mechanical expansion" },
    { tech: "Cryotherapy", target: "Peripheral nerve", mechanism: "Reversible axonal interruption" },
    { tech: "Orthobiologics", target: "Tissue microenvironment", mechanism: "Biologic modulation" },
    { tech: "PLDD", target: "Disc nucleus", mechanism: "Intradiscal pressure reduction" },
];

const BalloonTechnology = () => {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                image={balloonHero}
                title="Mechanical Epidural Expansion in Interventional Spine Care"
                subtitle=""
                breadcrumbs={[{ label: "Technologies", href: "/technologies" }, { label: "Balloon Catheter Technology" }]}
            />

            {/* Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Overview
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Balloon catheter technology enables controlled mechanical expansion within the epidural space to address stenosis, adhesions, and restricted neural mobility.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Unlike intradiscal decompression (PLDD) or peripheral nerve cryotherapy, balloon systems act directly within the epidural compartment to:
                        </p>
                        <ul className="space-y-3 mt-4 mb-6">
                            <li className="flex items-center gap-3 text-foreground font-medium"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Expand stenotic regions</li>
                            <li className="flex items-center gap-3 text-foreground font-medium"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Detach fibrotic adhesions</li>
                            <li className="flex items-center gap-3 text-foreground font-medium"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Improve neural mobility</li>
                            <li className="flex items-center gap-3 text-foreground font-medium"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Facilitate targeted drug delivery</li>
                        </ul>
                        <div className="bg-secondary/50 rounded-2xl p-6 border border-border/30 mt-8">
                            <p className="italic text-muted-foreground leading-relaxed">
                                Balloon technology represents a mechanical interventional platform designed to overcome limitations of conventional epidural catheters and standard neuroplasty.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Concept & Mechanical Principle */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">

                    {/* Platform Concept */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                        <div>
                            <span className="pill mb-6">Concept</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                Platform Concept
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Modern epidural balloon systems incorporate:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border/50 text-muted-foreground shadow-sm"><Circle className="w-4 h-4 text-primary" /> Steerable catheter shafts</li>
                                <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border/50 text-muted-foreground shadow-sm"><Circle className="w-4 h-4 text-primary" /> Inflatable distal balloon segments</li>
                                <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border/50 text-muted-foreground shadow-sm"><Circle className="w-4 h-4 text-primary" /> Radiopaque markers</li>
                                <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border/50 text-muted-foreground shadow-sm"><Circle className="w-4 h-4 text-primary" /> Guide-needle compatibility</li>
                                <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border/50 text-muted-foreground shadow-sm col-span-1 sm:col-span-2"><Circle className="w-4 h-4 text-primary" /> Fluoroscopic visibility</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed">
                                These design elements support navigation into stenosed foraminal or epidural regions where standard catheters may fail to access or mechanically modify pathology. Representative systems include the ZINeu Epidural Balloon Catheter Series, described as an epidural balloon platform for nerve block and neuroplasty applications.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white p-4 items-center flex">
                            <img src={platformCatheter} alt="Balloon Decompression Catheter" className="w-full h-auto rounded-2xl" />
                        </div>
                    </div>

                    {/* Mechanical Principle */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0e0e0e] aspect-[4/3] flex items-center justify-center">
                            <img src={inflatedBalloon} alt="Inflated balloon with contrast dye" className="w-full h-auto object-contain" />
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="pill mb-6">Action</span>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                                Mechanical Principle of Action
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Balloon expansion produces controlled radial force within the epidural space. This may result in:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-muted-foreground"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Separation of fibrotic epidural adhesions</li>
                                <li className="flex items-center gap-3 text-muted-foreground"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Enlargement of stenotic foraminal regions</li>
                                <li className="flex items-center gap-3 text-muted-foreground"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Restoration of local microcirculation</li>
                                <li className="flex items-center gap-3 text-muted-foreground"><ChevronRight className="w-5 h-5 text-primary shrink-0" /> Improved distribution of therapeutic agents</li>
                            </ul>
                            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                                <p className="text-foreground font-semibold mb-2">Mechanical decompression differentiates balloon technology from:</p>
                                <ul className="list-disc pl-5 text-muted-foreground space-y-1 mb-4 text-sm">
                                    <li>Chemical adhesiolysis</li>
                                    <li>Conventional Racz catheter neuroplasty</li>
                                    <li>Intradiscal laser decompression</li>
                                </ul>
                                <p className="text-primary font-medium italic">
                                    It is a structural expansion platform rather than a purely pharmacologic approach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Catheter Architecture (ECO Series) */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Catheter Architecture
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Balloon catheter systems are available in multiple configurations to support anatomical variation.
                        </p>
                    </div>

                    {/* ECO Series Intro */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-5xl mx-auto bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">ECO Series</h3>
                            <h4 className="text-lg text-primary font-medium mb-6">Low-Profile Epidural Balloon Catheter Systems</h4>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                The ECO Series represents a low-profile epidural balloon catheter platform designed to facilitate navigation within stenotic or adhesed epidural spaces while minimising tissue irritation.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">These systems are engineered to support:</p>
                            <ul className="space-y-2 text-sm text-foreground">
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Mechanical epidural expansion</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Adhesiolysis in restricted compartments</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Targeted drug delivery following decompression</li>
                                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Fluoroscopic-guided interventional workflows</li>
                            </ul>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-md">
                            <img src={ecoSeriesImg} alt="ECO Series Catheter" className="w-full h-auto object-cover" />
                        </div>
                    </div>

                    {/* ECO1 vs ECO1S */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
                        {/* ECO1 */}
                        <div className="bg-secondary/20 border border-border/50 rounded-3xl p-8 lg:p-10 relative group hover:shadow-lg transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-foreground mb-1">ECO1</h3>
                                    <span className="text-sm font-medium text-primary">Non-Articulated Tip</span>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <MoveHorizontal className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-white p-2">
                                    <img src={zineu01Img} alt="The ZiNeu01 catheter" className="w-full h-32 object-contain" />
                                    <div className="text-center text-xs font-medium text-muted-foreground py-2 border-t border-border mt-2">
                                        The entire catheter bends
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Technical Profile</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex justify-between border-b border-border border-dashed pb-1"><span>Outer diameter:</span> <span className="text-foreground font-medium">2.3 mm</span></li>
                                        <li className="flex justify-between border-b border-border border-dashed pb-1"><span>Inner diameter:</span> <span className="text-foreground font-medium">1.0 mm</span></li>
                                        <li className="flex justify-between border-b border-border border-dashed pb-1"><span>Length:</span> <span className="text-foreground font-medium">300 mm</span></li>
                                        <li className="flex justify-between border-b border-border border-dashed pb-1"><span>Guide needle compatibility:</span> <span className="text-foreground font-medium">10G</span></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Platform Role</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed bg-background p-4 rounded-xl border border-border shadow-sm">
                                        It has an excellent ability to penetrate into the intervertebral foramen with a strong strength and a bending characteristic of the whole catheter.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ECO1S */}
                        <div className="bg-secondary/20 border border-border/50 rounded-3xl p-8 lg:p-10 relative group hover:shadow-lg transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-display font-bold text-foreground mb-1">ECO1S</h3>
                                    <span className="text-sm font-medium text-primary">Articulated Tip</span>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                    <GitFork className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-white p-2">
                                    <img src={zineu1sImg} alt="The ZiNeuS catheter" className="w-full h-32 object-contain" />
                                    <div className="text-center text-xs font-medium text-muted-foreground py-2 border-t border-border mt-2">
                                        The articulated part bends more
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Technical Profile</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex justify-between border-b border-border border-dashed pb-1"><span>Outer diameter:</span> <span className="text-foreground font-medium">2.3 mm</span></li>
                                        <li className="flex justify-between border-b border-border border-dashed pb-1"><span>Inner diameter:</span> <span className="text-foreground font-medium">1.0 mm</span></li>
                                        <li className="flex justify-between border-b border-border border-dashed pb-1"><span>Length:</span> <span className="text-foreground font-medium">300 mm</span></li>
                                        <li className="flex justify-between border-b border-border border-dashed pb-1"><span>Guide needle compatibility:</span> <span className="text-foreground font-medium">10G</span></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Design Characteristics</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Directional adjustment capability via distal joint articulation</li>
                                        <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Compatible with endoscopic-assisted approaches</li>
                                    </ul>

                                    <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider mt-6">Platform Role</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        ECO1S incorporates enhanced directional control, supporting more precise navigation in complex or anatomically distorted epidural environments. Endoscopic compatibility allows integration with visualised epidural techniques where indicated.
                                    </p>
                                    <div className="bg-background p-4 rounded-xl border border-border shadow-sm">
                                        <span className="font-bold text-xs text-foreground block mb-2">Consider when:</span>
                                        <ul className="space-y-1 text-xs text-muted-foreground">
                                            <li>• Fine directional control is required</li>
                                            <li>• Adhesions are focal and access is limited</li>
                                            <li>• Combined fluoroscopic and endoscopic workflows are utilised</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tip Comparison */}
                    <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-20 bg-background border border-border rounded-3xl p-8 overflow-hidden shadow-md">
                        <div className="order-2 lg:order-1 relative">
                            <div className="rounded-2xl overflow-hidden border border-border shadow-inner bg-white p-2">
                                <img src={tipsComparison} alt="Differences between the ZiNeu01 and ZiNeuS" className="w-full h-auto" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h3 className="text-2xl font-bold text-foreground">Tip Bending Dynamics</h3>

                            <div className="space-y-2">
                                <h4 className="font-bold text-primary">ZiNeu01 (Non-Articulated Tip)</h4>
                                <p className="text-sm text-muted-foreground bg-secondary/30 p-4 rounded-xl">
                                    The tip bends as a single, fixed structure. When inserted in a bent state, forward force naturally directs the catheter toward the intervertebral foramen. This directional bias supports more reliable entry into the foramen.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-bold text-primary">ZiNeu01S (Articulated Tip)</h4>
                                <p className="text-sm text-muted-foreground bg-secondary/30 p-4 rounded-xl">
                                    The tip includes an articulation joint, allowing easier and more flexible bending. However, when inserted while bent, forward force tends to direct the catheter upward (cephalad) rather than toward the intervertebral foramen. This may reduce effective entry force and make foraminal access more technically challenging.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-xl text-sm font-medium italic">
                                Summary: ZiNeu01 provides stronger directional support toward the foramen, while ZiNeu01S offers greater flexibility but may require more precise handling to achieve optimal foraminal access.
                            </div>
                        </div>
                    </div>

                    {/* ECO2 */}
                    <div className="max-w-4xl mx-auto bg-secondary/30 border border-border/50 rounded-3xl p-8 lg:p-12 text-center">
                        <h3 className="text-3xl font-display font-bold text-foreground mb-6">ECO2</h3>
                        <div className="grid sm:grid-cols-3 gap-6 mb-8 text-left">
                            <div className="bg-background p-4 rounded-2xl border border-border shadow-sm">
                                <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider border-b border-border pb-2">Technical Profile</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex justify-between"><span>Outer:</span> <span className="font-medium">1.55 mm</span></li>
                                    <li className="flex justify-between"><span>Inner:</span> <span className="font-medium">0.5 mm</span></li>
                                    <li className="flex justify-between"><span>Length:</span> <span className="font-medium">300 mm</span></li>
                                    <li className="flex justify-between"><span>Needle:</span> <span className="font-medium">13G</span></li>
                                </ul>
                            </div>
                            <div className="bg-background p-4 rounded-2xl border border-border shadow-sm">
                                <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider border-b border-border pb-2">Design</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Reduced outer diameter</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Minimised tissue disruption</li>
                                </ul>
                            </div>
                            <div className="bg-background p-4 rounded-2xl border border-border shadow-sm">
                                <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider border-b border-border pb-2">Consider in:</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Localised pathology</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Heightened sensitivity</li>
                                    <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div> Minimally traumatic access</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            <span className="font-bold text-foreground block mb-2">Platform Role:</span>
                            The ECO2 catheter is designed as a smaller-calibre option to reduce insertion-related discomfort and enhance procedural safety in selected patients. Its reduced diameter supports lower insertion resistance, potentially decreased patient discomfort, and improved safety in narrow anatomical corridors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Approach, Indications, Comparison */}
            <section className="py-20 lg:py-24 bg-secondary/20 border-y border-border">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* Approach & Indications */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-foreground mb-6">Access Pathways</h2>
                                <p className="text-muted-foreground mb-6">Balloon catheter systems support multiple anatomical approaches:</p>
                                <div className="flex gap-4 mb-6">
                                    <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">Caudal</span>
                                    <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">Transforaminal</span>
                                    <span className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium">Interlaminar</span>
                                </div>
                                <div className="bg-background p-6 rounded-2xl border border-border/50">
                                    <p className="font-bold text-sm uppercase text-foreground mb-3">Approach selection depends on:</p>
                                    <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-primary" /> Level of pathology</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-primary" /> Foraminal vs central stenosis</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-primary" /> Prior surgical anatomy</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-primary" /> Adhesion distribution</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-display font-bold text-foreground mb-6">Indications</h2>
                                <p className="text-muted-foreground mb-6">Balloon catheter systems are typically applied in settings such as:</p>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border shadow-sm"><div className="w-2 h-2 rounded-full bg-primary"></div> Lumbar spinal stenosis</li>
                                    <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border shadow-sm"><div className="w-2 h-2 rounded-full bg-primary"></div> Chronic herniated intervertebral disc</li>
                                    <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border shadow-sm"><div className="w-2 h-2 rounded-full bg-primary"></div> Leg and back pain due to epidural adhesion</li>
                                    <li className="flex items-center gap-3 bg-background p-3 rounded-xl border border-border shadow-sm"><div className="w-2 h-2 rounded-full bg-primary"></div> Post-spinal surgery syndrome</li>
                                </ul>
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                                    <p className="font-bold text-emerald-800 text-sm uppercase mb-2">Best Indication:</p>
                                    <p className="text-emerald-900 font-medium pb-2 border-b border-emerald-200/50">Neurogenic claudication due to spinal stenosis</p>
                                    <p className="text-emerald-900 font-medium pt-2">Limited response to conventional epidural block</p>
                                </div>
                            </div>
                        </div>

                        {/* Structural vs Neural & Safety */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-foreground mb-6">Structural vs. Neural Intervention</h2>
                                <p className="text-muted-foreground mb-6">Balloon technology differs fundamentally from other IPMA platforms:</p>
                                <div className="bg-background rounded-2xl border border-border overflow-hidden">
                                    <div className="grid grid-cols-3 bg-secondary/50 p-4 font-bold text-sm text-foreground border-b border-border">
                                        <div>Technology</div>
                                        <div>Primary Target</div>
                                        <div>Mechanism</div>
                                    </div>
                                    {structuralVsNeural.map((item, i) => (
                                        <div key={i} className={`grid grid-cols-3 p-4 text-sm ${i !== 3 ? 'border-b border-border/50' : ''}`}>
                                            <div className="font-medium text-primary">{item.tech}</div>
                                            <div className="text-muted-foreground">{item.target}</div>
                                            <div className="text-muted-foreground">{item.mechanism}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 font-semibold text-foreground italic border-l-4 border-primary pl-4 py-1">
                                    Balloon systems address structural compression and adhesion — not neural conduction directly.
                                </p>
                            </div>

                            <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                    <Shield className="w-24 h-24 text-primary" />
                                </div>
                                <h2 className="text-3xl font-display font-bold text-foreground mb-6 relative z-10">Safety & Technical Considerations</h2>
                                <ul className="space-y-4 mb-6 relative z-10">
                                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Stepwise balloon inflation to control radial force
                                    </li>
                                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Radiographic confirmation of catheter position
                                    </li>
                                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Avoidance of excessive pressure in severe stenosis
                                    </li>
                                    <li className="flex items-start gap-3 text-muted-foreground text-sm">
                                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Appropriate patient selection
                                    </li>
                                </ul>
                                <div className="text-sm text-foreground bg-primary/10 p-4 rounded-xl border border-primary/20 relative z-10 font-medium">
                                    Because balloon systems exert mechanical force, operator expertise and anatomical understanding are critical. Technology must be integrated within structured procedural protocols.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* IPMA Position & Summary */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-8">
                            Position Within IPMA Education
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-8">
                            <div className="bg-background border border-border/50 p-4 rounded-xl shadow-sm flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                <span className="font-medium">A structural decompression platform</span>
                            </div>
                            <div className="bg-background border border-border/50 p-4 rounded-xl shadow-sm flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                <span className="font-medium">An advanced epidural intervention tool</span>
                            </div>
                            <div className="bg-background border border-border/50 p-4 rounded-xl shadow-sm flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                <span className="font-medium">An alternative to conventional neuroplasty</span>
                            </div>
                            <div className="bg-background border border-border/50 p-4 rounded-xl shadow-sm flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                                <span className="font-medium">A minimally invasive option before open decompression</span>
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed italic max-w-2xl mx-auto">
                            Application frameworks, patient selection criteria, and outcome expectations are addressed in the Epidural Balloon Decompression procedural section.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center shadow-lg">
                        <h3 className="text-2xl font-display font-bold mb-4">Summary</h3>
                        <p className="text-lg lg:text-xl font-medium leading-relaxed opacity-90">
                            Balloon catheter technology enables controlled mechanical expansion within the epidural space, supporting structural decompression and enhanced adhesiolysis in selected spine pathology.
                        </p>
                        <Link to="/procedures/epidural-balloon" className="inline-flex mt-8">
                            <Button size="lg" variant="secondary" className="rounded-full gap-2 px-8">
                                View Procedural Framework <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BalloonTechnology;
