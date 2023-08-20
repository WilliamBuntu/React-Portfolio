import React , {useEffect, useState} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import { AppWrapp} from '../../wrapper'
import { motion } from 'framer-motion';
import { images } from '../../constants'
import './Work.scss'




const Work = () => {

  const [activeFilter, setActiveFilter] = useState ('All')
  const [animateCard, setAnimateCard] = useState ({y:0 , opacity : 1})

  const handleWorkFilter = (item) => {}
  return (
    <>
             <h2 className='head-text'>

   <span> My Creative</span> <br/> Portfolio<span> Section</span></h2>

   <div className='app__work-filter'>
   {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) =>(

       <div
       key={index}
       onClick={() => handleWorkFilter(item)}
       className={`app__work-filter-item app__flex p-text
         ${activeFilter === item ? 'item-active' : ''}
       `}


       >
       {item}
       </div>
   ) )}
    </div>

    <motion.div
      animate= {animateCard}
      transition = {{ duration: 0.5, delayChildren: 0.5 }}
      className='app__work-portfolio '

     >
         <h2>molt</h2>
         
    </motion.div>

    </>
  )
}

export default Work

