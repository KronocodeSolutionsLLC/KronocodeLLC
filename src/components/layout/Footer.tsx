import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h4 className="text-white text-xl font-poppins font-bold mb-6">
              KRONOCODE
            </h4>
            <p className="text-gray-300 mb-6">
              Empowering businesses with innovative consulting, staffing, and
              web development solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-poppins font-medium mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-poppins font-medium mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Staff Augmentation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-poppins font-medium mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 text-secondary-500 mt-1 flex-shrink-0"
                />
                <span className="text-gray-300">
                  1309 COFFEEN AVE STE 1200, SHERIDAN, WY 82801
                </span>
              </li>
              {/* <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-secondary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  1309 COFFEEN AVE STE 1200, SHERIDAN, WY 82801
                </span>
              </li> */}
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-3 text-secondary-500 flex-shrink-0"
                />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1-715-629-3364
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-3 text-secondary-500 flex-shrink-0"
                />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1-909-403-3021
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="mr-3 text-secondary-500 flex-shrink-0"
                />
                <a
                  href="mailto:info@kronocode.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@kronocode.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-navy-700 my-10" />

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Kronocode Solutions LLC. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
