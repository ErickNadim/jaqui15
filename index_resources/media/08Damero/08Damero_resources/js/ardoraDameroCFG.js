//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
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
var colorBack="#FFFFFF"; colorButton="#FF80C0"; colorText="#000000"; colorSele="#FF80FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Impact, Charcoal, sans-serif";
var fActi="Georgia, Serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="felidades lo lograste "; messageTime="perdiste ...tu tiempo se ha terminado"; messageError="error"; messageErrorG="error"; messageAttempts="vuelve a intentarlo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["RQ==","TA==","IA==","QQ==","TQ==","Tw==","Ug==","IA==","UA==","Tw==","Ug==","IA==","VA==","Tw==","RA==","QQ==","Uw==","IA==","TA==","QQ==","Uw==","IA==","Qw==","Ug==","SQ==","QQ==","VA==","VQ==","Ug==","QQ==","Uw==","IA==","Vg==","SQ==","Vg==","SQ==","RQ==","Tg==","VA==","RQ==","Uw==","IA==","RQ==","Uw==","IA==","RQ==","TA==","IA==","TQ==","QQ==","Uw==","IA==","Tg==","Tw==","Qg==","TA==","RQ==","IA==","QQ==","VA==","Ug==","SQ==","Qg==","VQ==","VA==","Tw==","IA==","RA==","RQ==","TA==","IA==","Uw==","RQ==","Ug==","IA==","SA==","VQ==","TQ==","QQ==","Tg==","Tw=="];
var que=["pájaro que pone el huevo más pequeño","animal considerado el mas noble del mundo","animal que simboliza el amor","animal considerado como rey de la selva","animal mas gruñon del mundo","animal que tiene cuatro cuernos","animal mas timido","animal que simboliza la sonrisa","animas que mas duerme del mundo","animal mas astuto e inteligente","animal terrestre que pone el huevo más grande","animal que adora el agua, razón por la cual los griegos los llamaron \"el caballo del río","es un ave de hábitos nocturnos y rapaz, que se caracteriza por contar con plumas que parecen orejas"];
var yCell=["Q09MSUJSSQ==","Q0FCQUxMTw==","QVZFUw==","TEVPTg==","UkFQRQ==","QU5USUxPUEU=","UFVFUkNPRVNQSU4=","QVJESUxMQQ==","S09BTEE=","REVMRklO","QVZFU1RSVVo=","SElQT1BPVEFNTw==","QlVITw=="];
var pos=[["23","6","2","25","55","7","34"],["0","4","63","16","19","47","10"],["20","33","1","17"],["56","37","14","38"],["11","26","9","40"],["30","53","13","36","70","54","0","43"],["0","28","46","24","0","66","57","21","0","62","80"],["50","29","15","0","0","0","59"],["0","0","79","0","0"],["68","69","0","0","0","0"],["0","35","73","31","27","61","64","0"],["76","0","0","0","0","0","39","0","5","0"],["0","77","0","0"]];
var upos=[["","","","","","",""],["","","","","","",""],["","","",""],["","","",""],["","","",""],["","","","","","","",""],["","","","","","","","","","",""],["","","","","","",""],["","","","",""],["","","","","",""],["","","","","","","",""],["","","","","","","","","",""],["","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=20;
var showE=true;
var typeD=1;var tiCor=true;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="MDhEYW1lcm8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
