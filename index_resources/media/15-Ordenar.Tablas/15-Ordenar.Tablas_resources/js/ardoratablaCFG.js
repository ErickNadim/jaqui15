//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="felicitaciones"; messageTime="tu tiempo ha terminado "; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="intentalo nuevamente"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1,1,1]];
var vCell=[["1","0","0","0","0","0","0","0","0","0"],["0","2","0","2","2","0","0","2","0","2"],["0","0","2","0","0","2","2","0","2","0"]];
var a0Cell=[["YW5pbWFsZXM=","Y2FuZ3Vyb3M=","Z2FsbGluYQ==","YmFsbGVuYQ==","bGVvbg==","bG9ybw==","aG9ybWlnYQ==","b3Nv","Y2lndWXDsWE=","dGlncmU="],["dml2aXBhcm9z","MQ==","MA==","MQ==","MQ==","MA==","MA==","MQ==","MA==","MQ=="],["b3ZpcGFyb3M=","MA==","MQ==","MA==","MA==","MQ==","MQ==","MA==","MQ==","MA=="]];
var c=[[8,8,7,7,4,4,7,3,7,5],[9,1,1,1,1,1,1,1,1,1],[8,1,1,1,1,1,1,1,1,1]];
var c1=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
var c2=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]];
var a1Cell=[["YW5pbWFsZXM=","Y2FuZ3Vyb3M=","Z2FsbGluYQ==","YmFsbGVuYQ==","bGVvbg==","bG9ybw==","aG9ybWlnYQ==","b3Nv","Y2lndWXDsWE=","dGlncmU="],["dml2aXBhcm9z","MQ==","MA==","MQ==","MQ==","MA==","MA==","MQ==","MA==","MQ=="],["b3ZpcGFyb3M=","MA==","MQ==","MA==","MA==","MQ==","MQ==","MA==","MQ==","MA=="]];
var a2Cell=[["YW5pbWFsZXM=","Y2FuZ3Vyb3M=","Z2FsbGluYQ==","YmFsbGVuYQ==","bGVvbg==","bG9ybw==","aG9ybWlnYQ==","b3Nv","Y2lndWXDsWE=","dGlncmU="],["dml2aXBhcm9z","MQ==","MA==","MQ==","MQ==","MA==","MA==","MQ==","MA==","MQ=="],["b3ZpcGFyb3M=","MA==","MQ==","MA==","MA==","MQ==","MQ==","MA==","MQ==","MA=="]];
var a3Cell=[["YW5pbWFsZXM=","Y2FuZ3Vyb3M=","Z2FsbGluYQ==","YmFsbGVuYQ==","bGVvbg==","bG9ybw==","aG9ybWlnYQ==","b3Nv","Y2lndWXDsWE=","dGlncmU="],["dml2aXBhcm9z","MQ==","MA==","MQ==","MQ==","MA==","MA==","MQ==","MA==","MQ=="],["b3ZpcGFyb3M=","MA==","MQ==","MA==","MA==","MQ==","MQ==","MA==","MQ==","MA=="]];
var wordsGame="MTUtT3JkZW5hci5UYWJsYXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=3; var rows=10;var showC=true;
