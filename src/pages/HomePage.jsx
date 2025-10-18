import React from 'react'
import NewHero from '../components/NewHero'
import About from '../components/About'
import Menu from '../components/Menu'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <div>
      <NewHero />
      <About />
      <Menu />
      <Contact />
    </div>
  )
}

export default HomePage
