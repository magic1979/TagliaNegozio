document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	
	
	 data();
	
	
	function test () {
		//alert();
		//data(1);
	}
	
	
	/*setTimeout(function() {
			   
		myScroll = new IScroll('#wrapper', { click: true });
			   
			   
		setTimeout (function(){
			myScroll.refresh();
						   
		}, 500);
			   

		document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	}, 500);*/
	

}

function data(){
	var classifica = "";
    var conta = 1;
    $('#livelli').html("<font color='black' size='2'>Torneo non ancora iniziato</font>");
    
    $("#spinner1").show()
	
	$.ajax({
	 type:"GET",
	 url:"http://msop.it/tanadelletigri/classifica.php",
	 contentType: "application/json",
	 //data: {ID:ID},
	 timeout: 7000,
	 jsonp: 'callback',
	 crossDomain: true,
	 success:function(result){
           
	 
	   $.each(result, function(i,item){
	 
	         //var esito = responseText.replace(/^\s+|\s+$/g, "");
              
              if (conta==1)
              {
                if(item.Token=="1"){
                  $('#livelli').html("<font color='black' size='2'>Level:<b>"+item.livello+"</b>,&nbsp;&nbsp;Player:<b>"+item.player+"</b>,&nbsp;&nbsp;Prize:<b>"+item.prize+"&euro;</b></font>");
                }
                else{
                  $('#livelli').html("<font color='black' size='2'>Torneo non ancora iniziato</font>");
                }
              }
              
              
               if(item.Token=="1"){
                  classifica = classifica + "<li><font color='black' size='2'><b>"+item.nome+"</b>&nbsp;<img src='img/fiches.png'>"+item.punti+"</font></li>"
                }
                else{
                  classifica = classifica + "<li><font color='black' size='2'>Torneo non ancora iniziato</li>"
                }
              
              
              conta = conta +1;
	 
	   });
           
           
       $('#classifica').html(classifica);
       $('#classifica').listview('refresh');
           
           
       $("#spinner1").hide()
	 
	 
	   },
	   error: function(){
           
           $("#spinner1").hide()
           
           navigator.notification.alert(
                                        'errore di rete, riprova in seguito',  // message
                                        alertDismissed,         // callback
                                        'Error',            // title
                                        'OK'                  // buttonName
                                        );
	 
	 
	   },
	 
	 dataType:"jsonp"});
	
    
	//alert("scroll")
    
    //<img src='images/fiches.png' width='20px'>

	/*setTimeout(function() {
	 
	 myScroll = new IScroll('#wrapper', { click: true });
	 
	 setTimeout (function(){
	 myScroll.refresh();
	 
	 }, 500);
	 
		}, 500);*/
	
	
}

$(document).on("touchstart", "#indietro", function(e){
			   
		window.location.href = "tornei.html";
			   
});


$(document).on("tap", "#altro", function(e){
               
               $("#btnpanel").click();
               
});

$(document).on("touchstart", "#redraw", function(e){
               
               
               $("#spinner1").show()
               
               $.ajax({
                      type:"GET",
                      url:"http://msop.it/tanadelletigri/redraw.php",
                      contentType: "application/json",
                      //data: {Lat:3,Longi:4},
                      timeout: 7000,
                      jsonp: 'callback',
                      crossDomain: true,
                      success:function(result){
                      
                      //alert("2")
                      
                      $.each(result, function(i,item){
                             
                             var win = window.open( item.tophome, "_system", "location=yes" );
                             
                             });
                      
                      $("#spinner1").hide()
                      
                      },
                      error: function(){
                      
                      
                      navigator.notification.alert(
                                                   'Errore di rete, riprova sotto copertura',  // message
                                                   alertDismissed,         // callback
                                                   'Errore di Rete',            // title
                                                   'OK'                  // buttonName
                                                   );
                      
                      },
                      
                      dataType:"jsonp"});
               
               });


$(document).on("touchstart", "#programma", function(e){
               
               
               $("#spinner1").show()
               
               $.ajax({
                      type:"GET",
                      url:"http://msop.it/tanadelletigri/programma.php",
                      contentType: "application/json",
                      //data: {Lat:3,Longi:4},
                      timeout: 7000,
                      jsonp: 'callback',
                      crossDomain: true,
                      success:function(result){
                      
                      //alert("2")
                      
                      $.each(result, function(i,item){
                             
                             var win = window.open( item.tophome, "_system", "location=yes" );
                             
                             });
                      
                      $("#spinner1").hide()
                      
                      },
                      error: function(){
                      
                      
                      navigator.notification.alert(
                                                   'Errore di rete, riprova sotto copertura',  // message
                                                   alertDismissed,         // callback
                                                   'Errore di Rete',            // title
                                                   'OK'                  // buttonName
                                                   );
                      
                      },
                      
                      dataType:"jsonp"});
               
               });

$(document).on("touchstart", "#gofacebook", function(e){
               
               var ref = window.open('https://www.facebook.com/groups/tanadelletigripoker/', '_system', 'location=no');
               
               });


$(document).on("touchstart", "#goinsta", function(e){
               
               var ref = window.open('http://www.cdsevents.it', '_system', 'location=no');
               });


$(document).on("touchstart", "#pippo", function(e){
               
    document.ontouchmove = function(e){
        e.preventDefault();
    }
               
});


$(document).on("touchend", "#pippo", function(e){
    
    
    document.ontouchmove = function(e){
        return state;
    }
               
});


$(document).on("touchstart", "#wrapper", function(e){
               
               
    document.ontouchmove = function(e){
        return state;
    }
});


