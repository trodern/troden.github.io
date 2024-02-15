var chemi =0
var biol =0
var mathext =0
var phys =0
var cos =0
var evos = 0
var bsos = 0
var eco =0
function ccl(){
  if (chemi==0){
    chemi=1
    document.getElementById("chem").classList.toggle("myStyle");

  }else if (chemi==1){
    chemi=0   
    document.getElementById("chem").classList.toggle("myStyle");
  }
}
function pcl(){
  if (phys==0){
    phys=1
    document.getElementById("phy").classList.toggle("myStyle");

  }else if (phys==1){
    phys=0   
    document.getElementById("phy").classList.toggle("myStyle");
  }
}
function cscl(){
  if (cos==0){
    cos=1
    document.getElementById("cs").classList.toggle("myStyle");

  }else if (cos==1){
    cos=0   
    document.getElementById("cs").classList.toggle("myStyle");
  }
}
function bcl(){
  if (biol==0){
    biol=1
    document.getElementById("bio").classList.toggle("myStyle");

  }else if (biol==1){
    biol=0   
    document.getElementById("bio").classList.toggle("myStyle");
  }
}
function mxcl(){
  if (mathext==0){
    mathext=1
    document.getElementById("mathex").classList.toggle("myStyle");

  }else if (mathext==1){
    mathext=0   
    document.getElementById("mathex").classList.toggle("myStyle");
  }
}

function evcl(){
  if (evos==0){
    evos=1
    document.getElementById("evm").classList.toggle("myStyle");

  }else if (evos==1){
    evos=0   
    document.getElementById("evm").classList.toggle("myStyle");
  }
}
function bscl(){
  if (bsos==0){
    bsos=1
    document.getElementById("bstds").classList.toggle("myStyle");

  }else if (bsos==1){
    bsos=0   
    document.getElementById("bstds").classList.toggle("myStyle");
  }
}
function eccl(){
  if (eco==0){
    eco=1
    document.getElementById("eco").classList.toggle("myStyle");

  }else if (eco==1){
    eco=0   
    document.getElementById("eco").classList.toggle("myStyle");
  }
}
function validate(){
  localStorage.setItem("chemi", chemi);
  localStorage.setItem("biol", biol);
  localStorage.setItem("phys", phys);
  localStorage.setItem("mathext",mathext );
  localStorage.setItem("cos", cos);
   localStorage.setItem("evos", evos);
  localStorage.setItem("bsos", bsos);
  localStorage.setItem("eco", eco);
  
  window.location.assign('/index.html')
}
