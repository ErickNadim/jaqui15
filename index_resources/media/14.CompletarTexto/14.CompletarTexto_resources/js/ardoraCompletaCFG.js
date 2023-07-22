//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var fMenssage="Georgia, Serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="lo lograste has ganado "; messageTime="tu tiempo ha terminado "; messageError="error"; messageAttempts="intentalo una vez mas "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img tabindex="0" alt="" class="imaup imaLeft" src="14.CompletarTexto_resources/media/leon.jpg" alt="Ima"  align="left"><p>El león vive en africa y Asia. Es un <select aria-label="Item 1" name="item1" id="item1" class="ardoraCombo"></select> con sangre caliente y pelaje. El león es un animal <select aria-label="Item 2" name="item2" id="item2" class="ardoraCombo"></select> con mandíbulas poderosas y <select aria-label="Item 3" name="item3" id="item3" class="ardoraCombo"></select> filosos. El macho tiene una melena grande que usa para asustar a otros animales. Las <select aria-label="Item 4" name="item4" id="item4" class="ardoraCombo"></select> crían a los cachorros y cazan. Los machos protegen al territorio y descansan en la <select aria-label="Item 5" name="item5" id="item5" class="ardoraCombo"></select>. La  leona da a luz crías vivas y las cuida hasta que cumplan los dos años. </p><p> </p>'];
var b=["MjM=","Mg==","MTc=","MjQ=","NA==","Mg==","Nw==","MQ==","Mw==","OA==","MTg=","OQ==","Mw==","MTk=","MTM=","MTI=","MTQ=","NA==","NQ==","MjI="];
var c=[3,8,5,4,7,9,9,8,8,8,9,5,9,8,7,7,10,6,6,3];
var answers=["luz","vivíparo","lobas","luna","anfibio","carnívoro","hervívoro","mamifero","ovíparos","omnivoro","elefantes","lento","colmillos","ardillas","caninos","dientes","premolares","leonas","sombra","sol"];
var a=["5","1","4","5","1","2","2","1","1","2","4","2","3","4","3","3","3","4","5","5"];
var itemCorr=["0","0","0","0","0"];
var itemHelp=["","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MTQuQ29tcGxldGFyVGV4dG8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
var textBNext="siguiente ";
var fHelp="Verdana, Geneva, sans-serif";
