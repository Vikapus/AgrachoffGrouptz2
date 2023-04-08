document.addEventListener("DOMContentLoaded", function () {
    function About_menu_on() {
        $("#About-menu").show(300);
    }
    var b1 = document.getElementById("About");
    b1.addEventListener("click", About_menu_on);
    function About_menu_leave() {
        $("#About-menu").hide(300);
    }
    var b3=document.getElementById("circle");
    b3.addEventListener("click",About_menu_leave);
    
    var rng=document.getElementById("r1"); //rng - это Input
    var p=document.getElementById("one"); // p - абзац
    p.innerHTML=rng.value+'м<sup>2</sup>';
    rng.addEventListener("change", fun1);
    function fun1() {
        p=document.getElementById("one"); // p - абзац

        p.innerHTML=String(rng.value)+'м<sup>2</sup>';

    }
    //button_call
    animate({
        duration: 700,
        timing: function circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
        },
        draw: function(progress) {
        $(".button_call").css("right", 60*progress-40+"px");
        $(".button_call").css("opacity", progress);
        }
    });
    $(".button_call").css("position", "relative");

    animate({
        duration: 700,
        timing: function circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
        },
        draw: function(progress) {
        $(".description").css("left", progress*10+"px");
        $(".description").css("opacity", progress);
        }
    });
    $(".description").css("position", "relative");
    animate({
        duration: 700,
        timing: function circ(timeFraction) {
        return 1 - Math.sin(Math.acos(timeFraction));
        },
        draw: function(progress) {
        $(".calculation").css("right", progress*20+"px");
        $(".calculation").css("opacity", progress);
        }
    });
    $(".calculation").css("position", "relative");

    function animate({timing, draw, duration}) {

        let start = performance.now();
        
        requestAnimationFrame(function animate(time) {
            // timeFraction изменяется от 0 до 1
            let timeFraction = (time - start) / duration;
            if (timeFraction > 1) timeFraction = 1;
            
            // вычисление текущего состояния анимации
            let progress = timing(timeFraction);
            
            draw(progress); // отрисовать её
            
            if (timeFraction < 1) {
            requestAnimationFrame(animate);
            }
        });
    }
    var ls =0;
    window.addEventListener("scroll", function(){
       var st = $(this).scrollTop(); 
       var right_r = this.document.getElementById("rectangle").style.right;
       var str = right_r.substring(0,right_r.length-2);
       var int = parseInt(str,10);
       if(st> ls){
        $(".rectangle").animate({right: '-=10'},5);

       }
       else {
        if(int+10<=0){
        $(".rectangle").animate({right: '+=10'},5);
        }
       }
       if(st>0){
       ls=st;
       }
    });






});
