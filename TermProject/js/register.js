var $ = function (id) { return document.getElementById(id); };

var send =function(subject,body){
    window.alert(subject,body)
};

var stringNotEqual=function(str1,str2){
    if(str1.length!=str2.length){
        return 1;
    }
    if(str1!=str2){
        return 1;
    }
}

var invalidInputs=function(){
    var mInit=$("mInit").value;
    
    var email1=$("email").value.toString();
    var email2=$("cEmail").value.toString();
    if( $("fName").value==""){
        window.alert("you must enter a first name");
        return 1;
    }
    if( $("lName").value==""){
        window.alert("you must enter a last name");
        return 1;
    }
    var date=$("bDay").value;
    if( date==""){
        window.alert("you must enter a birth date");
        return 1;
    }
    if(mInit.length!=1){
        window.alert("your Middle initial should only be one character")
        return 1;
    }
    if(stringNotEqual(email1,email2)){ //i was having a wierd issue but having this method fixes it
        window.alert("the emails are not matching "+email1+" "+email2);
        return 1;
    }
    if(email1.indexOf("@")==-1&&email1.indexOf(".")==-1){
        window.alert("you must enter a valid email "+email1);
        return 1;
    }
    
    return 0;
};
var submit = function() {
    if(invalidInputs()){
        return;
    }
    //this is the point where we would register the user
    window.alert("thank you for registering with us");
    $("fName").focus();
};
var reset= function() {
    $("fName").value="";
    $("mInit").value="";
    $("lName").value="";
    $("email").value="";
    $("bDay").value="";
    $("cEmail").value="";
    $("fName").focus();
};
var adminSelect=function(){
    $("notAdmin").checked =false;
    $("admin").checked =true;
}
var NotAdminSelect=function(){
    $("notAdmin").checked =true;
    $("admin").checked =false;
}
window.onload = function () {
    $("submit").onclick=submit;
    $("reset").onclick=reset;
    $("admin").onclick=adminSelect;
    $("notAdmin").onclick=NotAdminSelect;
    $("notAdmin").checked =true;
    $("fName").focus();
};





















































