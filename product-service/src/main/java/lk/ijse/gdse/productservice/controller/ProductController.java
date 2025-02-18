package lk.ijse.gdse.productservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {
    @GetMapping("/getAll")
    public String getProduct(){
        return "This is the product! and it's going to explode in 1...2...3...";
    }
}
