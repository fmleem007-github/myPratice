package com.office.BookManage;

import java.util.Scanner;

public class MainClass {
	public static Scanner scanner = new Scanner(System.in);
	public static void main(String[] args) {
		LibController libController = new LibController();	
//BookDB bookDB = new BookDB();
//bookDB.printAllBooks();
	boolean systemFlag = true;
	int selectedMenu;
		
		while(systemFlag) {
			System.out.println("1.도서관선택 99.시스템종료");
			
			selectedMenu = scanner.nextInt();
			if(selectedMenu== 99) {
				systemFlag = false;
			}
			else if(selectedMenu== 1){
				// 도서관 선택 1.A도서관 2.B도서관 99.시스템종료
				libController.LibSevice();
				
			}

		

		//1.도서등록 2. 도서조회 3. 전체도서조회 4.도서업데이트 5.도서삭제 99.도서관 선택
		}
		System.out.println("SAY GOODBYE!!!");
		scanner.close();

	}

}
