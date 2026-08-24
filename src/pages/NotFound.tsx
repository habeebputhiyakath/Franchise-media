import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Franchise Media"
        description="The page you are looking for could not be found. Explore Franchise Media's franchise consulting services in Kerala and UAE."
        canonical="https://www.thefranchisemedia.com/404"
        noIndex
      />
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold headingColor mb-4">
          404
        </h1>
        <p className="text-lg contentColor mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition"
        >
          Back to Home
        </Link>
      </main>
    </>
  );
};

export default NotFound;
