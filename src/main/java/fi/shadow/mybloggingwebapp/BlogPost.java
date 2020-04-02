package fi.shadow.mybloggingwebapp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class BlogPost {
    @Id
    @GeneratedValue
    private int id;
    private Date creationTime;
    private String post;
    private String postHeading;

    public String getPostHeading() {
        return postHeading;
    }

    public void setPostHeading(String postHeading) {
        this.postHeading = postHeading;
    }


    public BlogPost(String postHeading, String post) {
        this.creationTime = new Date();
        this.postHeading = postHeading;
        this.post = post;
    }
    public BlogPost(){}
    @Override
    public String toString() {
        return "BlogPost{" +
                "id=" + id +
                ", post='" + post + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public String getPost() {
        return post;
    }

    public void setPost(String post) {
        this.post = post;
    }


}
