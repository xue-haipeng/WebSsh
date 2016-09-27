package com.cnpc.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.cnpc.domain.AppPlatform;
import com.cnpc.domain.Hosts;

public interface AppPlatformRepo extends JpaRepository<Hosts, String>{
	
	@Query("select a from AppPlatform a")
	public List<AppPlatform> appDistr();

}
