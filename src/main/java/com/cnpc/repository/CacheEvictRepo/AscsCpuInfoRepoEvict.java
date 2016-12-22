package com.cnpc.repository.CacheEvictRepo;

import com.cnpc.domain.ASCSCpuInfo;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CachePut;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
@CacheConfig(cacheNames = {"ascsFindAll"})
public interface AscsCpuInfoRepoEvict extends JpaRepository<ASCSCpuInfo, Timestamp>{

	@CachePut(value = "ascsFindAll")
	List<ASCSCpuInfo> findAll();

	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='EMPSCS'")
	@CachePut(value = "average6_emp")
	Double average6_emp();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='OSPSCS'")
	@CachePut(value = "average6_osp")
	Double average6_osp();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='COPSCS'")
	@CachePut(value = "average6_cop")
	Double average6_cop();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP09'")
	@CachePut(value = "average6_ep9")
	Double average6_ep9();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='ZYPSCS'")
	@CachePut(value = "average6_zyp")
	Double average6_zyp();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP01'")
	@CachePut(value = "average6_ep1")
	Double average6_ep1();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP04'")
	@CachePut(value = "average6_ep4")
	Double average6_ep4();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='ERPTKM01'")
	@CachePut(value = "average6_tkm")
	Double average6_tkm();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP06'")
	@CachePut(value = "average6_ep6")
	Double average6_ep6();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP07'")
	@CachePut(value = "average6_ep7")
	Double average6_ep7();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='EESAP6001'")
	@CachePut(value = "average6_cp6")
	Double average6_cp6();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='EESAPF001'")
	@CachePut(value = "average6_cpf")
	Double average6_cpf();
	@Query("select avg(a.cpuusage) from ASCSCpuInfo a where a.hostname='EESAPO001'")
	@CachePut(value = "average6_cpo")
	Double average6_cpo();

	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='EMPSCS'")
	@CachePut(value = "max6_emp")
	Double max6_emp();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='OSPSCS'")
	@CachePut(value = "max6_osp")
	Double max6_osp();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='COPSCS'")
	@CachePut(value = "max6_cop")
	Double max6_cop();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP09'")
	@CachePut(value = "max6_ep9")
	Double max6_ep9();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='ZYPSCS'")
	@CachePut(value = "max6_zyp")
	Double max6_zyp();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP01'")
	@CachePut(value = "max6_ep1")
	Double max6_ep1();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP04'")
	@CachePut(value = "max6_ep4")
	Double max6_ep4();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='ERPTKM01'")
	@CachePut(value = "max6_tkm")
	Double max6_tkm();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP06'")
	@CachePut(value = "max6_ep6")
	Double max6_ep6();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='VSCSERPEP07'")
	@CachePut(value = "max6_ep7")
	Double max6_ep7();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='EESAP6001'")
	@CachePut(value = "max6_cp6")
	Double max6_cp6();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='EESAPF001'")
	@CachePut(value = "max6_cpf")
	Double max6_cpf();
	@Query("select max(a.cpuusage) from ASCSCpuInfo a where a.hostname='EESAPO001'")
	@CachePut(value = "max6_cpo")
	Double max6_cpo();

}
