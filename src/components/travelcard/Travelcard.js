import React from "react";
import "./Travelcard.css";
import travelcard from "../../images/travelcard2.png";

export default function Travelcard() {
  return (
    <div className="travelcard-wrapper" id="travelcard">
    <div style={{paddingLeft:"50px"}}><h2 style={{fontSize:"3.5rem" ,color:"white"}}><div style={{display:"flex"}}><div style={{color:"#FFBA00"}}>Travel</div><div style={{color:"#000000"}}>Card</div></div></h2></div>

      <div className="travelcard-inner-wrapper">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={travelcard} className="travelcard-img" alt="travelcard image"></img>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{width:"90%",height:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"10px"}}>
            <button>Points earned</button>
            <button>Distance covered</button>
          </div>
        </div>
      </div>
    </div>
  );
}
