import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import imgResourcesHero from "@/assets/IPMA_Resources.png";
import {
    cryoPdfs, balloonPdfs, prpPdfs, plddPdfs,
    cryoAnatomicalAreas, cryoLevelsOfEvidence, balloonCategoryNames,
} from "@/data/evidence";

/* ───────── helpers ───────── */
const ytId = (url: string) => {
    const m = url.match(/(?:youtu\.be\/|v=)([^#&?]{11})/);
    return m ? m[1] : null;
};

/* ───────── video embed ───────── */
const YtEmbed = ({ url, title }: { url: string; title: string }) => {
    const id = ytId(url);
    if (!id) return null;
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="relative aspect-video">
                <iframe className="w-full h-full absolute inset-0"
                    src={`https://www.youtube.com/embed/${id}`} title={title} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
            </div>
            <div className="px-4 py-3 border-t border-gray-100">
                <p className="text-[13px] font-semibold text-gray-800 leading-snug">{title}</p>
            </div>
        </div>
    );
};

/* ───────── section divider ───────── */
const SectionTitle = ({ title, subtitle, id }: { icon?: React.ElementType; title: string; subtitle?: string; id?: string }) => (
    <div id={id} className="scroll-mt-28 mb-10">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 tracking-tight mb-2">{title}</h2>
        {subtitle && <p className="text-[13px] text-gray-500 max-w-3xl">{subtitle}</p>}
        <div className="h-px bg-gray-200 mt-5" />
    </div>
);

/* ───────── collapsible ───────── */
const Collapsible = ({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white">
            <button onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-gray-50/70 transition-colors text-left">
                <span className="text-[14px] font-bold text-gray-800">{title}</span>
                {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
            </button>
            {open && <div className="px-5 pb-5 border-t border-gray-100">{children}</div>}
        </div>
    );
};

/* ───────── pdf row ───────── */
const PdfRow = ({ title, badge }: { title: string; badge?: string }) => (
    <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-blue-50/40 transition-colors group">
        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
        <span className="flex-1 text-[12.5px] text-gray-700 leading-snug line-clamp-2">{title}</span>
        {badge && <span className="shrink-0 text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded whitespace-nowrap">{badge}</span>}
        <span className="text-[11px] text-gray-300 group-hover:text-primary shrink-0 transition-colors">↓</span>
    </div>
);

/* ───────── pdf library box (scrollable) ───────── */
const PdfLibrary = ({
    title,
    subtitle,
    children,
    count,
    total,
    filters,
}: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    count: number;
    total: number;
    filters?: React.ReactNode;
}) => (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm mt-5">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
                <h4 className="text-[15px] font-bold text-gray-900">{title}</h4>
                {subtitle && <p className="text-[12px] text-gray-500 mt-0.5">{subtitle}</p>}
            </div>
            <span className="text-[11px] font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded-md">
                {count} / {total}
            </span>
        </div>
        {filters && <div className="px-5 py-3 bg-gray-50/60 border-b border-gray-100">{filters}</div>}
        <div className="max-h-[380px] overflow-y-auto divide-y divide-gray-50">
            {children}
        </div>
    </div>
);

/* ───────── video tab system ───────── */
const VideoSection = ({
    tabs,
    activeTab,
    onTabChange,
    children,
}: {
    tabs: { key: string; label: string; icon?: React.ElementType; color?: string }[];
    activeTab: string;
    onTabChange: (key: string) => void;
    children: React.ReactNode;
}) => (
    <div>
        <div className="flex flex-wrap gap-1.5 mb-7 bg-gray-100 p-1 rounded-lg w-fit">
            {tabs.map(tab => (
                <button key={tab.key} onClick={() => onTabChange(tab.key)}
                    className={`px-4 py-2 rounded-md text-[12px] font-semibold transition-all ${
                        activeTab === tab.key
                            ? "bg-white text-gray-900 shadow-sm"
                            : "text-gray-500 hover:text-gray-800"
                    }`}>
                    {tab.label}
                </button>
            ))}
        </div>
        {children}
    </div>
);

/* ═══════════════════════════════════════════ */
/*                   PAGE                     */
/* ═══════════════════════════════════════════ */

const videoTabs = [
    { key: "cryo", label: "Cryoanalgesia" },
    { key: "balloon", label: "Balloon Decompression" },
    { key: "ortho", label: "Orthobiologics" },
    { key: "laser", label: "Laser (PLDD)" },
];

const Resources = () => {
    // PDF filters
    const [cryoArea, setCryoArea] = useState("All");
    const [cryoLevel, setCryoLevel] = useState("All");
    const filteredCryo = cryoPdfs.filter(p =>
        (cryoArea === "All" || p.anatomicalArea === cryoArea) &&
        (cryoLevel === "All" || p.levelOfEvidence === cryoLevel)
    );
    const [balloonCat, setBalloonCat] = useState("All");
    const filteredBalloon = balloonCat === "All" ? balloonPdfs : balloonPdfs.filter(p => p.category === balloonCat);

    // Video tabs
    const [procTab, setProcTab] = useState("cryo");
    const [animTab, setAnimTab] = useState("cryo");
    const [webTab, setWebTab] = useState("cryo");

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <PageHero
                title="Clinical Resources for Interventional Practice"
                subtitle="IPMA provides clinicians with curated educational materials designed to support procedural understanding, clinical decision-making, and safe adoption."
                image={imgResourcesHero}
            />

            {/* STICKY NAV */}
            <nav className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 overflow-x-auto">
                    <div className="flex gap-1 py-2.5 min-w-max">
                        {[
                            { label: "Clinical Evidence", href: "#evidence" },
                            { label: "Procedural Videos", href: "#videos" },
                            { label: "Animations", href: "#animations" },
                            { label: "Webinars", href: "#webinars" },
                            { label: "Frameworks", href: "#frameworks" },
                        ].map(n => (
                            <a key={n.label} href={n.href}
                                className="px-4 py-2 rounded-lg text-[13px] font-bold text-gray-500 hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap">
                                {n.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* FEATURED PROCEDURE OF THE MONTH */}
            <section className="py-14 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Featured Resource</p>
                    <h2 className="text-lg font-bold text-gray-900 mb-1">Procedure of the Month</h2>
                    <p className="text-[12px] text-gray-500 mb-6">Updated monthly — essential procedural techniques.</p>
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                        <div className="aspect-video relative">
                            <iframe className="w-full h-full absolute inset-0"
                                src={`https://www.youtube.com/embed/${ytId("https://youtu.be/NTVysvvxH1A")}`}
                                title="Procedure of the Month" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ CLINICAL EVIDENCE ═══════════ */}
            <section id="evidence" className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionTitle title="Clinical Evidence"
                        subtitle="Key publications and studies supporting interventional pain practice." />

                    {/* ── CRYO ── */}
                    <div className="mb-16">
                        <h3 className="text-[16px] font-bold text-gray-900 mb-5">
                            Cryoanalgesia & Cryoneurolysis
                        </h3>

                        <Collapsible title="Executive Summary — 155 Studies (April 2026)">
                            <p className="text-[13px] text-gray-700 leading-relaxed mt-3 mb-4">
                                The current clinical literature demonstrates a predominantly favorable evidence base for targeted cryoanalgesia and cryoneurolysis.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-2.5 mb-4">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                                    <span className="block text-xl font-bold text-primary">123 <span className="text-xs font-semibold">(79%)</span></span>
                                    <p className="text-[11px] font-semibold text-gray-600 mt-0.5">Positive outcomes</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                                    <span className="block text-xl font-bold text-amber-600">24 <span className="text-xs font-semibold">(15%)</span></span>
                                    <p className="text-[11px] font-semibold text-gray-600 mt-0.5">Mixed / neutral</p>
                                </div>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                                    <span className="block text-xl font-bold text-red-600">8 <span className="text-xs font-semibold">(5%)</span></span>
                                    <p className="text-[11px] font-semibold text-gray-600 mt-0.5">Unfavorable / cautionary</p>
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-600 border-l-2 border-primary pl-3 italic leading-relaxed">
                                Cryoanalgesia is widely supported across multiple clinical settings, though results vary depending on anatomical target, patient selection, and clinical context.
                            </p>
                        </Collapsible>

                        <Collapsible title="Anatomical Focus and Clinical Outcomes" defaultOpen={false}>
                            <div className="mt-4 space-y-4">
                                <div className="grid md:grid-cols-2 gap-3">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <p className="font-bold text-[13px] text-gray-900 mb-0.5">Thoracic & Intercostal <span className="text-primary font-semibold text-[12px]">(76 studies)</span></p>
                                        <p className="text-[12px] text-gray-600 mb-1.5">60 Pro · 9 Mixed · 7 Con</p>
                                        <p className="text-[12px] text-gray-500 leading-relaxed">Largest evidence body. Contains most cautionary reports — technique and patient selection critical.</p>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                        <p className="font-bold text-[13px] text-gray-900 mb-0.5">Knee & Orthopaedic <span className="text-primary font-semibold text-[12px]">(29 studies)</span></p>
                                        <p className="text-[12px] text-gray-600 mb-1.5">25 Pro · 4 Mixed · 0 Con</p>
                                        <p className="text-[12px] text-gray-500 leading-relaxed">Highly consistent results. Strongly supports cryoanalgesia in TKA perioperative pain management.</p>
                                    </div>
                                </div>
                                <table className="w-full text-[12px] border-collapse bg-white rounded-lg overflow-hidden border border-gray-200">
                                    <thead><tr className="bg-gray-50">
                                        <th className="py-2 px-3 text-left font-bold text-gray-800">Area</th>
                                        <th className="py-2 px-3 text-center font-bold text-gray-800">Studies</th>
                                        <th className="py-2 px-3 text-center font-semibold text-green-700">Pro</th>
                                        <th className="py-2 px-3 text-center font-semibold text-amber-700">Mix</th>
                                        <th className="py-2 px-3 text-center font-semibold text-red-700">Con</th>
                                    </tr></thead>
                                    <tbody>{[
                                        ["Low back / lumbar spine", 10, 9, 1, 0],
                                        ["Upper extremity / spasticity", 8, 8, 0, 0],
                                        ["Head / face", 6, 3, 3, 0],
                                        ["Phantom limb / amputation", 5, 4, 1, 0],
                                    ].map(([a,s,p,m,c], i) => (
                                        <tr key={i} className="border-t border-gray-100">
                                            <td className="py-2 px-3 font-medium text-gray-700">{a}</td>
                                            <td className="py-2 px-3 text-center text-gray-600">{s}</td>
                                            <td className="py-2 px-3 text-center font-semibold text-green-700">{p}</td>
                                            <td className="py-2 px-3 text-center text-amber-600">{m}</td>
                                            <td className="py-2 px-3 text-center text-red-600">{c}</td>
                                        </tr>
                                    ))}</tbody>
                                </table>
                            </div>
                        </Collapsible>

                        <Collapsible title="Quality and Levels of Evidence" defaultOpen={false}>
                            <div className="mt-3 space-y-2 text-[13px] text-gray-700 leading-relaxed">
                                <p><span className="font-bold text-gray-800">High-Level (I & II):</span> 33 studies — 25 Pro, 4 Mixed, 4 Con. Randomized trials, prospective studies, systematic reviews.</p>
                                <p><span className="font-bold text-gray-800">Observational (III & IV):</span> 82 studies — 79 Pro, 1 Mixed, 2 Con. Real-world clinical practice.</p>
                                <p><span className="font-bold text-gray-800">Expert Commentary (V):</span> 37 publications — 19 Pro, 16 Mixed, 2 Con. Protocol optimization and emerging indications.</p>
                            </div>
                        </Collapsible>

                        <Collapsible title="Overall Interpretation" defaultOpen={false}>
                            <div className="mt-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
                                <p className="text-[13px] text-gray-800 leading-relaxed">
                                    Across 155 peer-reviewed studies, cryoanalgesia is <span className="font-bold">widely studied</span>, <span className="font-bold">predominantly positive</span>, and <span className="font-bold">supported by expanding higher-quality evidence</span>. However, outcomes depend strongly on clinical indication, nerve selection, technique, and patient selection.
                                </p>
                            </div>
                        </Collapsible>

                        <PdfLibrary title="Evidence Library — Cryoanalgesia"
                            count={filteredCryo.length} total={cryoPdfs.length}
                            filters={
                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider mb-1.5 block">Anatomical Area</label>
                                        <select value={cryoArea} onChange={e => setCryoArea(e.target.value)}
                                            className="w-full h-9 px-3 rounded-lg border border-gray-300 bg-white text-[13px] text-gray-900 font-medium">
                                            <option value="All">All Areas</option>
                                            {cryoAnatomicalAreas.map(a => <option key={a} value={a}>{a}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider mb-1.5 block">Level of Evidence</label>
                                        <select value={cryoLevel} onChange={e => setCryoLevel(e.target.value)}
                                            className="w-full h-9 px-3 rounded-lg border border-gray-300 bg-white text-[13px] text-gray-900 font-medium">
                                            <option value="All">All Levels</option>
                                            {cryoLevelsOfEvidence.map(l => <option key={l} value={l}>{l}</option>)}
                                        </select>
                                    </div>
                                </div>
                            }>
                            {filteredCryo.map((p, i) => <PdfRow key={i} title={p.title} badge={`${p.anatomicalArea} · ${p.levelOfEvidence}`} />)}
                            {filteredCryo.length === 0 && <p className="text-center py-12 text-gray-400 text-[13px]">No documents match filters.</p>}
                        </PdfLibrary>
                    </div>

                    {/* ── BALLOON ── */}
                    <div className="mb-16">
                        <h3 className="text-[16px] font-bold text-gray-900 mb-5">
                            Epidural Adhesiolysis & Balloon Technologies
                        </h3>

                        <Collapsible title="Clinical Evidence Summary">
                            <div className="mt-4 space-y-4 text-[14px] text-gray-800 leading-relaxed">
                                <p>Percutaneous epidural adhesiolysis addresses epidural fibrosis by mechanically disrupting scar tissue and restoring access to the affected nerve root.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                                        <p className="font-extrabold text-gray-900 mb-2">Randomized Controlled Trials</p>
                                        <ul className="text-[13px] text-gray-700 space-y-1.5">
                                            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Significant reductions in pain scores</li>
                                            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Improved functional outcomes</li>
                                            <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Sustained benefit when repeated</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                                        <p className="font-extrabold text-gray-900 mb-2">10-Year Long-Term Follow-up</p>
                                        <p className="text-[13px] text-gray-700">A landmark 10-year RCT follow-up demonstrated sustained clinical benefit — the <span className="font-bold">longest follow-up evidence</span> available for a minimally invasive intervention in this population.</p>
                                    </div>
                                </div>
                                <p><span className="font-extrabold">Balloon catheter systems</span> enhance mechanical disruption. RCTs show greater improvements in pain and function vs conventional adhesiolysis with favorable safety.</p>
                            </div>
                        </Collapsible>

                        <PdfLibrary title="Evidence Library — Epidural Adhesiolysis"
                            count={filteredBalloon.length} total={balloonPdfs.length}
                            filters={
                                <div>
                                    <label className="text-[11px] font-extrabold text-gray-500 uppercase tracking-wider mb-1.5 block">Category</label>
                                    <select value={balloonCat} onChange={e => setBalloonCat(e.target.value)}
                                        className="w-full md:w-auto min-w-[260px] h-9 px-3 rounded-lg border border-gray-300 bg-white text-[13px] text-gray-900 font-medium">
                                        <option value="All">All Categories</option>
                                        {balloonCategoryNames.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                            }>
                            {filteredBalloon.map((p, i) => <PdfRow key={i} title={p.title} badge={p.category} />)}
                            {filteredBalloon.length === 0 && <p className="text-center py-12 text-gray-400 text-[13px]">No documents match filter.</p>}
                        </PdfLibrary>
                    </div>

                    {/* ── PRP ── */}
                    <div className="mb-16">
                        <h3 className="text-[16px] font-bold text-gray-900 mb-5">
                            Platelet-based & Bone Marrow–derived Biologics
                        </h3>

                        <Collapsible title="PRP for Knee Osteoarthritis — Current Evidence">
                            <div className="mt-4 space-y-4 text-[14px] text-gray-800 leading-relaxed">
                                <p>Current literature supports PRP as a treatment option for mild to moderate knee osteoarthritis. PRP performs better than hyaluronic acid and offers longer-lasting benefit than corticosteroid injection in many studies.</p>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                                    <p className="font-extrabold text-gray-900 mb-2">Key Insight: Dose Dependency</p>
                                    <p className="text-[13px] text-gray-700">PRP is not one uniform treatment. Outcomes depend on <span className="font-bold">total platelet dose</span> — positive studies deliver ≥5 billion platelets. Some authors propose 10 billion as a threshold for durable benefit.</p>
                                </div>
                                <p className="text-[13px] text-gray-700 font-bold italic border-l-4 border-primary pl-4">
                                    Current evidence supports symptom relief and functional improvement. Claims of reliable cartilage regeneration are not yet clinically proven. Patients should be counselled with realistic expectations.
                                </p>
                            </div>
                        </Collapsible>

                        <Collapsible title="Key Literature Synthesis" defaultOpen={false}>
                            <div className="mt-4 space-y-2">
                                {[
                                    { t: "Bansal et al., 2021", d: "~10.45B platelets, 90% recovery, zero leukocytes. Significantly better WOMAC at 12 months vs hyaluronic acid." },
                                    { t: "Patel et al., 2024 (Triple-blind RCT)", d: "2.82B vs 5.65B platelets — higher dose showed significantly better outcomes at 6 months." },
                                    { t: "Berrigan et al., 2024 (Systematic Review)", d: "Positive studies at 6 months used mean ~5.5B platelets vs ~2.3B in negative studies." },
                                    { t: "ESSKA-ORBIT Consensus, 2024", d: "Sufficient evidence supports PRP for KL 1-3 knee OA. Clinically better than HA, longer than corticosteroids." },
                                    { t: "ESSKA-ICRS RAND/UCLA, 2024", d: "PRP appropriate for ≤80yrs with KL 0-III after failure of conservative treatment; not as first-line." },
                                    { t: "De Matthaeis et al., 2024", d: "High-dose neutrophil-depleted PRP: ~70% OMERACT-OARSI responder rates at 3–12 months." },
                                ].map((r, i) => (
                                    <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                                        <p className="text-[13px] font-extrabold text-gray-900">{r.t}</p>
                                        <p className="text-[12px] text-gray-700 mt-1">{r.d}</p>
                                    </div>
                                ))}
                            </div>
                        </Collapsible>

                        <PdfLibrary title="Evidence Library — PRP & BMAC"
                            count={prpPdfs.length} total={prpPdfs.length}>
                            {prpPdfs.map((p, i) => <PdfRow key={i} title={p.title} />)}
                        </PdfLibrary>
                    </div>

                    {/* ── PLDD ── */}
                    <div className="mb-8">
                        <h3 className="text-[16px] font-bold text-gray-900 mb-5">
                            Percutaneous Laser Disc Decompression (PLDD)
                        </h3>

                        <Collapsible title="Evidence Summary">
                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                                    <p className="font-extrabold text-gray-900 mb-2">Randomised Controlled Trials</p>
                                    <ul className="text-[13px] text-gray-700 space-y-1.5">
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Similar improvements in pain vs microdiscectomy</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Higher reoperation rates with PLDD</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> ~50% of PLDD patients avoided open surgery</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                                    <p className="font-extrabold text-gray-900 mb-2">Systematic Reviews</p>
                                    <ul className="text-[13px] text-gray-700 space-y-1.5">
                                        <li>• <span className="font-bold">70–80%</span> success in well-selected patients</li>
                                        <li>• Most favorable in contained lumbar disc herniations</li>
                                        <li>• Complication rates generally low</li>
                                    </ul>
                                </div>
                            </div>
                        </Collapsible>

                        <Collapsible title="Key Literature" defaultOpen={false}>
                            <div className="mt-4 space-y-2">
                                {[
                                    { t: "Brouwer et al., 2015/2017 (Landmark RCT)", d: "Non-inferiority trial. Surgery avoided in 48% of PLDD patients. 2-year resurgery: 52% PLDD vs 21% surgery." },
                                    { t: "Singh et al., 2009/2013 (Pain Physician)", d: "Level II-2 evidence for short- and long-term relief in contained disc herniation." },
                                    { t: "Seddighi et al., 2025 (World Neurosurgery RCT)", d: "84 patients: similar long-term outcomes but higher resurgery with PLDD." },
                                    { t: "Gazzeri et al., 2022 (Pain Therapy)", d: "1470nm diode laser: 85.2% improvement by MacNab criteria at 6 months." },
                                    { t: "Radoš et al., 2023 (Systematic Review)", d: "PLDD safe and effective; further prospective RCTs needed." },
                                ].map((r, i) => (
                                    <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                                        <p className="text-[13px] font-extrabold text-gray-900">{r.t}</p>
                                        <p className="text-[12px] text-gray-700 mt-1">{r.d}</p>
                                    </div>
                                ))}
                            </div>
                        </Collapsible>

                        <PdfLibrary title="Evidence Library — PLDD"
                            count={plddPdfs.length} total={plddPdfs.length}>
                            {plddPdfs.map((p, i) => <PdfRow key={i} title={p.title} />)}
                        </PdfLibrary>
                    </div>
                </div>
            </section>

            {/* ═══════════ PROCEDURAL VIDEOS ═══════════ */}
            <section id="videos" className="py-20 bg-white border-y border-gray-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionTitle title="Procedural Videos"
                        subtitle="Image-guided interventional techniques captured in clinical and cadaveric settings." />
                    <VideoSection tabs={videoTabs} activeTab={procTab} onTabChange={setProcTab}>
                        {procTab === "cryo" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <YtEmbed url="https://youtu.be/NTVysvvxH1A" title="Cryoanalgesia Procedure — Elfekky" />
                                <YtEmbed url="https://youtu.be/DnX0npQEdCM" title="Cryoanalgesia SIJ — Cadaver Hands-on" />
                            </div>
                        )}
                        {procTab === "balloon" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <YtEmbed url="https://youtu.be/aHqcbCPtY5o" title="ZiNeu Procedure" />
                            </div>
                        )}
                        {procTab === "ortho" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <YtEmbed url="https://youtu.be/6yRR5Swe4Eg" title="Dr Baumgartner — Shoulder Procedure" />
                            </div>
                        )}
                        {procTab === "laser" && (
                            <p className="text-[14px] text-gray-500 py-8">Procedural videos for PLDD coming soon.</p>
                        )}
                    </VideoSection>
                </div>
            </section>

            {/* ═══════════ ANIMATIONS ═══════════ */}
            <section id="animations" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionTitle title="Animations & Mechanism of Action"
                        subtitle="Supports clinician education and patient communication." />
                    <VideoSection tabs={videoTabs} activeTab={animTab} onTabChange={setAnimTab}>
                        {animTab === "cryo" && (
                            <div className="grid md:grid-cols-2 gap-6">
                                <YtEmbed url="https://youtu.be/ozs8EcJLqGc" title="Cryoanalgesia — Overview Animation" />
                            </div>
                        )}
                        {animTab === "balloon" && (
                            <div className="grid md:grid-cols-2 gap-6">
                                <YtEmbed url="https://youtu.be/5JN9ktthQsc" title="Balloon Decompression — MOA Animation" />
                            </div>
                        )}
                        {animTab === "ortho" && (
                            <p className="text-[14px] text-gray-500 py-8">Biologics MOA animation coming soon.</p>
                        )}
                        {animTab === "laser" && (
                            <p className="text-[14px] text-gray-500 py-8">Laser MOA animation coming soon.</p>
                        )}
                    </VideoSection>
                </div>
            </section>

            {/* ═══════════ WEBINARS ═══════════ */}
            <section id="webinars" className="py-20 bg-white border-y border-gray-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionTitle title="Webinars & Expert Talks"
                        subtitle="On-demand education from leading interventional pain specialists." />
                    <VideoSection tabs={[videoTabs[0], videoTabs[1]]} activeTab={webTab} onTabChange={setWebTab}>
                        {webTab === "cryo" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <YtEmbed url="https://youtu.be/8TwRFLcKPSU" title="Cryoanalgesia Webinar — Elfekky" />
                                <YtEmbed url="https://youtu.be/gCyOg4VZo5o" title="Foot & Ankle Cryoanalgesia — Dr Brian Allen" />
                                <YtEmbed url="https://youtu.be/swu2p9QWiLg" title="Expert Panel — Dr Schwartz & Motov" />
                                <YtEmbed url="https://youtu.be/UugEHfh1Z_E" title="Cryoanalgesia Talk — Patel" />
                            </div>
                        )}
                        {webTab === "balloon" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <YtEmbed url="https://youtu.be/V8Ttj4u8bm0" title="ZiNeu Presentation" />
                                <YtEmbed url="https://youtu.be/-mbFyDGhx3E" title="Epimed Adhesiolysis Webinar" />
                            </div>
                        )}
                    </VideoSection>
                </div>
            </section>

            {/* ═══════════ FRAMEWORKS ═══════════ */}
            <section id="frameworks" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionTitle title="Treatment Frameworks" />
                    <div className="max-w-lg">
                        <YtEmbed url="https://youtu.be/-PynquMfd0M" title="Cryo vs RFA — Dr Filipovski" />
                    </div>
                </div>
            </section>

            {/* ═══════════ EXPLORE ═══════════ */}
            <section className="py-20 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <SectionTitle title="Explore the Library" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {[
                            { label: "FAQ's", to: "/faq" },
                            { label: "Video Library", to: "/video-library" },
                            { label: "Research", to: "/research" },
                            { label: "Education", to: "/educational-materials" },
                        ].map(link => (
                            <Link key={link.label} to={link.to}
                                className="group flex items-center justify-center gap-2 p-5 bg-gray-50 border border-gray-100 rounded-xl hover:border-primary hover:shadow-sm transition-all text-center">
                                <span className="text-[13px] font-bold text-gray-800 group-hover:text-primary transition-colors">{link.label}</span>
                                <span className="text-primary text-sm group-hover:translate-x-0.5 transition-transform">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
