package com.office.ex;

import java.util.Scanner;

public class io_ex {

	public static void main(String[] args) {
		Boolean systemFlag = true;
		Scanner scanner = new Scanner(System.in);
		while(systemFlag) {
			System.out.print("1.정수입력, 2. 종료");
			int userSelectedMenu = scanner.nextInt();
			if(userSelectedMenu == 2) systemFlag = false;
		}
		System.out.println("프로그램 종료");
		scanner.close();

	}

}
