function calculate(num1, num2, callback){
    const res = callback(num1, num2);
    console.log(res);
}

function add(a, b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

calculate(2,3,substract);