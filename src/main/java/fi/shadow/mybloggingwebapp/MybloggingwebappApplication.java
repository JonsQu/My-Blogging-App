package fi.shadow.mybloggingwebapp;

import ch.qos.logback.classic.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MybloggingwebappApplication implements CommandLineRunner {
    @Autowired
    private PostRepository myPosts;
    private static Logger logger = (Logger) LoggerFactory.getLogger(MybloggingwebappApplication.class);
    public static void main(String[] args) {

        SpringApplication.run(MybloggingwebappApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        myPosts.save(new BlogPost("My new blogpost","I'm try to create some nice blogging app and this is going to be some " +
                "test blog text. It's going to go server and then I show it on my frontend which is not so easy to do..."));
        logger.info("Joonatan Haavisto");
        logger.info("GET - curl http://localhost:8080/api/posts");
    }
}
