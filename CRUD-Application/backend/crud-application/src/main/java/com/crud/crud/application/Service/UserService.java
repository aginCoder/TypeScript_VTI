package com.crud.crud.application.Service;
import com.crud.crud.application.exception.UserNotFoundException;
import com.crud.crud.application.model.User;
import com.crud.crud.application.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Page<User> getAllUsers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return userRepository.findAll(pageable);
    }

    public User saveUser(User newUser) {
        return userRepository.save(newUser);
    }

    public Page<User> searchUsers(String name, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return userRepository.findByNameContainingIgnoreCase(name, pageable);
    }

    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public User updateUser(User newUser, Long id) {
        return userRepository.findById(id).map(user -> {
            user.setUsername(newUser.getUsername());
            user.setName(newUser.getName());
            user.setEmail(newUser.getEmail());
            return userRepository.save(user);
        }).orElseThrow(() -> new UserNotFoundException(id));
    }

    public String deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }
}
