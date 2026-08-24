import { Helmet } from "react-helmet-async";
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import blogPosts, { BlogPost } from "../../data/blog";

const SITE_URL = "https://www.thefranchisemedia.com";

const BlogList: React.FC = () => {
  const sortedPosts = [...blogPosts].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <>
      <Helmet>
        <title>Franchise Blog | Insights, Tips & Opportunities in Kerala & UAE</title>
        <meta
          name="description"
          content="Read Franchise Media's franchise blog for expert insights on franchise opportunities in Kerala, franchise investment tips, legal guides, and expansion strategies for UAE."
        />
        <meta
          name="keywords"
          content="franchise blog Kerala, franchise insights, franchise opportunities Kerala, franchise investment tips, franchise business guide, franchise legal guide, franchise expansion UAE, low cost franchise Kerala"
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Franchise Blog | Insights, Tips & Opportunities in Kerala & UAE" />
        <meta property="og:description" content="Expert franchise insights, investment tips, and business opportunities in Kerala and UAE from Franchise Media." />
        <meta property="og:image" content={`${SITE_URL}/blog/franchise-kerala.jpeg`} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Franchise Media" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Franchise Blog | Insights, Tips & Opportunities in Kerala & UAE" />
        <meta name="twitter:description" content="Expert franchise insights, investment tips, and business opportunities in Kerala and UAE from Franchise Media." />
        <meta name="twitter:image" content={`${SITE_URL}/blog/franchise-kerala.jpeg`} />
      </Helmet>

      <main>
        <section
          className="px-4 md:px-12 lg:px-20 py-12"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-indigo-500 mb-10 text-center md:text-left">
            News, insights and more
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {sortedPosts.map((post: BlogPost) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <article className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 h-98 bg-gray-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </article>

                <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h2>

                <p className="mt-2 text-gray-600 text-sm md:text-base line-clamp-3">
                  {post.excerpt ||
                    post.content?.split("           ")[0] ||
                    "No description available..."}
                </p>

                <div className="mt-3 flex items-center text-indigo-500 font-semibold group-hover:gap-2 transition-all duration-300">
                  Read more <FiArrowRight />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogList;
