package com.university.clubmanagement;

import org.springframework.boot.SpringApplication;

public class TestClubmanagementApplication {

	public static void main(String[] args) {
		SpringApplication.from(ClubmanagementApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
