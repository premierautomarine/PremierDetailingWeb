import { Link } from 'react-router-dom'

const BlogPostFloridaBotanicalGarden = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Florida Botanical Gardens in Tampa: Wedding Photos & Cost
            </h1>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 mb-8">
              <span>Dec 4</span>
              <span>•</span>
              <span>Written By Gorban Pixels</span>
            </div>
          </div>

          {/* Hero Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-12">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_68.PNG?updatedAt=1752107340732"
              alt="Florida Botanical Gardens wedding photography"
              className="w-full h-40 object-cover"
            />
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_70.PNG?updatedAt=1752107340183"
              alt="Garden wedding photos"
              className="w-full h-40 object-cover"
            />
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_69.PNG?updatedAt=1752107339832"
              alt="Tampa botanical wedding venue"
              className="w-full h-40 object-cover"
            />
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_71.PNG?updatedAt=1752107340555"
              alt="Botanical garden wedding photography"
              className="w-full h-40 object-cover"
            />
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 p-8 mb-12 text-center">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Our photographer is phenomenal! She took our photos for our elopements in Tampa and she was able to really capture our essence. She really is so talented and also so friendly and easy to work with. Her work speaks for itself! If you need an elopement/ wedding photographer you will not be disappointed."
            </blockquote>
            <cite className="text-gray-600 font-medium">— Tenisha + Zak, Client Couple</cite>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Florida Botanical Gardens as a Stunning Tampa Wedding Venue</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Florida Botanical Gardens is a gorgeously lush unique venue in the heart of the Tampa Bay area that has a lot to offer to a couple looking for a Tampa elopement that has both natural beauty and garden elements and is reasonably priced. This guide lays out the logistics and cost of having a ceremony there with a focus on getting you the best wedding photos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The expansive gardens are comprised of themed areas including a butterfly garden, rose garden, tropical conservatory, and scenic walking paths through native Florida landscapes. Especially stunning during spring blooms but gorgeous for a ceremony all year long.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured in this Guide for Florida Botanical Gardens Wedding Photography and Cost/Pricing:</h3>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li><a href="#logistics" className="hover:text-gray-900">Ceremony Logistics + Cost</a></li>
              <li><a href="#reception" className="hover:text-gray-900">Getting Ready + Reception Venues</a></li>
              <li><a href="#photography" className="hover:text-gray-900">Photo Recommendations and Timelines of the Day</a></li>
              <li><a href="#vendors" className="hover:text-gray-900">Wedding Vendors to Consider and Hire</a></li>
              <li><a href="#gallery" className="hover:text-gray-900">Sample Photo Gallery</a></li>
            </ol>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            {/* Ceremony Logistics Section */}
            <section id="logistics">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Ceremony Logistics + Cost</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                What you should know is that the Florida Botanical Gardens weddings are handled by their special events team who can arrange and book various garden locations for your ceremony.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Their garden ceremony packages include venue use, required permits and insurance, event coordination, and basic setup. They have packages designed for intimate ceremonies up to 150 guests. Expect to spend between $800-$2500 depending on your number of guests, chosen garden area, and other specifications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can book directly with the Florida Botanical Gardens events team through their website, but for best photos, make sure you scroll down on this page for timeline assistance first.
              </p>
            </section>

            {/* Getting Ready Section */}
            <section id="reception">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Getting Ready + Reception Venues Ideas</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The gardens offer beautiful indoor spaces that can be used for bridal preparation, perfect for those elegant getting-ready photos. I highly recommend adding this option for a complete wedding day timeline.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                While the gardens focus on ceremonies, I have several suggestions for where you can take your family and friends afterward to celebrate your new marriage.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For receptions, consider nearby Tampa Bay venues like the Tampa Museum of Art, Armature Works, or waterfront restaurants along the Hillsborough River for the perfect celebration continuation.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_74.PNG?updatedAt=1752107325837"
                  alt="Botanical garden ceremony"
                  className="w-full h-40 object-cover"
                />
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_75.PNG?updatedAt=1752107325560"
                  alt="Bridal preparation photos"
                  className="w-full h-40 object-cover"
                />
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_73.PNG?updatedAt=1752107334782"
                  alt="Tampa garden wedding venue"
                  className="w-full h-40 object-cover"
                />
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_72.PNG?updatedAt=1752107336835"
                  alt="Garden reception ideas"
                  className="w-full h-40 object-cover"
                />
              </div>

              <p className="text-gray-700 leading-relaxed">
                Here is the guide with other rehearsal dinner and reception spots in Tampa. Happy planning!
              </p>
            </section>

            {/* Photography Section */}
            <section id="photography">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Photography Recommendations + Timelines</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are getting eloped/married in the hot months of spring, summer or early fall, you might want to schedule your ceremony later in the day closest to sunset for the best lighting and lower humidity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you are getting married in the middle-late fall or winter, the timing of the ceremony is not as important because the sun is not as harsh and the gardens are particularly beautiful during these cooler months.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                If you are not sure, my recommendation is to decide on your date, contact the Florida Botanical Gardens events team to check their available times and then get with your photographer to work out a timeline based on whether or not you plan on taking get ready photos prior to the ceremony and whether or not you are planning to take bridal portraits around the gardens afterward.
              </p>

              {/* Sample Timelines */}
              <div className="bg-gray-50 p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Timeline of Summer:</h3>
                <div className="space-y-2 text-gray-700 font-mono">
                  <div>6:30 PM Ceremony</div>
                  <div>7:00 PM Family Photos</div>
                  <div>7:30 - 8:30 PM (or whatever time sunset is) Bridal Portraits at Florida Botanical Gardens</div>
                </div>
                <p className="text-gray-700 mt-4">
                  As you can see, the time of the ceremony is 2 hours prior to sunset. I highly recommend this window for most optimal wedding photography lighting and cooler air.
                </p>
              </div>

              <div className="bg-gray-50 p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sample Timeline of Winter (including getting ready and reception):</h3>
                <div className="space-y-2 text-gray-700 font-mono">
                  <div>2:00 PM Getting Ready</div>
                  <div>3:30 PM Ceremony</div>
                  <div>3:45 PM Family Photos</div>
                  <div>4:00 - 4:30 PM Bridal Portraits at Botanical Gardens</div>
                  <div>4:30 - 5:00 PM Bridal Portraits Around Tampa</div>
                  <div>5:15 - 10 PM Reception</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_77.PNG?updatedAt=1752109656214"
                  alt="Wedding ceremony timeline"
                  className="w-full h-40 object-cover"
                />
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_79.PNG?updatedAt=1752109652950"
                  alt="Bridal portraits"
                  className="w-full h-40 object-cover"
                />
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_78.PNG?updatedAt=1752109656126"
                  alt="Family wedding photos"
                  className="w-full h-40 object-cover"
                />
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_80.PNG?updatedAt=1752109652229"
                  alt="Tampa botanical garden photos"
                  className="w-full h-40 object-cover"
                />
              </div>
            </section>

            {/* Vendors Section */}
            <section id="vendors">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Tampa Wedding Vendors</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Between hair, makeup, flowers, props, set up, music, dresses and cake - there is a lot to do when planning a wedding. We created a Tampa Bay Vendor page just to help you find the best vendors in Tampa no matter your needs.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Of course, we recommend hiring a skilled local photography duo who will minimize your stress leading up to and on the day of your wedding for the best experience! :) We are here to guide you for amazing photos!
              </p>

              <div className="text-center mb-8">
                <Link
                  to="/contact"
                  className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Book Us!
                </Link>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 p-8 text-center">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "We were in need of a photographer for our elopement ceremony - after going through several portfolios, Gorban Pixels stood out from all the others! Our photographer and her team went above and beyond, ensuring to capture the most beautiful photos. She scheduled a phone call with me and my wife, talked us through the turn of events that would take place, and made us feel very comfortable and excited for our big day. Our photographer's assistant, Carly, was the photographer, and our main photographer did the editing. Carly did an incredible job capturing the photos. She made it fun and even brought a Bluetooth speaker to play our favorite songs as we explored the beautiful gardens and downtown Tampa, all of which were areas pre-planned by our photographers. If you are looking for true professionals and stunning photography, I highly recommend Gorban Pixels!"
                </blockquote>
                <cite className="text-gray-600 font-medium">— Jessica + Joey, Client Couple</cite>
              </div>
            </section>

            {/* Gallery Section */}
           {/* <section id="gallery">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Sample Photo Gallery</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Below, enjoy a sample sneak peek of Madeline + Max's beautiful and unique, vintage and garden-inspired micro wedding!
              </p>*/}

              {/* Extensive Photo Gallery */}
             {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">*/}
                {/* Multiple rows of wedding photos */}
               {/*} {[
                  ""
                ].map((image, index) => (
                  <img
                    key={`garden-${index}`}
                    src={image}
                    alt={`Botanical garden wedding photo ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </section>*/}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
            <Link
              to="/blog/2025-wedding-trends"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="text-left">
                <div className="text-sm">Previous</div>
                <div className="font-medium">Top 2025 Wedding Trends That Will Blow You Away</div>
              </div>
            </Link>
            <Link
              to="/blog/tampa-courthouse-wedding-guide"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-right"
            >
              <div>
                <div className="text-sm">Next</div>
                <div className="font-medium">Tampa Courthouse Wedding Guide</div>
              </div>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostFloridaBotanicalGarden
