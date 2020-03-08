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
        $("#warning").text("")
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
        return false;
    }
    else{
        return true
    }

}
