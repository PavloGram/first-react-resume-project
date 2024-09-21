import React from "react";
import gallery1 from "../../images/gallery-1.jpg";
import gallery2 from "../../images/gallery-2.jpg";
import gallery3 from "../../images/gallery-3.jpg";
import gallery4 from "../../images/gallery-4.jpg";
import whiteArrow from "../../images/white-arrow.png";

function Campus() {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery1} alt="" className="gallery-img" />
        <img src={gallery2} alt="" className="gallery-img" />
        <img src={gallery3} alt="" className="gallery-img" />
        <img src={gallery4} alt="" className="gallery-img" />
      </div>
      <button type="button" className="campus-btn dark-btn">
        See more here <img src={whiteArrow} alt="" className="btn-img"/>
      </button>
    </div>
  );
}

export default Campus;
