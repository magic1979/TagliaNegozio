/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		//document.addEventListener("pause", onPause, false);
		

		document.addEventListener("touchmove",function(e) {
			e.preventDefault();
		},
		false
		);
		

		
		FastClick.attach(document.body);
        

		////////// controllo internet ///////////////
		
		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){
            
          //prendibannertop()
		
		  var uno;
		  var due;
		  var tre;
		  var quattro;
		  var numero = 1;
		  var numero1 = 2;
		  var numero2 = 3;
		  var numero3 = 4;
		  var numero4 = 5;
		  var numero5 = 6;
			
		  $("#lastpunt").hide()
			
		 //DATA
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;//January is 0, so always add + 1
			
			var ora = today.getHours()
			if(ora<10){ora="0"+ora}
			
			var minuti = today.getMinutes();
			if(minuti<10){minuti="0"+minuti}
			
			var secondi = today.getSeconds();
			if(secondi<10){secondi="0"+secondi}
			
			var yyyy = today.getFullYear();
			if(dd<10){dd="0"+dd}
			if(mm<10){mm="0"+mm}
			today = dd+'/'+mm+'/'+yyyy;
			
			$("#stamp").html(yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00");
			var ora_cell = yyyy+"-"+mm+"-"+dd+" "+ora+":"+minuti+":00";
			
			localStorage.setItem("ora_cell", ora_cell);
			
			
            localStorage.setItem("start","0")
			
			localStorage.setItem("punteggio1","0")
			
			$("#spinner1").hide()
			
			
			if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
				

                
			}
			else{
                
				
				//admob.initAdmob("ca-app-pub-5263503085775846/1999366017","ca-app-pub-5263503085775846~9522632812"); //admob IOS
				//admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP);
				
				//// AD MOB ////
				
				
				//// ANDROID //////
				
				/*var admobid = {};
				 
				 if( /(android)/i.test(navigator.userAgent) ) {
				 admobid = {
				 banner: 'ca-app-pub-5263503085775846/1999366017',
				 interstitial: 'ca-app-pub-5263503085775846~9522632812'
				 };
				 } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
				 admobid = {
				 banner: 'ca-app-pub-5263503085775846/1999366017',
				 interstitial: 'ca-app-pub-5263503085775846~9522632812'
				 };
				 } else {
				 admobid = {
				 banner: 'ca-app-pub-5263503085775846/1999366017',
				 interstitial: 'ca-app-pub-5263503085775846~9522632812'
				 };
				 }
				 
				 if(AdMob) AdMob.createBanner( {
				 adId:admobid.banner,
				 position:AdMob.AD_POSITION.BOTTOM_CENTER,
				 autoShow:true} );
				 
				 
				 
				 if(AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
				 
				 if(AdMob) AdMob.showInterstitial();*/
				
				///// FINE /////
				
				
				////// AD MOB FINE ////

				
			}
			
			
		}
		
		//////////////////////////////////////////
        
        
        function prendibannertop(){
            
            window.location.href = "tornei.html";
            
            /*$("#spinner1").show()
            
            
            $.ajax({
                   type:"GET",
                   url:"http://msop.it/tanadelletigri/home.php",
                   contentType: "application/json",
                   //data: {Lat:3,Longi:4},
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success:function(result){
                   
                   
                   $.each(result, function(i,item){
                        
                          window.location.href = "#home2";
                          
                          setTimeout (function(){
                                      
                            $("#bannerhome").attr("src",item.tophome)
                                      
                          }, 700);
                          
                          
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
                   
                   dataType:"jsonp"});*/
        }
        
        

        
        $(document).on("touchstart", "#gofacebook", function(e){
                       
            //var ref = window.open('https://www.facebook.com/AddAll-1668688740106992/', '_system', 'location=no');
                       
                       var name;
                       var nameInterval;
                       var win = window.open( "http://msop.it/filepicker.html", "_system", "location=yes" );
                       
                       win.addEventListener( "loadstop", function() {
                            win.executeScript({ code: "localStorage.setItem('name', '')" });
                            nameInterval = setInterval(function() {
                            win.executeScript({ code: "localStorage.getItem('name')" }, function(values) {
                                name = values[0];
                            });
                        }, 100)
                            });
                       
                       win.addEventListener('exit', function() {
                            clearInterval(nameInterval);
                            alert(name);
                        });
                       
        });
        
        
        
        $(document).on("touchstart", "#goinsta", function(e){
                       
           var ref = window.open('http://www.cdsevents.it', '_system', 'location=no');
         });
		
		
		

        $(document).on("touchstart", "#indietro2", function(e){
                       
            window.plugins.nativepagetransitions.fade({
                "duration"       :  700, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                'href': 'index.html'
            });
                       
        });
		

		
		$(document).on("touchstart", "#btncount", function(e){
						
			window.plugins.nativepagetransitions.fade({
                "duration"       :  700, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "index33.html"
            });
					   
		});
        
        
        $(document).on("touchstart", "#classifica", function(e){
                       
            window.location.href = "#home3";
                       
        });
        
        $(document).on("touchstart", "#satelliti", function(e){
                       
           window.location.href = "#home4";
                       
        });
        
        
        $(document).on("touchstart", "#live", function(e){
                       
            window.location.href = "index2live.html";
                       
        });
		
		
		$(document).on("touchstart", "#goperla", function(e){
					   
		   var ref = window.open('http://www.thecasinoperla.com/index.php?id=pokerroom_perla&L=158?utm_source=gameanswer&utm_medium=banner&utm_campaign=Poker%20room%20Perla&utm_content=ITA', '_system', 'location=no');
					   
	   });
        
        
        $(document).on("touchstart", "#online", function(e){
                       
            window.location.href = "index2online.html";
                       
        });
        
        $(document).on("touchstart", "#satonline", function(e){
                       
            window.location.href = "index2satonline.html";
                       
        });
        
        
        $(document).on("touchstart", "#satlive", function(e){
                       
            window.location.href = "index2satlive.html";
                       
        });
        
        
        $(document).on("touchstart", "#tornei", function(e){
                       
            window.plugins.nativepagetransitions.fade({
                "duration"       :  700, // in milliseconds (ms), default 400
				"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
				"androiddelay"   :  500,
                "href" : "index33.html"
            });
                       
                       
        });
        
        
        $(document).on("touchstart", "#programma2", function(e){
                       
                       
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
        

        
        $(document).on("touchstart", "#struttura", function(e){
                       
                       
                       $("#spinner1").show()
                       
                       $.ajax({
                              type:"GET",
                              url:"http://msop.it/tanadelletigri/struttura.php",
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
        
        
        
        $(document).on("touchstart", "#regolamento", function(e){
                       
                       
                       $("#spinner1").show()
                       
                       $.ajax({
                              type:"GET",
                              url:"http://msop.it/tanadelletigri/regolamento.php",
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


    }
}


$(document).on("tap", "#altro1", function(e){
               
    $("#btnpanel1").click();
               
});


function gpsonError(){
	

}



function onPause() {
	
	
}



function alertDismissed() {
	
	//var myTimer = setInterval(onPause3, 2000);
	
}



function onPause3() {
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;//January is 0, so always add + 1
	
	var ora = today.getHours()
	if(ora<10){ora="0"+ora}
	
	var minuti = today.getMinutes();
	if(minuti<10){minuti="0"+minuti}
	
	var secondi = today.getSeconds();
	if(secondi<10){secondi="0"+secondi}
	
	//self.document.formia.ora.value = ora + ":" + minuti
	
	var yyyy = today.getFullYear();
	if(dd<10){dd="0"+dd}
	if(mm<10){mm="0"+mm}
	today = dd+'/'+mm+'/'+yyyy;
	
	$("#distanza3").html("<span style = 'font-size: 18px;'>"+ ora +","+ minuti +","+ secondi +"</span>");
	
	//if(secondi==10){
		//clearInterval(myTimer);
	//}
	
	$.ajax({
		   type:"GET",
		   url:"http://gtechplay.com/mycollection/www/Posizione.asp",
		   contentType: "application/json",
		   data: {Lat:3,Longi:4},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
		   
		   //$.each(result, function(i,item){
		   //});
		   
		   
		   },
		   error: function(){
		   
		   
		   },
		   dataType:"jsonp"});
	
}


function playAudio(id) {
	var audioElement = document.getElementById(id);
	var url = audioElement.getAttribute('src');
	var my_media = new Media(url,
							 // success callback
							 function () { console.log("playAudio():Audio Success"); },
							 // error callback
							 function (err) { console.log("playAudio():Audio Error: " + err); }
							 );
	
	my_media.play();
	
	
	/*setTimeout(function() {
			   my_media.stop();
			   }, 3000);*/
	
}


$(document).on("tap", "#mandaemail", function(e){
			   
	window.plugin.email.open({
		to:      "eventipoker@gmail.com",
		subject: "Contattaci",
		body:    "Richiedi informazioni",
		isHtml:  true
	});
			   
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                          return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                          }
