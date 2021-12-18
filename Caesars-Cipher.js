function rot13(str) {
//str=str.replace(/['"]+/g, '');
var str1="";


//write the cipher
       var deRot13 = {
     A:"N", B:"O", C:"P",
     D:"Q", E:"R", F:"S",
     G:"T", H:"U", I:"V", 
     J:"W", K:"X", L:"Y",
     M:"Z",
     N:"A", O:"B", P:"C", Q:"D",
     R:"E", S:"F", T:"G", U:"H",
     V:"I", W:"J", X:"K", Y:"L", 
     Z:"M"
       }

      // alert(deRot13.hasOwnProperty('S'));
       
//change the values of the input into the deciphered verison.
for(let i=0; i<str.length; i++){

  if(deRot13.hasOwnProperty(str[i])){
    str1+=deRot13[str[i]];
  } else{
    str1+=str[i];
  }
}

  return str1;
}


rot13("SERR PBQR PNZC");