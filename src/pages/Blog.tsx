import SEO from "../components/SEO";
import Media from "../components/blog/Hero";

const Blog = () => {
  return (
    <>
      <SEO
        title="Media & Events | Franchise Media Kerala & UAE"
        description="Explore Franchise Media events, media coverage, workshops, and franchise expo highlights across Kerala and UAE. See how we connect brands with franchise partners."
        keywords="Franchise Media events, franchise expo Kerala, franchise workshop Calicut, franchise media coverage, franchise networking Kerala, franchise exhibition UAE"
        canonical="https://www.thefranchisemedia.com/media"
      />

      <main>
        <Media />
      </main>
    </>
  );
};

export default Blog;
