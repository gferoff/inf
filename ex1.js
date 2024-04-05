var card_number = 5062821234567892;
    var arr = [],
        card_number = card_number.toString();
        console.log(card_number);
    for(var i = 0; i < card_number.length; i++) {
      if(i % 2 === 0) {
        var m = parseInt(card_number[i]) * 2;
        if(m > 9) {
          arr.push(m - 9);
        } else {
          arr.push(m);
        } 
      } else {
          var n = parseInt(card_number[i]);
          arr.push(n)
        }
    }
    //console.log(card_number);
    var summ=0;
    for(var i = 0; i < arr.length; i++) {
    summ = summ+arr[i];}
    console.log(summ);
    if(!(summ % 10))
    console.log('vvedeno verno');
    else
    console.log('vvedeno neverno');
    