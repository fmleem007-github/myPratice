package com.office.ourschool;

public class NewStudent {

   // 속성
   int grade;            //(학년)
   int classNo;         //(반번호)
   int studentNo;         //(학생번호)
   String studentName;      //(학생이름)
   boolean isAbsence;      //(휴학구분)
   
   // 생성자
   public NewStudent(int grade, int classNo, 
         int studentNo, String studentName, boolean isAbsence) {
      System.out.println("[NewStudent] NEWSTUDENT CONSTRUCTOR!!");
      
      this.grade          = grade;
      this.classNo       = classNo;
      this.studentNo       = studentNo;
      this.studentName    = studentName;
      this.isAbsence       = isAbsence;
      
   }
   
   // 기능
   public void printInfo() {
      System.out.println("[NewStudent] printInfo()");
      
      System.out.println("Grade: "       + grade);
      System.out.println("ClassNo: "       + classNo);
      System.out.println("StudentNo: "    + studentNo);
      System.out.println("StudentName: "    + studentName);
      System.out.println("IsAbsence: "    + isAbsence);
      
   }
   
}
