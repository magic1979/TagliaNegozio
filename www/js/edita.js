document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    //document.addEventListener("resume", onResume, false);
	
	$("#nomeneg").html("<font color='#fff' size='3'>" + " " + localStorage.getItem("nomenegozio"));
	$("#cittaneg").html("<font color='#000' size='2'>" + " " + localStorage.getItem("citta"));
	$("#indirizzoneg").html("<font color='#000' size='2'>" + " " + localStorage.getItem("indirizzo"));
    
    document.getElementById("emailreg").value = localStorage.getItem("email");
    document.getElementById("citta").value = localStorage.getItem("citta");
	document.getElementById("indirizzo").value = localStorage.getItem("indirizzo");
    document.getElementById("civico").value = localStorage.getItem("civico");
    document.getElementById("cap").value = localStorage.getItem("cap");
    document.getElementById("telefono").value = localStorage.getItem("telefono");
    
    
    //alert(localStorage.getItem("miafoto"))
    
    
    if(localStorage.getItem("miafoto")=="Foto1"){
        $("#tabella1").attr("border","2");
        $("#tabella2").attr("border","0");
        $("#tabella3").attr("border","0");
         localStorage.setItem("miafoto","Foto1");
    }
    if(localStorage.getItem("miafoto")=="foto2"){
        $("#tabella2").attr("border","2");
        $("#tabella1").attr("border","0");
        $("#tabella3").attr("border","0");
        localStorage.setItem("miafoto","Foto2");
    }
    if(localStorage.getItem("miafoto")=="foto3"){
        $("#tabella3").attr("border","2");
        $("#tabella2").attr("border","0");
        $("#tabella1").attr("border","0");
        localStorage.setItem("miafoto","Foto3");
    }
    
    $(document).on("touchstart", "#foto1", function(e){
                   $("#tabella1").attr("border","2");
                   $("#tabella2").attr("border","0");
                   $("#tabella3").attr("border","0");
                   localStorage.setItem("miafoto","Foto1");
    });
    
    $(document).on("touchstart", "#foto2", function(e){
                   $("#tabella2").attr("border","2");
                   $("#tabella1").attr("border","0");
                   $("#tabella3").attr("border","0");
                   localStorage.setItem("miafoto","Foto2");
    });
    
    $(document).on("touchstart", "#foto3", function(e){
                   $("#tabella3").attr("border","2");
                   $("#tabella2").attr("border","0");
                   $("#tabella1").attr("border","0");
                   localStorage.setItem("miafoto","Foto3");
    });
	

	$(document).on("touchstart", "#indietro", function(e){
		
		window.plugins.nativepagetransitions.fade({
						"duration"       :  800, // in milliseconds (ms), default 400
						"iosdelay"       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
						"androiddelay"   :  600,
						"href" : "index.html"
					});
				   
        
	});
    
    $(document).on("touchstart", "#pullaggiorna", function(e){
                   // SONO ARRIVATO QUI
                   //window.location.href = "index.html";
            $("#spinner").show();
                   
                   
            var registrami = '{"IDNegozio": "'+localStorage.getItem("idnegozio")+'","CAP": "'+self.document.formia.cap.value+'","Citta": "'+self.document.formia.citta.value+'","Civico": "'+self.document.formia.civico.value+'","Email": "'+self.document.formia.emailreg.value+'","IDCategoria": "9","IDProvincia": "86","Indirizzo": "'+self.document.formia.indirizzo.value+'","Nazione": "Italia","NomeEsercente": "'+localStorage.getItem("nomenegozio")+'","PartitaIVA": "","Regione": "Lazio","Telefono": "'+self.document.formia.telefono.value+'"}'
                   
            //alert(registrami)
                   
                   
            $.ajax({
                          url: "http://servizi.marcopolowit.it/tagliafilarest/api/Negozio/put",
                          dataType: "json",
                          type: "put",
                          contentType: "application/json; charset=UTF-8",
                          data: registrami ,
                          processData: false,
                          crossDomain: true,
                          success:function(result){
                   
                           modificamia(localStorage.getItem("idnegozio"),self.document.formia.cap.value,self.document.formia.citta.value,self.document.formia.civico.value,self.document.formia.emailreg.value,self.document.formia.indirizzo.value,localStorage.getItem("nomenegozio"),localStorage.getItem("miafoto"),self.document.formia.telefono.value)
                

                           var pippo = jQuery.parseJSON( result );
                   
                           $("#spinner").hide();
                   
                           alert( pippo.message)
                           //alert( pippo.code_error)
                           $(".spinner").hide();
                           window.location.href = "edita.html";
                          },
                           error: function( jqXhr, textStatus, errorThrown ){
                          
                          
                           alert(errorThrown)
                           $(".spinner").hide();
                           window.location.href = "edita.html";
                          },
                          dataType:"json"});
                   
    });


	
    var connectionStatus = false;
    connectionStatus = navigator.onLine ? 'online' : 'offline';

	
	var email = localStorage.getItem("email");

	//$("#radio").attr("href", "maps:saddr="+ localStorage.getItem("ciao") +","+ localStorage.getItem("ciao1") +"&daddr=Via di Acilia,17,Roma");


    if(connectionStatus=='online'){
		$(".spinner").hide();

		//seleziona();
		
    }
    
    else{
		
		$("#noconn").html(tabella);
		
    }
}

