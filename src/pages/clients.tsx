import SEO from "../components/SEO";

const partners = [
  {name:"melban",logo:"https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602127/044_kbavcf.png", height: "h-24"},
    {name:"mozon",logo:"https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602126/047_swa6tq.png", height: "h-24"},


  { name: "Chicken story-food franchise client", logo: "/partner/01.jpg", height: "h-20" },
  { name: "Dialogue Digital Gallery - Franchise Client of Franchise Media Kerala", logo: "/partner/02.png", height: "h-30" },
  { name: "Frapino - franchise partner", logo: "/partner/03.png", height: "h-30" },
  { name: "Gelato Cafe - ice cream franchise client", logo: "/partner/04.png", height: "h-20" },
  { name: "Artic", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602132/048_svwkex.png", height: "h-20" },
  { name: "herbal park", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/f_auto,q_auto/v1769602131/049_zdh1jk.png", height: "h-18" },
  { name: "Ht Wingz - franchise restaurant client", logo: "/partner/05.png", height: "h-34" },
  { name: "Grapa’s Burger Lounge – burger franchise client", logo: "/partner/06.jpg", height: "h-20" },
  { name: "Chai Habbat – tea franchise client", logo: "/partner/07.jpg", height: "h-14" },
  { name: "Crunchy's - franchise client", logo: "/partner/08.jpg", height: "h-24" },
  { name: "Cake Studio - Successful franchise outlet", logo: "/partner/09.jpg", height: "h-20" },
  { name: "Cake Lounge - Successful franchise outlet", logo: "/partner/010.jpg", height: "h-20" },
  { name: "Tea Studio - best franchise for cafe", logo: "/partner/011.jpg", height: "h-20" },
  { name: "Mobile Mate – mobile franchise", logo: "/partner/012.png", height: "h-10" },
  { name: "Naradan’s – Franchise Media client", logo: "/partner/013.jpg", height: "h-20" },
  { name: "Nice Cream – ice cream franchise client", logo: "/partner/015.png", height: "h-26" },
  { name: "Kiwi Ice Cream – franchise client", logo: "/partner/016.png", height: "h-20" },
  { name: "Twist on Softserve & Deserve", logo: "/partner/017.png", height: "h-34" },
  { name: "The Charcoal Bay", logo: "/partner/018.png", height: "h-24" },
  { name: "Jaazo", logo: "/partner/019.png", height: "h-20" },
  { name: "Kenz Karam", logo: "/partner/020.png", height: "h-20" },  
  { name: "Taste of Malabar", logo: "/partner/021.jpg", height: "h-40" },
  { name: "Albaik Feasto Express – restaurant franchise client", logo: "/partner/022.png", height: "h-24" },
  { name: "Ampure", logo: "/partner/023.png", height: "h-34" },
  { name: "Banwet", logo: "/partner/024.png", height: "h-20" },
  { name: "Club Sulaimani", logo: "/partner/025.png", height: "h-22" },
  { name: "Frozen Bottle", logo: "/partner/026.png", height: "h-32" },
  { name: "Fzone", logo: "/partner/027.png", height: "h-20" },
  { name: "The Grillax", logo: "/partner/029.png", height: "h-26" },
  { name: "Hap & Hope", logo: "/partner/030.png", height: "h-12" },
  { name: "Heroelectric", logo: "/partner/031.png", height: "h-38" },
    { name: "Avilpro", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602119/038_mzh5dj.jpg", height: "h-16" },

  { name: "IFCS – Franchise Media corporate client", logo: "/partner/032.png", height: "h-32" },
  // { name: "Ojin", logo: "/partner/033.png", height: "h-20" },
  { name: "Parisons Tea House – tea franchise client", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602112/034_umasjb.png", height: "h-34" },
  { name: "Vollmond – franchise client", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602114/035_phr3fl.png", height: "h-20" },
  { name: "Wayn", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602114/036_csdhfo.png", height: "h-38" },
  { name: "Team Care & Cure", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602118/037_suqblm.png", height: "h-24" },
  { name: "Grama Bakes & Sweets – bakery franchise client", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602120/039_dsmadg.jpg", height: "h-32" },
  { name: "KPG Roofings", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602120/040_acuacc.jpg", height: "h-36" },
  { name: "Royal", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602121/041_k3dmkq.jpg", height: "h-20" },
    { name: "Kaymas", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602127/042_pimzer.png", height: "h-20" },
    { name: "Chaska Bun", logo: "https://res.cloudinary.com/dkguucrg3/image/upload/w_1400,q_auto,f_auto/v1769602125/046_rjaf9f.png", height: "h-16" },
  
    { name: "equitea", logo: "/partner/050.jpg", height: "h-16" },
        { name: "mechart", logo: "/partner/051.jpg", height: "h-38" },
                                                                        {name:"sysgreen" , logo:"/partner/055.png" ,height:"h-14"},

                { name: "classic", logo: "/partner/052.png", height: "h-16" },
                {name:"ffc" , logo:"/partner/053.png" ,height:"h-14"},
                                {name:"yaghma" , logo:"/partner/054.png" ,height:"h-14"},
  { name: "broasto ", logo: "/partner/056.png", height: "h-14" },
  { name: "mandhi stories ", logo: "/partner/057.png", height: "h-18" },
  { name: "Phone Tech Education International", logo: "/partner/058.jpg", height: "h-18" },
];

export default function Clients() {
  return (
    <>
      <SEO
        title="Clients & Partners | Franchise Media Kerala & UAE"
        description="Discover Franchise Media's trusted franchise clients and partners across food, retail, healthcare, and service franchises in Kerala and UAE. See how our franchise strategies help brands grow."
        keywords="Franchise Media clients, franchise partners Kerala, franchise collaborations, food franchise clients Kerala, retail franchise partners, franchise marketing Kerala, franchise consulting clients, brand growth Kerala"
        canonical="https://www.thefranchisemedia.com/clients"
      />

      <main>
        <section
          className="px-6 py-12 bg-gray-50"
          data-aos="fade-up"
          data-aos-duration="1100"
        >
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Our Clients & Partners
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center w-full h-28"
                title={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`object-contain max-w-full ${partner.height}`}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
