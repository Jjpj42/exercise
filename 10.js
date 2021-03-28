function isTriplet(n1, n2, n3) {
	
    if(n1<n2&&n2<n3&&n3>n1){

       if((Math.pow(n1,2)+Math.pow(n2,2))==Math.pow(n3,2)){
           return true
       }
       
    }
    if(n1>n2&&n2<n3&&n3<n1){

        if((Math.pow(n2,2)+Math.pow(n3,2))==Math.pow(n1,2)){
            return true;
        }
        else {
            return false;
        }
        
        }
    else {
        return false;
    }
}
console.log(isTriplet(3, 4, 5));
// 3² + 4² = 25
// 5² = 25

console.log(isTriplet(13, 5, 12));
// 5² + 12² = 169
// 13² = 169

console.log(isTriplet(1,2,3));
// 1² + 2² = 5
// 3² = 9