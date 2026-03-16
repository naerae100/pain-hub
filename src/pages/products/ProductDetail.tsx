import { Link, useParams } from "react-router-dom";
import { categories, products, ProductSection } from "@/data/products";
import { ChevronLeft, Check } from "lucide-react";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Helper Components ---

const FeaturesGrid = ({ features }: { features: any[] }) => (
    <section className="section-container py-20 md:py-32">
        {/* Optional Title for consistency */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">Key Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Advanced Technology</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                    <div key={idx} className="flex flex-col gap-5 p-8 rounded-xl bg-secondary/30 border border-slate-100 hover:bg-card hover:shadow-xl transition-all duration-300 group">
                        <h3 className="text-xl font-bold font-display text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
                    </div>
                );
            })}
        </div>
    </section>
);

const TextImageSection = ({ section }: { section: Extract<ProductSection, { type: 'text-image' }> }) => (
    <section className="section-container py-20 md:py-32 overflow-hidden">
        <div className={cn("flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-center")}>
            {/* Content Side */}
            <div className={cn("flex flex-col gap-6 lg:col-span-6", section.align === 'right' ? "lg:order-1" : "lg:order-2")}>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">{section.title}</h2>
                <div className="w-24 h-1.5 bg-primary rounded-full opacity-80" />
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-wrap">{section.content}</p>
            </div>

            {/* Image Side */}
            <div className={cn("w-full relative rounded-2xl overflow-hidden shadow-2xl bg-slate-50 lg:col-span-6 aspect-[4/3] lg:aspect-auto lg:h-[600px]", section.align === 'right' ? "lg:order-2" : "lg:order-1")}>
                <img
                    src={section.image}
                    alt={section.imageAlt || section.title}
                    className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay for text readability if needed, though clean is better */}
            </div>
        </div>
    </section>
);

const ContentListSection = ({ section }: { section: Extract<ProductSection, { type: 'content-list' }> }) => (
    <section className="py-20 md:py-32 bg-secondary/20">
        <div className="section-container">
            {section.title && (
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">{section.title}</h2>
                    <div className="w-24 h-1.5 bg-primary rounded-full mx-auto" />
                </div>
            )}

            <div className={cn("flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-start", section.align === 'left' ? "" : "")}>
                {/* Image Side */}
                <div className={cn("w-full relative rounded-2xl overflow-hidden shadow-2xl lg:col-span-5 h-[500px] lg:sticky lg:top-32 bg-slate-50", section.align === 'left' ? "lg:order-1" : "lg:order-2")}>
                    <img src={section.image} alt={section.imageAlt || "Section Image"} className="w-full h-full object-contain" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent mix-blend-multiply opacity-40" />
                </div>

                {/* Content Side */}
                <div className={cn("w-full flex flex-col gap-12 lg:col-span-7", section.align === 'left' ? "lg:order-2" : "lg:order-1")}>
                    {section.items.map((item, idx) => (
                        <div key={idx} className="bg-background rounded-xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-primary rounded-full" />
                                {item.title}
                            </h3>
                            <ul className="grid gap-4">
                                {item.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex gap-4 text-muted-foreground text-lg leading-relaxed group">
                                        <div className="mt-2 shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

const FullTextSection = ({ section }: { section: Extract<ProductSection, { type: 'full-text' }> }) => (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="section-container">
            <div className={cn("max-w-5xl mx-auto flex flex-col gap-8", section.align === 'center' ? "text-center items-center" : "")}>
                <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">{section.title}</h2>
                <p className="text-xl md:text-3xl opacity-90 leading-relaxed font-light">{section.content}</p>
            </div>
        </div>
    </section>
);

const ExperienceBadgeSection = ({ section }: { section: Extract<ProductSection, { type: 'experience-badge' }> }) => (
    <section className="section-container py-24 md:py-32">
        <div className="relative rounded-2xl overflow-hidden bg-foreground text-background">
            <div className="absolute inset-0">
                <img src={section.image} alt="Background" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="relative z-10 p-12 md:p-24 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-primary font-bold tracking-widest uppercase">Trusted Excellence</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">{section.title}</h2>
                </div>
                <div>
                    <p className="text-xl md:text-2xl leading-relaxed opacity-90">{section.content}</p>
                </div>
            </div>
        </div>
    </section>
);

const ProductDetail = () => {
    const { categorySlug, productSlug } = useParams();
    const category = categories.find(c => c.slug === categorySlug);
    const product = products.find(p => p.slug === productSlug);

    if (!category || !product) {
        return <NotFound />;
    }

    return (
        <div className="flex-1 flex flex-col bg-background">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex flex-col">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-secondary/30 -z-20" />
                <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent opacity-60 -z-10" />

                <div className="flex-1 section-container flex flex-col justify-center pt-32 pb-20">
                    <Link to={`/technologies/${category.slug}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-medium w-fit">
                        <ChevronLeft className="w-4 h-4" /> Back to {category.title}
                    </Link>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        {/* Hero Content */}
                        <div className="lg:col-span-6 flex flex-col gap-8 animate-in slide-in-from-left duration-700 fade-in order-2 lg:order-1">
                            <div>
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs mb-4">{category.title}</span>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.9] -ml-1">
                                    {product.name}
                                </h1>
                            </div>

                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                                {product.subtitle}
                            </p>

                            <div className="flex flex-col gap-4 pl-6 border-l-4 border-primary/20">
                                {product.description.map((desc, i) => (
                                    <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                                        {desc}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg" className="rounded-full text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                                    Enquire Now
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 h-14 border-2 bg-transparent">
                                    Download Brochure
                                </Button>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="lg:col-span-6 relative animate-in slide-in-from-right duration-700 fade-in order-1 lg:order-2">
                            {/* Abstract Shapes behind image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full bg-white blur-3xl opacity-60 -z-10" />

                            <div className="relative aspect-square lg:aspect-[4/5] flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Sections */}
            <div className="flex flex-col">
                {product.sections?.map((section, idx) => {
                    switch (section.type) {
                        case 'features-grid':
                            return <FeaturesGrid key={idx} features={product.features} />;
                        case 'text-image':
                            return <TextImageSection key={idx} section={section} />;
                        case 'content-list':
                            return <ContentListSection key={idx} section={section} />;
                        case 'full-text':
                            return <FullTextSection key={idx} section={section} />;
                        case 'experience-badge':
                            return <ExperienceBadgeSection key={idx} section={section} />;
                        default:
                            return null;
                    }
                })}
            </div>

            {/* Fallback for products without sections (Legacy/Placeholder support) */}
            {!product.sections && product.features.length > 0 && (
                <FeaturesGrid features={product.features} />
            )}

            {/* Final CTA */}
            <section className="bg-foreground text-background py-24 md:py-32">
                <div className="section-container text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to transform your practice?</h2>
                    <p className="text-xl md:text-2xl opacity-80 mb-12 leading-relaxed">
                        Get in touch with our team to discuss how {product.name} can benefit your patients.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="rounded-full text-lg px-12 h-16 bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-xl shadow-primary/20">
                            Request a Demo
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg px-12 h-16 border-white/20 hover:bg-white/10 text-white bg-transparent">
                            Contact Support
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
