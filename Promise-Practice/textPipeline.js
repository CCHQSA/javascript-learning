function fetchText(){
    return new Promise((resolve, reject) => {
        return resolve("jaVAScriPt             ");
    });
}


fetchText().then((text) => text.trim())
.then((text) => text.toUpperCase())
.then((text) => console.log(text));