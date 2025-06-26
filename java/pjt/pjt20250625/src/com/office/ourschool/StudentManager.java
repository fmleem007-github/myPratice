package com.office.ourschool;

public class StudentManager {
   
   // 데이터타입[] 배열변수명 = new 데이터타입[배열의길이]
   
   // 속성
   NewStudent[] students = new NewStudent[2];
   int idx;
   
   // 생성자
   public StudentManager() {
	   idx = 0;
   }
   
   // 기능
   public void printStudentInfo(int idx) {
	   if(idx >= (students.length - 1))
	   {
		   System.out.printf(" idx는%d보다 작거나 같아야 됩니다.", (students.length - 1));
      System.out.println("[StudentManager] printStudentInfo()");
      students[idx].printInfo();
	   }
      
   }
   
   public void printAllStudentInfo() {
      System.out.println("[StudentManager] printAllStudentInfo()");
      for (int i = 0; i < students.length; i++) {
         students[i].printInfo();
      }
   }
   
   public void addNewStudentAtStudents( NewStudent newStudent) {
	   if(idx < (students.length-1)) {
		   idx++;
	   }
      this.students[idx] = newStudent;
      
   }
   
}
