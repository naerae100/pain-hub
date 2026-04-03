import Breadcrumbs from "./Breadcrumbs";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeroProps {
    image: string;
    title: string;
    subtitle?: string;
    breadcrumbs?: BreadcrumbItem[];
    imagePosition?: string;
}

const PageHero = ({ image, title, subtitle, breadcrumbs, imagePosition }: PageHeroProps) => {
    return (
        <section className="relative w-full h-screen min-h-[500px] overflow-hidden">
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover ${imagePosition || 'object-center'}`}
                loading="eager"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />

            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
                <div className="absolute top-6 left-0 right-0 z-20 section-container">
                    <Breadcrumbs items={breadcrumbs} />
                </div>
            )}

            {/* Title & Subtitle */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 max-w-4xl leading-tight animate-fade-in">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed animate-fade-in delay-200">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
