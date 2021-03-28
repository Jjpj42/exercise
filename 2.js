function isVowelSandwich(str) {
	
    if(str.length==3){

        if(str[1].toLowerCase()=='a'||str[1].toLowerCase()=='e'||str[1].toLowerCase()=='i'||str[1].toLowerCase()=='o'||str[1].toLowerCase()=='u'){

            if(str[0]!= (str[1].toLowerCase()=='a'||str[1].toLowerCase()=='e'||str[1].toLowerCase()=='i'||str[1].toLowerCase()=='o'||str[1].toLowerCase()=='u')&&
            str[2]!= (str[1].toLowerCase()=='a'||str[1].toLowerCase()=='e'||str[1].toLowerCase()=='i'||str[1].toLowerCase()=='o'||str[1].toLowerCase()=='u')){
                return true;
            }
            else{
                return false;
            }
        }
        else{

            return false;
        }


    }
    else{
        return false;
    }
}


console.log(isVowelSandwich("cat"));
console.log(isVowelSandwich("ear"));
console.log(isVowelSandwich("bake"));
console.log(isVowelSandwich("try"));