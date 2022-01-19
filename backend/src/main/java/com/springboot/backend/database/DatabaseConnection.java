package com.springboot.backend.database;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DatabaseConnection {

	public static Connection conn = null;

	// static blocks are executed as soon as class is loaded by class loaders
	// static blocks are automatically executed
	static {

		try {
			Class.forName("org.postgresql.Driver");
			System.out.println("Driver loaded successfully");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public static Connection getConnection() {

		Properties props = new Properties();
		FileInputStream in;
		try {
			in = new FileInputStream("src/main/resources/db.properties");
			props.load(in);
		} catch (FileNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
  
		String driverClass = props.getProperty("postgres.jdbc.driver");
		String url = props.getProperty("postgres.jdbc.url");
		String username = props.getProperty("postgres.jdbc.username");
		String password = props.getProperty("postgres.jdbc.password");
		
		System.out.println(driverClass + "  " + url + "  " + username + "  " + password);
		// Make the connection to the database
		try {
			conn = DriverManager.getConnection(url, username, password);
			System.out.println("Connection to " + url + " is successfull");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return conn;
	
		
	}

}
