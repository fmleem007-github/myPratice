package com.office.ourservice;

public class ex09 {

    public static void main(String[] args) {

        // 9. 삼각형의 넓이
        double width = 20.0;
        double height = 15.0;

        double triangleArea = (width * height) / 2;
        System.out.println("삼각형 넓이: " + triangleArea + " cm²");

        // 10. 사각형의 넓이
        double rectangleArea = width * height;
        System.out.println("사각형 넓이: " + rectangleArea + " cm²");

        // 11. 값 변경 후 출력
        width = 12.5;
        height = 9.3;

        triangleArea = (width * height) / 2;
        rectangleArea = width * height;

        System.out.println("변경된 삼각형 넓이: " + triangleArea + " cm²");
        System.out.println("변경된 사각형 넓이: " + rectangleArea + " cm²");
    }
}
