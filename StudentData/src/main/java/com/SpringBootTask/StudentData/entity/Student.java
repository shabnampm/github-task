package com.SpringBootTask.StudentData.entity;


import java.util.Locale;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "student_data")
public class Student 
{
	public static final String Sequences_name="stud_seq";
	@Id
	private String id;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public String getCls() {
		return cls;
	}
	public void setCls(String cls) {
		this.cls = cls;
	}
	public String getDiv() {
		return div;
	}
	public void setDiv(String div) {
		this.div = div;
	}
	public String getGen() {
		return gen;
	}
	public void setGen(String gen) {
		this.gen = gen;
	}
	private String name;
	public Locale getDob() {
		return dob;
	}
	public void setDob(Locale dob) {
		this.dob = dob;
	}
	private Locale dob;
	
	private String cls;
	private String div;
	private String gen;
	

}
