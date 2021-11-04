package com.SpringBootTask.StudentData.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.SpringBootTask.StudentData.entity.CustomSeq;
import com.SpringBootTask.StudentData.entity.Student;
import com.SpringBootTask.StudentData.repo.StudRepo;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.List;


@Service
public class StudServices 
{
	@Autowired
	StudRepo sr;
	
	@Autowired
	StudServices ss;
	
	@Autowired
	private MongoOperations mongo;
	
	 public int getNextSequence(String seqName)
	    {
	       
	CustomSeq counter = mongo.findAndModify(
	            query(where("_id").is(seqName)),
	            new Update().inc("sqe",1),
	            options().returnNew(true).upsert(true),
	            CustomSeq.class);
	        return counter.getSqe();
	    }
	public Student saveStud(Student s)
	{
		String s1=String.valueOf(ss.getNextSequence(Student.Sequences_name));
		int i=s1.length();
		if(i==1) {
		String sid="R_"+"00"+s1;
		s.setId(sid);
		}else if(i==2) {
		String sid="R_"+"0"+s1;
		s.setId(sid);
		}else {
		s.setId("R_"+s1);
		}
		sr.save(s);
		return s;
		
	}
	
	public List<Student> viewStudent()
	{
		return sr.findByOrderByNameAsc();
		
	}
}
