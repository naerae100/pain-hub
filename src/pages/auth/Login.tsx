import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Lock, Mail } from "lucide-react";
import ipmaLogo from "@/assets/ipma-logo.webp";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            navigate("/checkout");
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background">
            {/* Left Panel - Image/Brand */}
            <div className="hidden md:flex flex-col justify-between w-1/2 lg:w-[45%] bg-slate-900 border-r border-white/5 relative overflow-hidden p-12 text-white">
                <div className="absolute inset-0 bg-[url('/src/assets/hero-surgery.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-slate-900/90" />
                <div className="absolute inset-0 pattern-grid opacity-10" />

                <div className="relative z-10">
                    <Link to="/" className="inline-block mb-8">
                        <img src={ipmaLogo} alt="IPMA" className="h-12 w-auto brightness-0 invert" />
                    </Link>
                    <h1 className="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
                        Advancing Interventional Pain Management
                    </h1>
                    <p className="text-lg text-white/70 max-w-md">
                        Join Australia's leading community of pain management specialists.
                    </p>
                </div>

                <div className="relative z-10 text-sm text-white/50">
                    © {new Date().getFullYear()} IPMA. All rights reserved.
                </div>
            </div>

            {/* Right Panel - Form */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 relative">
                <div className="absolute top-6 left-6 md:hidden">
                    <Link to="/">
                        <img src={ipmaLogo} alt="IPMA" className="h-10 w-auto" />
                    </Link>
                </div>

                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-display font-bold text-foreground">Welcome back</h2>
                        <p className="text-muted-foreground mt-2">Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="doctor@example.com"
                                    className="pl-10 h-11 rounded-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link to="#" className="text-sm text-primary font-medium hover:underline">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="pl-10 h-11 rounded-lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full h-12 text-base font-semibold rounded-lg shadow-glow" disabled={isLoading}>
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>

                    <div className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-primary font-bold hover:underline">
                            Create an account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
