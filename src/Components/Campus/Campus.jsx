import React from "react";
import gallery1 from "../../images/gallery-1.jpg";
import gallery2 from "../../images/gallery-2.jpg";
import gallery3 from "../../images/gallery-3.jpg";
import gallery4 from "../../images/gallery-4.jpg";
import whiteArrow from "../../images/white-arrow.png";
import Title from "../Title/Title";

function Campus() {
  return (
    <section>
      <Title title={"Gallery"} subTitle={"Camnpus photos"} />
      <div className="campus">
        <ul className="gallery">
          <li className="gallery-item">
            <img src={gallery1} alt="three young men work at laptops" className="gallery-img" />
          </li>
          <li className="gallery-item">
            <img src={gallery2} alt="two girls work at the table" className="gallery-img" />
          </li>
          <li className="gallery-item">
            {" "}
            <img src={gallery3} alt="three female students stand holding diplomas in their hands" className="gallery-img" />
          </li>
          <li className="gallery-item">
            <img src={gallery4} alt="a girl in white clothes holds a diploma" className="gallery-img" />
          </li>
        </ul>
        <button type="button" className="campus-btn dark-btn">
          See more here <img src={whiteArrow} alt="" className="btn-img" />
        </button>
      </div>
    </section>
  );
}

export default Campus;
