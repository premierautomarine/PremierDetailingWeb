const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://ik.imagekit.io/f9opvmhvz/Photo_24_n3D-TGx-G?updatedAt=1751642997452"
                alt="Gorban Pixels photographers"
                className="w-full h-100 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Hi! We're Gorban Pixels
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our approach to wedding photography is a documentary style & focuses on your individuality to create amazing images.
            </p>

            <h3 className="text-1xl md:text-2xl font-light text-gray-900 mb-6">
             We are Tampa's Wedding and Lifestyle Photographers
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We’re Andray and Anastasiya Gorban, a husband and wife photography duo based in the beautiful Tampa Bay. Our passion for capturing life’s most meaningful moments started as a personal journey—documenting our own adventures, special milestones, and the little in-between moments that make life truly special. Now, we’re excited to bring that same passion and care to you.
              </p>

              <p>
                As photographers, we believe that every person, every couple, and every story is unique. Whether it’s a stunning engagement session, a dreamy wedding day, or a simple family portrait, our goal is to create images that feel timeless, authentic, and full of emotion.
              </p>

              <p>
                Though we may be just starting our professional journey, we bring fresh creativity, a keen eye for detail, and an unwavering dedication to our craft. Every session is an opportunity to create something truly special, with images that you’ll cherish for a lifetime.
              </p>

              <p>
                If you’re looking for photographers who genuinely care about your story and want to create something beautiful together, we’d love to hear from you! Let’s turn your moments into memories that last forever.
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
            IN A WORLD FULL OF CURATED PORTRAITS, REGURGITATED POSES, AND PLAIN PHOTOS – LET’S DITCH THE ORDINATRY AND CAPTURE ONE-OF-A-KIND MOMENTS, NON-TRADITIONAL AND VINTAGE-INSPIRED PHOTOS THAT TELL YOUR STORY AS IT TRULY IS.
          </h3>
        </div>

        {/* Personal Bio */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h4 className="text-xl font-medium text-gray-900 mb-6">
            Known to skip the small talk and go straight into perfecting your occasion!
          </h4>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              We're storytellers at heart—partners in life and behind the lens. As a husband and wife team, we bring our unique energies together to create something meaningful. One of us frames the moment with energy and vision, the other with intention and finesse. Together, we tell the full story of love from every angle.
            </p>
            <p>
              We're passionate about living intentionally and showing up fully—in our work, our lives, and our relationships. We believe that taking care of the mind and soul helps us show up as our best selves, and that energy carries into every moment we capture.
            </p>
            <p>
              With everyone we meet, we aim to create space for joy, authenticity, and connection. We believe the best moments happen when you're fully present, and our goal is to document your story just as it unfolds—honest, imperfect, and beautifully real.
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 italic mb-2">Based in Florida</p>
          <p className="text-lg text-gray-600 italic">Available Worldwide</p>
        </div>
      </div>
    </section>
  )
}

export default About
