import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Hero from "../components/Hero"
import About from '../components/About'
import MarqueeText from '../components/MarqueeText'
import AnimatedPage from '../components/animations/AnimatedPage'

const Home = () => {
  return (
    <div>
      <AnimatedPage>
        <Announcement />
        <Navbar />
        <Hero />
        <About />
        <Categories />
        <MarqueeText MarqueeText="Newest Products"/>
        <Products />
        <Newsletter />
        <Footer />
      </AnimatedPage>
    </div>
  )
}

export default Home
