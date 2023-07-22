//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
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
var fActi="Gill Sans / Gill Sans MT, sans-serif";
var fEnun="Copperplate / Copperplate Gothic Light, sans-serif";
var timeOnMessage=5; messageOk="lo lograste has ganado"; messageTime="se ha terminado tu tiempo"; messageError="error"; messageErrorG="error"; messageAttempts="vuelve a intentarlo"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["Cab-","chim-","jir-","abe-","-ron","-mar","coco-","-man","-miga","esc-"];
var wIma=["caballos-e1626738164508-800x400.jpg","CHIMPASE.jpg","ficha-animal-bioparc-valencia-jirafa.jpg","abeja.jpg","tiburon.jpg","calamar-gigante.jpg","coc.jpg","caimana.jpg","hormiga.jpg","escorpion.jpg"];
var audio=["","","","","","","","","",""];
var wAlt=["","","","","","","","","",""];
var w0=["YWxsbw==","cGFuY2U=","YWZh","amE=","dGlidQ==","Y2FsYQ==","ZHJpbG8=","Y2Fp","aG9y","b3JwaW9u"];
var w1=["cmE=","YmE=","b24=","am9ycm8=","dQ==","c29s","YnU=","c29s","YQ==","dWNoYXI="];
var w2=["ZXph","dWVsbw==","b2ZpbmE=","c3RydXo=","bWFy","bWFyaQ==","bWlsbw==","Y2F5","b3I=","Y2FsYXI="];
var w3=["aWxkbw==","Ym9tYmE=","YXNvbA==","c3RpYQ==","c2Fs","Y2F6YQ==","bGlsbw==","Y29s","cGFueQ==","dXBpcg=="];
var c=[4,5,3,2,4,4,5,3,3,6];
var wW=["error","error","error","error","error","error","error","error","error","error"];
var dirMedia="13.Completar-palabras-con-sila_resources/media/";
var wordsGame="MTMuQ29tcGxldGFyLXBhbGFicmFzLWNvbi1zaWxh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
