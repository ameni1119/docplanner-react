import React from "react";

function Partenaires(props) {
  const partenairesList = props.partenairesList;
  return (
    <div className="BOX2">
      <h3 className="titre"> We are a gkobel company with local culture</h3>
      <div className="SVG">{partenairesList.map(el => el)}</div>
    </div>
  );
}

export default Partenaires;
