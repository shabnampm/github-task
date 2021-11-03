package com.SpringBootTask.StudentData.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.SpringBootTask.StudentData.Services.StudServices;
import com.SpringBootTask.StudentData.entity.Student;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class studController
{
	@Autowired
	StudServices ss;
	@RequestMapping(value = "/save" , method = RequestMethod.POST)
	public Student getStudent(@RequestBody Student s)
	{
		return ss.saveStud(s);
	}
	
	@RequestMapping(value = "/view", method = RequestMethod.GET)
	public List<Student> getAllStudents()
	{
		return ss.viewStudent();
	}
}
