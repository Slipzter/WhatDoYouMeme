package com.example.whatdoyoumeme;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.stereotype.Repository;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Repository
public class ApiRepository {

    public byte[] generateMemeFromApi(String type, String bottom, String top) throws IOException, InterruptedException {
        Dotenv dotenv = Dotenv.load();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=" + type + "&bottom=" + bottom + "&top=" + top + "&font=Impact&font_size=50"))
                .header("X-RapidAPI-Key", dotenv.get("RAPID_API_KEY"))
                .header("X-RapidAPI-Host", "ronreiter-meme-generator.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<InputStream> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofInputStream());

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[4096];
        int bytesRead;
        while ((bytesRead = response.body().read(buffer)) != -1) {
            outputStream.write(buffer, 0, bytesRead);
        }
        byte[] imageBytes = outputStream.toByteArray();

        return imageBytes;
    }
}
