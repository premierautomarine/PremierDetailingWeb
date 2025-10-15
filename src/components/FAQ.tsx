const FAQ = () => {
  const faqs = [
    {
      question: "How often should I have my boat detailed?",
      answer: "We recommend a full detail every 3-6 months depending on use and storage conditions. Regular washes in between help preserve the finish and protect against oxidation, UV damage, and salt buildup."
    },
    {
      question: "Do you come to my location?",
      answer: "Yes! We’re a fully mobile detailing service. Whether your boat is docked, trailered, or in storage, we bring everything needed to perform the job on-site: water, power, and all professional grade products."
    },
    {
      question: "What’s included in a full detail?",
      answer: "Our full detail covers exterior washing, oxidation removal, compounding, polishing, waxing or ceramic coating, metal polishing, vinyl cleaning, and interior detailing. Every service is customized to your vessel’s size and condition."
    },
    {
      question: "Are you insured?",
      answer: "Absolutely. We’re fully insured and can provide proof of insurance upon request for marinas, yacht clubs, or private properties."
    },
    {
      question: "What products do you use?",
      answer: "We use only trusted, marine-grade brands such as Starke Yacht Surface Technologies and other professional detailing products designed specifically for saltwater and UV protection."
    },
    {
      question: "How long does a full detail take",
      answer: "Most full details takes a few hours to a few days depending on the size of the vessel, oxidation level, and service package. We’ll provide an estimated timeframe before we begin."
    },
    {
      question: "Do I need to be present during the service?",
      answer: "Not at all. As long as we have access to the boat, we can complete the detailing while you’re away. We’ll send before-and-after photos once the job is finished. We also require the customer to go through a checklist to make sure everything was done to your expectations."
    },
    {
      question: "Do you offer maintenance or subscription plans?",
      answer: "Yes! Our Admiral’s Choice Subscription offers monthly, quarterly, or annual maintenance plans to keep your boat consistently clean and protected year-round."
    },
    {
      question: "How do I schedule or get a quote?",
      answer: "You can reach us through our website, call, or text. We’ll ask for your boat type, size, and current condition to provide a fast, accurate quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, major credit cards, and digital payments (Zelle, Venmo, etc.). Payment is due upon completion of service unless part of a scheduled subscription plan."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            FAQs
          </h2>
          <p className="text-xl text-gray-700">
             
          </p>
        </div>

        {/* FAQ Grid */}
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

        {/* Bottom Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-16">
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://ik.imagekit.io/tdwk7dqz1/FAQ-1.JPG?updatedAt=1760300661672"
              alt="Sea Hunt Ultra Side"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://ik.imagekit.io/tdwk7dqz1/FAQ-2.JPG?updatedAt=1760300661885"
              alt="Sea Hunt Ultra Interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Transparency Statement */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wide">
            Being open and honest with you matters to us at every step
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
               Your boat is one of your most valued investments, and we treat it that way. From the first quote to the final inspection, we believe in full transparency-clear pricing, honest assessments, and no hidden costs.
            </p>
            <p>
              We take pride in earning your trust through reliable communication, consistent results, and quality work that speaks for itself. Whether it’s your weekend cruiser or your daily vessel, you’ll always know exactly what to expect from start to finish.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Book With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
