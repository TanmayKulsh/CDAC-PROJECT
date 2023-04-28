package com.app.dto;

import com.app.entity.ArtistsType;
import com.app.entity.BaseEntity;
import com.app.entity.Gender;

public class ArtistDto  extends BaseEntity{

	private String firstName;
	
	private String lastName;
	
	private Gender gender;
	
	private ArtistsType art_Type;
	
	public ArtistDto() {
		// TODO Auto-generated constructor stub
	}

	public ArtistDto(String firstName, String lastName, Gender gender, ArtistsType art_Type) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.art_Type = art_Type;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public ArtistsType getArt_Type() {
		return art_Type;
	}

	public void setArt_Type(ArtistsType art_Type) {
		this.art_Type = art_Type;
	}

	@Override
	public String toString() {
		return "ArtistDto [firstName=" + firstName + ", lastName=" + lastName + ", gender=" + gender + ", art_Type="
				+ art_Type + "]";
	}
	
	
}
