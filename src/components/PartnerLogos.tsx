
"use client"
import { useRef, useEffect } from "react";

const PartnerLogos: React.FC = () => {
  const partners = [
    // { name: "Zaika Bakes & Restaurant", logo: "/partner/043.png", height: "h-16" },
    { name: "Melban", logo: "/partner/044.png", height: "h-24" },
      {name:"mozon",logo:"/partner/047.png", height: "h-20"},

    { name: "Chicken Story - Food Franchise Client", logo: "/partner/01.jpg", height: "h-20" },
    { name: "Dialogue Digital Gallery", logo: "/partner/02.png", height: "h-30" },
    { name: "Frapino", logo: "/partner/03.png", height: "h-30" },
    { name: "Gelato Cafe", logo: "/partner/04.png", height: "h-20" },
    { name: "Ht Wingz", logo: "/partner/05.png", height: "h-34" },
    { name: "Grapa’s Burger Lounge", logo: "/partner/06.jpg", height: "h-20" },
    { name: "Chai Habbat", logo: "/partner/07.jpg", height: "h-14" },
    { name: "Crunchy's", logo: "/partner/08.jpg", height: "h-24" },
    { name: "Cake Studio", logo: "/partner/09.jpg", height: "h-20" },
    { name: "Cake Lounge", logo: "/partner/010.jpg", height: "h-20" },
    { name: "Tea Studio", logo: "/partner/011.jpg", height: "h-20" },
    { name: "Mobile Mate", logo: "/partner/012.png", height: "h-10" },
    { name: "Naradan’s", logo: "/partner/013.jpg", height: "h-20" },
    { name: "Nice Cream", logo: "/partner/015.png", height: "h-26" },
    { name: "Kiwi Ice Cream", logo: "/partner/016.png", height: "h-20" },
    { name: "Twist on Softserve & Deserve", logo: "/partner/017.png", height: "h-34" },
    { name: "The Charcoal Bay", logo: "/partner/018.png", height: "h-24" },
    { name: "Jaazo", logo: "/partner/019.png", height: "h-20" },
    { name: "Kenz Karam", logo: "/partner/020.png", height: "h-20" },
    { name: "Taste of Malabar", logo: "/partner/021.jpg", height: "h-40" },
    { name: "Albaik Feasto Express", logo: "/partner/022.png", height: "h-24" },
    { name: "Ampure", logo: "/partner/023.png", height: "h-34" },
    { name: "Banwet", logo: "/partner/024.png", height: "h-20" },
    { name: "Club Sulaimani", logo: "/partner/025.png", height: "h-22" },
    { name: "Frozen Bottle", logo: "/partner/026.png", height: "h-32" },
    { name: "Fzone", logo: "/partner/027.png", height: "h-20" },
    { name: "The Grillax", logo: "/partner/029.png", height: "h-26" },
    { name: "Hap & Hope", logo: "/partner/030.png", height: "h-12" },
    { name: "Heroelectric", logo: "/partner/031.png", height: "h-38" },
    { name: "IFCS", logo: "/partner/032.png", height: "h-32" },
    // { name: "Ojin", logo: "/partner/033.png", height: "h-20" },
    { name: "Parisons Tea House", logo: "/partner/034.png", height: "h-34" },
    { name: "Vollmond", logo: "/partner/035.png", height: "h-20" },
    { name: "Wayn", logo: "/partner/036.png", height: "h-38" },
    { name: "Team Care & Cure", logo: "/partner/037.png", height: "h-24" },
    { name: "Avilpro", logo: "/partner/038.jpeg", height: "h-18" },
    { name: "Grama Bakes & Sweets", logo: "/partner/039.jpg", height: "h-32" },
    { name: "KPG Roofings", logo: "/partner/040.jpeg", height: "h-36" },
    { name: "Royal", logo: "/partner/041.jpg", height: "h-20" },
    { name: "Kaymas", logo: "/partner/042.png", height: "h-20" },
    // { name: "Cakevista", logo: "/partner/045.png", height: "h-16" },
    { name: "Chaska Bun", logo: "/partner/046.png", height: "h-16" },
        { name: "Artic", logo: "/partner/048.png", height: "h-20" },
       { name: "herbal park", logo: "/partner/049.png", height: "h-18" },
 { name: "equitea", logo: "/partner/050.jpg", height: "h-14" },
        { name: "mechart", logo: "/partner/051.jpg", height: "h-38" },
                                                                        {name:"sysgreen" , logo:"/partner/055.png" ,height:"h-12"},

                { name: "classic", logo: "/partner/052.png", height: "h-14" },
                {name:"ffc" , logo:"/partner/053.png" ,height:"h-13"},
                                {name:"yaghma" , logo:"/partner/054.png" ,height:"h-14"},
    { name: "broasto", logo: "/partner/056.png", height: "h-14" },
    { name: "mandhi stories", logo: "/partner/057.png", height: "h-17" },
    { name: "Phone Tech Education International", logo: "/partner/058.jpg", height: "h-17" }




  ];

  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const useAutoScroll = (ref: React.RefObject<HTMLDivElement>, speed: number, direction: "left" | "right") => {
    useEffect(() => {
      const scrollContainer = ref.current;
      if (!scrollContainer) return;
      let animationId: number;
      let scrollPosition = 0;

      const autoScroll = () => {
        if (!scrollContainer) return;

        scrollPosition += direction === "right" ? speed : -speed;

        // Wrap around scrolling
        if (direction === "right" && scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0;
        } else if (direction === "left" && scrollPosition <= 0) {
          scrollPosition = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        }

        scrollContainer.scrollLeft = scrollPosition;
        animationId = requestAnimationFrame(autoScroll);
      };

      animationId = requestAnimationFrame(autoScroll);
      const pause = () => cancelAnimationFrame(animationId);
      const resume = () => (animationId = requestAnimationFrame(autoScroll));
      scrollContainer.addEventListener("mouseenter", pause);
      scrollContainer.addEventListener("mouseleave", resume);

      return () => {
        cancelAnimationFrame(animationId);
        scrollContainer.removeEventListener("mouseenter", pause);
        scrollContainer.removeEventListener("mouseleave", resume);
      };
    }, [ref, speed, direction]);
  };

  // Split partners for two lines
  const mid = Math.ceil(partners.length / 2);
  const firstRow = partners.slice(0, mid);
  const secondRow = partners.slice(mid);

  // Apply opposite scroll directions
  useAutoScroll(scrollRef1, 1.3, "right");
  useAutoScroll(scrollRef2, 1.3, "left");

  return (
    <section className="py-10 px-6 md:px-12 lg:px-20 bg-white max-w-7xl mx-auto">
      <h2
        data-aos="fade-up"
        data-aos-duration="1100"
        className="text-2xl md:text-4xl font-bold headingColor mb-6 text-center"
      >
        Our Clients
      </h2>

      {/* Top Row - scrolls right */}
      <div
        ref={scrollRef1}
        className="flex space-x-7 lg:space-x-20 overflow-x-auto hide-scrollbar mb-8"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {firstRow.map((partner, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center" title={partner.name}>
            <img
              src={partner.logo}
              alt={partner.name}
              draggable="false"
              className={`object-contain w-auto ${partner.height}`}
            />
          </div>
        ))}
      </div>

      {/* Bottom Row - scrolls left */}
      <div
        ref={scrollRef2}
        className="flex space-x-7 lg:space-x-20 overflow-x-auto hide-scrollbar"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {secondRow.map((partner, index) => (
          <div key={index} className="flex-shrink-0 flex items-center justify-center" title={partner.name}>
            <img
              src={partner.logo}
              alt={partner.name}
              draggable="false"
              className={`object-contain w-auto ${partner.height}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
