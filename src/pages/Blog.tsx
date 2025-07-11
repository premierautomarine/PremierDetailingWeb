const Blog = () => {
  const blogPosts = [
    {
      title: "Editorial Vibes in Tampa",
      date: "6/21/25",
      category: [],
      excerpt: "New trends in wedding photography come and go, but we believe the editorial aesthetic is timeless. It turns your love story into something that feels straight out of a fashion magazine—bold, refined, and full of style. Explore the unique editorial photography opportunities Tampa has to offer.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_33?updatedAt=1752028284688",
      href: "/blog/editorial-vibes-in-tampa"
    },
    {
      title: "Insider Advice for Planning a Stylish Yet Affordable Micro Wedding in Downtown Tampa",
      date: "5/26/25",
      category: [],
      excerpt: "Are you dreaming of an intimate and affordable micro wedding in the vibrant city of Tampa? Look no further. In this article, we're about to share insider tips and tricks that will help you create an unforgettable and authentic celebration right in the heart of downtown Tampa.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_47.PNG?updatedAt=1752032162292",
      href: "/blog/local-insider-tips-budget-friendly-tampa-micro-wedding"
    },
    {
      title: "Elope in Tampa FL | The ULTIMATE How-To Guide",
      date: "4/11/25",
      category: ["Planning", "Elopements"],
      excerpt: "You chose to run away together and get married in gorgeous vibrant Tampa! This is grounds for a celebration! Now you are faced with rules, paperwork, and planning. This article is to help you plan an elopement in our beautiful city that is budget friendly and feels like YOU. The importance of recording one of the biggest days in your relationship cannot be overstated, so this guide will also help with logistics of wedding photography.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_19.PNG?updatedAt=1751640224135",
      href: "/blog/elope-in-tampa-fl"
    },
    {
      title: "Fall in Love with the Beauty of Eloping at Fort De Soto",
      date: "4/5/25",
      category: [],
      excerpt: "Are you envisioning an elopement that feels fresh, intimate, and surrounded by nature’s beauty? Fort De Soto Park offers a truly unforgettable setting—where historic charm meets pristine beaches and sweeping coastal views for a romantic, one-of-a-kind experience.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_39.PNG?updatedAt=1752030999681",
      href: "/blog/escape-convention-fort-desoto-elopement"
    },
    {
      title: "Top 2025 Wedding Trends That Will Blow You Away",
      date: "2/20/25",
      category: [],
      excerpt: "New year, new trends? This year, it really seems like 2025 is redefining \"what's old is new\" with classic styles coming in hot. And the trends you will see most are going beyond the traditional walk down the aisle. Are you getting married this year? Here's what to expect in 2025.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_16.PNG?updatedAt=1751639835777",
      href: "/blog/2025-wedding-trends"
    },
    {
      title: "Why a Photoshoot Is the Perfect Way to Celebrate Your One-Year Anniversary",
      date: "1/23/25",
      category: [],
      excerpt: "Looking for a meaningful way to celebrate your first year of marriage? An anniversary photoshoot can turn your milestone into more than just a night out—it becomes a lasting experience filled with connection, joy, and memories you’ll cherish for years to come.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_34.PNG?updatedAt=1752028103143",
      href: "/blog/anniversary-photoshoot-unforgettable"
    },
    {
      title: "Florida Botanical Gardens: Wedding Photos & Cost",
      date: "11/8/24",
      category: [],
      excerpt: "The Florida Botanical Gardens is a gorgeously lush unique venue in the Tampa Bay area that has a lot to offer to a couple looking for a Tampa elopement that has both natural beauty and garden elements and is reasonably priced. This guide lays out the logistics and cost of having a ceremony there with a focus on getting you the best wedding photos.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_31.PNG?updatedAt=1752026807704",
      href: "/blog/florida-botanical-gardens-wedding-photos-cost"
    },
    {
      title: "Tampa Bay Family Photography Guide",
      date: "8/5/24",
      category: [],
      excerpt: "Your go-to guide for planning a meaningful and stress-free family photo session in the Tampa Bay area—so you can focus on making memories that last.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_105.PNG?updatedAt=1752115903661",
      href: "/blog/tampa-courthouse-wedding-guide"
    }
    
    /*{
      title: "Personalize Your Engagement Photoshoot Like Never Before",
      date: "5/19/25",
      category: [],
      excerpt: "Are you tired of scrolling through engagement photos that all look the same? You know the ones: the loving couple in a picturesque field, holding hands and staring into each other's eyes. Well, get ready to break free from the mold and create a truly unique and personalized engagement photoshoot like never before. In this article, we will show you how to unleash your creativity, incorporate meaningful elements and locations, and add a touch of adventure to make your session one-of-a-kind.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_32.PNG?updatedAt=1752027190888",
      href: "/blog/personalize-your-engagement-photoshoot"
    },*/
    /*{
      title: "Elevate Your Bridal Portraits with an After-Elopement Visit to Tampa's Armature Works",
      date: "6/5/25",
      category: [],
      excerpt: "Are you tired of the same old conventional bridal portraits? Looking to add a touch of uniqueness and personalization to your special day? Enter Tampa's Armature Works, a hidden gem that is the perfect setting for after-elopement photos.",
      image: "https://ext.same-assets.com/3287588329/2591829067.jpeg",
      href: "/blog/break-tradition-ice-plant-restaurant"
    },*/
    
    /*{
      title: "Affordable Elopement Planning & Photography Package in Tampa, Florida",
      date: "6/21/25",
      category: [],
      excerpt: "Imagine your dream day in Tampa that matches your vision and does not break the bank. My All-Inclusive Tampa Elopement Package is like a magic wand bringing together the talents of multiple local vendors. This package isn't just about services; it's a symphony of talent.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_17.PNG?updatedAt=1751640222278",
      href: "/blog/all-inclusive-affordable-elopement-planning"
    },*/
    /*,
    {
      title: "Why Hiring a Social Content Creator Will Make Your Wedding Unforgettable",
      date: "1/22/25",
      category: [],
      excerpt: "Imagine stunning photos PLUS quick videos, capturing every memorable moment, and effortlessly creating engaging content for your social media. How can you achieve this? By hiring a professional social content creator. It's the perfect addition to your wedding photography package!",
      image: "https://images.unsplash.com/photo-1529636744336-16bb8f39810d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      href: "#"
    }*/
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Search Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {blogPosts.map((post, index) => (
              <article key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <a href={post.href}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  </a>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="mb-4">
                    {post.category.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.category.map((cat, catIndex) => (
                          <span key={catIndex} className="text-sm text-gray-600">
                            {cat}
                            {catIndex < post.category.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-gray-500 mb-4">Gorban Pixels -  {post.date}</p>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                    <a href={post.href} className="hover:text-gray-700 transition-colors">
                      {post.title}
                    </a>
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.href}
                    className="inline-block text-gray-600 font-medium uppercase tracking-wide text-sm hover:text-gray-900 transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Older Posts Link */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="mr-2">Older Posts</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light mb-8">
              Find me on Instagram @gorbanpixels
            </h3>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1 mb-8">
            {[
              "https://ik.imagekit.io/f9opvmhvz/Photo_27.PNG?updatedAt=1751653669226",
              "https://ik.imagekit.io/f9opvmhvz/Photo_13.PNG?updatedAt=1751639270199",
              "https://ik.imagekit.io/f9opvmhvz/Photo_29_DP3dc-15-?updatedAt=1751686835465",
              "https://ik.imagekit.io/f9opvmhvz/Photo_22.PNG?updatedAt=1751640790578",
              "https://ik.imagekit.io/f9opvmhvz/Photo_40.PNG?updatedAt=1752031533704"
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

          {/* Get In Touch Button */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block border border-white text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
