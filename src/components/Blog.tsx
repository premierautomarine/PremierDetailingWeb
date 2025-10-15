const Blog = () => {
  const blogPosts = [
    {
      title: "Admiral’s Choice Subscription",
      excerpt: "Keep your boat looking showroom ready all year long. Our detailing subscription offers bi-weekly, monthly, quarterly visits to clean, protect, and maintain your vessel, so it always shines like new.",
      image: "https://ik.imagekit.io/tdwk7dqz1/Blog-1.png?updatedAt=1760295134255",
      href: "/blog/Admirals-Choice-Subscription"
    },
    {
      title: "What You Get with a Full Detail",
      excerpt: "A complete overview of our Full Detail service and what’s included; the quality you can expect, and the professional care that keeps your vessel looking its best.",
      image: "https://ik.imagekit.io/tdwk7dqz1/Blog-2.jpg?updatedAt=1760296186461",
      href: "/blog/full-detail-description"
    },
    {
      title: "Check Out Our Previous Work",
      excerpt: "From full gel coat restorations to interior cleanings, every project reflects our commitment to precision and lasting quality. See why Tampa Bay boaters trust us to bring their vessels back to life.",
      image: "https://ik.imagekit.io/tdwk7dqz1/Blog-3.jpg?updatedAt=1760295544043",
      href: "/portfolio"
    }
  ]

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Detailing Resources & Packages Offered
          </h2>
          <p className="text-xl text-gray-700">
             We’re dedicated to helping Tampa Bay boat owners protect, restore, and maintain their vessels.<br />
            Below you’ll find helpful guides, and package insights on our services.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                
                <h3 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Instagram Feed Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-8">
            Find us on Instagram @premierboatdetailing
          </h3>

          <a
            href="https://www.instagram.com/premierboatdetailing/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors mb-10"
          >
            Follow on Instagram 
          </a>
           
        </div>

{/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1 mb-8">
            {[
              "https://ik.imagekit.io/tdwk7dqz1/Banner-1.jpg?updatedAt=1760319870384",
              "https://ik.imagekit.io/tdwk7dqz1/Banner-2.jpg?updatedAt=1760319870752",
              "https://ik.imagekit.io/tdwk7dqz1/Banner-3.jpg?updatedAt=1760319870737",
              "https://ik.imagekit.io/tdwk7dqz1/Banner-4.jpg?updatedAt=1760319870678",
              "https://ik.imagekit.io/tdwk7dqz1/Banner-5.jpg?updatedAt=1760319870559"
            ].map((image, index) => (
              <div key={index} className="relative h-48 overflow-hidden">
                <a href="https://instagram.com/gorbanpixels" target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            ))}
          </div>

        {/* Facebook Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-8">
            Also check us out on Facebook
          </h3>

          

          <a
            href="https://www.facebook.com/profile.php?id=61581825377055"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
