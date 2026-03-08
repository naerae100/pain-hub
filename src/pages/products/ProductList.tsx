import { Link, useParams } from "react-router-dom";
import { categories, products } from "@/data/products";
import { ArrowRight, ChevronLeft } from "lucide-react";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";

const ProductList = () => {
    const { categorySlug } = useParams();
    const category = categories.find(c => c.slug === categorySlug);

    if (!category) return <NotFound />;

    const categoryProducts = products.filter(p => p.categoryId === category.id);

    return (
        <div className="flex-1 flex flex-col">

            {/* Hero Section */}
            <section className="bg-secondary/30 pt-32 pb-20 border-b border-border">
                <div className="section-container">
                    <Link to="/technologies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 font-medium">
                        <ChevronLeft className="w-4 h-4" /> Back to Categories
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                        {category.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                        {category.description}
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <main className="flex-1 section-container py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/technologies/${category.slug}/${product.slug}`}
                            className="group bg-card rounded-[2rem] border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden bg-white p-8 flex items-center justify-center">
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
                    ))}

                    {categoryProducts.length === 0 && (
                        <div className="col-span-full py-20 text-center text-muted-foreground">
                            <p className="text-lg">No products found in this category yet.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProductList;
