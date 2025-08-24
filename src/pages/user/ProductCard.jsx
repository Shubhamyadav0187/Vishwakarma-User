
import { motion } from "framer-motion";

const ProductCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg"
  >
    <div className="relative h-44 w-full overflow-hidden">
      <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
    <div className="space-y-1 p-4">
      <h4 className="text-base font-semibold text-gray-900">{item.name}</h4>
      {/* <p className="text-sm text-gray-600">{item.price}</p> */}
      {/* <button className="mt-2 w-full rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">Enquire</button> */}
    </div>
  </motion.div>
);

export default ProductCard