import React, { useState } from "react";
import { contactDetails } from "../util/utils";
import "./Contact.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [state, setState] = useState({
    title: "",
    descp: "",
    file: "",
    isPublished: false,
    images: [""],
  });
  const handleFormSubmit = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
  };
  return (
    <>
      <div className="contact-page">
        <div className="outer-contact">
          <div className="contact-info">
            <div className="title">Contact Details</div>
            <div>
              {contactDetails.map((item,index) => {
                return (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <div className="item-title">{item.title}</div>
                    <div className="item-value">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="post-query">
            <div className="title">Post a Query</div>
            <div className="form-title">Enter Name</div>
            <input
              type={"text"}
              style={{
                border: "none",
                borderBottom: "1px solid",
                outline: "none",
                marginBottom: "20px",
                width:'400px'
              }}
            />
            <div className="form-title">Enter Email</div>
            <input
              type={"text"}
              style={{
                border: "none",
                borderBottom: "1px solid",
                outline: "none",
                marginBottom: "20px",
                width:'400px'
              }}
            />
            <div className="form-title">Enter Phone Number</div>
            <input
              type={"text"}
              style={{
                border: "none",
                borderBottom: "1px solid",
                outline: "none",
                marginBottom: "20px",
                width:'400px'
              }}
            />
            <div className="form-title">Enter Query</div>
            <input type={"text"} style={{ minHeight: "150px",width:'400px' }} />
            <div className="post-btn">
              <Button variant="contained" endIcon={<SendIcon />}>
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
