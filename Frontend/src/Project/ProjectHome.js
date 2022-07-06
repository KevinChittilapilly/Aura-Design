import React from "react";
import img1 from "../Assets/img1.jpg";
import './Project.css';

const ProjectHome = () => {
  return (
    <div className="outer-div-proj">
      <div className="img-grid">
        <div><img src={img1} alt="example" onMouseOver={()=>{document.getElementById('poped-out-div1').setAttribute('style','display:block')}} className="img-style"/>
          <div className="poped-out-div" id='poped-out-div1' >

          </div>
        </div>
        <div><img src={img1} alt="example" className="img-style"/>
          <div className="poped-out-div" >

          </div>
        </div>
        <div><img src={img1} alt="example" className="img-style"/>
          <div className="poped-out-div" >

          </div>
        </div>
        <div><img src={img1} alt="example" className="img-style"/>
          <div className="poped-out-div" >

          </div>
        </div>
        <div><img src={img1} alt="example" className="img-style"/>
          <div className="poped-out-div" >

          </div>
        </div>
        <div><img src={img1} alt="example" className="img-style"/>
          <div className="poped-out-div" >

          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectHome;
