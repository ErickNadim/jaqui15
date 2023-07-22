//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=2;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Impact, Charcoal, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="lo lograste "; messageTime="se termino tu tiempo vuelve  a intentarlo"; messageError="error te equivocaste"; messageErrorG="error te equivocaste"; messageAttempts="intentalo una vez mas "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Y3J1Y2lncmFtYV9sbQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","","","","","","","","","","","","","",""],["","","Tw==","Vg==","RQ==","Sg==","QQ==","","","","","","","",""],["","","","RQ==","","SQ==","","","","QQ==","","","","",""],["","","","Tg==","","Ug==","","","","Sg==","","","","",""],["","","","QQ==","","QQ==","UA==","","","RQ==","","","","",""],["","","","RA==","","Rg==","RQ==","","","Qg==","","","","",""],["","","","Tw==","","QQ==","Ug==","QQ==","w5E=","QQ==","","","","",""],["","","","","","","Ug==","","","","","","","",""],["","","","RQ==","","TQ==","Tw==","Tg==","Tw==","","","","","",""],["","","","Qw==","","","","","","","","","","",""],["","","","TA==","","","","","","","","","","",""],["","","","QQ==","SQ==","Ug==","VA==","VQ==","Tg==","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""]];
var x1=[3,6,6,6,6,4,6,10,7,4,4];
var y1=[2,5,6,7,9,12,2,3,5,2,9];
var x2=[7,7,7,10,9,9,6,10,7,4,4];
var y2=[2,5,6,7,9,12,7,7,9,7,12];
var imaCW=["crucigrama_lm_resources/media/ovejas.jpg","","","crucigrama_lm_resources/media/ara__a.jpg","crucigrama_lm_resources/media/mono1.jpg","crucigrama_lm_resources/media/2-nutria-marina_015d6f8e_1280x849.jpg","crucigrama_lm_resources/media/ficha-animal-bioparc-valencia-jirafa.jpg","crucigrama_lm_resources/media/abeja-melifera-productora-miel.jpg","crucigrama_lm_resources/media/823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg","crucigrama_lm_resources/media/wild-1315786_1280.jpg","crucigrama_lm_resources/media/Alaska-Moose-Wallpaper__yvt2.jpg"];
var audioCW=["","","","","","","","","","",""];
var defCW=["es un mamífero cuadrúpedo ungulado doméstico, utilizado como ganado","","","tienen ocho patas y de seis a ocho ojos.","animal mamífero y primate, que acompaña al ser humano en su clasificación zoológica","también llamada lobo de río, es un mamífero carnívoro que solo se encuentra en América del Sur.","Es la más alta de todas las especies de animales terrestres existentes, ya que puede alcanzar una altura de 5,8 m y un peso que varía entre 750 y 1600 kg","son los polinizadores más importantes de las plantas con flores o magnoliófitas","es uno de los animales domésticos más antiguos del mundo y el mejor amigo del hombre","se caracteriza por tener una coloración café-rojiza intensa, poseer unos cuernos cortos,","Mamífero rumiante, parecido al ciervo y tan corpulento como el caballo, de cuello corto, cabeza grande, pelo oscuro y astas en forma de pala con recortaduras profundas en los bordes."];
var altCW=["","","","","","","","","","",""];
var colNum=15;
var rowNum=15;
