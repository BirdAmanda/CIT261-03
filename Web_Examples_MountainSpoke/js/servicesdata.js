var serviceRequest= new XMLHttpRequest();
    serviceRequest.open('GET','https://sugarlessbird.github.io/assignments/MountainSpoke/data/service.json');
    
    serviceRequest.send();

    serviceRequest.onload = function() {
      var data = JSON.parse(serviceRequest.responseText);
        console.log(data);
        document.getElementById('row0').innerHTML=data.Services[0].name;
        document.getElementById('parts0').innerHTML=data.Services[0].parts;
        document.getElementById('labor0').innerHTML=data.Services[0].labor;
        document.getElementById('total0').innerHTML=data.Services[0].total;
        
        document.getElementById('row1').innerHTML=data.Services[1].name;
        document.getElementById('parts1').innerHTML=data.Services[1].parts;
        document.getElementById('labor1').innerHTML=data.Services[1].labor;
        document.getElementById('total1').innerHTML=data.Services[1].total;
        
        document.getElementById('row2').innerHTML=data.Services[2].name;
        document.getElementById('parts2').innerHTML=data.Services[2].parts;
        document.getElementById('labor2').innerHTML=data.Services[2].labor;
        document.getElementById('total2').innerHTML=data.Services[2].total;
        
        document.getElementById('row3').innerHTML=data.Services[3].name;
        document.getElementById('parts3').innerHTML=data.Services[3].parts;
        document.getElementById('labor3').innerHTML=data.Services[3].labor;
        document.getElementById('total3').innerHTML=data.Services[3].total;
        
        document.getElementById('row4').innerHTML=data.Services[4].name;
        document.getElementById('parts4').innerHTML=data.Services[4].parts;
        
        document.getElementById('total4').innerHTML=data.Services[4].total;
        
        document.getElementById('row5').innerHTML=data.Services[5].name;
        document.getElementById('parts5').innerHTML=data.Services[5].parts;
        document.getElementById('labor5').innerHTML=data.Services[5].labor;
        document.getElementById('total5').innerHTML=data.Services[5].total;

    }