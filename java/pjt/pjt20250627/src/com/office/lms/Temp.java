package com.office.lms;

import java.util.HashMap;

public class Temp {

	public static void main(String[] args) {
		
		// map: key, value
		// HashMap: key, value
		
		HashMap<String, Student> hashMap = new HashMap<String, Student>();
		
		Student student = new Student();
		student.setsId("gildong");
		student.setsName("홍길동");
		student.setsMail("gildong@gmail.com");
		student.setsPhone("010-1234-5678");
		
		hashMap.put("gildong", student);
		
		Student student2 = hashMap.get("gildong");
		System.out.println(student2.getsId());
		System.out.println(student2.getsName());
		System.out.println(student2.getsMail());
		System.out.println(student2.getsPhone());
		
	}
	
}
