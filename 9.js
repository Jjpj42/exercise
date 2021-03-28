function factorize(num) {
	let arr=[];
    for(let i=1;i<=num;i++){
        if(num%i==0){
            arr.push(i);

        }

    }
    console.log(arr);
}

factorize(12);
factorize(4);
factorize(17);