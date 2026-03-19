import React, { useState } from "react";
import { 
    ChevronDown, ChevronUp, FileText, Video, PlaySquare, MonitorPlay, Cast, LayoutGrid, Search,
    Snowflake, Minimize2, Dna, Zap, X, ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import imgResourcesHero from "@/assets/IPMA_Resources.png";
import {
    cryoPdfs, balloonPdfs, prpPdfs, plddPdfs,
    cryoAnatomicalAreas, cryoLevelsOfEvidence, balloonCategoryNames,
} from "@/data/evidence";
import { researchData } from "@/data/research";

/* ───────── helpers ───────── */
const ytId = (url: string) => {
    const m = url.match(/(?:youtu\.be\/|v=)([^#&?]{11})/);
    return m ? m[1] : null;
};

/* ───────── media modal ───────── */
const MediaModal = ({
    isOpen,
    onClose,
    title,
    mediaUrl,
    type // 'pdf' | 'video'
}: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    mediaUrl: string;
    type: 'pdf' | 'video';
}) => {
    if (!isOpen || !mediaUrl) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 !m-0">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh] md:h-[90vh] animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-lg font-bold text-gray-900 truncate pr-4">{title}</h3>
                    <button onClick={onClose} className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors shrink-0">
                        <X className="w-5 h-5 text-gray-700" />
                    </button>
                </div>
                <div className="flex-1 w-full bg-gray-100 relative">
                    <iframe
                        src={mediaUrl}
                        className="w-full h-full border-0 absolute inset-0"
                        title={title}
                        allow={type === 'video' ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" : undefined}
                        allowFullScreen={type === 'video'}
                    />
                </div>
            </div>
        </div>
    );
};

/* ───────── video card ───────── */
const YtEmbedCard = ({ url, title, onClick }: { url: string; title: string; onClick: () => void }) => {
    const id = ytId(url);
    if (!id) return null;
    return (
        <button 
            onClick={onClick}
            className="group w-full text-left bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col"
        >
            <div className="relative aspect-video bg-gray-100 overflow-hidden w-full">
                <img 
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <PlaySquare className="w-6 h-6 text-primary ml-1" />
                    </div>
                </div>
            </div>
            <div className="px-5 py-4 border-t border-gray-100 bg-white flex-1">
                <p className="text-[15px] font-bold text-gray-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">{title}</p>
            </div>
        </button>
    );
};

/* ───────── section divider ───────── */
const SectionTitle = ({ title, subtitle, id, icon: Icon }: { icon?: React.ElementType; title: string; subtitle?: string; id?: string }) => (
    <div id={id} className="scroll-mt-28 mb-10">
        <div className="flex items-center gap-3 mb-2">
            {Icon && <Icon className="w-6 h-6 text-primary" />}
            <h2 className="text-xl lg:text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
        </div>
        {subtitle && <p className="text-[14px] text-gray-500 max-w-3xl ml-0 md:ml-9 mt-1">{subtitle}</p>}
        <div className="h-px bg-gray-200 mt-6" />
    </div>
);

/* ───────── pdf card ───────── */
const PdfCard = ({ title, badge, onClick }: { title: string; badge?: string; onClick: () => void }) => (
    <button 
        onClick={onClick}
        className="text-left group flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5 bg-white border border-gray-200 rounded-xl hover:border-primary/50 hover:shadow-lg hover:bg-primary/[0.02] transition-all relative overflow-hidden"
    >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/0 group-hover:bg-primary transition-colors" />
        <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 border border-red-100 group-hover:scale-110 transition-transform shadow-sm">
            <FileText className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0 w-full">
            <h4 className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 pr-2">
                {title}
            </h4>
            {badge && (
                <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-gray-100 text-gray-600 border border-gray-200">
                    {badge}
                </span>
            )}
        </div>
        <div className="hidden sm:flex w-9 h-9 rounded-full bg-gray-50 items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white text-gray-400 transition-colors border border-gray-100">
            <ExternalLink className="w-4 h-4 ml-0.5" />
        </div>
    </button>
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
    <div className="bg-white border flex flex-col border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-5">
        <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center gap-4 justify-between bg-gray-50/50">
            <div>
                <h4 className="text-lg font-bold text-gray-900">{title}</h4>
                {subtitle && <p className="text-[13px] text-gray-500 mt-1">{subtitle}</p>}
            </div>
            <span className="text-[12px] font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg whitespace-nowrap self-start sm:self-auto">
                {count} / {total} Documents
            </span>
        </div>
        {filters && <div className="px-6 py-4 bg-gray-50/80 border-b border-gray-200">{filters}</div>}
        <div className="max-h-[550px] overflow-y-auto p-4 sm:p-6 bg-gray-50/30">
            <div className="grid lg:grid-cols-2 gap-4">
                {children}
            </div>
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
        <div className="flex flex-wrap gap-1.5 mb-7 bg-gray-100 p-1.5 rounded-xl w-fit">
            {tabs.map(tab => (
                <button key={tab.key} onClick={() => onTabChange(tab.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-all ${
                        activeTab === tab.key
                            ? "bg-white text-primary shadow-sm"
                            : "text-gray-500 hover:text-gray-800 hover:bg-black/5"
                    }`}>
                    {tab.icon && <tab.icon className="w-4 h-4" />}
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
    { key: "cryo", label: "Cryoanalgesia", icon: Snowflake },
    { key: "balloon", label: "Balloon Decompression", icon: Minimize2 },
    { key: "ortho", label: "Orthobiologics", icon: Dna },
    { key: "laser", label: "Laser (PLDD)", icon: Zap },
];

const Resources = () => {
    // Media Viewer State
    const [activeMedia, setActiveMedia] = useState<{ url: string; title: string; type: 'pdf' | 'video' } | null>(null);

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

    const openPdf = (pdf: { title: string; relativePath: string }) => {
        // Enforce URL encoding for paths with spaces and special characters
        const safeUrl = "/" + pdf.relativePath.split('/').map(segment => encodeURIComponent(segment)).join('/');
        setActiveMedia({ url: safeUrl, title: pdf.title, type: 'pdf' });
    };

    const openVideo = (url: string, title: string) => {
        const id = ytId(url);
        if(id) {
            setActiveMedia({ url: `https://www.youtube.com/embed/${id}?autoplay=1`, title, type: 'video' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <PageHero
                title="Clinical Resources for Interventional Practice"
                subtitle="IPMA provides clinicians with curated educational materials designed to support procedural understanding, clinical decision-making, and safe adoption."
                image={imgResourcesHero}
                breadcrumbs={[{ label: "Resources" }]}
            />

            <MediaModal 
                isOpen={!!activeMedia}
                onClose={() => setActiveMedia(null)}
                title={activeMedia?.title || ""}
                mediaUrl={activeMedia?.url || ""}
                type={activeMedia?.type || 'pdf'}
            />

            {/* STICKY NAV */}
            <nav className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 overflow-x-auto">
                    <div className="flex gap-1 py-3 min-w-max">
                        {[
                            { label: "Clinical Evidence", href: "#evidence" },
                            { label: "Procedural Videos", href: "#videos" },
                            { label: "Animations", href: "#animations" },
                            { label: "Webinars", href: "#webinars" },
                            { label: "Frameworks", href: "#frameworks" },
                        ].map(n => (
                            <a key={n.label} href={n.href}
                                className="px-5 py-2.5 rounded-lg text-[14px] font-bold text-gray-600 hover:text-primary hover:bg-primary/5 transition-all whitespace-nowrap">
                                {n.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* FEATURED PROCEDURE OF THE MONTH */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <p className="text-[11px] font-extrabold text-primary uppercase tracking-[0.2em] mb-3">Featured Resource</p>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Procedure of the Month</h2>
                    <p className="text-[14px] text-gray-500 mb-8">Updated monthly — extreme precision techniques and new practices.</p>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl max-w-3xl mx-auto">
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
            <section id="evidence" className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <SectionTitle icon={FileText} title="Clinical Evidence"
                        subtitle="Key publications and studies supporting interventional pain practice." />

                    {/* ── CRYO ── */}
                    <div className="mb-20">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 block border-l-4 border-primary pl-4">
                            Cryoanalgesia & Cryoneurolysis
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-2xl text-[15px] leading-relaxed ml-5">
                            Access the latest clinical studies, anatomical focus reports, and quality of evidence reviews for Cryoanalgesia.
                        </p>

                        <PdfLibrary title="Evidence Library — Cryoanalgesia"
                            count={filteredCryo.length} total={cryoPdfs.length}
                            filters={
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[11px] font-extrabold text-gray-600 uppercase tracking-wider mb-2 block">Anatomical Area</label>
                                        <select value={cryoArea} onChange={e => setCryoArea(e.target.value)}
                                            className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-[14px] text-gray-900 font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm">
                                            <option value="All">All Areas</option>
                                            {cryoAnatomicalAreas.map(a => <option key={a} value={a}>{a}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-extrabold text-gray-600 uppercase tracking-wider mb-2 block">Level of Evidence</label>
                                        <select value={cryoLevel} onChange={e => setCryoLevel(e.target.value)}
                                            className="w-full h-11 px-4 rounded-xl border border-gray-300 bg-white text-[14px] text-gray-900 font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm">
                                            <option value="All">All Levels</option>
                                            {cryoLevelsOfEvidence.map(l => <option key={l} value={l}>{l}</option>)}
                                        </select>
                                    </div>
                                </div>
                            }>
                            {filteredCryo.map((p, i) => <PdfCard key={i} title={p.title} badge={`${p.anatomicalArea} · ${p.levelOfEvidence}`} onClick={() => openPdf(p)} />)}
                            {filteredCryo.length === 0 && <p className="col-span-full text-center py-16 text-gray-400 text-[14px] font-medium bg-white rounded-xl border border-dashed border-gray-200">No documents match the selected filters.</p>}
                        </PdfLibrary>
                    </div>

                    {/* ── BALLOON ── */}
                    <div className="mb-20">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 block border-l-4 border-primary pl-4">
                            Epidural Adhesiolysis & Balloon Technologies
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-2xl text-[15px] leading-relaxed ml-5">
                            Access the latest clinical studies and balloon technologies documentation.
                        </p>

                        <PdfLibrary title="Evidence Library — Epidural Adhesiolysis"
                            count={filteredBalloon.length} total={balloonPdfs.length}
                            filters={
                                <div>
                                    <label className="text-[11px] font-extrabold text-gray-600 uppercase tracking-wider mb-2 block">Category</label>
                                    <select value={balloonCat} onChange={e => setBalloonCat(e.target.value)}
                                        className="w-full md:w-auto min-w-[300px] h-11 px-4 rounded-xl border border-gray-300 bg-white text-[14px] text-gray-900 font-bold focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm">
                                        <option value="All">All Categories</option>
                                        {balloonCategoryNames.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                            }>
                            {filteredBalloon.map((p, i) => <PdfCard key={i} title={p.title} badge={p.category} onClick={() => openPdf(p)} />)}
                            {filteredBalloon.length === 0 && <p className="col-span-full text-center py-16 text-gray-400 text-[14px] font-medium bg-white rounded-xl border border-dashed border-gray-200">No documents match filter.</p>}
                        </PdfLibrary>
                    </div>

                    {/* ── PRP ── */}
                    <div className="mb-20">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 block border-l-4 border-primary pl-4">
                            Platelet-based & Bone Marrow–derived Biologics
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-2xl text-[15px] leading-relaxed ml-5">
                            Access the latest clinical studies and literature for Platelet-based & Bone Marrow–derived Biologics.
                        </p>

                        <PdfLibrary title="Evidence Library — PRP & BMAC"
                            count={prpPdfs.length} total={prpPdfs.length}>
                            {prpPdfs.map((p, i) => <PdfCard key={i} title={p.title} onClick={() => openPdf(p)} />)}
                        </PdfLibrary>
                    </div>

                    {/* ── PLDD ── */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 block border-l-4 border-primary pl-4">
                            Percutaneous Laser Disc Decompression (PLDD)
                        </h3>
                        <p className="text-gray-500 mb-6 max-w-2xl text-[15px] leading-relaxed ml-5">
                            Access the latest clinical studies and literature for Percutaneous Laser Disc Decompression.
                        </p>

                        <PdfLibrary title="Evidence Library — PLDD"
                            count={plddPdfs.length} total={plddPdfs.length}>
                            {plddPdfs.map((p, i) => <PdfCard key={i} title={p.title} onClick={() => openPdf(p)} />)}
                        </PdfLibrary>
                    </div>

                    {/* ── CLINICAL LITERATURE (from Research data) ── */}
                    <div className="mb-8 mt-20">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 block border-l-4 border-primary pl-4">
                            Selected Clinical Literature & Publications
                        </h3>
                        <p className="text-gray-500 mb-8 max-w-2xl text-[15px] leading-relaxed ml-5">
                            A curated selection of key peer-reviewed studies and trials supporting our interventional techniques.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6 pl-5">
                            {Object.entries(researchData).map(([category, items]) => (
                                <div key={category} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                    <h4 className="text-sm font-extrabold text-primary uppercase tracking-widest mb-4">
                                        {category === "cryo" ? "Cryoanalgesia" :
                                         category === "thoracic" ? "Thoracic" :
                                         category === "spasticity" ? "Spasticity" : 
                                         "Additional Anatomical Regions"}
                                    </h4>
                                    <div className="flex flex-col gap-5">
                                        {items.map((item) => (
                                            <div key={item.id} className="group border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                                                <p className="text-[14px] font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-primary transition-colors">
                                                    {item.title}
                                                </p>
                                                <p className="text-[12px] text-gray-500">
                                                    <span className="font-semibold text-gray-700">{item.author}</span>
                                                    <span className="mx-1.5 text-gray-300">•</span>
                                                    <span className="italic">{item.journal}</span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════ PROCEDURAL VIDEOS ═══════════ */}
            <section id="videos" className="py-24 bg-white border-y border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <SectionTitle icon={Video} title="Procedural Videos"
                        subtitle="Image-guided interventional techniques captured in clinical and cadaveric settings." />
                    <VideoSection tabs={videoTabs} activeTab={procTab} onTabChange={setProcTab}>
                        {procTab === "cryo" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <YtEmbedCard url="https://youtu.be/NTVysvvxH1A" title="Cryoanalgesia Procedure — Elfekky" onClick={() => openVideo("https://youtu.be/NTVysvvxH1A", "Cryoanalgesia Procedure — Elfekky")} />
                                <YtEmbedCard url="https://youtu.be/DnX0npQEdCM" title="Cryoanalgesia SIJ — Cadaver Hands-on" onClick={() => openVideo("https://youtu.be/DnX0npQEdCM", "Cryoanalgesia SIJ — Cadaver Hands-on")} />
                            </div>
                        )}
                        {procTab === "balloon" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <YtEmbedCard url="https://youtu.be/aHqcbCPtY5o" title="ZiNeu Procedure" onClick={() => openVideo("https://youtu.be/aHqcbCPtY5o", "ZiNeu Procedure")} />
                            </div>
                        )}
                        {procTab === "ortho" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <YtEmbedCard url="https://youtu.be/6yRR5Swe4Eg" title="Dr Baumgartner — Shoulder Procedure" onClick={() => openVideo("https://youtu.be/6yRR5Swe4Eg", "Dr Baumgartner — Shoulder Procedure")} />
                            </div>
                        )}
                        {procTab === "laser" && (
                            <div className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-12 text-center text-gray-500 font-medium">
                                Procedural videos for PLDD coming soon.
                            </div>
                        )}
                    </VideoSection>
                </div>
            </section>

            {/* ═══════════ ANIMATIONS ═══════════ */}
            <section id="animations" className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <SectionTitle icon={PlaySquare} title="Animations & Mechanism of Action"
                        subtitle="Supports clinician education and patient communication." />
                    <VideoSection tabs={videoTabs} activeTab={animTab} onTabChange={setAnimTab}>
                        {animTab === "cryo" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <YtEmbedCard url="https://youtu.be/ozs8EcJLqGc" title="Cryoanalgesia — Overview Animation" onClick={() => openVideo("https://youtu.be/ozs8EcJLqGc", "Cryoanalgesia — Overview Animation")} />
                            </div>
                        )}
                        {animTab === "balloon" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <YtEmbedCard url="https://youtu.be/5JN9ktthQsc" title="Balloon Decompression — MOA Animation" onClick={() => openVideo("https://youtu.be/5JN9ktthQsc", "Balloon Decompression — MOA Animation")} />
                            </div>
                        )}
                        {animTab === "ortho" && (
                            <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-12 text-center text-gray-500 font-medium shadow-sm">
                                Biologics MOA animation coming soon.
                            </div>
                        )}
                        {animTab === "laser" && (
                            <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-12 text-center text-gray-500 font-medium shadow-sm">
                                Laser MOA animation coming soon.
                            </div>
                        )}
                    </VideoSection>
                </div>
            </section>

            {/* ═══════════ WEBINARS ═══════════ */}
            <section id="webinars" className="py-24 bg-white border-y border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <SectionTitle icon={Cast} title="Webinars & Expert Talks"
                        subtitle="On-demand education from leading interventional pain specialists." />
                    <VideoSection tabs={[videoTabs[0], videoTabs[1]]} activeTab={webTab} onTabChange={setWebTab}>
                        {webTab === "cryo" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <YtEmbedCard url="https://youtu.be/8TwRFLcKPSU" title="Cryoanalgesia Webinar — Elfekky" onClick={() => openVideo("https://youtu.be/8TwRFLcKPSU", "Cryoanalgesia Webinar — Elfekky")} />
                                <YtEmbedCard url="https://youtu.be/gCyOg4VZo5o" title="Foot & Ankle Cryoanalgesia — Dr Brian Allen" onClick={() => openVideo("https://youtu.be/gCyOg4VZo5o", "Foot & Ankle Cryoanalgesia — Dr Brian Allen")} />
                                <YtEmbedCard url="https://youtu.be/swu2p9QWiLg" title="Expert Panel — Dr Schwartz & Motov" onClick={() => openVideo("https://youtu.be/swu2p9QWiLg", "Expert Panel — Dr Schwartz & Motov")} />
                                <YtEmbedCard url="https://youtu.be/UugEHfh1Z_E" title="Cryoanalgesia Talk — Patel" onClick={() => openVideo("https://youtu.be/UugEHfh1Z_E", "Cryoanalgesia Talk — Patel")} />
                            </div>
                        )}
                        {webTab === "balloon" && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                <YtEmbedCard url="https://youtu.be/V8Ttj4u8bm0" title="ZiNeu Presentation" onClick={() => openVideo("https://youtu.be/V8Ttj4u8bm0", "ZiNeu Presentation")} />
                                <YtEmbedCard url="https://youtu.be/-mbFyDGhx3E" title="Epimed Adhesiolysis Webinar" onClick={() => openVideo("https://youtu.be/-mbFyDGhx3E", "Epimed Adhesiolysis Webinar")} />
                            </div>
                        )}
                    </VideoSection>
                </div>
            </section>

            {/* ═══════════ FRAMEWORKS ═══════════ */}
            <section id="frameworks" className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <SectionTitle icon={LayoutGrid} title="Treatment Frameworks" />
                    <div className="max-w-lg lg:max-w-xl">
                         <YtEmbedCard url="https://youtu.be/-PynquMfd0M" title="Cryo vs RFA — Dr Filipovski" onClick={() => openVideo("https://youtu.be/-PynquMfd0M", "Cryo vs RFA — Dr Filipovski")} />
                    </div>
                </div>
            </section>

            {/* ═══════════ EXPLORE ═══════════ */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <SectionTitle icon={Search} title="Explore the Library" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            { label: "FAQ's", to: "/faq" },
                            { label: "Clinical Education", to: "/clinical-education" },
                            { label: "Procedures Overview", to: "/procedures" },
                            { label: "About IPMA", to: "/about" },
                        ].map(link => (
                            <Link key={link.label} to={link.to}
                                className="group flex items-center justify-center gap-2 p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-primary hover:shadow-md hover:-translate-y-1 transition-all text-center">
                                <span className="text-[15px] font-bold text-gray-800 group-hover:text-primary transition-colors">{link.label}</span>
                                <span className="text-primary text-sm group-hover:translate-x-1 transition-transform border border-primary/20 rounded-full w-6 h-6 flex justify-center items-center ml-2 bg-primary/5">→</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
