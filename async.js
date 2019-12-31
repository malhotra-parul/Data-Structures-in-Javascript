//Method 1 FCB
const fs = require("fs");
const util = require("util");
function m1(){
    fs.readFile("main.txt", (err,data)=>{
        if(err) throw err;
        console.log(data.toString());
    });
}
// m1();
//Method 2 Async await using promisify
//Using Promisify
const readFile = util.promisify(fs.readFile);
async function m2(){
    try{
        const data = await readFile("main.txt");
        console.log(data.toString());
    }catch(err){
        console.error(err);
    }
}
// m2();
//Method 3 Building Promises
function m3(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path, (err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}
m3("main.txt").then((data)=>{
    console.log(data.toString())
}).catch((err)=>{
    console.error(err);
})



