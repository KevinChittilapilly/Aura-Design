package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ProjectImageModal;

@Repository
public interface ProjectImageRepository extends JpaRepository<ProjectImageModal, Integer> {
    public List<ProjectImageModal> findByProjectId(int pid);
}
