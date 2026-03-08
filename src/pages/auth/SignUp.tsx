import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, User, Stethoscope } from "lucide-react";
import ipmaLogo from "@/assets/ipma-logo.webp";

const SignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup
        setTimeout(() => {
            setIsLoading(false);
            navigate("/checkout");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background">
            {/* Left Panel - Image/Brand */}
            <div className="hidden md:flex flex-col justify-between w-1/2 lg:w-[45%] bg-slate-900 border-r border-white/5 relative overflow-hidden p-12 text-white">
                <div className="absolute inset-0 bg-[url('/src/assets/medical-training.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/80 to-slate-900/90" />
                <div className="absolute inset-0 pattern-grid opacity-10" />

                <div className="relative z-10">
                    <Link to="/" className="inline-block mb-8">
                        <img src={ipmaLogo} alt="IPMA" className="h-12 w-auto brightness-0 invert" />
                    </Link>
                    <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                        Professional Development & Training
                    </h1>
                    <p className="text-lg text-white/70 max-w-md">
                        Create an account to access workshops, resources, and upcoming events.
                    </p>
                </div>

                <div className="relative z-10 text-sm text-white/50">
                    © {new Date().getFullYear()} IPMA. All rights reserved.
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative overflow-y-auto">
                <div className="absolute top-6 left-6 md:hidden">
                    <Link to="/">
                        <img src={ipmaLogo} alt="IPMA" className="h-10 w-auto" />
                    </Link>
                </div>

                <div className="w-full max-w-md space-y-8 my-auto">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-display font-bold text-foreground">Create an account</h2>
                        <p className="text-muted-foreground mt-2">Enter your details to get started.</p>
                    </div>

                    <form onSubmit={handleSignUp} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input id="firstName" placeholder="John" className="h-11 rounded-lg" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input id="lastName" placeholder="Doe" className="h-11 rounded-lg" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="doctor@example.com"
                                    className="pl-10 h-11 rounded-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="specialty">Medical Specialty</Label>
                            <div className="relative">
                                <Stethoscope className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="specialty"
                                    placeholder="e.g. Anaesthetist"
                                    className="pl-10 h-11 rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Create a password"
                                    className="pl-10 h-11 rounded-lg"
                                    required
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-12 text-base font-semibold rounded-lg shadow-glow" disabled={isLoading}>
                            {isLoading ? "Creating account..." : "Sign up"}
                        </Button>
                    </form>

                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary font-bold hover:underline">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
