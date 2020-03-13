let imgPos = 1.0
$(document).ready(
    autoWidth()
)

function autoWidth(){
    $(".season-image img").width($(".slider-container").width()+"px")
    $(".slider-images").css("transform","translateX("+(-$(".season-image img").width() * imgPos)+"px)")
    $(".slider-images-text").width($(".slider-container").width()+"px")
    // $(".season-image").height($(".slider-images").height()+"px")
}

$(window).on('resize',autoWidth);

$(".slider-images").css("transform","translateX("+(-$(".season-image img").width() * imgPos)+"px)")

$("#nextBtn").click(nextImage)

$("#leftBtn").click(prevImage)

function nextImage(){
    if(imgPos==4){
        lastImg()
    }
    imgPos++
    $(".slider-images").css({"transition":".3s", "transform":"translateX("+(-$(".season-image img").width() * imgPos)+"px)"})
}

function prevImage(){
    if(imgPos==1){
        firstImg()
    }
    imgPos--
    $(".slider-images").css({"transition":".3s", "transform":"translateX("+(-$(".season-image img").width() * imgPos)+"px)"})
}

function firstImg(){
    imgPos=5
    $(".slider-images").css({"transition":"none", "transform":"translateX("+(-$(".season-image img").width() * imgPos)+"px)"})
}

function lastImg(){
    imgPos = 0
    $(".slider-images").css({"transition":"none","transform":"translateX("+(-$(".season-image img").width() * imgPos)+"px)"})
}

function moveSlider(){
    setInterval(nextImage,3000)
}

moveSlider()