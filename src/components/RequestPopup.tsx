import type React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {

  const [country, setCountry] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  if (!isOpen) return null;

  // Get WhatsApp URL based on country selection
  const getWhatsAppUrl = () => {
    if (country === "") {
      return "#"; // Prevent navigation with "#"
    }

    return country === "IND"
      ? "https://wa.me/919207887722"
      : "https://wa.me/971585587792";
  };
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (country === "") {
      e.preventDefault();
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Blurred background overlay */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-md"
        // onClick={onClose}
      />
      <IoIosCloseCircle
        onClick={onClose}
        className="fixed top-4 right-4 z-[99]  cursor-pointer text-3xl"
      />

      {/* Popup content */}
      <div className="z-10 flex flex-col md:flex-row gap-6 max-w-4xl px-4">
        {/* WhatsApp Box */}
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-green-500 shadow-lg">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                {country === "UAE" ? (
                  <div className="cursor-pointer text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3">
                    <img src="/flag/uae.png" className="w-5 h-5" alt="uae" />{" "}
                    UAE
                  </div>
                ) : country === "IND" ? (
                  <div className="cursor-pointer text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3">
                    <img
                      src="/flag/india.png"
                      className="w-5 h-5"
                      alt="india"
                    />{" "}
                    IND
                  </div>
                ) : (
                  "Choose Country"
                )}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <div
                    onClick={() => {
                      setCountry("IND");
                      setIsError(false);
                    }}
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3"
                  >
                    <img
                      src="/flag/india.png"
                      className="w-5 h-5"
                      alt="india"
                    />{" "}
                    IND
                  </div>
                </MenuItem>
                <MenuItem>
                  <div
                    onClick={() => {
                      setCountry("UAE");
                      setIsError(false);
                    }}
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3"
                  >
                    <img src="/flag/uae.png" className="w-5 h-5" alt="uae" />{" "}
                    UAE
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
          <div className="w-24 h-24 mb-4">
            <img src="/contact/whatsapp.png" className="w-32 " alt="WhatsApp Franchise Media" />
          </div>
          <h3 className="text-gray-800 font-medium mb-2">
            Connect with us to explore tailored
          </h3>
          <p className="text-gray-700 mb-6">
            franchise opportunities and get your queries addressed
          </p>
          <Link to={getWhatsAppUrl()} onClick={handleWhatsAppClick}>
            <button className="bg-green-500 cursor-pointer hover:bg-green-600 text-white py-2 px-6 rounded-md transition-colors w-full max-w-xs">
              WhatsApp
            </button>
          </Link>
          {isError && (
            <div className="text-red-500 text-sm">Please select a country</div>
          )}
        </div>

        {/* Email Box */}
        <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border-2 border-blue-600 shadow-lg">
          <div className="w-24 h-24 mb-4">
            <img src="/contact/email.png" className="w-32 " alt="Email Franchise Media" />
          </div>
          <h3 className="text-gray-800 font-medium mb-2">
            Contact us via email to explore exclusive
          </h3>
          <p className="text-gray-700 mb-6">
            franchise opportunities and share your inquiries with our team
          </p>
          <Link to="mailto:Info@franchisemedia.in">
            <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors w-full max-w-xs">
              Send Email
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
