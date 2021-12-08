var $ = function (id) { return document.getElementById(id); };

var events=[];


var getMonthText = function(currentMonth) {
    if (currentMonth === 0) { return "January"; }
    else if (currentMonth === 1) { return "February"; }
    else if (currentMonth === 2) { return "March"; }
    else if (currentMonth === 3) { return "April"; }
    else if (currentMonth === 4) { return "May"; }
    else if (currentMonth === 5) { return "June"; }
    else if (currentMonth === 6) { return "July"; }
    else if (currentMonth === 7) { return "August"; }
    else if (currentMonth === 8) { return "September"; }
    else if (currentMonth === 9) { return "October"; }
    else if (currentMonth === 10) { return "November"; }
    else if (currentMonth === 11) { return "December"; }
};

var getLastDayofMonth = function(currentMonth) {
    var dt = new Date();
    dt.setMonth(currentMonth+1);
    dt.setDate(0);
    return dt.getDate();
};

var loadCalander = function(){
    var eventDays=sessionStorage.getItem("eventDays");
    var eventText=sessionStorage.getItem("eventText");

    var today = new Date();
    var thisMonth = today.getMonth();
    $("month_year").firstChild.nodeValue=getMonthText(thisMonth)+" "+today.getFullYear();
    
    var lastDayofMonth = getLastDayofMonth(thisMonth);
    var rows=$("calendar").innerHTML;

    var date;
    var day;
    var start;
    var i=0;
    //eventDays=[getLastDayofMonth(thisMonth),getLastDayofMonth(thisMonth)-3]; //this was used to test if the event code worked
    while(i<=lastDayofMonth){
        
        today.setDate(i+1);
        rows=rows.concat("<tr>");
        date=today.getDate();
        day = today.getDay();
        var j=0;
        
        if(date===1){
            for(var ii=0;ii<day;ii++){
                    rows=rows.concat("<td></td>");
            }
            j=day;
        } 
        for(var j=j;j<7;j++){
            if(i<lastDayofMonth){
                    
                    if(eventDays!=null){
                        if((eventDays[8]+eventDays[9])==date){//This has an issue where i tried to get the month and it didnt work
                            rows=rows.concat("<td>"+date+" "+eventText+"</td>");
                        }
                        else{
                            rows=rows.concat("<td>"+date+"</td>");
                        }
                    }else{
                        rows=rows.concat("<td>"+date+"</td>");
                    }
            }i++;
                today.setDate(i+1);
                date=today.getDate();
                day = today.getDay(); 
        }
        if(i>=lastDayofMonth){
            for(var ii=4;ii>day;ii--){
                rows=rows.concat("<td></td>");
            }
        }
        rows=rows.concat("</tr>");
        
    }
    
    $("calendar").innerHTML=rows;
};
window.onload = function () {

    loadCalander();
};
//this file needs events to show up.































































































































