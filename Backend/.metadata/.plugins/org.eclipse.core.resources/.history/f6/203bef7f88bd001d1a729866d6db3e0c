package com.app.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.app.entity.BaseEntity;
import com.app.entity.ContentType;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

//@Entity
//@Table(name = "content")
//@NoArgsConstructor 
//@Getter 
//@Setter
//@ToString
//@AllArgsConstructor
public class ContentSpecificResponse extends BaseEntity{

	@Column
	@Enumerated(EnumType.STRING)
	private ContentType type;
	@Column(length = 50)
	private String name;
	@Column(length = 500)
	private String posterLink;
	@Column(length = 30)
	private Double length;
	@Column
	private String genre;
	
	@Column
	@JsonProperty(access = Access.READ_ONLY)
	private double avgRating;
	
	
	public ContentSpecificResponse() {
		// TODO Auto-generated constructor stub
	}


	public ContentSpecificResponse(ContentType type, String name, String posterLink, Double length, String genre) {
		super();
		this.type = type;
		this.name = name;
		this.posterLink = posterLink;
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


	public String getPosterLink() {
		return posterLink;
	}


	public void setPosterLink(String posterLink) {
		this.posterLink = posterLink;
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


	public double getAvgRating() {
		return avgRating;
	}


	public void setAvgRating(double avgRating) {
		this.avgRating = avgRating;
	}


	@Override
	public String toString() {
		return "ContentSpecificResponse [type=" + type + ", name=" + name + ", posterLink=" + posterLink + ", length="
				+ length + ", genre=" + genre + ", avgRating=" + avgRating + "]";
	}

		
	
}
