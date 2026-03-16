import React from 'react';
import EvidencePdfList from './EvidencePdfList';
import { evidenceData } from '@/data/evidence';
import { CheckCircle2, AlertTriangle, Info, Microscope } from 'lucide-react';

const EvidenceCryo = () => {
    return (
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <span className="pill mb-6">Clinical Evidence Summary</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                State of the Evidence: Cryoanalgesia & Cryoneurolysis
            </h2>
            <p className="text-xl text-primary font-medium mb-10">
                An evidence-based synthesis of 155 peer-reviewed clinical studies (April 2026)
            </p>

            {/* Executive Summary */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-sm mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Executive Summary</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                    The current clinical literature demonstrates a predominantly favorable evidence base for targeted cryoanalgesia and cryoneurolysis. Based on a structured review of 155 published clinical studies, trials, and evidence syntheses:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                        <span className="block text-4xl font-bold text-green-600 mb-2">123</span>
                        <p className="text-sm text-green-800 font-medium">Studies (79%) report positive clinical outcomes</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
                        <span className="block text-4xl font-bold text-amber-600 mb-2">24</span>
                        <p className="text-sm text-amber-800 font-medium">Studies (15%) report mixed or neutral findings</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
                        <span className="block text-4xl font-bold text-red-600 mb-2">8</span>
                        <p className="text-sm text-red-800 font-medium">Studies (5%) report unfavorable or cautionary outcomes</p>
                    </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                    These findings indicate that cryoanalgesia is widely supported across multiple clinical settings, though results vary depending on anatomical target, patient selection, and clinical context.
                </p>
            </div>

            {/* Anatomical Focus */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Anatomical Focus and Clinical Outcomes</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                    Cryoanalgesia has been investigated across multiple anatomical regions. The literature demonstrates several distinct patterns:
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                        <h4 className="text-lg font-bold text-foreground mb-2">Thoracic & Intercostal</h4>
                        <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-md mb-4">76 studies</span>
                        <p className="text-sm text-muted-foreground mb-4">
                            This represents the largest body of evidence in the database and includes applications in thoracotomy, chest wall surgery, rib fractures, and thoracic postoperative pain.
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium">
                            <span className="text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> 60 Pro</span>
                            <span className="text-amber-600 flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> 9 Mixed</span>
                            <span className="text-red-500 flex items-center gap-1"><Info className="w-4 h-4"/> 7 Con</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4 italic">
                            While the majority demonstrates favorable outcomes, this region contains most of the cautionary reports, suggesting technique and patient selection are critical.
                        </p>
                    </div>

                    <div className="bg-background border border-border rounded-2xl p-6 shadow-sm">
                        <h4 className="text-lg font-bold text-foreground mb-2">Knee & Orthopaedic</h4>
                        <span className="inline-block text-xs font-bold bg-primary/10 text-primary px-2 py-1 rounded-md mb-4">29 studies</span>
                        <p className="text-sm text-muted-foreground mb-4">
                            Cryoneurolysis in orthopaedics—particularly in total knee arthroplasty (TKA) pathways—demonstrates highly consistent results, strongly supporting it as a component of perioperative pain management.
                        </p>
                        <div className="flex items-center gap-4 text-sm font-medium mt-auto">
                            <span className="text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> 25 Pro</span>
                            <span className="text-amber-600 flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> 4 Mixed</span>
                            <span className="text-red-500 flex items-center gap-1"><Info className="w-4 h-4"/> 0 Con</span>
                        </div>
                    </div>
                </div>

                {/* Other areas table */}
                <h4 className="text-lg font-bold text-foreground mb-4">Spine and Peripheral Applications</h4>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse bg-background rounded-xl overflow-hidden border border-border">
                        <thead>
                            <tr className="bg-secondary/50">
                                <th className="py-3 px-4 text-left font-bold text-foreground">Anatomical area</th>
                                <th className="py-3 px-4 text-center font-bold text-foreground">Studies</th>
                                <th className="py-3 px-4 text-center font-bold text-green-600">Pro</th>
                                <th className="py-3 px-4 text-center font-bold text-amber-600">Mixed</th>
                                <th className="py-3 px-4 text-center font-bold text-red-600">Con</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { area: "Low back / lumbar spine", studies: 10, pro: 9, mixed: 1, con: 0 },
                                { area: "Upper extremity / spasticity", studies: 8, pro: 8, mixed: 0, con: 0 },
                                { area: "Phantom limb / amputation", studies: 5, pro: 4, mixed: 1, con: 0 },
                                { area: "Head / face", studies: 6, pro: 3, mixed: 3, con: 0 },
                            ].map((row, i) => (
                                <tr key={i} className="border-t border-border">
                                    <td className="py-3 px-4 font-medium text-foreground">{row.area}</td>
                                    <td className="py-3 px-4 text-center text-muted-foreground">{row.studies}</td>
                                    <td className="py-3 px-4 text-center font-medium text-green-600">{row.pro}</td>
                                    <td className="py-3 px-4 text-center text-amber-600">{row.mixed}</td>
                                    <td className="py-3 px-4 text-center text-red-500">{row.con}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Performance by Clinical Context */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Performance by Clinical Context</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-2">Postoperative Pain</h4>
                        <p className="text-xs text-muted-foreground mb-3">Most common clinical use case.</p>
                        <div className="text-sm space-y-1 mb-4">
                            <div className="flex justify-between"><span className="text-green-600">Pro</span><span className="font-bold">39</span></div>
                            <div className="flex justify-between"><span className="text-amber-600">Mixed</span><span className="font-bold">6</span></div>
                            <div className="flex justify-between"><span className="text-red-500">Con</span><span className="font-bold">4</span></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Many report meaningful reductions in pain, though protocol standardization is determinant.</p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-2">Chronic Pain & Functional</h4>
                        <p className="text-xs text-muted-foreground mb-3">Spasticity, lumbar, neuroma.</p>
                        <div className="text-sm space-y-1 mb-4">
                            <div className="flex justify-between"><span className="text-green-600">Pro</span><span className="font-bold">15</span></div>
                            <div className="flex justify-between"><span className="text-amber-600">Mixed</span><span className="font-bold">1</span></div>
                            <div className="flex justify-between"><span className="text-red-500">Con</span><span className="font-bold">0</span></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Strong potential for long-term pain and functional management settings.</p>
                    </div>

                    <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="font-bold text-foreground mb-2">Trauma & Acute Pain</h4>
                        <p className="text-xs text-muted-foreground mb-3">Rib fractures, acute chest wall.</p>
                        <div className="text-sm space-y-1 mb-4">
                            <div className="flex justify-between"><span className="text-green-600">Pro</span><span className="font-bold">13</span></div>
                            <div className="flex justify-between"><span className="text-amber-600">Mixed</span><span className="font-bold">4</span></div>
                            <div className="flex justify-between"><span className="text-red-500">Con</span><span className="font-bold">3</span></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Recent studies show outcomes may be more variable; appropriate timing is key.</p>
                    </div>
                </div>
            </div>

            {/* Quality and Levels of Evidence */}
            <div className="mb-12 bg-secondary/30 rounded-3xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Quality and Levels of Evidence</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-bold text-foreground">High-Level Evidence (Levels I & II)</h4>
                        <p className="text-sm text-muted-foreground mb-2">33 studies (25 Pro, 4 Mixed, 4 Con). Includes randomized trials, prospective comparative studies, and systematic reviews.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground">Observational Clinical Evidence (Levels III & IV)</h4>
                        <p className="text-sm text-muted-foreground mb-2">82 studies (79 Pro, 1 Mixed, 2 Con). Reflects real-world clinical practice, covering diverse surgical and pain settings.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-foreground">Expert Commentary & Reviews (Level V)</h4>
                        <p className="text-sm text-muted-foreground">37 publications (19 Pro, 16 Mixed, 2 Con). Focus on protocol optimization, technique, and emerging indications.</p>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Overall Interpretation</h3>
                <p className="text-primary-foreground/90 font-medium mb-4">
                    Across 155 peer-reviewed studies, the available literature indicates that cryoanalgesia is widely studied, predominantly associated with positive clinical outcomes, and supported by an expanding base of higher-quality evidence.
                </p>
                <p className="text-primary-foreground/90 text-sm">
                    However, outcomes depend strongly on clinical indication, nerve selection and targeting, procedural technique, and patient selection.
                </p>
            </div>

            <EvidencePdfList 
                data={evidenceData.cryo} 
                categories={[
                    "Thorax_chest wall_intercostal",
                    "Knee",
                    "Mixed _ general",
                    "Low back_lumbar spine",
                    "Upper extremity _ spasticity",
                    "Head_face",
                    "Phantom limb _ amputation",
                    "Shoulder",
                    "Oncology-related pain"
                ]}
                defaultCategory="All"
            />
        </div>
    );
};

export default EvidenceCryo;
