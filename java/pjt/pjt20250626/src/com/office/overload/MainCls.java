package com.office.overload;

public class MainCls {

	public static void main(String[] args) {
		
		Greet greet = new Greet();
//		greet.printGreetWord();
//		greet.printGreetWordByName("찬호");
		
		greet.printGreetWord();
		greet.printGreetWord("찬호");
		
		System.out.println(10);
		
	}
	
}