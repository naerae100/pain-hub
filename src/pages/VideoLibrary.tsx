import { Play, Clock, ArrowLeft, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VideoLibrary = () => {
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
                        <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase mb-4">
                            Video Library
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-blue-950 mb-4">
                            Procedure Videos
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Watch expert-led demonstrations, technique guides, and clinical protocols using our advanced interventional technologies.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Search videos..." className="pl-10 w-full sm:w-[300px] h-11 bg-white" />
                        </div>
                        <Button variant="outline" className="h-11">
                            <Filter className="w-4 h-4 mr-2" /> Filter
                        </Button>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="all" className="space-y-12">
                    <TabsList className="bg-transparent p-0 flex flex-wrap gap-2 h-auto justify-start border-b border-border w-full rounded-none px-1">
                        <TabsTrigger
                            value="all"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            All Videos
                        </TabsTrigger>
                        <TabsTrigger
                            value="cryo"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            Cryoanalgesia
                        </TabsTrigger>
                        <TabsTrigger
                            value="regenerative"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            Regenerative Medicine
                        </TabsTrigger>
                        <TabsTrigger
                            value="epidurolysis"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            Epidurolysis
                        </TabsTrigger>
                        <TabsTrigger
                            value="ozone"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            Ozone Therapy
                        </TabsTrigger>
                    </TabsList>

                    {/* All Content */}
                    <TabsContent value="all">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...videoData.cryoanalgesia, ...videoData.regenerative, ...videoData.epidurolysis, ...videoData.ozone].map((video, idx) => (
                                <VideoCard key={idx} video={video} />
                            ))}
                        </div>
                    </TabsContent>

                    {/* Category Contents */}
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
        </div>
    );
};

// Reusable Video Card Component
const VideoCard = ({ video }: { video: any }) => (
    <div className="group cursor-pointer flex flex-col h-full">
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg mb-4">
            {/* Thumbnail & Overlay */}
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                </div>
            </div>
            {/* Duration Badge */}
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center">
                <Clock className="w-3 h-3 mr-1" /> {video.duration}
            </div>
        </div>

        <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-blue-900 group-hover:text-primary transition-colors leading-snug mb-2">
                {video.title}
            </h3>
            <div className="mt-auto flex items-center text-sm text-muted-foreground">
                <span className="font-medium text-slate-500">{video.date}</span>
            </div>
        </div>
    </div>
);

export default VideoLibrary;
