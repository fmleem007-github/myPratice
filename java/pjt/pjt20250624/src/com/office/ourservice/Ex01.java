package com.office.ourservice;

import java.util.Scanner;

//자신의 이름, 나이, 주소, 연락처, 메일 주소를 변수에 저장하고 화면에 출력해 보자
public class Ex01 {

	public static void main(String[] args) {
		String name;
//		String address;
		String phone;
		String mail;
		int age;
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("이름:");
		name = scanner.nextLine();
		System.out.print("나이:");
		age = scanner.nextInt();
		System.out.print("연락처:");
		phone = scanner.nextLine();
		System.out.print("메일 주소:");
		mail = scanner.nextLine();
	
		
		System.out.println("이름:"+name);
		System.out.println("나이:"+age);
		System.out.println("연락처:"+phone);
		System.out.println("메일 주소:"+mail);
		
		scanner.close();

	}

}
