import React from "react";
import program_1 from "../../images/program-1.jpg";
import program_2 from "../../images/program-2.jpg";
import program_3 from "../../images/program-3.jpg";
import programIcon_1 from "../../images/program-icon-1.png";
import programIcon_2 from "../../images/program-icon-2.png";
import programIcon_3 from "../../images/program-icon-3.png";
import Title from "../Title/Title";

function Programs() {
  return (
    <section> 
    <Title title={"Our PROGRAM"} subTitle={"What we ofer"} />
    <div className="programs">
       
      <div className="program">
        {" "}
        <img className="program-img" src={program_1} alt="" />
        <div className="caption">
            <img className="caption-img" src={programIcon_1} alt=""/>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        
        <img className="program-img" src={program_2} alt="" />
        <div className="caption">
            <img className="caption-img" src={programIcon_2} alt=""/>
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        
        <img className="program-img" src={program_3} alt="" />
        <div className="caption">
            <img className="caption-img" src={programIcon_3} alt=""/>
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
    </section>
    
  );
}

export default Programs;
