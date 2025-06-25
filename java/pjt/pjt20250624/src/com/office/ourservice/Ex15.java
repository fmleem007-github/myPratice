package com.office.ourservice;
//15. 실행 결과가 다음과 같이 나올 수 있도록 프로그래밍 하자!
//num3 + num4: 3.263
//num3 + num4: 3.140.123
//num3 + num4: 3
public class Ex15 {

	public static void main(String[] args) {
		float num3 = 3.14f;
		float num4 = 0.123f;
		
		System.out.printf("num3 + num4: %.3f%n", num3+num4);
		System.out.printf("num3 + num4: %.2f%4.3f%n", num3,num4);
		System.out.printf("num3 + num4: %d%n", (int)num3, (int)num4);
	}

}
