function noOne(){
    window.document.querySelector('.feliz').addEventListener('click',()=>{
        window.document.querySelector('.blockImagefeliz').style.filter='opacity(100%)';
        window.document.querySelector('.blockImagetriste').style.filter='opacity(0%)';
        window.document.querySelector('.blockImageindiferente').style.filter='opacity(0%)';
    });
}
noOne();

function noTwo(){
    window.document.querySelector('.triste').addEventListener('click',()=>{
        window.document.querySelector('.blockImagetriste').style.filter='opacity(100%)';
        window.document.querySelector('.blockImagefeliz').style.filter='opacity(0%)';
        window.document.querySelector('.blockImageindiferente').style.filter='opacity(0%)';
    });
}
noTwo();

function noThree(){
    window.document.querySelector('.indiferente').addEventListener('click',()=>{
        window.document.querySelector('.blockImageindiferente').style.filter='opacity(100%)';
        window.document.querySelector('.blockImagefeliz').style.filter='opacity(0%)';
        window.document.querySelector('.blockImagetriste').style.filter='opacity(0%)';
    });
}
noThree();

function noAll(){
    window.document.querySelector('.clear').addEventListener('click',()=>{
        window.document.querySelector('.blockImageindiferente').style.filter='opacity(0%)';
        window.document.querySelector('.blockImagefeliz').style.filter='opacity(0%)';
        window.document.querySelector('.blockImagetriste').style.filter='opacity(0%)';
    });
}
noAll();