import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="section-container py-24">
      <div className="surface-card p-10 text-center">
        <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">404</div>
        <h1 className="mt-4 text-3xl md:text-4xl font-display font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you were looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
