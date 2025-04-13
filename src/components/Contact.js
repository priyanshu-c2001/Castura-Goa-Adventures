import { ImPhone,ImFacebook,ImInstagram,ImLocation } from 'react-icons/im';
import { BsEnvelopeFill } from 'react-icons/bs';
import {  BsInstagram } from 'react-icons/bs';
import {easeInOut, motion} from "framer-motion";
const Contact = ()=>{
    return(
        <div className="Contact-container">
            <motion.div initial={{scale:0,opacity:0}}
            animate={{ scale:1,opacity:1 }} 
            transition={{ duration: 1,  ease: "easeInOut" }} className="for-grid">
            <motion.div 
            initial={{scale:0,opacity:0}}
            animate={{ scale:1,opacity:1 ,transition:{delay:0.5,duration: 1,  ease: "easeInOut" }}} 
            // whileHover={{scale:1.1, transition:{duration:0.5,delay:0}}}            
             className="aside">
              <div className="aside-img">
                <img src="https://www.shrihariomyatra.in/assets/support2-BtxTZRhA.png" />
              </div>
              <h2>Contact Us</h2>
             <p>We Are Here For You-Reach Out To Our Support Team Anytime For Assistance!</p> 
             <ul className='contact-details'>
               <li>
                <ImPhone className='phone-ico'/>
                <h5>8953594833 , 7275742197</h5>
               </li>
               <li>
                < BsEnvelopeFill className='mail-ico'/>
                <h5>aryan.official.00x@gmail.com</h5>
               </li>
               <li>
                <ImLocation className='location-ico'/>
                <a href="https://www.google.com/maps?q=29.9470545,78.1570162" target="_blank" rel="noopener noreferrer" className='tag-map'>Click Here!</a>
               </li>
             </ul>

             <ul className='social'>
              <li><a href="https://www.instagram.com/__a.r.yan__0_0/profilecard/?igsh=cW5zdDRvNTBiN3hy"><ImFacebook className='facebook-ico'/></a></li>
              <li><a href="https://www.instagram.com/__a.r.yan__0_0/profilecard/?igsh=cW5zdDRvNTBiN3hy" target="_blank" rel="noopener noreferrer"><BsInstagram className='instagram-ico'/></a></li>
             </ul>
             
             </motion.div>

            <div className="form-cont">
        <form>
        <input for="f-name" className="f-name" placeholder="First name"></input>
        <input for="l-name" className="l-name" placeholder="Last name"></input>
        <input for="Mail" className="Email" placeholder="Your email address"></input>
        <textarea placeholder="Message"></textarea>
        <button type="submit"  onClick={(e)=>{
          alert('The form is submitted')
        }}>Submit</button>
        </form>
            </div>
            </motion.div>
        </div>
    )
}
                           
export default Contact;