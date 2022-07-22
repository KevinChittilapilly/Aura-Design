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
    private int id; 
    @Column(name="project_id")
    private int projectId;
    @Column(name="file")
    private String file;
    @Column(name="isVideo")
    private String isVideo;
    @Column(name="isBannerImg")
    private String isBannerImg;

    
    public String getIsVideo() {
        return isVideo;
    }

    public void setIsVideo(String isVideo) {
        this.isVideo = isVideo;
    }

    public String getIsBannerImg() {
        return isBannerImg;
    }

    public void setIsBannerImg(String isBannerImg) {
        this.isBannerImg = isBannerImg;
    }

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }
}
