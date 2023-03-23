package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.LoginDto;
import com.app.dto.UserDto;
import com.app.dto.UserSpecificResponse;
import com.app.entity.User;

public interface UserService {

	List<User> getAllUserDetails();

	UserDto addUserDetails(UserDto dto);

	String deleteUserDetails(Integer userId);

	Optional<User> findUserById(Integer id);

	List<UserSpecificResponse> getAllActiveUser(Boolean active);

	UserSpecificResponse loginUser(LoginDto dto);

	UserSpecificResponse updateUserDetails(UserDto dto);
}
