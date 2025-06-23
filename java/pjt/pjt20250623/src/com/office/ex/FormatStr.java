package com.office.ex;

public class FormatStr {
	public static void main(String[] args) {
		//형식문자열
		String name = "Mr. Hong";
		int	age = 20;
		System.out.printf("이름: %s, 나이: %d살이예요.\n", name, age );
		System.out.printf("이름: %s, 나이: %d살이예요.", name, age );
	}

}
