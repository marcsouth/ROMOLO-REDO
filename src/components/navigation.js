import { NavLink, Link } from 'react-router-dom'
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { useState } from 'react';

export default function Navigation() {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  document.body.style.overflow = showMenu ? "hidden" : "auto";

  return (

    <>
    <nav>
    <Link to="/"><h1>ROMOLO DEL DEO</h1></Link>

    <div  className='navigationlinks'>
      <ul>
        <li>
          <NavLink to="/artworks">ARTWORKS</NavLink>
        </li>
        <li>
          <NavLink to="/recent">RECENT</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/press">PRESS</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
     </ul>
    <div className="navsocials">
        <a href="https://www.instagram.com/romolodeldeo/">
            <AiOutlineInstagram  size={20}/>
        </a>

        <a href="https://twitter.com/scultore">
             <AiOutlineTwitter size={20} />
        </a>

        <a href="https://www.facebook.com/romolodeldeostudio/">
             <AiFillFacebook size={20} />
        </a>
    </div>
    </div>

              <div className={`hamburger ${showMenu ? 'open' : ''}`} onClick={handleMenuClick} >
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
              </div>

    </nav>


    <div className={`${showMenu ? 'mobileview' : 'mobileviewnone'}`}>
    <ul>
        <li>
          <NavLink to="/artworks">ARTWORKS</NavLink>
        </li>
        <li>
          <NavLink to="/recent">RECENT</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
        <li>
          <NavLink to="/press">PRESS</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
     </ul>


     <div className="mobilesocials">
        <a href="https://www.instagram.com/romolodeldeo/">
            <AiOutlineInstagram  size={30}/>
        </a>

        <a href="https://twitter.com/scultore">
             <AiOutlineTwitter size={30} />
        </a>

        <a href="https://www.facebook.com/romolodeldeostudio/">
             <AiFillFacebook size={30} />
        </a>
    </div>

</div>


</>
  )
}

