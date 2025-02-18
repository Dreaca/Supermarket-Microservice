const express = require('express');

const app = express();
const port = 3000;

const router = express.Router();

router.get('/inventory ',(req,res)=>{
    res.json(
        {
            items:['Milk','Eggs','Bread'],
            message: "welcome to the inventory service!"
        }
    )
})
app.use('/inventory-service', router);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})