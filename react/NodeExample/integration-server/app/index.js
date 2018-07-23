const express = require('express');

const app = express();
//requiring products route file
const productRouter = require("./routes/products")

// middleware
app.use(function(req, res, nextFn) {
    console.log("middleware 1");
    //forward request next
    nextFn();
})
// GET  /list 1 way of doing routing
// app.use(productRouter); 

// GET  products/list 2 way of doing routing
    app.use("/products",productRouter); 


// GET /
app.get("/", function(req, res) {
    console.log("Home")
    res.send("welcome to node");
})

// generic middleware
app.use(function(req, res, nextFn) {
    console.log("middleware 2");
    //forward request next
    nextFn();
})

function middleware3(req, res, nextFn) {
    console.log("middleware 3");
    //forward request next
    nextFn();
}

function tokenMiddleware(req, res, nextFn) {
    console.log("tokenMiddleware");
    // /data2?token=12345
    const token = req.query.token;

    if (token == '12345') {
        return nextFn();
    }

    res.status(403).json({error: "invalid key"});
}

// GET /data
app.get("/data", function(req, res) {
    console.log("Data")
    res.json({name: 'node.js', status: 'production'})
})

// route specific
app.get("/data2", middleware3, tokenMiddleware, function(req, res){
    console.log("Data 2")
    res.json({name: 'node.js', status: 'production'})
})

// delayed response
app.get("/data3", function(req, res) {
    console.log("Data 3");
    setTimeout(function() {
        res.json({name: 'node8'})
    }, 2000);
})

app.get("/error", function(req, res) {
    console.log(" on /error")
    // calls error handler
    throw new Error("Math Error") 
});

function customRouteErrorMiddleware(err, req,res,next){
    res.status(500)
    .json({result:"Invalid Configuration", error:err.message})

    // OR 
    // next()  // will process next available ERROR MiddleWare

}

app.get("/data4", function(req,res){
    let n = Math.ceil(Math.random()*1000)
    if(n%2==0){
        res.send({result: n})
    }
    throw new Error("wrong Number " + n)
},customRouteErrorMiddleware );

// Exception or error handling
// called on error only
// Special middleware, 4 params
// global one
// All routers
app.use (function(err, req, res, next) {
    console.log("Error handler");
    res.status(500)
       .json({error: " 500 Internal server error"})
})


// testing/modular
module.exports = app;



/*const express = require('express');

const app = express();

//middleware
app.use(function(req, res, nextFn){
    console.log("middleware 1");

    //forward request next
    nextFn();
})

//GET
app.get("/", function(req, res){
    console.log("Home")
    res.send("Welcome to Node");
})

// generic middleware
app.use(function(req, res, nextFn){
    console.log("middleware 2");
    //forward request next
    nextFn();
})


function middleware3(req,res,nextFn){
    console.log("middleware 3");
    //forward request next
    nextFn();
}

function tokenMiddleware(req,res,nextFn){
    console.log("TokenMoiddleWare")
    // /data2?token=12345
    const token = req.query.token
    if(token =='12345')
    {
        return nextFn(); // use return stmt with nextFn
    }

    res.status(403).json({error:"invalid Key"});
    }

//GET /data
app.get("/data", function(req,res){
    console.log("Data")
    res.json({
        name:'node.js',
        status:'production'
    })
})

//route specific
app.get("/data2", middleware3, tokenMiddleware, function(req,res){
    console.log("Data 2")
    res.json({


        name:'node2.js',
        status:'production 2'
    })
})

//delayed response
app.get("/data3", function(req,res){
    console.log("Data 3");
    setTimeout(function(){
        res.json({name:'Node8'})
    },2000)
});

app.get("/error", function(req,res){
    console.log(" on Error")

    // Calls 
    throw new Error("Math Error")
})

// Exception or Error Handling
//Special MiddleWare 4 Params
//Global One
//for all routers
app.use(function(err, req,res, next){
    console.log("Error handler")
    res.status(500)
        .json({error:"Internal Server Error"})
})

// testing/modular
module.exports = app;
*/



