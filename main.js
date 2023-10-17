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







$("#sship").dblclick(function(){
    window.open("자기소개.html");
})

