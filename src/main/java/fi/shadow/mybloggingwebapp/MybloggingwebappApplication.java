package fi.shadow.mybloggingwebapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MybloggingwebappApplication implements CommandLineRunner {
    @Autowired
    private PostRepository myPosts;
    public static void main(String[] args) {
        SpringApplication.run(MybloggingwebappApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        myPosts.save(new BlogPost("MyTestPost","this is my test blog post text!"));
    }
}
