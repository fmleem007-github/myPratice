package com.office.lms;

public class Student {

	private String sId; 
	private String sName; 
	private String sMail; 
	private String sPhone;
	
	public Student() {
		
	}
	
	public Student(String sId, String sName, String sMail, String sPhone) {
		this.sId = sId;
		this.sName = sName;
		this.sMail = sMail;
		this.sPhone = sPhone;
	}
	
	public String getsId() {
		return sId;
	}
	public void setsId(String sId) {
		this.sId = sId;
	}
	public String getsName() {
		return sName;
	}
	public void setsName(String sName) {
		this.sName = sName;
	}
	public String getsMail() {
		return sMail;
	}
	public void setsMail(String sMail) {
		this.sMail = sMail;
	}
	public String getsPhone() {
		return sPhone;
	}
	public void setsPhone(String sPhone) {
		this.sPhone = sPhone;
	}
	
}
