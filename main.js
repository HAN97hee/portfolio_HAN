// 텍스트 타자기
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Welcome to my homepage')
    .pauseFor(4500)
    .deleteAll()
    .typeString("<strong>I'm Han, a new web publisher</strong>")
    .pauseFor(4500)
    .deleteAll()
    .typeString('<i class="xi-long-arrow-left"></i>DoubleClick an object <br>next to you to move it')
    .pauseFor(4500)
    .start();






// 위성클릭시 페이지 이동 
$("#sship").dblclick(function(){
    window.open("자기소개.html");
})



// 페이지 안내 전구 텍스트 블록
const iconElement = document.querySelector('.ex i');

const textElement = document.querySelector('.ex p');

iconElement.addEventListener('mouseenter', () => {
    textElement.classList.add('on');
});


iconElement.addEventListener('mouseleave', () => {
    textElement.classList.remove('on');
});


