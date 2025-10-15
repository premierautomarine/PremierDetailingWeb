import { Link } from 'react-router-dom'

const BlogPostEditorialTampa = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
          ← Back to main
        </Link>
      </nav>

      {/* Category and Date */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm">Jun 21, 2025 • Admirals Choice Subscription - Premier Boat Detailing</p>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
        Admiral's Choice Subscription
      </h1>

      {/* Hero Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Article1-1.jpg?updatedAt=1760374979723"
          alt="Editorial Tampa photography style"
          className="w-full h-80 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Article1-2.jpg?updatedAt=1760374979148"
          alt="Tampa urban editorial wedding"
          className="w-full h-80 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Article1-4.jpg?updatedAt=1760374979702"
          alt="Cinematic Tampa elopement"
          className="w-full h-80 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Article1-3.jpg?updatedAt=1760374979542"
          alt="Editorial style couple photography"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

   {/* Content */}
<div className="prose prose-lg max-w-none">
  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
    Trends in detailing may change, but true craftsmanship never goes out of style. At Premier Boat Detailing, we offer a the Admiral Choice subscription that deliver lasting results year round and saves you money.
 </p>

  <p className="mb-6">
    Owning a boat in Florida isn’t just about getting out on the water; it’s about maintaining a vessel that reflects pride, performance, and precision. That’s why we created the Admiral’s Choice Subscription, a year-round maintenance program built for boat owners who refuse to settle for average.
  </p>

  <p className="mb-6">
    From the intense Florida sun to constant exposure to saltwater, your vessel faces tough conditions every day. The Admiral’s Choice subscription takes the stress out of upkeep by providing a scheduled, hands-on detailing service designed to keep your boat protected, polished, and always ready to launch.
  </p>

  <h2 className="text-3xl font-light text-gray-900 mb-6">Whats included in each visit?</h2>

  <p className="mb-6">
    Each visit includes exterior and interior cleaning, gel coat maintenance, and ceramic coating touch-ups using the industry’s highest-grade marine products. We go beyond simple washes, our process includes oxidation prevention, UV protection, and precision polishing that keeps your hull shining like it just left the showroom.
  </p>

  <h2 className="text-3xl font-light text-gray-900 mb-6">Subscription Durations</h2>

  <p className="mb-6">
   Subscribers can choose a bi-weekly, monthly or quarterly schedule, ensuring their boat receives consistent care tailored to its use and environment. Every service is performed by professionals who treat your vessel as if it were their own — down to the smallest chrome fitting and the last drop of water on the deck.
  </p>

  <p className="mb-6">
    What makes Admiral’s Choice truly stand apart is our commitment to long-term protection. This isn’t a one-time clean-up; it’s a partnership built on trust, consistency, and pride in craftsmanship. Whether docked in Tampa Bay, Clearwater, or St. Pete, you’ll know your boat is always cared for by the same detailers who know its every curve, color, and finish.
  </p>

  <p className="mb-8">
   When you’re part of the Admiral’s Choice, your boat isn’t just maintained — it’s command ready. <strong>Stay polished. Stay protected. Stay ahead of the tide.</strong> 
  </p>


  <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
    <p className="text-gray-700 mb-6">
       Ready to bring your boat back to its best? From full gel coat restoration to ceramic protection, we’ll make your vessel look showroom-ready and built to shine on the water.
    </p>
    <Link
      to="/contact"
      className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
    >
      Book Your Detail Today
    </Link>
  </div>

</div>

    </article>
  )
}

export default BlogPostEditorialTampa
