package com.example.whatdoyoumeme;

import org.springframework.data.repository.CrudRepository;

public interface JpaMemeRepository extends CrudRepository<Meme, String> {

    public Meme findMemeByName(String memeName);

    public void deleteMemeByName(String memeName);
}
