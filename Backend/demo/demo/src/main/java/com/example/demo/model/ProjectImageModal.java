package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "project_images")
public class ProjectImageModal {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; 
    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public String getProjectImgUrl() {
        return projectImgUrl;
    }

    public void setProjectImgUrl(String projectImgUrl) {
        this.projectImgUrl = projectImgUrl;
    }

    @Column(name="project_id")
    private int projectId;
    @Column(name="project_img_url")
    private String projectImgUrl;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
