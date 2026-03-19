import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PhoneCall, Mail, Linkedin, Youtube } from "lucide-react";

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
                    <div className="grid lg:grid-cols-12 gap-20 items-start">

                        {/* Left Column: Contact Info */}
                        <div className="lg:col-span-5 flex flex-col gap-10 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground text-blue-900 leading-tight">
                                    We'd love to hear{" "}
                                    <span className="text-primary block mt-2">from you!</span>
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                    Whether you have questions about our treatments, want to register for a workshop, or need more information about our services, please don't hesitate to contact us.
                                </p>
                            </div>

                            <div className="grid gap-8 mt-4">
                                {/* Phone */}
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <PhoneCall className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold uppercase text-primary tracking-widest mb-1">Phone</span>
                                        <a href="tel:+61493519620" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">+61 493 519 620</a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-6 group">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                        <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold uppercase text-primary tracking-widest mb-1">Email</span>
                                        <a href="mailto:contact@ipmaaustralia.com.au" className="text-lg md:text-xl lg:text-2xl font-bold text-foreground hover:text-primary transition-colors break-all">contact@ipmaaustralia.com.au</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-8">
                                <span className="text-lg font-bold text-foreground">Follow us</span>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0077b5] group hover:bg-[#0077b5] hover:border-[#0077b5] transition-all" aria-label="LinkedIn">
                                        <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />
                                    </a>
                                    <a href="#" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#FF0000] group hover:bg-[#FF0000] hover:border-[#FF0000] transition-all" aria-label="YouTube">
                                        <Youtube className="w-6 h-6 group-hover:text-white transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7 w-full animate-in slide-in-from-right duration-700 fade-in order-1 lg:order-2">
                            <div className="bg-slate-50 p-8 lg:p-12 rounded-2xl border border-slate-100 shadow-xl relative overflow-hidden">
                                <h2 className="text-2xl font-display font-bold text-blue-900 mb-8 border-l-4 border-primary pl-4">
                                    Send an Enquiry
                                </h2>

                                <form className="grid gap-6 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input placeholder="First Name*" className="h-14 rounded-xl border-slate-200" />
                                        <Input placeholder="Last Name*" className="h-14 rounded-xl border-slate-200" />
                                    </div>
                                    <Input placeholder="Email Address*" type="email" className="h-14 rounded-xl border-slate-200" />
                                    <Input placeholder="Professional Title*" className="h-14 rounded-xl border-slate-200" />
                                    <Textarea placeholder="How can we help you?*" className="min-h-[180px] rounded-xl border-slate-200 p-6 resize-none" />

                                    <div className="flex items-center gap-3 pt-2">
                                        <input type="checkbox" id="privacy" className="w-5 h-5 rounded border-primary text-primary focus:ring-primary/20 cursor-pointer" />
                                        <label htmlFor="privacy" className="text-sm font-medium text-muted-foreground cursor-pointer">
                                            I have read and accept the <a href="#" className="text-primary hover:underline">Privacy Policy.</a>
                                        </label>
                                    </div>

                                    <Button size="lg" className="h-14 rounded-full text-lg mt-4 w-full sm:w-auto px-12 font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                                        Send Message →
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
