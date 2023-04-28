package com.app.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.ArtistDto;
import com.app.entity.Artist;
import com.app.repository.ArtistRepository;

@Service
@Transactional
public class ArtistServiceImpl implements ArtistService {

	@Autowired
	private ArtistRepository artistRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	public ArtistServiceImpl() {
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String delartist(Integer id) {
		String mesg = "Artist Deletion Failed...!!!";
		if(artistRepo.existsById(id))
		{
			artistRepo.deleteById(id);
			mesg = "Artist Deletion Successfull...!!!";
		}
		return mesg;
	}

	@Override
	public Artist addArtist(ArtistDto newArtist) {
		Artist artist = mapper.map(newArtist, Artist.class);
		return artistRepo.save(artist);
	}

	@Override
	public List<Artist> getArtist() {
		return artistRepo.findAll();
	}

	@Override
	public Artist updateArtst(ArtistDto dto) {
		Artist artist = mapper.map(dto, Artist.class);
		if(artistRepo.existsById(artist.getId())) {
			return artistRepo.save(artist);
		}
		throw new ResourceNotFoundException("Artist Not Found With Specific Id..!!");
	}

	@Override
	public Optional<Artist> findArtistById(Integer id) {
		// TODO Auto-generated method stub
		return artistRepo.findById(id);
	}

}
