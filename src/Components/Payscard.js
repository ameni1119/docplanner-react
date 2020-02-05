import React from "react";

function Payscard(props) {
  const cartsList = props.cartsList;
  let cartsHtml = [];
  //    <div>{ for (let i = 0; i < cartsList.length ; i++)  {
  //       cartsHtml.push(
  //         <div  key={i}  className="bloc">
  //           <div className="item">
  //             <img src={cartsList[i].image} />
  //             <div className="item-1">
  //               <p>{cartsList[i].titre}</p>
  //               <a href="#" className="button">SEE OPENING</a>
  //             </div>
  //           </div>
  //         </div>

  //       )
  //     }}</div>

  //     return cartsHtml
  return (
    <div style={{ display: "flex", margin: " 3% 8%", flexWrap: "wrap",justifyContent:"space-between" }}>
      {cartsList.map(el => (
        <div className="bloc">
          <div className="item">
            <img src={el.image} />
            <div className="item-1">
              <p>{el.titre}</p>
              <a href="#" className="button">
                SEE OPENING
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Payscard;
