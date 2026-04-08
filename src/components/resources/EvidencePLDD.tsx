import React from 'react';
import EvidencePdfList from './EvidencePdfList';
import { evidenceData } from '@/data/evidence';
import { CheckCircle2, FlaskConical, Target } from 'lucide-react';

const EvidencePLDD = () => {
    return (
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="pill mb-6">Clinical Evidence Summary</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                Percutaneous Laser Disc Decompression (PLDD)
            </h2>
            <p className="text-xl text-primary font-medium mb-10">
                The clinical evidence for PLDD includes randomised controlled trials, systematic reviews, and multiple cohort studies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-6 h-6 text-green-500" /> Randomised Controlled Trials
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        A multicentre randomised trial comparing PLDD with conventional microdiscectomy in patients with lumbar disc herniation demonstrated:
                    </p>
                    <ul className="space-y-2 mt-4">
                        <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0"/> Similar improvements in leg pain and disability</li>
                        <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0"/> Higher reoperation rates compared with microdiscectomy</li>
                        <li className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="w-4 h-4 text-primary shrink-0"/> ~50% of patients treated with PLDD avoided open surgery</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4">
                        These findings suggest that PLDD may serve as a less invasive step before surgical decompression in selected patients.
                    </p>
                </div>

                <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <FlaskConical className="w-6 h-6 text-purple-500" /> Systematic Reviews
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Systematic reviews report robust clinical success rates:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• <strong className="text-foreground">70–80% success</strong> in well-selected patients</li>
                        <li>• Most favourable in <strong>contained lumbar disc herniations</strong> with radicular symptoms</li>
                        <li>• Complication rates are generally low, reflecting minimally invasive nature</li>
                    </ul>
                    <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-4">
                        <p className="text-sm text-amber-800 font-medium">
                            Evidence base remains limited by heterogeneity in patient selection, technique, and laser systems used. Further high-quality RCTs are recommended.
                        </p>
                    </div>
                </div>
            </div>

            {/* Recent Clinical Studies */}
            <div className="bg-secondary/30 rounded-3xl p-8 border border-border mb-12">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" /> Recent Clinical Studies
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                    More recent studies continue to support the role of PLDD as a safe minimally invasive treatment option, demonstrating significant improvements in pain and functional outcomes in patients with lumbar disc herniation who have not responded to conservative therapy.
                </p>

                <div className="space-y-4">
                    {[
                        { title: "Brouwer et al., 2015/2017 (Spine Journal RCT)", desc: "Landmark RCT showing PLDD non-inferior to microdiscectomy overall, though observing higher resurgery rates. Surgery was avoided in 48% of PLDD-assigned patients." },
                        { title: "Singh et al., 2009/2013 (Pain Physician Reviews)", desc: "Key evidence syntheses concluding Level II-2 evidence for short- and long-term relief in contained disc herniation." },
                        { title: "Seddighi et al., 2025 (World Neurosurgery)", desc: "Prospective RCT reporting similar long-term disability/pain outcomes compared to surgery, but higher resurgery rates with PLDD." },
                        { title: "Policicchio et al., 2025 (JCM)", desc: "Modern retrospective comparative study supporting PLDD in dissatisfied patients after 90 days of conservative therapy." },
                        { title: "Gazzeri et al., 2022 (Pain Therapy)", desc: "Recent 1470nm diode laser clinical series showing 85.2% improvement by MacNab criteria at 6 months." }
                    ].map((item, i) => (
                        <div key={i} className="bg-background border border-border p-4 rounded-xl shadow-sm">
                            <h4 className="font-bold text-sm text-foreground mb-1">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <EvidencePdfList 
                data={evidenceData.pldd} 
                categories={[]} // Automatically extracts from data (they are all in the root)
                defaultCategory="All"
            />
        </div>
    );
};

export default EvidencePLDD;
