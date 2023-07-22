var timeAct=300; timeIni=300; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FF80C0"; colorText="#000000"; colorSele="#FF80FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="Felicidades lo lograste "; messageTime="tu tiempo ha terminado "; messageError="error "; messageErrorG="error "; messageAttempts="intentalo nuevamente "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTcuT3JkZW5hcl9GcmFzZXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["SGFzdGEgZWwgbWFzIHBlcXVlw7FvIGdhdG8gZXMgdW5hIG9icmEgbWFlc3RyYQ==","TWkgY29yYXrDs24gZXN0YSBsbGVubyBkZSBodWVsbGFzLg==","RWwgbGXDs24gbnVuY2EgdGVtZSBjYW1pbmFyIHNvbG8=","QmFzdGEgZGUgbG9zIHNhcG9zIHF1ZSBkaWNlbiBzZXIgcHJpbmNpcGVz","bG8gYnVlbm8gZGUgc2VyIGxhIG92ZWphIG5lZ3JhIGVzIHF1ZSBjb25iaW5hcyBjb24gdG9kbw=="];imaW=["gato_bebe.jpg","huellas.png","leon_c.jpg","sapo_principe.jpg","oveja_negra.jpg"];queW=["","","","",""];altW=["","","","",""];c=[45,33,31,42,55];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="17.Ordenar_Frases_resources/media/"; textBNext="siguiente";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
