

// fs.readFile("./data.json", { encoding: "utf8" }, function (err, data) {
//     console.log("Data loaded from disk", data);
//     axios.get("https://jsonplaceholder.typicode.com/todos/1").then(function (res) {
//         console.log("Data downloaded from url", res.data);
//     });
// });



var fs = require("fs");
var axios = require("axios");

var changePromise = new Promise(function (resolve, reject) {
    fs.readFile("./data.json", { encoding: "utf8" }, async function (err, data) {
        console.log("Data loaded from disk", data);
        const url = `https://jsonplaceholder.typicode.com/todos/1`;
        const resposne = await axios.get(url)
        resolve(resposne)
    });
});

changePromise.then((data) => console.log(data.data));
