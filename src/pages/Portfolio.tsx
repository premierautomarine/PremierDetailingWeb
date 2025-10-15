const Portfolio = () => {
  const portfolioItems = [
    {
      
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-1.jpg?updatedAt=1760316045559"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-4.jpg?updatedAt=1760316045560"
    },
    {

      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-3.jpg?updatedAt=1760316045423"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-2.jpg?updatedAt=1760316045237"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-5.jpg?updatedAt=1760317052104"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-6.jpg?updatedAt=1760317052968"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-7.jpg?updatedAt=1760317052599"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-8.jpg?updatedAt=1760317052943"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-9.jpg?updatedAt=1760317053113"
    },
    {

      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-10.jpg?updatedAt=1760317052070"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-11.jpg?updatedAt=1760317052031"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-12.jpg?updatedAt=1760317051889"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-13.jpg?updatedAt=1760317051160"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-14.jpg?updatedAt=1760317052312"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-15.jpg?updatedAt=1760317052461"
    },
    {
      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-16.jpg?updatedAt=1760317052700"
    },
    {

      image: "https://ik.imagekit.io/tdwk7dqz1/Restore-17.jpg?updatedAt=1760317052171"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Galleries of Past Work
          </h1>
          <p className="text-gray-600 mb-8">
            Pour yourself a cup of coffee, get comfortable, and enjoy browsing through our projects.
          </p>
        </div>
      </section>

      {/* Portfolio Label */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
            Portfolio
          </h2>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
  <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
      {portfolioItems.map((item, index) => (
        <div key={index} className="group text-center">
          <div className="relative aspect-[1375/1000] mb-6 overflow-hidden rounded-lg shadow-md">
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Instagram Feed Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light mb-8">
              Find us on Facebook{' '}
              <a
                href="https://www.facebook.com/profile.php?id=61581825377055"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                @Premier Boat Detailing 
              </a>
            </h3>
            
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
                <a href="https://www.facebook.com/profile.php?id=61581825377055" target="_blank" rel="noopener noreferrer">
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
        </div>
      </section>
    </div>
  )
}

export default Portfolio
