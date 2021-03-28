function mean(num){

    let str=num.toString();
    let sum=0;
    for(let i=0;i<str.length;i++){
        sum+=parseInt(str[i]);
    }

    return (sum/str.length);
}





console.log(mean(42));
console.log(mean(12345));
console.log(mean(666));