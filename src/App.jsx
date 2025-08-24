import React, { useMemo, useEffect } from "react";
import { HashRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
// import { Menu, X, Phone } from "lucide-react";
// import { Link } from "react-router-dom";
import Loader from "./Loader"; 
import WhereToPage from "./pages/user/WhereToPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import Hero from "./pages/user/Hero";
import HomePage from "./pages/user/HomePage";
import ProductsPage from "./pages/user/ProductsPage";
/**
 * Hardware Shop UIrtjyg vbgt
 * - React + TailwindCSS
 * - Framer Motion animations
 * - Swiper carousels per category
 * - Routing with a dedicated "Where To" (location) page
 * - Responsive + modern design
 *
 * Notes:
 * - Replace placeholder images and shop coordinates with real data.
 * - For a real admin upload flow, connect to your backend (e.g., Firebase, Supabase, Node/Express + DB)
 */

// --- Mock Data --------------------------------------------------------------




// --- UI Primitives ----------------------------------------------------------
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Pill = ({ active, children }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition
    ${active ? "bg-blue-600 text-white" : "bg-white/80 text-gray-800 hover:bg-white"}`}
  >
    {children}
  </span>
);





// --- Layout Components ------------------------------------------------------
// const Navbar = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
//       <Container className="flex h-16 items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-600 text-white">V</div>
//           <span className="text-lg font-bold">Vishwakarma </span>
//         </div>
//         <nav className="hidden gap-6 md:flex">
//           <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600")}>
//             Home
//           </NavLink>
//           <NavLink to="/products" className={({ isActive }) => (isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600")}>
//             Products
//           </NavLink>
//           <button onClick={() => navigate("/where-to")}
//             className="rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
//             Where to?
//           </button>
//         </nav>
//         <button onClick={() => navigate("/where-to")} className="md:hidden rounded-xl bg-blue-600 px-3 py-2 text-white">Where to?</button>
//       </Container>
//     </div>
//   );
// };










// --- Pages ------------------------------------------------------------------





// const WhereToPage = () => {
//   // Replace with your actual shop coordinates/address
//   const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent("Hardware Store, NH-12 Main Market, Your City")}&output=embed`;
//   return (
//     <main className="py-8">
//       <Container>
//         <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-2xl font-bold">
//           Find Our Shop
//         </motion.h2>
//         <p className="mb-4 text-gray-600">Tap the button for live directions or use the embedded map below.</p>
//         <a
//           href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Hardware Store, NH-12 Main Market, Your City")}`}
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
//         >
//           Get Directions
//         </a>
//         <div className="mt-6 overflow-hidden rounded-2xl shadow">
//           <iframe
//             title="Shop Location"
//             src={mapSrc}
//             width="100%"
//             height="420"
//             loading="lazy"
//             className="border-0"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </Container>
//     </main>
//   );
// };


// --- App --------------------------------------------------------------------
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // 2.5s loader
    return () => clearTimeout(timer);
  }, []);
  return (

    <Router>
      {loading ? <Loader /> :
        <div className="min-h-screen bg-gradient-to-r from-[#0B0C10] to-blue-900 text-[#66FCF1]">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/where-to" element={<WhereToPage />} />
          </Routes>
          <Footer />
        </div>
      }


    </Router>
  );
}

export default App;

