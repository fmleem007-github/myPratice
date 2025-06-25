package com.office.ourschool;

import java.util.Scanner;

public class MainClass {

   public static void main(String[] args) {
      
      final int OPERATE       = 1;
      final int SHOW_HISTORY  = 2;
          final int SYSTEM_OUT = 99;
          
         final int OPER_ADD = 1;
         final int OPER_SUB = 2;
         final int OPER_MUL = 3;
         final int OPER_DIV = 4;
      
      boolean systemFlag = true;
      Scanner scanner = new Scanner(System.in);
      
      History history = new History();
      while (systemFlag) {
         // 메뉴(1.연산   2.히스토리보기   3.전체학생정보출력   99.시스템종료)
         System.out.println("1.연산  2.히스토리  99.시스템종료");
         
         int selectedMunuNum = scanner.nextInt();
         switch (selectedMunuNum) {
         case OPERATE:
        	 System.out.println("숫자1");
        	 int num1 = scanner.nextInt(); 
        	 System.out.println("숫자2");
        	 int num2 = scanner.nextInt(); 
        	 System.out.println("연산 1.덧셈 2.뺄셈 3.곱셈 4.나눗셈");
        	 int oper = scanner.nextInt(); 
        	 
        	 switch(oper) {
        	 case OPER_ADD:
        		 new Calculator( num1, num2).add(history);
        		 break;
        	 case OPER_SUB:
        		 new Calculator( num1, num2).sub(history);
        		 break;
        	 case OPER_MUL:
        		 new Calculator( num1, num2).mul(history);
        		 break;
        	 case OPER_DIV:
        		 new Calculator( num1, num2).div(history);
        		 break;
        	 }
            
         
            
            break;

         case SHOW_HISTORY:
           history.showHistory();
            break;

         case SYSTEM_OUT:
            systemFlag = false;
            System.out.println("SAY GOOD BYE~");
            break;

         }
         
      }
      
      scanner.close();
      
   }
   
}
