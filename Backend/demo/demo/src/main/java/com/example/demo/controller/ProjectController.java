package com.example.demo.controller;

import java.io.Console;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.ProjectImageModal;
import com.example.demo.model.ProjectModal;
import com.example.demo.service.ProjectImageServiceImp;
import com.example.demo.service.ProjectServiceImp;

@RestController
public class ProjectController{
    @Autowired
	ProjectServiceImp projectService;

    @Autowired
    ProjectImageServiceImp projectImageServiceImp;
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/projects/{title}")
    public ProjectModal findProject(@PathVariable("title") String title) {
        return projectService.findByProjectTitle(title);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/projects")
    public List<ProjectModal> getAllProjects() {
        return (List<ProjectModal>) projectService.findAll();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/projects/save")
    public List<ProjectModal> saveProject(@RequestBody ProjectModal projectModal) {
        LocalDate date = LocalDate.now();
        projectModal.setDate(date);
        projectService.saveProject(projectModal);
        return (List<ProjectModal>) projectService.findAll();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/projects/delete/{id}")
    public List<ProjectModal> deleteProject(@PathVariable("id") int id) {
        return projectService.deleteProject(id);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/projects/edit")
    public List<ProjectModal> editProject(@RequestBody ProjectModal projectModal) {
        System.out.println("check"+ " "+projectService.findByProjectTitle(projectModal.getProjectTitle()));
        projectService.deleteProject(projectService.findByProjectTitle(projectModal.getProjectTitle()).getId());
        projectService.saveProject(projectModal);
        return (List<ProjectModal>) projectService.findAll();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("projects/{id}/images")
    public List<ProjectImageModal> getAllProjectImages(@PathVariable("id") int pid) {
        return (List<ProjectImageModal>) projectImageServiceImp.findByProjectId(pid);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("projects/saveImg")
    public ProjectImageModal saveProjectImage(@RequestBody ProjectImageModal projectImageModal) {
        return projectImageServiceImp.saveProjectImage(projectImageModal);
    }
}