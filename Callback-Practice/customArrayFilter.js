function customFilter(arr, callback){
    let filtered = [];

    for(var element of arr){
        if(callback(element)){
            filtered.push(element);
        }
    }
    console.log(filtered);
}

function evenFilter(element){
    return element % 2 === 0;
}

customFilter([1,2,3,4,5,6,67,7,8,8,9,10], evenFilter);


