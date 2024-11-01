package com.crud.crud.application.controller;

import com.crud.crud.application.Service.UserService;
import com.crud.crud.application.exception.UserNotFoundException;
import com.crud.crud.application.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users/search")
    public ResponseEntity<Page<User>> searchUsersByName(
            @RequestParam String name,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {
        Page<User> users = userService.searchUsers(name, page, size);
        return ResponseEntity.ok(users);
    }

    @GetMapping("/users")
    public ResponseEntity<Page<User>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size) {
        Page<User> users = userService.getAllUsers(page, size);
        return ResponseEntity.ok(users);
    }

    @PostMapping("/user")
    public User newUser(@RequestBody User newUser) {
        return userService.saveUser(newUser);
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PutMapping("/user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable Long id) {
        return userService.updateUser(newUser, id);
    }

    @DeleteMapping("/user/{id}")
    public String deleteUser(@PathVariable Long id) {
        return userService.deleteUser(id);
    }
}
