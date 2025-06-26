package com.office.worker;

public class Gwajang {

	String name = "Kim Gwajang";
	int money;
	
	public Gwajang() {
		this.money = 2000000;
	}
	
	public void pay() {
		System.out.println(name + "님 노고에 감사드립니다.");
		System.out.println(money + "원 지급 완료!!");
	}
}
