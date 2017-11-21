document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.addEventListener("resume", onResume, false);
	
	
	document.ontouchmove = function(e){
		e.preventDefault();
	}
	
	FastClick.attach(document.body);
	
	
    var myScroll;
    
    myScroll = new iScroll('wrapper', {
                           click: true,
                           useTransform: false,
                           //bounce: false,
                           onBeforeScrollStart: function (e)
                           {
                           var target = e.target;
                           while (target.nodeType != 1) {
                           target = target.parentNode;
                           }
                           
                           if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA' && target.tagName != 'OPTION') {
                           e.preventDefault();
                           }
                           }
                           
                           });
    
    
    setTimeout (function(){
                
                myScroll.refresh();
                data();
                
                }, 200);
	
	
    
    
    function data(){
        var classifica = "";
        var conta = 1
        
        $("#spinner1").show()
        
        $.ajax({
               type:"GET",
               url:"http://msop.it/tanadelletigri/classificaonline.php",
               contentType: "application/json",
               //data: {ID:ID},
               timeout: 7000,
               jsonp: 'callback',
               crossDomain: true,
               success:function(result){
               
               
               $.each(result, function(i,item){
                      
                      if(conta==2){
                      $('#annoclassifica').html("<font size='4'><b>" + item.mese + " " + item.anno + "</b></font>");
                      }
                      
                      if(item.Token=="1"){
                      classifica = classifica + "<li><font color='black' size='2'><b>"+ conta + ". " + item.nick+"</b> "+item.punti+ " ("+ item.nome +") </font></li>"
                      }
                      else{
                      classifica = classifica + "<li><font color='black' size='2'>Nessun gioctore in classifica</li>"
                      $("#spinner1").hide()
                      }
                      
                      conta = conta +1
                      
                      });
               
               
               $('#classifica').html(classifica);
               $('#classifica').listview('refresh');
               
               
               $("#spinner1").hide()
               
               setTimeout (function(){
                           myScroll.refresh();
                           
                           }, 500);
               
               
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
        
        
    }

    
    
    function alertDismissed() {
        
        //var myTimer = setInterval(onPause3, 2000);
        
    }
	

}

function onResume() {
	 
	   window.plugins.nativepagetransitions.fade({
                "duration"       :  700, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "index.html"
            });
	 
    }


$(document).on("touchstart", "#indietro", function(e){
					   
			//window.location.href = "index.html";
			//$.mobile.changePage ($("#home"));
			window.plugins.nativepagetransitions.fade({
                "duration"       :  700, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "classifica.html"
            });
			
					   
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
