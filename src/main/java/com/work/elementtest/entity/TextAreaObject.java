package com.work.elementtest.entity;

public class TextAreaObject {
    private Integer id;
    private String text;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    @Override
    public String toString() {
        return "TextAreaObject{" +
                "id=" + id +
                ", text='" + text + '\'' +
                '}';
    }


}
