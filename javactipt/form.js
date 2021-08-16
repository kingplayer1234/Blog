window.onload= setform;

function setform(){
    document.forms[0].onsubmit=function(){
    if(this.checkValidity()) alert("Thank you for subscribing");
    return false;
    }
}