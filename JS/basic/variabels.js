var ready = function(){
  console.log('ready to run js');
  
  var x= 'test';
  console.log('this is x: ',x);
  x=34;
  console.log('this is x: ',x);
  x={'one':1,'two':2};
  console.log('this is x: ',x);
  var y = x;
  console.log('this is y: ',y);
  x=56;
  console.log('this is y: ',y);
  
  var myArray = [];
  var myObj = {};
  
  myArray = [3,5,6,7];
  myObj = {a:1,b:2};
  console.dir(myArray);
  console.dir(myObj);
  
  console.log(myArray[2]);
  console.log(myObj.a);
  console.log(myObj['b']);
  
  
  myArray=45;
  console.log(myArray);
  
  var t=3,j="y";
}