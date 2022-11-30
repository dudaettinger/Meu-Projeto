let count = 1; /* começar pela primeira */

document.getElementById("radio1").checked = true; 

setInterval(function () {
    nextImage();
}, 4000)

function nextImage() {
    count ++;
    if (count>4){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true; 
}


vetor=['Vontade','Felicidade','Esperança','Liberdade']
function intervalo(){
    setInterval(tempo,4000)
}
function tempo(){
for(var x = 0; x < vetor.length; x++){
   (function(x){
      setTimeout(function(){
        mudar.innerHTML = vetor[x];
      }, x*4000); // 1000 = 1 segundo
   }(x));
}
}
