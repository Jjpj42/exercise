function equal(a, b, c) {
	num=0;
    if(a==b){
        num+=1;
    }
   if(b==c){
        num+=1;
    }
    if(a==c){
        num+=2;
    }

    if(a==b&&b==c&&c==a){
        num=3;
    }

    console.log(num);
}


equal(3, 4, 3);
equal(1, 1, 1);
equal(3, 4, 1);