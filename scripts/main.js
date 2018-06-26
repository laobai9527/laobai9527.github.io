var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/go-surfing.gif') {
      myImage.setAttribute('src', 'images/hehe.png');
    } else {
      myImage.setAttribute('src', 'images/go-surfing.gif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hahahaha' + myName;
  }
  
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent ='Hahahaha' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }