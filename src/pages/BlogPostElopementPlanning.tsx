import { Link } from 'react-router-dom'

const BlogPostElopementPlanning = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
          ← Back to Blog
        </Link>
      </nav>

      {/* Category and Date */}
      <div className="mb-6">
        <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 text-sm font-medium rounded-full mb-4">
          Vactioner Favorite
        </span>
        <p className="text-gray-500 text-sm">Jan 24, 2024 • Written By Gorban Pixels</p>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
        Affordable Elopement Planning & Photography Package in Tampa, Florida
      </h1>

      {/* Hero Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <img
          src="https://ext.same-assets.com/3287588329/2747092135.jpeg"
          alt="St Augustine elopement photography"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ext.same-assets.com/3287588329/1598597551.jpeg"
          alt="Romantic elopement photos"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ext.same-assets.com/3287588329/2301756372.jpeg"
          alt="Wedding ceremony setup"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ext.same-assets.com/3287588329/2307804310.jpeg"
          alt="Bridal bouquet and details"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ext.same-assets.com/3287588329/2999755070.jpeg"
          alt="Couple portraits"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ext.same-assets.com/3287588329/4177444576.jpeg"
          alt="Wedding cake and champagne"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Imagine your dream day in Tampa—one that reflects your vision perfectly without stretching your budget.
        </p>

        <p className="mb-6">
          Our Tampa Elopement Package is like a beautifully orchestrated collaboration—bringing together some of the most talented local vendors to create a seamless, stress-free experience. As your photography duo, we’re not just capturing moments—we’re helping curate a day that truly reflects you. From an amazing hair and makeup artist to a creative styling team, a trusted florist, and a cake designer who crafts with heart, every element is carefully chosen and thoughtfully coordinated to bring your vision to life.
        </p>

        <p className="mb-8">
          Your vision, brought to life by a team that’s truly honored and excited to celebrate your love every step of the way.
        </p>

        {/* Package Details */}
        <div className="bg-gray-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Tampa Elopement Package</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• 2+ Hours Of Photographer Coverage</li>
            <li>• Bridal Makeup + Hair</li>
            <li>• Bridal Bouquet + Boutonniere</li>
            <li>• Ceremony Arch</li>
            <li>• Sweetheart Table For Two</li>
            <li>• Cake + Champagne For Two</li>
            <li>• Seating For Up To 20 Guests</li>
            <li>• Online Gallery With Professionally Edited Images (75 Images/Hour On Average)</li>
            <li>• Print Release, Ability To Print From My Store</li>
            <li className="font-semibold text-lg">• Starts at $3500+</li>
          </ul>
        </div>

        <h2 className="text-3xl font-light text-gray-900 mb-6">Take The Stress Out of Planning Your Micro Wedding</h2>

        <p className="mb-6">
          I understand how challenging it can be to plan your dream elopement in Tampa while staying within budget. You're not alone in trying to find the right vendors who offer both quality and affordability. The pressure of managing costs while aiming for an unforgettable experience can easily take away from the excitement of what should be a joyful and intimate celebration.
        </p>

        <p className="mb-8">
          Imagine a planning experience that feels effortless, where every detail comes together with ease. Whether it’s exchanging vows under a custom arch on a breezy Tampa beach or strolling through the sunlit charm of historic streets, your love story takes center stage. In this world, your dream elopement unfolds without financial stress—freeing you to be fully present in the beauty and magic of the moment.
        </p>

        <h2 className="text-3xl font-light text-gray-900 mb-6">What's Included</h2>

        <p className="mb-4">Introducing the <strong>Tampa Elopement Package</strong>!</p>

        <p className="mb-4">Step 1: Discover our thoughtfully crafted package that includes everything you need for a beautiful, stress-free elopement—complete with photography.</p>
        <p className="mb-4">Step 2: Personalize your package to match your unique style, needs, and budget.</p>
        <p className="mb-8">Step 3: Enjoy a smooth planning journey and a stunning celebration that reflects your vision without sacrificing quality or experience.</p>

        {/* More Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <img
            src="https://ext.same-assets.com/3287588329/2161941314.jpeg"
            alt="Wedding ceremony moment"
            className="w-full h-80 object-cover rounded-lg"
          />
          <img
            src="https://ext.same-assets.com/3287588329/2577715068.jpeg"
            alt="Couple dancing"
            className="w-full h-80 object-cover rounded-lg"
          />
          <img
            src="https://ext.same-assets.com/3287588329/2440461970.jpeg"
            alt="Wedding details"
            className="w-full h-80 object-cover rounded-lg"
          />
          <img
            src="https://ext.same-assets.com/3287588329/4169380633.jpeg"
            alt="Romantic couple portrait"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        <h2 className="text-3xl font-light text-gray-900 mb-6">FAQ:</h2>

         <div className="space-y-6 mb-12">
          <div>
            <p className="font-semibold text-gray-900 mb-2">Q: Can the package be personalized to match what I’m looking for?</p>
            <p className="text-gray-700">A: Absolutely! Your elopement should reflect who you are as a couple. That’s why every package can be customized to fit your specific vision, needs, and priorities.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 mb-2">Q: Does a more affordable option mean sacrificing quality?</p>
            <p className="text-gray-700">A: Not at all. This package is thoughtfully designed to provide high-quality service and stunning results—without the high price tag. Beautiful memories shouldn't come with compromise.</p>
          </div>

          <div>
            <p className="font-semibold text-gray-900 mb-2">Q: Can you help with location ideas or vendors outside the listed options?</p>
            <p className="text-gray-700">A: Definitely. I’m happy to recommend some of my favorite local spots and reliable vendors—including officiants—and can even assist with securing things like beach permits if needed.</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
          <p className="text-gray-700 mb-4 italic">
            Consider this: Imagine having a stress-free, beautifully curated celebration that’s a true reflection of your love. Take a moment to picture it—then take the first step toward making it real.
          </p>
          <p className="text-gray-900 font-medium mb-6 italic">
            We would love to jump on a quick call to connect and make sure we’re a great fit for your big day!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Book This Package
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 mb-4">Vendors Involved in Catherines + David's Elopement highlighted in the top gallery:</p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>Set Up: <a href="https://www.instagram.com/gathered.rentals.events/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">Gathered Co.</a></p>
            <p>Photography: <Link to="/contact" className="text-gray-900 hover:underline">Gorban Pixels</Link></p>
            <p>Floral: <a href="https://soirees4days.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">Soirees For Days</a></p>
            <p>HMUA: <a href="https://beautybyashleytaylor.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">Beauty By Ashley Taylor</a></p>
            <p>Cake: <a href="https://www.instagram.com/new_beckys_cakes904_llc/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">Becky's Cakes 904</a></p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
        <Link
          to="/blog/florida-botanical-gardens-wedding-photos-cost"
          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
        >
          <span className="mr-2">←</span>
          <span>Previous Post</span>
        </Link>
        <Link
          to="/blog/st-augustine-courthouse-wedding-guide"
          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
        >
          <span>Next Post</span>
          <span className="ml-2">→</span>
        </Link>
      </div>
    </article>
  )
}

export default BlogPostElopementPlanning
