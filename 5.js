function factorChain(arr){

    let done=0;
    for(let i=0;i<arr.length;i++){
        if((arr[i]*1)==arr[i+1]){
            done=1;
        }
        else if((arr[i]*2)==arr[i+1]&&arr[4]*2==arr[5]){
            done=1;
        }
        

    }
    if(done==1){
        return true;
    }
    else{
        return false;
    }
    
}






console.log(factorChain([1, 2, 4, 8, 16, 32]));
console.log(factorChain([1, 1, 1, 1, 1, 1]));
console.log(factorChain([2, 4, 6, 7, 12])); 
console.log(factorChain([10, 1])); 