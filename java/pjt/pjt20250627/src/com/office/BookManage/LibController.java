package com.office.BookManage;

public class LibController {
	Library library1 = new Library();
	Library library2 = new Library();
	
	public void LibSevice( ) {
		
		boolean workFlag = true;
		int	selMenu;
		
		while(workFlag) {
			System.out.println("도서관 선택 1.A도서관 2.B도서관 99.시스템종료");
			selMenu = MainClass.scanner.nextInt();
			
			switch(selMenu) {
			case 1:
				library1.LibService();
				break;
			case 2:
				library2.LibService();
				break;
			case 99:
				workFlag = false;
				break;
			}
		}
		
	}

}
