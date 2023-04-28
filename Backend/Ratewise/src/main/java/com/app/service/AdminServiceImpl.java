package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.LoginDto;
import com.app.entity.Admin;
import com.app.repository.AdminRepository;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public List<Admin> getAllAdmin() {
		// TODO Auto-generated method stub
		return adminRepo.findAll();
	}

	@Override
	public Admin addAdmin(Admin newAdmin) {
		// TODO Auto-generated method stub
		return adminRepo.save(newAdmin);
	}

	@Override
	public Admin adminSignIn(LoginDto dto) {
		// TODO Auto-generated method stub
		return adminRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword());
	}

}
