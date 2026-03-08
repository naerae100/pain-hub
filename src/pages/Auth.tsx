import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, User, Lock, Mail, ArrowRight, Eye, EyeOff, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ipmaLogo from "@/assets/ipma-logo.webp";

const Auth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [authMode, setAuthMode] = useState<"login" | "signup">("login");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            console.log("Auth action:", authMode);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-secondary/30 flex flex-col md:flex-row">
            {/* Left Side: Brand/Image */}
            <div className="md:w-1/2 bg-blue-900 relative overflow-hidden flex flex-col justify-between p-12 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    <Link to="/" className="inline-block mb-12 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </div>
                    </Link>
                    <img src={ipmaLogo} alt="IPMA" className="h-12 w-auto mb-8 brightness-0 invert" />
                    <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                        Join the future of <span className="text-primary">pain management.</span>
                    </h1>
                    <p className="text-lg text-blue-100 max-w-md leading-relaxed">
                        Access exclusive clinical workshops, cutting-edge protocols, and a community of elite practitioners.
                    </p>
                </div>

                <div className="relative z-10 mt-12 flex items-center gap-4 text-sm font-medium text-blue-200">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-slate-200" style={{ backgroundImage: `url(https://i.pravatar.cc/150?img=${i + 10})`, backgroundSize: 'cover' }} />
                        ))}
                    </div>
                    <p>Join 2,500+ professionals</p>
                </div>
            </div>

            {/* Right Side: Auth Form */}
            <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16 relative">
                <div className="w-full max-w-md">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-display font-bold text-blue-900 mb-2">
                            {authMode === "login" ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="text-muted-foreground">
                            {authMode === "login" ? "Enter your credentials to access your account." : "Fill in your details to start your journey."}
                        </p>
                    </div>

                    <Tabs defaultValue="login" className="w-full" onValueChange={(val) => setAuthMode(val as "login" | "signup")}>
                        <TabsList className="grid w-full grid-cols-2 mb-8 h-12 bg-white border border-border rounded-full p-1">
                            <TabsTrigger value="login" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white font-medium transition-all">Sign In</TabsTrigger>
                            <TabsTrigger value="signup" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white font-medium transition-all">Sign Up</TabsTrigger>
                        </TabsList>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={authMode}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {authMode === "signup" && (
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="relative">
                                                    <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                                    <Input placeholder="Full Name" className="pl-10 h-12 bg-white border-slate-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                            <Input type="email" placeholder="Email Address" className="pl-10 h-12 bg-white border-slate-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                            <Input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Password"
                                                className="pl-10 pr-10 h-12 bg-white border-slate-200 focus:border-primary focus:ring-primary/20 transition-all rounded-xl"
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                                            >
                                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                    </div>

                                    {authMode === "login" && (
                                        <div className="flex justify-end">
                                            <Link to="#" className="text-sm font-semibold text-primary hover:underline">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    )}

                                    {authMode === "signup" && (
                                        <div className="text-xs text-muted-foreground flex items-start gap-2 bg-blue-50/50 p-3 rounded-lg">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>By creating an account, you agree to our Terms of Service and Privacy Policy.</span>
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Processing..." : (authMode === "login" ? "Sign In" : "Create Account")}
                                        {!isLoading && <ArrowRight className="ml-2 w-4 h-4" />}
                                    </Button>
                                </form>
                            </motion.div>
                        </AnimatePresence>
                    </Tabs>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            {authMode === "login" ? "Don't have an account?" : "Already have an account?"}
                            <button
                                onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                                className="ml-1 font-bold text-primary hover:underline focus:outline-none"
                            >
                                {authMode === "login" ? "Sign up" : "Log in"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
