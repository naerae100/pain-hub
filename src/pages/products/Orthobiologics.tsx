import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Dna, Droplet, TestTube, Settings, Layers, Workflow, CheckCircle2, Shield, Target, Circle, MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import orthobiologicsHero from "@/assets/prp-sample-min.jpg";
import marrowAspirationLiquid from "@/assets/Marrow Aspiration Liquid Autograft.jpg";
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
                    <div className="max-w-3xl space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Orthobiologics Overview</h2>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Orthobiologic technologies support the controlled harvesting, processing, and delivery of autologous biologic materials used in interventional spine and musculoskeletal medicine.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed mb-4">These platforms are designed to optimise:</p>
                        <ul className="space-y-3 mt-4 mb-8">
                            <li className="flex items-start gap-3 text-lg text-foreground/90">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div> Cellular yield
                            </li>
                            <li className="flex items-start gap-3 text-lg text-foreground/90">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div> Biologic composition
                            </li>
                            <li className="flex items-start gap-3 text-lg text-foreground/90">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div> Platelet concentration & absolute dose
                            </li>
                            <li className="flex items-start gap-3 text-lg text-foreground/90">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div> Procedural sterility & workflow efficiency
                            </li>
                            <li className="flex items-start gap-3 text-lg text-foreground/90">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div> Reproducibility across clinical settings
                            </li>
                        </ul>
                        <p className="text-2xl lg:text-3xl font-display font-bold text-foreground leading-snug pt-4">
                            Unlike ablative or decompressive technologies, orthobiologic systems focus on biologic optimisation — preparing patient-derived cellular materials for targeted regenerative application.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bone Marrow Aspiration Technology */}
            <section className="py-20 lg:py-24 bg-secondary/30 overflow-hidden">
                <div className="section-container">

                    <div className="max-w-3xl mb-16">
                        <span className="pill mb-4">Bone Marrow Aspiration</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                            Bone Marrow Aspiration Technology
                        </h2>
                        <h3 className="text-xl text-primary font-medium mb-6">Liquid Autograft Collection Systems</h3>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Bone marrow aspiration systems used in interventional practice are designed for controlled retrieval of autologous marrow from multiple zones within the medullary space.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1 relative">
                            <div className="content-img-wrap">
                                <img src={marrowAspirationLiquid} alt="Marrow Aspiration Liquid Autograft" className="content-img" />
                            </div>
                        </div>

                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
                            <div>
                                <h4 className="font-bold text-foreground mb-4 text-xl flex flex-col">
                                    <span className="text-base text-primary uppercase tracking-wider block mb-1">Function</span>
                                    Controlled Retrieval
                                </h4>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    These systems allow clinicians to aspirate in a measured and controlled manner across a broad marrow geography, supporting improved cellular yield while maintaining procedural precision.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div>
                                    <h5 className="font-bold text-foreground text-base uppercase tracking-wider mb-4 border-b border-border pb-2">Technical Configuration</h5>
                                    <ul className="space-y-3 text-lg text-foreground/90">
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Introducer needle</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Sharp and blunt stylets</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Aspiration cannula</li>
                                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> 10 ml syringe interface</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-foreground text-base uppercase tracking-wider mb-4 border-b border-border pb-2">Gauge & Zones</h5>
                                    <div className="space-y-4">
                                        <div className="flex gap-2">
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-md text-base font-bold border border-primary/20">11G</span>
                                            <span className="bg-primary/10 text-primary px-3 py-1 rounded-md text-base font-bold border border-primary/20">13G</span>
                                        </div>
                                        <ul className="space-y-2 text-lg text-foreground/90">
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
                    <div className="mt-20 max-w-5xl">
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-foreground">Key Design Features</h3>
                            <p className="text-lg text-foreground/90 mt-2">Modern closed-end aspiration systems incorporate two important design principles:</p>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold text-foreground mb-3">1. Closed-End Needle Tip</h4>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Prevents aspiration of excess peripheral blood through the entry channel, supporting improved biologic quality and reduced dilution.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-foreground mb-3">2. Threaded Handle Guidance Mechanism</h4>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Allows controlled repositioning of the aspiration cannula within the marrow space, enabling sampling from multiple marrow zones through a single cortical entry point.
                                </p>
                            </div>
                        </div>
                        <ul className="mt-12 space-y-3">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-lg text-foreground">Reduced blood contamination</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-lg text-foreground">Improved progenitor cell yield</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-lg text-foreground">Single-entry workflow efficiency</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-lg text-foreground">Minimally invasive harvesting</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Marrow Aspiration & Cancellous Bone Graft Technologies */}
            <section className="py-20 lg:py-24">
                <div className="section-container">
                    {/* Intro + Main Image */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                        <div className="lg:col-span-7 space-y-10">
                            <div>
                                <span className="pill mb-4">Core Harvesting</span>
                                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                                    Marrow Aspiration & Cancellous Bone Graft Technologies
                                </h2>
                                <h3 className="text-xl text-primary font-medium mb-6">Liquid and Structural Autograft Integration</h3>
                                <p className="text-lg text-foreground/90 leading-relaxed border-l-4 border-border pl-4">
                                    Modern marrow aspiration and bone harvesting systems enable clinicians to combine high-quality bone marrow aspirate (BMA) with percutaneously harvested cancellous bone autograft within a single procedural workflow.
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-foreground mb-4 text-lg">This integrated approach allows the preparation of both:</p>
                                <ul className="space-y-3 mb-4">
                                    <li className="flex items-center gap-3 text-lg text-foreground/90">
                                        <Droplet className="w-5 h-5 text-primary shrink-0" />
                                        <span className="font-bold text-foreground">Cellular liquid autograft</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-lg text-foreground/90">
                                        <Layers className="w-5 h-5 text-primary shrink-0" />
                                        <span className="font-bold text-foreground">Structural cancellous bone core graft</span>
                                    </li>
                                </ul>
                                <p className="text-lg text-foreground/90 font-medium">from a minimally invasive access pathway.</p>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="content-img-wrap lg:-mt-8">
                                <img src={marrowCancellousAllThree} alt="Marrow Aspiration & Cancellous Bone Graft Setup" className="content-img" />
                            </div>
                        </div>

                    </div>

                    {/* Biological Rationale — image left, content right */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-24">
                        <div className="lg:col-span-5">
                            <div className="content-img-wrap relative">
                                <img src={marrowCancellousTip} alt="Trephine Needle Tip" className="content-img" />
                                <p className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm text-base text-left text-muted-foreground py-2 px-3 font-medium tracking-wide uppercase"></p>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6">
                            <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Biological Rationale</h3>
                            <p className="text-lg text-foreground/90 leading-relaxed">
                                Harvesting intact cancellous bone cores without disrupting highly vascularised and organised trabecular architecture preserves:
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-3 text-lg text-foreground/90">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Native microvascular networks
                                </li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Osteogenic cellular niches
                                </li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90">
                                    <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Structural integrity of the graft
                                </li>
                            </ul>
                            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                                Compared with morselised bone fragments, intact cancellous cores support more physiologic incorporation and remodeling. When combined with highly cellular marrow aspirate, this approach delivers autologous graft material with:
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-lg">
                                    <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                                    <span><span className="font-bold text-foreground">Osteoconductive properties</span> <span className="text-foreground/90">(scaffold support)</span></span>
                                </li>
                                <li className="flex items-center gap-3 text-lg">
                                    <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                                    <span><span className="font-bold text-foreground">Osteoinductive potential</span> <span className="text-foreground/90">(biologic signalling)</span></span>
                                </li>
                                <li className="flex items-center gap-3 text-lg">
                                    <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                                    <span><span className="font-bold text-foreground">Osteogenic capacity</span> <span className="text-foreground/90">(cellular contribution)</span></span>
                                </li>
                            </ul>

                            <div className="pt-6 mt-4 border-t border-border">
                                <h4 className="font-bold text-lg text-foreground mb-4">Technical Characteristics</h4>
                                <ul className="space-y-3 text-lg text-foreground/90 mb-6">
                                    <li className="flex items-center gap-3"><Circle className="w-2 h-2 text-primary" /> Bone marrow aspiration components</li>
                                    <li className="flex items-center gap-3"><Circle className="w-2 h-2 text-primary" /> Trephine-based cancellous core extraction</li>
                                    <li className="flex items-center gap-3"><Circle className="w-2 h-2 text-primary" /> Controlled repositioning mechanisms</li>
                                    <li className="flex items-center gap-3"><Circle className="w-2 h-2 text-primary" /> Single-entry access design</li>
                                </ul>
                                <p className="text-lg text-foreground/90 leading-relaxed">
                                    Cancellous bone core harvesting is commonly performed using an 8G Trephine needle, allowing extraction of intact bone cylinders through a minimally invasive approach.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Graft Integration & Advantages */}
                    <div className="mt-16 max-w-6xl mx-auto space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">Combination Graft Strategies</h3>
                            <p className="text-lg text-foreground/90 mb-6">Harvested cancellous bone cores may be:</p>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><Target className="w-5 h-5 text-primary shrink-0" /> Used alone as structural autograft</li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><Layers className="w-5 h-5 text-primary shrink-0" /> Combined with autologous marrow aspirate</li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><MoveHorizontal className="w-5 h-5 text-primary shrink-0" /> Augmented with allogenic or synthetic bone chips</li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><Droplet className="w-5 h-5 text-primary shrink-0" /> Hydrated with cellular aspirate to enhance integration</li>
                            </ul>
                            <p className="text-lg font-bold text-foreground">
                                This hybrid graft concept aims to optimise biologic activity while minimising procedural morbidity.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-6">Procedural Advantages</h3>
                            <p className="text-lg text-foreground/90 mb-6">Percutaneous harvesting approaches may offer:</p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-lg text-foreground/90">
                                    <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                                    Reduced donor site morbidity compared with open harvesting
                                </li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90">
                                    <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                                    Shorter recovery time
                                </li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90">
                                    <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                                    Maintenance of sterile-field workflow
                                </li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90">
                                    <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                                    Reduced need for extensive graft manipulation
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRP Processing Technologies */}
            <section className="py-20 lg:py-24 bg-secondary/30">
                <div className="section-container">
                    <div className="max-w-3xl mb-16">
                        <span className="pill mb-4">Platelet-Rich Plasma</span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                            Platelet-Rich Plasma (PRP) Processing Technologies
                        </h2>
                        <h3 className="text-xl text-primary font-medium">Dose Matters in Biologic Therapies</h3>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto mb-20">
                        <div className="space-y-8">
                            <p className="text-lg text-foreground/90 leading-relaxed">
                                Modern PRP systems increasingly recognise that therapeutic effect depends not only on platelet concentration but on:
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-lg text-foreground/90"><ChevronRight className="w-4 h-4 text-primary shrink-0" /> Absolute platelet dose</li>
                                <li className="flex items-center gap-2 text-lg text-foreground/90"><ChevronRight className="w-4 h-4 text-primary shrink-0" /> Monocyte-to-neutrophil ratio</li>
                                <li className="flex items-center gap-2 text-lg text-foreground/90"><ChevronRight className="w-4 h-4 text-primary shrink-0" /> Leukocyte composition</li>
                                <li className="flex items-center gap-2 text-lg text-foreground/90"><ChevronRight className="w-4 h-4 text-primary shrink-0" /> Growth factor release potential</li>
                            </ul>

                            <div>
                                <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-base">Highlights</h4>
                                <ul className="space-y-3 text-lg text-foreground/90">
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0" /> Controlled capture of mononuclear cells (monocytes & lymphocytes)</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0" /> Adjustable neutrophil inclusion or depletion</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0" /> Variable platelet concentration protocols</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0" /> Closed-system processing</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-img-wrap flex items-center justify-center">
                            <img src={cervosTripleKeyPrp} alt="Cervos Triple KeyPRP" className="content-img" />
                        </div>
                    </div>

                    {/* Customisable Biologic Profiles — standalone sub-section */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto mb-20">
                        <div className="content-img-wrap max-w-sm mx-auto lg:mx-0">
                            <img src={cervosKeyPrp} alt="CERVOS-KEYPRP Technology" className="content-img" />
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Customisable Biologic Profiles</h3>

                            <div>
                                <p className="text-lg text-foreground/90 leading-relaxed mb-4">Technical capabilities include:</p>
                                <ul className="space-y-2 text-lg text-foreground/90 pl-2">
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Leukocyte-rich PRP</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Leukocyte-reduced PRP</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Conditioned plasma</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Monocyte-optimised preparations</li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-lg text-foreground/90 leading-relaxed mb-4">Density-based centrifugation allows separation of:</p>
                                <ul className="space-y-2 text-lg text-foreground/90 pl-2">
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Platelets</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Agranulocytes (monocytes & lymphocytes)</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Granulocytes (neutrophils)</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Erythrocytes</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Anticoagulation */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h3 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Anticoagulation</h3>
                            <p className="text-xl text-foreground font-semibold leading-relaxed">
                                Controlled biologic processing requires appropriate anticoagulation.
                            </p>
                            <div>
                                <h4 className="font-bold text-foreground text-lg mb-3">PPS Sodium Citrate 3.13%</h4>
                                <p className="text-lg text-foreground/90 leading-relaxed mb-4">
                                    The PPS Sodium Citrate 3.13% solution (10ml ampoules) is used to:
                                </p>
                                <ul className="space-y-3 text-lg text-foreground/90 mb-6">
                                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div> Prevent premature coagulation during blood collection</li>
                                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div> Preserve platelet integrity prior to centrifugation</li>
                                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div> Support consistent PRP processing protocols</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-lg text-foreground/90 leading-relaxed mb-3">Available configurations include:</p>
                                <ul className="space-y-3 text-lg text-foreground/90">
                                    <li className="flex items-start gap-3"><div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div> 10 ml ampoules</li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-img-wrap">
                            <img src={ppsSodiumCitrate} alt="PPS Sodium Citrate 3.13% solution (10ml ampoules)" className="content-img" />
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
                            <p className="text-lg text-foreground/90 mb-8">Orthobiologic technology platforms are typically integrated into Outpatient interventional clinics, Day procedure centres, and Hospital operating rooms.</p>

                            <h4 className="font-bold text-foreground text-base uppercase tracking-wider mb-4">Workflow Stages</h4>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base shrink-0">1</div>
                                    <span className="text-lg text-foreground/90">Autologous blood draw or marrow aspiration</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base shrink-0">2</div>
                                    <span className="text-lg text-foreground/90">Anticoagulation</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base shrink-0">3</div>
                                    <span className="text-lg text-foreground/90">Density-based centrifugation or controlled aspiration</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base shrink-0">4</div>
                                    <span className="text-lg text-foreground/90">Composition optimisation</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-base shrink-0">5</div>
                                    <span className="text-lg text-foreground/90">Image-guided injection</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-foreground text-base uppercase tracking-wider mb-4 pb-2 border-b border-border/50">System Design Considerations</h4>
                                <ul className="space-y-3 text-lg text-foreground/90">
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Closed sterile systems</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> No dedicated centrifuge dependency</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Volume flexibility (20–120ml processing)</li>
                                    <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary shrink-0"></div> Minimal contamination risk</li>
                                </ul>
                            </div>
                        </div>

                        {/* IPMA Emphasis */}
                        <div>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Technology Principles Emphasised by IPMA</h2>
                            <p className="text-lg text-foreground/90 mb-8">Within IPMA educational programs, emphasis is placed on:</p>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Biologic composition awareness</li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Dose optimisation rather than concentration alone</li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> CFU-F relevance versus TNC counts</li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Image-guided precision delivery</li>
                                <li className="flex items-center gap-3 text-lg text-foreground/90"><CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> Appropriate patient selection</li>
                            </ul>

                            <p className="text-lg text-foreground/90 leading-relaxed">
                                <span className="font-bold text-foreground">Clinical outcomes depend on:</span> Indication, tissue targeting, composition protocol, and procedural accuracy.
                            </p>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4">Summary</h3>
                        <p className="text-lg text-foreground/90 leading-relaxed">
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
