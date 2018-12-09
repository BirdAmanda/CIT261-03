document.getElementById("day").innerHTML=thedate();

function thedate() {
    var t = new Date();
    var d = t.getDate();
    var month = new Array();
    var m = month[t.getMonth()]; 
    var weekday = new Array(7);
    var nameofdayofweek = weekday[t.getDay()]
    var y = t.getFullYear();
    var datestuff = nameofdayofweek+', '+d+' '+m+' '+y;
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return datestuff;
}