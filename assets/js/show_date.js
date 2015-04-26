function showDate(){
	var jetzt = new Date(); //Systemdatum in ein neues Date-Objekt kopieren
	var Tag = jetzt.getDate(); //Tageswert entnehmen
	var Monat = jetzt.getMonth()+1; //Monatswert entnehmen
	var Jahr = jetzt.getFullYear(); //Jahreswert entnehmen
	document.write("Aktuelles Datum: " + Tag + "." + Monat + "." + Jahr);
}