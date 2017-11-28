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
		
		
		var pushNotification;
			var token

			
			pushNotification = window.plugins.pushNotification;
			
			
			pushNotification.register(
			successHandler,
			errorHandler,
			{
				"senderID":"54963069792",
				"ecb":"onNotification"
			});
			
			function tokenHandler (result) {
			
				testa(result);

			}
			
			
			function successHandler (result) {

				testa(result);
			}
			
			function errorHandler (error) {

			}
			
			
			function onNotification(e) {
					   
				switch( e.event )
				{
					case 'registered':
					if ( e.regid.length > 0 )
					{
						//$("#app-status-ul").append('<li>REGISTERED -> REGID:' + e.regid + "</li>");
						// Your GCM push server needs to know the regID before it can push to this device
						// here is where you might want to send it the regID for later use.
						alert("regID = " + e.regid);
					}
					break;
					case 'message':
						// if this flag is set, this notification happened while we were in the foreground.
						// you might want to play a sound to get the user's attention, throw up a dialog, etc.
						if (e.foreground)
						{
							alert('INLINE NOTIFICATION');
							// on Android soundname is outside the payload.
							// On Amazon FireOS all custom attributes are contained within payload
								   
						}
						else
						{	// otherwise we were launched because the user touched a notification in the notification tray.
							if (e.coldstart)
								alert('<li>--COLDSTART NOTIFICATION--');
							else
								alert('<li>--BACKGROUND NOTIFICATION--');
						}
						   
						   alert('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
						//android only
						   alert('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
						//amazon-fireos only
						//$("#app-status-ul").append('<li>MESSAGE -> TIMESTAMP: ' + e.payload.timeStamp + '</li>');
					break;
					case 'error':
						alert('<li>ERROR -> MSG:' + e.msg + '</li>');
					break;
					default:
						alert('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
					break;
				}
			}
			
			
			///////// PUSH NUOVE /////////
	

			function testa (testo) {
				
					
				if (localStorage.getItem("Token") === null || localStorage.getItem("Token")=="null" || typeof(localStorage.getItem("Token")) == 'undefined' || localStorage.getItem("Token")==0 || localStorage.getItem("Token")=="") {
				
				
				setTimeout (function(){
							
				
				$.ajax({
					   type:"GET",
					   url:"http://www.msop.it/tagliafila/Check_RegToken.asp",
					   data: {device:testo,platform:"android",email:localStorage.getItem("email")},
					   contentType: "application/json",
					   json: 'callback',
					   timeout: 7000,
					   crossDomain: true,
					   success:function(result){
					   
					   $.each(result, function(i,item){
					   
						 setTimeout (function(){
							localStorage.setItem("Token", testo);
							//alert(testo);
						}, 500);
					   
					   });
					   
					   },
					   error: function(){
					   
						 //alert("No")
					   
					   },
					   dataType:"json"});
							
				}, 500);
				
				
				}
				
			}
	
		   ///// FINE PUSH NOTIFICATION ///////////
		
		
		
		document.addEventListener("touchmove",function(e) {
			e.preventDefault();
		},
		false
		);
		
		
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
                
     }, 200);
		
					
        
        //localStorage.setItem("email","")
        
        
        /*alert(timeToDecimal('10:30')) // 10.16
         
         function timeToDecimal(t) {
         var arr = t.split(':');
         return parseFloat(parseInt(arr[0], 10) + '.' + parseInt((arr[1]/6)*10, 10));
         }
         
         
         function minTommss(minutes){
         var sign = minutes < 0 ? "-" : "";
         var min = Math.floor(Math.abs(minutes));
         var sec = Math.floor((Math.abs(minutes) * 60) % 60);
         return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
         }
         
         alert(minTommss(10.30))*/        // "03:30"
        
        
        /*var x1 = nomecliente(22);
         var prex = nomeprestazione(15)
         
         
         setTimeout (function(){
         alert(x1)
         alert(prex)
         }, 3000);*/
        
        
        /// FOTO /////
        
        
        /// END FOTO /////
        
        var myScroll2;
        var paperino;
        
        
        if (localStorage.getItem("email") === null || localStorage.getItem("email")=="null" || typeof(localStorage.getItem("email")) == 'undefined' || localStorage.getItem("email")==0 || localStorage.getItem("email")=="") {
            
            
            window.location.href = "Login.html";
            
        }
        else{
            
            //prendiorari();
            //cancellaorari()
            
            
            $("#nomeneg").html("<img src='img/logo.png' height='30'><font color='#000' size='3'>" + " " + localStorage.getItem("nomenegozio"));
            $("#cittaneg").html("<font color='#000' size='2'>" + " " + localStorage.getItem("citta"));
            $("#indirizzoneg").html("<font color='#000' size='2'>" + " " + localStorage.getItem("indirizzo"));
            
            $("#spinner").show();
            
            $.ajax({
                   type: "GET",
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/Negozio/GetPrestazioniNegozio/"+localStorage.getItem("idnegozio")+"",
                   //data: {email:"c2FsdmF0b3JlLmJydW5pQGdtYWlsLmNvbQ",password:"c2FzYTc5"},
                   cache: false,
                   crossDomain: true,
                   contentType: "application/x-www-form-urlencoded",
                   success: function (result) {
                   
                   //alert(localStorage.getItem("idnegozio"))
                   
                   var tabella1 =""
                   $("#mieiservizi").html("");
                   
                   $("#spinner").hide();
                   var listacompleta="<br>";
                   
                   var pippo = jQuery.parseJSON( result );
                   
                   $.each(pippo, function(i,item){
                          
                          pluto0 = item.IDPrestazione
                          
                          //quando premo richiamare la funzione con l'id della prestazione per far vedere solo la durata e il costo di quella prestazione.
                          
                          /*var fruits = item.PrestazioneCaratteristicaNegozio
                           
                           for ( i=0; i < fruits.length; i++ )
                           {
                           
                           alert(fruits[i]["DurataMinuti"])
                           alert(fruits[i]["CostoInSede"])
                           
                           }*/
                          
                          tabella1 = "<table width='90%' align='center' border='0'>";
                          
                          
                          if(item.IDPrestazione=="15"){
						  
						  tabella1 = tabella1 + "<tr><td align='left' width='100%'><a id='pp_"+pluto0+"'> <img src='img/colore.png' width='80'><font size='6'> &nbsp;<b>"+item.Descrizione+"</b></font></td></tr>"
						  
						  tabella1 = tabella1 + "<tr><td align='center' width='100%'><a id='#'> <img src='img/coloredonna.jpg' width='640'> </a> </td></tr>"
						  }
						  else if(item.IDPrestazione=="12"){
						  
						  tabella1 = tabella1 + "<tr><td align='left' width='100%'><a id='pp_"+pluto0+"'> <img src='img/permanente.png' width='80'> <font size='6'> &nbsp;<b>"+item.Descrizione+"</b></font></td></tr>"
						  
						  tabella1 = tabella1 + "<tr><td align='center' width='100%'><a id='#'> <img src='img/permanente.jpg' width='640'> </a> </td></tr>"
						  }
						  else if(item.IDPrestazione=="16"){
						  
						  tabella1 = tabella1 + "<tr><td align='left' width='100%'><a id='pp_"+pluto0+"'> <img src='img/taglio.png' width='80'> <font size='6'> &nbsp;<b>"+item.Descrizione+"</b></font></td></tr>"
						  
						  tabella1 = tabella1 + "<tr><td align='center' width='100%'><a id='#'> <img src='img/piega.jpg' width='640'> </a> </td></tr>"
						  }
						  else if(item.IDPrestazione=="14"){
						  
						  tabella1 = tabella1 + "<tr><td align='left' width='100%'><a id='pp_"+pluto0+"'> <img src='img/shampoo.png' width='80'> <font size='6'> &nbsp;<b>"+item.Descrizione+"</b></font></td></tr>"
						  
						  tabella1 = tabella1 + "<tr><td align='center' width='100%'><a id='#'> <img src='img/shampouomo.jpg' width='640'> </a> </td></tr>"
						  }
						  else if(item.IDPrestazione=="11"){
						  
						  tabella1 = tabella1 + "<tr><td align='left' width='100'><a id='pp_"+pluto0+"'> <img src='img/taglio.png' width='80'><font size='6'> &nbsp;<b>"+item.Descrizione+"</b></font></td></tr>"
						  
						  tabella1 = tabella1 + "<tr><td align='center' width='100%' ><a id='#'> <img src='img/tagliodonna.jpg' width='640'> </a> </td></tr>"
						  }
						  else if(item.IDPrestazione=="10"){
						  
						  tabella1 = tabella1 + "<tr><td align='left' width='100%'><a id='pp_"+pluto0+"'> <img src='img/taglio.png' width='80'> <font size='6'> &nbsp;<b>"+item.Descrizione+"</b></font></td></tr>"
						  
						  tabella1 = tabella1 + "<tr><td align='center' width='100%' ><a id='#'> <img src='img/tagliouomo.jpg' width='640'> </a> </td></tr>"
						  }
						  else{
						  
						  }
                          
                          
                          tabella1 = tabella1 + "</table><br><br> <a id='vediorario'><font color='#000' size='2'><img src='img/prestazioni.png' width='150'></font></a>";
                          
                          $("#mieiservizi").append(tabella1);
                          
                          
                          $(document).on("touchstart", "#pp_"+pluto0+"", function(e){
                                         
                                         if(event.touches.length <1){
                                         alert("minore")
                                         }
                                         
                                         //alert(this.id)
                                         
                                         passo2(this.id) // passare la variabile in una nuova funzione
                                         
                                         });
                          
                          
                          
                          /*document.getElementById("pp_"+pluto0+"").addEventListener("touchstart", function(event) {
                           
                           alert(event.touches.length)
                           
                           if(event.touches.length >1){
                           alert("maggiore")
                           }
                           
                           },false);*/
                          
                          
                          });
                   
                   
                   function passo2(eccola2){
                   
                   var ccodice = eccola2.replace("pp_","")
                   
                   //alert(ccodice);
                   localStorage.setItem("idorarionegozio",ccodice)
                   
                   $("#spinner").show();
                   
                   // Prestazioni Negozio
                   
                   $.ajax({
                          type: "GET",
                          url: "http://servizi.marcopolowit.it/tagliafilarest/api/Negozio/GetPrestazioniNegozio/"+localStorage.getItem("idnegozio")+"",
                          cache: false,
                          crossDomain: true,
                          contentType: "application/x-www-form-urlencoded",
                          success: function (result) {
                          
                          var tabella1 =""
                          $("#mieiservizi").html("");
                          var listacompleta="";
                          
                          $("#spinner").hide();
                          listacompleta="<br>";
                          
                          var pippo = jQuery.parseJSON( result );
                          
                          $.each(pippo, function(i,item){
                                 
                                 if(ccodice==item.IDPrestazione){
                                 
                                 var fruits = item.PrestazioneCaratteristicaNegozio
                                 
                                 tabella1 = "<table width='90%' align='center' border='0'>";
                                 
                                 for ( i=0; i < fruits.length; i++ )
                                 {
                                 
                                 if(localStorage.getItem("idnegozio")==fruits[i]["IDNegozio"]){
                                 
                                 tabella1 = tabella1 + "<tr><td align='center' colspan='2' width='100%'><b>"+item.NomePrestazione+"</b></td></tr>"
                                 
                                 if(item.IDPrestazione=="15"){
                                 tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/coloredonna.jpg' width='640'> </a> </td></tr>"
                                 }
                                 else if(item.IDPrestazione=="12"){
                                 tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/permanente.jpg' width='640'> </a> </td></tr>"
                                 }
                                 else if(item.IDPrestazione=="16"){
                                 tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/piega.jpg' width='640'> </a> </td></tr>"
                                 }
                                 else if(item.IDPrestazione=="14"){
                                 tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/shampouomo.jpg' width='640'> </a> </td></tr>"
                                 }
                                 else if(item.IDPrestazione=="11"){
                                 tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/tagliodonna.jpg' width='640'> </a> </td></tr>"
                                 }
                                 else if(item.IDPrestazione=="10"){
                                 tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/tagliouomo.jpg' width='640'> </a> </td></tr>"
                                 }
                                 else{
                                 
                                 }
                                 
                                 tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'>Durata:&nbsp;<input type='text' value='"+fruits[i]["DurataMinuti"]+"' name='durata' id='durata'></td></tr>"
                                 
                                 tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'>Costo:&nbsp; <input type='text' value='"+fruits[i]["CostoInSede"]+"' name='costo' id='costo'></td></tr>"
                                 }
                                 
                                 
                                 }
                                 
                                 tabella1 = tabella1 + "<tr><td align='center' colspan='2' width='100%'><a id='aggiornaprestazione'><img src='img/update.png' width='40'></a></td></tr>"
                                 
                                 tabella1 = tabella1 + "<tr><td align='center' width='80' colspan='2'><br><br><a id='pippo2'><img src='img/back.jpg' width='40'></a><br><input type='hidden' value='"+ccodice+"' name='idprestazione' id='idprestazione'><br></td></tr></table>";
                                 
                                 $("#mieiservizi").append(tabella1);
                                 
                                 }
                                 
                                 });
                          
                          
                          },
                          error: function( jqXhr, textStatus, errorThrown ){
                          
                          alert(errorThrown)
                          $("#spinner").hide();
                          
                          },
                          dataType:"json"});
                   
                   }
                   
                   
                   },
                   error: function(jqXhr, textStatus, errorThrown){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   }
                   
                   });
            
        }
        
        
        $(document).on("touchstart", "#pippo2", function(e){
                       
                       window.location.href = "index.html";
                       
                       });
        
        
        
        $(document).on("touchstart", "#aggiornaprestazione", function(e){
                       //alert("ok")
                       
                       var registrami = '{"IDPrestazione": "'+self.document.formia.idprestazione.value+'","IDNegozio": "'+localStorage.getItem("idnegozio")+'","DurataMinuti": "'+self.document.formia.durata.value+'","CostoInSede": "'+self.document.formia.costo.value+'","CostoDomicilio": "","DomicilioAbilitato": "false"}'
                       
                       //alert(registrami)
                       
                       $("#spinner").show();
                       $.ajax({
                              url: "http://servizi.marcopolowit.it/tagliafilarest/api/Prestazione/UpdatePrestazioneNegozio",
                              dataType: "json",
                              type: "post",
                              contentType: "application/json",
                              data: registrami,
                              processData: false,
                              crossDomain: true,
                              success:function(result){
                              
                              alert("ok, orario prestazione aggiornato")
                              $("#spinner").hide();
                              },
                              error: function( jqXhr, textStatus, errorThrown ){
                              
                              alert(errorThrown)
                              $("#spinner").hide();
                              
                              },
                              dataType:"json"});
                       
                       
                       });
        
        
        
        
        $(document).on("touchstart", "#aggiorna", function(e){
                       
                       window.location.href = "index.html";
                       
                       });
        
        
        $(document).on("touchstart", "#esci", function(e){
                       
                       localStorage.setItem("email", "");
                       window.location.href = "Login.html";
                       
                       });
        
        
        $(document).on("touchstart", "#addorario", function(e){
                       
                       var tabella1 =""
                       $("#mieiservizi").html("");
                       var listacompleta="";
                       
                       $("#spinner").hide();
                       
                         tabella1 = "<table width='80%' align='center'>";
                       
                       
                        tabella1 = "<table width='80%' align='center' border='0'>";
                   
                   
						tabella1 = tabella1 + "<tr><td align='center' width='100%'><select id='idday'><option value='0'>Scegli Giorno</option><option value='1'>Lunedi</option><option value='2'>Martedi</option><option value='3'>Mercoledi</option><option value='4'>Giovedi</option><option value='5'>Venerdi</option><option value='6'>Sabato</option><option value='7'>Domenica</option></select></td></tr>"
								   
						tabella1 = tabella1 + "<tr><td align='center' width='100%'>Inizio: <select id='orainizio' name='orainizio'><option value='08' selected>08</option><option value='09'>09</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option></select> | <select id='mininizio' name='mininizio'><option value='00' selected>00</option><option value='30'>30</option></select></td></tr>"
								   
						tabella1 = tabella1 + "<tr><td align='center' width='100%'>Fine: <select id='orafine' name='orafine'><option value='08' selected>08</option><option value='09'>09</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option></select> | <select id='minfine' name='minfine'><option value='00' selected>00</option><option value='30'>30</option></select></td></tr>"
								   
								   
						tabella1 = tabella1 + "<tr><td align='center' colspan='2' width='100%'><br><a id='insertora'><img src='img/orario_aggiungi.png' width='140'></a></td></tr>"
                       
                        tabella1 = tabella1 + "<tr><td align='center' width='80' colspan='2'><br><br><a id='pippo2'><img src='img/back.jpg' width='40'></a></td></tr></table>";
                       
                       $("#mieiservizi").append(tabella1);
                       
                       });
        
        
        $(document).on("touchstart", "#insertora", function(e){
                       
                       var orainizio = self.document.formia.orainizio.value + ":" + self.document.formia.mininizio.value + ":00"
                       
                       var orafine = self.document.formia.orafine.value + ":" + self.document.formia.minfine.value + ":00"
                       
                       var orari = '{"OraInizio": "'+orainizio+'","OraFine": "'+orafine+'"}'
                       
                       var ggiorno = self.document.formia.idday.value;
                       
                       if(ggiorno!="0"){
                       
                       $("#spinner").show();
                       
                       $.ajax({
                              url: "http://servizi.marcopolowit.it/tagliafilarest/api/Orario/AddOrario",
                              dataType: "json",
                              type: "post",
                              contentType: "application/json; charset=UTF-8",
                              data: orari ,
                              processData: false,
                              crossDomain: true,
                              success:function(result){
                              
                              insertorari(result.IDOrario,ggiorno)
                              //alert(result.IDOrario)
                              $("#spinner").hide();
                              
                              alert("ok, orario inserito")
                              
                              },
                              error: function( jqXhr, textStatus, errorThrown ){
                              
                              
                              alert(errorThrown)
                              
                              
                              },
                              dataType:"json"});
                       }
                       
                       });
        
        
        function insertorari(orario,giorno) {
            
            var orari = '{"IDNegozio": "'+localStorage.getItem("idnegozio")+'","IDGiorno": "'+giorno+'","IDOrario": "'+orario+'"} '
            
            
            $("#spinner").show();
            
            $.ajax({
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/Negozio/AddOrarioNegozio",
                   dataType: "json",
                   type: "post",
                   contentType: "application/json; charset=UTF-8",
                   data: orari ,
                   processData: false,
                   crossDomain: true,
                   success:function(result){
                   
                   alert("ok, orario inserito")
                   $("#spinner").hide();
                   
                   },
                   error: function( jqXhr, textStatus, errorThrown ){
                   
                   //alert(errorThrown)
                   
                   },
                   dataType:"json"});
        }
        
        
        
        $(document).on("touchstart", "#lista", function(e){
                       listaservizi()
                       });
        
        
        function listaservizi(){
            
            $("#spinner").show();
            var listacompleta="";
            $("#testvideo").html("");
            
            localStorage.setItem("loadprestazioni", "1");
            
            $.ajax({
                   type: "GET",
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/prestazione/getprestazionibycategory?idCategory=9",
                   //data: {email:"c2FsdmF0b3JlLmJydW5pQGdtYWlsLmNvbQ",password:"c2FzYTc5"},
                   cache: false,
                   crossDomain: true,
                   contentType: "application/x-www-form-urlencoded",
                   success: function (result) {
                   
                   var tabella = "";
                   $("#mieiservizi").html("");
                   $("#spinner").hide();
                   listacompleta="<br>";
                   
                   
                   var pippo = jQuery.parseJSON( result );
                   
                   $.each(pippo, function(i,item){
                          
                          paperino = item.IDPrestazione
                          
                          tabella = "<table width='90%' align='center'>";
                          
                          if(item.IDPrestazione=="15"){
						  tabella = tabella + "<tr><td align='left' width='100%' valign='left'><a id='"+paperino+"'> <img src='img/colore.png' width='80'> </a><font size='6'> <b>"+item.NomePrestazione+","+paperino+"</b></font></td></tr><tr><td align='center' width='100%'> <img src='img/coloredonna.jpg' width='640'>  </td></tr>"
						  }
						  else if(item.IDPrestazione=="12"){
						  tabella = tabella + "<tr><td align='left' width='100%' valign='left'><a id='"+paperino+"'> <img src='img/permanente.png' width='80'> </a><font size='6'> <b>"+item.NomePrestazione+","+paperino+"</b></font></td></tr><tr><td align='center' width='100%' > <img src='img/permanente.jpg' width='640'> </td></tr>"
						  }
						  else if(item.IDPrestazione=="16"){
						  tabella = tabella + "<tr><td align='left' width='100%' valign='left'><a id='"+paperino+"'> <img src='img/taglio.png' width='80'> </a><font size='6'> <b>"+item.NomePrestazione+","+paperino+"</b></font></td></tr><tr><td align='center' width='100%' ><img src='img/piega.jpg' width='640'> </td></tr>"
						  }
						  else if(item.IDPrestazione=="14"){
						  tabella = tabella + "<tr><td align='left' width='100%' valign='left'><a id='"+paperino+"'> <img src='img/shampoo.png' width='80'> </a><font size='6'> <b>"+item.NomePrestazione+","+paperino+"</b></font></td></tr><tr><td align='center' width='100%' ><img src='img/shampouomo.jpg' width='640'> </td></tr>"
						  }
						  else if(item.IDPrestazione=="11"){
						  tabella = tabella + "<tr><td align='left' width='100%' valign='left'><a id='"+paperino+"'> <img src='img/taglio.png' width='80'> </a> <font size='6'> <b>"+item.NomePrestazione+","+paperino+"</b></font></td></tr><tr><td align='center' width='100%' ><img src='img/tagliodonna.jpg' width='640'> </td></tr>"
						  }
						  else if(item.IDPrestazione=="10"){
						  tabella = tabella + "<tr><td align='left' width='100%' valign='left'><a id='"+paperino+"'> <img src='img/taglio.png' width='80'> </a> <font size='6'> <b>"+item.NomePrestazione+","+paperino+"</b></font></td></tr><tr><td align='center' width='100%' ><img src='img/tagliouomo.jpg' width='640'> </td></tr>"
						  }
						  else{
						  tabella = tabella + "<tr><td align='left' width='100%' valign='left'><a id='"+paperino+"'> <img src='img/aggiungi.png' width='30'> </a> <font size='6'> <b>"+item.NomePrestazione+","+paperino+"</b></font></td></tr>"
						  }
                          
                          
                          tabella = tabella + "</table>";
                          
                          
                          $("#mieiservizi").append(tabella);
                          
                          
                          $(document).on("touchstart", "#"+paperino+"", function(e){
                                         
                                         passo(this.id) // passare la variabile in una nuova funzione
                                         
                                         });
                          
                          });
                   
                   
                   
                   setTimeout (function(){
                               myScroll.refresh();
                               }, 500);
                   
                   
                   function passo(eccola){
                   
                   //alert(eccola);
                   localStorage.setItem("addidprestazione", eccola);
                   
                   
                   listaprestazione(eccola)
                   
                   }
                   
                   
                   $("#testvideo").html("<br><br><a id='pippo2'><img src='img/back.jpg' width='40'></a><br>");
                   
                   $("#spinner").hide();
                   
                   
                   },
                   error: function(jqXhr, textStatus, errorThrown){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   }
                   
                   });
            
        }
        
        
        
        function listaprestazione(idp){
            
            alert(idp)
            
            $("#spinner").show();
            var listacompleta="";
            $("#testvideo").html("");
            
            $.ajax({
                   type: "GET",
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/prestazione/getprestazionibycategory?idCategory=9",
                   //data: {email:"c2FsdmF0b3JlLmJydW5pQGdtYWlsLmNvbQ",password:"c2FzYTc5"},
                   cache: false,
                   crossDomain: true,
                   contentType: "application/x-www-form-urlencoded",
                   success: function (result) {
                   
                   var tabella =""
                   $("#mieiservizi").html("");
                   $("#spinner").hide();
                   listacompleta="<br>";
                   
                   var pippo = jQuery.parseJSON( result );
                   
                   $.each(pippo, function(i,item){
                          
                          if(item.IDPrestazione==idp){
                          
                          tabella = "<table width='90%' align='center'>";
                          
                          tabella = tabella + "<tr><td align='center' width='100%' colspan='2'> <b>"+item.NomePrestazione+"<b></td></tr>"
                          
                          if(item.IDPrestazione=="15"){
                          tabella = tabella + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/coloredonna.jpg' width='640'> </a> </td></tr>"
                          }
                          else if(item.IDPrestazione=="12"){
                          tabella = tabella + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/permanente.jpg' width='640'> </a> </td></tr>"
                          }
                          else if(item.IDPrestazione=="16"){
                          tabella = tabella + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/piega.jpg' width='640'> </a> </td></tr>"
                          }
                          else if(item.IDPrestazione=="14"){
                          tabella = tabella + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/shampouomo.jpg' width='640'> </a> </td></tr>"
                          }
                          else if(item.IDPrestazione=="11"){
                          tabella = tabella + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/tagliodonna.jpg' width='640'> </a> </td></tr>"
                          }
                          else if(item.IDPrestazione=="10"){
                          tabella = tabella + "<tr><td align='center' width='100%' colspan='2'><a id='#'> <img src='img/tagliouomo.jpg' width='640'> </a> </td></tr>"
                          }
                          else{
                          
                          }
                          
                          tabella = tabella + "<tr><td align='center' width='100%'>Durata&nspb; <input type='text' value='10' name='durata2' id='durata2'></td></tr>"
                          
                          tabella = tabella + "<tr><td align='center' width='100%'>Costo&nspb; <input type='text' value='10.00' name='costo2' id='costo'></td></tr>"
                          
                          tabella = tabella + "<tr><td align='center' width='100%' colspan='2'><a id='insertprestazione'> <img src='img/aggiungi.png' width='40'></a> </td></tr>"
                          
                          tabella = tabella + "</table>";
                          
                          $("#mieiservizi").append(tabella);
                          
                          
                          }
                          
                          
                          });
                   
                   
                   setTimeout (function(){
                               myScroll.refresh();
                               }, 500);
                   
                   
                   $("#spinner").hide();
                   
                   
                   },
                   error: function(jqXhr, textStatus, errorThrown){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   }
                   
                   });
        }
        
        
        $(document).on("touchstart", "#insertprestazione", function(e){
                       
                       var registrami = '{"IDPrestazione": "'+localStorage.getItem("addidprestazione")+'","IDNegozio": "'+localStorage.getItem("idnegozio")+'","DurataMinuti": "'+self.document.formia.durata2.value+'","CostoInSede": "'+self.document.formia.costo2.value+'","CostoDomicilio": "","DomicilioAbilitato": "false"}'
                       
                       //alert(registrami)
                       
                       $("#spinner").show();
                       $.ajax({
                              url: "http://servizi.marcopolowit.it/tagliafilarest/api/Prestazione/AddPrestazioneNegozio",
                              dataType: "json",
                              type: "post",
                              contentType: "application/json",
                              data: registrami,
                              processData: false,
                              crossDomain: true,
                              success:function(result){
                              
                              alert("ok, prestazione aggiunta al tuo negozio")
                              $("#spinner").hide();
                              window.location.href = "index.html";
                              },
                              error: function( jqXhr, textStatus, errorThrown ){
                              
                              alert("Prestazione gia aggiunta")
                              $("#spinner").hide();
                              
                              },
                              dataType:"json"});
                       
                       });
        
        
        $(document).on("touchstart", "#vediorario", function(e){
                       
                       $("#spinner").show();
                       
                       $.ajax({
                              type: "GET",
                              url: "http://servizi.marcopolowit.it/tagliafilarest/api/Negozio/GetOrariNegozio/"+localStorage.getItem("idnegozio")+"",
                              //data: {email:"c2FsdmF0b3JlLmJydW5pQGdtYWlsLmNvbQ",password:"c2FzYTc5"},
                              cache: false,
                              crossDomain: true,
                              contentType: "application/x-www-form-urlencoded",
                              success: function (result) {
                              
                              var gattino = ""
                              var tabella1 =""
                              tabella1 = "<table width='80%' align='center'>";
                              $("#mieiservizi").html("<tr><td align='center' width='80%'><a id='addorario'><br><br><img src='img/orario_aggiungi.png' width='150'></a></td></tr>");
                              
                              //tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><br><br><a id='pippo3'>INDIETRO</a></td></tr>";
                              
                              $("#spinner").hide();
                              //var listacompleta="<br>";
                              
                              var plutone = result.ORARI_NEGOZIO
                              
                              for ( i=0; i < plutone.length; i++ )
                              {
                              //if(gattino != plutone[i]["Giorno"]){
                              
                              tabella1 = tabella1 + "<tr><td align='left' width='100%'><a id='"+plutone[i]["IDOrario"]+"'><img src='img/orario_modifica.png' width='150'></a></td></tr><tr><td align='left' width='100%'><b>"+plutone[i]["Giorno"]+"</b></td></tr>"
                              
                              //}
                              
                              tabella1 = tabella1 + "<tr><td align='left' width='100%'>"+plutone[i]["OraInizio"]+"</td></tr>"
                              tabella1 = tabella1 + "<tr><td align='left' width='100%'>"+plutone[i]["OraFine"]+"<br><br></td></tr>"
                              //alert(plutone[i]["IDGiorno"])
                              
                              //gattino = plutone[i]["Giorno"]
                              
                              
                              $(document).on("touchstart", "#"+plutone[i]["IDOrario"]+"", function(e){
                                             
                                             passo3(this.id)
                                             
                                             });
                              
                              }
                              
                              tabella1 = tabella1 + "<tr><td align='center' width='80%'><a id='pippo3'><img src='img/back.jpg' width='40'></a></td></tr></table><br><br>";
                              
                              $("#mieiservizi").append(tabella1);
                              
                              
                              
                              $(document).on("touchstart", "#pippo3", function(e){
                                             
                                             window.location.href = "index.html";
                                             
                                             });
                              
                              
                              
                              function passo3(eccola3){
                              
                              vediorarioprestazione(eccola3)
                              
                              
                              }
                              
                              
                              setTimeout (function(){
                                          myScroll.refresh();
                                          
                                          }, 500);
                              
                              
                              },
                              error: function(jqXhr, textStatus, errorThrown){
                              
                              alert(errorThrown)
                              $("#spinner").hide();
                              
                              }
                              
                              });
                       });
        
        
        
        function vediorarioprestazione(ideccola){
            
            //alert(ideccola)
            
            $("#spinner").show();
            
            $.ajax({
                   type: "GET",
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/Negozio/GetOrariNegozio/"+localStorage.getItem("idnegozio")+"",
                   cache: false,
                   crossDomain: true,
                   contentType: "application/x-www-form-urlencoded",
                   success: function (result) {
                   
                   //alert("ok")
                   
                   var gattino = ""
                   var tabella1 =""
                   tabella1 = "<table width='80%' align='center'>";
                   $("#mieiservizi").html("");
                   
                   
                   $("#spinner").hide();
                   
                   var plutone = result.ORARI_NEGOZIO
                   
                   for ( i=0; i < plutone.length; i++ )
                   {
                   
                   //alert(plutone[i]["IDOrario"])
                   
                   if(ideccola == plutone[i]["IDOrario"]){
                   
                   
                   tabella1 = tabella1 + "<tr><td align='center' width='100%'><b>"+plutone[i]["Giorno"]+"</b></td></tr>"
                   
                   tabella1 = tabella1 + "<tr><td align='center' width='100%'><input type='text' value='"+plutone[i]["OraInizio"]+"' name='orainizio2' id='orainizio2'><input type='hidden' value='"+ideccola+"' name='eccola' id='eccola'></td></tr>"
                   
                   tabella1 = tabella1 + "<tr><td align='center' width='100%'><input type='text' value='"+plutone[i]["OraFine"]+"' name='orafine2' id='orafine2'></td></tr>"
                   
                   }
                   
                   
                   }
                   
                   tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><a id='aggiornaorarioprestazione'> <img src='img/update.png' width='40'></a> </td></tr>"
                   
                   tabella1 = tabella1 + "<tr><td align='center' width='80%'><a id='pippo4'><img src='img/back.jpg' width='40'></a></td></tr></table>";
                   
                   $("#mieiservizi").append(tabella1);
                   
                   
                   
                   $(document).on("touchstart", "#pippo4", function(e){
                                  
                                  window.location.href = "index.html";
                                  
                                  });
                   
                   
                   },
                   error: function(jqXhr, textStatus, errorThrown){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   }
                   
                   });
        }
        
        
        
        $(document).on("touchstart", "#aggiornaorarioprestazione", function(e){
                       
                       //alert(eccola3);
                       
                       var orari = '{"IDOrario": "'+self.document.formia.eccola.value+'","OraInizio": "'+self.document.formia.orainizio2.value+'","OraFine": "'+self.document.formia.orafine2.value+'","DisponibilitaLavorantePrestazione": [],"DisponibilitaNegozioPrestazione": [],"LavoranteOrario": [],"NegozioOrario": [],"OrarioPrestazioneDomicilio": []} '
                       // var orari = '{"OraInizio": "08:31:00","OraFine": "13:31:00"}'
                       
                       
                       $("#spinner").show();
                       $.ajax({
                              url: "http://servizi.marcopolowit.it/tagliafilarest/api/Orario/UpdateOrario",
                              dataType: "json",
                              type: "post",
                              contentType: "application/json",
                              data: orari,
                              processData: false,
                              crossDomain: true,
                              success:function(result){
                              
                              alert("ok, orario modificato")
                              $("#spinner").hide();
                              
                              vediorario2();
                              },
                              error: function( jqXhr, textStatus, errorThrown ){
                              
                              alert(errorThrown)
                              $("#spinner").hide();
                              
                              },
                              dataType:"json"});
                       });
        
        
        function vediorario2() {
            
            $("#spinner").show();
            
            $.ajax({
                   type: "GET",
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/Negozio/GetOrariNegozio/"+localStorage.getItem("idnegozio")+"",
                   //data: {email:"c2FsdmF0b3JlLmJydW5pQGdtYWlsLmNvbQ",password:"c2FzYTc5"},
                   cache: false,
                   crossDomain: true,
                   contentType: "application/x-www-form-urlencoded",
                   success: function (result) {
                   
                   
                   var tabella1 =""
                   tabella1 = "<table width='80%' align='center'>";
                   $("#mieiservizi").html("");
                   
                   //tabella1 = tabella1 + "<tr><td align='center' width='100%' colspan='2'><br><br><a id='pippo3'>INDIETRO</a></td></tr>";
                   
                   $("#spinner").hide();
                   //var listacompleta="<br>";
                   
                   var plutone = result.ORARI_NEGOZIO
                   
                   for ( i=0; i < plutone.length; i++ )
                   {
                   
                   tabella1 = tabella1 + "<tr><td align='left' width='100%'><a id='"+plutone[i]["IDOrario"]+"'><img src='img/matita.ico' width='40'></a><b>"+plutone[i]["Giorno"]+"</b></td></tr>"
                   tabella1 = tabella1 + "<tr><td align='left' width='100%'>"+plutone[i]["OraInizio"]+"</td></tr>"
                   tabella1 = tabella1 + "<tr><td align='left' width='100%'>"+plutone[i]["OraFine"]+"<br><br></td></tr>"
                   //alert(plutone[i]["IDGiorno"])
                   
                   
                   
                   $(document).on("touchstart", "#"+plutone[i]["IDOrario"]+"", function(e){
                                  
                                  passo4(this.id)
                                  
                                  });
                   
                   }
                   
                   //tabella1 = tabella1 + "<tr><td align='left' width='80' colspan='2'><br><br><a id='pippo3'>INDIETRO</a></td></tr></table>";
                   
                   $("#mieiservizi").append(tabella1);
                   
                   
                   
                   $(document).on("touchstart", "#pippo3", function(e){
                                  
                                  window.location.href = "index.html";
                                  
                                  });
                   
                   
                   
                   function passo4(eccola4){
                   
                   vediorarioprestazione(eccola4)
                   
                   /*var orari = '{"IDOrario": "'+eccola3+'","OraInizio": "10:00:00","OraFine": "13:00:00","DisponibilitaLavorantePrestazione": [],"DisponibilitaNegozioPrestazione": [],"LavoranteOrario": [],"NegozioOrario": [],"OrarioPrestazioneDomicilio": []} '
                    
                    
                    
                    $("#spinner").show();
                    $.ajax({
                    url: "http://servizi.marcopolowit.it/tagliafilarest/api/Orario/UpdateOrario",
                    dataType: "json",
                    type: "post",
                    contentType: "application/json",
                    data: orari,
                    processData: false,
                    crossDomain: true,
                    success:function(result){
                    
                    alert("ok, orario modificato")
                    $("#spinner").hide();
                    
                    vediorario2();
                    },
                    error: function( jqXhr, textStatus, errorThrown ){
                    
                    alert(errorThrown)
                    $("#spinner").hide();
                    
                    },
                    dataType:"json"});*/
                   }
                   
                   
                   },
                   error: function(jqXhr, textStatus, errorThrown){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   }
                   
                   });
        }
        
        
        function cancellaorari() {
            $("#spinner").show();
            $.ajax({
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/orario/deleteorario/21",
                   type: "DELETE",
                   contentType: "application/x-www-form-urlencoded",
                   //data: "21",
                   processData: false,
                   crossDomain: true,
                   success:function(result){
                   
                   alert("ok")
                   $("#spinner").hide();
                   },
                   error: function( jqXhr, textStatus, errorThrown ){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   },
                   dataType:"json"});
        }
        
        
        $(document).on("touchstart", "#indietro", function(e){
                       window.location.href = "index.html";
                       
                       });
        
        $(document).on("touchstart", "#mappa", function(e){
                       window.location.href = "next.html";
                       
                       });
        
		
        $(document).on("touchstart", "#calendario", function(e){
			
						var myScroll2;
    
    					myScroll2 = new iScroll('wrapper2', {
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
								
							myScroll2.refresh();
								
						}, 1000);
                       
                       
                       
                       window.location.href = "#page2";
                       
                       
                       $("#spinner2").hide();
                       
                       
                       var date = new Date();
                       var d = date.getDate();
                       var m = date.getMonth();
                       var y = date.getFullYear();
                       
                       $("#calendar").jqmCalendar({
                                                  
                                                  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                                  days: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                                                  startOfWeek: 0
                                                  
                                                  });
                       
                       
                       $("#calendar").bind('change', function(event, date) {
                                           
                                           //myScroll2 = new IScroll('#wrapper2', { click: true });
										   var myScroll2;
    
											myScroll2 = new iScroll('wrapper', {
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
    

                                           var events = $("#calendar").data("jqm-calendar").settings.events;
                                           
                                           for ( var i = 0; i < events.length; i++ ) {
                                           if ( events[i].begin.getFullYear() == date.getFullYear() &&
                                               events[i].begin.getMonth() == date.getMonth() &&
                                               events[i].begin.getDate() == date.getDate() ) {
                                           
                                           return false;
                                           }
                                           }
                                           
                                           
                                           var cicci ;
                                           $("#calendario33").html("")
                                           
                                           $("#calendario33").append("<div id='0800'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>08:00</b></font> <a id=''> Libero</td></tr></table></div><div id='0815'><table width='100%' class='nocolor'><tr><td width='100%'>08:15 <a id=''> Libero</td></tr></table></div> <div id='0830'><table width='100%' class='nocolor'><tr><td width='100%'>08:30 <a id=''> Libero</td></tr></table></div><div id='0845'><table width='100%' class='nocolor'><tr><td width='100%'>08:45 <a id=''> Libero</td></tr></table></div><div id='0900'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>09:00 </b></font><a id=''> Libero</td></tr></table></div><div id='0915'><table width='100%' class='nocolor'><tr><td width='100%'>09:15 <a id='05'> Libero</td></tr></table></div><div id='0930'><table width='100%' class='nocolor'><tr><td width='100%'>09:30 <a id='06'> Libero</td></tr></table></div><div id='0945'><table width='100%' class='nocolor'><tr><td width='100%'>09:45 <a id='07'> Libero</td></tr></table></div><div id='1000'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>10:00 </b></font><a id='08'> Libero</td></tr></table></div><div id='1015'><table width='100%' class='nocolor'><tr><td width='100%'>10:15 <a id='09'> Libero</td></tr></table></div><div id='1030'><table width='100%' class='nocolor'><tr><td width='100%'>10:30 <a id='10'> Libero</td></tr></table></div><div id='1045'><table width='100%' class='nocolor'><tr><td width='100%'>10:45 <a id='03'> Libero</td></tr></table></div><div id='1100'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>11:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='1115'><table width='100%' class='nocolor'><tr><td width='100%'>11:15 <a id='01'> Libero</td></tr></table></div><div id='1130'><table width='100%' class='nocolor'><tr><td width='100%'>11:30 <a id='02'> Libero</td></tr></table></div><div id='1145'><table width='100%' class='nocolor'><tr><td width='100%'>11:45 <a id='03'> Libero</td></tr></table></div><div id='1200'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>12:00 </b></font><a id='04'> Libero</td></tr></table></div><div id='1215'><table width='100%' class='nocolor'><tr><td width='100%'>12:15 <a id='01'> Libero</td></tr></table></div><div id='1230'><table width='100%' class='nocolor'><tr><td width='100%'>12:30 <a id='02'> Libero</td></tr></table></div><div id='1245'><table width='100%' class='nocolor'><tr><td width='100%'>12:45 <a id='03'> Libero</td></tr></table></div><div id='1300'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>13:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='1315'><table width='100%' class='nocolor'><tr><td width='100%'>13:15 Libero</td></tr></table></div><div id='1330'><table width='100%' class='nocolor'><tr><td width='100%'>13:30 Libero</td></tr></table></div><div id='1345'><table width='100%' class='nocolor'><tr><td width='100%'>13:45 Libero</td></tr></table></div><div id='1400'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>14:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='1415'><table width='100%' class='nocolor'><tr><td width='100%'>14:15 <a id='04'> Libero</td></tr></table></div><div id='1430'><table width='100%' class='nocolor'><tr><td width='100%'>14:30 <a id='04'> Libero</td></tr></table></div><div id='1445'><table width='100%' class='nocolor'><tr><td width='100%'>14:45 <a id='04'> Libero</td></tr></table></div><div id='1500'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>15:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='1515'><table width='100%' class='nocolor'><tr><td width='100%'>15:15 Libero</td></tr></table></div><div id='1330'><table width='100%' class='nocolor'><tr><td width='100%'>13:30 Libero</td></tr></table></div><div id='1345'><table width='100%' class='nocolor'><tr><td width='100%'>13:45 Libero</td></tr></table></div><div id='1600'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>16:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='1615'><table width='100%' class='nocolor'><tr><td width='100%'>16:15 Libero</td></tr></table></div><div id='1630'><table width='100%' class='nocolor'><tr><td width='100%'>16:30 Libero</td></tr></table></div><div id='1645'><table width='100%' class='nocolor'><tr><td width='100%'>16:45 Libero</td></tr></table></div><div id='1700'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>17:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='1715'><table width='100%' class='nocolor'><tr><td width='100%'>17:15 Libero</td></tr></table></div><div id='1730'><table width='100%' class='nocolor'><tr><td width='100%'>17:30 Libero</td></tr></table></div><div id='1745'><table width='100%' class='nocolor'><tr><td width='100%'>17:45 Libero</td></tr></table></div><div id='1800'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>18:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='1815'><table width='100%' class='nocolor'><tr><td width='100%'>18:15 Libero</td></tr></table></div><div id='1830'><table width='100%' class='nocolor'><tr><td width='100%'>18:30 Libero</td></tr></table></div><div id='1845'><table width='100%' class='nocolor'><tr><td width='100%'>18:45 Libero</td></tr></table></div><div id='1900'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>19:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='1915'><table width='100%' class='nocolor'><tr><td width='100%'>19:15 Libero</td></tr></table></div><div id='1930'><table width='100%' class='nocolor'><tr><td width='100%'>19:30 Libero</td></tr></table></div><div id='1945'><table width='100%' class='nocolor'><tr><td width='100%'>19:45 Libero</td></tr></table></div> <div id='2000'><table width='100%' class='nocolor'><tr><td width='100%'><font size='3'><b>20:00</b></font> <a id='04'> Libero</td></tr></table></div><div id='2015'><table width='100%' class='nocolor'><tr><td width='100%'>20:15 Libero</td></tr></table></div><div id='2030'><table width='100%' class='nocolor'><tr><td width='100%'>20:30 Libero</td></tr></table></div><div id='2045'><table width='100%' class='nocolor'><tr><td width='100%'>20:45 Libero</td></tr></table></div>")
                                           
                                           
                                           
                                           $("#appunta").html("");
                                           var resulto = date.getFullYear() +"-" +(1+date.getMonth()) + "-" + date.getDate() +""
                                           
                                           
                                           var numero = 0 ;
                                           localStorage.setItem("memorizza","0")
                                           
                                           //alert("http://msop.it/tagliafila/check_appuntamento.php?idnegozio="+localStorage.getItem("idnegozio")+"&data="+ resulto +"")
                                           
                                           $.ajax({
                                                  type: "GET",
                                                  url: "http://msop.it/tagliafila/check_appuntamento.php?idnegozio="+localStorage.getItem("idnegozio")+"&data="+ resulto +"",
                                                  cache: false,
                                                  crossDomain: true,
                                                  contentType: "application/json",
                                                  timeout: 7000,
                                                  jsonp: 'callback',
                                                  crossDomain: true,
                                                  success: function (result) {
                                                  
                                                  //var pippo = jQuery.parseJSON( result );
                                                  
                                                  $.each(result, function(i,item){
                                                         
                                                         paperino = item.idappuntamento
                                                         
                                                         var str = item.dataorainizio;
                                                         var ora = str.substr(11, 5).replace(":","");
                                                         
                                                         var x1 = item.nome + " " + item.cognome;
                                                         var prex = item.idprestazione
                                                         
                                                         if(ora=="0800"){
                                                         
                                                         $("#0815").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         
                                                         }
                                                         
                                                         else if(ora=="0815"){
                                                         
                                                         $("#0815").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         
                                                         }
                                                         else if(ora=="0830"){
                                                         
                                                         $("#0830").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         
                                                         }
                                                         else if(ora=="0845"){
                                                         $("#0845").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="0900"){
                                                         $("#0900").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="0915"){
                                                         $("#0915").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="0930"){
                                                         $("#0930").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="0945"){
                                                         $("#0945").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1000"){
                                                         $("#1000").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1015"){
                                                         $("#1015").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1030"){
                                                         $("#1030").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1045"){
                                                         $("#1045").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1100"){
                                                         $("#1100").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1115"){
                                                         $("#1115").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1130"){
                                                         $("#1130").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1145"){
                                                         $("#1145").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1200"){
                                                         $("#1200").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1215"){
                                                         $("#1215").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1230"){
                                                         $("#1230").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1245"){
                                                         $("#1245").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1300"){
                                                         $("#1300").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1315"){
                                                         $("#1315").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1330"){
                                                         $("#1330").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1345"){
                                                         $("#1345").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1400"){
                                                         $("#1400").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1415"){
                                                         $("#1415").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1430"){
                                                         $("#1430").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1445"){
                                                         $("#1445").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1500"){
                                                         $("#1500").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1515"){
                                                         $("#1515").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1530"){
                                                         $("#1530").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1545"){
                                                         $("#1545").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1600"){
                                                         $("#1600").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1615"){
                                                         $("#1615").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1630"){
                                                         $("#1630").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1645"){
                                                         $("#1645").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1700"){
                                                         $("#1700").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1715"){
                                                         $("#1715").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1730"){
                                                         $("#1730").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1745"){
                                                         $("#1745").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1800"){
                                                         $("#1800").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1815"){
                                                         $("#1815").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1830"){
                                                         $("#1830").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1845"){
                                                         $("#1845").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1900"){
                                                         $("#1900").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1915"){
                                                         $("#1915").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1930"){
                                                         $("#1930").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="1945"){
                                                         $("#1945").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="2000"){
                                                         $("#2000").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="2015"){
                                                         $("#2015").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else if(ora=="2030"){
                                                         $("#2030").html("<table width='100%' class='color' ><tr><td width='60%' align='left'><a id='"+paperino+"'><font color='#fff'>"+ora+" - "+prex+" - "+ x1 +"</font></td><td width='40%' align='right'></a></td></tr></table>");
                                                         }
                                                         else{
                                                         
                                                         }
                                                         
                                                         
                                                         $(document).on("touchstart", "#"+paperino+"", function(e){
                                                                        
                                                                        adesso(this.id)
                                                                        
                                                                        });
                                                         
                                                         });
                                                  
                                                  $("#calendario33").append("<br><br><br><br><br><br><br><br><br><br><br><br>")
                                                  
                                                  
                                                  setTimeout (function(){
                                                              myScroll2.refresh();
                                                              }, 1200);
                                                  
                                                  },
                                                  error: function( jqXhr, textStatus, errorThrown ){
                                                  
                                                  alert(errorThrown)
                                                  $("#spinner").hide();
                                                  
                                                  },
                                                  dataType:"jsonp"});
                                           
                                           
                                           });
                       
                       });
        
        function calendarionegozio(){
            
        }
        
        function nomeprestazione(idprestazione){
            
            var prestaz = "nessuna prestazione"
            
            //alert("http://servizi.marcopolowit.it/tagliafilarest/api/prestazione/getprestazioniById/"+idprestazione+"")
            
            $.ajax({
                   type: "GET",
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/prestazione/getprestazioniById/"+idprestazione+"",
                   //data: {email:"c2FsdmF0b3JlLmJydW5pQGdtYWlsLmNvbQ",password:"c2FzYTc5"},
                   cache: false,
                   crossDomain: true,
                   contentType: "application/x-www-form-urlencoded",
                   success: function (result) {
                   
                   //alert("ok1")
                   
                   var pippo = jQuery.parseJSON( result );
                   
                   $.each(pippo, function(i,item){
                          
                          //alert(item.NomePrestazione)
                          
                          prestaz = "NOME PRESTAZIONE"
                          
                          })
                   
                   },
                   error: function( jqXhr, textStatus, errorThrown ){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   },
                   dataType:"json"});
            
            return prestaz
            
        }
        
        function nomecliente(idcliente){
            
            var cliente = "nessun risultato"
            
            //alert("http://servizi.marcopolowit.it/tagliafilarest/api/Cliente/GetbyidCliente/"+idcliente+"")
            
            $.ajax({
                   type: "GET",
                   url: "http://servizi.marcopolowit.it/tagliafilarest/api/Cliente/GetbyidCliente/"+idcliente+"",
                   //data: {email:"c2FsdmF0b3JlLmJydW5pQGdtYWlsLmNvbQ",password:"c2FzYTc5"},
                   cache: false,
                   crossDomain: true,
                   contentType: "application/x-www-form-urlencoded",
                   success: function (result) {
                   
                   //alert("ok2")
                   
                   var pippo = jQuery.parseJSON( result );
                   
                   //alert(pippo.Nome + " " + pippo.Cognome)
                   
                   cliente = "NOME E COGNOME"
                   
                   },
                   error: function( jqXhr, textStatus, errorThrown ){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   },
                   dataType:"json"});
            
            
            return cliente
            
        }
        
        
        
        $(document).on("touchstart", "#0815", function(e){
                       
                       localStorage.setItem("memorizza","1")
                       
                       adesso(this.id)
                       
                       });
        
        
        function adesso(eccola){
            
            //alert(eccola)
            
            $("#spinner").show();
            
            $.ajax({
                   type: "GET",
                   //url: "http://servizi.marcopolowit.it/tagliafilarest/api/Appuntamento/GetByIDAppuntamento?id="+eccola+"",
                   url: "http://msop.it/tagliafila/check_appuntamentoByid.php?idappuntamento="+eccola+"",
                   cache: false,
                   crossDomain: true,
                   contentType: "application/json",
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success: function (result) {
                   
                   var gattino = ""
                   var tabella1 = "<form name='formia2' action='entra2.asp' method='post'>"
                   tabella1 = tabella1 + "<table width='80%' align='center'>";
                   $("#mieiservizi").html("");
                   
                   
                   $("#spinner").hide();
                   
                   //var pippo = jQuery.parseJSON( result );
                   $.each(result, function(i,item){
                          
                          var orainiziale = item.dataorainizio.substr(11,2)
                          var mininiziale = item.dataorainizio.substr(14,2)
                          var anno = item.dataorainizio.substr(0,4)
                          var mese = item.dataorainizio.substr(5,2)
                          var giorno = item.dataorainizio.substr(8,2)
                          
                          tabella1 = tabella1 + "<tr><td align='center' width='100%'><b>NOME: "+item.nome+", "+item.cognome+"</b></td></tr>"
                          
                          tabella1 = tabella1 + "<tr><td align='left' width='100%'><input type='hidden' value='"+item.idprestazione+"' name='idprestazione' id='idprestazione'><input type='hidden' value='"+eccola+"' name='eccolaapp' id='eccolaapp'></td></tr>"
                          
                          tabella1 = tabella1 + "<tr><td align='left' width='100%'><input type='hidden' value='"+item.idcliente+"' name='idcliente' id='idcliente'> <input type='hidden' value='"+anno+"' name='anno2' id='anno2'> <input type='hidden' value='"+mese+"' name='mese2' id='mese2'></td></tr>"
                          
                          tabella1 = tabella1 + "<tr><td align='center' width='100%'><select id='orainizio2' name='orainizio2'><option value='"+orainiziale+"' selected>"+orainiziale+"</option><option value='08' selected>08</option><option value='09'>09</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option></select><select id='mininizio2' name='mininizio2'><option value='"+mininiziale+"' selected>"+mininiziale+"</option><option value='00' selected>00</option><option value='15' selected>15</option><option value='30' selected>30</option><option value='45' selected>45</option></select></td></tr>"
                          
                          tabella1 = tabella1 + "<tr><td align='center' width='100%'><select id='dayinizio2' name='dayinizio2'><option value='"+giorno+"' selected>"+giorno+"</option></select></td></tr>"
                          
                          
                          tabella1 = tabella1 + "<tr><td align='center' width='100%'><a id='aggiornaappuntamento'> <img src='img/appuntamento_modifica.png' width='120'></a> &nbsp;&nbsp;<a id='cancappuntamento'> <img src='img/appuntamento_cancella.png' width='120'></a></td></tr>"
                          
                          tabella1 = tabella1 + "<tr><td align='center' width='80%'><a id='pippo6'><img src='img/back.jpg' width='40'></a></td></tr></table></form>";
                          
                          
                          });
                   
                   
                   $("#appunta").html(tabella1);
                   
                   
                   
                   $(document).on("touchstart", "#pippo6", function(e){
                                  
                                  window.location.href = "index.html";
                                  
                                  });
                   
                   
                   },
                   error: function( jqXhr, textStatus, errorThrown ){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   },
                   dataType:"jsonp"});
            
            return false;
            
            throw new Error('controlledError');
            
        }
        
        
        
        $(document).on("touchstart", "#aggiornaappuntamento", function(e){
                       
                       
                       var datainizio3 = self.document.formia2.anno2.value+"-"+self.document.formia2.mese2.value+"-"+self.document.formia2.dayinizio2.value+"T"+self.document.formia2.orainizio2.value+":"+self.document.formia2.mininizio2.value+":00"
                       
                       
                       var mintot2 = parseInt(self.document.formia2.mininizio2.value) + 15
                       
                       if(self.document.formia2.mininizio2.value=="45"){
                       var oratot2 = parseInt(self.document.formia2.orainizio2.value) + 1
                       }
                       else{
                       var oratot2 = self.document.formia2.orainizio2.value
                       }
                       
                       if(mintot2=="60"){
                       mintot2 = "00"
                       }
                       
                       
                       var datafine3 = self.document.formia2.anno2.value+"-"+self.document.formia2.mese2.value+"-"+self.document.formia2.dayinizio2.value+"T"+oratot2+":"+mintot2+":00"
                       
                       
                       /*var modifica = '{"IDAppuntamento": "'+self.document.formia2.eccolaapp.value+'","IDCliente": "'+self.document.formia2.idcliente.value+'","IDPrestazione": "'+self.document.formia2.idprestazione.value+'","IDNegozio": "'+localStorage.getItem("idnegozio")+'","DataOraInizio": "'+self.document.formia2.datainizio.value+'","DataOraFine": "'+self.document.formia2.datafine.value+'"}' */
                       
                       var modifica = '{"IDAppuntamento": "'+self.document.formia2.eccolaapp.value+'","IDCliente": "'+self.document.formia2.idcliente.value+'","IDPrestazione": "'+self.document.formia2.idprestazione.value+'","IDNegozio": "'+localStorage.getItem("idnegozio")+'","DataOraInizio": "'+datainizio3+'","DataOraFine": "'+datafine3+'"}'
                       
                       alert(modifica)
                       
                       
                       // var modifica = '{"IDAppuntamento": "'+self.document.formia2.eccolaapp.value+'","IDCliente": "'+self.document.formia2.idcliente.value+'","IDPrestazione": "'+self.document.formia2.idprestazione.value+'","IDNegozio": "'+localStorage.getItem("idnegozio")+'","DataOraInizio": "'+self.document.formia2.datainizio.value+'","DataOraFine": "'+self.document.formia2.datafine.value+'"}'
                       
                       
                       $("#spinner").show();
                       $.ajax({
                              url: "http://servizi.marcopolowit.it/tagliafilarest/api/Appuntamento/UpdateAppuntamento?id="+self.document.formia2.eccolaapp.value+"",
                              dataType: "json",
                              type: "post",
                              contentType: "application/json",
                              data: modifica,
                              processData: false,
                              crossDomain: true,
                              success:function(result){
                              
                              aggiornadame(self.document.formia2.eccolaapp.value,datainizio3,datafine3)
                              
                              alert("ok, orario modificato")
                              $("#spinner").hide();
                              
                              //vediorario2();
                              },
                              error: function( jqXhr, textStatus, errorThrown ){
                              
                              alert(errorThrown)
                              $("#spinner").hide();
                              
                              },
                              dataType:"json"});
                       });
        
        
        
        $(document).on("touchstart", "#cancappuntamento", function(e){
                       
                       alert("cancella")
                       
                       var idappuntamento = self.document.formia2.eccolaapp.value
                       
                       $("#spinner").show();
                       $.ajax({
                              type: "GET",
                              url: "http://msop.it/tagliafila/check_cancappuntamentoneg.php?idappuntamento="+idappuntamento+"",
                              cache: false,
                              crossDomain: true,
                              contentType: "application/json",
                              timeout: 7000,
                              jsonp: 'callback',
                              crossDomain: true,
                              success: function (result) {
                              
                              $("#spinner").hide();
                              alert("ok, appuntamento cancellato")
                              
                              window.location.href = "#page";
                              
                              },
                              error: function( jqXhr, textStatus, errorThrown ){
                              
                              alert(errorThrown)
                              $("#spinner").hide();
                              
                              },
                              dataType:"jsonp"});
                       });
        
        
        
        function aggiornadame(idappuntamento,datainizio,datafine){
            
            $.ajax({
                   type: "GET",
                   url: "http://msop.it/tagliafila/check_updateappuntamentoneg.php?idappuntamento="+idappuntamento+"&dataorainizio="+datainizio+"&dataorafine="+datafine+"",
                   cache: false,
                   crossDomain: true,
                   contentType: "application/json",
                   timeout: 7000,
                   jsonp: 'callback',
                   crossDomain: true,
                   success: function (result) {
                   
                   
                   $("#spinner").hide();
                   alert("ok, orario modificato")
                   
                   },
                   error: function( jqXhr, textStatus, errorThrown ){
                   
                   alert(errorThrown)
                   $("#spinner").hide();
                   
                   },
                   dataType:"jsonp"});
            
        }
        
    }
};
