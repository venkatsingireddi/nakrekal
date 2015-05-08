package com.isn.service;


import java.util.List;

import com.isn.model.Person;

public interface PersonService {
    
    public void addPerson(Person person);
    public List<Person> listPeople();
    public void removePerson(Integer id);
}
