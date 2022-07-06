package com.example.demo.service;

import java.util.List;

import com.example.demo.model.ProjectModal;


public interface ProjectService {
    ProjectModal findByProjectTitle(String title);
    List<ProjectModal> findAll();
    ProjectModal saveProject(ProjectModal projectModal);
    List<ProjectModal> deleteProject(int id);
}
