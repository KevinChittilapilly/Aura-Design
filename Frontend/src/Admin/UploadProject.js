import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Admin.css";
import Delete from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";

const UploadProject = () => {
  const [state, setState] = useState({
    title: "",
    descp: "",
    file: "",
    isPublished: false,
    images: [""],
  });
  const navigate = useNavigate();
  const handleFormSubmit = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
  };
  const addImage = () => {
    const newArray = state.images;
    newArray.push("");
    setState({ ...state, images: newArray });
  };
  const deleteImg = (index) => {
    let newArr = state.images;
    newArr = newArr.filter((item, j) => index !== j);
    setState({ ...state, images: newArr });
  };
  const showImages = () => {
    let cardHTML = [];
    for (let i = 0; i < state.images.length; i++) {
      cardHTML.push(
        <Form.Group className="position-relative mb-3">
          <Form.Label>File</Form.Label>
          <div style={{ display: "flex" }}>
            <Form.Control
              type="text"
              name="File"
              onChange={(e) => setState({ ...state, file: e.target.value })}
              style={{ marginRight: "10px" }}
            ></Form.Control>

            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            <Delete className="del" onClick={() => deleteImg(i)} />
          </div>
        </Form.Group>
      );
    }
    return cardHTML;
  };
  return (
    <div className="upload-proj-admin">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" required>
          <Form.Label>Project title</Form.Label>
          <Form.Control
            placeholder="Enter title"
            required
            onChange={(e) => setState({ ...state, title: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            placeholder="Enter Description"
            required
            onChange={(e) => setState({ ...state, descp: e.target.value })}
          />
        </Form.Group>
        {showImages()}
        <div className="add-another" onClick={() => addImage()}>
          Add Another Image
        </div>
        <Form.Group>
          <Form.Label>Project Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            style={{ marginBottom: "20px" }}
          >
            <option onClick={() => setState({ ...state, isPublished: true })}>
              Select
            </option>
            <option onClick={() => setState({ ...state, isPublished: false })}>
              Interiors
            </option>
            <option onClick={() => setState({ ...state, isPublished: true })}>
              Architecture
            </option>
            <option onClick={() => setState({ ...state, isPublished: true })}>
              Furniture
            </option>
            <option onClick={() => setState({ ...state, isPublished: true })}>
              Product
            </option>
            <option onClick={() => setState({ ...state, isPublished: true })}>
              Details
            </option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Project State</Form.Label>
          <Form.Select
            aria-label="Default select example"
            style={{ marginBottom: "20px" }}
          >
            <option onClick={() => setState({ ...state, isPublished: false })}>
              Draft
            </option>
            <option onClick={() => setState({ ...state, isPublished: true })}>
              Published
            </option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit form</Button>
        <Button type="button" style={{marginLeft:'30px'}} onClick={()=>navigate('/admin/project')}>Go Back</Button>
      </Form>
    </div>
  );
};
export default UploadProject;
