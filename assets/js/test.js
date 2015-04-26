
/* function ausgabe(){
	var playerName = document.getElementById("addPlayer").value;
	
	//document.getElementById('bigcontent').innerHTML = playerName;
	
	//var neuerPlayer = document.createElement("a");
    
    neuerPlayer.innerHTML = playerName;
	  
	var neuesLi = document.createElement("li");
    neuesLi.appendChild(playerName);
            
    //in die Liste einfügen:
    var liste = document.getElementById("bigcontent");
    liste.appendChild(neuesLi); 
	
	//var stringOut = "<br>";
	//document.getElementById('bigcontent').innerHTML = stringOut;
	
	
} selbstprogrammierte funktion*/ 

var playerCounter=0;

function addPlayer() {
	  
	playerCounter = playerCounter+1;
	//alert(playerCounter);
	
	if(playerCounter == 5){
		alert("Maximale Spieleranzahl erreicht!");
		return;
	}
	
    var text = document.formular.text.value;

    //neuen neuen Spieler erzeugen:
    var neuerSpieler = document.createElement("a");
    neuerSpieler.innerHTML = text;

	//neuen Listeneintrag erzeugen:
    var neuesLi = document.createElement("li");
    neuesLi.appendChild(neuerSpieler);
            
    //in die Liste einfügen:
    var liste = document.getElementById("liste");
    liste.appendChild(neuesLi); 
}






/* function fillContainer1()
      { var string = '"Hallo Welt!"';
        document.getElementById('bigcontent').innerHTML = string;
 } */

