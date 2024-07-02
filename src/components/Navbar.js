import React, { useState } from 'react'
import '../style/nav.css'
import data from '../data/data.json'
import { Link } from 'react-router-dom'
import NavCard from '../components/NavCard.js'

const icon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>

const Navbar = ({ miphones, redmiphones, tv, laptop, lifeStyle, home, audio, accessories }) => {

  const [MIPHONES, setMIPHONES] = useState(false)
  const [REDMIPHONES, setREDMIPHONES] = useState(false)
  const [REDMIPHONE, setREDMIPHONE] = useState(false)
  const [TV, setTV] = useState(false)
  const [LAPTOP, setLAPTOP] = useState(false)
  const [LIFESTYLE, setLIFESTYLE] = useState(false)
  const [HOME, setHOME] = useState(false)
  const [AUDIO, setAUDIO] = useState(false)
  const [ACCESSORIES, setACCESSORIES] = useState(false)


  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (cardName) => {
    if (activeCard === cardName) {
      setActiveCard(null);
    } else {
      setActiveCard(cardName);
    }
  };

  return (
    <>
      <div className='nav'>
        <div className="logo">
          <Link to='/logo'><img id="logoimage" src={data.logo} alt="" /></Link>
        </div>
        <Link to="/miphones" className="navlinks" onClick={() => toggleCard('MIPHONES')}>Mi Phones</Link>
        <Link to="/redmiphones" className="navlinks" onClick={() => toggleCard('REDMIPHONES')}>Redmi Phones</Link>
        <Link to="/tv" className="navlinks" onClick={() => toggleCard('TV')}>TV</Link>
        <Link to="/laptop" className="navlinks" onClick={() => toggleCard('LAPTOP')} >Laptop</Link>
        <Link to="/lifestyle" className="navlinks" onClick={() => toggleCard('LIFESTYLE')} >Fitness & Lifestyle</Link>
        <Link to="/home" className="navlinks" onClick={() => toggleCard('HOME')} >Home</Link>
        <Link to="/radio" className="navlinks" onClick={() => toggleCard('AUDIO')} >Radio</Link>
        <Link to="/accessories" className="navlinks" onClick={() => toggleCard('ACCESSORIES')} >Accessories</Link>

        <div className="search">
          <input type="text" name="" id="ttx" placeholder='Search Products' />
          <div className="icon">{icon}</div>
        </div>
      </div>

      <div className="nav_phones">
        {activeCard === 'MIPHONES' && <NavCard data={miphones} />}
        {activeCard === 'REDMIPHONES' && <NavCard data={redmiphones} />}
        {activeCard === 'TV' && <NavCard data={tv} />}
        {activeCard === 'LAPTOP' && <NavCard data={laptop} />}
        {activeCard === 'LIFESTYLE' && <NavCard data={lifeStyle} />}
        {activeCard === 'HOME' && <NavCard data={home} />}
        {activeCard === 'AUDIO' && <NavCard data={audio} />}
        {activeCard === 'ACCESSORIES' && <NavCard data={accessories} />}
       
      </div>



    </>
  )
}

export default Navbar
