function insert(arr1,arr2,index){
  let size=arr1.length;
  if(index>size ||index<0){
    return console.log("Vi tri khong hop le");
  }
  const  a=[...arr1.slice(0,index),...arr2,...arr1.slice(index)]
  return a
}

console.log(insert([1,2,3,7,8],[4,5,6],3));