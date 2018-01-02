var ready = function(){
  console.log('ready for functions');

  writeName('Tal');
  writeLastName('Yaron')

  console.log(writeName);  
  console.log(writeLastName);
};

var writeName = function(name){
  console.log('your name is: '+name);
 
}

function writeLastName(lastName){
  console.log('your name last is: '+lastName);  
}



