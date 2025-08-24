import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">

      <div className="mx-auto max-w-7xl  lg:px-30 px-5 py-4">
        <div className=" text-[#EB5757] backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/40 dark:border-neutral-800 rounded-2xl shadow-md px-5 lg:py-4 py-3 flex items-center justify-between">
          {/* Logo */}

          <Link to="/" className="text-white font-[150] tracking-wide text-xl">
            Vishwakarma Store
          </Link>



          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6  items-center gap-6 text-[#66FCF1]">
            <Link to="/" className="text-sm font-[150] text-white  hover:opacity-80 transition">Home</Link>
            <Link to="/products" className="text-sm font-[150] text-white  hover:opacity-80 transition">Products</Link>
            <Link to="/where-to" className="text-sm font-[150] text-white hover:opacity-80 transition">Where To</Link>
            <Link to="/about" className="text-sm font-[150] text-white  hover:opacity-80 transition">About</Link>

            <a
              href="#"
              className="inline-flex bg-[#66FCF1] items-center gap-2 text-sm px-3 py-1.5 rounded-xl bg-black text-[#66FCF1]  hover:opacity-90"
            >
              <Phone className="w-4 h-4 text-[#66FCF1]" /> Let's talk
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2" aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mx-auto max-w-7xl px-4 ease-in-out duration-300">
          <div className="mt-2 rounded-2xl border bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl p-4 flex  flex-col text-white gap-3 ease-in-out duration-900">
            <Link to="/" className="block px-4 py-2 hover:text-red-100">Home</Link>
            <Link to="/products" className="block px-4 py-2 hover:text-red-100">Products</Link>
            <Link to="/where-to" className="block px-4 py-2 hover:text-red-100">Where To</Link>
            <Link to="/about" className="block px-4 py-2 hover:text-red-100">About</Link>

            <a
              href="#"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl bg-white text-red-800 w-max"
            >
              <Phone className="w-4 h-4" /> Let's talk
            </a>
          </div>


        </div>
      )}
    </nav>
  );
};

export default Navbar