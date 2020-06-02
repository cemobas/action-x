package com.krakus.actionx.repository;

import com.krakus.actionx.model.Act;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ActRepository extends MongoRepository<Act, ObjectId> {
}
