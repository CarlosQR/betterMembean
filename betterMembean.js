chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.backgroundColorFront)
  }
);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.backgroundImageBack)
  }
);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.topBarColorMax)
  }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request.topBarColorMin)
  }
);


/*
localStorage.setItem("backgroundColorFront",document.getElementById("backgroundColorFrontAsk").value);
localStorage.setItem("backgroundImageBack", document.getElementById("backgroundImageBackAsk").value);
localStorage.setItem("topBarColorMax",document.getElementById("topBarColorMaxAsk").value );
localStorage.setItem("topBarColorMin", document.getElementById("topBarColorMinAsk").value);
*/


/*
var btn = document.createElement("BUTTON");
document.body.appendChild(btn);

setInterval(function(){ 

    if(localStorage.getItem("backgroundColorFront") == null){
/*
alert("Bienvenido a Better Membean!!-Por Carlos Q")
alert("Dale click al icon del chrome extension to create your own theme!!!")
*/

/*

    }
},1000);
var backgroundColorFrontLs= localStorage.getItem("backgroundColorFront");
var backgroundImageBackLs = localStorage.getItem("backgroundImageBack");
var topBarColorMaxLs = localStorage.getItem("topBarColorMax");
var topBarColorMinLS = localStorage.getItem("topBarColorMin");


var backgroundColorFront = document.getElementsByClassName('single-column-layout')[0];
backgroundColorFront.style.setProperty ('background-color', backgroundColorFrontLs, 'important');
//#28359d

 var backgroundImageBack = document.getElementById('section1-wrapper');
 backgroundImageBack.style.setProperty ('background-image', 'url('+backgroundImageBackLs+ ')', 'important');
//https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg
 let topBarColorMax = document.getElementsByClassName('screen-width')[0];
 topBarColorMax.style.setProperty ('background-color', topBarColorMaxLs, 'important');
//black
 let topBarColorMin = document.getElementsByClassName('screen-width')[0];
 topBarColorMin.style.setProperty ('border-bottom-color', topBarColorMinLS, 'important');
//#e137dc











/*
screen-width
background-image: "url(https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg)" !important;


 style= "background-image: 'url(https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg'"
 https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg

 */