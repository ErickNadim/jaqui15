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
var fEnun="Georgia, Serif";
var timeOnMessage=5; messageOk="lo haz logrado"; messageTime="tu tiempo ha terminado "; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="intentalo nuevamente"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MTEtUmVsYWNpb25hci1GcmFzZXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img alt='' src='11-Relacionar-Frases_resources/media/oveja.jpg'></div>","<div  align='center'><img alt='' src='11-Relacionar-Frases_resources/media/burro.jpg'></div>","<div  align='center'><img alt='' src='11-Relacionar-Frases_resources/media/ara__a.jpg'></div>","<div  align='center'><img alt='' src='11-Relacionar-Frases_resources/media/lobo.jpg'></div>","<div  align='center'><img alt='' src='11-Relacionar-Frases_resources/media/perro.jpg'></div>","<div  align='center'><img alt='' src='11-Relacionar-Frases_resources/media/gatos.jpg'></div>","<div  align='center'><img alt='' src='11-Relacionar-Frases_resources/media/conejo.jpg'></div>","<div  align='center'><img alt='' src='11-Relacionar-Frases_resources/media/jirafa.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Vive como un lobo: salvaje, libre y hambriento. (C. Pacific)</p>","<p>«Bueno, como dicen las jirafas, no obtienes hojas a menos que saques el cuello». Sid Waddell.</p>","<p>Si las ovejas no tienen el cuidado constante de un pastor, irán por el camino equivocado, sin darse cuenta de los peligros que se avecinan. Kay Arthur. Culpar al lobo</p>","<p>Somos como la araña. Tejemos nuestra vida y luego nos movemos en ella. Somos como el soñador que sueña y vive entonces en el sueño. Esto es verdad para todo el universo</p>","<p>''Todo el conocimiento, la totalidad de preguntas y respuestas se encuentran en el perro'', Franz Kafka.</p>","<p>«Llevar su carga sin descansar, no dejarse molestar por el calor o el frío y estar siempre contentos: estas tres cosas que podemos aprender de un burro». D. H. Lawrence.</p>","<p>El amor de un gato es el más especial y el más sincero.</p>","<p>«La pata de un conejo puede traerle buena suerte, pero no le trajo nada al conejo». Ambrose Bierce.</p>"]; ansRL=["Mg==","NQ==","Mw==","MA==","NA==","Ng==","Nw==","MQ=="];
var iR=["","","","","","","",""];
var auR=[4,8,1,3,5,2,6,7];
