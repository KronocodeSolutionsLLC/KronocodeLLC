import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative px-3 py-2 font-medium transition-colors duration-200
    ${
      isActive
        ? "text-primary-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-secondary-500 after:to-primary-600"
        : "text-navy-800 hover:text-primary-600"
    }`;

  return (
 <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  }`}
>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <img
            src="/logo/logo.png"
            alt="Kronocode Logo"
            className="w-20 h-20 object-contain" // Increased size from w-16 h-16 to w-20 h-20
            style={{ maxHeight: "64px" }} // Prevents it from stretching the header too much
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-navy-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <nav className="container py-5 flex flex-col space-y-4">
            <NavLink to="/" className={navLinkClasses} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClasses} onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="btn btn-primary btn-sm self-start"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
