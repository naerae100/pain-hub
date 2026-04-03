import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkshopIndex from "./pages/workshops/Index";
import WorkshopDetail from "./pages/workshops/WorkshopDetail";
import ClinicalReferenceCentres from "./pages/workshops/ClinicalReferenceCentres";
import WebinarSeriesPage from "./pages/workshops/WebinarSeriesPage";
import WebinarDetail from "./pages/workshops/WebinarDetail";
import Auth from "./pages/Auth";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./pages/checkout/Cart";
import WpContentPage from "./pages/WpContentPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { WpContentProvider } from "./context/WpContentContext";
import { CartProvider } from "./context/CartContext";
import ProductCategoryIndex from "./pages/products/ProductCategoryIndex";
import ProductList from "./pages/products/ProductList";
import ProductDetail from "./pages/products/ProductDetail";
import Cryotherapy from "./pages/products/Cryotherapy";
import BalloonTechnology from "./pages/products/BalloonTechnology";
import LaserSystems from "./pages/products/LaserSystems";
import Orthobiologics from "./pages/products/Orthobiologics";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Treatments from "./pages/Treatments";
import TreatmentDetail from "./pages/TreatmentDetail";
import CryoanalgesiaDetail from "./pages/treatments/CryoanalgesiaDetail";
import EpiduralBalloonDetail from "./pages/treatments/EpiduralBalloonDetail";
import OrthobiologicTherapiesDetail from "./pages/treatments/OrthobiologicTherapiesDetail";
import PLDDDetail from "./pages/treatments/PLDDDetail";

import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";


const queryClient = new QueryClient();

const App = () => (
  // Main App Component with Routes
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WpContentProvider>
          <CartProvider>
            <ScrollToTop />
            <div className="min-h-screen bg-background flex flex-col">
              <Header />
              <main className="flex-grow flex flex-col">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />

                  {/* Technologies (formerly Products) Routes */}
                  <Route path="/technologies" element={<ProductCategoryIndex />} />
                  <Route path="/technologies/cryotherapy" element={<Cryotherapy />} />
                  <Route path="/technologies/balloon-technology" element={<BalloonTechnology />} />
                  <Route path="/technologies/laser-systems" element={<LaserSystems />} />
                  <Route path="/technologies/orthobiologics" element={<Orthobiologics />} />
                  <Route path="/technologies/:categorySlug" element={<ProductList />} />
                  <Route path="/technologies/:categorySlug/:productSlug" element={<ProductDetail />} />

                  {/* Treatment / Procedures Routes */}
                  <Route path="/procedures" element={<Treatments />} />
                  <Route path="/procedures/cryoanalgesia" element={<CryoanalgesiaDetail />} />
                  <Route path="/procedures/epidural-balloon-decompression" element={<EpiduralBalloonDetail />} />
                  <Route path="/procedures/orthobiologic-therapies" element={<OrthobiologicTherapiesDetail />} />
                  <Route path="/procedures/pldd" element={<PLDDDetail />} />
                  <Route path="/procedures/:slug" element={<TreatmentDetail />} />

                  {/* Clinical Education (formerly Workshops) Routes */}
                  <Route path="/clinical-education" element={<WorkshopIndex />} />
                  <Route path="/clinical-education/reference-centres" element={<ClinicalReferenceCentres />} />
                  <Route path="/clinical-education/webinars-h1-2026" element={<WebinarSeriesPage />} />
                  <Route path="/clinical-education/webinar/:slug" element={<WebinarDetail />} />
                  <Route path="/clinical-education/:slug" element={<WorkshopDetail />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/faq" element={<FAQ />} />

                  <Route path="/contact" element={<Contact />} />
                  <Route path="/*" element={<WpContentPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </CartProvider>
        </WpContentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
