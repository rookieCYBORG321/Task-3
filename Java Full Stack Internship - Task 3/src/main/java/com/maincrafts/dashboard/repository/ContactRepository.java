package com.maincrafts.dashboard.repository;

import com.maincrafts.dashboard.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    // JpaRepository automatically gives us save(), findAll(), deleteById(), etc.
}