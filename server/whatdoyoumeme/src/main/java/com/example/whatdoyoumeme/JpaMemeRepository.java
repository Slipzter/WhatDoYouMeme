package com.example.whatdoyoumeme;

import org.springframework.data.repository.CrudRepository;

public interface JpaMemeRepository extends CrudRepository<Meme, String> {

    Meme findMemeByName(String memeName);

}
