package com.office.service;

public class Car {

	// 속성
	String color;		// 색상
	int length;			// 길이
	int price;			// 가격
	int dispalcement;	// 배기량
	
	// 생성자 오버로딩(Overloading)
	public Car(String color, int length, 
			int price, int dispalcement) {
		
		this.color = color;
		this.length = length;
		this.price = price;
		this.dispalcement = dispalcement;
		
	}
	
//	public static void printHello() {
//		System.out.println("Hello");
//		
//	}
	
	// 기능(메서드)
	public double goForward(int speed, int hour) {  // int speed = 30;
		System.out.println("[Car] goForward()");
		// 속도
		
//		return "30km/h";
//		return 30;
		
//		System.out.println("[Car] goForward()");
		
		/*
		if (length > 10) {
			return 10;
		} else {
			return 30;
		}
		*/
//		return 20;
		
//		System.out.println(speed);
//		System.out.println(hour);
//		
//		double distance = speed * hour;
//		return distance;
		
		/*
		 * 제한속도(30km/h) 초과인 경우 전진(주행) 금지!
		 * 그렇지 않으면 전진(주행) 후 이동거리 반환!
		 */
		
		if(true) return 0;
		
		double distance = 0;
		if (speed > 30) {
			System.out.println("제한속도 30에 걸렸어요. 주행 할수 없어요!");
			return distance;
		}
		
		distance = speed * hour;
		return distance;
		
		
	}
	
	public void goBack() {
		System.out.println("[Car] goBack()");
		
	}
	
	public void testCar() {
		System.out.println("[Car] testCar()");
//		this.goForward();
		goBack();
	}
	
}
