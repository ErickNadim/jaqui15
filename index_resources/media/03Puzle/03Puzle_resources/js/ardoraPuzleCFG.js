//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=20;
var successes=0; successesMax=16; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
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
var fActi="";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="Lo lograste felicidades"; messageTime="perdiste!! tu tiempo ha terminado"; messageError="ERROR"; messageAttempts="Intenta nuevamente"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#F078F3"; borderTime="#FF1A1A";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]]; var imaSel=0; texSel=0;
var original="03Puzle_resources/media/original.jpg";
var board=[["03Puzle_resources/media/cGllY2UxXzE=.jpg","03Puzle_resources/media/cGllY2UyXzE=.jpg","03Puzle_resources/media/cGllY2UzXzE=.jpg","03Puzle_resources/media/cGllY2U0XzE=.jpg"],["03Puzle_resources/media/cGllY2UxXzI=.jpg","03Puzle_resources/media/cGllY2UyXzI=.jpg","03Puzle_resources/media/cGllY2UzXzI=.jpg","03Puzle_resources/media/cGllY2U0XzI=.jpg"],["03Puzle_resources/media/cGllY2UxXzM=.jpg","03Puzle_resources/media/cGllY2UyXzM=.jpg","03Puzle_resources/media/cGllY2UzXzM=.jpg","03Puzle_resources/media/cGllY2U0XzM=.jpg"],["03Puzle_resources/media/cGllY2UxXzQ=.jpg","03Puzle_resources/media/cGllY2UyXzQ=.jpg","03Puzle_resources/media/cGllY2UzXzQ=.jpg","03Puzle_resources/media/cGllY2U0XzQ=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="MDNQdXpsZQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
