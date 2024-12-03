// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar.jsx';
import Story from './components/Story.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Futures from './components/Futures.jsx';
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';


const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <About/>
            <Futures/>
            <Story/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
