//https://www.w3schools.com/js/js_api_web_storage.asp
//look at this to find out how to do persistent storage



var $ = function (id) { return document.getElementById(id); };

var names = ["mouse","monitor","desktop","mousepad","keyboard"];
var prices = [43,34.51,7.90,43.75,47.43];
var quantities = [23,54,2,5,8];
var userNames=["test","t"];
var passwords =["test","t"];

var createEvent=function(){
    var date=$("eventDate").value;
    var text=$("eventText").value;
    if(date==""||text==""){
        window.alert("invalid event input");
    }
    if(sessionStorage.getItem("eventDays")==null){
        sessionStorage.setItem("eventDays",[]);
        sessionStorage.setItem("eventText",[]);
    }
    var update=sessionStorage.getItem("eventText");
    var uptext=sessionStorage.getItem("eventDays");
    update=date;
    uptext=text;
    sessionStorage.setItem("eventDays",update);
    sessionStorage.setItem("eventText",uptext);
}
var createProduct=function(){
    var name=$("productName").value;
    var price=parseFloat($("productPrice").value);
    var quantity=parseFloat($("productquatnitity").value);
    if(name==""||price<=0||isNaN(price)||quantity<=0||isNaN(quantity)||names.indexOf(name)!=-1){
        window.alert("invalid product input");
        return;
    }
    names.push(name);
    prices.push(price);
    quantities.push(quantity);
    updateTable();
}
var arrayRemove = function(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}
var delProduct=function(){
    var name=$("productName").value;
    if(name==""||names.indexOf(name)==-1){
        window.alert("invalid product input");
        return;
    }
    var nameI=names.indexOf(name)+1;
    names= arrayRemove(names,name);
    prices= arrayRemove(prices,prices[nameI]);
    quantities= arrayRemove(quantities,quantities[nameI]);
    updateTable();
}
var updateTable=function(){
    t1="";
    t1+="<tr><th><input type=\"button\" id=\"name\" value=\"name\"></th><th><input type=\"button\" id=\"price\" value=\"price\" ></th><th><input type=\"button\" id=\"quantity\" value=\"quantity\" ></th></tr>";
    for(var i=0;i<names.length;i++){
        t1+="<tr><td>"+names[i]+"</td><td>"+prices[i].toFixed(2)+"</td><td>"+quantities[i]+"</td></tr>";
    }
    $("pTable").innerHTML=t1;
    $("price").onclick = priceSort;
    $("quantity").onclick = quantitySort;
    $("name").onclick = nameSort;
}
var resetTable= function(){
    names = ["mouse","monitor","desktop","mousepad","keyboard"];
    prices = [43,34.51,7.90,43.75,47.43];
    quantities = [23,54,2,5,8];
    updateTable();
}
var swapPos = function(i1,i2){
    var tmp1 = names[i1];
    names[i1]=names[i2];
    names[i2]= tmp1;

    var tmp1 = prices[i1];
    prices[i1]=prices[i2];
    prices[i2]= tmp1;

    var tmp1 = quantities[i1];
    quantities[i1]=quantities[i2];
    quantities[i2]= tmp1;

};
var priceSort = function(){
    var tmp1 = prices;
    var notDone=1;
    while(notDone){
        notDone=0;
        tmp1 = prices;
        for(var i=0;i<(prices.length-1);i++){
            if(prices[i]>prices[i+1]){
                swapPos(i,i+1);
                notDone=1;
            }
        }
    }
    updateTable();
};

var quantitySort = function(){
    var tmp1 = quantities;
    var notDone=1;
    while(notDone){
        notDone=0;
        tmp1 = quantities;
        for(var i=0;i<(quantities.length-1);i++){
            if(quantities[i]>quantities[i+1]){
                swapPos(i,i+1);
                notDone=1;
            }
        }
    }
    updateTable();
};

var nameSort = function(){
    var notDone=1;
    while(notDone){
        notDone=0;
        
        for(var i=0;i<names.length;i++){
            if(compareName(names[i], names[i+1])){
                swapPos(i, i+1);
                notDone=1;
            }
        }
    }
    updateTable();
};

var compareName = function(name1, name2){
    if(name1>name2){
        return 1;
    }
    return 0;
}

var login=function(){
    userName=$("username").value;
    password=$("password").value;
    if(passwords[userNames.indexOf(userName)]==password){
        $("loginForm").innerHTML=" ";
        $("adminStuff").innerHTML=" ";
        var adminStuff="" 
        adminStuff+="<p>event date</p><input type=\"date\" id=\"eventDate\"></br><p>event text</p> <input type=\"text\" id=\"eventText\"></br><input type=\"button\" id=\"createEvent\" value=\"Create event\"></input>"
        adminStuff+="<p></p>"
        adminStuff+="<p>Product name</p><input type=\"text\" id=\"productName\"></br><p>Product price</p><input type=\"text\" id=\"productPrice\"><p>Product quantity</p><input type=\"text\" id=\"productquatnitity\"></br><input type=\"button\" id=\"createProduct\" value=\"Create product\"><input type=\"button\" id=\"delProduct\" value=\"delete product\"><p></p>";
       
        adminStuff+="<table id=\"pTable\">";
        adminStuff+="<tr><th><input type=\"button\" id=\"name\" value=\"name\"></th><th><input type=\"button\" id=\"price\" value=\"price\" ></th><th><input type=\"button\" id=\"quantity\" value=\"quantity\" ></th></tr>";
	    for(var i=0;i<names.length;i++){
		    adminStuff+="<tr><td>"+names[i]+"</td><td>"+prices[i].toFixed(2)+"</td><td>"+quantities[i]+"</td></tr>";
	    }
        adminStuff+="</table> "
        adminStuff+="<input type=\"button\" id=\"reset\" value=\"reset table\">"
        //i need to copy and past my code into the above " "
        $("adminStuff").innerHTML=adminStuff;
        $("createEvent").onclick=createEvent;
        $("createProduct").onclick=createProduct;
        $("delProduct").onclick=delProduct;
        $("price").onclick = priceSort;
        $("quantity").onclick = quantitySort;
        $("name").onclick = nameSort;
        $("reset").onclick=resetTable;
    }
};

window.onload = function () {
    var number = 10;
    var highest = 18;
    alert(( number > highest ) ? highest : number);
    $("login").onclick=login;
};
































































































































