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
        String formattedTop = top.replace(" ", "%20").replace("?", "%3F");
        String formattedBottom = bottom.replace(" ", "%20").replace("?", "%3F");
        byte[] bytes = apiRepository.generateMemeFromApi(type, formattedBottom, formattedTop);
        memeRepository.storeMemeInDb(new Meme(name, bytes));
    }

    public MemeDTO getSpecificMeme(String memeName) {
        Meme meme = memeRepository.getSpecificMeme(memeName);
        return convertMemeToDTO(meme);
    }

    public void deleteMeme(String memeName) {
        memeRepository.deleteMeme(memeName);
    }

    public MemeDTO updateMeme(String memeName, String newName) {
        Meme meme = memeRepository.getSpecificMeme(memeName);
        meme.setName(newName);
        memeRepository.storeMemeInDb(meme);
        return convertMemeToDTO(meme);
    }

    private MemeDTO convertMemeToDTO(Meme meme) {
        return new MemeDTO(meme.getName(), Base64.getEncoder().encodeToString(meme.getBytes()));
    }
}
