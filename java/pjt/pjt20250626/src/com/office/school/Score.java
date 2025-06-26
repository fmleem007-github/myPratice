package com.office.school;

public class Score {

	// 총점 출력
	public void printTotalScore(int ...scores) {		// int[] scores = {70, 80, 100, 80, 65, 85}
		
//		int result = s1 + s2 + s3 + s4 + s5 + s6;
//		System.out.println("Total score: " + result);
		
		int result = 0;
		for (int score : scores) {
			result += score;
		}
		System.out.println("Total score: " + result);
		
	}
	
	// 평균 출력
	public void printAverageScore(int ...scores) {	   // int[] scores = {70, 80, 100, 80, 65, 85}
		
//		int result = s1 + s2 + s3 + s4 + s5 + s6;
//		System.out.println("Average score: " + ((double) result / 6));
		
		int result = 0;
		for (int score : scores) {
			result += score;
		}
		System.out.println("Average score: " + ((double) result/scores.length));
		
	}
	
}
