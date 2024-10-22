//HOF
function calculator(a,b,sign,add,sub,mul,divi){
    // let a=20;
    // let b=30;
    if(sign == '+'){
        console.log(add(a,b));
    }
    else if(sign=='-'){
        console.log(sub(a,b));
    }
    if(sign=='*'){
        console.log(mul(a,b));
    }
    if(sign=='/'){
        console.log(divi(a,b));
    }
}
// callback functions:-
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function divi(a,b){
    return a/b;
}

// calculator(add,sub,mul,divi);
calculator(2,3,'+');