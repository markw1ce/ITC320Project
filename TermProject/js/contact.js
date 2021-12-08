var $ = function (id) { return document.getElementById(id); };
//I was having issues with getting this to sent emails last minute so this is my fix for now
var send =function(subject,body){
    window.alert("email sent as "+subject+" "+body)
};
var submit = function() {
    if($("name").value=="" ||$("email").value==""|| $("content").value==""){
        window.alert("invalid input");
        return;
    }
    var subject=$("name").value+" "+$("email").value;
    var body=$("content").value;
    send(subject,body);
    $("name").focus();
};
var reset= function() {
    $("name").value="";
    $("email").value="";
    $("content").value="";
    $("name").focus();
};
window.onload = function () {
    $("submit").onclick=submit;
    $("reset").onclick=reset;
    $("name").focus();
};





























































































