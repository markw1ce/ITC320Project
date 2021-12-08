var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    var reciept = sessionStorage.getItem("reciept");
    if(reciept){
        $("reciept").innerHTML=reciept;
    }
};