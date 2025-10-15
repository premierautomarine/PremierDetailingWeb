import { Link } from 'react-router-dom'

const About = () => {
  

  const blogPosts = [
    {
      title: "Admiral’s Choice Subscription",
      excerpt: "Keep your boat looking showroom-ready all year long. Our detailing subscription offers bi-weekly, monthly or quarterly visits to clean, protect, and maintain your vessel, so it always shines like new.",
      image: "https://ik.imagekit.io/tdwk7dqz1/Blog-1.png?updatedAt=1760295134255",
      href: "/blog/Admirals-Choice-Subscription"
    },
    {
      title: "What You Get with a Full Detail",
      excerpt: "A complete overview of our Full Detail service—what’s included, the quality you can expect, and the professional care that keeps your vessel looking its best.",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl font-light text-gray-700 mb-4">
                We’re the type to skip the small talk and get straight to work!
              </h2>
              <h3 className="text-xl font-light text-gray-700 mb-8">
                Long days, heavy sun, and tough jobs don’t scare us - they drive us.
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Fueled by early mornings, high expectations, and the satisfaction of a mirror-finish hull, we take pride in turning hard work into lasting results. One of us is always fine-tuning the buffing process, while the other spends hours perfecting every inch of the interior.
                </p>

                <p>
                  When we’re not on the water, you’ll find us repairing gel coat, restoring shine, or wrenching on our car projects. We believe in doing things the right way every time because that’s what earns trust and sets true craftsmanship apart.
                </p>

                <p>
                 At the end of the day, this isn’t just about cleaning boats, it’s about pride, precision, and keeping every vessel we touch looking its absolute best.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Let's Work Together!
                </a>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8">
                HI, WE ARE
              </h1>

              <div className="relative mb-8">
                <img
                  src="https://ik.imagekit.io/tdwk7dqz1/About-2.jpg?updatedAt=1760486552993"
                  alt="Gorban Pixels photographers"
                  className="w-full max-w-md mx-auto h-96 object-cover rounded-lg"
                />
              </div>

              <h2 className="text-6xl md:text-8xl font-light text-gray-900 mb-4">
                PREMIER
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* My Why Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://ik.imagekit.io/tdwk7dqz1/About-4.jpg?updatedAt=1760487607140"
                alt="Documentary wedding photographer at work"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Our Why
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We didn’t set out knowing this would become our life’s work but looking back, it’s clear everything led us here. What started as a weekend project and a love for the water turned into a passion for craftsmanship, restoration, and bringing boats back to life.
                </p>
                <p>
                  As a two-man crew, we know what it means to build something from the ground up to show up every day, work hard, and take pride in the details that others might overlook. Detailing isn’t just what we do; it’s how we express our dedication, precision, and respect for the craft.
                </p>
                <p>
                  We do this because we care deeply about every vessel we touch, and we’re honored to help boat owners protect what they love most with one flawless finish at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
           From small crafts to luxury vessels, we’ve mastered the art of bringing boats back to life. Every detail we touch reflects years of hands-on expertise and dedication. <br /> Our goal is simple - to build lasting trust through consistency, craftsmanship, and results that exceed expectations every time.
          </h3>
        </div>
      </section>

      {/* More About Me Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://ik.imagekit.io/tdwk7dqz1/About-5.jpg?updatedAt=1760487964651"
                alt="The Life"
                className="w-full h-98 object-cover rounded-lg"
              />
            </div>
            

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                More about us
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p >
                  Artem’s at home anywhere there’s motion and adrenaline. Whether it’s racing his motorcycle down the coast, heading out to fish, or working on new gear, he brings the same focus and precision to every project that he brings to every detail job.
                </p>

                <p>
                  Andray’s world revolves around the water—fishing, paddleboarding, kiteboarding, or tuning up his jet skis. When he’s not out on the bay, he’s probably building, fixing, or improving something just because he can. He’s all about hard work, craftsmanship, and getting it right the first time.
                </p>

                <p >
                  Our team brings the same energy, precision, and efficiency to every job—getting your boat water ready in no time, with quality that speaks for itself.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-600 mb-4 uppercase tracking-wide">What We Offer</h2>
            <h3 className="text-2xl font-light text-gray-900 mb-8">
              Described is what We Offer With Our Services. Check these out!
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} to={post.href} className="block group">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-700 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About