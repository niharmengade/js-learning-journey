const randomColor = function(){
    const hex = '0123456ABCDEF'
    let color = '#'
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
        
    }
    return color
}
 let intervalid
const startchangingcolor = function(){
   if(!intervalid){
    intervalid = setInterval(changecolor,250);
   }
   function changecolor(){
     document.body.style.backgroundColor = randomColor();
   }
}
const stopchangingcolor = function(){
    clearInterval(intervalid)
    intervalid = null;

}
document.querySelector("#start").
addEventListener
("click",startchangingcolor)
document.querySelector("#stop").
addEventListener
("click",stopchangingcolor)
document.querySelector("#h2").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/pro2.html";
});



