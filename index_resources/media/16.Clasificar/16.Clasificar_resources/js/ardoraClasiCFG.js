//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=2;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FF80C0"; colorText="#000000"; colorSele="#FF80FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Impact, Charcoal, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="Felicidades lo lograste "; messageTime="se ha termidao el tiempo has perdido "; messageError="error"; messageErrorG="error"; messageAttempts="intenatalo de nuevo "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["dGlncmVz","c2Fwbw==","Y29jb2RyaWxv","YWd1aWxh","cGV6IHBheWFzbw=="];
var img_G=["i_TIGRES.jpeg","i_sapo.jpg","i_coc.jpg","i_aguila.jpg","i_pez_payaso.jpg"];
var mp3_G=["008701218_prev.mp3","frogs-lisa.mp3","000205027_prev.mp3","bald-eagle.mp3","000205143_prev.mp3"];
var ogg_G=["","","","",""];
var n_G=["NQ==","Mg==","Mw==","NA==","MQ=="];
var e_G=["error respoda bien por favor","error respoda bien por favor","error respoda bien por favor","error respoda bien por favor","error respoda bien por favor"];
var mp4_G=["","","","",""];
var ogv_G=["","","","",""];
var alt_G=["","","","",""];
var txtGr=["PECES","ANFIBIOS","REPTILES","AVES","MAMIFEROS"];
var imgGr=["0_PECES.jpg","0_ANFIBIOS.jpg","0_REPTILES.jpg","0_AVES.jpg","0_MAMIFEROS.jpg"];
var mp3Gr=["","","","",""];
var oggGr=["","","","",""];
var altGr=["","","","",""];
var ram_G=[-1,-1,-1,-1,-1];
var messageErrorG="error";
var dirMedia="16.Clasificar_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="MTYuQ2xhc2lmaWNhcg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
