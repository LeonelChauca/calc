const num=document.querySelectorAll(".num");
const cal_name=document.getElementById('resul');
const delet=document.getElementById('delete');
const simb=document.querySelectorAll('#dig');
let simbolo='';
let tot='';
let tot2='';
num.forEach(function(element){
    element.addEventListener("click", function(){
        tot=tot+element.innerHTML;
        mostrar(tot);
    });
});
borrar();
function borrar(){
    delet.addEventListener('click', function(){
        tot='';
        mostrar(0);
    });
}
simb.forEach(function(element){
    element.addEventListener("click", function(){
        if(element.innerHTML=='='){
            switch(simbolo){
                case '+':
                    tot=Number.parseFloat(tot2)+Number.parseFloat(tot);
                    break;
                case '-':
                    tot=Number.parseFloat(tot2)-Number.parseFloat(tot);
                    break;
                case '/':
                    tot=Number.parseFloat(tot2)/Number.parseFloat(tot);
                    break;
                case 'x':
                    tot=Number.parseFloat(tot2)*Number.parseFloat(tot);

                    break;
            }
            mostrar(tot);
        }else{
            simbolo=element.innerHTML;
            tot2=tot;
            mostrar(tot);
            tot='';
            cal_name.textContent=0;
        }
        
    });
});



function mostrar(element){
    cal_name.textContent=element;
}