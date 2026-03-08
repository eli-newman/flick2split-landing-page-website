import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-flick-blue">
      <Helmet>
        <title>Page Not Found | FLICK2SPLIT</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <Navbar />

      <section className="pt-32 pb-20 px-4 hero-gradient">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <span className="inline-block bg-flick-yellow/20 text-flick-yellow px-3 py-1 rounded-full text-sm font-medium mb-4">
              404
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-flick-white mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
              Return to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
