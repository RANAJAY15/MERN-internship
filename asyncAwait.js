async function asAw(){
    setTimeout(()=>{
        return("Inside TimeOut");   
},5000)
return"This is async/await example"
}
console.log(asAw())

