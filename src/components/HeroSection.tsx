import type React from "react";
import { Button } from "./reuse/Buttons";
import ContactPopup from "./RequestPopup";
import { useState } from "react";

const HeroSection: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1
            data-aos="fade-up"
            data-aos-duration="1100"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold headingColor leading-tight"
          >
            Best Franchise Consultants in Kerala & UAE
          </h1>

          <p
            data-aos="fade-up"
            data-aos-duration="1300"
            className="mt-4 sm:mt-6 contentColor contentFont text-sm sm:text-base lg:text-lg mb-6"
          >
           We are leading franchise consultants in Kerala helping businesses grow through franchise model development, legal documentation, and expansion strategies in kerala and UAE markets.
          </p>
          

          <div className="flex justify-center md:justify-start">
            <Button
              clickHandle={() => setIsPopupOpen(true)}
              label="Book a consultation"
            />
          </div>
        </div>

        {/* Right Video (AUTOPLAY) */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="order-1 md:order-2 w-full"
        >
          <div className="w-full max-w-[600px] mx-auto md:max-w-full">
         <iframe
  className="w-full aspect-video rounded-xl shadow-lg"
  src="https://www.youtube.com/embed/6h6Vy1MgYT4"
  title="Hero Video"
  frameBorder="0"
  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  
/>
<p className="text-xs text-gray-500 mt-2 text-center">
Watch how our franchise consulting services help businesses expand in Kerala and UAE.
</p>
          </div>
        </div>
      </div>

      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default HeroSection;