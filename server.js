const express = require("express");

const app = express();

app.get("/api/customers",async (req,res)=>{
    const customers = [
        {
            id:1,
            firstName:"Anton",
            lastName:"Jeejo"
        },
        {
            id:2,
            firstName:"Aaron",
            lastName:"Finch"
        },
        {
            id:3,
            firstName:"Akilen",
            lastName:"Loker"
        },
        {
            id:4,
            firstName:"Bad Ass",
            lastName:"Loker"
        }
    ]

    res.json(customers);
});

app.listen(5000,()=>{
    console.log("server running at port 5000");
});