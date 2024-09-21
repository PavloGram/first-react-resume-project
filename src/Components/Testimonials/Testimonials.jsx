import React, { useState } from "react";
import nextIcon from "../../images/next-icon.png";
import prevIcon from "../../images/back-icon.png";

import { comments } from "../../data/data";

function Testimonials() {
  const [tx, setTx] = useState(0);

  function handleChangeComment(btn) {
    if (btn === "prev") {
      return setTx(tx - 1);
    } else {
      setTx(tx + 1);
    }
  }

  return (
    <div className="testimonials">
      <button
        type="button"
        className={`prev-icon ${tx === 0 && "disabled"}`}
        onClick={() => handleChangeComment("prev")}
      >
        <img src={prevIcon} alt="" style={{ width: "25px" }} />
      </button>

      <button
        type="button"
        className={`next-icon ${tx === comments.length - 2 && "disabled"}`}
        onClick={() => handleChangeComment("next")}
      >
        <img src={nextIcon} alt="" style={{ width: "25px" }} />
      </button>

      <div className="slider">
        <ul
          className="slider-list"
          style={{ transform: `translateX(-${tx * 25}%)` }}
        >
          {comments.map((e, i) => {
            return (
              <li className="slider-item" key={e.id}>
                <div className="slide">
                  <div className="user-info">
                    <img src={e.photo} alt={e.alt} className="slide-img" />
                    <div>
                      <h3 className="slide-title">{e.name}</h3>
                      <p>{e.city}</p>
                    </div>
                  </div>
                  <p>{e.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
