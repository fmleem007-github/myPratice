package com.office.ourservice;
import java.util.Scanner;
//96. 수입과 공과금을 입력하면 공과금 총액과 수입 대비 공과금 비율을 계산하는 프로그램을 만들어보자.
public class ex96 {
	static Scanner scanner = new Scanner(System.in);

		    public static void main(String[] args) {
	        // 입력 (예시 하드코딩)
	        int income = 3000000;
	        int waterBill = 15000;
	        int electricBill = 17500;
	        int gasBill = 125000;
	        //
	        System.out.print("수입 입력:" );
	        income = scanner.nextInt();
	 	    System.out.print("수도요금 입력:" );
	 	    waterBill = scanner.nextInt();
	        System.out.print("전기요금 입력:");
	        electricBill = scanner.nextInt();
	        System.out.print("가스요금 입력:");
	        gasBill = scanner.nextInt();

	        // 계산
	        int totalUtility = waterBill + electricBill + gasBill;
	        double utilityRatio = (double) totalUtility / income * 100;

	        // 출력
	        System.out.println("수입 입력: " + String.format("%,d", income));
	        System.out.println("수도요금 입력: " + String.format("%,d", waterBill));
	        System.out.println("전기요금 입력: " + String.format("%,d", electricBill));
	        System.out.println("가스요금 입력: " + String.format("%,d", gasBill));
	        System.out.println("---------------------------------------");
	        System.out.println("공과금 총액: " + String.format("%,d", totalUtility));
	        System.out.printf("공과금 비율: %.2f%%\n", utilityRatio);
	    }
	}

