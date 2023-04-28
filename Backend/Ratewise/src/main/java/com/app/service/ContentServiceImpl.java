package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.ApiResponse;
import com.app.dto.ContentDto;
import com.app.dto.ContentSpecificResponse;
import com.app.entity.Artist;
import com.app.entity.Content;
import com.app.entity.ContentType;
import com.app.repository.ArtistRepository;
import com.app.repository.ContentRepository;

@Service
@Transactional
public class ContentServiceImpl implements ContentService {

	@Value("${content.upload.folder}")
	private String folderName;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private ContentRepository contentRepo;
	
	@Autowired
	private ArtistRepository artistRepo;
	
	@PostConstruct
	public void myInit() {
		System.out.println("in myInit " + folderName);
		// chk of folder exists --o.w create one!
		File path = new File(folderName);
		if (!path.exists()) {
			path.mkdirs();
		} else
			System.out.println("folder alrdy exists....");
	}
	
	
	
	
	@Override
	public Content addContent(ContentDto newContent) {
		Content content = mapper.map(newContent, Content.class);
		return contentRepo.save(content);
	}
	
	
	@Override
	public ApiResponse addImageToContent(Integer content_id ,MultipartFile imageFile) throws IOException {
		Content content = contentRepo.findById(content_id).
							orElseThrow(() -> new ResourceNotFoundException("Invalid Content Id : Uploading Image Failed..!!!"));
		String targetPath = folderName + File.separator + imageFile.getOriginalFilename();
		System.out.println(targetPath);
		// copy image file contents to the specified path
		Files.copy(imageFile.getInputStream(), Paths.get(targetPath), StandardCopyOption.REPLACE_EXISTING);
		//OR for DB
		/*
		 * Emp entity :Add @Lob private  byte[] contents; emp.setContents(imageFile.getBytes());
		 */
		// => success
		// save image path in DB
		content.setPosterLink(targetPath);
		return new ApiResponse("Image Added Successfully..!!!");
	}


	@Override
	public String delContent(Integer id) {
		String mesg = "Deletion Failed....!!!!";
		if(contentRepo.existsById(id)) {
			contentRepo.deleteById(id);
			mesg = "Deletion Successfull....!!!!";
		}
		return mesg;
	}

	@Override
	public List<Content> getContent() {
		// TODO Auto-generated method stub
		return contentRepo.findAll();
	}




	@Override
	public Content addContentWithImage(String contentName, ContentType type, double length, String genre,
			MultipartFile file) throws IOException {
		Content newContent = new Content();
		newContent.setName(contentName);
		newContent.setType(type);
		newContent.setLength(length);
		newContent.setGenre(genre);
		contentRepo.save(newContent);
		String targetPath = folderName + File.separator + file.getOriginalFilename();
		System.out.println(targetPath);
		// copy image file contents to the specified path
		Files.copy(file.getInputStream(), Paths.get(targetPath), StandardCopyOption.REPLACE_EXISTING);
		//OR for DB
		/*
		 * Emp entity :Add @Lob private  byte[] contents; emp.setContents(imageFile.getBytes());
		 */
		// => success
		// save image path in DB
		newContent.setPosterLink(targetPath);
		return newContent;
	}




	@Override
	public byte[] serveImage(Integer conId) throws IOException {
		Content content = contentRepo.findById(conId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Content Id : Image Download failed!!!!!!!!"));
		String path = content.getPosterLink();
		if (path == null)
			throw new ResourceNotFoundException("Image does not exist !!!!!");
		//OR to lift it from DB emp.getContents() --> byte[]
		return Files.readAllBytes(Paths.get(path));
	}


	@Override
	public Content updateContent(ContentDto dto) {
		Content content = mapper.map(dto, Content.class);
		if(contentRepo.existsById(content.getId())) {
			return contentRepo.save(content);
		}
		throw new ResourceNotFoundException("Content Not Found With Specific Id..!!");
	}




	@Override
	public Optional<Content> findContentById(Integer id) {
		return contentRepo.findById(id);
	}

	@Override
	public List<ContentSpecificResponse> fetchByContentName(String cname) {
		// TODO Auto-generated method stub
		return contentRepo.findByName(cname)
				.stream()
				.map(c -> mapper.map(c, ContentSpecificResponse.class))
				.collect(Collectors.toList());
	}




	@Override
	public List<ContentSpecificResponse> fetchContentByKey(String key) {
		// TODO Auto-generated method stub
		return contentRepo.findByNameContaining(key)
				.stream()
				.map(c -> mapper.map(c, ContentSpecificResponse.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<ContentSpecificResponse> sortByRatingAsc() {
		return contentRepo.findAllByOrderByAvgRatingAsc()
				.stream()
				.map(c -> mapper.map(c, ContentSpecificResponse.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<ContentSpecificResponse> sortByRatingDesc() {
		return contentRepo.findAllByOrderByAvgRatingDesc()
				.stream()
				.map(c -> mapper.map(c, ContentSpecificResponse.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<ContentSpecificResponse> getContentByRateRange(double minRate, double maxRate) {
		return contentRepo.findByAvgRatingBetween(minRate,maxRate)
				.stream()
				.map(c -> mapper.map(c, ContentSpecificResponse.class))
				.collect(Collectors.toList());
	}

	@Override
	public Content addWholeContent(String contentName, ContentType type, double length, String genre,
			List<Integer> artistId, MultipartFile file) throws IOException {
		Content newContent = new Content();
		newContent.setName(contentName);
		newContent.setType(type);
		newContent.setLength(length);
		newContent.setGenre(genre);
		contentRepo.save(newContent);
		String targetPath = folderName + File.separator + file.getOriginalFilename();
		System.out.println(targetPath);
		// copy image file contents to the specified path
		Files.copy(file.getInputStream(), Paths.get(targetPath), StandardCopyOption.REPLACE_EXISTING);
		//OR for DB
		/*
		 * Emp entity :Add @Lob private  byte[] contents; emp.setContents(imageFile.getBytes());
		 */
		// => success
		// save image path in DB
		newContent.setPosterLink(targetPath);
		
		Set<Artist> artistSet = new HashSet<Artist>();
		for(Integer artId : artistId) {
			Artist artist = artistRepo.findById(artId).orElseThrow(() -> new ResourceNotFoundException("Artist Not Found With this Id"));
			
			artistSet.add(artist); 
		}
		
		newContent.getArtists().addAll(artistSet);
		return newContent;
	}




	@Override
	public Content addArtistToContent(Integer conId, List<Integer> artistId) {
		Content content = contentRepo.findById(conId).orElseThrow(() -> new ResourceNotFoundException("Content Not Found with this Id"));
		Set<Artist> artists = new HashSet<Artist>();
		if(content != null) {
			for(Integer artId : artistId) {
				Artist artist = artistRepo.findById(artId).orElseThrow(() -> new ResourceNotFoundException("Artist Not Found With this Id"));	
				artists.add(artist); 
			}
		}
		content.getArtists().addAll(artists);
		return content;
	}




	@Override
	public List<ContentSpecificResponse> fetchContentByType(ContentType conType) {
		return contentRepo.findByType(conType)
				.stream()
				.map(c -> mapper.map(c, ContentSpecificResponse.class))
				.collect(Collectors.toList());
	} 
	
	
	
	
	
	
	

}
