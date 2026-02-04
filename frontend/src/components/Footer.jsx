import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { navigationItems, contactInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center mr-3">
                <span className="text-slate-900 font-bold text-sm">DW</span>
              </div>
              <span className="text-xl font-bold">Dakota Worldwide</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Analysis of return and quantification of risk for capital investments with a spatial dimension. Serving the nation's greatest retailers since 1975.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products & Services</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-300">Quintillion (McDonald's)</span></li>
              <li><span className="text-gray-300">Locus Pro</span></li>
              <li><span className="text-gray-300">Consumer View™</span></li>
              <li><span className="text-gray-300">Market Analysis</span></li>
              <li><span className="text-gray-300">Site Location Studies</span></li>
              <li><span className="text-gray-300">Strategic Planning</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <Phone className="h-4 w-4 mr-3 text-gray-400 mt-0.5" />
                <div className="text-gray-300">
                  <div>{contactInfo.phone}</div>
                  <div>Toll Free: {contactInfo.tollFree}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gray-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-gray-400 mt-0.5" />
                <div className="text-gray-300">
                  <div>{contactInfo.address.street}</div>
                  <div>{contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dakota Worldwide Corporation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Contact Us
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
