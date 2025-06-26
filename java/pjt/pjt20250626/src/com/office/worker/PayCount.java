package com.office.worker;

public class PayCount {

	private static PayCount payCount = null;
	private int cnt = 0;	// 누적 횟수
	
	private PayCount() {
		
	}

	public int getCnt() {
		return cnt;
	}

	public void setCnt() {
		this.cnt++;
	}
	
	public static PayCount getPayCountInstance() {
//		return new PayCount();
		if (payCount == null) {
			payCount = new PayCount();
		}
		
		return payCount;
		
	}
	
}
