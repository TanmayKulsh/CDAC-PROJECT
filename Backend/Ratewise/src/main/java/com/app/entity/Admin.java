package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "admin")
//@NoArgsConstructor 
//@Getter 
//@Setter
//@ToString(exclude = "password")
//@AllArgsConstructor
public class Admin extends BaseEntity {

	

	@NotBlank(message = "First name can't be blank")
	@Length(min=4,max=20,message = "Invalid first name!!!!!!")
	@Column(name = "first_name", length = 20)
	private String firstNAme;
	@NotBlank(message = "Last  name can't be blank")
	@Column(name = "last_name", length = 20)
	private String lastName;
	@Column
	private LocalDate dob;
	@Column(length = 10)
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@Column(length = 20, unique = true)
	@Email(message = "Invalid email format")
	private String email;
	@Column(length = 20)
	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid Password !")
	private String password;
	
	@Column
	private LocalDate joiningDate;
	
	public Admin() {
		// TODO Auto-generated constructor stub
	}

	public Admin(
			@NotBlank(message = "First name can't be blank") @Length(min = 4, max = 20, message = "Invalid first name!!!!!!") String firstNAme,
			@NotBlank(message = "Last  name can't be blank") String lastName, LocalDate dob, Gender gender,
			@Email(message = "Invalid email format") String email,
			@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Invalid Password !") String password,
			LocalDate joiningDate) {
		super();
		this.firstNAme = firstNAme;
		this.lastName = lastName;
		this.dob = dob;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.joiningDate = joiningDate;
	}

	public String getFirstNAme() {
		return firstNAme;
	}

	public void setFirstNAme(String firstNAme) {
		this.firstNAme = firstNAme;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getJoiningDate() {
		return joiningDate;
	}

	public void setJoiningDate(LocalDate joiningDate) {
		this.joiningDate = joiningDate;
	}

	@Override
	public String toString() {
		return "Admin Id = "+ getId() +"[firstNAme=" + firstNAme + ", lastName=" + lastName + ", dob=" + dob + ", gender=" + gender
				+ ", email=" + email + ", password=" + password + ", joiningDate=" + joiningDate + "]";
	}
	
	
	
}
