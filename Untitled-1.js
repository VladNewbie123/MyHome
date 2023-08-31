const myImage = document.querySelector('img1');

myImage.onclick = function() {
    const mySrc = myImage.getAttribute('src');
    if(mySrc === './img/Big_Gerb_fin.png') {
      myImage.setAttribute ('src','./img/Lesser_Coat_of_Arms_of_Ukraine.png');
    } else {
      myImage.setAttribute ('src','./img/Big_Gerb_fin.png');
    }
}
