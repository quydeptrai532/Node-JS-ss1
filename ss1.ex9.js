function sortArray(arr1,arr2){
    const a=[...arr1,...arr2]
    return a.sort((a,b)=>a-b)
}

console.log(sortArray([1,2,3,5,9],[4,6,7,8]))