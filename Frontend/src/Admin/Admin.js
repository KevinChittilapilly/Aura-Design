import React from "react";
import UploadProject from "./UploadProject";
import "./Admin.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { adminHomeDetails } from "../util/utils";
import { useNavigate } from "react-router";

const Admin = () => {
  const navigate = useNavigate();
  const displayAdminCard = (item) => {
    return (
      <Box sx={{ maxWidth: 500 }}>
        <Card
          variant="outlined"
          style={{ backgroundColor: "lightgoldenrodyellow" }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => navigate(`${item.redirectURL}`)}
            >
              Go to {item.title}
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  };
  return (
    <>
      <div className="admin-title">Welcome to Admin Page</div>
      <div className="admin-cards">
        {adminHomeDetails.map((item) => {
          return (
            <div style={{ marginRight: "30px", marginTop: "50px" }}>
              {displayAdminCard(item)}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Admin;
