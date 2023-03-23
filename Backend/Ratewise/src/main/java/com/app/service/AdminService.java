package com.app.service;

import java.util.List;

import com.app.dto.LoginDto;
import com.app.entity.Admin;


public interface AdminService {

	List<Admin> getAllAdmin();

	Admin addAdmin(Admin newAdmin);

	Admin adminSignIn(LoginDto dto);
	
	

	
}
