package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.ProjectImageModal;
import com.example.demo.repo.ProjectImageRepository;

@Service
public class ProjectImageServiceImp implements ProjectImageService {
    @Autowired
    ProjectImageRepository projectImageRepository;

    @Override
    public List<ProjectImageModal> findByProjectId(int pid) {
        return projectImageRepository.findByProjectId(pid);
    }
    
}
