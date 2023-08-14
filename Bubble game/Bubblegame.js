function makebubble(){
var clutter = "";
for(var i=1;i<=152;i++)
{
 var a= Math.floor(Math.random()*10);
  clutter += `<div class="bubble">${a}</div>`;
}
document.querySelector("#pbottom").innerHTML=clutter;
}
var time=60;
function runtime(){
var timeint = setInterval(function(){
  if(time>0){
  time--;
  document.querySelector("#timer").textContent=time;
  }
  else{
    clearInterval(timeint);
    document.querySelector("#pbottom").innerHTML=`<h3 style="Color : blue; font-size: 40px">Game Over<h3>`;
  }
},1000);
}
var h=0;
function gethit(){
   h = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=h;
}
var score=0;
function increasescore(){
  score += 10;
  document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbottom").addEventListener("click",function(dets){
  var a = Number(dets.target.textContent);
   if(a==h)
   {
    increasescore();
    gethit();
    makebubble();
   }
});
runtime();
gethit();
makebubble();

