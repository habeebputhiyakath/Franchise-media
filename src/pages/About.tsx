import SEO from "../components/SEO";
import WhoAreWe from "../components/about/WhoAreWe";
import FounderSection from "../components/FounderSection";

const About = () => {
  return (
    <>
      <SEO
        title="About Franchise Media | Leading Franchise Consultants in Kerala & UAE"
        description="Learn about Franchise Media, Kerala's first franchise consulting company. Meet founder Mr. Safwan CK and discover our mission to help brands grow through franchise development, legal support, and expansion strategy."
        keywords="about franchise media, franchise consultants Kerala, franchise experts Calicut, Mr. Safwan CK Franchise Media, franchise consulting company Kerala, franchise advisory UAE, best franchise consultants Malappuram"
        canonical="https://www.thefranchisemedia.com/about"
      />

      <main>
        <WhoAreWe />
        <FounderSection />
      </main>
    </>
  );
};

export default About;
