import React from 'react';
import EvidencePdfList from './EvidencePdfList';
import { evidenceData } from '@/data/evidence';
import { CheckCircle2, Award, Clock, ArrowRightCircle } from 'lucide-react';

const EvidenceBalloon = () => {
    return (
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="pill mb-6">Clinical Evidence Summary</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Epidural Adhesiolysis and Balloon Catheter Technologies
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Chronic lumbar radicular pain and spinal stenosis remain significant clinical challenges. Epidural fibrosis and adhesions can limit the effectiveness of epidural injections and contribute to persistent nerve root irritation. Percutaneous epidural adhesiolysis was developed to address this problem by mechanically disrupting epidural scar tissue.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-green-500" /> Randomized Controlled Trials
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Multiple RCTs demonstrate that catheter-based epidural adhesiolysis provides clinically meaningful pain relief and functional improvement in patients with chronic lumbar radicular pain.
                    </p>
                    <ul className="space-y-2 mt-4">
                        <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0"/> Significant reductions in pain scores</li>
                        <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0"/> Improved functional outcomes</li>
                        <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0"/> Sustained benefit when procedures repeated</li>
                    </ul>
                </div>

                <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <Clock className="w-6 h-6 text-amber-500" /> Long-Term Outcomes
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        A landmark 10-year follow-up of a randomized placebo-controlled trial demonstrated sustained clinical benefit following percutaneous epidural neurolysis.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                        <p className="text-sm text-amber-800 font-medium italic">
                            Importantly, this represents the longest follow-up evidence available for a minimally invasive intervention in this patient population.
                        </p>
                    </div>
                </div>
            </div>

            {/* Systematic Reviews & Advances */}
            <div className="bg-secondary/30 rounded-3xl p-8 border border-border mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4">Systematic Reviews</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Systematic reviews conclude there is moderate to strong evidence supporting the use of epidural adhesiolysis in selected patients who:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Have persistent symptoms despite conservative therapy</li>
                            <li>• Have epidural fibrosis or adhesions limiting medication spread</li>
                            <li>• May otherwise be considered for invasive interventions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-purple-500" /> Balloon Catheter Technology
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Traditional adhesiolysis techniques rely on catheter manipulation and chemical lysis. Balloon systems enhance the mechanical disruption of epidural fibrosis and improve decompression of the epidural space. RCTs comparing balloon-assisted to conventional report greater improvements in pain and functional outcomes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Summary Banner */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Summary</h3>
                <p className="text-primary-foreground/90 font-medium mb-4">
                    Current evidence indicates that epidural adhesiolysis is a clinically validated technique for chronic lumbar radicular pain. RCTs show significant improvements, with follow-ups showing durable benefit up to 10 years. Balloon catheter technology may further enhance mechanical lysis.
                </p>
            </div>

            <EvidencePdfList 
                data={evidenceData.balloon} 
                categories={[
                    "01 Systematic Reviews",
                    "02 Randomized Controlled Trials",
                    "03 Balloon Catheter Studies",
                    "04 Adhesiolysis Evidence (General)",
                    "06 Technical Procedural Studies",
                    "07 Patient Selection Predictors",
                    "08 Specific Pathologies",
                    "09 Case Reports",
                    "10 Health Economics",
                    "99 Unsorted"
                ]}
                defaultCategory="All"
            />
        </div>
    );
};

export default EvidenceBalloon;
