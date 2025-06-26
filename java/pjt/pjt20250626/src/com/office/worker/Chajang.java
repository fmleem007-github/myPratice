package com.office.worker;

public class Chajang {

	String name = "Kim Chajang";
	int money;
	
	public Chajang() {
		this.money = 3000000;
	}
	
	public void pay() {
		System.out.println(name + "님 노고에 감사드립니다.");
		System.out.println(money + "원 지급 완료!!");
	}
	
}
