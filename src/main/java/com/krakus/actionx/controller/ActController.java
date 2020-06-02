package com.krakus.actionx.controller;

import java.util.Collection;
import javax.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.krakus.actionx.model.Act;
import com.krakus.actionx.repository.ActRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ActController {

    @Autowired
    private ActRepository actRepository;

    @GetMapping("/acts")
    public Collection<Act> acts() {
        return (Collection<Act>) actRepository.findAll();
    }
    
    @PostMapping("/acts")
    public ResponseEntity<Act> createAct(@Valid @RequestBody Act act) {
        Act result = actRepository.save(act);
        return ResponseEntity.ok().body(result);
    }
}