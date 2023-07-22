//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#FF80C0"; colorText="#000000"; colorSele="#FF80FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="felicidades lo haz logrado"; messageTime="tu tiempo ha terminado"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="intentalo nuevamente"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTgtT3JkZW5hci1QYXJyYWZvcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="18-Ordenar-Parrafos_resources/media/";
var indexG=0;
var words1G=["RWwgcGVycm8gZXMgdW4gbWFtw61mZXJvIGN1YWRyw7pwZWRvIChlcyBkZWNpciwgcXVlIGNhbWluYSBzb2JyZSBjdWF0cm8gZXh0cmVtaWRhZGVzKQ==","cXVlIGRlc3RhY2EgcG9yIHBvc2VlciByYWJvIHkgdW4gbWFudG8gcXVlIGN1YnJlIHRvZG8gc3UgY3VlcnBvLA==","bm8gb2JzdGFudGUsIGVuIGxhIGFjdHVhbGlkYWQsIGdyYWNpYXMgYSBsYXMgZGl2ZXJzYXMgcmF6YXMgY2FuaW5hcyBxdWUgZXhpc3Rlbiw=","ZW5jb250cmFtb3MgcGVycm9zIGRlIHRvZG9zIGxvcyB0YW1hw7FvcywgZm9ybWFzIHkgY29sb3Jlcy4="];
var words2G=["RXMgdW4gYW5pbWFsIG1hbcOtZmVybyBwb3JxdWUgbmFjZSB2aXZvIGRlIGxhIG1hZHJlIHkgbWFtYSBwYXJhIGFsaW1lbnRhcnNlLg==","VGllbmUgZWwgY3VlcnBvIGN1YmllcnRvIGRlIHBlbG8s","dGllbmUgY3VhdHJvIHBhdGFzIHkgcmFiby4gVGllbmUgdW5hcyB1w7FhcyBtdXkgYWZpbGFkYXMgcXVlIHV0aWxpemEgcGFyYSBjYXphciB5IHN1amV0YXIgcmF0YXMgeSByYXRvbmVzLg==","VXRpbGl6YSBsYSBsZW5ndWEgcGFyYSBsaW1waWFyc2UgeSBzdXMgZ3JhbmRlcyBiaWdvdGVzIHBhcmEgZ3VpYXJzZSBwb3IgbGEgbm9jaGUu"];
var words3G=["VXRpbGl6YSBsYSBsZW5ndWEgcGFyYSBsaW1waWFyc2UgeSBzdXMgZ3JhbmRlcyBiaWdvdGVzIHBhcmEgZ3VpYXJzZSBwb3IgbGEgbm9jaGUu","c3VzIG9yZWphcyBsYXJnYXMsIGhhc3RhIDEwIGNlbnTDrW1ldHJvcyBkZSBsb25naXR1ZCw=","Y3VhdHJvIGNvcnRhcyBwYXRhcyBjb24gbGFzIHF1ZSBzZSBkZXNwbGF6YSBhIHRyYXbDqXMgZGUgc2FsdG9zIHkgdW5hIGNvbGEgY29ydGEgeSBtdWxsaWRhLg==","UGVybyBlbnRyZSBsYXMgY2FyYWN0ZXLDrXN0aWNhcyBmw61zaWNhcyBkZWwgY29uZWpvIGNvbcO6biBzb2JyZXNhbGVuIHN1cyBkaWVudGVzLg=="];
var c1=[83,64,80,58];
var c2=[75,33,105,81];
var c3=[81,52,90,79];
