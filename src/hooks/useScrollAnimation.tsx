import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
};

// Convenience component wrapper
interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
    delay?: number;
}

export const ScrollReveal = ({ children, className = "", animation = "fade-up", delay = 0 }: ScrollRevealProps) => {
    const { ref, isVisible } = useScrollAnimation();

    const animations: Record<string, string> = {
        "fade-up": "translate-y-8 opacity-0",
        "fade-in": "opacity-0",
        "slide-left": "-translate-x-8 opacity-0",
        "slide-right": "translate-x-8 opacity-0",
        "scale": "scale-95 opacity-0",
    };

    const visibleClass = "translate-y-0 translate-x-0 opacity-100 scale-100";
    const hiddenClass = animations[animation] || animations["fade-up"];

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? visibleClass : hiddenClass} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};
