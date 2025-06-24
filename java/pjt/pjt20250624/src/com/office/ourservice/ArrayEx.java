package com.office.ourservice;
//import java.util.Arrays;
import java.util.Random;


public class ArrayEx {

	public static void main(String[] args) {
		String str = "";
		Random rand = new Random();

              // 3차원배열
		//학생(1,2,3,4),학기(1,2,3학기), 과목(국어,영어,수학)
		int[][][] scores = new int[4][3][3];
		String[] student = {"길동", "찬호", "흥민", "강인"};
		
		for(int i=0; i< scores.length; i++) {
			System.out.printf("학생:%s%n",student[i]);
			for(int j=0; j < scores[i].length; j++) {
				System.out.printf("%d 학기%n",j+1);
				for(int k=0; k < scores[j].length; k++) {
					switch(k) {
					
					case 0:
						str = "국어";
						break;
					case 1:
						str = "영어";
						break;
					case 2:
						str = "수학";
						break;
					}
//					System.out.println("학생:"+student[i]);
					scores[i][j][k] = rand.nextInt(50)+50;
					System.out.printf("%s : %d점%n", str,scores[i][j][k] );
				}
			}
		}
	
	}
}
