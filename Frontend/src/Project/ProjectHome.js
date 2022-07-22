import React from "react";
import img1 from "../Assets/img1.jpg";
import './Project.css';

const ProjectHome = () => {
  return (
    <div className="outer-div-proj">
      <div className="img-grid">
        <div><img src={img1} alt="example"  className="img-style"/>
          <div className="poped-out-div" id='poped-out-div1' >
          {/* <iframe src="https://drive.google.com/file/d/1uem4-KFdWPINS2Plq17IooBC52svVwBx/preview?controls=0"  allowfullscreen allow="autoplay"></iframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/xc_QaG8kWQ8/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div><img src= "https://drive.google.com/uc?export=view&id=1MyKQZP1ktHodFIZ1gtzpNPH_KUn6C4HU" alt="example" className="img-style"/>
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
