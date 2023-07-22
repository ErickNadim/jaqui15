//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
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
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="lo lograste"; messageTime="tu tiempo ha terminado";messageError="ERROR";messageErrorG="ERROR"; messageAttempts="intentalo nuevamente"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="21-SelecImagenesSonidos_resources/media/";
var quest=[["mejor amigo del hombre","",""],["ronronea y segun dicen te quita el estres","",""],["tiene 8 patas","",""],["canta por las mañanas","",""],["Rey de la selva","",""],["Vive en las cabernas","",""],["su lana sirve para tejer prendas de vestir","",""],["Es un roedor","",""]];
var altQuest=["","","","","","","",""];
var media=[["MQ==","UGVycm8=","0_perro.jpg",""],["Mg==","R2F0bw==","0_gatos.jpg",""],["Mw==","QVJBw5FB","0_ara__a.jpg",""],["NA==","R0FMTE8=","0_gallo.jpg",""],["NQ==","TEVPTg==","0_leon.jpg",""],["Ng==","Q09ORUpP","0_conejo.jpg",""],["Nw==","T1ZFSkE=","0_oveja.jpg",""],["OA==","UkFUT04=","0_raton.jpg",""]];
var alt=["","","","","","","",""];
var dat=[["MQ==","MQ==","MQ==","MQ==","MQ==","MA=="],["MQ==","Mg==","MA==","MQ==","MQ==","MA=="],["MQ==","Mw==","MA==","MQ==","MQ==","MA=="],["MQ==","NA==","MA==","MQ==","MQ==","MA=="],["MQ==","NQ==","MA==","MQ==","MQ==","MA=="],["MQ==","Ng==","MA==","MQ==","MQ==","MA=="],["MQ==","Nw==","MA==","MQ==","MQ==","MA=="],["MQ==","OA==","MA==","MQ==","MQ==","MA=="],["Mw==","MQ==","MA==","MQ==","MQ==","MA=="],["Mw==","Mg==","MA==","MQ==","MQ==","MA=="],["Mw==","Mw==","MQ==","MQ==","MQ==","MA=="],["Mw==","NA==","MA==","MQ==","MQ==","MA=="],["Mw==","NQ==","MA==","MQ==","MQ==","MA=="],["Mw==","Ng==","MA==","MQ==","MQ==","MA=="],["Mw==","Nw==","MA==","MQ==","MQ==","MA=="],["Mw==","OA==","MA==","MQ==","MQ==","MA=="],["Mg==","MQ==","MA==","MQ==","MQ==","MA=="],["Mg==","Mg==","MQ==","MQ==","MQ==","MA=="],["Mg==","Mw==","MA==","MQ==","MQ==","MA=="],["Mg==","NA==","MA==","MQ==","MQ==","MA=="],["Mg==","NQ==","MA==","MQ==","MQ==","MA=="],["Mg==","Ng==","MA==","MQ==","MQ==","MA=="],["Mg==","Nw==","MA==","MQ==","MQ==","MA=="],["Mg==","OA==","MA==","MQ==","MQ==","MA=="],["NA==","MQ==","MA==","MQ==","MQ==","MA=="],["NA==","Mg==","MA==","MQ==","MQ==","MA=="],["NA==","Mw==","MA==","MQ==","MQ==","MA=="],["NA==","NA==","MQ==","MQ==","MQ==","MA=="],["NA==","NQ==","MA==","MQ==","MQ==","MA=="],["NA==","Ng==","MA==","MQ==","MQ==","MA=="],["NA==","Nw==","MA==","MQ==","MQ==","MA=="],["NA==","OA==","MA==","MQ==","MQ==","MA=="],["NQ==","MQ==","MA==","MQ==","MQ==","MA=="],["NQ==","Mg==","MA==","MQ==","MQ==","MA=="],["NQ==","Mw==","MA==","MQ==","MQ==","MA=="],["NQ==","NA==","MA==","MQ==","MQ==","MA=="],["NQ==","NQ==","MQ==","MQ==","MQ==","MA=="],["NQ==","Ng==","MA==","MQ==","MQ==","MA=="],["NQ==","Nw==","MA==","MQ==","MQ==","MA=="],["NQ==","OA==","MA==","MQ==","MQ==","MA=="],["Ng==","MQ==","MA==","MQ==","MQ==","MA=="],["Ng==","Mg==","MA==","MQ==","MQ==","MA=="],["Ng==","Mw==","MA==","MQ==","MQ==","MA=="],["Ng==","NA==","MA==","MQ==","MQ==","MA=="],["Ng==","NQ==","MA==","MQ==","MQ==","MA=="],["Ng==","Ng==","MQ==","MQ==","MQ==","MA=="],["Ng==","Nw==","MA==","MQ==","MQ==","MA=="],["Ng==","OA==","MA==","MQ==","MQ==","MA=="],["Nw==","MQ==","MA==","MQ==","MQ==","MA=="],["Nw==","Mg==","MA==","MQ==","MQ==","MA=="],["Nw==","Mw==","MA==","MQ==","MQ==","MA=="],["Nw==","NA==","MA==","MQ==","MQ==","MA=="],["Nw==","NQ==","MA==","MQ==","MQ==","MA=="],["Nw==","Ng==","MA==","MQ==","MQ==","MA=="],["Nw==","Nw==","MQ==","MQ==","MQ==","MA=="],["Nw==","OA==","MA==","MQ==","MQ==","MA=="],["OA==","MQ==","MA==","MQ==","MQ==","MA=="],["OA==","Mg==","MA==","MQ==","MQ==","MA=="],["OA==","Mw==","MA==","MQ==","MQ==","MA=="],["OA==","NA==","MA==","MQ==","MQ==","MA=="],["OA==","NQ==","MA==","MQ==","MQ==","MA=="],["OA==","Ng==","MA==","MQ==","MQ==","MA=="],["OA==","Nw==","MA==","MQ==","MQ==","MA=="],["OA==","OA==","MQ==","MQ==","MQ==","MA=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="MjEtU2VsZWNJbWFnZW5lc1Nvbmlkb3M="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2,3,4,5,6,7,8];var in_act=0;
