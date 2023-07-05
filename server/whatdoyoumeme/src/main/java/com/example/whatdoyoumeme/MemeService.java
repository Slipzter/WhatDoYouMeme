package com.example.whatdoyoumeme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Base64;
import java.util.List;

@Service
public class MemeService {

    private final ApiRepository apiRepository;
    private final MemeRepository memeRepository;

    @Autowired
    public MemeService(ApiRepository apiRepository, MemeRepository memeRepository) {
        this.apiRepository = apiRepository;
        this.memeRepository = memeRepository;
    }

    public void generateMemeFromApi(String name, String type, String bottom, String top) throws IOException, InterruptedException {
        byte[] bytes = apiRepository.generateMemeFromApi(type, bottom, top);
        storeGeneratedMemeInDb(bytes, name);
    }

    public MemeDTO getSpecificMeme(String memeName) {
        Meme meme = memeRepository.getSpecificMeme(memeName);
        MemeDTO memeDTO = new MemeDTO(meme.getName(), Base64.getEncoder().encodeToString(meme.getBytes()));
        return memeDTO;
    }

    private void storeGeneratedMemeInDb(byte[] bytes, String name) {
        memeRepository.storeMemeInDb(bytes, name);
    }

}
