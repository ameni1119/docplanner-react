import React from "react";

function Grandcarts(props) {
  const grandcartsList = props.grandcartsList;
  return (
    <div className="Box1">
      {grandcartsList.map(el => (
        <div
          className={el.select ? "box boxwithselect" : "box boxithoutselect"}
        >
          <h6 className="titre1">{el.titre1}</h6>
          <h2>{el.titre2}</h2>
          <div className="selectimage">
            {el.select && (
              <select className="select">
                {el.select.map(country => (
                  <option>{country}</option>
                ))}
              </select>
            )}
            <img className="imagebox" src={el.image} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grandcarts;
