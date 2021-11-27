


document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('submit');
  // onClick's logic below:
  link.addEventListener('click', function() {


    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {backgroundColorFront: document.getElementById("backgroundColorFrontAsk").value}, function(response) {
        
      });
    });
    
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
    

/*
localStorage.setItem("backgroundColorFront",document.getElementById("backgroundColorFrontAsk").value);
localStorage.setItem("backgroundImageBack", document.getElementById("backgroundImageBackAsk").value);
localStorage.setItem("topBarColorMax",document.getElementById("topBarColorMaxAsk").value );
localStorage.setItem("topBarColorMin", document.getElementById("topBarColorMinAsk").value);
*/

