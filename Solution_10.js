let list = [1, 2, -3, 5, -9, -8, -7, 7];

for(let i = 0; i <= list.length; i++){
    if(list[i] <= 0){
        continue
    }
    console.log(list[i])
}