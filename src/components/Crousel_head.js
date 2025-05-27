
import React from 'react';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import { motion } from "framer-motion";


const Crousel_head = () => {


  const videos = [
    "https://res.cloudinary.com/dof7yblai/video/upload/v1744044442/boatparty_s7ri8o.mp4",
    "https://res.cloudinary.com/dof7yblai/video/upload/v1744090163/diving_d295is.mp4",
    "https://res.cloudinary.com/dof7yblai/video/upload/v1744090499/jetskii_lkxi0q.mp4"
  ];

  const dest_images = [
    "https://assets.serenity.co.uk/37000-37999/37614/720x480.jpg",
    "https://assets.serenity.co.uk/37000-37999/37602/720x480.jpg",
    "https://assets.serenity.co.uk/42000-42999/42354/720x480.jpg",
    "https://assets.serenity.co.uk/58000-58999/58779/720x480.jpg",
    "https://assets.serenity.co.uk/38000-38999/38380/720x480.jpg",
  ];

  const settings = {
    items: 1,                   // Show 1 slide at a time
    autoplay: true,              // Enable autoplay (auto-slide)
    autoplayButtonOutput: false, // Hide the autoplay control button
    autoplayTimeout: 4000,       // Autoplay every 3 seconds
    controls: false,             // Disable previous/next navigation buttons
    nav: false,
    rewind: true,
    speed: 500,
  };

  return (
    <div className="crousel_head">
      <TinySlider settings={settings}>
        {videos.map((img, index) => (
          <div className="crousel-container" key={index}>
            <video className='carousel-image' autoPlay muted loop playsInline>
              <source src={img} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </TinySlider>
      <div className='text'>
        <motion.h1 initial={{ opacity: 1, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}>Unlock Your Goa Dreams With Us!</motion.h1>
        <motion.p initial={{ opacity: 1, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1 }}
        >Discover the most adventure's nature</motion.p>
        <motion.button initial={{ opacity: 1, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }} className='get-st'
        >Get Started</motion.button>
      </div>

      <div className='dest-cards-container'>
        <ul>
          {
            dest_images.map((img, index) => (
              <li ><motion.img initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 0.9 }}
                transition={{ ease: "easeIn" }} src={img} className="dest-cards" alt={`Slide ${index + 1}`} /> </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Crousel_head;
