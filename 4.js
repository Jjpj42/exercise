function dashed(str){

    let newStr='';
    for(let i=0;i<str.length;i++){
        if(str[i].toLowerCase()=='a'||str[i].toLowerCase()=='e'||str[i].toLowerCase()=='i'||str[i].toLowerCase()=='o'||str[i].toLowerCase()=='u'){
            newStr+='-';
            newStr+=str[i];
            newStr+='-';
        }
        else{
            newStr+=str[i];
        }
        
    }

    return newStr;
}






console.log(dashed("Edabit")) ;
console.log(dashed("Carpe Diem")) ;
console.log(dashed("Fight for your right to party!")) ;