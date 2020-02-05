import React from "react";

function Platform(props) {
  let platformList = props.platformList;
  return (
    <div className="boxes">
      {" "}
      {platformList.map(el => (
        <div className="minicarts">
          <img src={el.icon} />
          <h4 className="nostatictitle">{el.titre}</h4>
          <p className="nostaticparag">{el.paragraphe}</p>
        </div>
      ))}
    </div>
  );
}
export default Platform;
