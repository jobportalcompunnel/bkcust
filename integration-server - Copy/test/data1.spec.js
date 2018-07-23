const app = require("../app");

const request = require("supertest");

describe ("Test Data API", () => {
    it("/data1 test", (done) => {
        console.log("start")

         request(app)
         .get("/data")
         .expect(200, done)

        console.log("end");
    })

    it("/data2 key error", (done) => {
        console.log("start")

         request(app)
         .get("/data2")
         .expect(403, done)

        console.log("end");
    })


    it("/data3 with token", (done) => {
        console.log("start")

         request(app)
         .get("/data2?token=12345")
         .expect(200, done)

        console.log("end");
    })

    it("asynch timeout test ", (done) => {
        setTimeout( function(){
            expect(1+1).to.eq(2);
            done();
        },1000);
    })

    it("asynch timeout test 2 ", function (done) {
        this.timeout(6000);

        setTimeout( function(){
            expect(1+1).to.eq(2);
            done();
        },1000);
    })

});

//npm test
///npm test --test/data/spec.js
//chai assertion library 

//post test
// https://www.surveymonkey.com/r/3TPQZ83