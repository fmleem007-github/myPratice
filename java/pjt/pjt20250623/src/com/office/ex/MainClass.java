package com.office.ex;

import java.util.Scanner;

public class MainClass {
public static void main(String[] args) {
	// 데이터 입출력(I/O)
	// 1. 데이터 출력
	System.out.print("aaaaaaaaa");
	System.out.println("bbbbbbbbbb");
	String str = "Hello world!";
	System.out.print(str);
	// 2. 데이터 입력
	
	
	//true
	//trSystem.out.println("inputdata:" + inputdata);

	
// nextByte()
// nextInt()
// nextlong()
	
	Scanner scanner = new Scanner(System.in);
	System.out.print("aaaaaaaaa");
	Boolean inputdata = scanner.nextBoolean();
	System.out.println("inputdata:" + inputdata);
scanner.close();
}
}
