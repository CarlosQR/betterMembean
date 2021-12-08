

document.addEventListener('DOMContentLoaded', function() {
  var link2 = document.getElementById('plus');
  // onClick's logic below:
  link2.addEventListener('click', function() {
    window.location.href= "popupAsk.html"
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var link3 = document.getElementById('test');
  // onClick's logic below:
  link3.addEventListener('click', function() {
    console.log("bruh")
  });
});


var themePfp 
var themeNum = localStorage.getItem("themeNum");
var theme = "";

for (let i = 1; i <= themeNum; i++){
  themePfp = localStorage.getItem("themePfp" + i);
  console.log("themePfp" + i)
  
  theme = theme + "<img id='"+i+"' style='border: 0.5px solid white; background-repeat: no repeat 'width ='80px' heigth = '45px' src = '" + themePfp+ "'>"
  console.log(themePfp)
  console.log(i)
  


}
 var themeLoop = setInterval(function(){
var span = document.getElementById("themes")

if(document.getElementById("themes")== null){
  clearInterval(span)

}else{


}
}, 1000);
console.log(document.getElementById('1'))

//===================================1=====================================\\

 
document.addEventListener('DOMContentLoaded', function() {
 
  var theme = document.getElementById('1');


  // 1
  setInterval(function(){
    document.getElementById('1').addEventListener('click', function() {
  console.log("Like como q funcione souu 1")

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {themeNum: "1"}, function(response) {
          });});

  });
/*
  
    
   
*/
}, 1000)

//2
setInterval(function(){
  document.getElementById('2').addEventListener('click', function() {
console.log("Like como q funcione souu 2")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {themeNum: "2"}, function(response) {
        });});

});
/*

  
 
*/
}, 1000)
   })
  
        





console.log(theme)
x = setInterval(function(){
if(theme != ""){
if(document.getElementById("themes") == null ||document.getElementById("themes").innerHTML == '' ){

  document.getElementById("themes").innerHTML=theme

}else{
console.log("INterval Estoped")
clearInterval(x)

}

  

}

},10)






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
