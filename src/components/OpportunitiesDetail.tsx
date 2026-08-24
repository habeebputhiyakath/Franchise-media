import { ReactNode, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import data from "../FranchiseOpportunties/FranchiseOppertunities";

/* ---------- Types ---------- */

interface Franchise {
  slug: string;
  title: string;
  category: string;
  image: string;
  area: string;
  investment: string;
  roi: string;
  about: string;
  franchisedetails: string;
  description: string;
  vision?: string;
  mission?: string;
}

interface InfoCardProps {
  label: string;
  value: string;
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

interface InputProps {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SITE_URL = "https://www.thefranchisemedia.com";

/* ---------- Main Component ---------- */

const BusinessDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const business = (data as Franchise[]).find(
    (item) => item.slug === slug
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  if (!business) {
    return (
      <main className="text-center py-20 text-gray-500">
        <p>Business not found</p>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hello, I'm interested in ${business.title} Franchise.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Preferred Location: ${form.location}`;

    const whatsappUrl = `https://wa.me/919207887722?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const canonical = `${SITE_URL}/business/${business.slug}`;
  const ogImage = business.image.startsWith("http")
    ? business.image
    : `${SITE_URL}${business.image}`;

  return (
    <>
      <Helmet>
        <title>{`${business.title} Franchise Opportunity | Franchise Media`}</title>
        <meta
          name="description"
          content={`${business.title} - ${business.category} franchise opportunity. Investment: ${business.investment}, Area: ${business.area}, ROI: ${business.roi}. Apply with Franchise Media, Kerala's top franchise consultants.`}
        />
        <meta
          name="keywords"
          content={`${business.title} franchise, ${business.category} franchise Kerala, franchise opportunity Kerala, low investment franchise Kerala, franchise business Calicut, franchise consultants Malappuram, franchise apply Kerala`}
        />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={`${business.title} Franchise Opportunity | Franchise Media`} />
        <meta
          property="og:description"
          content={`${business.title} - ${business.category} franchise opportunity. Investment: ${business.investment}, Area: ${business.area}, ROI: ${business.roi}.`}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Franchise Media" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${business.title} Franchise Opportunity | Franchise Media`} />
        <meta name="twitter:description" content={`${business.title} - ${business.category} franchise opportunity. Investment: ${business.investment}, Area: ${business.area}, ROI: ${business.roi}.`} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <main className="max-w-7xl mx-auto py-20 px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <img
            src={business.image}
            alt={`${business.title} logo - ${business.category} franchise opportunity`}
            className="w-44 h-44 object-contain rounded-2xl shadow-md bg-white"
          />

          <div>
            <h1 className="headingColor text-4xl font-bold mb-2">
              {business.title}
            </h1>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              {business.category}
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <InfoCard label="Area Required" value={business.area} />
          <InfoCard label="Investment Size" value={business.investment} />
          <InfoCard label="ROI" value={business.roi} />
        </div>

        {/* About */}
        <Section title="About Brand">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <p className="whitespace-pre-line text-xl text-gray-600">
              {business.about}
            </p>

            <img
              src={business.image}
              alt={`${business.title} brand presentation`}
              className="w-full max-h-80 object-contain rounded-2xl shadow-lg"
            />
          </div>
        </Section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-[#0f1e3a] text-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              {business.vision ||
                "To become a leading and trusted brand by delivering consistent quality and innovation."}
            </p>
          </div>

          <div className="p-8 bg-[#0f1e3a] text-white rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              {business.mission ||
                "To empower entrepreneurs through a proven business model and support system."}
            </p>
          </div>
        </div>

        {/* Franchise Details */}
        <Section title="Franchise Details">
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-600">
            {business.franchisedetails.split("\n").map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </Section>

        {/* FORM */}
        <Section title={`Interested in ${business.title}?`}>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <Input
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <Input
              placeholder="Phone Number"
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <Input
              placeholder="Preferred Location"
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
            />

            <button
              type="submit"
              className="md:col-span-2 bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
            >
              Apply via WhatsApp
            </button>
          </form>
        </Section>

        {/* Related */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-6">
            Related Opportunities
          </h2>

          <div className="flex gap-6 overflow-x-auto">
            {(data as Franchise[])
              .filter((item) => item.slug !== business.slug)
              .map((item, index) => (
                <Link key={index} to={`/business/${item.slug}`}>
                  <article className="w-[260px] p-4 bg-white shadow rounded-xl">
                    <img
                      src={item.image}
                      alt={`${item.title} franchise opportunity`}
                      className="h-32 object-contain mx-auto"
                    />
                    <h3 className="mt-2 font-semibold">
                      {item.title}
                    </h3>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default BusinessDetail;

/* ---------- Components ---------- */

const InfoCard: React.FC<InfoCardProps> = ({ label, value }) => (
  <div className="p-6 bg-[#0f1e3a] text-white rounded-2xl text-center">
    <p className="text-xs opacity-70">{label}</p>
    <p className="text-xl font-semibold">{value}</p>
  </div>
);

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-16">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="p-6 bg-white rounded-2xl shadow">{children}</div>
  </div>
);

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="px-4 py-3 rounded-xl bg-gray-50 focus:ring-2 focus:ring-green-600 outline-none"
  />
);
