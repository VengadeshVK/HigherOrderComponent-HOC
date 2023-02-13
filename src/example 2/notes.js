// const adder = addBy => num=>num + addBy

// const result = adder(3)
// console.log(result(7))

//Above and below function both are same 
// here 

const adder=(addBy)=>{
    return function (num){
        return num+addBy
    }
}

const result = adder(3)
console.log(result(7))