import React from "react";
import program_1 from "../../images/program-1.png";
import program_2 from "../../images/program-2.png";
import program_3 from "../../images/program-3.png";
import programIcon_1 from "../../images/program-icon-1.png";
import programIcon_2 from "../../images/program-icon-2.png";
import programIcon_3 from "../../images/program-icon-3.png";

function Programs() {
  return (
    <div className="programs">
      <div className="program">
        {" "}
        <img className="program-img" src={program_1} alt="" />
        <div className="caption">
            <img src={programIcon_1} alt=""/>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        {" "}
        <img className="program-img" src={program_2} alt="" />{" "}
      </div>
      <div className="program">
        {" "}
        <img className="program-img" src={program_3} alt="" />{" "}
      </div>
    </div>
  );
}

export default Programs;
