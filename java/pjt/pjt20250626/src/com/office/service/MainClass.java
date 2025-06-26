package com.office.service;

public class MainClass {

	// public        double   goForward()
	// public static void     main(String[] args)
	
	public static void main(String[] args) {
		
		// 클래스 > new 객체를 생성 in 메모리
		// 생성자, 속성, 메서드
		// 메서드(함수): 기능
		
//		Car car = new Car("red", 2, 5000, 2000);
//		car.goForward();
//		car.goBack();
		
		// 메서드 이름은 개발자가 직접 작명한다.
		// 대문자로 시작해도 되나 일반적으롤 소문자로 시작한다.
		// 숫자를 사용해도 되지만, 숫자를 첫 글자에 사용할 수는 없다.
		// 특수문자는 사용할 수 없다.(단, '_' & '$'는 사용할 수 있다.)
		// 두개 이상의 단어가 조합되는 경우 카멜표시법을 사용하자!
		/*
		 * doreservation() -> doReservation()
		 * upscore() -> upScore()
		 * getcurrentlocationlatitude() -> getCurrentLocationLatitude()
		 */
		// 동사 + 목적어
		// print + Student + Score = printStudentScore()
		
		// 메서드는 메서드 안에서 또 다른 메서드를 호출할 수도 있다.
//		car.testCar();
		
		// return 키워드: 메서드 선언부에서 호출부로 데이터를 반환할 때 사용한다.
//		int speed = car.goForward();
//		System.out.println("speed: " + speed);
		
		// 호출부에서 선언부로 데이터를 전달하는 방법: 파라미터(parameter)
//		double dis = car.goForward(35, 2);
//		System.out.println("이동거리: " + dis);
		
//		Car.printHello();
		
		
	}
	
}
