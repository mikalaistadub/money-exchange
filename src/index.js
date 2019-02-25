// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // console.log(currency);
    
    if(currency > 10000){

      var errorObj = {};
        errorObj.error = "You are rich, my friend! We don't have so much coins for exchange";
        
        return errorObj;

    }

    var coins = [50,25,10,5,1];
    var str = ["H","Q","D","N","P"];
    var obj = {};

 
  
    for (var i = 0; i < coins.length; i++) {
      var count = Math.floor(currency / coins[i]);
      // console.log(count);
      if (count >= 1) { 
        obj[ str[i] ] = count;
        currency = currency - count*coins[i];
      }
    } 
  
    return obj;
    // console.log(obj);
    
  }
