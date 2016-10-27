var responsive;
var isMenuOut;
//---------------------------------
$(document).ready(function() {
    setVars();
    setResize();
    setMenu();
    setPanel();
    setAboutBar();
    emitParticles();
    setAnimations();
});
//---------------------------------
function setVars() {
    responsive = $(document.body).css("content").replace(/"/g, '');
    isMenuOut = true;
}

function setResize() {
    $(window).resize(function() {
        responsive = $(document.body).css("content").replace(/"/g, '');
        //---------------------------------
        if (responsive == "wide") {
            $(".aboutHeader").css({"top": "25px"});
            initAboutBar();
            $(".aboutBar").css({"visibility": "visible", "opacity": "1"});
            //---------------------------------
            if($(window).scrollTop() > 100) {
                $(".menu").animate({right: "30px"}, 500, "swing");
            } else {
                $(".menu").animate({right: "-80px"}, 500, "swing");
            }
        } else {
            $(".aboutBar").css({"visibility": "hidden"});
            //---------------------------------
            $(".menu").animate({right: "30px"}, 500, "swing");
        }
    });
}

function setMenu() {
    if (responsive == "wide") {
        if($(window).scrollTop() > 100) {
            $(".menu").css({"right": "30px"});
        }
    }
    //---------------------------------
    $(window).scroll(function() {
        if (responsive == "wide") {
            if($(window).scrollTop() > 100) {
                if (isMenuOut) {
                    $(".menu").animate({right: "30px"}, 500, "swing");
                    isMenuOut = false;
                }
            } else {
                if (!isMenuOut) {
                    $(".menu").animate({right: "-80px"}, 500, "swing");
                    isMenuOut = true;
                }
            }
        }
    });
    //---------------------------------
    $(".menu").click(function() {
        $(".panel").css({
            "visibility": "visible",
            "opacity": "1"
        });
        $(".panel").animate({width: "200vw", height: "200vh"}, 1000, "swing");
        //---------------------------------
        setTimeout(function() {
            $(".panelHeader").css({"top": "0"});
        }, 500);
    });
}

function setPanel() {
    $(".panelClose").click(function() {
        hidePanel();
    });
}

function hidePanel(dest) {
    $(".panel").css({"opacity": "0"});
    setTimeout(function() { $(".panel").css({"visibility": "hidden"}); }, 1000);
    $(".panel").animate({width: "0", height: "0"}, 1000, "swing");
    //---------------------------------
    $(".panelHeader").css({"top": "-200px"});
    //---------------------------------
    if (dest) scrollTo(dest);
}

function scrollTo(dest) {
    $('body').animate({scrollTop: $(dest).offset().top}, 1000);
}

function setAboutBar() {
    $('.aboutHeader a').each(function(i, item) {
        $(item).on("mouseover", function(event) {
            var target = $(event.target.parentElement);
            $(".aboutBar").css({
                "top": (target.offset().top + (target.height() / 1.3))  + "px",
                "left": (target.offset().left + (target.width() / 4)) + "px",
                "transition-delay": "0s"
            });
        });
        //---------------------------------
        $(item).on("mouseout", function(event) {
            initAboutBar();
            $(".aboutBar").css({"transition-delay": "0.25s"});
        });
    });
}

function initAboutBar() {
    var target = $(".aboutHeader li:first-child");
    $(".aboutBar").css({
        "top": (target.offset().top + (target.height() / 1.3))  + "px",
        "left": (target.offset().left + (target.width() / 4)) + "px"
    });
}

function constrain(value, min, max) {
    if (value < min) return min;
    else if (value > max) return max;
    else return value;
}

function emitParticles() {
    particlesJS.load('particles-js', 'assets/particlesjs-config.json');
}

function setAnimations() {
    var animSpeed = 500;
    var totalDelay = 0;
    //---------------------------------
    if (responsive == "wide") {
        $(".aboutHeader").animate({top: "25px"}, animSpeed, "swing", function() {
            initAboutBar();
            $(".aboutBar").css({"visibility": "visible"});
            $(".aboutBar").animate({opacity: "1"}, animSpeed);
        });
        totalDelay += animSpeed * 2;
    } else {
        $(".menu").animate({right: "30px"}, animSpeed);
        totalDelay += animSpeed;
    }
    //---------------------------------
    setTimeout(function() {
        $(".aboutHello").typed({
            strings: ["Hello, my name is"],
            typeSpeed: 0
        });
    }, totalDelay);
    totalDelay += animSpeed * 2.5;
    //---------------------------------
    setTimeout(function() {
        $(".aboutTitle").typed({
            strings: ["Lamtaoui", "Lamraoui Sifeddine"],
            typeSpeed: 0
        });
    }, totalDelay);
    totalDelay += animSpeed * 4.5;
    //---------------------------------
    $(".titleSplash").delay(totalDelay).animate({opacity: "1"}, animSpeed);
    totalDelay += animSpeed * 1.5;
    //---------------------------------
    $(".aboutContent p").delay(totalDelay).animate({opacity: "1"}, animSpeed);
    totalDelay += animSpeed;
    //---------------------------------
    setTimeout(function() {
        $(".aboutPic").css({"transform": "scale(1, 1)"});
    }, totalDelay);
    totalDelay += animSpeed;
    //---------------------------------
    $(".socialButtons img").delay(totalDelay).animate({opacity: "1"}, animSpeed);
    totalDelay += animSpeed;
    //---------------------------------
    setTimeout(function() {
        $("#particles-js").css({"transform": "scale(1, 1)"});
    }, totalDelay);
    //---------------------------------
    $(".skillsHeader").waypoint(function() {
        $(".skillsHeader").addClass("animated");
        $(".skillsHeader").addClass("fadeIn");
    }, { offset: '100%'});
    //---------------------------------
    $(".skillsBorder").each(function(i, item) {
        $(item).waypoint(function() {
            $(item).addClass("animated");
            if (responsive == "wide") {
                $(item).addClass("zoomIn");
            } else {
                if (i % 2 == 0) $(item).addClass("fadeInRight");
                else $(item).addClass("fadeInLeft");
            }
        }, { offset: '100%'});
    });
    //---------------------------------
    $(".workHeader").waypoint(function() {
        $(".workHeader").addClass("animated");
        $(".workHeader").addClass("fadeIn");
    }, { offset: '100%'});
    //---------------------------------
    $(".workBorder").each(function(i, item) {
        $(item).waypoint(function() {
            $(item).addClass("animated");
            if (i % 2 == 0) $(item).addClass("fadeInLeft");
            else $(item).addClass("fadeInRight");
        }, { offset: '100%'});
    });
     //---------------------------------
    $(".contactHeader").waypoint(function() {
        $(".contactHeader").addClass("animated");
        $(".contactHeader").addClass("fadeIn");
    }, { offset: '100%'});
    //---------------------------------
    $('.contactContent [class*="col-xs-12"]').each(function(i, item) {
        $(item).waypoint(function() {
            $(item).addClass("animated");
            if (i % 2 == 0) $(item).addClass("fadeInRight");
            else $(item).addClass("fadeInLeft");
        }, { offset: '100%'});
    });
}