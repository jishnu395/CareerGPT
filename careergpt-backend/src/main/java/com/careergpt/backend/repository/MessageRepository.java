package com.careergpt.backend.repository;

import com.careergpt.backend.model.Message;
import com.careergpt.backend.model.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {


    List<Message> findBySession(Session session);
}
