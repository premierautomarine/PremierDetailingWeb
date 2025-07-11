import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Investment from './pages/Investment'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import BlogPost2025WeddingTrends from './pages/BlogPost2025WeddingTrends'
import BlogPostFloridaBotanicalGarden from './pages/BlogPostFloridaBotanicalGarden'
import BlogPostCourthouseGuide from './pages/BlogPostCourthouseGuide'
import BlogPostElopementPlanning from './pages/BlogPostElopementPlanning'
import BlogPostRehearsalDinner from './pages/BlogPostRehearsalDinner'
import BlogPostElopeTampa from './pages/BlogPostElopeTampa'
import BlogPostTampaMicroWedding from './pages/BlogPostTampaMicroWedding'
import BlogPostEditorialTampa from './pages/BlogPostEditorialTampa'
import BlogPostAnniversaryPhotoshoot from './pages/BlogPostAnniversaryPhotoshoot'
import BlogPostFortDesotoElopement from './pages/BlogPostFortDesotoElopement'
import BlogPostIcePlantVisit from './pages/BlogPostIcePlantVisit'
import BlogPostEngagementPhotoshoot from './pages/BlogPostEngagementPhotoshoot'


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/2025-wedding-trends" element={<BlogPost2025WeddingTrends />} />
          <Route path="/blog/florida-botanical-gardens-wedding-photos-cost" element={<BlogPostFloridaBotanicalGarden />} />
          <Route path="/blog/tampa-courthouse-wedding-guide" element={<BlogPostCourthouseGuide />} />
          <Route path="/blog/all-inclusive-affordable-elopement-planning" element={<BlogPostElopementPlanning />} />
          <Route path="/blog/rehearsal-dinner-venues-tampa-fl" element={<BlogPostRehearsalDinner />} />
          <Route path="/blog/elope-in-tampa-fl" element={<BlogPostElopeTampa />} />
          <Route path="/blog/local-insider-tips-budget-friendly-tampa-micro-wedding" element={<BlogPostTampaMicroWedding />} />
          <Route path="/blog/editorial-vibes-in-tampa" element={<BlogPostEditorialTampa />} />
          <Route path="/blog/anniversary-photoshoot-unforgettable" element={<BlogPostAnniversaryPhotoshoot />} />
          <Route path="/blog/escape-convention-fort-desoto-elopement" element={<BlogPostFortDesotoElopement />} />
          <Route path="/blog/break-tradition-ice-plant-restaurant" element={<BlogPostIcePlantVisit />} />
          <Route path="/blog/personalize-your-engagement-photoshoot" element={<BlogPostEngagementPhotoshoot />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
