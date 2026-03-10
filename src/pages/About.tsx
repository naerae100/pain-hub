import { Target, Lightbulb, ArrowRight, Calendar, MapPin, GraduationCap, Users, Sparkles, Phone, Mail, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { workshops } from "@/data/workshops";
import workshopGallery1 from "@/assets/workshop-gallery-1.png";
import workshopGallery2 from "@/assets/workshop-gallery-2.png";
import educationHero from "@/assets/Education of minimally invasive procedures for pain management.png";
import sydneyWorkshop3 from "@/assets/Ultrasound-guided cryoanalgesia workshop Sydney_3.png.png";
import heroMedical from "@/assets/hero-medical.jpg";
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
                image={heroMedical}
                title="About IPMA"
                subtitle="Driving excellence in interventional pain management through education and innovation."
                breadcrumbs={[{ label: "About IPMA" }]}
            />

            {/* Who We Are Section */}
            <section className="section-container pb-20 pt-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                            <img
                                src={educationHero}
                                alt="Clinician Training"
                                className="w-full h-full object-cover min-h-[400px]"
                            />
                        </div>
                        {/* Secondary Overlapping Image */}
                        <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20 hidden md:block group">
                            <img
                                src={sydneyWorkshop3}
                                alt="Sydney Workshop Session"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10" />
                    </div>
                    <div className="flex flex-col gap-6 order-1 lg:order-2">
                        <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            About IPMA
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
                            Advancing the future of Pain Management.
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Interventional Pain Management Australia (IPMA) is a dedicated organization established to foster excellence in the field of pain medicine.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We bring together leading practitioners, researchers, and innovators to share knowledge, refine techniques, and ultimately improve patient outcomes across the country. Through our specialized workshops and community events, we are setting new standards for care in acute and chronic pain treatment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values / "Look Good" Section */}
            <section className="bg-secondary/50 py-24">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-display font-bold text-foreground mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground text-lg">Foundation principles that guide every workshop, partnership, and initiative we undertake.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-background border border-border/50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                                <GraduationCap className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Education First</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                We believe in continuous learning. Our workshops provide hands-on training with the latest technologies to ensure practitioners stay at the forefront.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-background border border-border/50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Community</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Building a strong network of Australian professionals who support one another, share insights, and collaborate on complex cases.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-background border border-border/50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6">
                                <Sparkles className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Innovation</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Embracing the newest evidence-based procedures, from cryoanalgesia to regenerative therapies, to offer better solutions for patients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision (Refined) */}
            <section className="section-container py-20 lg:py-24">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Mission */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-primary">
                            <div className="p-3 rounded-xl bg-primary/10">
                                <Target className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-foreground">Our Mission</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To promote evidence-based benefits of interventional pain procedures and to build a trusted community of dedicated Australian pain practitioners who believe in and utilize advanced techniques — including cryoanalgesia, regenerative medicine, and other treatments.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-primary">
                            <div className="p-3 rounded-xl bg-primary/10">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-display font-bold text-foreground">Our Vision</h2>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            To become Australia's leading hub for interventional pain education, networking, and innovation — empowering practitioners with the knowledge, tools, and support they need to deliver better outcomes for patients living with acute or chronic pain.
                        </p>
                    </div>
                </div>
            </section>

            {/* Education / Workshop Section */}
            <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
                <div className="section-container">
                    <div className="flex flex-col gap-12">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground text-blue-900 mb-4">
                                The First Australian Cryoanalgesia Workshop – June 2025
                            </h2>
                            <div className="h-full border-l-4 border-primary pl-6">
                                <p className="text-xl text-primary font-medium">Education is at our core.</p>
                            </div>
                        </div>

                        {/* Gallery Grid (Simulated from uploaded images) */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* We use object-cover to make them look like a cohesive gallery */}
                            <div className="content-img-wrap shadow-xl">
                                <img src={workshopGallery1} alt="Workshop Session 1" className="content-img hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="content-img-wrap shadow-xl">
                                <img src={workshopGallery2} alt="Workshop Session 2" className="content-img hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Featured Workshop Card */}
                        {featuredWorkshop && (
                            <div className="relative mt-8 rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-[#0055a6] to-[#003366] text-white p-8 lg:p-16 shadow-2xl">
                                {/* Background Pattern */}
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/4" />

                                <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
                                    <div className="flex flex-col">
                                        <h3 className="text-3xl lg:text-5xl font-display font-bold leading-tight mb-6">
                                            {featuredWorkshop.title}
                                        </h3>
                                        <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                                            {featuredWorkshop.subtitle} – A hands-on workshop for acute and chronic pain.
                                        </p>

                                        <div className="flex flex-col gap-4 mb-10 text-white/80">
                                            <div className="flex items-center gap-3">
                                                <Calendar className="w-5 h-5" />
                                                <span className="text-lg font-medium">{featuredWorkshop.date}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <MapPin className="w-5 h-5" />
                                                <span className="text-lg font-medium">{featuredWorkshop.location}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-4">
                                            <Link to={`/clinical-education/${featuredWorkshop.slug}`}>
                                                <Button size="lg" className="h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/20 border backdrop-blur-sm text-lg font-bold">
                                                    Details
                                                </Button>
                                            </Link>
                                            <Link to={`/clinical-education/${featuredWorkshop.slug}`}>
                                                <Button size="lg" className="h-14 px-8 rounded-full bg-white text-[#003366] hover:bg-white/90 text-lg font-bold shadow-lg shadow-black/10 group">
                                                    Workshop Registration
                                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Simple decorative element for the right side since we don't have the exact map graphic */}
                                    <div className="hidden lg:flex justify-end items-center opacity-30">
                                        <MapPin className="w-64 h-64 text-white" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ───────────── Contact Us Section ───────────── */}
            <section id="contact" className="py-20 lg:py-28 bg-secondary/30 border-t border-border">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                            <span className="w-8 h-[2px] bg-primary"></span>
                            Get in Touch
                            <span className="w-8 h-[2px] bg-primary"></span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-blue-900 mb-4">
                            We'd love to hear from you
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Whether you have questions about our procedures, want to register for a workshop, or need more information about our services.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                        {/* Left Column: Contact Info */}
                        <div className="lg:col-span-5 flex flex-col gap-10">
                            <div className="flex flex-col gap-8">
                                {/* Phone */}
                                <div className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shadow-sm border border-primary/10">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-primary tracking-wider uppercase mb-1">Call Us</span>
                                        <a href="tel:0493519620" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                                            0493 519 620
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shadow-sm border border-primary/10">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-primary tracking-wider uppercase mb-1">Email Us</span>
                                        <a href="mailto:contact@ipmaaustralia.com.au" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                                            contact@ipmaaustralia.com.au
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shadow-sm border border-primary/10">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-primary tracking-wider uppercase mb-1">Location</span>
                                        <span className="text-lg font-semibold text-foreground">Brisbane, Australia</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <span className="text-lg font-bold text-foreground">Follow us</span>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-[#0077b5]/10 text-[#0077b5] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-[#FF0000]/10 text-[#FF0000] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300">
                                        <Youtube className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="lg:col-span-7 w-full">
                            <div className="bg-white border border-border/50 p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                                {/* Background Decorative Circle */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                                <h3 className="text-3xl font-display font-bold text-foreground mb-8 text-blue-900 border-l-4 border-primary pl-4">
                                    Send a message
                                </h3>

                                <form className="flex flex-col gap-6 relative z-10">
                                    <div className="grid gap-2">
                                        <Input
                                            placeholder="Name*"
                                            className="h-14 rounded-2xl border-transparent bg-secondary/50 focus:bg-white transition-all text-lg px-6 placeholder:text-muted-foreground/60"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Input
                                            placeholder="E-mail*"
                                            type="email"
                                            className="h-14 rounded-2xl border-transparent bg-secondary/50 focus:bg-white transition-all text-lg px-6 placeholder:text-muted-foreground/60"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Input
                                            placeholder="Subject*"
                                            className="h-14 rounded-2xl border-transparent bg-secondary/50 focus:bg-white transition-all text-lg px-6 placeholder:text-muted-foreground/60"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Textarea
                                            placeholder="Your message*"
                                            className="min-h-[180px] rounded-2xl border-transparent bg-secondary/50 focus:bg-white transition-all text-lg p-6 placeholder:text-muted-foreground/60 resize-none"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="privacy-about" className="w-5 h-5 rounded border-primary text-primary focus:ring-primary/20 cursor-pointer" />
                                            <label
                                                htmlFor="privacy-about"
                                                className="text-sm font-medium leading-none text-muted-foreground cursor-pointer"
                                            >
                                                I have read and accept the <a href="#" className="text-primary hover:underline">Privacy Policy.</a>
                                            </label>
                                        </div>
                                    </div>

                                    <Button size="lg" className="h-14 rounded-full text-lg mt-4 w-full sm:w-auto px-12 font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                        Submit
                                    </Button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
