const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

import { motion } from "framer-motion";
const Pill = ({ active, children }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm shadow-sm transition
    ${active ? "bg-blue-600 text-white" : "bg-white/80 text-gray-800 hover:bg-white"}`}
  >
    {children}
  </span>
);
const CATEGORIES = [
  { key: "Tiles", icon: "🧱" },
  { key: "Steel", icon: "🛠️" },
  { key: "Iron", icon: "⚙️" },
  { key: "Aluminium", icon: "🔩" },
  { key: "Cement", icon: "🏗️" },
  { key: "Paints", icon: "🎨" },
  { key: "Plumbing", icon: "🚰" },
];

const Hero = () => (
  <section className=" relative isolate overflow-hidden bg-gradient-to-r from-[#0B0C10] to-blue-900">
    <Container className="grid items-center gap-8 py-29 md:grid-cols-2 md:py-32">
      <div className="">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl  text-[#45A29E] font-extrabold leading-tight sm:text-4xl lg:text-5xl"
        >
          One-Stop Hardware Shop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-white"
        >
          Explore tiles, steel, iron, aluminium, cement, paints, plumbing and more—curated by category with smooth sliders.
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-3 ">
          {CATEGORIES.slice(0, 6).map((c) => (
            <Pill key={c.key}><span>{c.icon}</span> {c.key}</Pill>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-64 w-full overflow-hidden rounded-3xl shadow lg:h-80"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfg4CMPKSznBLWi2UQgZb0Wxdw9aJj5xL_mQ&s"
          alt="Hardware collage"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
      </motion.div>
    </Container>
  </section>
);

export default Hero