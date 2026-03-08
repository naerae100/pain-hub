import { useEffect } from "react";
import { ArrowLeft, Search, Filter, Play, FileText, ArrowRight, Download, Clock } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const EducationalMaterials = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    // --- Data Consolidation ---

    // Data from Research.tsx
    const researchData = {
        cryo: [
            { id: 1, title: "Ultrasound-guided Percutaneous Cryoneurolysis for the Treatment of Pain after Traumatic Rib Fracture: A Randomized, Active controlled, Participant and Observer-masked Study", author: "John J. Finneran et al.", journal: "Anesthesiology, 2025" },
            { id: 2, title: "Bedside percutaneous cryoneurolysis technique for management of acute rib fracture pain in adult trauma patients", author: "C. Villalta et al.", journal: "Trauma Surgery & Acute Care Open, 2024" },
            { id: 3, title: "Percutaneous Cryoneurolysis for Pain Control After Rib Fractures in Older Adults", author: "S. Wang et al.", journal: "JAMA Surgery, 2024" },
            { id: 4, title: "Rib fracture management: A review of surgical stabilization, regional analgesia, and intercostal nerve cryoablation", author: "S. Stopenski et al.", journal: "Surgery in Practice and Science, 2022" }
        ],
        thoracic: [
            { id: 1, title: "US-guided percutaneous intercostal cryoanalgesia for multiple weeks of analgesia following mastectomy a case series", author: "Rodney A. Gabriel et al.", journal: "Korean Journal of Anesthesiology, 2020" },
            { id: 2, title: "US-guided percutaneous cryoanalgesia of intercostal nerves", author: "Nicolás et al.", journal: "The Ultrasound Journal, 2022" },
            { id: 3, title: "Ultrasound-guided Percutaneous Cryoneurolysis for the Treatment of Pain after Traumatic Rib Fracture A Randomized, Active-controlled, Participant and Observer-masked Study", author: "Author Name Unavailable", journal: "Journal Name, 2023" },
            { id: 4, title: "Short communication: ultrasound-guided percutaneous cryoanalgesia of intercostal nerves for uniportal video-assisted thoracic surgery", author: "Matías Nicolás et al.", journal: "The Ultrasound Journal, 2022" }
        ],
        spasticity: [
            { id: 1, title: "Cryoneurolysis as a Novel Treatment for Spasticity, Associated Pain and Presumed Contracture", author: "Paul Winston, and Daniel Vincent", journal: "Advances in Rehabilitation Science and Practice, 2024" },
            { id: 2, title: "Percutaneous Cryoneurolysis as a Dynamic Treatment for Spasticity: A Case Series", author: "Clay C.Guynn", journal: "Archives of Rehabilitation Research and Clinical Translation, 2025" },
            { id: 3, title: "Cryoneurotomy as a Percutaneous Mini-invasive Therapy for the Treatment of the Spastic Limb: Case Presentation, Review of the Literature, and Proposed Approach for Use", author: "Paul Winston et al.", journal: "Archives of Rehabilitation Research and Clinical Translation, 2019" }
        ],
        additional: [
            { id: 1, title: "Cryoneurolysis for non-cancer knee pain: A scoping review", author: "Dion Diep et al.", journal: "Interventional Pain Medicine, 2023" },
            { id: 2, title: "Efficacy of Pre-operative Cryoneurolysis for Reducing Pain and Opioid Use in Patients Undergoing Knee Arthroplasty: A Systematic Review", author: "Pika Krištof Mirt", journal: "Open Access Macedonian Journal of Medical Sciences, 2025" },
            { id: 3, title: "Percutaneous freezing of sensory nerves prior to total knee arthroplasty", author: "Dasa et al.", journal: "The Knee, 2016; Level of evidence: III" }
        ]
    };

    // Data from VideoLibrary.tsx
    const videoData = {
        cryoanalgesia: [
            { title: "Ultrasound Guided Cryoanalgesia of the Genicular Nerve", duration: "8:45", thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", date: "Oct 12, 2024" },
            { title: "Cryoneurolysis for Post-Herniorrhaphy Pain Syndrome", duration: "12:20", thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800", date: "Sep 28, 2024" },
            { title: "Occipital Neuralgia Treatment Protocol", duration: "6:15", thumbnail: "https://images.unsplash.com/photo-1516549655169-df83a0a836d8?auto=format&fit=crop&q=80&w=800", date: "Sep 15, 2024" }
        ],
        regenerative: [
            { title: "PRP Preparation and Injection Technique", duration: "5:30", thumbnail: "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?auto=format&fit=crop&q=80&w=800", date: "Oct 05, 2024" },
            { title: "Stem Cell Therapy for Knee Osteoarthritis", duration: "10:10", thumbnail: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800", date: "Aug 20, 2024" }
        ],
        epidurolysis: [
            { title: "Lysis of Adhesions: The Racz Procedure Explained", duration: "15:00", thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800", date: "Nov 01, 2024" },
            { title: "Transforaminal Epidural Steroid Injection", duration: "7:45", thumbnail: "https://images.unsplash.com/photo-1632059368525-4c6020163351?auto=format&fit=crop&q=80&w=800", date: "Jul 12, 2024" }
        ],
        ozone: [
            { title: "Intradiscal Ozone Therapy Demonstration", duration: "9:20", thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800", date: "Sep 05, 2024" },
            { title: "Major Autohemotherapy Protocols", duration: "11:05", thumbnail: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800", date: "Jun 30, 2024" }
        ]
    };

    return (
        <div className="min-h-screen bg-background flex flex-col pt-24 pb-20">
            <div className="section-container">
                {/* Back Link */}
                <div className="mb-8">
                    <Link to="/resources" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Library
                    </Link>
                </div>

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
                    <div>
                        <span className="inline-block py-1 px-4 rounded-full bg-amber-100 text-amber-700 text-sm font-bold tracking-wide uppercase mb-4">
                            Cryo Workshop Resources
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-blue-950 mb-4">
                            Educational Materials
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            A complete knowledge hub featuring clinical studies, procedure videos, and expert webinars to support your practice.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Search materials..." className="pl-10 w-full sm:w-[300px] h-11 bg-white" />
                        </div>
                        <Button variant="outline" className="h-11">
                            <Filter className="w-4 h-4 mr-2" /> Filter
                        </Button>
                    </div>
                </div>

                {/* --- Section 1: Clinical Studies (Consolidated from Research.tsx) --- */}
                <div id="studies" className="mb-24 scroll-mt-24">
                    <h2 className="text-3xl font-display font-bold text-blue-900 mb-8 border-b border-border pb-4">Clinical Studies & Evidence</h2>

                    <Tabs defaultValue="cryo" className="space-y-8">
                        <TabsList className="bg-transparent p-0 flex flex-wrap gap-2 h-auto justify-start w-full rounded-none">
                            {["cryo", "thoracic", "spasticity", "additional"].map((tab) => (
                                <TabsTrigger
                                    key={tab}
                                    value={tab}
                                    className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary border border-transparent hover:bg-slate-50 px-5 py-2 rounded-full text-muted-foreground font-medium transition-colors capitalize"
                                >
                                    {tab === 'additional' ? 'Additional Regions' : tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <TabsContent value="cryo" className="flex flex-col gap-0 border-t border-border mt-0">
                            {researchData.cryo.map((item) => <ResearchItem key={item.id} item={item} />)}
                        </TabsContent>
                        <TabsContent value="thoracic" className="flex flex-col gap-0 border-t border-border mt-0">
                            {researchData.thoracic.map((item) => <ResearchItem key={item.id} item={item} />)}
                        </TabsContent>
                        <TabsContent value="spasticity" className="flex flex-col gap-0 border-t border-border mt-0">
                            {researchData.spasticity.map((item) => <ResearchItem key={item.id} item={item} />)}
                        </TabsContent>
                        <TabsContent value="additional" className="flex flex-col gap-0 border-t border-border mt-0">
                            {researchData.additional.map((item) => <ResearchItem key={item.id} item={item} />)}
                        </TabsContent>
                    </Tabs>
                </div>

                {/* --- Section 2: Procedural Videos (Consolidated from VideoLibrary.tsx) --- */}
                <div id="videos" className="mb-24 scroll-mt-24">
                    <div className="flex justify-between items-end mb-8 border-b border-border pb-4">
                        <h2 className="text-3xl font-display font-bold text-blue-900">Procedural Video Library</h2>
                    </div>

                    <Tabs defaultValue="all" className="space-y-8">
                        <TabsList className="bg-transparent p-0 flex flex-wrap gap-2 h-auto justify-start w-full rounded-none">
                            {["all", "cryo", "regenerative", "epidurolysis", "ozone"].map((tab) => (
                                <TabsTrigger
                                    key={tab}
                                    value={tab}
                                    className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 border border-transparent hover:bg-blue-50 px-5 py-2 rounded-full text-muted-foreground font-medium transition-colors capitalize"
                                >
                                    {tab === 'all' ? 'All Videos' : tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <TabsContent value="all">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[...videoData.cryoanalgesia, ...videoData.regenerative, ...videoData.epidurolysis, ...videoData.ozone].map((video, idx) => (
                                    <VideoCard key={idx} video={video} />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="cryo">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {videoData.cryoanalgesia.map((video, idx) => <VideoCard key={idx} video={video} />)}
                            </div>
                        </TabsContent>
                        <TabsContent value="regenerative">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {videoData.regenerative.map((video, idx) => <VideoCard key={idx} video={video} />)}
                            </div>
                        </TabsContent>
                        <TabsContent value="epidurolysis">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {videoData.epidurolysis.map((video, idx) => <VideoCard key={idx} video={video} />)}
                            </div>
                        </TabsContent>
                        <TabsContent value="ozone">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {videoData.ozone.map((video, idx) => <VideoCard key={idx} video={video} />)}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* --- Section 3: Webinars & Guides (New Card Style) --- */}
                <div id="webinars" className="scroll-mt-24">
                    <h2 className="text-3xl font-display font-bold text-blue-900 mb-8 border-b border-border pb-4">Webinars & Guides</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[
                            { type: "WEBINAR", title: "Cryoneurolysis in Spasticity Management", subtitle: "Dr. Paul Winston", icon: Play, color: "bg-blue-100 text-blue-700" },
                            { type: "GUIDE", title: "Knee Cryoablation Technique", subtitle: "Step-by-step PDF guide", icon: Download, color: "bg-emerald-100 text-emerald-700" },
                            { type: "WEBINAR", title: "Shoulder Cryoablation", subtitle: "Dr. Leszek Urbanczak", icon: Play, color: "bg-blue-100 text-blue-700" },
                            { type: "ARTICLE", title: "Radiation Safety Principles", subtitle: "Best practices", icon: FileText, color: "bg-purple-100 text-purple-700" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-[2rem] border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full min-h-[220px] relative">
                                <div className="flex justify-between items-start mb-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${item.color}`}>{item.type}</span>
                                    {/* Icon top right, consistent with screenshot */}
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                        <item.icon className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors stroke-[2]" />
                                    </div>
                                </div>

                                <div className="flex-grow flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm font-medium">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- Reusable Components ---

const ResearchItem = ({ item }: { item: any }) => (
    <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-border group hover:bg-slate-50/50 transition-colors px-4 -mx-4 rounded-xl">
        <div className="shrink-0 pt-1">
            <div className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground font-bold text-sm group-hover:border-primary group-hover:text-primary transition-colors">
                {item.id}
            </div>
        </div>
        <div className="flex-grow">
            <h3 className="text-lg md:text-xl font-bold text-blue-900 leading-snug mb-2 group-hover:text-primary transition-colors">
                {item.title}
            </h3>
            <div className="text-muted-foreground text-sm">
                <span className="text-slate-700 font-bold">{item.author}</span>
                <span className="mx-2 text-slate-300">•</span>
                <span className="italic">{item.journal}</span>
            </div>
        </div>
        <div className="shrink-0 flex items-center pt-2 md:pt-0">
            <Button variant="ghost" className="text-primary font-bold hover:text-primary hover:bg-primary/10 h-8 text-sm">
                Read More <ArrowRight className="w-3 h-3 ml-2" />
            </Button>
        </div>
    </div>
);

const VideoCard = ({ video }: { video: any }) => (
    <div className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all">
        <div className="relative aspect-video overflow-hidden bg-slate-100">
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-5 h-5 text-white fill-current ml-1" />
                </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded flex items-center">
                <Clock className="w-3 h-3 mr-1" /> {video.duration}
            </div>
        </div>

        <div className="p-4 flex flex-col flex-1">
            <h3 className="text-base font-bold text-blue-900 group-hover:text-primary transition-colors leading-snug mb-2">
                {video.title}
            </h3>
            <div className="mt-auto flex items-center text-xs text-muted-foreground">
                <span className="font-medium text-slate-500">{video.date}</span>
            </div>
        </div>
    </div>
);

export default EducationalMaterials;
