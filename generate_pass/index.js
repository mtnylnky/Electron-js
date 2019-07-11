var slider = document.getElementById("passLength");
var output = document.getElementById("demo");
output.innerHTML = "Length: "+slider.value;
slider.oninput = function() {
  output.innerHTML = "Length: "+this.value;
}

function randomPass(){
    var newpass="";
    var wordlist="";
    var passlength=document.getElementById("passLength").value;
    if(document.getElementById("uppercase").checked == true){
        wordlist+='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(document.getElementById("lowercase").checked == true){
        wordlist+='abcdefghijklmnopqrstuvwxyz';
    }
    if(document.getElementById("digitcase").checked == true){
        wordlist+='0123456789';
    }
    if(document.getElementById("specialcase").checked == true){
        wordlist+='~!@#$%^&*()_+-={}[]:";<>?,./|';
    }
    for(var i =passlength;i>0;i--){
        newpass+=wordlist[Math.floor(Math.random()*wordlist.length)];
    }
    document.getElementById("endpass").value=newpass;
}