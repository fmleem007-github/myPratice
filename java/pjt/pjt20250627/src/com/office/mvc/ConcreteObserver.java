package com.office.mvc;

public class ConcreteObserver {

	public class NewsChannel implements Observer {
	    private String channelName;

	    public NewsChannel(String name) {
	        this.channelName = name;
	    }

	    @Override
	    public void update(String news) {
	        System.out.println("[" + channelName + "] Breaking News: " + news);
	    }
	}
