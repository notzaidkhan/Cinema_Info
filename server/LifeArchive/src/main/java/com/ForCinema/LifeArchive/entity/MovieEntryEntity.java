package com.ForCinema.LifeArchive.entity;

import java.time.LocalDateTime;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class MovieEntryEntity {
    @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String title;
    private String url;
    private String comment;
    private String year;
    private String type;
    private String poster;
    private LocalDateTime date;
    private float rating;

    // getters
    public String getComment() {
        return comment;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public String getTitle() {
        return title;
    }

    public String getId() {
        return id;
    }

    public float getRating() {
        return rating;
    }
    public String getPoster() {
        return poster;
    }
    public String getUrl() {
        return url;
    }

    public String getYear() {
        return year;
    }
    public String getType() {
        return type;
    }

    // setters
    public void setComment(String comment) {
        this.comment = comment;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }
    public void setPoster(String poster) {
        this.poster = poster;
    }
    public void setType(String type) {
        this.type = type;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
