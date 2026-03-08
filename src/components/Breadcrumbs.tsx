import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

const Breadcrumbs = ({ items, className = "" }: BreadcrumbsProps) => {
    return (
        <nav aria-label="Breadcrumb" className={`flex items-center gap-1.5 text-sm ${className}`}>
            <Link
                to="/"
                className="flex items-center gap-1 text-white/60 hover:text-white transition-colors duration-200"
            >
                <Home className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Home</span>
            </Link>
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                    {item.href && index < items.length - 1 ? (
                        <Link
                            to={item.href}
                            className="text-white/60 hover:text-white transition-colors duration-200"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white/90 font-medium">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumbs;
