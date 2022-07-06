import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "./Admin/Admin";
import LoginPage from "./Admin/LoginPage";
import UploadProject from "./Admin/UploadProject";
import ProjectAdminHome from "./Admin/ProjectAdminHome";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Navbar from "./NavBar/NavBar";
import Profile from "./Profile/Profile";
import ProjectHome from "./Project/ProjectHome";
import history from "./util/history";

class App extends Component {
  checkIfAuth = () => {
    let token = sessionStorage.getItem("token");
    return token;
  };
  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ProjectHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<LoginPage />} />
          {console.log('token',this.checkIfAuth())}
          {this.checkIfAuth() ? (
            <>
            <Route path="/admin/home" element={<Admin />} />
            <Route path="/admin/project" element={<ProjectAdminHome/>} />
            <Route path="/admin/project/uploadProject" element={<UploadProject/>} />
            </>
          ):null}
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route exact path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
