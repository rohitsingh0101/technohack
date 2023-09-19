import React  from "react";
import './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
    return (
        <div className="Programs " id="Programs">
            {/*  */}
            <div className="programs-header">
             <span className="stroke-text">Explore our </span>
             <span>programs</span>
             <span className="stroke-text">to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((program) => (
               <div className="categories">
                {program.image} 
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now"> <span>join now </span><img src="{RightArrow}"alt=""/></div>

                        
                      
                    
                
            </div>
 ) ) }
           
          </div>
         
                   
        </div>
    );
}
export default Programs