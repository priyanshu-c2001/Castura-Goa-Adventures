import { motion } from "framer-motion";
import Crousel_head from "./Crousel_head";
import About from "url:../assets/about.jpg";
import Collage from "url:../assets/collage.png";


const Body = () => {
    return (
        <div className="body-container">

            <div className="crousel-container">
                <Crousel_head />
            </div>

            {/* Marquee element */}
            <div className="go-through">
                <marquee direction=""><h3>Bookings Are Open Hurry Now !</h3></marquee>
            </div>

            {/* speciality container starts */}
            <div className="spe-container">
                <motion.div className="speciality"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <motion.div className="special"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 1 }}
                    >


                        <div className="same">
                            <h2>24/7</h2>
                            <pre>{`customer
support`}</pre>
                        </div>

                        <div className="same">
                            <h2>200+</h2>
                            <pre>{`Fine 
Destinations`}</pre>
                        </div>


                        <div className="same">
                            <h2>1K+</h2>
                            <pre>{`Customer 
reviews`}</pre>
                        </div>

                        <div className="same">
                            <h2>4.5</h2>
                            <pre>{`overall 
rating`}</pre>
                        </div>


                    </motion.div>
                </motion.div>
            </div>
            {/* seciality conatiner ends here */}

            {/* packages starts here */}

            <div className="package-container">
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 1 }}
                    className="Explore">
                    <h5>EXPLORE NOW</h5>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 1 }}
                    className="Cat">
                    <h1>Our Packages Categories</h1>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 1 }}
                    className="Cat">
                    <p>Fill in the below fields to find the best spots for your next adventure</p>
                </motion.div>

                <div className="img-cards" >
                    <div className="count">
                        <motion.div className="img-same" initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.5 }}>
                            <motion.img src="https://www.nativeplanet.com/img/2023/07/waterfallgoa-1689596418.jpg" />
                        </motion.div>
                        <motion.div className="img-same" initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.5 }}>
                            <motion.img src="https://i2.wp.com/india-itinerary.com/wp-content/uploads/2021/08/goa.jpg?fit=1400%2C700" />
                        </motion.div>
                        <motion.div className="img-same" initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.5 }}>
                            <motion.img src="https://assets.serenity.co.uk/37000-37999/37636/720x480.jpg" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* why should conatiner starts from here */}

            <div className="why-should">
                <div className="lft-container">
                    <motion.h1 initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 1 }}>
                        Why Should You Choose US
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 1 }}>Choose us for unforgettable adventures, personalized experiences, and seamless travel planning to your dream destinations!</motion.p>
                    <div className="should-details">
                        <motion.div initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 1 }} className="inner-flex">
                            <div className="for-img">
                                <img src="https://www.shrihariomyatra.in/assets/saftey-CbYFUizn.png" />
                            </div>
                            <div className="for-text">
                                <h4>Safety and Support</h4>
                                <p>"Your safety and support are our top priorities, ensuring worry-free travel every step of the way."</p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 1 }} className="inner-flex">
                            <div className="for-img">
                                <img src="https://www.shrihariomyatra.in/assets/destination-ClfCD-vR.png" />
                            </div>
                            <div className="for-text">
                                <h4>Diverse Range of Destinations</h4>
                                <p>"Discover a diverse range of breathtaking destinations, from serene beaches to adventurous mountain escapes, tailored to fulfill every traveler's dream."</p>
                            </div>
                        </motion.div>


                        <motion.div initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 1 }} className="inner-flex">
                            <div className="for-img">
                                <img src="https://www.shrihariomyatra.in/assets/support-io6K_mTv.png" />
                            </div>
                            <div className="for-text">
                                <h4>24/7 Customer Support</h4>
                                <p>"Our dedicated 24/7 Customer Support ensures you're never alone on your travel journey—help is always just a call away!"</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className="rgt-container">
                    <motion.img initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "tween", duration: 1, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.5 }} src={Collage} />
                </div>
            </div>
            {/* why should ends here */}


            {/* questioning section starts here */}

            <div className="que-container">
                <div className="lft-que">
                    <motion.img initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.4 }} src="https://www.shrihariomyatra.in/assets/question-DjoT3DPn.png" />
                </div>

                <div className="rgt-que">
                    <motion.h2 initial={{ opacit: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
                        viewport={{ once: false, amount: 1 }} >Do You Have Any Specific Question ?</motion.h2>
                    <motion.p initial={{ opacit: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
                        viewport={{ once: false, amount: 1 }} >Got a Question? We're Here to Help !</motion.p>


                    <form>
                        <motion.input initial={{ opacit: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
                            viewport={{ once: false, amount: 1 }} for="email" placeholder="enter email" className="que-mail"></motion.input>
                        <motion.textarea initial={{ opacit: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.5 }} placeholder="enter your question here" className="que-textarea"></motion.textarea>
                        <motion.button initial={{ opacit: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.5 }} className="btn-que" onClick={(e) => {
                                e.preventDefault();
                                alert("Your question has been submitted successfully");
                            }}>Submit</motion.button>
                    </form>


                </div>
            </div>

            {/* questioning ends here */}

            <div className="about-container">
                <div className="lft-about">
                    <motion.img initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }} src={About}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }} />

                </div>
                <div className="rgt-about">
                    <motion.h2 initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }} src={About}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}>About Us !</motion.h2>
                    <motion.p initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }} src={About}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.7, type: "tween", ease: "easeInOut" }}>"Welcome to Castura Tours and Travels, your ultimate gateway to adventure in Goa! Since our inception, we have been dedicated to crafting thrilling and unforgettable travel experiences. Whether you're seeking the rush of water sports or the joy of exploring Goa’s hidden gems, our expert team ensures a seamless and exhilarating journey.

                        From jet skiing, parasailing, and scuba diving to guided tours of Goa’s pristine beaches, vibrant nightlife, and rich heritage, we specialize in delivering personalized experiences tailored to your sense of adventure. With top-notch safety measures, premium services, and hassle-free bookings, Castura Tours and Travels is your trusted partner in making the most of your Goan escapade.

                        Let us take you on an unforgettable adventure where every wave, every sunset, and every moment becomes a cherished memory!"</motion.p>
                </div>
            </div>



        </div>
    );
}


export default Body;