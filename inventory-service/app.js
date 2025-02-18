const express = require('express');
const {Eureka} = require("eureka-js-client")
const {enabled} = require("express/lib/application");
const e = require("express");

const app = express();
const port = 3000;

const router = express.Router();

router.get('/inventory',(req,res)=>{
    res.json(
        {
            items:['Milk','Eggs','Bread'],
            message: "welcome to the inventory service!"
        }
    )
})
app.use('/inventory-service', router);

const eurekaClient = new Eureka({
    instance: {
        instanceId : "inventory-service",
        app : "INVENTORY_SERVICE",
        hostName : "localhost",
        ipAddr: "127.0.0.1",
        port:{
            $: port,
            "@enabled": true
        },
        vipAddress: "inventory-service",
        dataCenterInfo:{
            "@class": "com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo",
            name: "MyOwn"
        }
    },

    eureka: {
        host: "localhost",
        port: 8761,
        // servicePath: "/eureka/"
        //http://localhost:8761/
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    eurekaClient.start((err)=>{
        if (err) {
            console.log(err, "Fail to register eureka");
        }else {
            console.log("Successfully registered")
        }
    });
})