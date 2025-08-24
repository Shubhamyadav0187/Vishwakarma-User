import { motion } from "framer-motion";
import CategorySlider from "./CategorySlider";
const PRODUCT_DB = {
  Tiles: [
    { id: "t1", name: "Matt Floor Tile", price: "₹240 / sqft", img: "https://www.kajariaceramics.com/concept-picture/high001670.jpg" },
    { id: "t2", name: "Glossy Wall Tile", price: "₹310 / sqft", img: "https://www.deltaware.in/images/product/tiles-floor-1x1-matte_hu81e986848479647bc73125b0948b2562_59143_1000x1000_resize_q85_box.jpg" },
    { id: "t3", name: "Outdoor Anti-Skid", price: "₹280 / sqft", img: "https://assets-news.housing.com/news/wp-content/uploads/2023/07/06182949/How-much-do-Kajaria-tiles-cost-f.jpg" },
    { id: "t4", name: "Mosaic Tile", price: "₹350 / sqft", img: "https://assets-news.housing.com/news/wp-content/uploads/2023/07/06182949/How-much-do-Kajaria-tiles-cost-f.jpg" },
  ],
  Steel: [
    { id: "s1", name: "TMT Bar 12mm", price: "₹65 / kg", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop" },
    { id: "s2", name: "Steel Sheet", price: "₹88 / kg", img: "https://images.unsplash.com/photo-1581094651181-3592e61e0ef8?q=80&w=1200&auto=format&fit=crop" },
    { id: "s3", name: "Steel Angle", price: "₹72 / kg", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop" },
    { id: "s4", name: "Binding Wire", price: "₹68 / kg", img: "https://images.unsplash.com/photo-1619743909958-67f182947734?q=80&w=1200&auto=format&fit=crop" },
  ],
  Iron: [
    { id: "i1", name: "Iron Rod", price: "₹60 / kg", img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200&auto=format&fit=crop" },
    { id: "i2", name: "GI Pipe", price: "₹78 / kg", img: "https://images.unsplash.com/photo-1617977277886-1d2d2a0b97c3?q=80&w=1200&auto=format&fit=crop" },
    { id: "i3", name: "Iron Sheet", price: "₹70 / kg", img: "https://images.unsplash.com/photo-1569428034239-f9565e32d23a?q=80&w=1200&auto=format&fit=crop" },
    { id: "i4", name: "Iron Channel", price: "₹74 / kg", img: "https://images.unsplash.com/photo-1581092431279-43e5f3fa4031?q=80&w=1200&auto=format&fit=crop" },
  ],
  Aluminium: [
    { id: "a1", name: "Aluminium Sheet", price: "₹230 / kg", img: "https://images.unsplash.com/photo-1534841090574-cba2d9b7ea2b?q=80&w=1200&auto=format&fit=crop" },
    { id: "a2", name: "Alu. Section", price: "₹260 / kg", img: "https://images.unsplash.com/photo-1613391875967-5c7a8f8cbd1d?q=80&w=1200&auto=format&fit=crop" },
    { id: "a3", name: "Alu. Coil", price: "₹245 / kg", img: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?q=80&w=1200&auto=format&fit=crop" },
    { id: "a4", name: "Alu. Rod", price: "₹255 / kg", img: "https://images.unsplash.com/photo-1612878010586-4f3f2e2c58f1?q=80&w=1200&auto=format&fit=crop" },
  ],
  Cement: [
    { id: "c1", name: "OPC 53 Grade", price: "₹380 / bag", img: "https://images.unsplash.com/photo-1626776876988-51836c3c2a3b?q=80&w=1200&auto=format&fit=crop" },
    { id: "c2", name: "PPC Cement", price: "₹360 / bag", img: "https://images.unsplash.com/photo-1559060017-0226b124de3a?q=80&w=1200&auto=format&fit=crop" },
    { id: "c3", name: "Rapid Hardening", price: "₹410 / bag", img: "https://images.unsplash.com/photo-1600490219512-44e9b4d1c2a1?q=80&w=1200&auto=format&fit=crop" },
  ],
  Paints: [
    { id: "p1", name: "Interior Emulsion", price: "₹1200 / 10L", img: "https://images.unsplash.com/photo-1621351183012-e2f9972dd1f9?q=80&w=1200&auto=format&fit=crop" },
    { id: "p2", name: "Exterior Emulsion", price: "₹1400 / 10L", img: "https://images.unsplash.com/photo-1582582622249-94c49d4a5b2c?q=80&w=1200&auto=format&fit=crop" },
    { id: "p3", name: "Primer", price: "₹600 / 10L", img: "https://images.unsplash.com/photo-1582582622191-8b67a6d1d357?q=80&w=1200&auto=format&fit=crop" },
  ],
  Plumbing: [
    { id: "pl1", name: "PVC Pipe 2\"", price: "₹220 / piece", img: "https://images.unsplash.com/photo-1629276304790-4d9b9d182d4a?q=80&w=1200&auto=format&fit=crop" },
    { id: "pl2", name: "Elbow Fitting", price: "₹45 / piece", img: "https://images.unsplash.com/photo-1610641818989-1c0e1b1a7b2b?q=80&w=1200&auto=format&fit=crop" },
    { id: "pl3", name: "Sink Mixer", price: "₹1450", img: "https://images.unsplash.com/photo-1586201375754-1421e0aa2f4c?q=80&w=1200&auto=format&fit=crop" },
  ],
};

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const ProductsPage = () => {
  // Grid page showing all categories with separate carousels stacked
  return (
    <main className="py-8 mt-31">
      <Container>
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 text-2xl font-bold">
          Browse Products by Category
        </motion.h2>
      </Container>
      {Object.entries(PRODUCT_DB).map(([key, list]) => (
        <CategorySlider key={key} title={key} products={list} />
      ))}
    </main>
  );
};

export default ProductsPage