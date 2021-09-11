let menuBar = document.querySelector('#menu-bar');
let navBar = document.querySelector('.navbar');

menuBar.onclick = () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
    // console.log("ok");
}

window.onscroll = () => {
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
}
