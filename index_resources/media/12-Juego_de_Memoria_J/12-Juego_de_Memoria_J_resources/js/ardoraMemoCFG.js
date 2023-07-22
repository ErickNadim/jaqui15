//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120;timeIni=120; timeBon=2;
var successes=0; successesMax=8; attempts=0; attemptsMax=7;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FF80C0"; colorText="#000000"; colorSele="#FF80FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Georgia, Serif";
var fActi="Impact, Charcoal, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="felicidades lo lograste "; messageTime="se termino tu tiempo"; messageError=""; messageErrorG=""; messageAttempts="intentalo nuevamente"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="MTItSnVlZ29fZGVfTWVtb3JpYV9K"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["Cerdo","Perro","Jirafa","Nutria Marina","Ovejas","Conejo","Gallo","Vaca"];im1=["cerdo.jpg","perro.jpg","ficha-animal-bioparc-valencia-jirafa.jpg","2-nutria-marina_015d6f8e_1280x849.jpg","ovejas.jpg","conejo.jpg","gallo.jpg","vaca.jpg"];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["Nutria Marina","Cerdo","Jirafa","Conejo","Vaca","Gallo","Perro","Ovejas"];im2=["2-nutria-marina_015d6f8e_1280x849.jpg","cerdo.jpg","ficha-animal-bioparc-valencia-jirafa.jpg","conejo.jpg","vaca.jpg","gallo.jpg","perro.jpg","ovejas.jpg"];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjE=","MjY=","MjI=","MjA=","Mjc=","MjM=","MjU=","MjQ="];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="12-Juego_de_Memoria_J_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
