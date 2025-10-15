const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://ik.imagekit.io/tdwk7dqz1/About-3.jpg?updatedAt=1760486853606"
                alt="The Team"
                className="w-full h-100 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Hi! We're Premier Boat Detailing
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our approach to detailing your vessel is patience and a keen eye for perfection, focusing on getting your vessel the gloss and shine you need.
            </p>
            <h3 className="text-1xl md:text-2xl font-light text-gray-900 mb-6">
             We are Tampa's #1 Boat Detailers
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We’re Andray Gorban and Artem Varlamov, a two-person crew serving Tampa Bay with professional, on-site boat detailing. Our approach is simple: protect your investment, revive the shine, and keep your vessel looking its best wheather its on a dock, lift, trailer, or storage unit.
              </p>

              <p>
                As problem-solvers, we bring a detailer’s eye and a craftsman’s pride to every job. From routine washes to full gel coat restoration and ceramic protection, we tailor each service to your boat’s condition, use, and goals. Whether it’s a quick turn before a weekend on the water or a multi-step oxidation removal, we do it right the first time.
              </p>

              <p>
                What we’re known for:
                <ul >
                  <li> <strong> Consistent results:</strong> Proper prep, professional tools, and flawless finishes.</li>
                  <li> <strong>Clear communication:</strong> Straightforward quotes, updates, and photos.</li>
                  <li> <strong>Protection that lasts:</strong> Marine-grade waxes and ceramics for UV and salt defense.</li>
                </ul>
              </p>

              <p>
                If you’re looking for boat detailers who genuinely care about your vessel and use only professional, marine-safe products, we’re your team. We take pride in restoring every surface to a pristine, like-new finish; bringing your boat back to mint condition and ready to shine on the water.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Get to Know Us
              </a>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <h3 className="text-1xl md:text-2xl font-light text-gray-900 mb-8 uppercase tracking-wide">
            IN A WORLD FULL OF CARELESS WASHES AND INEXPERIENCED DETAILING, WE STAND FOR CRAFTSMANSHIP THAT LASTS. OUR MISSION IS TO RESTORE, PROTECT, AND PRESERVE YOUR VESSEL’S TRUE BEAUTY, SO IT LOOKS ITS BEST, SEASON AFTER SEASON.
          </h3>
        </div>

        {/* Personal Bio */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h4 className="text-xl font-medium text-gray-900 mb-6">
            Known for our experience with all vessel types and conditions, we stand behind our name and our quality. Nothing makes us prouder than seeing our clients smile when they see their freshly detailed boat!
          </h4>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              We're a hands-on crew, dedicated to delivering professional results without the dealership price tag. By keeping our operation small and efficient, we eliminate overhead costs so every dollar goes into quality products, attention to detail, and results that last.
            </p>
            <p>
              Our approach is simple: work smart, stay consistent, and treat every vessel like our own. Whether it’s a quick wash, oxidation removal, or a full ceramic coating, we take pride in doing it right the first time.
            </p>
            <p>
              We believe great detailing should be both affordable and exceptional. Our mission is to give every client that fresh off the showroom finish without the premium markup.
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 italic mb-2">Based in Tampa, Florida</p>
          <p className="text-lg text-gray-600 italic">Available throughout Central Florida</p>
        </div>
      </div>
    </section>
  )
}

export default About