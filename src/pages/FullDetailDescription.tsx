import { Link } from 'react-router-dom'


const FullDetailDescription = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
          ← Back to Main
        </Link>
      </nav>

{/* Category and Date */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm">Jun 27, 2023 • What You Get with a Full Detail - Premier Boat Detailing</p>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
        What You Get with a Full Detail
      </h1>

      {/* Hero Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Art-Full-Detail-1.jpg?updatedAt=1760449165453"
          alt="Article-Full-Detail-1"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Art-Full-Detail-2.jpg?updatedAt=1760449164639"
          alt="Article-Full-Detail-2"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Art-Full-Detail-3.jpg?updatedAt=1760449165846"
          alt="Article-Full-Detail-3"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Art-Full-Detail-4.jpg?updatedAt=1760449164029"
          alt="Article-Full-Detail-4"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Art-Full-Detail-5.jpg?updatedAt=1760449165273"
          alt="Article-Full-Detail-5"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Art-Full-Detail-6.jpg?updatedAt=1760449165504"
          alt="Article-Full-Detail-6"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          A proper boat detail isn’t just about soap and water, it’s about craftsmanship, protection, and pride. At Premier Boat Detailing, our Full Detail service is designed to restore your vessel from bow to stern, inside and out, using only marine-safe products and professional techniques that protect your investment for the long haul.
        </p>

        <h2 className="text-3xl font-light text-gray-900 mb-6">Step 1: Interior Deep Cleaning</h2>

        <p className="mb-4">
          We start inside the vessel with a complete interior cleaning using Type R and other marine-grade products designed for boats, not household surfaces. Every inch of the interior is cleaned and inspected to remove grime, grit, rust, and salt residue.
          If we find rust spots, we apply a safe rust remover formulated specifically for marine materials to lift stains without harming the gel coat or upholstery. When needed, we’ll buff the interior gel coat to restore its natural shine and smoothness, giving your cabin and seating area that clean, polished look that feels brand new.
        </p>

        <h2 className="text-3xl font-light text-gray-900 mb-6">Step 2: Hull & Exterior Restoration</h2>

        <p className="mb-6">
           Next, we move to the hull, the heart of your vessel’s appearance. We begin with oxidation removal, carefully wet sanding using 800–1200 grit paper, depending on the boat’s condition. Once the surface is clean and smooth, we buff and polish the entire hull to restore a deep, reflective shine.
Every curve,  and  corner gets attention because when we’re done, your boat shouldn’t just look clean, it should turn heads at the dock.
        </p>

        <ul className="space-y-2 mb-6 list-disc list-inside pl-6">
          <li>Gelcoat Repair: We inspect and repair any cracks, damage, or scratches on the hull or deck. Once the surface is even, we professionally restore the gel coat, color-matching and refinishing it to blend perfectly with the original tone and gloss.</li>
          <li>Oxidation Removal: Sanding using 800-1200 grit paper, depending on condition.</li>
          <li>Buff and Polish: The entire hull is buffed and polished to restore vessel to original factory finish</li>
        </ul>

        <h2 className="text-3xl font-light text-gray-900 mb-6">Step 3: Metal & Teak Finishing</h2>

        <p className="mb-6">
           If your vessel features chrome or stainless steel components like railings, cleats, propellers, or trim,  we’ll polish them to a mirror finish. For boats with teak wood, we carefully clean and oil the teak to revive its warm, rich tone and protect it from drying or fading under the Florida sun.
        <p className="mt-8 text-gray-900 mb-6">We restore:</p>
        <ul className="space-y-2 mb-6 list-disc list-inside pl-6">
          <li>Railings</li>
          <li>Teaks</li>
          <li>Propellers</li>
          <li>Engine Bays</li>
          <li>Chrome Trim</li>
          <li>And Many More</li>
        </ul>
        </p>

        


        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Bleach-Free Promise</h3>
          <p className="mb-6">
           At Premier Boat Detailing, we take a firm stand on this:
        </p>
          <p className="mb-4">
            <strong>- We do not and will never use bleach -</strong> 
          </p>
          <p className="mb-4">
            Many cheap detailers use bleach because it’s quick and inexpensive, but it permanently etches gel coat and vinyl upholstery, leaving surfaces dull, faded, and brittle. You can always tell when bleach has been used — interiors lose their glossy finish, and mold and mildew return faster because bleach damages the protective surface, giving spores something to grip.
          </p>
          <p className="mb-4">Instead, we use only marine-approved cleaners that safely eliminate contaminants while protecting your surfaces. Every product we use is researched, tested, and proven to perform — and we’re always happy to show you exactly what we use before we begin.</p>
        </div>

        {/* Image */}
        <div className="mb-12">
          <img
            src="https://ik.imagekit.io/tdwk7dqz1/Art-Full-Detail-7.jpg?updatedAt=1760449978635"
            alt="Article-Full-Detail-7"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <h2 className="text-3xl font-light text-gray-900 mb-6">The Premier Standard</h2>

        <p className="mb-6">
          Our Full Detail isn’t just a cleaning — it’s a full restoration and protection process built to handle Florida’s toughest conditions. We combine skill, the right tools, and the right products to make your boat look and feel brand new again.
        </p>

        <p className="mb-6">
          When we’re finished, you won’t just see the difference — you’ll feel it every time you step aboard.
        </p>

        

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-gray-700 mb-6">
            Ready to bring your boat back to its original shine? From full gel coat restoration to ceramic coating and interior deep cleaning, we’ve got you covered across Tampa Bay and beyond.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Book Your Detail
          </Link>
        </div>
      </div>
    </article>
  )
}

export default FullDetailDescription
