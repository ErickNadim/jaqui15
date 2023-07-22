//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=1;
var colorBack="#FFFDFD"; colorButton="#FF80C0"; colorText="#000000"; colorSele="#FF80FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="LO LOGRASTE "; messageTime="SE TERMINO TU TIEMPO PERDISTE "; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#008000"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["UEVSUk8=","R0FMTE8=","RUxFRkFOVEU=","QVJBw5FB","TVVSQ0lFTEFHTw==","T1ZFSkE=","UElOR1VJTk8=","QlVITw==","TUFSSVBPU0E=","QUJFSkE=","TEVPTg==","R0FMTElOQQ==","UkFOQQ=="];
var c=[5,5,8,5,10,5,8,4,8,5,4,7,4];
var defs=["soy el Mejor amigo del hombre.","Canta cuando amanece y vuelve a cantar cuando el día desaparece","Tiene famosa memoria, fino olfato y dura piel, y las mayores narices que en el mundo puede haber.","En lo alto vive, en lo alto mora, en lo alto teje la tejedora.","Las cinco vocales en su nombre lleva, no siendo ave por las noches vuela.","Doy lana y para hablar digo “beee”, si no adivinas mi nombre, nunca te lo diré.","Viste de chaleco blanco y negro tiene su pecho. Es un ave que no vuela, pero sabe nadar derecho.","Sal al campo por las noches si me quieres conocer, soy señor de grandes ojos, cara seria y gran saber.","Soy un insecto que vuela entre las flores, tengo dos alitas de muchos colores.","Vuelo entre las flores, vivo en una colmena, fabrico miel y también cera.","Soy el rey de la selva.","Pico de cuerno, ala de ave, la rodilla para atrás, y anda adelante.","Canto en la orilla, vivo en el agua, no soy pescado ni cigarra. ¿Quién soy?"];
var wDefs=350; posCheck=[];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="MDVfU09QQV9ERV9MRVRSQVM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=11; numRows=10; sizeCell=22;
var direction=["HD","VD","X1D","X2D"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
