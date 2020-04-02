package fi.shadow.mybloggingwebapp;

import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<BlogPost, Integer> {
}
