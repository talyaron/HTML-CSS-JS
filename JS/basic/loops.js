var ready = function(){
  for (var i=0; i<4;i++){
    console.log(i);
  }

  var arr = [2,5,7,12];
  for (i in arr){
    console.log(i,': ',arr[i]);
  }

  var obj = {
    a:1,
    b:2,
    c:3
  }

  for (i in obj){
    console.log(i,' - ',obj[i]);
  }
  
  i = 0;

  while (i < 4) {
    i++;
    console.log("The number is (while) " + i);
        
  }
  
  i = 0;

  do {
    i++;
    console.log("The number is (do) " + i);
    
  } while (i < 4);
}