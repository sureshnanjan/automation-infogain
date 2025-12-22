console.log("First Line")

setTimeout(() => {
    console.log("This is what I wrote in Second Line")
, 5000});

const mypromise = new Promise<string>((resolve, reject) => {
    console.log("Inside Promise");
    resolve("This is the result from my Promise");
});
console.log("Second Line")
mypromise.then(result => {
    console.log(result);
});

// Async Await
// const result = await mypromise;
    //const result = await mypromise;

console.log("Third Line")
