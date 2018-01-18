var header = document.getElementById('firstHeader');

header.innerText = 'JS changed the header';

var paragraphs = document.querySelectorAll('p');

for (i in paragraphs){
  paragraphs[i].innerText = 'paragraphs changed by JS: ' + i
}

var reds = document.getElementsByClassName('redOnes');

console.dir(reds)

for (j in reds){  
  
  if(!isNaN(j)){
    reds[j].style.background = 'red';
  }   
}