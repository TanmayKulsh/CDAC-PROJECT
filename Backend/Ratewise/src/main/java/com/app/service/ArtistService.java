package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.ArtistDto;
import com.app.entity.Artist;

public interface ArtistService {

	String delartist(Integer id);

	Artist addArtist(ArtistDto newArtist);

	List<Artist> getArtist();

	Artist updateArtst(ArtistDto dto);

	Optional<Artist> findArtistById(Integer id);

}
