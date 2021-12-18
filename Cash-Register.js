function checkCashRegister(price, cash, cid) {
    var changeRY; 
    //subtract cash from price
    changeRY=cash-price;
    
    //create object with currency
    var currency = {
        PENNY:0.01,
        NICKEL:0.05,
        DIME:0.1,
        QUARTER:0.25,
        ONE:1,
        FIVE:5,
        TEN:10,
        TWENTY:20,
        "ONE HUNDRED":100
        };

        //create new object to keep track of # of each currency
        var cidCurrency = {
            PENNY:1
            };

    //figure out how many of each currency there is
    for(let i=0; i<cid.length; i++){
          //cid[i][0]=cid[i][0].replace(" ","_");
          cidCurrency[cid[i][0]]=Math.round(cid[i][1]/currency[cid[i][0]]);
                
    };


  
//figure out what the cash-in-draw total is
var cidTotal=0;
for(let i=0;i<cid.length;i++){
cidTotal += cid[i][1];
};

    /* so cid has 
    [0] e.g. TWENTY_DOLLARS
    [1] e.g. $60
    [2] how many of the currency
    */
 
//figure out what the largest bill is that I have that is less
// than the change. largestBill name will be the first value of changeArray.
// should not be empty at the end unless CID is empty...
var changeArray= [ [] ];
var largeBillCidIndex=0;
for(let j=cid.length-1; j>=0; j--){  
    if((changeRY-currency[cid[j][0]])>=0){
      changeArray[0][0]=cid[j][0];
      largeBillCidIndex=j;
      changeArray[0][1]=0;
      break;
    }
}

//Populate the rest of the changeArray with what currency i have.
for (let k=largeBillCidIndex-1; k>=0; k--){
    changeArray.push([cid[k][0],0]);
}


//I will keep track of how many of which currency I need to make the change in this array.

var leftOver=changeRY;
 //using the largest bills first required, then see if exact change is possible
 for (let i=0; i<changeArray.length; i++) {
 //this is how many of the largest bill I need subtracted from change
 changeArray[i][1]=Math.floor(leftOver/currency[changeArray[i][0]]);
 if (changeArray[i][1]!=0){   //only reduce how much change i need if the above wasn't zero. 
    leftOver%=currency[changeArray[i][0]];
 }

 }
 //this test wants it differently.
 var changeObject=  {};
//just copying over the changeArray that I calculated before
//since I will be overwriting it.
  for (let m=0; m<changeArray.length; m++) {
  changeObject[changeArray[m][0]]=changeArray[m][1];
  }

  var leftOver1=changeRY;
  //console.log(changeArray[0][0])
  //console.log(cidCurrency[changeArray[3][0]])
  
  for (let i=0; i<changeArray.length; i++) {
 if(Math.floor(leftOver1/currency[changeArray[i][0]])>cidCurrency[changeArray[i][0]]){
     changeArray[i][1]=cidCurrency[changeArray[i][0]]*currency[changeArray[i][0]];
 }else{
 changeArray[i][1]=Math.floor(leftOver1/currency[changeArray[i][0]])*currency[changeArray[i][0]];
 }
 if (changeArray[i][1]!=0){   //only reduce how much change i need if the above wasn't zero. 
    leftOver1=(leftOver1-changeArray[i][1]).toFixed(3);
   // if(leftOver1==0){
   //    changeArray=changeArray.splice(0,i+1);
   //     break;
   // }
 }
 }
//console.log(leftOver1)
//console.log(cidCurrency)
console.log(changeArray)

//check to see if i actually don't have enough currency for exact change
//if leftOver isn't zero, it could mean i don't have enough pennies or nickels?
var negCheck = (leftOver1)>0;
console.log(negCheck)
//I dont need to flip the order because changeArray is biggest to smallest 
//required currency

function removeElementsWithValue(arr, val) {
    var i = arr.length;
    while (i--) {
        if (arr[i][1] === val) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function transcribing(obj){
return Object.entries(obj);
}

     

    //PUT THIS AT THE END
    //not enough in the cash drawer to make change or not the right 
    //currency quantity
    if(changeRY>cidTotal|| negCheck==true){
        var reply = {status: "INSUFFICIENT_FUNDS", change: []};
        console.log(reply);
        return reply;
     }else if(changeRY==cidTotal){   //change is equal to total in the cash drawer
        //var longerchangeArray=transcribing(cidCurrency);
        var reply = {status: "CLOSED", change: cid};
        //reply.change.push(changeRY);
        console.log(reply);
        return reply;
     }else {
         removeElementsWithValue(changeArray,0);
         var reply = {status: "OPEN", change: changeArray};
         //reply.change.push(changeArray);
         console.log(reply);
         return reply;
     }
      
      }
  


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])