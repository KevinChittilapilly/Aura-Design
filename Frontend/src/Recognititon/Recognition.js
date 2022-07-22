import React, { useState } from "react";
import "./Recognition.css";
import img1 from "../Assets/img1.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { awardDetails } from "../util/utils";

const Recognition = () => {
  const [activeIndex,setActiveIndex] = useState(0);
  const displayAwardDetails = (award) => {
    return (
      <div>
        <div
          className="cards"
          onMouseOver={() => {
            document
              .getElementById("poped-out-div1")
              .setAttribute("style", "display:block");
          }}
          onMouseLeave={() => {
            document
              .getElementById("poped-out-div1")
              .setAttribute("style", "display:none");
              setActiveIndex(0)
          }}
        >
          {award.year}
        </div>
        <div
          className="poped-out-div"
          onMouseOver={() => {
            document
              .getElementById("poped-out-div1")
              .setAttribute("style", "display:block");
          }}
          onMouseLeave={() => {
            document
              .getElementById("poped-out-div1")
              .setAttribute("style", "display:none");
              setActiveIndex(0)
          }}
          id="poped-out-div1"
        >

         {award.details?.map((item,ind)=>{
          if(ind===activeIndex) return (
            <>
            <div className="img-div">
            <ChevronLeftIcon
              onClick={() => {
                setActiveIndex(activeIndex-1)
              }}
              className="chevron-left"
              style={activeIndex==0?{pointerEvents:'none',opacity:'0.5'}:null}
            />
            <img src={item.imgSrc} style={{ height: "200px", width: "100%" }} />
            <ChevronRightIcon
            className="chevron-right"
            style={activeIndex==award.details.length-1?{pointerEvents:'none',opacity:'0.5'}:null}
            onClick={() => {
              setActiveIndex(activeIndex+1)
            }}
          />
          </div>
          <div className="desp">
            {item.desp}
          </div>
          </>
          )
         })}
        </div>
      </div>
    )
  }
  return (
    <div className="recognition">
      {awardDetails.map((item)=>{
        return displayAwardDetails(item);
      })}
    </div>
  );
};
export default Recognition;
