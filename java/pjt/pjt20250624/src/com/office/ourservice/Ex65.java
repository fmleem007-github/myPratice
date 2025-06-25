package com.office.ourservice;

public class Ex65 {


		    public static void main(String[] args) {
		        for (int i = 10; i >= 1; i--) {         // 줄 수: 10부터 1까지 감소
		            for (int j = 1; j <= i; j++) {      // 각 줄마다 i개만큼 별 출력
		                System.out.print("*");
		            }
		            System.out.println();              // 줄 바꿈
		        }
		    }

	}
