package com.example.demo.model;

import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "projects")
public class ProjectModal {
    @Id
    @Column(name="project_id")
    private int id;
    @Column(name="title")
    private String projectTitle;
    @Column(name="description")
    private String description;
    @Column(name="location")
    private String location;
    @Column(name="status")
    private String status;
    @Column(name="size")
    private String size;
    @Column(name="photography_studio")
    private String photographyStudio;
    @Column(name="team")
    private String team;
    @Column(name="published")
    private String published;
    @Column(name="category")
    private String category;
    @Column(name="date")
    private LocalDate date;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getPublished() {
        return published;
    }
    public void setPublished(String published) {
        this.published = published;
    }
    public String getProjectTitle() {
        return projectTitle;
    }
    public void setProjectTitle(String projectTitle) {
        this.projectTitle = projectTitle;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getSize() {
        return size;
    }
    public void setSize(String size) {
        this.size = size;
    }
    public String getPhotographyStudio() {
        return photographyStudio;
    }
    public void setPhotographyStudio(String photographyStudio) {
        this.photographyStudio = photographyStudio;
    }
    public String getTeam() {
        return team;
    }
    public void setTeam(String team) {
        this.team = team;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
}
