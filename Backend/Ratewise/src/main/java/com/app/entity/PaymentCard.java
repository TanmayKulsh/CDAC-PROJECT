package com.app.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Embeddable
public class PaymentCard {

	
	@Column(name="card_no",unique = true,length = 20)
	private String cardNumber;
	
	@Column(unique = true,length = 3)
	private int cvv;
	
	private LocalDate expiryDate;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private PaymentCardType cardType;
	
	
	public PaymentCard() {
		// TODO Auto-generated constructor stub
	}


	public PaymentCard(String cardNumber, int cvv, LocalDate expiryDate, PaymentCardType cardType) {
		super();
		this.cardNumber = cardNumber;
		this.cvv = cvv;
		this.expiryDate = expiryDate;
		this.cardType = cardType;
	}


	public String getCardNumber() {
		return cardNumber;
	}


	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}


	public int getCvv() {
		return cvv;
	}


	public void setCvv(int cvv) {
		this.cvv = cvv;
	}


	public LocalDate getExpiryDate() {
		return expiryDate;
	}


	public void setExpiryDate(LocalDate expiryDate) {
		this.expiryDate = expiryDate;
	}


	public PaymentCardType getCardType() {
		return cardType;
	}


	public void setCardType(PaymentCardType cardType) {
		this.cardType = cardType;
	}


	@Override
	public String toString() {
		return "PaymentCard [cardNumber=" + cardNumber + ", cvv=" + cvv + ", expiryDate=" + expiryDate + ", cardType="
				+ cardType + "]";
	}
	
	
	
	
}
