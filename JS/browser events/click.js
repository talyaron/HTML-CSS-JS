document.getElementById('firstButton').addEventListener('click',function(e){
  console.dir(e)
})

function changeMyColor(){
  var button = document.getElementById('secondButton');
  var colors = ['yellow','red','blue', 'pink','black','blueviolet', 'chocolate', 'coral'];
  button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function rotate(){  
  
  var rotateNumber = rotateText('secondButton',45);  
  document.getElementById('secondButton').style.transform = 'rotate('+rotateNumber+'deg)';
  
}

function rotateText(buttonID, rotateBy){
  
  var rotateText = document.getElementById(buttonID).style.transform;
  var rotateEndOfNumber = rotateText.search('deg');  
  var rotateNumberString = rotateText.substr(7,rotateEndOfNumber-7);  
  var rotateNumber = parseInt(rotateNumberString);
  
  if(!rotateNumber){
    rotateNumber = 0;
  };
  
  rotateNumber += rotateBy;
  
  return rotateNumber;
}