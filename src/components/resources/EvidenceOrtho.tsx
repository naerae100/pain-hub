import React from 'react';
import EvidencePdfList from './EvidencePdfList';
import { evidenceData } from '@/data/evidence';
import { Activity, Beaker, CheckCircle2, TrendingUp, Info } from 'lucide-react';

const EvidenceOrtho = () => {
    return (
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="pill mb-6">Clinical Evidence Summary</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Platelet-based and Bone Marrow–derived Biologics
            </h2>
            <p className="text-xl text-primary font-medium mb-10">
                PRP for knee osteoarthritis: current evidence
            </p>

            {/* Overview */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm mb-12">
                <p className="text-muted-foreground leading-relaxed mb-6">
                    Platelet-rich plasma (PRP) is an autologous orthobiologic injection prepared from the patient's own blood. Current literature supports PRP as a treatment option for mild to moderate knee osteoarthritis. Across randomized trials, systematic reviews, and European consensus statements, PRP has been associated with meaningful improvements in pain and function.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <p className="text-sm font-medium text-green-800 leading-relaxed">
                        A major development in recent literature is the recognition that PRP is not one uniform treatment. Outcomes appear to depend on how the product is prepared and, importantly, on the <strong>total platelet dose delivered</strong>.
                    </p>
                </div>
            </div>

            {/* Key Findings */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" /> Dose Dependency
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Randomized and systematic-review data in knee OA suggest that higher-dose PRP protocols outperform lower-dose protocols. Positive studies often deliver around <strong>5 billion platelets or more</strong>, and some authors propose 10 billion as a threshold for more durable benefit.
                    </p>
                </div>

                <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-green-500" /> Indication Positioning
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Best-supported clinical indication is early to moderate knee OA (KL 1–3). Benefit in severe end-stage OA is less reliable. The literature suggests that leukocyte-poor or neutrophil-depleted PRP may be advantageous in knee OA to reduce inflammatory flare.
                    </p>
                </div>
            </div>

            {/* Important Caveat */}
            <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-3xl p-8 mb-12 text-center">
                <Info className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Managing Expectations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Current evidence supports PRP mainly for <strong>symptom relief and functional improvement</strong>. Claims of reliable cartilage regeneration or disease reversal are not yet proven clinically. Structural MRI or radiographic restoration remains inconsistent.
                </p>
                <p className="text-sm text-amber-800 font-medium italic">
                    PRP should not be presented as a guaranteed regenerative cure.
                </p>
            </div>

            {/* Evidence Breakdown */}
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Literature Synthesis</h3>
            <div className="space-y-4 mb-12">
                {[
                    { title: "Bansal et al. / Patel et al. (Dose Significance)", desc: "Randomized studies emphasizing absolute platelet dose (5B to 10B+ range). Strong direct evidence that more platelets delivered into the joint produce better short-term clinical outcomes." },
                    { title: "Berrigan et al., 2024 (Systematic Review)", desc: "Found that studies with significant positive outcomes at 6 months used a mean platelet dose of ~5.5 billion, while negative studies used ~2.3 billion." },
                    { title: "ESSKA-ORBIT Consensus, 2024", desc: "European expert consensus concluding sufficient evidence supports PRP for KL 1-3 knee OA. It appears clinically better than hyaluronic acid with a longer effect than corticosteroid injections." },
                    { title: "De Matthaeis et al., 2024", desc: "Retrospective series evaluating high-dose neutrophil-depleted PRP, showing ~70% responder rates with significant improvement from baseline for up to a year." }
                ].map((item, i) => (
                    <div key={i} className="bg-card border border-border rounded-xl p-5">
                        <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                        <p className="text-xs text-muted-foreground mt-2">{item.desc}</p>
                    </div>
                ))}
            </div>

            <EvidencePdfList 
                data={evidenceData.prp} 
                categories={[]} // Automatically extracts from data (they are all in the root)
                defaultCategory="All"
            />
        </div>
    );
};

export default EvidenceOrtho;
