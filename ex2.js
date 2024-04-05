var g = 73;
var p = 29;
var bob = 5;
var al = 4;
var a,b;
a = Math.pow(g,bob)%p;
b = Math.pow(g,al)%p;
var session1 = Math.pow(b,bob)%p;
var session2 = Math.pow(a,al)%p;
if(session1 === session2)
console.log('klyuchi sovpadaut');

var eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

console.log(session1);
//console.log(session2);

shift = session1;
var msg = "privet";
var crypted = '';
for (let i of msg) {
    let place = eng.indexOf(i);
    let new_place = place + shift;
    if (new_place>(eng.length-1)){
    while(new_place>=eng.length)
    new_place -=eng.length;
}

    if (eng.includes(i)) {
      crypted += eng[new_place];
    } else {
      crypted += 1;
    }
  }

  console.log(crypted);
  var encrypted='';

  for (let j of crypted) {
    let place = eng.indexOf(j);
    let new_place = place - shift;
    if (new_place<0){
        while(new_place<(-eng.length))
        new_place +=eng.length;
        new_place = -new_place;
        new_place = eng.length - new_place ;
    }
  
    if (eng.includes(j)) {
        encrypted += eng[new_place]
    } else {
        encrypted += 1
    }
  }

console.log(encrypted);