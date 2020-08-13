function noOne(){
    window.document.querySelector('.feliz').addEventListener('mouseover',()=>{
        window.document.querySelector('.blockImagefeliz').style.filter='opacity(100%)';
        window.document.querySelector('.blockImagetriste').style.filter='opacity(0%)';
        window.document.querySelector('.blockImageindiferente').style.filter='opacity(0%)';
    });
}
noOne();

function noTwo(){
    window.document.querySelector('.triste').addEventListener('mouseover',()=>{
        window.document.querySelector('.blockImagetriste').style.filter='opacity(100%)';
        window.document.querySelector('.blockImagefeliz').style.filter='opacity(0%)';
        window.document.querySelector('.blockImageindiferente').style.filter='opacity(0%)';
    });
}
noTwo();

function noThree(){
    window.document.querySelector('.indiferente').addEventListener('mouseover',()=>{
        window.document.querySelector('.blockImageindiferente').style.filter='opacity(100%)';
        window.document.querySelector('.blockImagefeliz').style.filter='opacity(0%)';
        window.document.querySelector('.blockImagetriste').style.filter='opacity(0%)';
    });
}
noThree();

function noAll(){
    window.document.querySelector('.clear').addEventListener('mouseover',()=>{
        window.document.querySelector('.blockImageindiferente').style.filter='opacity(0%)';
        window.document.querySelector('.blockImagefeliz').style.filter='opacity(0%)';
        window.document.querySelector('.blockImagetriste').style.filter='opacity(0%)';
    });
}
noAll();