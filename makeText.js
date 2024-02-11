const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");

function generateText(text){
    let mm = new MarkovMachine(text);
    console.log(mm.makeText());
}

function makeText(path){
    fs.readFile(path, "utf8", (err,data)=>{
        if (err){
            console.error(`Can't read file provided: ${path}, ${err}`);
            process.exit(1);
        } else{
            generateText(data);
        }
    });
}

async function getURL(url){
    let res;

    try{
        res = await axios.get(url);
    } catch (err){
        console.error(`Unable to read url: ${url}: ${err}`);
        process.exit(1)
    }
    generateText(res.data)
}

let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeText(path);
}

else if (method === "url") {
  getURL(path);
}

else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}