/*
var myHeading = document.querySelector('h1');//声明变量
myHeading.textContent = 'Hello world!';//赋值*/
/*var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
/*var myVariable = document.querySelector('h1');

alert('hello!');//alert() 函数在浏览器窗口内弹出一个警告框*/
/*
//点击事件，它会在鼠标点击什么的时候被浏览器唤醒
document.querySelector('html').onclick = function()

 {
    alert('Ouch! Stop poking me!');
}*/
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/v2-504a92e208b37fda1080fc38c8bb0a6a_r.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


function setUserName() 
	{
  	var myName = prompt('Please enter your name.');
  	/* prompt() 函数， 它会像 alert() 一样弹出一个对话框。
 	 只不过 prompt() 需要用户输入数据,，而且在用户点击确定
  	后将数据存储在变量里。在这里，我们要求用户输入姓名。*/
 	 localStorage.setItem('name', myName);
  	myHeading.textContent = 'Mozilla is cool, ' + myName;
	}

if(!localStorage.getItem('name')) 
	{
  	setUserName();
	} 
else 
	{
  		var storedName = localStorage.getItem('name');
  		myHeading.textContent = 'Mozilla is cool, ' + storedName;
	}


myButton.onclick = function()
 	{
  		setUserName();
	}