function modificamia(idneg,cap,citta,civico,emailreg,indirizzo,nomenegozio,foto,telefono){
    
    //alert("http://msop.it/tagliafila/check_modifica_neg.php?id="+ idneg+"&email="+ emailreg+"&cap="+cap+"&citta="+ citta +"&civico="+civico +"&indirizzo="+indirizzo+"&nomeesercente="+ nomenegozio +"&foto="+ foto +"&telefono="+ telefono +"")
    
    $.ajax({
           type:"GET",
           url:"http://msop.it/tagliafila/check_modifica_neg.php?idneg="+ idneg+"&emailreg="+ emailreg+"&cap="+cap+"&citta="+ citta +"&civico="+civico +"&indirizzo="+indirizzo+"&nomenegozio="+ nomenegozio +"&foto="+ foto +"&telefono="+ telefono +"",
           contentType: "application/json",
           //data: {email:email,pin:pin},
           timeout: 7000,
           jsonp: 'callback',
           crossDomain: true,
           success:function(result){
           
             alert("Modificata")
           
             localStorage.setItem("miafoto",foto)
             localStorage.setItem("email", emailreg);
             localStorage.setItem("nomenegozio", nomenegozio);
             localStorage.setItem("citta", citta);
             localStorage.setItem("civico", civico);
             localStorage.setItem("telefono", telefono);
             localStorage.setItem("cap", cap);
             localStorage.setItem("indirizzo", indirizzo);
             localStorage.setItem("telefono", telefono);
           
             window.location.href = "edita.html";
           
           },
           error: function(){
           
           /*navigator.notification.alert(
            'Possibile errore di rete, riprova tra qualche minuto',  // message
            alertDismissed,         // callback
            'Attenzione',            // title
            'Done'                  // buttonName
            );*/
           
           window.location.href = "index.html";
           
           },
           dataType:"jsonp"});
    
}

function seleziona() {
	
	 $("#spinner").show();
	
	var landmark2="";
	$(".spinner").show();
	
	$.ajax({
		   type:"GET",
		   url:"http://msop.it/rides/check_MieNotifiche.asp",
		   contentType: "application/json",
		   data: {email:localStorage.getItem("email")},
		   timeout: 7000,
		   jsonp: 'callback',
		   crossDomain: true,
		   success:function(result){
           
            $("#spinner").hide();
		   
		   $.each(result, function(i,item){
				  
			if(item.ID==0) {
				landmark2 = landmark2 + "Nessuna notifica presente.";
			}
			else{
				//alert("ok")
				
				//var anno = item.Data.slice(0,4)
				//var mese = item.Data.slice(4,6)
				//var giorno = item.Data.slice(6,8)
				
				var comp =  item.Giorno + "/" +  item.Mese + "/" +  item.Anno + "&nbsp;-&nbsp;" + item.Ora + ":" + item.minuti
				  
				landmark2 = landmark2 + "<table height='30px' border='0' width='320px'><tr><td align='left' colspan='2'><font size='4' color='#454545'><img src='img/push.png' width='18'>&nbsp;"+ comp +"</font></td></tr><tr><td align='left' colspan='2'><font size='2' color='#454545'>"+ item.Push  +"</font></td></tr></table><hr><br>";
				}

			});
		   
		   //landmark2 = landmark2 + "<br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br><br><br><br><br>dssdsaddada<br><br><br>";

		   
		   $(".spinner").hide();
		   
		    $("#recensione1").html(landmark2);
		   
		   $("#noconn").hide();
		   
		   myScroll.refresh();
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   navigator.notification.alert(
										'Possibile errore di rete, riprova tra qualche minuto',  // message
										alertDismissed,         // callback
										'Attenzione',            // title
										'Done'                  // buttonName
										);
		   
		   },
		   dataType:"jsonp"});
	
}




function onResume() {
    onDeviceReady();
}

function alertDismissed() {
	$(".spinner").hide();
}





