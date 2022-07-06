package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ProjectModal;
import com.example.demo.repo.ProjectRepository;

@Service
public class ProjectServiceImp implements ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    @Override
    public ProjectModal findByProjectTitle(String title) {
        return projectRepository.findByProjectTitle(title);
    }
    @Override
    public List<ProjectModal> findAll() {
        return projectRepository.findAll();
    }
    @Override
    public ProjectModal saveProject(ProjectModal projectModal) {
        return projectRepository.save(projectModal);
    }
    @Override
    public List<ProjectModal> deleteProject(int id) {
        projectRepository.deleteById(id);
        return projectRepository.findAll();
    }

    


}
