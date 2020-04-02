package fi.shadow.mybloggingwebapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyRestController {
    @Autowired
    private PostRepository myPosts;

    @RequestMapping(value = "/api", method = RequestMethod.GET)
    public Iterable<BlogPost> hello(){
        return myPosts.findAll();
    }

}
