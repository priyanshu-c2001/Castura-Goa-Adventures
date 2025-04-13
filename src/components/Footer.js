import {motion} from "framer-motion";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <div className="foot-container">
       
        <div className="main-cont">
            <div className="first-col">
               <motion.h3 initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>Castura Tours and Travels</motion.h3>
               <motion.p initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 0.5}}>Explore the Goa with us—your dream destination is just a click away!</motion.p>
            </div>
            <div className="second-col">
               <motion.h3 initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>Permalinks</motion.h3>
               <ul>
               <Link to="/"><motion.li initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>Home</motion.li></Link>
               <Link to="/components/Contact"><motion.li initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>Contact us</motion.li></Link>
               </ul>
                </div>
                <div className="third-col">
                <ul>
               <Link to="/"><motion.li initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>Privacy Policy</motion.li></Link>
               <Link to="/components/Contact"><motion.li initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>Terms and Condition</motion.li></Link>
               <Link to=""><motion.li initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>Refund Policy</motion.li></Link>
               </ul>
                </div>
                <div className="fourth-col">
                   <motion.h3 initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>Contact Us</motion.h3>
                   <ul>
                    <motion.li initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>+91XXXXXXXXXX</motion.li>
                    <motion.li initial={{opacity:0, y:100}}
                          whileInView={{opacity:1, y:0}}
                          transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                          viewport={{ once:false, amount: 1}}>casturatours@gmail.com</motion.li>
                   </ul>

                   <small>Developed with 🖤 By Priyanshu</small>
                </div>
              
            </div>
            <div className="border-cont">
                <motion.small  iniatial={{opacity:0,y:-100}}
                              whileInView={{opacity:1,y:0}}
                              transition={{ type:"tween" , duration:1, ease:"easeInOut"}}
                              viewport={{ once:false, amount: 1}}>&copy; 2024 Castura Tours and Travels. All Rights Reserved.</motion.small>
            </div>
        </div>
    )
}

export default Footer;