package com.office.mvc;
//Concrete Observer (View 역할)
public class NewsChannel implements Observer {
 private String news;

 @Override
 public void update(String news) {
     this.news = news;
     System.out.println("News updated: " + news);
 }
}
