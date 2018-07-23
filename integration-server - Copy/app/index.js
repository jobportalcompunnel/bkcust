const express = require('express');
const app = express();


const productRouter = require('./routes/products');

const cors = require('cors');


app.use(cors());

// middelware /
app.use(function(req,res,nextFn){
    console.log('middleware 1');
    nextFn();
});


app.use("/products", productRouter);


// GET /
app.get("/",  function(req,res){
    console.log('middleware home');
    res.send("welocme d to node");
});

// middelware /
app.use(function(req,res,nextFn){
    console.log('middleware 2');
    nextFn();
});

// middelware /
function middleware3(req,res,nextFn){
    console.log('middleware 3');
    nextFn();
};

// POST /
app.get("/data",  function(req,res){
    console.log('middleware data');
    res.json({name :'node.js',status:'production'});
});

function tokenMiddleWare(req, res,nextFn)
{
    console.log('token middleware');
    const token = req.query.token;
    if(token=='12345'){
        return nextFn();
    }
     res.status(403).json({error: "invalid key"});
}
// POST /
app.get("/data2", tokenMiddleWare, function(req,res){
    console.log('middleware data2');
    res.json({name :'node.js',status:'production'});
});


// POST /
app.get("/route/:token", tokenMiddleWare, function(req,res){
    console.log('middleware data2');
    res.json({name :'node.js',status:'production'});
});


// delay response /
app.get("/data3",  function(req,res){
    console.log('middleware data 3');
    setTimeout(function(){
         res.json({name :'node.js',status:'production'});
    },2000);
   
});


app.get("/error", function(req, res) {
    console.log(" on /error")
    // calls error handler
    throw new Error("Math Error") 
});

//spepcifc route errror handler
function customerror(err, req, res, next){
    res.status(500)
       .json({error: " Db failed",error:err.message})
}


app.get("/data4", function(req, res) {
    let n= Math.ceil(Math.random() * 1000);
    if(n % 2 == 0){
        res.send({result:n});
    } 
    throw new Error("Wrong NUmber" + n);
},customerror);


// Exception or error handling
// called on error only
// Special middleware, 4 params
// global one
// All routers
app.use(function(err, req, res, next) {
    console.log("Error handler");
    res.status(500)
       .json({error: " 500 Internal server error"})
})




module.exports=app;