var $ = function (id) { return document.getElementById(id); };

var names = ["mouse","monitor","desktop","mousepad","keyboard"];
var prices = [43,34.51,7.90,43.75,47.43];
var quantities = [23,54,2,5,8];

var orderNames=[];
var orderQuantity=[];



var updateOrder=function(){
    var items="";
    var cost=0;
    var subtotal=0;
    items+="<tr><td>ORDER TABLE</td></tr>"
    for(var i=0;orderNames.length>i;i++){
        items+="<tr>"
        items+="<td>"+orderNames[i].toString()+"</td>";
        items+="<td>"+orderQuantity[i]+"</td>";    
        cost=(prices[names.indexOf(orderNames[i])]*orderQuantity[i]);
        items+="<td>"+cost.toString()+"</td>";
        subtotal+=cost;
        items+="</tr>"
    }
    items+="<tr><td>Subtotal</td><td id=\"Subtotal\"></td>  </tr>  <tr>    <td>tax</td>    <td id=\"tax\"></td>  </tr>  <tr>    <td>Total</td>    <td id=\"total\"></td>  </tr>"
    
    $("items").innerHTML=items;
    $("Subtotal").innerHTML=subtotal.toFixed(2);
    $("tax").innerHTML=(subtotal*.06).toFixed(2);
    $("total").innerHTML=(subtotal+(subtotal*.06)).toFixed(2);
}
var placeOrder=function(){
    if(orderQuantity.length==0){
        window.alert("make an order first");
        return;
    }
    Recipt =""
    var cost=0;
    var subtotal=0;

    Recipt+="Order Items</td></tr>"+" <br>"
    for(var i=0;orderNames.length>i;i++){
        Recipt+=orderNames[i].toString()+" quantity";
        Recipt+=orderQuantity[i].toString()+" price";    
        cost=(prices[names.indexOf(orderNames[i])]*orderQuantity[i]);
        Recipt+=cost.toString()+" <br>";
        subtotal+=cost;
    }

    Recipt+="subtotal "+subtotal.toFixed(2)+" <br>";
    Recipt+="tax "+(subtotal*.06).toFixed(2)+" <br>";
    Recipt+="total "+(subtotal+(subtotal*.06)).toFixed(2)+" <br>";
    sessionStorage.setItem("reciept", Recipt);
    window.alert("order placed");
}
var add=function(){
    var name=$("name").value;
    var quantity=parseFloat($("quantity").value);
    if(names.indexOf(name)==-1){
        window.alert("no such item is available");
        return;
    }
    if(isNaN(quantity)||quantity<0){
        window.alert("invalid quantity must be a number greater than 0");
        return;
    }
    if((quantity)>quantities[names.indexOf(name)]){
        window.alert("We unfortunately dont have that much in stock");
        return;
    }
    if(orderNames.indexOf(name)!=-1){
        if((orderQuantity[orderNames.indexOf(name)]+quantity)>quantities[names.indexOf(name)]){
            window.alert("We unfortunately dont have that much in stock");
            return;
        }
        orderQuantity[orderNames.indexOf(name)]+=quantity;
        updateOrder();
        return;
    }
    orderNames.push(name);
    orderQuantity.push(quantity);
    updateOrder();
}
var remove=function(){
    var name=$("name").value;
    var quantity=parseFloat($("quantity").value);
    if(orderNames.indexOf(name)==-1){
        window.alert("no such item in the order");
        return;
    }
    if(orderQuantity[orderNames.indexOf(name)]<quantity){
        window.alert("there isnt that many of that item in your order");
        return;
    }
    orderQuantity[orderNames.indexOf(name)] = orderQuantity[orderNames.indexOf(name)] -quantity;
    updateOrder();
}
window.onload = function () {
    $("add").onclick=add;
    $("remove").onclick=remove;
    $("place").onclick=placeOrder;
    $("name").focus();
};



























































