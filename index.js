let menu = document.querySelector(".menu");
let sideBar = document.querySelector(".sideBar");
let num = 0;
menu.addEventListener("click",function(){
    if(num%2==0){
        sideBar.style.display = "flex";
        num++;
    }else{
        sideBar.style.display = "none";
        num++;
    }
    
})
window.addEventListener("scroll",function(){
        sideBar.style.display = "none";        
})