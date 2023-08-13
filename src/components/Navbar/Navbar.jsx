import React from 'react'
import './Navbar.scss'
import { images } from '../../constants'


const Navbar = () => {
  return (
      <nav>


                  <div>
                       <img  src={images.logo} alt='logo'/>

                        <ul>
                        {['home', 'about', 'contact', 'work', 'skills, '].map( (item) => (
                           <li key={`link-${item}`}>
                            <div>

                                <a href={`#${item}`}> {item} </a>
                            </div>

                           </li>
                        )) }
                        </ul>
                </div>


      </nav>

  )
}

export default Navbar

