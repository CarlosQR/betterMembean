
  /*
localStorage.setItem("backgroundColorFront",document.getElementById("backgroundColorFrontAsk").value);
localStorage.setItem("backgroundImageBack", document.getElementById("backgroundImageBackAsk").value);
localStorage.setItem("topBarColorMax",document.getElementById("topBarColorMaxAsk").value );
localStorage.setItem("topBarColorMin", document.getElementById("topBarColorMinAsk").value);

document.getElementById("themePfp").src= localStorage.getItem("backgroundImageBack")
    /*
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {backgroundImageBack: document.getElementById("backgroundImageBackAsk").value}, function(response) {
          
        });
      });
    
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {topBarColorMax: document.getElementById("topBarColorMaxAsk").value}, function(response) {
          
        });
      });
    
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {topBarColorMin: document.getElementById("topBarColorMinAsk").value}, function(response) {
          
        });
      });





    

    });
  });
*/

document.addEventListener('DOMContentLoaded', function() {
  var link2 = document.getElementById('plus');
  // onClick's logic below:
  link2.addEventListener('click', function() {
    window.location.href= "popupAsk.html"
  });
});


var themePfp 
var themeNum = localStorage.getItem("themeNum");
var theme = "";
for (let i = 1; i <= themeNum; i++){
  themePfp = localStorage.getItem("themePfp" + i);
  console.log("themePfp" + i)
  
  theme = theme + "<img style='border: 0.5px solid white'width ='80px' heigth = '45px' src = '" + themePfp+ "'>"
  console.log(themePfp)
  console.log(i)

}

console.log(theme)

if(theme != ""){

  //document.getElementById("themes").innerHTML=theme
  
  if(document.getElementById("themes") == null){

    setInterval(function(){ 

      document.getElementById("themes").innerHTML=theme


     }, 1000);
  }

}


/*
document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('submit');
  // onClick's logic below:
  link.addEventListener('click', function() {

console.log("funciona")
//var themeArray = [document.getElementById("backgroundColorFrontAsk").value,document.getElementById("backgroundImageBackAsk").value,document.getElementById("topBarColorMaxAsk").value,document.getElementById("topBarColorMinAsk").value]
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      
      chrome.tabs.sendMessage(tabs[0].id, {themeArray: [document.getElementById("backgroundColorFrontAsk").value,document.getElementById("backgroundImageBackAsk").value,document.getElementById("topBarColorMaxAsk").value,document.getElementById("topBarColorMinAsk").value]}, function(response) {
     
        window.location.href= "popup.html" 


      });
    });
  });
});

      */


      


  
/*
localStorage.setItem("backgroundColorFront",document.getElementById("backgroundColorFrontAsk").value);
localStorage.setItem("backgroundImageBack", document.getElementById("backgroundImageBackAsk").value);
localStorage.setItem("topBarColorMax",document.getElementById("topBarColorMaxAsk").value );
localStorage.setItem("topBarColorMin", document.getElementById("topBarColorMinAsk").value);
*/
