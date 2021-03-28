function likeOrDislike(arr){

    for(let i=0;i<arr.length;i++){
        if(arr.length==1){
            return arr[0];
        }
        else if (arr.length == 2 && arr[i]==arr[i+1]){
            return "Nothing";
        } 
        else if (arr.length == 2 && arr[i]!=arr[i+1]){
            return arr[1];
        } 
        else if (arr.length == 3 && arr[i]==arr[i+1]){
            return "Nothing";
        } 

    }
}




console.log(likeOrDislike(["Dislike"]));

console.log(likeOrDislike(["Like", "Like"])) ;

console.log(likeOrDislike(["Dislike", "Like"])) ;

console.log(likeOrDislike(["Like", "Dislike", "Dislike"])) ;