package com.office.BookManage;
//import java.util.HashMap;

//import java.util.Map;

public class Book {

//속성
	private String isbn; // ISBN (국제 표준 도서번호)
	private String title; // 도서명
	private String author; // 저자
	private String publisher; // 출판사
	private String publishedDate; // 발행일
	private String callNumber; // 청구번호
	// 생성자

	public Book(String isbn, String title, String author, String publisher, String publishedDate, String callNumber) {
		this.isbn = isbn;
		this.title = title;
		this.author = author;
		this.publisher = publisher;
		this.publishedDate = publishedDate;
		this.callNumber = callNumber;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}

	public String getPublishedDate() {
		return publishedDate;
	}

	public void setPublishedDate(String publishedDate) {
		this.publishedDate = publishedDate;
	}

	public String getCallNumber() {
		return callNumber;
	}

	public void setCallNumber(String callNumber) {
		this.callNumber = callNumber;
	}
	
	public void printDetail() {
		System.out.println("isbn:"+getIsbn());
		System.out.println("title:"+getTitle());
		System.out.println("Author:"+getAuthor());
		System.out.println("Publisher:"+this.getPublisher());
		System.out.println("PublishedDate:"+this.getPublishedDate());
		System.out.println("CallNumber:"+this.getCallNumber());
		System.out.println("============");
	}
	 @Override
	    public String toString() {
	        return "제목: '" + title + '\'' +
	               ", 저자: '" + author + '\'' +
	               ", ISBN: '" + isbn + '\'';
	    }
	

}
