function noPopUp(){
    window.document.querySelector('.btnClosePopUp').addEventListener('click',()=>{
        window.document.querySelector('.popUp').style.transform='translateX(-200%)';
    });
}
noPopUp();