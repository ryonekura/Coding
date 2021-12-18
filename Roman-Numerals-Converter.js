function convertToRoman(num) {
 let singles=num%10;
 let tens=Math.floor((num / 10) % 10);
 let hunds=Math.floor((num / 100) % 10);
 let thous=Math.floor((num / 1000) % 10);
 
var roman = {
  1:"I",
  2:"II",
  3:"III",
  4:"IV",
  5:"V",
  6:"VI",
  7:"VII",
  8:"VIII",
  9:"IX",
  0: ""
  }

var troman = {
  1:"X",
  2:"XX",
  3:"XXX",
  4:"XL",
  5:"L",
  6:"LX",
  7:"LXX",
  8:"LXXX",
  9:"XC",
  0:""
  }
  
  var hroman = {
  1:"C",
  2:"CC",
  3:"CCC",
  4:"CD",
  5:"D",
  6:"DC",
  7:"DCC",
  8:"DCCC",
  9:"CM",
  0:""
  }
  
    var throman = {
  1:"M",
  2:"MM",
  3:"MMM",
  4:"MMMMM",
  5:"MMMMMM",
  6:"MMMMMMM",
  7:"MMMMMMMM",
  8:"MMMMMMMMM",
  9:"MMMMMMMMMM",
  0:""
  }

num=throman[thous]+hroman[hunds]+troman[tens]+roman[singles];

 return num;
}

convertToRoman(36);