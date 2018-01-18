document.getElementById('firstButton').addEventListener('click',function(e){
  //Good list of events can be seen here: https://developer.mozilla.org/en-US/docs/Web/Events
  console.dir(e)
})

function changeMyColor(){
  var button = document.getElementById('secondButton');
  var colors = ['yellow','red','blue', 'pink','black','blueviolet', 'chocolate', 'coral'];
  button.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function rotate(){  
  
  var rotateAngle = rotateText('secondButton',45);  
  document.getElementById('secondButton').style.transform = 'rotate('+rotateAngle+'deg)';
  
}

function rotateText(buttonID, rotateBy){
  
  //extract rotation angle
  var currentTextRotation = document.getElementById(buttonID).style.transform;  
  var rotateEndOfNumber = currentTextRotation.search('deg');  
  var rotateAngleString = currentTextRotation.substr(7,rotateEndOfNumber-7);  
  var rotateAngle = parseInt(rotateAngleString);
  
  //check that angle is valid, and correct if invalid
  
  if(!rotateAngle || rotateAngle >= 360){
    
    if (rotateAngle>=360){
      rotateAngle = rotateAngle-360;
    } else{
      rotateAngle = 0;
    }    
  };
  
  //new rotation angle
  rotateAngle += rotateBy;
  
  return rotateAngle;
}