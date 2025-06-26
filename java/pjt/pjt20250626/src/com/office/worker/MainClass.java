package com.office.worker;

public class MainClass {
	
	public static void main(String[] args) {
		
		PayController controller = new PayController();
		controller.execute();
		
		/*
		 * 접근 제어자(제한자)
		 * private : 클래스 내부에서만 접근 가능
		 * default: private + 같은 패키지 내에서 접근 가능
		 * protected: default + 상속 관계일 대 자식 클래스에서 접근 가능
		 * public: 누구나 접근 가능
		 */
	}
	
}
