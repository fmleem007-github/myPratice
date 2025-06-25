package com.office.ourservice;

import java.util.Scanner;

//94. 다음과 같이 출력 될 수 있도록 비행기 티켓 영수증 출력 프로그램을 만들어 보자.
public class ex94 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		 // 가격 설정
        int childPrice = 18000;
        int infantPrice = 25000;
        int adultPrice = 50000;

        // 인원수 입력
        System.out.print("유아입력:");
        int infant = scanner.nextInt();
        System.out.print("할인대상유아입력:");
        int discountInfant = scanner.nextInt();

        System.out.print("소아입력:");
        int child = scanner.nextInt();
        System.out.print("할인대상소아입력:");
        int discountChild = scanner.nextInt();

        System.out.print("성인입력:");
        int adult = scanner.nextInt();
        System.out.print("할인대상성인입력:");
        int discountAdult = scanner.nextInt();

        // 계산
        int normalInfant = infant - discountInfant;
        int normalChild = child - discountChild;
        int normalAdult = adult - discountAdult;

        int totalInfantPrice = normalInfant * infantPrice + discountInfant * infantPrice / 2;
        int totalChildPrice = normalChild * childPrice + discountChild * childPrice / 2;
        int totalAdultPrice = normalAdult * adultPrice + discountAdult * adultPrice / 2;

        int totalPeople = infant + child + adult;
        int totalPrice = totalInfantPrice + totalChildPrice + totalAdultPrice;

        // 출력
        System.out.println("========================================");
        System.out.printf("유아 1명 요금: %,d원\n", infantPrice);
        System.out.printf("유아 (할인 대상 1명 요금): %,d원\n", infantPrice / 2);
        System.out.printf("소아 요금: %,d원\n", childPrice);
        System.out.printf("소아 (할인 대상 1명 요금): %,d원\n", childPrice / 2);
        System.out.printf("성인 요금: %,d원\n", adultPrice);
        System.out.printf("성인 (할인 대상 2명 요금): %,d원\n", adultPrice / 2);
        System.out.println("========================================");

        System.out.printf("Total: %d명\n", totalPeople);
        System.out.printf("TotalPrice : %,d원\n", totalPrice);
        System.out.println("========================================");
        scanner.close();
	}

}
