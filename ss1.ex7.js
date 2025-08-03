function sum(...quydz){
    let count=0;
    for (const element of quydz) {
        count+=element;
    }
    return count
}


console.log(sum(1,2,3,4,5,6,7,8,9))
