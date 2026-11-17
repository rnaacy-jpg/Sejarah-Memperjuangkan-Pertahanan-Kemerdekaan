var IC={
flag:"<path d='M3 14.5V2M3 2.5h8.5L9.8 5.2l1.7 2.8H3'/>",
pincer:"<path d='M1.5 3.5 6.5 8l-5 4.5M14.5 3.5 9.5 8l5 4.5'/>",
flame:"<path d='M8 1.5c.6 2.6 3.7 3.8 3.7 7.2a3.7 3.7 0 0 1-7.4 0c0-1.7.9-2.8 1.7-3.6.2 1 .7 1.5 1.3 1.5C7.1 4.9 7.3 3.1 8 1.5z'/>",
crosshair:"<circle cx='8' cy='8' r='4.5'/><path d='M8 1v4M8 11v4M1 8h4M11 8h4'/>",
monument:"<path d='M8 1.5 10 4.2v8.8H6V4.2zM4 14.5h8'/>",
megaphone:"<path d='M2 6v4h2.2L9.5 13V3L4.2 6zM12 5.5a3.5 3.5 0 0 1 0 5'/>",
helmet:"<path d='M2.5 10a5.5 5.5 0 0 1 11 0zM1.5 10h13v2.2h-13z'/>",
hotel:"<path d='M3 14V2.5h7V14M10 6.5h3V14M5.5 5h2M5.5 8h2M5.5 11h2M1.5 14h13'/>",
columns:"<path d='M1.5 6.5 8 2l6.5 4.5zM3.5 8v4.5M6.5 8v4.5M9.5 8v4.5M12.5 8v4.5M1.5 14h13'/>",
ship:"<path d='M2 9h12l-1.6 3.5H3.6zM8 9V2.5l3.2 4.5H8M2 14.5c1 .6 2 .6 3 0s2-.6 3 0 2 .6 3 0 2 .6 3 0'/>",
house:"<path d='M1.8 8 8 2.5 14.2 8M3.5 7v7h9V7M6.5 14v-4h3v4'/>",
tree:"<path d='M8 1.5 11.5 7h-7zM8 5l4.5 6h-9zM8 11v3.5'/>",
menu:"<path d='M2 4h12M2 8h12M2 12h12'/>",
grid:"<path d='M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z'/>",
info:"<circle cx='8' cy='8' r='6.5'/><path d='M6 6.2a2 2 0 1 1 3 1.7c-.7.4-1 .8-1 1.6M8 11.7v.4'/>"};
function svg(k){return "<svg class='ico' viewBox='0 0 16 16' aria-hidden='true'>"+IC[k]+"</svg>"}
var A=["What (Apa)","When (Kapan)","Where (Di mana)","Who (Siapa)","Why (Mengapa)","How (Bagaimana)","Dampak & Makna"];
var S=["What","When","Where","Who","Why","How","Dampak"];
var cur=0,tab=0,tm,ty;
function $(i){return document.getElementById(i)}
function toast(t){var e=$("toast");e.textContent=t;e.className="show";clearTimeout(tm);tm=setTimeout(function(){e.className=""},2400)}
function pop(k,ic,t,p,b,fn){$("mk").textContent=k;$("mi").innerHTML=ic;$("mt").textContent=t;$("mp").textContent=p;$("mb").textContent=b;$("mb").onclick=function(){$("ov").className="";if(fn)fn()};$("mc").style.display=fn?"":"none";$("mc").onclick=function(){$("ov").className=""};$("ov").className="show"}
function root(g){document.documentElement.style.setProperty("--acc",g=="f"?"var(--red)":"var(--blue)")}
function typeIt(s){clearInterval(ty);var e=$("txt"),i=0;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.textContent=s;return}e.textContent="";ty=setInterval(function(){i+=3;e.textContent=s.slice(0,i);if(i>=s.length)clearInterval(ty)},16)}
function replay(){[[".box,#title,.crumb","rise"],["#lab","stamp"]].forEach(function(p){document.querySelectorAll(p[0]).forEach(function(e){e.classList.remove("rise","stamp");void e.offsetWidth;e.classList.add(p[1])})})}
function render(){
var x=D[cur];root(x.g);
$("crumb").textContent=(x.g=="f"?"Perjuangan Fisik":"Perjuangan Diplomasi")+" · "+x.y;
$("title").textContent=x.n;$("lab").textContent=A[tab];typeIt(x.d[tab]);replay();
$("prev").disabled=tab==0;$("next").disabled=tab==6;
var h=document.querySelectorAll(".tab");for(var i=0;i<h.length;i++)h[i].className="tab"+(i==tab?" on":"");
var s=document.querySelectorAll(".item");for(i=0;i<s.length;i++)s[i].className="item"+(i==cur?" on":"");
$("dots").textContent="Langkah "+(tab+1)+" dari 7";
}
function showMat(){$("hall").classList.add("gone");$("mat").classList.add("show");render()}
function goHall(){$("mat").classList.remove("show");$("hall").classList.remove("gone");$("hall").scrollTop=0;root("f");toast("Kembali ke galeri")}
function openRoom(i){cur=i;tab=0;var x=D[i];root(x.g);pop("Elemen peristiwa · "+x.y,svg(x.i),x.e[0],x.e[1],"Masuk ke Materi →",showMat)}
var Wd=$("world"),L=4200,pos=0,tp=0,yaw=0,tyw=0,tx,ty0;
var wl=Wd.parentNode.querySelector(".wl"),wr=Wd.querySelector(".wr");
wl.innerHTML='<div class="wlab" style="left:1020px">Perjuangan<br>Fisik</div>';
wr.innerHTML='<div class="wlab" style="left:'+(L-420)+'px">Perjuangan<br>Diplomasi</div>';
D.forEach(function(x,i){var f=x.g=="f",j=f?i:i-7,dd=f?520+j*480:760+j*480;
var e=document.createElement("div");e.className="art"+(f?"":" d");e.style.left=((f?dd+900:L-dd)-120)+"px";
e.innerHTML='<div class="frame"><div class="pic"><span class="no">'+(i+1)+'</span>'+svg(x.i)+'<b>'+x.n+'</b><small>'+x.y+'</small></div></div>';
e.onclick=function(){openRoom(i)};(f?wl:wr).appendChild(e)});
function clamp(v){return Math.max(0,Math.min(L-760,v))}
function fov(){$("gal").style.perspective=Math.max(260,Math.min(700,innerWidth*.55))+"px"}
fov();addEventListener("resize",fov);tp=240;
(function tick(){pos+=(tp-pos)*.08;yaw+=(tyw-yaw)*.08;Wd.style.transform="rotateY("+yaw+"deg) translateZ("+pos+"px)";$("prog").style.width=(pos/(L-760)*100)+"%";requestAnimationFrame(tick)})();
function turn(v){tyw=Math.max(-45,Math.min(45,tyw+v))}
$("hall").addEventListener("wheel",function(e){e.preventDefault();tp=clamp(tp+e.deltaY*1.1)},{passive:false});
$("hall").addEventListener("mousemove",function(e){tyw=(e.clientX/innerWidth-.5)*80});
$("hall").addEventListener("touchstart",function(e){tx=e.touches[0].clientX;ty0=e.touches[0].clientY},{passive:true});
$("hall").addEventListener("touchmove",function(e){var t=e.touches[0];tp=clamp(tp-(t.clientY-ty0)*2.2);turn(-(t.clientX-tx)*.2);tx=t.clientX;ty0=t.clientY},{passive:true});
document.addEventListener("keydown",function(e){if($("mat").classList.contains("show")||$("ov").classList.contains("show"))return;var k=e.key;
if(k=="ArrowUp"||k=="w")tp=clamp(tp+260);else if(k=="ArrowDown"||k=="s")tp=clamp(tp-260);else if(k=="ArrowLeft"||k=="a")turn(-20);else if(k=="ArrowRight"||k=="d")turn(20)});
$("fw").onclick=function(){tp=clamp(tp+320)};$("bw").onclick=function(){tp=clamp(tp-320)};
$("tl").onclick=function(){turn(-25)};$("tr").onclick=function(){turn(25)};
$("toCover").onclick=function(){$("cover").classList.remove("out")};
var t=$("tabs");S.forEach(function(s,i){var b=document.createElement("button");b.className="tab";b.textContent=s;b.onclick=function(){tab=i;render()};t.appendChild(b)});
var sd=$("side"),lastg="";
D.forEach(function(x,i){if(x.g!=lastg){lastg=x.g;var h=document.createElement("h4");h.textContent=x.g=="f"?"Perjuangan Fisik":"Perjuangan Diplomasi";sd.appendChild(h)}
var b=document.createElement("button");b.className="item";b.textContent=x.n;b.style.setProperty("--i",i);
b.onclick=function(){sd.classList.remove("open");openRoom(i)};sd.appendChild(b)});
$("menu").onclick=function(){if(window.innerWidth>760){var h=document.body.classList.toggle("nosb");toast(h?"Sidebar disembunyikan":"Sidebar ditampilkan")}else sd.classList.toggle("open")};
$("home").onclick=goHall;
$("prev").onclick=function(){if(tab>0){tab--;render()}};
$("next").onclick=function(){if(tab<6){tab++;render()}};
$("info").onclick=function(){pop("Petunjuk",svg("info"),"Cara memakai","Di galeri, gulir atau geser untuk berjalan dan gerakkan kursor untuk menoleh. Klik sebuah lukisan, baca elemen peristiwanya, lalu masuk ke materi. Di materi, pilih What sampai Dampak di navbar. Tombol Galeri membawamu kembali ke galeri.","Mengerti")};
$("ov").onclick=function(e){if(e.target==this)this.className=""};
$("go").onclick=function(){var c=$("cover");c.classList.add("out");toast("Klik sebuah lukisan untuk masuk ke materi")};
$("menu").innerHTML=svg("menu");$("home").innerHTML=svg("grid")+" Galeri";$("info").innerHTML=svg("info");document.querySelector(".brand").innerHTML=svg("flag")+" Perjuangan 1945–1949";
