var header = document.getElementById('firstHeader');



header.innerText = 'JS changed the header';
header.style.color = 'red';
var rem = '4rem'
header.style.fontSize = rem;
header.innerHTML = "<div>bla</div><div>BLO</div>"

var newDiv = document.createElement('div');
newDiv.innerText = 'I am the new guy in the bla';
document.body.appendChild(newDiv)

var paragraphs = document.querySelectorAll('p');

console.dir(paragraphs)

for (i in paragraphs){
  if(!isNaN(i)){
    paragraphs[i].innerText = 'paragraph was changed by JS: ' + i;
    paragraphs[i].style.color = 'blue';
  }
}
//var reds = document.querySelectorAll('.redOnes');
var reds = document.getElementsByClassName('redOnes');

console.dir(reds)
//
for (j in reds){  
  
  if(!isNaN(j)){
    reds[j].style.background = 'red';
  }   
}
