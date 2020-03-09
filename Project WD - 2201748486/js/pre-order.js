$(document).ready(
    autoWidth()
)

$(window).on('resize',function (){
    $(".file-bg").width($("#register-file").width()+"px")
    $(".file-bg").height($("#register-file").height()+"px")
});

function autoWidth(){
    $(".file-bg").width($("#register-file").width()+"px")
    $(".file-bg").height($("#register-file").height()+"px")
}

function submit(){
    $("#warning").css("color", "#d4dc24");

    if($("#username").val() == ""){
        $("#warning").text("Username can't be empty!")
    }
    else if($("#email").val() == ""){
        $("#warning").text("Email can't be empty!")
    }
    else if(emailCheck($("#email").val())){
        $("#warning").text("Email needs to be in email format!")
    }
    else if($("#password").val() == ""){
        $("#warning").text("Password can't be empty!")
    }
    else if(passAlphaNum()){
        $("#warning").text("Password must contains alphabet and number!")
    }
    else if($("#conf-password").val() == ""){
        $("#warning").text("Confirmation password can't be empty!")
    }
    else if(checkConfPass()){
        $("#warning").text("Confirmation password must be the same as password!")
    }
    else if($("#address").val() == ""){
        $("#warning").text("Address can't be empty!")
    }
    else if($("#copies").val() == 0){
        $("#warning").text("Copies can't be empty!")
    }
    else if($("#type").val() == null){
        $("#warning").text("Type needs to be selected!")
    }
    else if($("#term").is(":checked") == false){
        $("#warning").text("You need to agree to term and service!")
    }
    else{
        $("#warning").css("color", "#36a9e0");
        $("#warning").text("Pre-Order success!")
    }
}

function emailCheck(email){
    let count_a = 0
    for(let i = 0 ; i < email.length; i++){
        if(email[i] == '@'){
            count_a++
            if(count_a > 1 || email[i+1] == '.' ||  email[i-1] == '.'){
                return true
            }
        }
    }
    if(count_a!=1 || email[0] == '@' || email[0] == '.' ||  email[email.length - 1] == '@' ||  email[email.length - 1] == '.'){
        return true
    }
    else{
        return false
    }
}

function checkConfPass(){
    let pass = $("#password").val()
    let confPass = $("#conf-password").val()

    if(pass == confPass){
        return false
    }
    else{
        return true
    }
}

function passAlphaNum(){
    let count_alpha = 0
    let count_num = 0
    let pass = $("#password").val()
    for(let i = 0 ; i < pass.length; i++){
        if((pass[i] >= "a" && pass[i] <= "z" ) || (pass[i] >= "A" && pass[i] <= "Z" )){
            count_alpha++
        }
        else if($.isNumeric(pass[i])){
            count_num++
        }
    }
    if(count_num > 0 && count_alpha > 0){
        return false;
    }
    else{
        return true
    }
}
