function joinDigits(n) {
	
    let str='';
    let arr=[];
    let newStr='';
    for(let i=0;i<n;i++){
        
        str+=(i+1);
    }

    arr=str.split('');

    for(let i=0;i<arr.length;i++){
        newStr+=arr[i];
        newStr+='-';

    }

    


    console.log(newStr);
}
joinDigits(4)
joinDigits(11) 
joinDigits(15) 