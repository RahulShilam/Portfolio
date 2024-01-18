package com.fullstackjavarahul.studentsystem.repository;

import com.fullstackjavarahul.studentsystem.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

//name of modal class and type of primary key
@Repository
//@NoRepositoryBean
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
