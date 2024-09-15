package com.ForCinema.LifeArchive.controller;

// import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ForCinema.LifeArchive.entity.MovieEntryEntity;
import com.ForCinema.LifeArchive.service.MovieEntryService;

@RestController
public class MovieEntryController {

    @Autowired
    private MovieEntryService movieEntryService;

    @GetMapping("/")
    public List<MovieEntryEntity> getAll() {
        return movieEntryService.findAll();
    }

    @PostMapping("/")
    public MovieEntryEntity addMovie(@RequestBody MovieEntryEntity myMovie) {
        myMovie.setDate(LocalDateTime.now());
        movieEntryService.addMovie(myMovie);
        return myMovie;
    }

    @DeleteMapping("/id/{myId}")
    public boolean deleteMovieById(@PathVariable("myId") String id) {
        movieEntryService.deleteMovieById(id);
        return true;
    }

    @PutMapping("/id/{myId}")
    public MovieEntryEntity updateMovieById(@PathVariable("myId") String id, @RequestBody MovieEntryEntity newMovie) {
        MovieEntryEntity oldMovie = movieEntryService.findById(id).orElse(null);
        if (oldMovie != null) {
            oldMovie.setComment(
                    !newMovie.getComment().equals("") && newMovie.getComment() != null ? newMovie.getComment()
                            : oldMovie.getComment());
            oldMovie.setRating((newMovie.getRating() <= 5 && newMovie.getRating() >= 0) ? newMovie.getRating()
                    : oldMovie.getRating());
            oldMovie.setUrl(newMovie.getUrl());
            oldMovie.setTitle(newMovie.getTitle());
            return oldMovie;
        } else {
            newMovie.setDate(LocalDateTime.now());
            movieEntryService.addMovie(newMovie);
            return newMovie;
        }
    }
}
