//자기소개 스크립트


//카테고리 자기소개, 포트폴리오 목록 띄움
$(".category li").click(function(){
    $(this).addClass("select").siblings().removeClass();

    var num = $(this).index();
    $("#infor > div").eq(num).addClass("on").siblings().removeClass("on"); 
});



/* 클릭해서 버튼 형식으로 사용할 때 스크립트
// 사용 스킬 별 안내 창 
 $(".skillicon li").click(function(){
     var num = $(this).index();
     var up = $(".skill > div").eq(num).addClass("on").siblings().removeClass("on");
    
     $(this).css({"margin-top":"54px","border-radius":"10px 10px 0 0"}).siblings().css({"margin-top":"25px","border-radius":"10px"});
 });



 스킬 안내창 닫기 버튼
 $(".skill > div > a").click(function(){
     $(".skill > div").removeClass("on");
     $(".skillicon > li").css({"margin-top":"25px","border-radius":"10px"});
 });
 */
 




/* 마우스 호버시 안내 스크립트*/
// 마우스 올라갔을 때
$(".skillicon li").on("mouseover focusin",function(){  
    var num = $(this).index();
    var up = $(".skill > section").eq(num).addClass("on").siblings().removeClass("on");
    
    $(this).css({"margin-top":"54px","border-radius":"10px 10px 0 0"}).siblings().css({"margin-top":"25px","border-radius":"10px"});
});

$(".skill > section").on("mouseover focusin",function(){   
    var num = $(this).index() -2;
    $(".skillicon li").eq(num).css({"margin-top":"54px","border-radius":"10px 10px 0 0"}).siblings().css({"margin-top":"25px","border-radius":"10px"});

    $(this).addClass("on").siblings().removeClass("on");
});


// 마우스 빠졌을 때
$(".skillicon li, .skill > section").on("mouseleave focusin",function(){   
    $(".skill > section").removeClass("on");
    $(".skillicon > li").css({"margin-top":"25px","border-radius":"10px"});
});


//포트폴리오 슬라이드 
var g = 0;

//한양사이버대학원 슬라이더
function hanyangauto(){
    
    $(".hanyangslide").animate({"left":"-594px"},500,function(){
        $(this).append($(".hanyangslide li:first-child")).css({"left":"0"});
    })};


var hantimer = setInterval("hanyangauto()",6000);

$(".link").hover(
    function(){
        clearInterval(hantimer)
    },
    function(){
        hantimer = setInterval("hanyangauto()",6000)
    }
);

$(".next").click(function(){
    hanyangauto();
});

$(".prev").click(function(){
    $(".hanyangslide").css({"left":"-594px"}).prepend($(".hanyangslide li:last-child")).animate({"left":"0"},500)
});



//세계자연기금 슬라이더
function worldauto(){
    $(".worldslide").animate({"left":"-594px"},500,function(){
        $(this).append($(".worldslide li:first-child")).css({"left":"0"});
    })};


var worldtimer = setInterval("worldauto()",6000);

$(".link2").hover(
    function(){
        clearInterval(worldtimer)
    },
    function(){
        worldtimer = setInterval("worldauto()",6000)
    }
);

$(".wnext").click(function(){
    worldauto();
});

$(".wprev").click(function(){
    $(".worldslide").css({"left":"-594px"}).prepend($(".worldslide li:last-child")).animate({"left":"0"},500)
});



//하이퍼니처 슬라이드
function hiauto(){
    
    $(".hislide").animate({"left":"-594px"},500,function(){
        $(this).append($(".hislide li:first-child")).css({"left":"0"});
    })};


var hitimer = setInterval("hiauto()",6000);

$(".link3").hover(
    function(){
        clearInterval(hitimer)
    },
    function(){
        hitimer = setInterval("hiauto()",6000)
    }
);

$(".hnext").click(function(){
    hiauto();
});

$(".hprev").click(function(){
    $(".hislide").css({"left":"-594px"}).prepend($(".hislide li:last-child")).animate({"left":"0"},500)
});



