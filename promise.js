function promiseEg(){
    return new promise(function(resolve,reject){
        if(flag === 1){
            resolve("This is a promise resolve Example")
        }
        else if (flg == 0){
        resolve("This is a Promise Example")
        }
    })
}
console.log
