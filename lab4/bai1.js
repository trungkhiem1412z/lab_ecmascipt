let promise = new Promise(function(resolve, reject) {
    resolve(1)
    setTimeout(function() {
        resolve(2),1000;
    })
})

promise.then(data=>console.log(data))