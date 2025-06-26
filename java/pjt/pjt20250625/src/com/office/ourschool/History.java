package com.office.ourschool;

public class History {
	
	String history = "";
	
	public void addHistory( String result) {
		history = history + result;
	}
	public void showHistory() {
		System.out.println(history);
	}

}
