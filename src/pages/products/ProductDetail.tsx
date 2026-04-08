import { Link, useParams } from "react-router-dom";
import { categories, products, ProductSection } from "@/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NotFound from "@/pages/NotFound";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- Helper Components ---

const FeaturesGrid = ({ features }: { features: any[] }) => (
    <section className="section-container py-16 lg:py-20">
        <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">Key Capabilities</h2>
        </div>

        <div className="space-y-8">
            {features.map((feature, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-bold font-display text-foreground mb-2">{feature.title}</h3>
                    <p className="text-lg text-foreground/90 leading-relaxed">{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
);

const TextImageSection = ({ section }: { section: Extract<ProductSection, { type: 'text-image' }> }) => (
    <section className="section-container py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Side */}
            <div className={cn("flex flex-col gap-6", section.align === 'right' ? "lg:order-1" : "lg:order-2")}>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">{section.title}</h2>
                <p className="text-lg text-foreground/90 leading-relaxed whitespace-pre-wrap">{section.content}</p>
            </div>

            {/* Image Side */}
            <div className={cn("w-full rounded-2xl overflow-hidden aspect-[4/3]", section.align === 'right' ? "lg:order-2" : "lg:order-1")}>
                <img
                    src={section.image}
                    alt={section.imageAlt || section.title}
                    className="w-full h-full object-contain"
                />
            </div>
        </div>
    </section>
);

const ContentListSection = ({ section }: { section: Extract<ProductSection, { type: 'content-list' }> }) => (
    <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="section-container">
            {section.title && (
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">{section.title}</h2>
                </div>
            )}

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Image Side */}
                <div className={cn("w-full rounded-2xl overflow-hidden aspect-[4/3] lg:sticky lg:top-32", section.align === 'left' ? "lg:order-1" : "lg:order-2")}>
                    <img src={section.image} alt={section.imageAlt || "Section Image"} className="w-full h-full object-contain" />
                </div>

                {/* Content Side */}
                <div className={cn("w-full flex flex-col gap-10", section.align === 'left' ? "lg:order-2" : "lg:order-1")}>
                    {section.items.map((item, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                                {item.title}
                            </h3>
                            <ul className="space-y-3">
                                {item.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex gap-3 text-lg text-foreground/90 leading-relaxed">
                                        <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
    <section className="py-16 lg:py-20 bg-secondary/20">
        <div className="section-container">
            <div className="max-w-3xl space-y-6">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">{section.title}</h2>
                <p className="text-lg text-foreground/90 leading-relaxed">{section.content}</p>
            </div>
        </div>
    </section>
);

const ExperienceBadgeSection = ({ section }: { section: Extract<ProductSection, { type: 'experience-badge' }> }) => (
    <section className="section-container py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">{section.title}</h2>
            </div>
            <div>
                <p className="text-lg text-foreground/90 leading-relaxed">{section.content}</p>
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
            <section className="relative pt-32 pb-16 lg:pb-20">
                <div className="absolute inset-0 bg-secondary/30 -z-20" />

                <div className="section-container">
                    <Link to={`/technologies/${category.slug}`} className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8 font-medium w-fit">
                        <ChevronLeft className="w-4 h-4" /> Back to {category.title}
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Hero Content */}
                        <div className="flex flex-col gap-6 order-2 lg:order-1">
                            <div>
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase text-xs mb-4">{category.title}</span>
                                <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                                    {product.name}
                                </h1>
                            </div>

                            <p className="text-xl text-foreground/90 leading-relaxed">
                                {product.subtitle}
                            </p>

                            <div className="space-y-4">
                                {product.description.map((desc, i) => (
                                    <p key={i} className="text-lg text-foreground/90 leading-relaxed">
                                        {desc}
                                    </p>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg" className="rounded-full text-lg px-8 h-14 bg-primary hover:bg-primary/90">
                                    Enquire Now
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full text-lg px-8 h-14 border-2 bg-transparent">
                                    Download Brochure
                                </Button>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="relative aspect-square flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
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

            {/* Fallback for products without sections */}
            {!product.sections && product.features.length > 0 && (
                <FeaturesGrid features={product.features} />
            )}

            {/* Final CTA */}
            <section className="bg-foreground text-background py-16 lg:py-20">
                <div className="section-container max-w-3xl">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">Ready to transform your practice?</h2>
                    <p className="text-lg opacity-80 mb-10 leading-relaxed">
                        Get in touch with our team to discuss how {product.name} can benefit your patients.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="rounded-full text-lg px-8 h-14 bg-primary text-primary-foreground font-bold hover:bg-primary/90">
                            Request a Demo
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-14 border-white/20 hover:bg-white/10 text-white bg-transparent">
                            Contact Support
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
