import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "react-bootstrap/Form";
import UploadIcon from "@mui/icons-material/Upload";
import LoadingButton from "@mui/lab/LoadingButton";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useLocation } from "react-router";
import "./Admin.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { saveImg } from "../util/action";

export default function FileUploadModal(props) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    file: "",
    isBannerImg: false,
    isVideo: false,
    loading: false,
    isSaved:false,
  });
  const location = useLocation();
  const project_id = location.state;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImgUpload = () => {
    setState({...state,loading:true})
    const imgData = {...state};
    delete imgData.isSaved;
    delete imgData.loading;
    imgData.projectId = project_id;
    imgData.id = Math.floor(Math.random() * 10000000 + 1);
    saveImg(imgData).then((resp)=>{
        if(resp.status===200) {
        setState({...state,isSaved:true,loading:false});
        props.addImg(state.file);
        }
    })
    
  };

  return (
    <div>
      <Button onClick={handleOpen}>Upload Image/Video</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="file-upload-box">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Upload Img
          </Typography>
          <Form>
            <Form.Group className="mb-3" style={{marginTop:'20px'}}>
              <Form.Label>Enter URL</Form.Label>
              <div>
                <Form.Control
                  type="text"
                  name="File"
                  required
                  onChange={(e) => setState({ ...state, file: e.target.value })}
                  style={{ marginRight: "10px" }}
                ></Form.Control>

                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Is Video"
                  onChange={(e)=>setState({...state,isVideo:!state.isVideo})}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Banner Img"
                  onChange={(e)=>setState({...state,isBannerImg:!state.isBannerImg})}
                />
              </div>
            </Form.Group>
            
            <LoadingButton
                  size="med"
                  onClick={() => handleImgUpload()}
                  endIcon={state.isSaved?<CheckCircleIcon/>:<UploadIcon />}
                  loading={state.loading}
                  loadingPosition="end"
                  variant="contained"
                  style={{display:'flex',marginLeft:'auto',marginRight:'auto',marginTop:'60px',backgroundColor:state.isSaved && 'green'}}
                >
                  {state.isSaved?'Saved':'Upload'}
                </LoadingButton>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}
