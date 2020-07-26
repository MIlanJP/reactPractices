// Using XHR

// const firstreq=new XMLHttpRequest();

// // Attching event listener

// firstreq.addEventListener('load',()=>{
//     console.log("Its WOrking!!")
//     const data =JSON.parse(firstreq.responseText)
//     console.log(data);
//     data.results.forEach(e=> console.log(e.name,'Printing planet') )
// })

// firstreq.addEventListener('error',()=>{
//     console.log("Error Occured");
// })

// firstreq.open('GET','https://swapi.dev/api/planets/');
// firstreq.send();
// console.log("Request sent")

// firstreq.response




// USING FETCH

// When you console log the response.json()  you get the promise as response 
// if you catch anything from fetch even though you get 404 400 or 500 fetch will resolve 
//  It will only catch error when network problem 

// START

// fetch('https://swapi.dev/api/planets/').then((response) =>
// {
//     // response log json() is returning a promise 
//   if(!response.ok){
//       console.log("Error occured http status is not ok")
//       throw new Error(`Printing Request Status :${response.status}`);
//   }else{
//     response.json().
//     // .then then for response.json
//     then((data)=> {console.log(
//     // printing the name of planets        // 
//         data.results.forEach(name=>{console.log(name.name)}))})
//     }
// }).catch((err)=>{
//     console.log("Error occurred");
//     console.log(err);
// }

// )

// END

