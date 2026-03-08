import { Phone, Mail, Linkedin, Youtube, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Breadcrumbs from "@/components/Breadcrumbs";

const Contact = () => {
    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Breadcrumbs */}
            <div className="section-container pt-6">
                <Breadcrumbs
                    items={[{ label: "Contact" }]}
                    className="[&_a]:text-muted-foreground/60 [&_a:hover]:text-primary [&_span]:text-foreground [&_svg]:text-muted-foreground/40"
                />
            </div>

            {/* Hero / Page Content */}
            <div className="flex-1 flex flex-col justify-center py-20 lg:py-32">
                <div className="section-container">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                        {/* Left Column: Contact Info */}
                        <div className="lg:col-span-5 flex flex-col gap-10 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-blue-900">
                                    We'd love to hear{" "}
                                    <span className="text-primary block mt-2">from you!</span>
                                </h1>
                                <div className="w-20 h-1.5 bg-primary rounded-full opacity-80" />
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                    Whether you have questions about our treatments, want to register for a workshop, or need more information about our services, please don't hesitate to contact us.
                                </p>
                            </div>

                            <div className="flex flex-col gap-8 mt-4">
                                {/* Phone */}
                                <div className="flex items-center gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shadow-sm border border-primary/10">
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
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white shadow-sm border border-primary/10">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-primary tracking-wider uppercase mb-1">Email Us</span>
                                        <a href="mailto:contact@ipmaaustralia.com.au" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                                            contact@ipmaaustralia.com.au
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-8">
                                <span className="text-lg font-bold text-foreground">Follow us on socials!</span>
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

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7 w-full animate-in slide-in-from-right duration-700 fade-in order-1 lg:order-2">
                            <div className="bg-secondary/30 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                                {/* Background Decorative Circle */}
                                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

                                <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-blue-900 border-l-4 border-primary pl-4">
                                    Send message
                                </h2>

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
                                            className="min-h-[200px] rounded-2xl border-transparent bg-secondary/50 focus:bg-white transition-all text-lg p-6 placeholder:text-muted-foreground/60 resize-none"
                                        />
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="privacy" className="w-5 h-5 rounded border-primary text-primary focus:ring-primary/20 cursor-pointer" />
                                            <label
                                                htmlFor="privacy"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground cursor-pointer"
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
            </div>
        </div>
    );
};

export default Contact;
