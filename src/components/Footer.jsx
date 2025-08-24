const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
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

const Footer = () => (
  <footer className="mt-10 border-t bg-gradient-to-r from-[#0B0C10] to-blue-900">
    <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h4 className="mb-2 text-lg font-semibold ">Hardware Store</h4>
        <p className="text-sm text-white">All kinds of tiles, steel, iron, aluminium, plumbing & more at best prices.</p>
      </div>
      <div>
        <h5 className="mb-2 font-semibold ">Categories</h5>
        <ul className="space-y-1 text-sm text-gray-600 text-white">
          {CATEGORIES.slice(0, 6).map((c) => (
            <li key={c.key}>{c.key}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="mb-2 font-semibold">Contact</h5>
        <ul className="space-y-1 text-sm text-white">
          <li>+91 98765 43210</li>
          <li>hardware@example.com</li>
          <li>NH-12, Main Market, Your City</li>
        </ul>
      </div>
      <div>
        <h5 className="mb-2 font-semibold">Open Hours</h5>
        <ul className="space-y-1 text-sm text-white">
          <li>Mon–Sat: 9:00 AM – 8:00 PM</li>
          <li>Sun: 10:00 AM – 2:00 PM</li>
        </ul>
      </div>
    </Container>
    <div className="border-t py-4 text-center text-xs text-white">© {new Date().getFullYear()} Hardware Store. All rights reserved.</div>
  </footer>
);

export default Footer