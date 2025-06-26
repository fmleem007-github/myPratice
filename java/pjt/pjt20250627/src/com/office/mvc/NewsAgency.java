package com.office.mvc;
public class NewsChannel implements Observer {
    private String channelName;
    private String latestNews;

    public NewsChannel(String name) {
        this.channelName = name;
    }

    @Override
    public void update(String news) {
        this.latestNews = news;
        System.out.println("[" + channelName + "] Breaking News: " + news);
    }

    public String getLatestNews() {
        return latestNews;
    }
}
