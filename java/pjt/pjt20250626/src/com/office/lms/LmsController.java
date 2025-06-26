package com.office.lms;

import java.util.Scanner;

public class LmsController {

	public void execute() {
		
		boolean systemFlag = true;
		Scanner scanner = new Scanner(System.in);
		
		String sId		= null;
		String sName	= null;
		String sMail	= null;
		String sPhone	= null;
		
		LmsService lmsService = new LmsService();
		
		while (systemFlag) {
			
			System.out.println("1.학생 등록  2.학생 조회  3.전체 학생 조회  4.학생 업데이트  5.학생 삭제  99.종료");
			int selectedMenuNum = scanner.nextInt();  // \n
			switch (selectedMenuNum) {
			case Config.STUDENT_REGIST:
				
				// 학생ID, 학생이름, 학생메일, 학생연락처
				System.out.println("학생ID 입력: ");
				scanner.nextLine();
				sId = scanner.nextLine();
				
				System.out.println("학생이름 입력: ");
				sName = scanner.nextLine();
				
				System.out.println("학생메일 입력: ");
				sMail = scanner.nextLine();
				
				System.out.println("학생연락처 입력: ");
				sPhone = scanner.nextLine();

				Student student = new Student(sId, sName, sMail, sPhone);
//				lmsService = new LmsService();
				lmsService.registStudnet(student);
				
				break;
			case Config.STUDENT_SEARCH:
				
				System.out.println("학생ID 입력: ");
				scanner.nextLine();
				sId = scanner.nextLine();
				
//				lmsService = new LmsService();
				lmsService.searchStudent(sId);
				
				break;
			case Config.STUDENT_ALL_SEARCH:
				
				lmsService.searchAllStudents();
				
				break;
			case Config.STUDENT_UPDATE:
				
				
				
				break;
			case Config.STUDENT_DELETE:
		
				System.out.println("학생ID 입력: ");
				scanner.nextLine();
				sId = scanner.nextLine();
				lmsService.removeStudent(sId);
				
				break;
			case Config.SYSTEM_OUT:
				systemFlag = false;
				System.out.println("Good Bye~");
				break;

			}
			
		}
		
		scanner.close();
		
	}
	
}
