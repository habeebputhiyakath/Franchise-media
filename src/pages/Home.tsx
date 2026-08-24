import SEO from "../components/SEO";
import ExpertiseSection from "../components/ExpertiseSection";
import FeatureSection from "../components/FeatureSection";
import HeroSection from "../components/HeroSection";
import PartnerLogos from "../components/PartnerLogos";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BusinessOpportunities from "../components/FranchiseOpportunites";

const Home = () => {
  return (
    <div>
      <SEO
        title="Best Franchise Consultants in Kerala & UAE | Franchise Media"
        description="Franchise Media is Kerala's leading franchise consulting company. Experts in franchise model development, legal documentation, franchise recruitment, marketing & expansion across Calicut, Malappuram, Kerala & UAE."
        keywords="best franchise consultants in Kerala, franchise consultants in Calicut, franchise consultants in Malappuram, franchise consulting company Kerala, franchise model development Kerala, franchise legal services Kerala, franchise marketing Kerala, franchise recruitment Kerala, franchise expansion UAE, franchise business Kerala, low cost franchise Kerala, franchise advisors Kozhikode"
        canonical="https://www.thefranchisemedia.com/"
      >
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Calicut, Malappuram, Kerala" />
        <meta name="geo.position" content="11.2924;75.8412" />
        <meta name="ICBM" content="11.2924, 75.8412" />
        <meta
          name="google-site-verification"
          content="Lx_6a-bgtHnuVBYp6uHkvUMmX8IJW5YLgv0akjZLIo8"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </SEO>

      <main>
        <HeroSection />
        <PartnerLogos />
        <ExpertiseSection />
        <BusinessOpportunities />
        <ServicesSection />
        <TestimonialsSection />
        <FeatureSection />
      </main>
    </div>
  );
};

export default Home;
