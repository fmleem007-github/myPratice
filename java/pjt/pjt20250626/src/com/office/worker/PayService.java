package com.office.worker;

public class PayService {

	Daeri daeri = null;
	Gwajang gwajang = null;
	Chajang chajang = null;
	PayCount payCount = null;
	
	public PayService() {
		this.daeri = new Daeri();
		
		this.daeri = null;
		
		this.gwajang = new Gwajang();
		this.chajang = new Chajang();
//		this.payCount = new PayCount();
		this.payCount = PayCount.getPayCountInstance();
		
		// payCount.setCnt();
		
	}
	
	public void pay(int month) {
		this.daeri.pay();		// 대리 월급 지급!
//		this.payCount.setCnt();
		
		this.payCount = PayCount.getPayCountInstance();
		this.payCount.setCnt();
		
//		PayCount payCount1 = new PayCount();
//		payCount1.setCnt();
		
//		payCount.setCnt();
		this.gwajang.pay();		// 과장 월급 지급!
//		this.payCount.setCnt();
		
		this.payCount = PayCount.getPayCountInstance();
		this.payCount.setCnt();
		
//		PayCount payCount2 = new PayCount();
//		payCount2.setCnt();
		
		
//		payCount.setCnt();
		this.chajang.pay();		// 차장 월급 지급!
//		this.payCount.setCnt();
		
		this.payCount = PayCount.getPayCountInstance();
		this.payCount.setCnt();
		
//		PayCount payCount3 = new PayCount();
//		payCount3.setCnt();
		
//		payCount.setCnt();
		
		System.out.println(month + "월 급여 지급 완료!!");
		System.out.println("누적 급여 지급 횟수: " + payCount.getCnt());
		
	}
	
}
