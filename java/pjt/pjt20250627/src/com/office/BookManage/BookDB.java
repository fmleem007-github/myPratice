package com.office.BookManage;

import java.util.HashMap;
import java.util.Map;

public class BookDB {

	// 속성
	HashMap<String, Book> books = null;

	// 생생자
	public BookDB() {

		books = new HashMap<>();
		// 샘플 도서 10권 추가
		books.put("978-89-001-0001-1",
				new Book("978-89-001-0001-1", "자바의 정석", "남궁성", "도우출판", "2022-01-15", "005.133 Java1"));

		books.put("",
				new Book("978-89-001-0002-8", "혼자 공부하는 파이썬", "윤인성", "한빛미디어", "2021-07-20", "005.133 Python1"));

		books.put("978-89-001-0003-5",
				new Book("978-89-001-0003-5", "Do it! HTML+CSS", "정동현", "이지스퍼블리싱", "2023-03-10", "005.72 HTML1"));

		books.put("2",
				new Book("978-89-001-0004-2", "코딩 자율학습 스프링 부트 3", "김영한", "길벗", "2023-08-25", "005.76 Spring1"));

		books.put("978-89-001-0005-9",
				new Book("978-89-001-0005-9", "모던 자바스크립트 Deep Dive", "이웅모", "위키북스", "2022-06-30", "005.138 JS1"));

		books.put("1",
				new Book("978-89-001-0006-6", "이펙티브 자바", "조슈아 블로크", "인사이트", "2018-11-01", "005.133 Java2"));

		books.put("978-89-001-0007-3",
				new Book("978-89-001-0007-3", "리눅스 커맨드라인 완벽 입문", "윤성우", "프리렉", "2020-09-05", "005.432 Linux1"));

		books.put("978-89-001-0008-0",
				new Book("978-89-001-0008-0", "알고리즘 문제 해결 전략", "구종만", "인사이트", "2019-12-20", "005.1 Algorithm1"));

		books.put("978-89-001-0009-7",
				new Book("978-89-001-0009-7", "클린 코드", "로버트 C. 마틴", "인사이트", "2013-12-24", "005.12 Clean1"));

		books.put("978-89-001-0010-3",
				new Book("978-89-001-0010-3", "데이터 과학 입문", "권재명", "한빛아카데미", "2023-02-28", "005.7 DataScience1"));
	}

	// 생생자

	// 기능
	public void printAllBooks() {
		if (this.books.isEmpty()) {
			System.out.println("No books in the database.");
		} else {
			for (Map.Entry<String, Book> entry : this.books.entrySet()) {
//				System.out.println("ISBN: " + entry.getKey() + ", Details: " + entry.getValue());
				Book book = this.books.get(entry.getKey());
				book.printDetail();
			}
		}

	}

//책을 추가하는 메소드
	public void addBook(String isbn, Book book) {
		this.books.put(isbn, book);
		book.printDetail();
		System.out.println("Added book: " + book.getTitle() + " with ISBN: " + isbn);
	}

// ISBN으로 책을 조회하는 메소드
	public Book getBook(String isbn) {
		Book book = this.books.get(isbn);
		if( book != null) {
		book.printDetail();
		}
		else {
			System.out.println(isbn + "not found");
		}
		return book;
	}

// 책을 삭제하는 메소드
	public void removeBook(String isbn) {
		if (this.books.containsKey(isbn)) {
			Book removed = this.books.remove(isbn);
			System.out.println("Removed book: " + removed.getTitle() + " (ISBN: " + isbn + ")");
		} else {
			System.out.println("Book with ISBN " + isbn + " not found.");
		}
	}

// 전체 책 목록을 출력하는 메소드 (예시)
	public void listAllBooks() {
		System.out.println("\n--- Current Books in DB ---");
		if (this.books.isEmpty()) {
			System.out.println("No books in the database.");
		} else {
			for (Map.Entry<String, Book> entry : this.books.entrySet()) {
				System.out.println("ISBN: " + entry.getKey() + ", Details: " + entry.getValue());
			}
		}
		System.out.println("---------------------------\n");
	}
}

//Book book = new Book}
