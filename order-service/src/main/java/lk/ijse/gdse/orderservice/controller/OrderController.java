package lk.ijse.gdse.orderservice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/order")
public class OrderController {
    @GetMapping("/all")
    public String getOrders(){
        return "Order Service : Order Service1, Order2, Order3, Order4";
    }
}
