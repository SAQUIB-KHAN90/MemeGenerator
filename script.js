function remArray(arr){
    let hash = {};
    for(let i=0;i<arr.length;i++){
        if(hash[`${arr[i]}`]){
            continue
        }else{
            hash[`${arr[i]}`] = arr[i]
        }
    }
    return Object.values(hash);
}
console.log(remArray([1,2,3,4,5,66,5,4,3,2,77]));