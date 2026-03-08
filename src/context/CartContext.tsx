import { createContext, useContext, useState, ReactNode } from "react";
import { Workshop } from "@/data/workshops";

interface CartContextType {
    item: Workshop | null;
    addToCart: (workshop: Workshop) => void;
    removeFromCart: () => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [item, setItem] = useState<Workshop | null>(null);

    const addToCart = (workshop: Workshop) => {
        setItem(workshop);
    };

    const removeFromCart = () => {
        setItem(null);
    };

    const clearCart = () => {
        setItem(null);
    };

    return (
        <CartContext.Provider value={{ item, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
