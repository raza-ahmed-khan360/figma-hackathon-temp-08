import type { NextPage } from "next";
import Link from "next/link";

const NavLinks: NextPage = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Shop" },
    { href: "/single-product", label: "Product" },
    { href: "#", label: "Pages" },
    { href: "/about", label: "About" }
  ];

  return (
    <nav className="w-auto flex justify-between font-nav-links bg-gray-scales-white shadow-[0px_1px_0px_#e1e3e5]">
      <div className="container mx-auto px-4 lg:px-20 py-3">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Navigation Links */}
          <div className="flex flex-col font-bold lg:flex-row items-center space-y-3 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-accents-dark-accents no-underline capitalize hover:underline transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
            <span className="text-sm text-gray-scales-dark-gray capitalize">
              Contact:
            </span>
            <span className="text-sm font-medium text-gray-scales-black capitalize">
              (808) 555-0111
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;
