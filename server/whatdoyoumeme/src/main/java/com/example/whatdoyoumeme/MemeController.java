package com.example.whatdoyoumeme;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/memes")
@CrossOrigin(origins = "http://127.0.0.1:5173/")
public class MemeController {

    MemeService service;
    @Autowired
    public MemeController(MemeService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> generateMemeFromApi(@RequestBody AddMemeDTO dto) {
        try {
            service.generateMemeFromApi(dto.memeName(), dto.memeType(), dto.bottomText(), dto.topText());
            return ResponseEntity.ok("Meme generated successfully");
        } catch (IOException e) {
            return ResponseEntity.badRequest().build();
        } catch (InterruptedException e) {
            return ResponseEntity.status(404).build();
        }
    }
    
    @GetMapping("/{memeName}")
    public ResponseEntity<?> getSpecificMeme(@PathVariable("memeName") String memeName) {
        MemeDTO meme = service.getSpecificMeme(memeName);
        return ResponseEntity.ok(meme);
    }


}
