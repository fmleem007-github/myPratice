package com.office.school;

public class MainCls {

	public static void main(String[] args) {
		
		// 우리 학급에 6명의 학생 있다.
		// 선생님께서 6명의 총점과 평균을 알고 싶어한다.
		
		Score score = new Score();
		score.printTotalScore(70, 80, 100, 80, 65);
		score.printAverageScore(70, 80, 100, 80, 65);
		
	}
	
}
