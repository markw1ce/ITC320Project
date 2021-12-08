var $ = function (id) { return document.getElementById(id); };

var image = ["mouse","monitor","desktop","mousepad","keyboard"]
var names = ["mouse","monitor","desktop","mousepad","keyboard"];
var prices = [43,34.51,7.90,43.75,47.43];
var quantities = [23,54,2,5,8];

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

    var tmp1 = image[i1];
    image[i1]=image[i2];
    image[i2]= tmp1;
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
    displayTable();
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
    displayTable();
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
    displayTable();
};

var compareName = function(name1, name2){
    if(name1>name2){
        return 1;
    }
    return 0;
}

var displayTable = function(){
    $("pTable").innerHTML= "";
	var t1Display="<tr><th>image</th><th><input type=\"button\" id=\"name\" value=\"name\"></th><th><input type=\"button\" id=\"price\" value=\"price\" ></th><th><input type=\"button\" id=\"quantity\" value=\"quantity\" ></th></tr>";
	for(var i=0;i<names.length;i++){
		t1Display+="<tr><td><img src = \"..\/images\/"+image[i]+".jpg\"></td><td>"+names[i]+"</td><td>"+prices[i].toFixed(2)+"</td><td>"+quantities[i]+"</td></tr>";
	}
	$("pTable").innerHTML = t1Display;
    $("price").onclick = priceSort;
    $("quantity").onclick = quantitySort;
    $("name").onclick = nameSort;
	$("name").focus();
}
window.onload = function () {
    displayTable();
};


