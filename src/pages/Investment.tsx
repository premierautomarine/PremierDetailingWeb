const Investment = () => {
  const packages = [
    {
      title: "Showroom Shine",
      location: "Full Detail",
      price: "Starting at $25 per ft",
      features: [
        "Premium marine-grade products for a long-lasting, high-gloss finish",
        "We don’t leave until your vessel looks its absolute best—satisfaction guaranteed",
      ],
      image: "https://ik.imagekit.io/tdwk7dqz1/Investment-4.jpg?updatedAt=1760364879663"
    },
    {
      title: "Admiral Package",
      location: "Full Detail + Weekly, Bi-weekly or Monthly visits",
      price: "Starting at $12 per ft",
      features: [
        "Includes everything from the Showroom Shine package",
        "Scheduled maintenance washes to keep your vessel spotless between full details",
        "Light polishing and protection touch-ups at every visit",
        "Ideal for boat owners who want consistent care all season long"
      ],
      image: "https://ik.imagekit.io/tdwk7dqz1/Investment-8.jpg?updatedAt=1760367582395"
    },
    {
      title: "Interior Clean",
      location: "Entire Interior Cleaning",
      price: "Starting at $10 per ft",
      features: [
        "Deep cleaning of all interior surfaces, vinyl, compartments, and upholstery",
        "Mildew removal, odor elimination, and conditioning of soft surfaces",
        "Windows, hatches, and interior detailing for a fresh, clean environment"
      ],
      image: "https://ik.imagekit.io/tdwk7dqz1/Investment-5.jpg?updatedAt=1760365092674"
    },
    {
      title: "Exterior Clean",
      location: "Full Exterior Clean",
      price: "Starting at $15 per ft",
      features: [
        "Full exterior wash with soap formulated for marine finishes",
        "Salt, grime, and water spot removal with a protective wax finish",
        "Metal, chrome, and glass polishing for a clean, reflective look"
      ],
      image: "https://ik.imagekit.io/tdwk7dqz1/Investment-7.jpg?updatedAt=1760367095477"
    },
    {
      title: "Gelcoat & Fiberglass Repair",
      location: "Scratches, Holes, Cracks, Gelcoat Finish, ect.",
      price: "Contact for a Free Estimate",
      features: [
        "Professional gelcoat restoration and surface repair for chips, cracks, and oxidation",
        "Color matching and high-gloss finishing to blend repairs seamlessly",
        "Machine polishing and buffing to restore depth, clarity, and shine",
        "Long-lasting protection with marine-grade sealants and coatings"
      ],
      image: "https://ik.imagekit.io/tdwk7dqz1/Investment-6.jpg?updatedAt=1760366466962"
    }
  ]

 /*const addOns = [
     "xxxx (Regular $350)",
    "xxxxx $250 With Package (Regular $350)"
  ]*/

  const faqs = [
     {
      question: "How do I book a detailing appointment?",
      answer: "You can book directly through our website, social media, or by calling or texting us. We’ll gather details about your vessel’s size, condition, and location to provide an accurate quote and schedule your service."
    },
    {
      question: "Do you come to my location?",
      answer: "Yes! We’re a fully mobile detailing crew serving the Tampa Bay and Central Florida area. Whether your boat is docked, trailered, or in storage, we bring everything needed to get the job done on-site."
    },
    {
      question: "Are you insured?",
      answer: "Absolutely. We’re fully insured and can provide proof of insurance upon request for marinas, yacht clubs, or private docks."
    },
    {
      question: "How long does a full detail take?",
      answer: "Timing depends on your boat’s size and condition. Most full details take between 4–8 hours. We’ll provide a clear estimate before starting and keep you updated throughout the process."
    },
    {
      question: "What products do you use?",
      answer: "We only use professional-grade marine products designed for UV, saltwater, and oxidation protection. This ensures long-lasting results that keep your vessel protected and shining between services."
    },
    {
      question: "How do I maintain my boat after detailing?", 
      answer: "We’ll give you simple maintenance tips to help extend the life of your detail. For consistent upkeep, we also offer our Admiral Package — monthly or bi-weekly washes that keep your boat looking its best year-round."
    },
    {
      question: "What payment methods do you accept?", 
      answer: "We accept cash, credit cards, and digital payments like Zelle or Venmo. Payment is due upon completion unless you’re part of our Admiral maintenance plan."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Our goal is to leave you fully satisfied with how your vessel looks and feels.
              </h1>
            </div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/tdwk7dqz1/Investment-1.jpg?updatedAt=1760363920735"
                alt="Romantic wedding photography"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

  

      {/* Description */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-1xl font-light text-gray-900 mb-8">
            Precision-driven, results-focused detailing for boat owners who value craftsmanship, care, and lasting protection.
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The beauty of what we do is in the details, bringing life back to every surface and restoring the pride that comes with owning a clean, well-kept vessel. We treat every boat as if it were our own, using proven techniques and professional-grade products to achieve a flawless, long-lasting finish.
            </p>
            <p>
              From heavy oxidation removal to ceramic coating and interior deep cleaning, our goal is simple: deliver unmatched results that turn heads at the dock and keep your investment protected all year long.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {packages.map((pkg, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gray-900 text-white p-8 rounded-lg">
                    <h3 className="text-3xl font-light mb-4">{pkg.title}</h3>
                    <p className="text-sm uppercase tracking-wide text-gray-300 mb-6">{pkg.location}</p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-200">{feature}</li>
                      ))}
                    </ul>

                    <div className="text-center">
                      <div className="inline-block border border-white px-6 py-3 mb-4">
                        <span className="text-2xl font-light">{pkg.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            Frequently Asked Questions & Answers
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-8 uppercase tracking-wide">
            QUALITY, CRAFTSMANSHIP, AND PROTECTION - IN EVERY DETAIL
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <p>
              We believe every vessel deserves more than a quick wash. That’s why we focus on professional-grade results that restore, protect, and enhance your boat inside and out. From full gel coat restoration and fiberglass repair to interior deep cleaning, polishing, and ceramic coating, every step is done with precision and care.
            </p>
            <p>
              Our mission is simple: preserve your boat’s beauty, extend its life, and keep it water-ready all year long. We treat every project like it’s our own, ensuring a lasting shine and protection you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
            <img
              src="https://ik.imagekit.io/tdwk7dqz1/Investment-3.jpg?updatedAt=1760364627952"
              alt="Wedding transparency"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://ik.imagekit.io/tdwk7dqz1/Investment-2.jpg?updatedAt=1760364628032"
              alt="Documentary wedding photography"
              className="w-full h-64 object-cover"
            />
          </div>

          <p className="text-gray-600 mb-8">Questions? Let's chat!</p>

          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default Investment
