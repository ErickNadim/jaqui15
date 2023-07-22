//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
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
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades Haz ganado "; messageTime="tu tiempo ha terminado haz perdido"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="intentalo nuevamente"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["UEVSUk8=","QlVITw==","RUxFRkFOVEU=","QUJFSkE=","QVJBw5FB","R0FMTE8=","R0FMTElOQQ==","TEVPTg==","T1ZFSkE=","UkFUT04="];var cp_ima=["perro.jpg","buho.jpg","elefante.jpg","abeja.jpg","ara__a.jpg","gallo.jpg","gallina.jpg","leon.jpg","oveja.jpg","raton.jpg"];var cp_mp3=["","","","","","","","","",""];var cp_ogg=["","","","","","","","","",""];var cp_que=["TWFtw61mZXJvIGNhcm7DrXZvcm8gZG9tw6lzdGljbyBkZSBsYSBmYW1pbGlhIGRlIGxvcyBjw6FuaWRvcyBxdWUgc2UgY2FyYWN0ZXJpemEgcG9yIHRlbmVyIGxvcyBzZW50aWRvcyBkZWwgb2xmYXRvIHkgZWwgb8OtZG8gbXV5IGZpbm9zLCBwb3Igc3UgaW50ZWxpZ2VuY2lhIHkgcG9yIHN1IGZpZGVsaWRhZCBhbCBzZXIgaHVtYW5v","QXZlIHJhcGF6IG5vY3R1cm5hIGRlIGhhc3RhIDcwIGNtIGRlIGFsdHVyYSwgY29uIGxhIGNhYmV6YSBncmFuZGUgeSBhbmNoYSwgZG9zIG1lY2hvbmVzIHNvYnJlIGxvcyBvw61kb3MsIG9qb3MgcmVkb25kb3MgeSBncmFuZGVzIGVuIHBvc2ljacOzbiBmcm9udGFsLCBwaWNvIGdhbmNodWRvLCBnYXJyYXMgZnVlcnRlcyB5IGN1ZXJwbyByZWNob25jaG87IHN1IHBsdW1hamUgc3VlbGUgc2VyIG1hcnLDs247IHNlIGFsaW1lbnRhIGRlIHBlcXVlw7FvcyBhbmltYWxlcyB5IHZpdmUgZW4gYm9zcXVlcyBlc3Blc29zIHkgcGXDsWFzY29zb3M=","TWFtw61mZXJvIHBhcXVpZGVybW8gZGUgZ3JhbiB0YW1hw7FvLCBlbCBtYXlvciBkZSBsb3MgdGVycmVzdHJlcywgY29uIGxhIHBpZWwgZGUgY29sb3IgZ3JpcyBvc2N1cm8sIGdydWVzYSwgcnVnb3NhIHkgc2luIHBlbG8sIGdyYW5kZXMgb3JlamFzIGNvbGdhbnRlcywgbGFyZ2EgdHJvbXBhIHByZW5zaWwsIGN1YXRybyBleHRyZW1pZGFkZXMgZ3J1ZXNhcyB5IGNhc2kgY2lsw61uZHJpY2FzLCBjb2xhIGxhcmdhLCB5IGRvcyBjb2xtaWxsb3MgbXV5IGxhcmdvcyBkZSBwdW50YSBjw7NuaWNhOyBzZSBhbGltZW50YSBkZSB2ZWdldGFsZQ==","SW5zZWN0byBkZSB1bm9zIDE1IG1tIGRlIGxhcmdvLCBkZSBjb2xvciBwYXJkbyBvc2N1cm8geSBjb24gdmVsbG8gcm9qaXpvLCBjb24gZG9zIHBhcmVzIGRlIGFsYXMgdHJhbnNwYXJlbnRlcyBjcnV6YWRhcyBkZSBuZXJ2aW9zOyB2aXZlIGVuIGNvbG9uaWFzLCBjYWRhIHVuYSBkZSBsYXMgY3VhbGVzIGNvbnN0YSBkZSB1bmEgc29sYSBoZW1icmEgZmVjdW5kYSwgZGl2ZXJzb3MgbWFjaG9zIHkgbnVtZXJvc8Otc2ltYXMgaGVtYnJhcyBlc3TDqXJpbGVzOyBoYWJpdGEgZW4gbG9zIGh1ZWNvcyBkZSBsb3Mgw6FyYm9sZXMgbyBsYXMg","Q3VhbHF1aWVyYSBkZSBsb3MgYW5pbWFsZXMgZGVsIG9yZGVuIGRlIGxvcyBhcmFuZWlkb3MsIGNvbW8gbGEgdGFyw6FudHVsYSBvIGxhIHZpdWRhIG5lZ3JhLg==","QXZlIGRvbcOpc3RpY2E7IGVsIG1hY2hvIGVzIGRlIHBpY28gY29ydG8geSBhcnF1ZWFkbywgcGx1bWFqZSBsdXN0cm9zbyB5IGFidW5kYW50ZSwgY29uIHVuYSBjcmVzdGEgcm9qYSBlbiBsbyBhbHRvIGRlIGxhIGNhYmV6YSwg","QXZlIGRvbcOpc3RpY2EgZGVsIG9yZGVuIGRlIGxhcyBnYWxsaWZvcm1lcywgY29uIGNyZXN0YSByb2phIHkgY2Fybm9zYSwgcGljbyBjb3J0bywgZ3J1ZXNvIHkgYXJxdWVhZG8sIGRlIHBsdW1hamUgYWJ1bmRhbnRlLCBsdXN0cm9zbyB5IGEgbWVudWRvIGNvbiB2aXNvcyBpcmlzYWRvcywgY3V5byBtYWNobyB0aWVuZSB0YXJzb3MgZnVlcnRlcyBhcm1hZG9zIGRlIGVzcG9sb25lcywgeSBjdXlhIGhlbWJyYSBlcyBkZSBtZW5vciB0YW1hw7FvIHkgdGllbmUgbGEgY3Jlc3RhIG3DoXMgcGVxdWXDsWEu","TWFtw61mZXJvIGZlbGlubyBkZSAyNTAgYSAzNTAgY20gZGUgbG9uZ2l0dWQgKGNvbGEgaW5jbHVpZGEpLCBwZWxhamUgcGFyZG8gY2xhcm8sIGNhYmV6YSBncmFuZGUsIGNvbGEgbGFyZ2EgdGVybWluYWRhIGVuIHVuIG1lY2jDs24geSB1w7FhcyBmdWVydGVzIHF1ZSB1c2EgcGFyYSBjYXphcjsgZWwgbWFjaG8gZXMgbWF5b3IgcXVlIGxhIGhlbWJyYSB5IHRpZW5lIHVuYSBsYXJnYSBtZWxlbmEgcXVlIGxlIGN1YnJlIGxhIG51Y2EgeSBlbCBjdWVsbG87IGVzIGNhcm7DrXZvcm8geSBoYWJpdGEgZW4gbWFuYWRhIGVuIGRlc2llcnRvcw==","TWFtw61mZXJvIHJ1bWlhbnRlIG92aW5vLCBoZW1icmEsIGNvbiBlbCBjdWVycG8gY3ViaWVydG8gZGUgbGFuYSBlc3Blc2EgeSBmbGV4aWJsZSwgZ2VuZXJhbG1lbnRlIGJsYW5jYSBvIG5lZ3JhOyBzZSBjcsOtYSBlbiBkb21lc3RpY2lkYWQgeSBkZSDDqWwgc2UgYXByb3ZlY2hhbiBlc3BlY2lhbG1lbnRlIGxhIGxhbmEsIGxhIGNhcm5lIHkgbGEgbGVjaGUu","TWFtw61mZXJvIHJvZWRvciBkZSBwZXF1ZcOxbyB0YW1hw7FvLCBwZWxvIGZpbm8sIGNvbGEgbGFyZ2EsIHBhdGFzIGNvcnRhcywgY2FiZXphIHBlcXVlw7FhIHkgb3JlamFzIHRpZXNhczsgc2UgcmVwcm9kdWNlIGEgZ3JhbiB2ZWxvY2lkYWQgeSB2aXZlIGVuIGxhcyBjYXNhcyBvIGVuIGVsIGNhbXBvOyBoYXkgbXVjaGFzIGVzcGVjaWVzLg=="];var cp_num=[5,4,8,5,5,5,7,4,5,5];var cp_alt=["","","","","","","","","",""];
var wordsGame="MDlDb25zdHJ1eWVQYWxhYnJhcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";var jobindex=[];
