import { Link } from "react-router-dom";
import { 
    BookOpenCheck, Building2, Library, Network, 
    Snowflake, Minimize2, Zap, Dna, 
    Target, Eye, 
    Microscope, Users, FileText,
    PhoneCall, Mail, MapPin, Search
} from "lucide-react";
import { workshops } from "@/data/workshops";
import heroAbout from "@/assets/Medical proffesionals_IPMA.png";
import educationHero from "@/assets/Education of minimally invasive procedures for pain management.png";
import sydneyWorkshop3 from "@/assets/Ultrasound-guided cryoanalgesia workshop Sydney_3.png.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/PageHero";

const About = () => {
    // Find the next OPEN workshop, or default to the first one
    const featuredWorkshop = workshops.find(w => w.status === "OPEN") || workshops[0];

    return (
        <div className="flex-1 flex flex-col bg-background">

            {/* Hero Section */}
            <PageHero
                image={heroAbout}
                title="Interventional Pain Management Australia - Advancing Clinical Practice in Interventional Pain & Spine Care"
                subtitle="About IPMA"
                breadcrumbs={[{ label: "About IPMA" }]}
            />

            {/* Introduction Section */}
            <section className="section-container pb-20 pt-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            About IPMA
                        </div>
                        <p className="text-xl text-foreground font-medium leading-relaxed">
                            Interventional Pain Management Australia (IPMA) is an educational and clinical collaboration platform dedicated to advancing evidence-informed interventional pain and minimally invasive spine care.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            IPMA brings together clinicians, researchers, and procedural specialists to share knowledge, refine techniques, and support the responsible adoption of modern interventional technologies.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Through structured education programs, reference centre observation, and clinical resources, IPMA promotes safe and effective integration of procedures that target the underlying causes of pain while minimising tissue disruption.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 bg-slate-50 border border-slate-100 h-[400px]">
                            <img
                                src={educationHero}
                                alt="Clinician Training"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* Secondary Overlapping Image */}
                        <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block group bg-slate-50">
                            <img
                                src={sydneyWorkshop3}
                                alt="Sydney Workshop Session"
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What IPMA Does Section */}
            <section className="bg-slate-50 py-24 border-y border-slate-100">
                <div className="section-container">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-blue-900 mb-8">What IPMA Does</h2>
                        <p className="text-lg text-muted-foreground mb-8">IPMA supports clinicians by providing:</p>
                        <ul className="grid gap-6">
                            {[
                                { text: "Clinical education and hands-on training in interventional pain and minimally invasive spine procedures", icon: BookOpenCheck },
                                { text: "Reference centre observation programs for real-world procedural learning", icon: Building2 },
                                { text: "Evidence-based clinical resources supporting safe adoption of new technologies", icon: Library },
                                { text: "Collaborative learning networks connecting practitioners across Australia", icon: Network }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-lg text-foreground/80 leading-relaxed group items-start">
                                    <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <item.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="mt-1">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-blue-800 font-medium mt-10 p-6 bg-blue-100/50 rounded-xl border border-blue-100">
                            The focus is not simply technology — but appropriate patient selection, procedural precision, and responsible clinical integration.
                        </p>
                    </div>
                </div>
            </section>

            {/* Areas of Clinical Focus */}
            <section className="section-container py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">Areas of Clinical Focus</h2>
                    <p className="text-muted-foreground text-lg">IPMA educational programs currently focus on four core procedural domains:</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "Cryoanalgesia",
                            desc: "Image-guided cryoneurolysis for peripheral neuralgia, postoperative pain, and selected spasticity applications.",
                            icon: Snowflake
                        },
                        {
                            title: "Epidural Balloon Decompression",
                            desc: "Mechanical epidural expansion and adhesiolysis for lumbar spinal stenosis and neurogenic claudication.",
                            icon: Minimize2
                        },
                        {
                            title: "Percutaneous Laser Disc Decompression (PLDD)",
                            desc: "Minimally invasive intradiscal decompression for contained disc herniation and radicular pain.",
                            icon: Zap
                        },
                        {
                            title: "Orthobiologic Therapies",
                            desc: "Autologous biologic approaches supporting tissue repair and regenerative pathways within interventional care.",
                            icon: Dna
                        }
                    ].map((domain, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <domain.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4">{domain.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {domain.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-muted-foreground italic mt-12">
                    Each modality is presented within a structured clinical framework emphasising indications, mechanisms, safety, and outcomes.
                </p>
            </section>

            {/* Education at the Core Section */}
            <section className="bg-blue-900 text-white py-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4" />
                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <h2 className="text-4xl lg:text-6xl font-display font-bold leading-tight">Education at the Core of Practice</h2>
                            <p className="text-xl text-blue-100 leading-relaxed">
                                Education is central to IPMA’s mission. Programs are designed to support clinicians at different stages of procedural adoption, including:
                            </p>
                            <ul className="grid gap-6 mt-2">
                                {[
                                    { text: "Hands-on cadaver workshops", icon: Microscope },
                                    { text: "Clinical observation through IPMA Reference Centres", icon: Eye },
                                    { text: "Case-based discussions and expert panels", icon: Users },
                                    { text: "Evidence reviews and clinical resource libraries", icon: FileText }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 text-lg items-center text-white/90">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-blue-200" />
                                        </div>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xl font-medium text-white p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                                This approach allows practitioners to learn not only how procedures are performed, but when they should be used.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 h-64 mt-12">
                                <img src={educationHero} alt="Education" className="w-full h-full object-contain" />
                            </div>
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 h-64">
                                <img src={sydneyWorkshop3} alt="Workshop" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-container py-24">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 mb-2 border-l-4 border-primary pl-6">
                            <Target className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl font-display font-bold text-blue-900">Our Mission</h2>
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed pl-10 md:pl-0 lg:pl-10">
                            To support evidence-informed interventional pain and spine practice through education, collaboration, and responsible integration of minimally invasive procedural technologies.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 mb-2 border-l-4 border-primary pl-6">
                            <Eye className="w-8 h-8 text-primary" />
                            <h2 className="text-3xl font-display font-bold text-blue-900">Our Vision</h2>
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed pl-10 md:pl-0 lg:pl-10">
                            To establish IPMA as a trusted Australian platform for interventional pain education, connecting clinicians with the knowledge, training, and clinical resources required to deliver modern pain care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Workshops Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto flex flex-col gap-12">
                        <div className="text-center">
                            <h2 className="text-3xl lg:text-5xl font-display font-bold text-blue-900 mb-6">Clinical Education & Workshops</h2>
                            <p className="text-lg text-muted-foreground">
                                IPMA regularly hosts focused educational events designed for clinicians interested in advancing their interventional skillset.
                            </p>
                        </div>

                        {/* Featured Workshop */}
                        <div className="bg-white border border-slate-100 rounded-2xl p-8 lg:p-12 shadow-xl">
                            <div className="flex flex-col gap-6">
                                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-bold uppercase text-xs w-fit tracking-wider">Upcoming workshop</span>
                                <h3 className="text-3xl font-display font-bold text-foreground">
                                    Mastering Ultrasound-Guided Pain Management Techniques
                                </h3>
                                <div className="flex flex-wrap gap-8 text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold">📅</span> Saturday, 27 September 2025
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold">📍</span> Brisbane, Queensland
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-12 mt-4">
                                    <div>
                                        <p className="font-bold text-blue-900 mb-4">These workshops combine:</p>
                                        <ul className="grid gap-3">
                                            {[
                                                "Procedural demonstrations",
                                                "Cadaver-based training",
                                                "Clinical case discussions",
                                                "Structured education pathways"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 text-muted-foreground">
                                                    <span className="text-primary">•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-4 justify-end">
                                        <Button size="lg" className="rounded-full font-bold h-14 text-lg shadow-lg shadow-primary/20">
                                            Register Now
                                        </Button>
                                        <p className="text-xs text-center text-muted-foreground">
                                            Past workshops include: Australian Cryoanalgesia Workshop
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section id="contact" className="py-24 bg-white border-t border-slate-200">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-display font-bold text-blue-900 mb-8">Get in Touch</h2>
                            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                                Whether you are interested in clinical education, reference centre observation, or collaboration, the IPMA team welcomes enquiries from clinicians and healthcare organisations.
                            </p>

                            <div className="grid gap-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <PhoneCall className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold uppercase text-primary tracking-widest mb-1">Phone</span>
                                        <a href="tel:+61493519620" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">+61 493 519 620</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold uppercase text-primary tracking-widest mb-1">Email</span>
                                        <a href="mailto:contact@ipmaaustralia.com.au" className="text-lg md:text-xl lg:text-2xl font-bold text-foreground hover:text-primary transition-colors break-all">contact@ipmaaustralia.com.au</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <MapPin className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold uppercase text-primary tracking-widest mb-1">Location</span>
                                        <span className="text-2xl font-bold text-foreground">Sydney, Australia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simplified Contact Form */}
                        <div className="bg-slate-50 p-8 lg:p-12 rounded-2xl border border-slate-100 shadow-xl">
                            <h3 className="text-2xl font-display font-bold text-blue-900 mb-8">Send an Enquiry</h3>
                            <form className="grid gap-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input placeholder="First Name*" className="h-14 rounded-xl border-slate-200" />
                                    <Input placeholder="Last Name*" className="h-14 rounded-xl border-slate-200" />
                                </div>
                                <Input placeholder="Email Address*" type="email" className="h-14 rounded-xl border-slate-200" />
                                <Input placeholder="Professional Title (e.g. Pain Specialist, Registrar)*" className="h-14 rounded-xl border-slate-200" />
                                <Textarea placeholder="How can we help you?*" className="min-h-[150px] rounded-xl border-slate-200" />
                                <Button size="lg" className="h-14 rounded-full font-bold text-lg shadow-lg shadow-primary/20 mt-2">
                                    Send Message →
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

