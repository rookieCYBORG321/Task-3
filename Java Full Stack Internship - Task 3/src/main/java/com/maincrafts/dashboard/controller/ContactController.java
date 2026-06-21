package com.maincrafts.dashboard.controller;

import com.maincrafts.dashboard.model.Contact;
import com.maincrafts.dashboard.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "*") // Allows your frontend application to talk to your backend safely
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    // 1. GET ALL CONTACTS (For displaying in your dashboard table)
    @GetMapping
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    // 2. ADD A NEW CONTACT
    @PostMapping
    public Contact createContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    // 3. DELETE A CONTACT
    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable Long id) {
        contactRepository.deleteById(id);
    }
}