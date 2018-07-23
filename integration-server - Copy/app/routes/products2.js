const express = require('express');

const router = express.Router();

const config = require("../config");

const request = require("request");
const rp = require('request-promise');

var settings = {};

async function secureLoginMiddleware(req, res, next) {
    if (settings.requestOptions) {
        console.log("****Got the token cached")
        req.token = settings.token;
        req.requestOptions = settings.requestOptions;
        next();
        return;
    }

    try { // promise then

        let user = {
            username: 'admin',
            password: 'admin'
        }

        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            uri: 'http://g3.nodesense.ai:7070/oauth/token',
            body: user,
            json: true // Automatically stringifies the body to JSON
        };
 

        console.log("Sending data middleware ")

        let authData = await rp(options);

        console.log(authData);

        //authData = JSON.parse(authData);

        let token = authData.token;
        
        
        var options = {
            headers: {
                  Authorization: `JWT ${token}`
            }
        };

        settings.token =  authData.token;
        settings.requestOptions =  options;


        req.token = token;
        req.requestOptions = options;

        next();
    }catch(error) {
        console.log(error);
        res.send(error)
    }
    
}

router.use("/secured", secureLoginMiddleware)


router.get("/list", function(req, res){
    console.log(config)

    request(`${config.PRODUCT_SERVER}/api/products`, 
                    function(error, response, body) {
        if (error) {
            res.status(response.statusCode)
               .json({error: 'Unknown'})
               
            return;
        }
 
        res.json(JSON.parse(body));
    })
     
})

router.get('/view/:id', function(req, res) {
    request(`${config.PRODUCT_SERVER}/api/products/${req.params.id}`, 
    function(error, response, body) {
        if (error) {
        res.status(response.statusCode)
        .json({error: 'Unknown'})

        return;
        }

        res.json(JSON.parse(body));
        })
})



router.get('/info/:id', function(req, res) {
    request(`${config.PRODUCT_SERVER}/api/products/${req.params.id}`, 
    function(error, response, body) {
        if (error) {
            res.status(response.statusCode)
            .json({error: 'Unknown'})
            return;
        }

        const product = JSON.parse(body);

        request(`${config.PRODUCT_SERVER}/api/brands/${product.brandId}`, 
            function(error, response, body) {
                if (error) {
                    res.status(response.statusCode)
                    .json({error: 'Unknown'})
                    return;
                }

                const brand = JSON.parse(body);

                res.json({
                    product: product,
                    brand: brand
                })

            })

 
        })
})

// promise based

router.get("/info2/:id", function(req, res) {
    rp(`${config.PRODUCT_SERVER}/api/products/${req.params.id}`)
    .then (function(product) {
        product = JSON.parse(product);

        rp(`${config.PRODUCT_SERVER}/api/brands/${product.brandId}`)
        .then (function(brand) {
            brand = JSON.parse(brand);

            res.json({
                brand: brand,
                product: product
            })
        })  

    })
    .catch (function(error) {
        res.status(500);
    })
})

//ES8, async, await
router.get("/info3/:id", async function(req, res){
    try { // promise then
        let product = await rp(`${config.PRODUCT_SERVER}/api/products/${req.params.id}`);
        product = JSON.parse(product)
        
        let brand = await rp(`${config.PRODUCT_SERVER}/api/brands/${product.brandId}`)
        brand = JSON.parse(brand)

        res.json({
            product : product,
            brand: brand
        })
    }
    catch(error) { // promise failure
        res.status(500);
    }
})


// products/secured/info:12
router.get("/secured/info/:id", async function(req, res){
    try { // promise then

        let user = {
            username: 'admin',
            password: 'admin'
        }

        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            uri: 'http://g3.nodesense.ai:7070/oauth/token',
            body: user,
            json: true // Automatically stringifies the body to JSON
        };
 

        console.log("Sending data ")

        let authData = await rp(options);

        console.log(authData);

        //authData = JSON.parse(authData);

        let token = authData.token;
        
        var options = {
            headers: {
                  Authorization: `JWT ${token}`
            }
        };

        let product = await rp(`${config.PRODUCT_SERVER}/secured/api/products/${req.params.id}`, options);
        product = JSON.parse(product)


        console.log(product);
        
        let brand = await rp(`${config.PRODUCT_SERVER}/secured/api/brands/${product.brandId}`, options)
        brand = JSON.parse(brand)


        console.log(brand);

        res.json({
            product : product,
            brand: brand
        })
    }
    catch(error) { // promise failure
        console.log(error);
        res.status(500);
    }
})


// products/secured/info:12
router.get("/secured/info2/:id", async function(req, res){
    try { // promise then
   
        // requestOptions come from middleware
        let options = req.requestOptions;

        let product = await rp(`${config.PRODUCT_SERVER}/secured/api/products/${req.params.id}`, options);
        product = JSON.parse(product)


       // console.log(product);
        
        let brand = await rp(`${config.PRODUCT_SERVER}/secured/api/brands/${product.brandId}`, options)
        brand = JSON.parse(brand)


        //console.log(brand);

        res.json({
            product : product,
            brand: brand
        })
    }
    catch(error) { // promise failure
        console.log(error);
        res.status(500);
    }
})


module.exports = router;