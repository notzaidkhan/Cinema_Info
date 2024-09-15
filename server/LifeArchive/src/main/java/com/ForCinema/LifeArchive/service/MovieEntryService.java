package com.ForCinema.LifeArchive.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ForCinema.LifeArchive.entity.MovieEntryEntity;
import com.ForCinema.LifeArchive.repository.MovieEntryRepository;

@Service
public class MovieEntryService {
    
    @Autowired
    private MovieEntryRepository movieEntryRepository;

    public List<MovieEntryEntity> findAll() {
        return movieEntryRepository.findAll();
    }

    public void addMovie(MovieEntryEntity myMovie) {
        movieEntryRepository.save(myMovie);
        // return myMovie;
    }
    public Optional<MovieEntryEntity> findById(String id) {
        return movieEntryRepository.findById(id);
    }
    public void deleteMovieById(String id) {
        movieEntryRepository.deleteById(id);
    }
}
