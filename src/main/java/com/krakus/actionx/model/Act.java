package com.krakus.actionx.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Document("acts")
@TypeAlias("act")
public class Act {
    
    @Id
    private String id;
    private String title;
    private String text;
    private Integer quota;
    private String type;
    private String current;
    private String[] tags;
}