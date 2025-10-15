const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="relative h-96 md:h-[600px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/tdwk7dqz1/Hero-1.jpg?updatedAt=1760224217756"
            alt="Formula 457"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-96 md:h-[600px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/tdwk7dqz1/Hero-2.jpg?updatedAt=1760221913643"
            alt="Formula 457-2 "
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Feature Image */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-1">
        <img
          src="https://ik.imagekit.io/tdwk7dqz1/Hero-3.jpg?updatedAt=1760220892292"
          alt="Yatchs At the Marina"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
            Tampa Bay’s<br />
            Most Trusted Detailers<br />
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
             Restoration • Protection • Perfection
          </p>
        </div>
      </div>

      

      {/* Main Tagline */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-1xl md:text-3xl font-light text-gray-900 mb-8 leading-tight">
          You Name It, We Can Do It.<br />
          Oxidation Removal · Interior & Exterior Detailing<br />
          Engine Bay & Bilge Cleaning · And More
        </h2>
      </div>
    </section>
  )
}

export default Hero