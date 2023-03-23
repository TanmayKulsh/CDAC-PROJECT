package com.app.dto;

import com.app.entity.BaseEntity;
import com.app.entity.ContentType;



public class ContentDto extends BaseEntity{

	
	
	private ContentType type;	
	private String name;
	private Double length;
	private String genre;
	
	
	
	public ContentDto() {
		// TODO Auto-generated constructor stub
	}


	public ContentDto(ContentType type, String name, String posterLink, Double length, String genre) {
		super();
		this.type = type;
		this.name = name;
		
		this.length = length;
		this.genre = genre;
	}


	public ContentType getType() {
		return type;
	}


	public void setType(ContentType type) {
		this.type = type;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}



	public Double getLength() {
		return length;
	}


	public void setLength(Double length) {
		this.length = length;
	}


	public String getGenre() {
		return genre;
	}


	public void setGenre(String genre) {
		this.genre = genre;
	}
	
	
	
}
