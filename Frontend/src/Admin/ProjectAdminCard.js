import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import img1 from "../Assets/img1.jpg";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from "react-router";
import axios from 'axios';

const ProjectAdminCard = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(()=>{
    axios.get('http://localhost:8080/projects').then((resp)=>{
    console.log(resp)
    })
  },[])
  const navigate = useNavigate();
  if (props.addCard) {
    return (<Card sx={{ maxWidth: 345 }} style={{position:'relative'}}>
        <CardHeader
        title="Add new project"
        style={{display:'flex',justifyContent:'center'}}
      />
        <AddCircleOutlineIcon className="add-circle-outline" onClick={()=>navigate('uploadProject')}/>

    </Card>);
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon onClick={handleClick} />
          </IconButton>
        }
        title="Project Title"
        subheader="September 14, 2016"
      />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>Edit Project</MenuItem>
        <MenuItem>Delete Project</MenuItem>
      </Menu>
      <CardMedia component="img" height="194" image={img1} alt="Img no found" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Project Description
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ProjectAdminCard;
