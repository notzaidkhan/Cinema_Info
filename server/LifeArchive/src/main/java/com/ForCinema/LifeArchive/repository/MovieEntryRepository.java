package com.ForCinema.LifeArchive.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ForCinema.LifeArchive.entity.MovieEntryEntity;

@Repository
public interface MovieEntryRepository extends JpaRepository<MovieEntryEntity, String> {
    
}
