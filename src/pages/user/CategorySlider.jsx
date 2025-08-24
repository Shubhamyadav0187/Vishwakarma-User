import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const CategorySlider = ({ title, products }) => (
  <section className="py-8">
    <Container>
      <div className="mb-4 flex items-end justify-between">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl font-bold">
          {title}
        </motion.h3>
        <NavLink to={`/#${title.toLowerCase()}`} className="text-sm text-white hover:underline">
          View all
        </NavLink>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={16}
        breakpoints={{
          320: { slidesPerView: 1.15 },
          480: { slidesPerView: 1.4 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="!pb-10"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <ProductCard item={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  </section>
);

export default CategorySlider