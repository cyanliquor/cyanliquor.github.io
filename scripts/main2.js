var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/baby4.jpg') {
      myImage.setAttribute('src', 'images/baby3.jpg');
    } else {
      myImage.setAttribute('src', 'images/baby4.jpg');
    }
}
