import { ArrowLeft, Search, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Research = () => {
    // Mock Data based on user images
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
                        <span className="inline-block py-1 px-4 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold tracking-wide uppercase mb-4">
                            Research & Evidence
                        </span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-blue-950 mb-4">
                            Clinical Publications
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            A comprehensive library of peer-reviewed studies, clinical trials, and case series supporting our interventional techniques.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Search papers..." className="pl-10 w-full sm:w-[300px] h-11 bg-white" />
                        </div>
                        <Button variant="outline" className="h-11">
                            <Filter className="w-4 h-4 mr-2" /> Filter
                        </Button>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="cryo" className="space-y-12">
                    <TabsList className="bg-transparent p-0 flex flex-wrap gap-2 h-auto justify-start border-b border-border w-full rounded-none px-1">
                        <TabsTrigger
                            value="cryo"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            Cryoanalgesia
                        </TabsTrigger>
                        <TabsTrigger
                            value="thoracic"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            Thoracic
                        </TabsTrigger>
                        <TabsTrigger
                            value="spasticity"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            Spasticity
                        </TabsTrigger>
                        <TabsTrigger
                            value="additional"
                            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:text-primary rounded-none border-b-2 border-transparent px-6 py-3 text-lg text-muted-foreground font-medium transition-colors hover:text-foreground"
                        >
                            Additional Regions
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="cryo" className="space-y-8">
                        <div className="mb-8">
                            <h2 className="text-3xl font-display font-bold text-blue-900 mb-2">Cryo</h2>
                            <p className="text-muted-foreground">Read the latest research and publications about cryo.</p>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-border">
                            {researchData.cryo.map((item) => <ResearchItem key={item.id} item={item} />)}
                        </div>
                    </TabsContent>

                    <TabsContent value="thoracic" className="space-y-8">
                        <div className="mb-8">
                            <h2 className="text-3xl font-display font-bold text-blue-900 mb-2">Thoracic</h2>
                            <p className="text-muted-foreground">Clinical evidence for thoracic interventions.</p>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-border">
                            {researchData.thoracic.map((item) => <ResearchItem key={item.id} item={item} />)}
                        </div>
                    </TabsContent>

                    <TabsContent value="spasticity" className="space-y-8">
                        <div className="mb-8">
                            <h2 className="text-3xl font-display font-bold text-blue-900 mb-2">Spasticity</h2>
                            <p className="text-muted-foreground">Research on spasticity management techniques.</p>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-border">
                            {researchData.spasticity.map((item) => <ResearchItem key={item.id} item={item} />)}
                        </div>
                    </TabsContent>

                    <TabsContent value="additional" className="space-y-8">
                        <div className="mb-8">
                            <h2 className="text-3xl font-display font-bold text-blue-900 mb-2">Additional Anatomical Regions</h2>
                            <p className="text-muted-foreground">Studies covering knee, hip, and other peripheral nerve blocks.</p>
                        </div>
                        <div className="flex flex-col gap-0 border-t border-border">
                            {researchData.additional.map((item) => <ResearchItem key={item.id} item={item} />)}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

// Reusable List Item Component
const ResearchItem = ({ item }: { item: any }) => (
    <div className="flex flex-col md:flex-row gap-6 py-12 border-b border-border group hover:bg-slate-50/50 transition-colors px-4 -mx-4 rounded-xl">
        <div className="shrink-0 pt-1">
            <div className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center text-muted-foreground font-bold text-lg group-hover:border-primary group-hover:text-primary transition-colors">
                {item.id}
            </div>
        </div>
        <div className="flex-grow">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 leading-snug mb-3 group-hover:text-primary transition-colors">
                {item.title}
            </h3>
            <div className="text-muted-foreground font-medium">
                <span className="text-slate-700 font-bold">{item.author}</span>
                <span className="mx-2 text-slate-300">•</span>
                <span className="italic">{item.journal}</span>
            </div>
        </div>
        <div className="shrink-0 flex items-center pt-2 md:pt-0">
            <Button variant="ghost" className="text-primary font-bold hover:text-primary hover:bg-primary/10 group-hover:translate-x-1 transition-all">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </div>
    </div>
);

export default Research;
