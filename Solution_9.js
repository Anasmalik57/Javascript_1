const list = [1, 2, 999, 56, "Mithun", 1234, "PW"]


for(let i = 0; i <= list.length; i++){
    if(typeof(list[i]) === "string"){
        console.log("Found The First String:", list[i])
        break;
    }
}

