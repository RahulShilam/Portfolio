package com.fullstackjavarahul.studentsystem.service;

import com.fullstackjavarahul.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);

    public List<Student> getAllStudents();
}
