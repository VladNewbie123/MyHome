while(true){
const name = prompt('Введите 123: ');
if(name=='123'){
alert('Добро пожаловать');
break;
}
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './img/Big_Gerb_fin.png') {
      myImage.setAttribute ('src','./img/Lesser_Coat_of_Arms_of_Ukraine.png');
    } else {
      myImage.setAttribute ('src','./img/Big_Gerb_fin.png');
    }
}