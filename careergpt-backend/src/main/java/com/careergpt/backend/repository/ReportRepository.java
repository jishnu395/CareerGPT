package com.careergpt.backend.repository;

import com.careergpt.backend.model.Report;
import com.careergpt.backend.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {

    Optional<Report> findBySession(Session session);

}