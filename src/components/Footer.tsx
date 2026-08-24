import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const path = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Clients", path: "/clients" },
    {name:"blogs" ,path:"/blog"},
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2b3a8f] to-[#0c1129] text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:w-64 w-full">
            <p className="mb-4 contentFont text-base">
              Franchise Media is Kerala&apos;s first franchise consulting company,
              helping brands expand through franchise model development, legal
              documentation, marketing, and franchisee recruitment across Kerala
              and the UAE.
            </p>
          </div>

          {/* Links and Contact */}
          <div className="flex gap-20 flex-wrap">
            {/* Quick Links */}
            <nav aria-label="Quick Links">
              <h3 className="font-bold text-lg lg:text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {path.map((item, i) => (
                  <li key={i}>
                    <Link className="contentFont hover:underline" to={item.path}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Details */}
            <address className="not-italic">
              <h3 className="font-bold text-lg lg:text-xl mb-4">Contact</h3>
              <p className="mb-2">
                <a href="mailto:Info@franchisemedia.in" className="hover:underline">
                  Info@franchisemedia.in
                </a>
              </p>
              <p>
                <a href="tel:+919207887722" className="hover:underline">
                  +91 9207887722
                </a>
              </p>
              <p>
                <a href="tel:+971585587792" className="hover:underline">
                  +971 585587792
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Social Links & Email Subscription */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="https://www.facebook.com/franchisemedia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Franchise Media on Facebook"
              className="hover:text-blue-400 flex items-center transition duration-300"
            >
              <FaFacebook size={20} />
              <span className="ml-2 contentFont text-sm sm:text-base">Facebook</span>
            </a>

            <a
              href="https://www.linkedin.com/company/franchisemedia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Franchise Media on LinkedIn"
              className="hover:text-blue-400 flex items-center transition duration-300"
            >
              <FaLinkedin size={20} />
              <span className="ml-2 contentFont text-sm sm:text-base">LinkedIn</span>
            </a>

            <a
              href="https://www.instagram.com/franchise.media_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Franchise Media on Instagram"
              className="hover:text-pink-400 flex items-center transition duration-300"
            >
              <FaInstagram size={20} />
              <span className="ml-2 contentFont text-sm sm:text-base">Instagram</span>
            </a>

            <a
              href="https://www.youtube.com/@franchise_media"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Franchise Media on YouTube"
              className="hover:text-red-500 flex items-center transition duration-300"
            >
              <FaYoutube size={20} />
              <span className="ml-2 contentFont text-sm sm:text-base">YouTube</span>
            </a>
          </div>

          {/* Email Subscription */}
          <form
            className="flex flex-col sm:flex-row justify-center lg:justify-end w-full sm:w-auto gap-3"
            aria-label="Subscribe to Newsletter"
          >
            <input
              type="email"
              placeholder="Email address"
              aria-label="Enter your email address"
              className="py-3 px-4 contentFont text-sm bg-white rounded-md text-gray-800 w-full sm:w-72 focus:outline-none shadow-sm"
              required
            />
            <button
              type="submit"
              className="bg-green-500 cursor-pointer contentFont text-sm hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition duration-300 w-full sm:w-auto"
            >
              Get Started
            </button>
          </form>
        </div>

        <hr className="border-white my-8" />

        {/* Bottom Section */}
        <div className="flex contentFont flex-col md:flex-row justify-between items-center">
          <p>Franchise Media © All rights reserved</p>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;