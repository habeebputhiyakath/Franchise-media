import SEO from "../components/SEO";
import OurService from "../components/service/OurService";
import FranchiseServices from "../components/service/Section01";
import consult from "../../public/json/Franchise Consulting Services.json";
import Existing from "../../public/json/Services for Existing Franchisors.json";

export interface ExperienceDataType {
  title: string;
  content: string;
  img: object;
  tag: string;
  subTitle: string;
  list: string[];
  navigateTo: string;
}

const experienceData: ExperienceDataType[] = [
  {
    title: "Franchise Your Business?",
    content:
      "If you have a successful business model, we guide you through every step of franchising — from legal documentation to marketing and sales strategy.",
    img: consult,
    navigateTo: "FranchiseYourBusiness",
    tag: "Our services",
    subTitle: "Franchise Consulting Services",
    list: [
      "Strategic Planning for Franchise Growth",
      "Franchise Legal Documentation",
      "Training Documentation",
      "Recruitment Marketing Strategies",
      "Sales Training",
    ],
  },
  {
    title: "Franchise Marketing Service",
    content:
      "We help existing franchisors expand internationally with market analysis, coaching, and operational support.",
    img: Existing,
    navigateTo: "FranchiseMarketingService",
    tag: "Our services",
    subTitle: "Services for Existing Franchisors",
    list: [
      "International Expansion Planning",
      "Sales Coaching",
      "Manuals & Training Program Development",
      "Organizational Audits",
    ],
  },
];

const Service = () => {
  return (
    <>
      <SEO
        title="Franchise Services | Consulting, Marketing & Legal Support in Kerala"
        description="Explore Franchise Media's franchise consulting services: franchise model development, legal documentation, franchise marketing, franchisee recruitment, SOP manuals, and expansion support across Kerala and UAE."
        keywords="franchise services Kerala, franchise consulting services, franchise marketing Kerala, franchise model development, franchise legal documentation Kerala, franchisee recruitment, SOP manuals, franchise expansion UAE, franchise your business"
        canonical="https://www.thefranchisemedia.com/service"
      />

      <main>
        {experienceData.map((item, i) => (
          <OurService item={item} key={i} />
        ))}
        <FranchiseServices />
      </main>
    </>
  );
};

export default Service;
