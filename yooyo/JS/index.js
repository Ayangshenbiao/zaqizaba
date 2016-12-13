window.onload=function(){
var banner=document.querySelector(".banner");
var slides = document.querySelectorAll(".banner .slides li");
var slider_btn=document.querySelectorAll(".banner .slides_btn li a");
var slider_prev=document.querySelector(".banner .flex_direction .flex_prev");
var slider_next=document.querySelector(".banner .flex_direction .flex_next");
var index = 0;
var timer=null;
    timer=setInterval(next,3000);
for(var i=0;i<slides.length;i++){
    slider_btn[i].index=i;
    slider_btn[i].onclick=function () {
        clearInterval(timer);
        for(var i=0;i<slides.length;i++){
            slider_btn[i].className="";
            slides[i].style.opacity=0;
        }
        this.className="active";
        slides[this.index].style.opacity=1;
        index=this.index;
    }
}
slider_prev.onclick=function () {
    index--;
    if(index<0){
        index=slides.length-1;
    }
    for(var i=0;i<slides.length;i++){
        slider_btn[i].className="";
        slides[i].style.opacity=0;
    }
    slider_btn[index].className="active";
    slides[index].style.opacity=1;
};
slider_next.onclick=function () {
    next();
};
slider_prev.onmouseover=function () {
    clearInterval(timer);
};
slider_next.onmouseover=function () {
    clearInterval(timer);
};
banner.onmouseover=function () {
    clearInterval(timer);
};
banner.onmouseout=function () {
    timer=setInterval(next,3000);
};

function next() {
    index++;
    if(index>slides.length-1){
        index=0;
    }
    for(var i=0;i<slides.length;i++){
        slider_btn[i].className="";
        slides[i].style.opacity=0;
    }
    slider_btn[index].className="active";
    slides[index].style.opacity=1;
}




//回到顶部

    var btn = document.querySelector(".to_top");
    var isTop = true;
    var timer1 = null;
    var iHeight = window.innerHeight;
//    下拉加载

var product_box = document.querySelector(".indexPro_list_left .item_list");
var product_row = document.querySelectorAll(".indexPro_list_left .item_list .row");

var img1 = document.images["img1"];
var img2 = document.images["img2"];
var img3 = document.images["img3"];
var img4 = document.images["img4"];
var img5 = document.images["img5"];
var img6 = document.images["img6"];
var img7 = document.images["img7"];
var url1 = img1.getAttribute("data-src");
var url2 = img2.getAttribute("data-src");
var url3 = img3.getAttribute("data-src");
var url4 = img4.getAttribute("data-src");
var url5 = img5.getAttribute("data-src");
var url6 = img6.getAttribute("data-src");
var url7 = img7.getAttribute("data-src");
var scrollTop = 300;
var header = document.querySelector("header");
    window.onscroll = function(){
        var top = document.body.scrollTop;
        if(top >=iHeight){
            btn.style.display = "block";
        }else{
            btn.style.display = "none"
        }
        if(!isTop){
            clearInterval(timer1);
        }
        isTop = false;

        //下拉加载图片
        if(top<=scrollTop+400){
            img1.src = url1;
        }else if(top>=scrollTop+400&&top<=scrollTop+400*2){
            img2.src = url2;
        }else if(top>=scrollTop+400*2&&top<=scrollTop+400*3){
            img3.src = url3;
        }else if(top>=scrollTop+400*3&&top<=scrollTop+400*4){
            img4.src = url4;
        }else if(top>=scrollTop+400*4&&top<=scrollTop+400*5){
            img5.src = url5;
        }else if(top>=scrollTop+400*5&&top<=scrollTop+400*6){
            img6.src = url6;
        }else if(top>=scrollTop+400*6){
            img7.src = url7;
        }

        console.log(top);

        if(top>=600){
            header.className="headergreen";
        }else {
            header.className="";
        }
    };
    btn.onclick = function(){
        clearInterval(timer1);
        timer1 = setInterval(fn,30);
        function fn(){
            var top = document.body.scrollTop;
            var sudu = Math.ceil(top/10);
            document.body.scrollTop = top - sudu;
            isTop = true;
            if(top == 0){
                clearInterval(timer1);
            }
        }
    };

//导航栏

    var toggle = document.querySelector(".nav_city_toggle");
    var toggle_list=document.querySelector(".nav_city_list");
    var isTrue = false;
    var isBlock = "";
    var isToggle = "";
    toggle.onclick=function(){
        isTrue = !isTrue;
        if(isTrue){
            isBlock = "block";
            isToggle= "nav_city_toggles bg";
        }else{
            isBlock = "none";
            isToggle = "nav_city_toggle";
        }
        toggle.className=isToggle;
        toggle_list.style.display=isBlock;
    }




    var login_btn=document.querySelector(".fixed");

    login_btn.onclick=function() {
        $.ajax({
            type: "get",
            url: "php/login.php",
            async: true,
            dataType: "json",
            data: {

            },
            success: function (data) {
                //接收后台返还的信息
                console.log(data);
            }
        });
    };


//浏览更多(只是单纯的效果)
    var item_list = document.getElementsByClassName("item_list")[0];
    var more = document.getElementsByClassName("more_box")[0];
    var rows = item_list.getElementsByClassName("rows")[0];
    var row = "";
    more.onclick=function () {
        row = rows.cloneNode(true);
        row.style.marginTop="60px";
        var row1 = item_list.insertBefore(row,more);
    }




















};