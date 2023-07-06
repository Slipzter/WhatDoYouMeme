package com.example.whatdoyoumeme;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.UUID;

@Entity
public class Meme {

    @Id
    private String id = UUID.randomUUID().toString();

    @Column
    private String name;

    @Column
    private byte[] bytes;

    public Meme(String name) {
        this.name = name;
    }

    public Meme() {

    }

    public Meme(String name, byte[] bytes) {
        this.name = name;
        this.bytes = bytes;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getBytes() {
        return bytes;
    }

    public void setBytes(byte[] bytes) {
        this.bytes = bytes;
    }
}
