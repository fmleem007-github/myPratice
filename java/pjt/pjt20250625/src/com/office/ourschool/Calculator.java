package com.office.ourschool;


public class Calculator {
	int num1,num2;
	public Calculator(int num1, int num2) {
	this.num1 = num1;
	this.num2 = num2;
}
public void add(History history) {
	String result = String.format("%d + %d = %d\n", num1, num2, num1 + num2);
	System.out.println(result);
	history.addHistory(result);
}
public void sub(History history) {
	String result = String.format("%d - %d = %d\n", num1, num2, num1 - num2);
	System.out.println(result);
	history.addHistory(result);
}
public void mul(History history) {
	String result = String.format("%d * %d = %d\n", num1, num2, num1 * num2);
	System.out.println(result);
	history.addHistory(result);
}
public void div(History history) {
	String result = String.format("%d/+ %d = %d\n", num1, num2, num1 / num2);
	System.out.println(result);
	history.addHistory(result);
}
}
