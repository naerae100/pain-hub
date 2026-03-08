import { useState } from "react";
import { Link } from "react-router-dom";
import { categories, products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { cn } from "@/lib/utils";
import { ArrowRight, Snowflake, Circle, Zap, Droplets } from "lucide-react";
import PageHero from "@/components/PageHero";
import technologiesHero from "@/assets/Technologies.png";

const proceduralPlatforms = [
    {
        title: "Cryotherapy",
        description: "Targeted nerve modulation for pain and spasticity management.",
        href: "/technologies/cryotherapy",
        icon: Snowflake,
        color: "bg-blue-100 text-blue-600",
    },
    {
        title: "Balloon Catheter Technology",
        description: "Epidural balloon decompression and adhesiolysis systems for structural spine pathology.",
        href: "/technologies/balloon-technology",
        icon: Circle,
        color: "bg-amber-100 text-amber-600",
    },
    {
        title: "Orthobiologics",
        description: "Platelet-based and bone marrow–derived biologics supporting musculoskeletal and spine care.",
        href: "/technologies/orthobiologics",
        icon: Droplets,
        color: "bg-rose-100 text-rose-600",
    },
    {
        title: "Laser Systems",
        description: "Image-guided laser technologies used in pain and spine-related procedures (e.g. PLDD).",
        href: "/technologies/laser-systems",
        icon: Zap,
        color: "bg-green-100 text-green-600",
    },
];

const ProductCategoryIndex = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    // Filter products based on selected category
    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.categoryId === selectedCategory);

    return (
        <div className="flex-1 flex flex-col w-full">

            {/* Hero Section */}
            <PageHero
                image={technologiesHero}
                title="Technology Supporting Contemporary Interventional Pain Care"
                subtitle=""
                breadcrumbs={[{ label: "Technologies" }]}
            />

            {/* Procedural Platforms */}
            <section className="section-container py-20 lg:py-24">
                <div className="mb-12">
                    <div className="flex items-center gap-3 text-primary uppercase tracking-wider font-bold text-sm mb-4">
                        <span className="w-8 h-[2px] bg-primary"></span>
                        Procedural Platforms
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
                        Technologies enabling minimally invasive interventional procedures
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl">
                        Please note that the order of these are the same as in Procedures.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {proceduralPlatforms.map((platform) => (
                        <Link
                            key={platform.title}
                            to={platform.href}
                            className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${platform.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <platform.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {platform.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                                {platform.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                Learn More <ArrowRight className="w-4 h-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Shop by Category Section */}
            <section className="section-container pt-4 pb-12 border-t border-border">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-display font-bold text-foreground">Shop by Category</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            to={`/technologies/${category.slug}`}
                            className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                                <h3 className="text-white font-bold text-lg md:text-xl truncate drop-shadow-md">
                                    {category.title}
                                </h3>
                                <div className="flex items-center gap-2 text-primary-foreground/80 text-xs font-medium uppercase tracking-wider mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    View Products <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Catalog Section */}
            <main className="section-container pb-24 pt-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-display font-bold text-foreground mb-2">Explore All Solutions</h2>
                        <p className="text-muted-foreground">Browse our complete inventory of medical devices.</p>
                    </div>
                </div>

                {/* Category Filter Bar */}
                <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm py-4 mb-8 border-b border-border/50">
                    {/* Mobile: Dropdown */}
                    <div className="md:hidden">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full h-12 px-4 rounded-xl border border-input bg-background/50 text-base focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none"
                            style={{ backgroundImage: 'none' }} // Remove default arrow if customized
                        >
                            <option value="all">View All Solutions</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.title}
                                </option>
                            ))}
                        </select>
                        {/* Custom arrow icon overlay could be added here if needed, keeping it simple for now */}
                    </div>

                    {/* Desktop: Buttons */}
                    <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={cn(
                                "px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 whitespace-nowrap border",
                                selectedCategory === "all"
                                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                                    : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                            )}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 whitespace-nowrap border",
                                    selectedCategory === category.id
                                        ? "bg-primary text-primary-foreground border-primary shadow-md"
                                        : "bg-card text-muted-foreground border-border hover:border-primary hover:text-primary"
                                )}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[50vh]">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center text-muted-foreground">
                            <p className="text-lg">No products found in this category.</p>
                            <button
                                onClick={() => setSelectedCategory("all")}
                                className="mt-4 text-primary font-bold hover:underline"
                            >
                                View all products
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ProductCategoryIndex;
