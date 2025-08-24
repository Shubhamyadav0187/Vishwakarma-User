import { motion } from "framer-motion";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);


const WhereToPage = () => {
  // Replace with your actual shop coordinates/address
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent("Hardware Store, NH-12 Main Market, Your City")}&output=embed`;
  return (
    <main className="py-39">
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-2xl font-bold">
          Find Our Shop
        </motion.h2>
        <p className="mb-4 text-white">Tap the button for live directions or use the embedded map below.</p>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Hardware Store, NH-12 Main Market, Your City")}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Get Directions
        </a>
        <div className="mt-6 overflow-hidden rounded-2xl shadow">
          <iframe
            title="Shop Location"
            src={mapSrc}
            width="100%"
            height="420"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </main>
  );
};

export default WhereToPage