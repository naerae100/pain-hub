import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Dna, Droplet, TestTube, Syringe, Settings, Layers, Workflow, CheckCircle2, Shield, Target, Circle, MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import orthobiologicsHero from "@/assets/prp-sample-min.jpg";
import marrowAspirationLiquid from "@/assets/Marrow Aspiration Liquid Autograft.jpg";
import marrowAspirationLiquidTip from "@/assets/Marrow Aspiration Liquid Autograft_tip.jpg";
import marrowCancellousAllThree from "@/assets/Marrow-Aspiration-&-Cancellous-Bone-Graft_all-three.jpg";
import marrowCancellousTip from "@/assets/Marrow Aspiration & Cancellous Bone Graft_tip.jpg";
import cervosTripleKeyPrp from "@/assets/Cervos Triple KeyPRP.png";
import cervosKeyPrp from "@/assets/CERVOS-KEYPRP.jpg";
import ppsSodiumCitrate from "@/assets/PPS Sodium Citrate 3.13 percent solution (10ml ampoules).png";

const Orthobiologics = () => {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                image={orthobiologicsHero}
                title="Autologous Biologic Processing Systems for Regenerative Interventional Care"
                subtitle=""
                breadcrumbs={[{ label: "Technologies", href: "/technologies" }, { label: "Orthobiologic Technologies" }]}
            />

            {/* Overview */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Technology Overview
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Orthobiologic technologies support the controlled harvesting, processing, and delivery of autologous biologic materials used in interventional spine and musculoskeletal medicine.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">These platforms are designed to optimise:</p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-4 mb-8">
                            <div className="bg-secondary/30 p-4 rounded-xl border border-border/50 flex items-center gap-3 shadow-sm">
                                <TestTube className="w-5 h-5 text-primary" /> <span className="font-medium text-foreground text-sm">Cellular yield</span>
                            </div>
                            <div className="bg-secondary/30 p-4 rounded-xl border border-border/50 flex items-center gap-3 shadow-sm">
                                <Dna className="w-5 h-5 text-primary" /> <span className="font-medium text-foreground text-sm">Biologic composition</span>
                            </div>
                            <div className="bg-secondary/30 p-4 rounded-xl border border-border/50 flex items-center gap-3 shadow-sm">
                                <Droplet className="w-5 h-5 text-primary" /> <span className="font-medium text-foreground text-sm">Platelet concentration & absolute dose</span>
                            </div>
                            <div className="bg-secondary/30 p-4 rounded-xl border border-border/50 flex items-center gap-3 shadow-sm">
                                <Shield className="w-5 h-5 text-primary" /> <span className="font-medium text-foreground text-sm">Procedural sterility & workflow efficiency</span>
                            </div>
                            <div className="bg-secondary/30 p-4 rounded-xl border border-border/50 flex items-center gap-3 shadow-sm sm:col-span-2">
                                <Settings className="w-5 h-5 text-primary" /> <span className="font-medium text-foreground text-sm">Reproducibility across clinical settings</span>
                            </div>
                        </div>
                        <div className="bg-primary/5 rounded-2xl p-6 text-primary flex gap-4 items-start border border-primary/20">
                            <Workflow className="w-6 h-6 mt-1 flex-shrink-0" />
                            <p className="font-medium leading-relaxed italic">
                                Unlike ablative or decompressive technologies, orthobiologic systems focus on biologic optimisation — preparing patient-derived cellular materials for targeted regenerative application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bone Marrow Aspiration Technology */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border overflow-hidden">
                <div className="section-container">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="pill mb-4">Bone Marrow Aspiration</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Bone Marrow Aspiration Technology
                        </h2>
                        <h3 className="text-xl text-primary font-medium mb-6">Liquid Autograft Collection Systems</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Bone marrow aspiration systems used in interventional practice are designed for controlled retrieval of autologous marrow from multiple zones within the medullary space.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1 relative">
                            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white mb-6 relative z-10">
                                <img src={marrowAspirationLiquid} alt="Marrow Aspiration Liquid Autograft" className="w-full h-auto object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white w-2/3 ml-auto relative -mt-16 z-20">
                                <img src={marrowAspirationLiquidTip} alt="Marrow Aspiration Tip Detail" className="w-full h-auto object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-3">
                                    <span className="text-white text-xs font-medium">Trochar Tip Detail</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                            <div>
                                <h4 className="font-bold text-foreground mb-4 text-xl flex flex-col">
                                    <span className="text-sm text-primary uppercase tracking-wider block mb-1">Function</span>
                                    Controlled Retrieval
                                </h4>
                                <p className="text-muted-foreground leading-relaxed bg-background p-6 rounded-2xl border border-border shadow-sm">
                                    These systems allow clinicians to aspirate in a measured and controlled manner across a broad marrow geography, supporting improved cellular yield while maintaining procedural precision.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Technical Configuration</h5>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Introducer needle</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Sharp and blunt stylets</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Aspiration cannula</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> 10 ml syringe interface</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 border-b border-border pb-2">Gauge & Zones</h5>
                                    <div className="space-y-4">
                                        <div className="flex gap-2">
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-md text-xs font-bold border border-primary/20">11G</span>
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-md text-xs font-bold border border-primary/20">13G</span>
                                        </div>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-center gap-2"><Circle className="w-3 h-3 text-secondary-foreground" /> Iliac crest</li>
                                            <li className="flex items-center gap-2"><Circle className="w-3 h-3 text-secondary-foreground" /> Pedicle</li>
                                            <li className="flex items-center gap-2"><Circle className="w-3 h-3 text-secondary-foreground" /> Calcaneus</li>
                                            <li className="flex items-center gap-2"><Circle className="w-3 h-3 text-secondary-foreground" /> Tibia</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Design Features */}
                    <div className="mt-20 max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-foreground">Key Design Features</h3>
                            <p className="text-muted-foreground mt-2">Modern closed-end aspiration systems incorporate two important design principles:</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-background rounded-3xl p-8 border border-border shadow-md relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] flex items-start justify-end p-4 transition-transform group-hover:scale-110">
                                    <span className="text-4xl font-display font-black text-primary/20">1</span>
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-4 relative z-10 w-3/4">Closed-End Needle Tip</h4>
                                <p className="text-muted-foreground leading-relaxed relative z-10">
                                    Prevents aspiration of excess peripheral blood through the entry channel, supporting improved biologic quality and reduced dilution.
                                </p>
                            </div>
                            <div className="bg-background rounded-3xl p-8 border border-border shadow-md relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] flex items-start justify-end p-4 transition-transform group-hover:scale-110">
                                    <span className="text-4xl font-display font-black text-primary/20">2</span>
                                </div>
                                <h4 className="text-xl font-bold text-foreground mb-4 relative z-10 w-3/4">Threaded Handle Guidance Mechanism</h4>
                                <p className="text-muted-foreground leading-relaxed relative z-10">
                                    Allows controlled repositioning of the aspiration cannula within the marrow space, enabling sampling from multiple marrow zones through a single cortical entry point.
                                </p>
                            </div>
                        </div>
                        <div className="bg-blue-50 border-t border-b border-blue-100 p-8 mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl">
                            <div className="flex flex-col items-center text-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">Reduced blood contamination</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">Improved progenitor cell yield</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">Single-entry workflow efficiency</span>
                            </div>
                            <div className="flex flex-col items-center text-center gap-2">
                                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">Minimally invasive harvesting</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marrow Aspiration & Cancellous Bone Graft Technologies */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                        <div className="lg:col-span-7 space-y-10">
                            <div>
                                <span className="pill mb-4">Core Harvesting</span>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                    Marrow Aspiration & Cancellous Bone Graft Technologies
                                </h2>
                                <h3 className="text-xl text-primary font-medium mb-6">Liquid and Structural Autograft Integration</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-border pl-4">
                                    Modern marrow aspiration and bone harvesting systems enable clinicians to combine high-quality bone marrow aspirate (BMA) with percutaneously harvested cancellous bone autograft within a single procedural workflow.
                                </p>
                            </div>

                            <div className="bg-secondary/30 rounded-3xl p-8 border border-border flex flex-col md:flex-row gap-6 items-center">
                                <div className="flex-1">
                                    <p className="font-semibold text-foreground mb-4 text-center md:text-left">This integrated approach allows the preparation of both:</p>
                                    <div className="flex flex-col gap-3">
                                        <div className="bg-white p-4 rounded-xl border border-border/50 shadow-sm flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0"><Droplet className="w-5 h-5 text-blue-500" /></div>
                                            <span className="font-bold text-foreground">Cellular liquid autograft</span>
                                        </div>
                                        <div className="bg-white p-4 rounded-xl border border-border/50 shadow-sm flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0"><Layers className="w-5 h-5 text-orange-500" /></div>
                                            <span className="font-bold text-foreground">Structural cancellous bone core graft</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-center md:text-left text-muted-foreground mt-4 italic font-medium">…from a minimally invasive access pathway.</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-foreground">Biological Rationale</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Harvesting intact cancellous bone cores without disrupting highly vascularised and organised trabecular architecture preserves:
                                </p>
                                <ul className="grid sm:grid-cols-3 gap-4 mb-6">
                                    <li className="bg-background border border-border rounded-xl p-4 text-center">
                                        <p className="text-sm font-bold text-foreground">Native microvascular networks</p>
                                    </li>
                                    <li className="bg-background border border-border rounded-xl p-4 text-center">
                                        <p className="text-sm font-bold text-foreground">Osteogenic cellular niches</p>
                                    </li>
                                    <li className="bg-background border border-border rounded-xl p-4 text-center">
                                        <p className="text-sm font-bold text-foreground">Structural integrity of the graft</p>
                                    </li>
                                </ul>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Compared with morselised bone fragments, intact cancellous cores support more physiologic incorporation and remodeling. When combined with highly cellular marrow aspirate, this approach delivers autologous graft material with:
                                </p>
                                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-foreground block">Osteoconductive properties</span>
                                                <span className="text-sm text-muted-foreground">Scaffold support</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-foreground block">Osteoinductive potential</span>
                                                <span className="text-sm text-muted-foreground">Biologic signalling</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-foreground block">Osteogenic capacity</span>
                                                <span className="text-sm text-muted-foreground">Cellular contribution</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-10">
                            {/* Images Grid */}
                            <div className="space-y-4">
                                <div className="bg-secondary/20 p-4 rounded-3xl border border-border">
                                    <img src={marrowCancellousAllThree} alt="Marrow Aspiration & Cancellous Bone Graft Setup" className="w-full h-auto rounded-xl object-cover mix-blend-multiply max-h-64 mx-auto" />
                                </div>
                                <div className="bg-secondary/20 p-4 rounded-3xl border border-border overflow-hidden">
                                    <img src={marrowCancellousTip} alt="Trephine Needle Tip" className="w-full h-auto rounded-xl object-cover max-h-48 mx-auto mix-blend-multiply" />
                                    <p className="text-xs text-center text-muted-foreground mt-3 font-medium tracking-wide uppercase">8G Trephine Core Extraction</p>
                                </div>
                            </div>

                            {/* Technical Specs */}
                            <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                                <h4 className="font-bold text-lg text-foreground mb-4">Technical Characteristics</h4>
                                <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                                    <li className="flex items-center gap-3"><Circle className="w-2 h-2 text-primary" /> Bone marrow aspiration components</li>
                                    <li className="flex items-center gap-3"><Circle className="w-2 h-2 text-primary" /> Trephine-based cancellous core extraction</li>
                                    <li className="flex items-center gap-3"><Circle className="w-2 h-2 text-primary" /> Controlled repositioning mechanisms</li>
                                    <li className="flex items-center gap-3"><Circle className="w-2 h-2 text-primary" /> Single-entry access design</li>
                                </ul>
                                <div className="bg-secondary/50 p-4 rounded-xl border border-border/50 text-sm text-foreground italic shadow-inner">
                                    Cancellous bone core harvesting is commonly performed using an 8G Trephine needle, allowing extraction of intact bone cylinders through a minimally invasive approach.
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Graft Integration & Advantages */}
                    <div className="grid lg:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
                        <div className="bg-secondary/20 border border-border rounded-3xl p-8 lg:p-10">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Combination Graft Strategies</h3>
                            <p className="text-muted-foreground mb-6">Harvested cancellous bone cores may be:</p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm border border-border/50"><Target className="w-5 h-5 text-primary" /> <span className="text-sm font-medium">Used alone as structural autograft</span></li>
                                <li className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm border border-border/50"><Layers className="w-5 h-5 text-primary" /> <span className="text-sm font-medium">Combined with autologous marrow aspirate</span></li>
                                <li className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm border border-border/50"><MoveHorizontal className="w-5 h-5 text-primary" /> <span className="text-sm font-medium">Augmented with allogenic or synthetic bone chips</span></li>
                                <li className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm border border-border/50"><Droplet className="w-5 h-5 text-primary" /> <span className="text-sm font-medium">Hydrated with cellular aspirate to enhance integration</span></li>
                            </ul>
                            <p className="text-sm font-bold text-foreground text-center bg-white py-3 rounded-xl border border-border/50">
                                This hybrid graft concept aims to optimise biologic activity while minimising procedural morbidity.
                            </p>
                        </div>

                        <div className="bg-secondary/20 border border-border rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Shield className="w-32 h-32 text-primary group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-6 relative z-10">Procedural Advantages</h3>
                            <p className="text-muted-foreground mb-8 relative z-10">Percutaneous harvesting approaches may offer:</p>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <p className="text-foreground font-medium pt-1">Reduced donor site morbidity compared with open harvesting</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <p className="text-foreground font-medium pt-1">Shorter recovery time</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <p className="text-foreground font-medium pt-1">Maintenance of sterile-field workflow</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                        <ArrowRight className="w-4 h-4 text-emerald-600" />
                                    </div>
                                    <p className="text-foreground font-medium pt-1">Reduced need for extensive graft manipulation</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRP Processing Technologies */}
            <section className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="pill mb-4">Platelet-Rich Plasma</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Platelet-Rich Plasma (PRP) Processing Technologies
                        </h2>
                        <h3 className="text-xl text-primary font-medium">Dose Matters in Biologic Therapies</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto mb-20">
                        <div className="space-y-8">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Modern PRP systems increasingly recognise that therapeutic effect depends not only on platelet concentration but on:
                            </p>

                            <ul className="grid sm:grid-cols-2 gap-4">
                                <li className="bg-background p-4 rounded-xl border border-border shadow-sm font-medium text-foreground"><ChevronRight className="inline w-4 h-4 text-primary mr-2" /> Absolute platelet dose</li>
                                <li className="bg-background p-4 rounded-xl border border-border shadow-sm font-medium text-foreground"><ChevronRight className="inline w-4 h-4 text-primary mr-2" /> Monocyte-to-neutrophil ratio</li>
                                <li className="bg-background p-4 rounded-xl border border-border shadow-sm font-medium text-foreground"><ChevronRight className="inline w-4 h-4 text-primary mr-2" /> Leukocyte composition</li>
                                <li className="bg-background p-4 rounded-xl border border-border shadow-sm font-medium text-foreground"><ChevronRight className="inline w-4 h-4 text-primary mr-2" /> Growth factor release potential</li>
                            </ul>

                            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
                                <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Highlights</h4>
                                <ul className="space-y-4 text-sm text-muted-foreground">
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Controlled capture of mononuclear cells (monocytes & lymphocytes)</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Adjustable neutrophil inclusion or depletion</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Variable platelet concentration protocols</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Closed-system processing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 relative">
                            <div className="col-span-2 bg-white rounded-3xl p-6 border-4 border-white shadow-xl flex items-center justify-center">
                                <img src={cervosTripleKeyPrp} alt="Cervos Triple KeyPRP" className="w-full max-w-[400px] h-auto object-contain" />
                            </div>
                            <div className="col-span-2 bg-secondary/50 rounded-3xl p-6 border border-border flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-left">
                                <div className="w-1/3 min-w-[120px]">
                                    <img src={cervosKeyPrp} alt="CERVOS-KEYPRP Technology" className="w-full h-auto object-contain drop-shadow-md rounded-xl mix-blend-multiply" />
                                </div>
                                <div className="w-2/3">
                                    <h5 className="font-bold text-lg text-foreground mb-3">Customisable Biologic Profiles</h5>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Advanced platforms support tailored preparations ranging from leukocyte-rich to leukocyte-reduced PRP, Conditioned plasma, and Monocyte-optimised outputs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">Density-Based Separation</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Density-based centrifugation allows precise separation and customisation of the cellular composition:
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-white border border-border rounded-xl shadow-sm">
                                    <span className="font-bold text-foreground text-sm">Platelets</span>
                                    <div className="w-4 h-4 rounded-full bg-yellow-400 opacity-80" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white border border-border rounded-xl shadow-sm">
                                    <span className="font-bold text-foreground text-sm">Agranulocytes <span className="font-normal text-muted-foreground text-xs ml-2">(monocytes & lymphocytes)</span></span>
                                    <div className="w-4 h-4 rounded-full bg-gray-200" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white border border-border rounded-xl shadow-sm">
                                    <span className="font-bold text-foreground text-sm">Granulocytes <span className="font-normal text-muted-foreground text-xs ml-2">(neutrophils)</span></span>
                                    <div className="w-4 h-4 rounded-full bg-gray-400" />
                                </div>
                                <div className="flex items-center justify-between p-3 bg-white border border-border rounded-xl shadow-sm">
                                    <span className="font-bold text-foreground text-sm">Erythrocytes</span>
                                    <div className="w-4 h-4 rounded-full bg-red-600 opacity-80" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/30 p-8 rounded-2xl border border-border relative overflow-hidden h-full flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-foreground mb-4 relative z-10">Anticoagulation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative z-10">
                                Controlled biologic processing requires appropriate anticoagulation. The <span className="font-bold text-foreground">PPS Sodium Citrate 3.13%</span> solution (10ml ampoules) is used to:
                            </p>
                            <ul className="space-y-2 text-sm text-foreground bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-border shadow-sm mb-6 relative z-10">
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Prevent premature coagulation during blood collection</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Preserve platelet integrity prior to centrifugation</li>
                                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" /> Support consistent PRP processing protocols</li>
                            </ul>
                            <div className="absolute -bottom-10 -right-10 w-2/3 opacity-30 pointer-events-none mix-blend-multiply">
                                <img src={ppsSodiumCitrate} alt="PPS Sodium Citrate" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow & IPMA Principles */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                        {/* Clinical Integration */}
                        <div>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Processing Architecture in Clinical Practice</h2>
                            <p className="text-muted-foreground mb-8">Orthobiologic technology platforms are typically integrated into Outpatient interventional clinics, Day procedure centres, and Hospital operating rooms.</p>

                            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4">Workflow Stages</h4>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">1</div>
                                    <span className="font-medium text-foreground text-sm">Autologous blood draw or marrow aspiration</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">2</div>
                                    <span className="font-medium text-foreground text-sm">Anticoagulation</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">3</div>
                                    <span className="font-medium text-foreground text-sm">Density-based centrifugation or controlled aspiration</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">4</div>
                                    <span className="font-medium text-foreground text-sm">Composition optimisation</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">5</div>
                                    <span className="font-medium text-foreground text-sm">Image-guided injection</span>
                                </div>
                            </div>

                            <div className="bg-secondary/30 border border-border p-6 rounded-2xl">
                                <h4 className="font-bold text-foreground text-sm uppercase tracking-wider mb-4 text-center pb-2 border-b border-border/50">System Design Considerations</h4>
                                <ul className="grid grid-cols-2 gap-4 text-sm text-muted-foreground font-medium text-center">
                                    <li>Closed sterile systems</li>
                                    <li>No dedicated centrifuge dependency</li>
                                    <li>Volume flexibility (20–120ml processing)</li>
                                    <li>Minimal contamination risk</li>
                                </ul>
                            </div>
                        </div>

                        {/* IPMA Emphasis */}
                        <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12 h-full flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Target className="w-32 h-32 text-primary" />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-6 relative z-10">Technology Principles Emphasised by IPMA</h2>
                            <p className="text-muted-foreground mb-8 relative z-10">Within IPMA educational programs, emphasis is placed on:</p>
                            <ul className="space-y-4 mb-10 relative z-10">
                                <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-border"><CheckCircle2 className="w-4 h-4 text-primary" /> <span className="font-medium text-sm">Biologic composition awareness</span></li>
                                <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-border"><CheckCircle2 className="w-4 h-4 text-primary" /> <span className="font-medium text-sm">Dose optimisation rather than concentration alone</span></li>
                                <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-border"><CheckCircle2 className="w-4 h-4 text-primary" /> <span className="font-medium text-sm">CFU-F relevance versus TNC counts</span></li>
                                <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-border"><CheckCircle2 className="w-4 h-4 text-primary" /> <span className="font-medium text-sm">Image-guided precision delivery</span></li>
                                <li className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-border"><CheckCircle2 className="w-4 h-4 text-primary" /> <span className="font-medium text-sm">Appropriate patient selection</span></li>
                            </ul>

                            <div className="bg-primary text-primary-foreground p-6 rounded-2xl relative z-10 shadow-md border border-white/10">
                                <h4 className="font-bold text-sm uppercase tracking-wider mb-2 opacity-90 text-center">Clinical Outcomes Depend On</h4>
                                <div className="flex flex-wrap gap-2 justify-center mt-3">
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">Indication</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">Tissue targeting</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">Composition protocol</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">Procedural accuracy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-8 md:p-12 text-center shadow-md">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                            <Dna className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">Summary</h3>
                        <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                            Orthobiologic technologies enable controlled harvesting and preparation of autologous biologic materials, supporting regenerative strategies within contemporary interventional spine and pain care.
                        </p>
                        <Link to="/procedures/orthobiologic-therapies" className="inline-flex mt-8">
                            <Button size="lg" className="rounded-full gap-2 px-8">
                                View Autologous Bio-Agengs Framework <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Orthobiologics;
