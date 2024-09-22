import React from "react";

function Title({ title, subTitle }) {
  return (
    <div className="title">
      <h2 style={{ textTransform: "capitalize" }} className="title-title">
        {subTitle}
      </h2>
      <p>{title}</p>
    </div>
  );
}

export default Title;
