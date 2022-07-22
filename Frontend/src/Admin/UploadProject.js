import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Admin.css";
import Delete from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import { saveProject } from "../util/action";
import { useLocation } from "react-router-dom";
import Loader from "../util/Loader";
import FileUploadModal from "./FileUploadModal";
import { db } from "../config/FireBaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import Toast from "../util/Toast";

const UploadProject = (props) => {
  const location = useLocation();
  const projectData = location.state;
  const [users, setUsers] = useState([]);
  const projectId =
    projectData?.id ||
    location?.state ||
    Math.floor(Math.random() * 10000000 + 1);
  const [state, setState] = useState({
    projectTitle: projectData?.projectTitle || "",
    description: projectData?.description || "",
    file: "",
    location: projectData?.location || "",
    team: projectData?.team || "",
    photographyStudio: projectData?.photographyStudio || "",
    size: projectData?.size || "",
    status: projectData?.state || "",
    images: [],
    category: projectData?.category || "",
    loadingImg: [false],
    
  });
  const [loading, setLoading] = useState(false);
  const [isSavedSucess,setIsSavedSucess] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "projects");
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);
    const proj = { ...state };
    delete proj.loadingImg;
    delete proj.images;
    // proj.id = projectId;
    // saveProject(proj).then((resp) => {
    //   setLoading(false);
    // });
    try {
      await saveProject(proj);
      setLoading(false);
      setOpen(true);
      setIsSavedSucess(true);
    } catch (err) {
      console.log("err", err);
      setOpen(true);
      setIsSavedSucess(false);
    }
  };


  const addImage = (val) => {
    const newArray = state.images;
    newArray.push(val);
    setState({ ...state, images: newArray });
  };

  const deleteImg = (index) => {
    let newArr = state.images;
    newArr = newArr.filter((item, j) => index !== j);
    let newArrayImgLoading = state.loadingImg;
    newArrayImgLoading = newArrayImgLoading.filter((item, j) => index !== j);
    setState({ ...state, images: newArr, loadingImg: newArrayImgLoading });
  };

  const showImages = () => {
    let cardHTML = [];
    for (let i = 0; i < state.images.length; i++) {
      cardHTML.push(
        <Form.Group className="mb-3">
          <Form.Label>Images</Form.Label>
          <div style={{ display: "flex" }}>
            <Form.Control
              type="text"
              name="File"
              value={state.images[i]}
              disabled
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
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <div className="upload-proj-admin">
      {loading && <Loader />}
      <Toast open ={open} isSavedSucess={isSavedSucess}/>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Project title</Form.Label>
          <Form.Control
            placeholder="Enter title"
            value={state.projectTitle}
            onChange={(e) =>
              setState({ ...state, projectTitle: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            placeholder="Enter Description"
            value={state.description}
            onChange={(e) =>
              setState({ ...state, description: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Project Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            style={{ marginBottom: "20px" }}
            onChange={(e) => setState({ ...state, category: e.target.value })}
            value={state.category}
          >
            <option>Select</option>
            <option>Interiors</option>
            <option>Architecture</option>
            <option>Furniture</option>
            <option>Product</option>
            <option>Details</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Project State</Form.Label>
          <Form.Select
            aria-label="Default select example"
            style={{ marginBottom: "20px" }}
            onChange={(e) => setState({ ...state, status: e.target.value })}
            value={state.status}
          >
            <option>Draft</option>
            <option>Published</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Location</Form.Label>
          <Form.Control
            placeholder="Enter Location"
            value={state.location}
            onChange={(e) => setState({ ...state, location: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Size</Form.Label>
          <Form.Control
            placeholder="Enter Size"
            value={state.size}
            onChange={(e) => setState({ ...state, size: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Team</Form.Label>
          <Form.Control
            placeholder="Enter Team"
            value={state.team}
            onChange={(e) => setState({ ...state, team: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Photography Studio</Form.Label>
          <Form.Control
            placeholder="Enter Photography Studio"
            value={state.photographyStudio}
            onChange={(e) =>
              setState({ ...state, photographyStudio: e.target.value })
            }
          />
        </Form.Group>
        {showImages()}
        <FileUploadModal projectId={projectId} addImg={addImage} />
        <Button type="submit">Submit form</Button>
        <Button
          type="button"
          style={{ marginLeft: "30px" }}
          onClick={() => navigate("/admin/project")}
        >
          Go Back
        </Button>
      </Form>
    </div>
  );
};
export default UploadProject;
