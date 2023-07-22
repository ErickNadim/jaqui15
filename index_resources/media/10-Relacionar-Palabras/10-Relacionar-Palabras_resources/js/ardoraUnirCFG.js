//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=20; attempts=0; attemptsMax=1;
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
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="Lo lograste haz ganado "; messageTime="tu tiempo ha terminado"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="intentalo nuevamente"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTAtUmVsYWNpb25hci1QYWxhYnJhcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["UEVSUk8=", "RE9H"],["RE9H", "SkFVUklB"],["R0FUTw==", "Q0FU"],["Q0FU", "R0FURVJJTw=="],["VkFDQQ==", "Q09X"],["Q09X", "UkVCQcORTw=="],["Q09DT0RSSUxP", "Q1JPQ09ESUxF"],["Q1JPQ09ESUxF", "Q09OR1JFR0FDSU9O"],["Q0FCQUxMTw==", "SE9SU0U="],["SE9SU0U=", "Q0FCQUxMQURB"],["QUJFSkE=", "QkVF"],["QkVF", "RU5KQU1CUkU="],["QlVSUk8=", "RE9OS0VZ"],["RE9OS0VZ", "UkVDVUE="],["SklSQUZB", "R0lSQUZGRQ=="],["R0lSQUZGRQ==", "VE9SUkU="],["TVVSQ0lFTEFHTw==", "QkFU"],["QkFU", "Q09MT05JQVM="],["Q0VSRE8=", "UElH"],["UElH", "UElBUkE="]];
var c=[[5,3],[3,6],[4,3],[3,7],[4,3],[3,6],[9,9],[9,12],[7,5],[5,9],[5,3],[3,8],[5,6],[6,5],[6,7],[7,5],[10,3],[3,8],[5,3],[3,5]];
var con1=["PERRO","GATO","VACA","COCODRILO","CABALLO","ABEJA","BURRO","JIRAFA","MURCIELAGO","CERDO"];
var con2=["DOG","CAT","COW","CROCODILE","HORSE","BEE","DONKEY","GIRAFFE","BAT","PIG"];
var con3=["JAURIA","GATERIO","REBAÑO","CONGREGACION","CABALLADA","ENJAMBRE","RECUA","TORRE","COLONIAS","PIARA"];
var sel1=""; join1=[]; join2=[];
