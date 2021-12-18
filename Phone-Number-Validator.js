function telephoneCheck(str) {
    str = str.replace(/\s/g, '');//get rid of all the white space
    let strh=str.slice(5,str.length);//everything after 4th character
    
    //if paratheses, must be first + 3rd or 2nd and 4th
    if((str[0]=="(" && str[4]==")")||(str[1]=="(" && str[5]==")")){
        if(isNaN(str[0]) && strh.includes(")")){//first character is not a number & after 4th character there's )
           return false;
        }
        //remove all non-numbers  
        let str1=str.replace(/[^\d]/g,'');

        //string length 10 or 11
        if (str1.length>11 || str1.length<10){
          return false;
        } else if(str1.length==11 && str1[0]!=1){
          return false; //if 11 digits, check first is 1
        }else{
          return true;  //otherwise 10 digits
        }
    }else if(isNaN(str[0]) && strh.includes(")")){//first character is not a number & after 4th character there's )
        return false;
    }else if(!isNaN(str[0]) ){//first character is a number 
       
       if(str[4]=="-"&& str[0]!=1){
           return false;
       }
        //remove hyphens  
        let str1=str.replace(/-/g, "");
        
        //string length 10 or 11
        if (str1.length>11 || str1.length<10){
          return false;
        } else if(str1.length==11 && str1[0]!=1){
          return false; //if 11 digits, check first is 1
        }else{
          return true;  //otherwise 10 digits
        }
    } else {  
        return false; 
    }
        
        
        }
    
    telephoneCheck("555-555-5555");