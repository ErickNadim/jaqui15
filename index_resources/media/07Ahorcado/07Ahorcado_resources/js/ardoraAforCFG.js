//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=260; timeIni=260; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=8;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
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
var timeOnMessage=5; messageOk="lo lograste "; messageTime="perdiste se termino tu tiempo"; messageError="error"; messageErrorG="error"; messageAttempts="intentalo nuevamente tu puedes"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDdBaG9yY2Fkbw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["T1NP","TEVPTg==","Q0hJTVBBU0U=","Q09DT0RSSUxP","UEVSUk8=","RUxFRkFOVEU=","R0FMTE8=","Q0VSRE8=","",""];imaW=["0_oso.jpg","0_leon.jpg","0_CHIMPASE.jpg","0_coc.jpg","0_823f515c-8143-4044-8f13-85ea1ef58f3a_16-9-discover-aspect-ratio_default_0.jpg","0_elefante.jpg","0_gallo.jpg","0_cerdo.jpg","",""];queW=["iven principalmente en bosques de bambú, en lo alto de las montañas del oeste de China, alimento del que subsisten casi por completo. Deben comer entre 26 y 84 libras (12 y 38 kg) de bambú cada día.","comen principalmente mamíferos herbívoros como cebras, gacelas o jabalíes. Los leones viven y cazan en grupos llamados manadas","es nuestro pariente vivo más próximo, con el que compartimos el 98 por ciento de nuestro código genético.","son reptiles, lo que significa que son de sangre fría, ellos están cubiertos de piel seca y escamosa y tienen una mandíbula y dientes capaces de aplastar huesos.","El mejor amigo del hombre.","Son animales mamíferos, exclusivamente herbívoros cuya característica principal –además del gran tamaño– es su larga trompa y sus enormes orejas.","se caracteriza por poseer una cresta roja y carnosa coronando su cabeza. Es más grande que la gallina y sus plumas son más largas y densas.","cuerpo pesado y redondeado, hocico comparativamente largo y flexible, patas cortas con pezuñas (cuatro dedos) y una cola corta.","",""];var wordsL=[3,4,8,9,5,8,5,5,"",""];var altW=["","","","","","","","","",""];
var auW=["MQ==","Mg==","Mw==","NA==","NQ==","Ng==","Nw==","OA==","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="07Ahorcado_resources/media/"; textBNext="";
