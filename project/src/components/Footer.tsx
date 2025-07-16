import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ShopHub</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for smart shopping. Discover amazing products at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-blue-400 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 hover:text-blue-300 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 hover:text-pink-400 cursor-pointer transition-colors duration-200" />
              <Youtube className="h-6 w-6 hover:text-red-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Contact Us', 'Privacy Policy', 'Terms & Conditions', 'Return Policy', 'Shipping Info'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Women Fashion', 'Men Fashion', 'Electronics', 'Home & Kitchen', 'Beauty', 'Sports'].map((category) => (
                <li key={category}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1" />
                <span>123 Shopping Street,<br />Commerce City, IN 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ShopHub. All rights reserved. Made with ❤️ for smart shoppers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;