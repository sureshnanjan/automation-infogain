import {test, expect } from '@src/utilities/fixtures/heroku_data'

test.beforeEach('Before Each Test', ({examples})=>{
    console.log(`This is the examples data Before Test Execution" ${examples}`);
});

test.afterEach('After The Test',({examples})=>{
    console.log(`This is the examples data Inside Test Execution" ${examples}`);
});

test.only("This is my Fixture Data",({examples})=>{

    console.log(`This is the examples data After Test Execution" ${examples}`);


});

test("Check Smithrecord is available",({page,})=>{})