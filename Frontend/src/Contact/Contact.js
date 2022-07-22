import React, { useState } from "react";
import { contactDetails } from "../util/utils";
import "./Contact.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { saveQuery } from "../util/action";
import Toast from "../util/Toast";

const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNum: "",
    query: "",
  });
  const [isSavedSucess, setIsSavedSucess] = useState(false);
  const [open, setOpen] = useState(false);

  const handleFormSubmit = async (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    const query = { ...state };
    try {
      await saveQuery(query);
      setOpen(true);
      setIsSavedSucess(true);
    } catch (err) {
      console.log(err);
      setOpen(true);
      setIsSavedSucess(false);
    }
  };
  return (
    <>
      <Toast open={open} isSavedSucess={isSavedSucess} setOpen={()=>{setOpen(false)}}/>
      <div className="contact-page">
        <div className="outer-contact">
          <div className="contact-info">
            <div className="title">Contact Details</div>
            <div>
              {contactDetails.map((item, index) => {
                return (
                  <div key={index} style={{ marginBottom: "20px" }}>
                    <div className="item-title">{item.title}</div>
                    <div className="item-value">{item.value}</div>
                  </div>
                );
              })}
              <a href="mailto:ckevinvarghese1998@gmail.com?subject=Request Info">
                Reach Out to Us
              </a>
            </div>
          </div>

          <div className="post-query">
            <div className="title">Post a Query</div>
            <div className="form-title">Enter Name</div>
            <input
              type={"text"}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              className="input-fields"
            />
            <div className="form-title">Enter Email</div>
            <input
              type={"text"}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className="input-fields"
            />
            <div className="form-title">Enter Phone Number</div>
            <input
              type={"text"}
              onChange={(e) => setState({ ...state, phoneNum: e.target.value })}
              className="input-fields"
            />
            <div className="form-title">Enter Query</div>
            <textarea
              type={"text"}
              className='input-textarea'
              onChange={(e) => setState({ ...state, query: e.target.value })}
            />
            <div className="post-btn">
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleFormSubmit}
              >
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
