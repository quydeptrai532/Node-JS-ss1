let arr=(element=>element%2==0 ?console.log(`${element} is even` ):console.log(`${element} is odd` ))
arr(3);
arr(4);
let arr2=(e=>{
    if(isNaN(e)){
        console.log(`${e} not a number`);
    }
    else{
      arr(e);
    }
})
arr2(`hahahihi`);
arr2(7);