function choose(arr){
let randomface=Math.floor(Math.random()*arr.length)
return arr[randomface];
}

export {choose};