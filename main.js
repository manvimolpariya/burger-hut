let menubar=document.querySelector('.menubar');
let navbar =document.querySelector('.navbar');
let section=document.getElementsByTagName('section')[0];
menubar.onclick=()=>{
   navbar.classList.toggle('active'); 
   menubar.classList.toggle('fa-xmark');
}
window.onscroll=()=>{
    navbar.classList.remove('active'); 
    menubar.classList.remove('fa-xmark');
}
section.onclick=()=>{
    navbar.classList.remove('active'); 
    menubar.classList.remove('fa-xmark');
}