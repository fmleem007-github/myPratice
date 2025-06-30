package com.office.BookManage;

public class Library {
	
	final static int BOOK_REGIST = 1;
	final static int BOOK_SEARCH = 2;
	final static int BOOK_ALL_SEARCH = 3;
	final static int BOOK_UPDATE = 4;
	final static int BOOK_DELETE = 5;
	final static int SYSTEM_OUT = 99;
	
	BookDB bookDB = new BookDB();
	
	
	public Library() {
		super();
	}


	// 1.도서등록 2. 도서조회 3. 전체도서조회 4.도서업데이트 5.도서삭제 99.도서관 선택
	public void LibService() {
		boolean workFlag = true;
		int	selMenu;
		
		while(workFlag) {
			System.out.println("1.도서등록 2. 도서조회 3. 전체도서조회 4.도서업데이트 5.도서삭제  99.시스템종료");
			selMenu = MainClass.scanner.nextInt();
			
			switch(selMenu) {
			case BOOK_REGIST:
				System.out.println("ISBN");
				MainClass.scanner.nextLine();
				String isbn=MainClass.scanner.nextLine();
				//System.out.println("isbn"+isbn);
				System.out.println("도서명");
				String title=MainClass.scanner.nextLine();
				System.out.println("저자");
				String author=MainClass.scanner.nextLine();
				System.out.println("출판사");
				String publisher=MainClass.scanner.nextLine();
				System.out.println("발행일");
				String publishedDate=MainClass.scanner.nextLine();
				System.out.println("청구번호");
				String callNumber=MainClass.scanner.nextLine();
				Book newBook = new Book(
						isbn,
						title,
						author,
						publisher,
						publishedDate,
						callNumber );
				System.out.println("isbn"+isbn);
				bookDB.addBook(isbn, newBook);
				newBook.printDetail();
				//bookDB.addBook(isbn, newBook);
//				// 생성자
//				BookRegist();
				break;
			case BOOK_SEARCH:
				System.out.println("ISBN");
				MainClass.scanner.nextLine();
				isbn=MainClass.scanner.nextLine();
				BookSearch(isbn);
			break;
			case BOOK_ALL_SEARCH:
				bookDB.printAllBooks();
			break;
			case BOOK_UPDATE:
				System.out.println("ISBN");
				MainClass.scanner.nextLine();
				isbn=MainClass.scanner.nextLine();
				BookUpdate(isbn);
			break;
			case BOOK_DELETE:
				System.out.println("ISBN");
				MainClass.scanner.nextLine();
				isbn=MainClass.scanner.nextLine();
				BookDelete(isbn);
			break;
			case SYSTEM_OUT:
			workFlag = false;
			break;
			}
	}

}
	public void BookRegist() {
		System.out.println("BookRegist");
	}

	public void BookSearch(String isbn) {
		System.out.println("BookSearch");
//		isbn=MainClass.scanner.nextLine();
		Book book = bookDB.getBook(isbn);
		if( book != null ){
		//book.printDetail();
		book.toString();
		}
	}
	public void BookAllSearch() {
		System.out.println("BookAllSearch");
	}
	public void BookUpdate(String isbn) {
		System.out.println("BookUpdate");
	}
	public void BookDelete(String isbn) {
		System.out.println("BookDelete");
		bookDB.removeBook(isbn);
	}
}
