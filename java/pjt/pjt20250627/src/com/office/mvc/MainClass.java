package com.office.mvc;

public class ObserverDemo {
    public static void main(String[] args) {
        NewsAgency agency = new NewsAgency();

        Observer channel1 = new NewsChannel("KBS");
        Observer channel2 = new NewsChannel("MBC");

        agency.registerObserver(channel1);
        agency.registerObserver(channel2);

        agency.setNews("태풍 '솔릭' 북상 중");
        agency.setNews("자바 디자인 패턴 강의 중");
    }
}
