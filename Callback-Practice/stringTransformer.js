function modifyText(text, callback){
    let res = callback(text);
    console.log(res);
}

function makeUpper(text){
    return text.toUpperCase();
}

function makeLower(text){
    return text.toLowerCase();
}
modifyText("texT Text tExt ...", makeLower);