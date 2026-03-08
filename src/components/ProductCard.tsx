import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product, categories } from "@/data/products";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    // Card component for displaying product details
    // Find category to build the URL
    const category = categories.find(c => c.id === product.categoryId);
    const categorySlug = category?.slug || 'unknown';

    return (
        <Link
            to={`/technologies/${categorySlug}/${product.slug}`}
            className="group bg-card rounded-[2rem] border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
        >
            <div className="aspect-square relative overflow-hidden bg-slate-50/50 p-6 flex items-center justify-center group-hover:bg-slate-100/50 transition-colors">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                </h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed flex-1">
                    {product.subtitle}
                </p>

                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wide text-sm mt-auto">
                    View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
