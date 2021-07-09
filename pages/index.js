import { useState } from 'react'
import {Link} from 'react-scroll'
import Hero from "../components/Hero"
import Slider from "../components/Slider"
import Paroin from "../components/Paroin"
import Register from "../components/Register"
import Footer from "../components/Footer"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  function openMenu() {
    menuOpen(true)
  }

  return (
    <>
      <div className="font-basic">
        {/* navbar */}
        <div className="z-50 flex w-full justify-between bg-redTheme px-10 h-auto py-4 fixed">
          <div className="">
            <img src="Logo.svg" alt="" />
          </div>
          <div className=" md:hidden">
            <a onClick={() => {setMenuOpen(!menuOpen)}}>
              <img className="align-right" src="menu.svg" alt="" />
            </a>
          </div>
          <div className="hidden md:flex">
              <ul className="flex">
                <Link to="home" spy={true} smooth={true}>
                  <li className="text-center text-white text-md font-bold px-12 cursor-pointer">Home</li>
                </Link>
                <Link to="product" spy={true} smooth={true}>
                  <li className="text-center text-white text-md font-bold px-12 cursor-pointer">Product</li>
                </Link>
                <Link to="service" spy={true} smooth={true}>
                  <li className="text-center text-white text-md font-bold px-12 cursor-pointer">Layanan</li>
                </Link>
                <Link to="registerPage" spy={true} smooth={true}>
                  <li className="text-center text-white text-md font-bold px-12 cursor-pointer">Beli Paket</li>
                </Link>

              </ul>
          </div>
        </div>
        {menuOpen && 
        <div className="z-50 bg-redTheme fixed mt-10 w-full ">
          <ul className="">
          <Link to="home" spy={true} smooth={true}>
            <li className="text-center font-bold py-2 text-white text-md" onClick={() => {setMenuOpen(!menuOpen)}}>Home</li>
          </Link>
          <Link to="product" spy={true} smooth={true}>
            <li className="text-center font-bold py-2 text-white text-md" onClick={() => {setMenuOpen(!menuOpen)}}>Product</li>
          </Link>
          <Link to="service" spy={true} smooth={true}>
            <li className="text-center font-bold py-2 text-white text-md" onClick={() => {setMenuOpen(!menuOpen)}}>Layanan</li>
          </Link>
          <Link to="registerPage" spy={true} smooth={true}>
            <li className="text-center font-bold py-2 pb-8 text-white text-md" onClick={() => {setMenuOpen(!menuOpen)}}>Beli Paket</li>
          </Link>
          </ul>
        </div> }
        


        <div id="home" className="hero flex-row px-10 pt-20 md:pt-40 md:px-24 md:py-20">
          <Hero />
        </div>

        <div id="product" className="bg-redTheme h-auto py-8 md:py-14">
          <div className="grid justify-items-center">
            <p className="w-full text-white text-2xl font-bold text-center md:text-3xl">Product</p>
            <div className="border-b border-white w-12 pt-2 md:pt4"></div>
          </div>
          <Slider />
        </div>

        <div id="service" className="py-8 px-4 md:px-24 md:py-20">
          <div className="grid justify-items-center">
            <p className="w-full text-redTheme text-2xl font-bold text-center md:text-3xl">Mengapa Paroin ?</p>
            <div className="border-b border-redTheme w-12 pt-2"></div>
          </div>
          <div className="">
            <Paroin/>
          </div>
        </div>

        <div className="py-8 px-10 bg-backgroundForm bg-cover">
          <Register />
        </div>
        
        <div className="bg-redTheme h-auto py-8 px-10">
          <Footer />
        </div>
      </div>
    </>
  )
}
