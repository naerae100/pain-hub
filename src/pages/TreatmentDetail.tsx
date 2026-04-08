import { useParams, Navigate } from "react-router-dom";
import { treatments } from "@/data/treatments";
import { ChevronRight, Linkedin, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const TreatmentDetail = () => {
    const { slug } = useParams();
    const treatment = treatments.find((t) => t.slug === slug);

    if (!treatment) {
        return <Navigate to="/procedures" replace />;
    }

    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero Title Only */}
            <section className="bg-secondary/30 pt-32 pb-16 border-b border-border">
                <div className="section-container text-center">
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-4 text-foreground">
                        {treatment.title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <span>IPMA</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-primary">{treatment.title}</span>
                    </div>
                </div>
            </section>

            {/* Content Container */}
            <div className="section-container py-20">
                <div className="flex flex-col gap-24">

                    {/* "What is" Section + Breakthrough Card */}
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Text Content */}
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-display font-bold text-foreground">
                                What is {treatment.title}?
                            </h2>
                            <div className="flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed">
                                {treatment.introText.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Breakthrough Card (Blue) - if exists */}
                        {treatment.breakthroughCard && (
                            <div className="relative rounded-2xl overflow-hidden bg-[#0a4b8f] text-white min-h-[500px] shadow-2xl group">
                                <img
                                    src={treatment.breakthroughCard.image}
                                    alt="Treatment Procedure"
                                    className="absolute inset-0 w-full h-full object-contain opacity-40 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="relative z-10 p-10 lg:p-12 flex flex-col h-full bg-gradient-to-t from-[#0a4b8f] via-[#0a4b8f]/60 to-transparent">
                                    <div className="mt-auto">
                                        <h3 className="text-3xl lg:text-4xl font-display font-bold leading-tight mb-6">
                                            {treatment.breakthroughCard.title}
                                        </h3>
                                        <p className="text-lg text-white/90 mb-8">
                                            {treatment.breakthroughCard.content}
                                        </p>
                                        <Button className="bg-[#4dabf7] text-white hover:bg-[#3b8dbf] rounded-full px-8 h-12 text-lg font-bold border-none">
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Placeholder if no breakthrough card */}
                        {!treatment.breakthroughCard && (
                            <div className="relative rounded-2xl overflow-hidden bg-secondary min-h-[400px] flex items-center justify-center border border-slate-100">
                                <img src={treatment.heroImage} className="absolute inset-0 w-full h-full object-contain opacity-50" />
                                <div className="relative z-10 bg-background/80 backdrop-blur-md p-8 rounded-3xl text-center max-w-sm m-4">
                                    <h3 className="text-2xl font-bold mb-2">Learn More</h3>
                                    <p className="text-muted-foreground text-sm">Discover how {treatment.title} can help your patients.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Clinical Outcomes / Evidence - "Graphs/Infographics" simulation */}
                    {treatment.clinicalOutcomes && (
                        <div className="flex flex-col gap-10">
                            <div>
                                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                                    Evidence and Clinical Outcomes
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-3xl">
                                    {treatment.clinicalOutcomes.description}
                                </p>
                                <Button variant="outline" className="mt-6 rounded-full h-12 px-8 border-2 font-bold text-foreground">
                                    Recent Publications
                                </Button>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {treatment.clinicalOutcomes.conditions.map((category, idx) => (
                                    <div key={idx} className="flex flex-col gap-4 p-6 rounded-xl bg-secondary/30 border border-slate-100 hover:bg-secondary/50 transition-colors">
                                        <h4 className="text-lg font-bold text-blue-700 mb-2 border-b border-blue-200 pb-2">
                                            {category.category}
                                        </h4>
                                        <ul className="flex flex-col gap-3">
                                            {category.items.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80 leading-relaxed">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Infographic Placeholder / Animated Graph Simulation */}
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <div className="bg-card border border-slate-100 rounded-xl p-8 shadow-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <h3 className="font-bold text-lg">Efficacy vs Traditional Methods</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Pain Reduction (VAS)", val: "85%" },
                                            { label: "Patient Satisfaction", val: "92%" },
                                            { label: "Recovery Speed", val: "78%" }
                                        ].map((stat) => (
                                            <div key={stat.label}>
                                                <div className="flex justify-between text-sm font-medium mb-1">
                                                    <span>{stat.label}</span>
                                                    <span>{stat.val}</span>
                                                </div>
                                                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary rounded-full" style={{ width: stat.val }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-card border border-slate-100 rounded-xl p-8 shadow-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <h3 className="font-bold text-lg">Application Areas</h3>
                                    </div>
                                    <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
                                        [Interactive data visualization]
                                        (Simulated graphic)
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {/* Diagram Section */}
                    {treatment.diagram && (
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 border border-slate-100">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">{treatment.diagram.title}</h2>
                            <div className="relative rounded-3xl overflow-hidden bg-white">
                                <img src={treatment.diagram.image} alt={treatment.diagram.title} className="w-full object-contain" />
                                <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-6 border-t border-border/50">
                                    <p className="text-lg text-foreground/80 leading-relaxed text-center max-w-4xl mx-auto">
                                        {treatment.diagram.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Videos Section */}
                    {treatment.videos && (
                        <div>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8">Video Learning Series</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {treatment.videos.map((video, idx) => (
                                    <div key={idx} className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer">
                                        <img src={video.thumbnail} alt={video.title} className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                                            <h3 className="text-xl font-bold mb-1">{video.title}</h3>
                                            <span className="text-sm opacity-80">{video.duration}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Articles Section */}
                    {treatment.articles && (
                        <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12 border border-slate-100">
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                                Key Publications
                            </h2>
                            <div className="grid gap-4">
                                {treatment.articles.map((article, idx) => (
                                    <div key={idx} className="bg-background p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors group">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <div className="text-sm font-bold text-primary mb-1">{article.year}</div>
                                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-700 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <div className="text-muted-foreground text-sm">
                                                    {article.authors} • <span>{article.reference}</span>
                                                </div>
                                            </div>
                                            <Button variant="ghost" className="shrink-0 text-primary hover:text-primary/80 hover:bg-primary/5 gap-2">
                                                Read Abstract <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Social / Video Section (Existing) */}
                    {treatment.socialPosts && (
                        <div>
                            <h2 className="text-3xl font-display font-bold text-foreground mb-8">
                                Community Insights & Cases
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {treatment.socialPosts.map((post, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center gap-3 mb-4">
                                            <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full bg-gray-200 object-contain" />
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-foreground">{post.author}</span>
                                                <span className="text-xs text-foreground/90">{post.role} • {post.time}</span>
                                            </div>
                                            <Linkedin className="w-5 h-5 text-[#0077b5] ml-auto" />
                                        </div>
                                        <p className="text-sm text-foreground mb-4 line-clamp-3 leading-relaxed">
                                            {post.content}
                                        </p>
                                        <div className="relative rounded-lg overflow-hidden aspect-[4/5] bg-black group cursor-pointer">
                                            <img src={post.image} alt="Post Content" className="w-full h-full object-contain opacity-80" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform">
                                                    <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <div className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-full inline-block">
                                                    {post.title}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100 text-foreground/90 text-sm">
                                            <span className="hover:text-blue-600 cursor-pointer">Like</span>
                                            <span className="hover:text-blue-600 cursor-pointer">Comment</span>
                                            <span className="hover:text-blue-600 cursor-pointer ml-auto">Share</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TreatmentDetail;
