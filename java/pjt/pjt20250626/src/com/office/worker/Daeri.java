package com.office.worker;

public class Daeri {

	private String name = "Kim Daeri";
	private int money;
	
	public Daeri() {
		this.money = 1000000;
	}
	
	public void pay() {
		System.out.println(name + "님 노고에 감사드립니다.");
		System.out.println(money + "원 지급 완료!!");
	}

}
