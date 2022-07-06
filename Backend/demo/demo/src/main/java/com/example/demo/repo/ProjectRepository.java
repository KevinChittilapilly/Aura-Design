package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.ProjectModal;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectModal, Integer> {
    public ProjectModal findByProjectTitle(String title);
}