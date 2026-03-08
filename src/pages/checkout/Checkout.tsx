import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Lock, ShieldCheck } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Checkout = () => {
    const { item } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    // If no item in cart (direct access), show empty state or redirect
    if (!item) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[60vh]">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8">Please select a workshop to register.</p>
                <Link to="/clinical-education">
                    <Button>Browse Workshops</Button>
                </Link>
            </div>
        );
    }

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            alert("Registration Successful! (Mock)");
            navigate("/");
        }, 2000);
    };

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Page Title */}
            <div className="bg-secondary/30 py-16 mb-12 border-b border-border">
                <div className="section-container text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Checkout</h1>
                    <p className="text-muted-foreground mt-4 text-lg">Complete your registration securely.</p>
                </div>
            </div>

            <main className="section-container">
                <form onSubmit={handlePayment} className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Billing Details */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4 border-b border-border pb-6">
                            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">1</div>
                            <h3 className="text-2xl font-display font-bold">Billing Details</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-base font-medium">First name</Label>
                                <Input id="firstName" required className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-base font-medium">Last name</Label>
                                <Input id="lastName" required className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="company" className="text-base font-medium">Company name (optional)</Label>
                            <Input id="company" className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country" className="text-base font-medium">Country / Region</Label>
                            <Select defaultValue="au">
                                <SelectTrigger className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all">
                                    <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="au">Australia</SelectItem>
                                    <SelectItem value="nz">New Zealand</SelectItem>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="street" className="text-base font-medium">Street address</Label>
                            <Input id="street" placeholder="House number and street name" required className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all mb-3" />
                            <Input placeholder="Apartment, suite, unit, etc. (optional)" className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="suburb" className="text-base font-medium">Suburb</Label>
                            <Input id="suburb" required className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="state" className="text-base font-medium">State</Label>
                            <Select defaultValue="nsw">
                                <SelectTrigger className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all">
                                    <SelectValue placeholder="Select a state" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="nsw">New South Wales</SelectItem>
                                    <SelectItem value="vic">Victoria</SelectItem>
                                    <SelectItem value="qld">Queensland</SelectItem>
                                    <SelectItem value="wa">Western Australia</SelectItem>
                                    <SelectItem value="sa">South Australia</SelectItem>
                                    <SelectItem value="tas">Tasmania</SelectItem>
                                    <SelectItem value="act">Australian Capital Territory</SelectItem>
                                    <SelectItem value="nt">Northern Territory</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="postcode" className="text-base font-medium">Postcode</Label>
                                <Input id="postcode" required className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-base font-medium">Phone</Label>
                                <Input id="phone" type="tel" required className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-base font-medium">Email address</Label>
                            <Input id="email" type="email" required className="h-12 rounded-xl bg-card border-border focus:ring-2 focus:ring-primary/20 transition-all" />
                        </div>

                        <div className="space-y-2 pt-4">
                            <Label htmlFor="notes" className="text-base font-medium">Order notes (optional)</Label>
                            <textarea
                                id="notes"
                                className="flex w-full rounded-xl border border-border bg-card px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] transition-all"
                                placeholder="Notes about your order, e.g. special notes for delivery."
                            />
                        </div>
                    </div>

                    {/* Right Column: Your Order */}
                    <div>
                        <div className="surface-card p-8 md:p-10 sticky top-28 border border-border/50 shadow-xl">
                            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                                Your Order
                            </h3>

                            <table className="w-full text-sm mb-8">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 font-bold text-foreground">Product</th>
                                        <th className="text-right py-3 font-bold text-foreground">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    <tr>
                                        <td className="py-5 pr-4">
                                            <span className="text-foreground font-semibold text-base block mb-1">{item.title}</span>
                                            <span className="text-muted-foreground text-xs">Qty: 1</span>
                                        </td>
                                        <td className="py-5 text-right font-medium">{item.price}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-5 font-bold text-foreground">Subtotal</td>
                                        <td className="py-5 text-right font-medium">{item.price}</td>
                                    </tr>
                                    <tr className="border-b-2 border-border">
                                        <td className="py-5 font-bold text-xl text-foreground">Total</td>
                                        <td className="py-5 text-right font-bold text-2xl text-primary">{item.price}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="bg-secondary/30 p-6 mb-8 rounded-2xl border border-border/50">
                                <RadioGroup defaultValue="card">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <RadioGroupItem value="card" id="card" />
                                        <Label htmlFor="card" className="font-bold text-base cursor-pointer">Credit Card (Stripe)</Label>
                                    </div>
                                    <div className="pl-7 text-sm text-muted-foreground mb-6 leading-relaxed">
                                        Pay securely using your credit card. All transactions are encrypted and secure.
                                    </div>

                                    <div className="pl-7 space-y-4">
                                        <div className="relative">
                                            <Input placeholder="Card Number" className="h-12 rounded-xl bg-white border-border pl-10" />
                                            <CreditCard className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input placeholder="MM / YY" className="h-12 rounded-xl bg-white border-border" />
                                            <div className="relative">
                                                <Input placeholder="CVC" className="h-12 rounded-xl bg-white border-border pl-10" />
                                                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="text-xs text-muted-foreground mb-8 leading-relaxed text-center">
                                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="underline hover:text-primary">privacy policy</a>.
                            </div>

                            <Button type="submit" className="w-full h-14 text-lg font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5" disabled={isProcessing}>
                                {isProcessing ? "Processing..." : "Place Order"}
                            </Button>

                            <div className="mt-6 flex justify-center gap-4 text-muted-foreground/40">
                                <CreditCard className="w-6 h-6" />
                                <ShieldCheck className="w-6 h-6" />
                                <Lock className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Checkout;
