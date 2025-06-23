package com.office.ex;

import java.util.Scanner;

public class Loop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// 1.for 횟수에 의한 반복
		Scanner scanner = new Scanner(System.in);
		System.out.print("반복횟수 입력:");
		int loopCnt = scanner.nextInt();

		for (int i = 0; i < loopCnt; i++) {
			System.out.println("Hello");
		}
		scanner.close();
	
		// 2.while

	}

}
