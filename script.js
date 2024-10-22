console.log("hello");
// function waitSec(){
//     let curr_time=new Date().getTime();
//     let fut_time=curr_time+1000;
//     while(new Date().getTime()<fut_time);
// }
// function waitNSec(n){
//     for(let i=0;i<n;i++){
//         waitSec();
//     }
// }
// waitNSec(6);
//-----------------------------------------------------------------------------//
setTimeout(()=>{
    // console.log("inside setTimeout");
    
},5000)
//------------------------------------------------------------------------------//
let id=setInterval(() => {
    // console.log("data is fetched");
    
}, 1000);

// setInterval(()=>{
//     clearInterval(id);
// },8000)
// console.log("world");
// ----------------------------------------------------------------------------//
let student=(function IIFE(){
    let marks=90;
    function student(){
        details();
    }
    function details() {
        console.log(`percentage: ${(marks/100)*100}`);
    }
    return student;
})()
student();


// ((a,b)=>{
//     console.log(`SUM OF a & b ${a+b}`);
// })(10,15)

function placeOrder(){
    setTimeout(()=>{
        console.log("order placed");
        fg();
    }
}


