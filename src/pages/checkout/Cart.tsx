import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2, ArrowRight, ShoppingBag, ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
    const { item, removeFromCart } = useCart();
    const navigate = useNavigate();

    if (!item) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center bg-secondary/20">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <ShoppingBag className="w-10 h-10 text-muted-foreground/50" />
                </div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Your cart is empty</h2>
                <p className="text-muted-foreground mb-8 max-w-md text-lg">
                    Looks like you haven't added any workshops or products yet.
                </p>
                <Link to="/clinical-education">
                    <Button size="lg" className="rounded-full px-8 font-bold">
                        Browse Workshops
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-secondary/10 pt-12 pb-24">
            <div className="section-container">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Shopping Cart</h1>
                    <p className="text-muted-foreground mt-2 text-lg">Review your selection before checkout.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm">
                            <div className="hidden md:grid grid-cols-12 gap-4 p-6 bg-secondary/30 text-sm font-bold text-foreground uppercase tracking-wider border-b border-border">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-2 text-center">Price</div>
                                <div className="col-span-2 text-center">Quantity</div>
                                <div className="col-span-2 text-right">Total</div>
                            </div>

                            <div className="p-6 md:p-0">
                                {/* Item Row */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 md:p-6 items-center">
                                    <div className="md:col-span-6 flex items-center gap-6">
                                        <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-xl flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}></div>
                                        <div>
                                            <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{item.date ? "Workshop" : "Product"}</div>
                                            <h3 className="text-xl font-bold text-foreground leading-tight mb-2">{item.title}</h3>
                                            {item.date && (
                                                <div className="text-sm text-muted-foreground">{item.date} • {item.location}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 md:text-center text-lg font-medium text-foreground/90">
                                        <span className="md:hidden font-bold text-foreground/60 text-xs uppercase mr-2">Price:</span>
                                        {item.price}
                                    </div>

                                    <div className="md:col-span-2 flex md:justify-center items-center">
                                        <span className="md:hidden font-bold text-foreground/60 text-xs uppercase mr-4">Qty:</span>
                                        <div className="w-12 h-10 border border-border rounded-lg flex items-center justify-center font-bold bg-slate-50">1</div>
                                    </div>

                                    <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4">
                                        <span className="md:hidden font-bold text-foreground/60 text-xs uppercase">Total:</span>
                                        <div className="text-xl font-bold text-foreground">{item.price}</div>
                                        <button
                                            onClick={removeFromCart}
                                            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-full transition-colors ml-2"
                                            title="Remove item"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-between items-center">
                            <Link to="/clinical-education" className="text-muted-foreground hover:text-primary font-medium flex items-center gap-2 transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Continue Shopping
                            </Link>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-3xl border border-border shadow-lg sticky top-28">
                            <h3 className="text-2xl font-display font-bold text-foreground mb-6">Order Summary</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-foreground">{item.price}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground">
                                    <span>GST (10%)</span>
                                    <span className="font-medium text-foreground">Included</span>
                                </div>
                            </div>

                            <Separator className="mb-6" />

                            <div className="flex justify-between items-end mb-8">
                                <span className="text-lg font-bold text-foreground">Total</span>
                                <span className="text-3xl font-bold text-primary">{item.price}</span>
                            </div>

                            <Button
                                onClick={() => navigate("/checkout")}
                                className="w-full h-14 text-lg font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                            >
                                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <div className="mt-6 text-xs text-center text-muted-foreground leading-relaxed">
                                Secure checkout powered by Stripe.
                                <br />All prices are in AUD.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
