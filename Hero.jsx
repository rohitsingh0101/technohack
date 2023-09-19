import React from "react";
import './Hero.css';
import Header from '../Header/Headers';
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";


const Hero = () => {
    return (
        <div className="hero">
         
         <div className="left-h">
          <Header/>
          {/*  the best ad */}
            <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in  the town</span>
            </div>
          {/* hero heading */}
          <div className="hero-text">
            <div>
                <span className="stroke-text">Shape </span>
                <span>Your </span>
            </div>
            <div>
                <span>Ideal body</span></div>
          </div>
          <div >
           <span> IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YUR LIFE TO FULLEST</span>
          </div>
        
           {/* figure */}
          <div className="figures">
            <div>
                <span>+140</span>
                <span>expert coaches</span>
            </div>
            <div>
                <span>+978 </span>
                <span>Members joined</span>
            </div>
            <div>
                <span>+50</span>
                <span>fitness programs</span>
            </div>
         </div>
         {/* hero button */}
         <div className="hero-buttons">
            <button className="btn">Get started</button>
            <button className="btn">learn more</button>
         </div>
    </div>
        
         
         <div className="right-h">
            <button className="btn">join now</button>




            <div className="heart-rating">
                <img src={Heart} alt=""></img>
                <span>Heart rate</span>
                <span> 116 bpm</span>
            </div>
            {/* hero images */}
            <img src={hero_image} alt="" className="hero_images" />
            <img src={hero_image_back} alt="" className="hero_image-back"/>
            {/* calories */}
            <div className="calories">
                <img src={Calories} alt="" />
                <div>
                <span>Calories</span><span>220 kcal</span>
              </div>
            </div>
        </div>
    </div>
    )
}
export default Hero