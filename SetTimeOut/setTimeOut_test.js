function Incorreto(){
  console.log('A)')
  for(var i = 0; i <=3; i++) {
    setTimeout(function() { console.log(i); },100);
  }
}

function Correto(){
  
  console.log('B)')
  for(var i = 0; i <=3; i++) {
    setTimeout(function(i) { console.log(i); },100, i);
  }

}

Incorreto()

setTimeout(Correto,1000)