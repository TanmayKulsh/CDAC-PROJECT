package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entity.Artist;

public interface ArtistRepository extends JpaRepository<Artist, Integer> {

}
