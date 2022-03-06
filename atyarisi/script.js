var at1 = document.getElementById("atbir");
var at2 =document.getElementById("atiki");
var at3 = document.getElementById("atuc");

var bitis = document.getElementById("bitis").offsetLeft-170;

var rdn1=0, rdn2=0, rdn3=0;
var kontrol=false;

function Baslat(){
    yarisma=setInterval(Yarisma,500);
}

var Yarisma=function(){
atbir();
atiki();
atuc();
 
}

var rastgeleSayiUret = function(){
    var rdn;
    do{
        rdn=Math.floor(Math.random()*100);
    }while(rdn<50);
    return rdn;
}

function atbir(){
    if(rdn1<bitis){
        rdn1+=rastgeleSayiUret();
        if(rdn1>=bitis){
            rdn1=bitis;
            clearInterval(yarisma);
            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("Kazanan At: Kahve");},2000);
            }
            at1.style.marginLeft=bitis+"px";
        }else{
            at1.style.marginLeft=rdn1+"px";
        }
        
    }
}

function atiki(){
    if(rdn2<bitis){
        rdn2+=rastgeleSayiUret();
        if(rdn2>=bitis){
            rdn2=bitis;
            clearInterval(yarisma);
            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("Kazanan At: Sarı");},2000);
            }
            at2.style.marginLeft=bitis+"px";
        }else{
            at2.style.marginLeft=rdn2+"px";
        }
        
    }
}

function atuc(){
    if(rdn3<bitis){
        rdn3+=rastgeleSayiUret();
        if(rdn3>=bitis){
            rdn3=bitis;
            clearInterval(yarisma);
            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("Kazanan At: Gri");},2000);
            }
            at3.style.marginLeft=bitis+"px";
        }else{
            at3.style.marginLeft=rdn3+"px";
        }
        
    }
}