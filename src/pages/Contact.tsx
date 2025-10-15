import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    heardAbout: '',
    inquiryType: '',
    instagram: '',
    weddingDate: '',
    ceremonyReceptionLocation: '',
    guestCount: '',
    Additional:''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const response = await fetch('https://formspree.io/f/xyzjrjnn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      alert('Thank you! Your message has been sent.')
      setFormData({
        names: '',
        email: '',
        phone: '',
        heardAbout: '',
        inquiryType: '',
        instagram: '',
        weddingDate: '',
        ceremonyReceptionLocation: '',
        guestCount: '',
        Additional:''
      })
    } else {
      alert('Something went wrong. Please try again later.')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Error sending message.')
  }
}

 return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                We’re here to give your boat more than just a basic wash
              </h1>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Before you schedule with us, we want you to understand the value behind what we do. Boat detailing isn’t just about making things look clean, it’s about preserving what you’ve worked hard for. Every polish, every restoration, every coat of protection is done with care and precision to keep your vessel in peak condition.
                </p>
                <p>
                  We take pride in doing things the right way, the first time. When you see your reflection in that mirror finish, it’s not just shine, it’s craftsmanship, protection, and pride that lasts long after we pack up.
                </p>
              </div>

              
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="relative h-100 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/tdwk7dqz1/Contact-1.JPG?updatedAt=1760327821056"
                  alt="Castle wedding photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-100 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/tdwk7dqz1/Contact-2.JPG?updatedAt=1760328014957"
                  alt="Beach engagement session"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Names */}
              <div>
                <label htmlFor="names" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="names"
                  name="names"
                  value={formData.names}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E.g. myemail@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="E.g. 347 444 5555"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* How did you hear about me */}
              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="heardAbout"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="instagram">Instagram</option>
                  <option value="referral">Facebook</option>
                  <option value="vendor">TikTok</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* What are you inquiring about */}
              <div className="md:col-span-2">
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  What are you inquiring about? *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="wedding">Admirals Club Subscription</option>
                  <option value="elopement">Full Detail</option>
                  <option value="engagement">Gel Coat Restoration</option>
                  <option value="couples">Oxidation Removal</option>
                  <option value="couples">Interior Clean</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Guest Count */}
              <div className="md:col-span-2">
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Boat Type (Make & Model)
                </label>
                <input
                  type="text"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              {/* Ceremony + Reception locations */}
              <div className="md:col-span-2">
                <label htmlFor="ceremonyReceptionLocation" className="block text-sm font-medium text-gray-700 mb-2">
                  Other Details
                </label>
                <textarea
                  id="ceremonyReceptionLocation"
                  name="ceremonyReceptionLocation"
                  value={formData.ceremonyReceptionLocation}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
            </div>

            


            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-gray-900 text-white px-12 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom Section with Links */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">View</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/portfolio" className="hover:text-gray-700 transition-colors">Our Work</a>
              </h4>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">Explore</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/about" className="hover:text-gray-700 transition-colors">About Us</a>
              </h4>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">Let's</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/contact" className="hover:text-gray-700 transition-colors">Get in Touch</a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
