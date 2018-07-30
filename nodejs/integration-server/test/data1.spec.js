const app = require("../app");
const request = require("supertest");
// MOCHA TEST Runner,SuperTest & Chai are Testing Library CASE : BDD
describe("Test Data API", () => {

    // async method will have 'done' parameter for telling its completed
    //use 'done' or 'end' as a parameter
    it("/data test", (done) =>{
    //it("/data test", () =>{
        console.log("Start")
        request(app)
        .get("/data")
        .expect(200, done)
    //    .expecct(200)
        console.log("End")
    })


    it("/data2 key error", (end) =>{
            console.log("Start")
            request(app)
            .get("/data2")
            .expect(403, end) // or .expect(403).end(done)
            console.log("End")
    })

    it("/data2 with valid token", (end) =>{
        console.log("Start")
        request(app)
        .get("/data2?token=12345")
        .expect({name: 'node.js', status: 'production'})
        .expect(200, end)
        console.log("End")
    })

    it("Async timeout test", () =>{
        //expect(1+1).to.eq(4)
        setTimeout(()=>{
                //This will be Paas as it is not handling the timeout
                expect(1+1).to.eq(2) 
                //done();
        },1000)
    })

    it("Async timeout test", function(done) {
        this.timeout(6000)
        //expect(1+1).to.eq(4)
        setTimeout(()=>{
                //This will be Paas as it is not handling the timeout
                expect(1+1).to.eq(2) 
                done();
        },5000)
    })

})
