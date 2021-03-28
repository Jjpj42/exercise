function arrayOfMultiples(num,length){
    let arr=[];
    for(let i=0;i<length;i++){
        arr[i] = num * (i+1);

    }
     console.log(arr);
}




arrayOfMultiples(7, 5);
arrayOfMultiples(12, 10);
arrayOfMultiples(17, 6);