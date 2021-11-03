package com.SpringBootTask.StudentData.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.SpringBootTask.StudentData.entity.Student;

public interface StudRepo extends MongoRepository<Student, String> 
{
	public List<Student> findByOrderByNameAsc();
}
