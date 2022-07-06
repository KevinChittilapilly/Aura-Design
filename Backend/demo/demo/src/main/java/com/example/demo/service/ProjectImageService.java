package com.example.demo.service;

import java.util.List;

import com.example.demo.model.ProjectImageModal;

public interface ProjectImageService {
    List<ProjectImageModal> findByProjectId(int pid);
}
