var pic = document.querySelectorAll(".carr_pic li");
var carrprev =document.querySelector(".carr_prev");
var carrnext =document.querySelector(".carr_next");
var length = pic.length;
var index = 0;
var times = null;
function next(){
	index ++;
	if(index>length-1){
		index=0;
	}
	for(var i = 0;i<length;i++){
		pic[i].style.opacity="0";
	}
	pic[index].style.opacity="1";
}
carrnext.onmouseover=function(){
	clearInterval(times);
}
carrnext.onmouseout=function(){
	clearInterval(times);
	times = setInterval(next,3500);
}
carrnext.onclick=function(){
	next();
}
function prev(){
	index --;
	if(index<0){
		index=length-1;
	}
	for(var i = 0;i<length;i++){
		pic[i].style.opacity="0";
	}
	pic[index].style.opacity="1";
}
carrprev.onmouseover=function(){
	clearInterval(times);
}
carrprev.onmouseout=function(){
	clearInterval(times);
	times = setInterval(next,3500);
}
carrprev.onclick=function(){
	prev();
}
times = setInterval(next,3500);

// 导航栏
var nav_div_a=document.querySelectorAll(".Nav_div a");
var nav_div_i=document.querySelectorAll(".Nav_div i");
var index=0;

for (var i = 0; i < nav_div_a.length; i++) {
    nav_div_a[i].index=i;
    nav_div_a[i].onmouseover=function(){
        for (var i = 0; i<nav_div_a.length;i++) {
            nav_div_a[i].className="";
            nav_div_i[i].style.display="";
            nav_div_i[i].style.background="";
        }
        nav_div_a[this.index].className="Nav_div_a";
        nav_div_i[this.index].style.background="transparent";
        nav_div_i[this.index+1].style.display="none";
    }

    nav_div_a[i].onmouseout=function(){
        nav_div_a[this.index].className="";
        nav_div_i[this.index].style.background="";
        nav_div_i[this.index+1].style.display="";
    }
}
