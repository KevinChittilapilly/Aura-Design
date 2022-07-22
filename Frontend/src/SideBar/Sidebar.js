import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { menuItems } from "../util/utils";
import { useNavigate } from "react-router-dom";
import useMobile from "../util/useMobile";

const Sidebar = (props) => {
  const [activeCurrentId, setActiveCurrentId] = useState(-1);
  const sideRef = useRef();
  const navigate = useNavigate();
  const isMobile = useMobile();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideRef.current && !sideRef.current.contains(event.target)) {
        props.onClickOutside && props.onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ props.onClickOutside ]);
  const displayMenuItems = () => {
    return (
      <div>
        {menuItems.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="item-title"
                onClick={() => {setActiveCurrentId(index);navigate(`${item.title.toLowerCase()}`);isMobile && props.onClickOutside()}}

              >
                {item.title}
              </div>
              {item.category && activeCurrentId === index && (
                <div className="outer-category">
                  {item.category.map((cat) => {
                    return (
                      <div className="item-category">
                        {cat}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  if(!props.showSidebar) {
    return null;
  }
  return (
    <div className="outer-modal-sidebar">
      <div className="outer-sidebar-div" ref={sideRef}>
        <CloseIcon className="close-icon" onClick={()=>props.onClickOutside()}/>
        <div className="items">{displayMenuItems()}</div>
      </div>
    </div>
  );
};
export default Sidebar;
