package com.example.whatdoyoumeme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MemeRepository {

    private final JpaMemeRepository repo;

    @Autowired
    public MemeRepository(JpaMemeRepository repo) {
        this.repo = repo;
    }

    public List<Meme> getAllMemes() {
        Iterable all = repo.findAll();
        return Streamable.of(all).toList();
    }

    public void storeMemeInDb(Meme meme) {
        repo.save(meme);
    }

    public Meme getSpecificMeme(String memeName) {
        return repo.findMemeByName(memeName);
    }

    public void deleteMeme(String memeName) {
        Meme meme = repo.findMemeByName(memeName);
        repo.deleteById(meme.getId());
    }
}
