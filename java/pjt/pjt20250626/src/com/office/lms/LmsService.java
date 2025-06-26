package com.office.lms;

import java.util.HashMap;

public class LmsService {

//	LmsDB lmsDB = new LmsDB();
	
	// 학생 정보 등록 기능
	public void registStudnet(Student student) {
		
		// 아이디 중복 체크
		LmsDB lmsDB = LmsDB.getLmsDBInstance();
		Student selectedStudent 
			= lmsDB.selectStudent(student.getsId());	// null || Student
		
		if (selectedStudent != null) {
			System.out.println("INSERT STUDENT FAIL!!");
			return;
		}
		
		lmsDB.insertStudent(student);
		System.out.println("INSERT STUDENT SUCCESS!!");
		
	}

	// 학생 정보 조회
	public void searchStudent(String sId) {
		
		LmsDB lmsDB = LmsDB.getLmsDBInstance();
		Student selectedStudent = lmsDB.selectStudent(sId);
		
		if (selectedStudent != null) {
			System.out.println("ID: " + selectedStudent.getsId());
			System.out.println("Name: " + selectedStudent.getsName());
			System.out.println("Mail: " + selectedStudent.getsMail());
			System.out.println("Phone: " + selectedStudent.getsPhone());
			return;
		}
		
		System.out.println("IS NOT STUDENT!!");
		
	}

	// 전체 학생 정보 조회
	public void searchAllStudents() {
		LmsDB lmsDB = LmsDB.getLmsDBInstance();
		HashMap<String, Student> studentDB 
				= lmsDB.getStudentDB();
		
		for (String sId : studentDB.keySet()) {
			Student student = studentDB.get(sId);
			System.out.println("=================================");
			System.out.println("ID: " + student.getsId());
			System.out.println("Name: " + student.getsName());
			System.out.println("Mail: " + student.getsMail());
			System.out.println("Phone: " + student.getsPhone());
			System.out.println("=================================");
		}
		
	}

	public void removeStudent(String sId) {
		
		LmsDB lmsDB = LmsDB.getLmsDBInstance();
		boolean isDelete = lmsDB.deleteStudent(sId);
		
		if (isDelete) {
			System.out.println("DELETE STUDENT SUCCESS!!");
		} else {
			System.out.println("DELETE STUDENT FAIl!!");
		}
		
		
	}
	
}
