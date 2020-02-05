import React from "react";

function Paragraphe(props) {
  return (
    <div className="paragraphe"
      style={{
        display: "flex",
        margin: " 2% 5%",
        justifyContent: "space-between"
      }}
    >
      {props.children.map(el => (
        <p>{el.item}</p>
      ))}
    </div>
  );
}
export default Paragraphe;
