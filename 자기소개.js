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













