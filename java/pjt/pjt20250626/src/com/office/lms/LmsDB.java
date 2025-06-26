package com.office.lms;

import java.util.HashMap;

public class LmsDB {

	private static LmsDB lms_db = null;
	private HashMap<String, Student> studentDB = new HashMap<String, Student>();
	
	private LmsDB() {
		
	}
	
	public static LmsDB getLmsDBInstance() {
		if (lms_db == null) {
			lms_db = new LmsDB();
		}
		
		return lms_db;
	}
	
	// 학생 정보 등록 in DB
	public void insertStudent(Student student) {
		
		if (Config.IS_DEV) {
			System.out.println("ID: " + student.getsId());
			System.out.println("NAME: " + student.getsName());
			System.out.println("MAIL: " + student.getsMail());
			System.out.println("PHONE: " + student.getsPhone());
			
		}
		
		studentDB.put(student.getsId(), student);
		
	}

	public Student selectStudent(String sId) {
		return studentDB.get(sId);
		
	}

	public HashMap<String, Student> getStudentDB() {
		return studentDB;
	}

	public boolean deleteStudent(String sId) {
		return (studentDB.remove(sId) != null) ? true : false;
		
	}
	
}
