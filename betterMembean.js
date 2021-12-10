
setInterval(function(){
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    sendResponse({respond: "ummmm"});
    

    localStorage.setItem("themeArray",request.themeArray);
    var themeArrayLS = localStorage.getItem("themeArray");
    themeArrayLS = themeArrayLS.split(",")
    var numLS = themeArrayLS[4]
    numLS = numLS.toString()
    console.log(themeArrayLS)
    console.log(numLS)
localStorage.setItem("themeArray"+ numLS,request.themeArray);

  
    
  }


);
},1000)
var themeNumBM = ""


setInterval(function(){

  
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
     
     themeNumBM = request.themeNum
      console.log(themeNumBM)
    }
  );
},1000)

/*


setInterval(function(){ 

    if(localStorage.getItem("backgroundColorFront") == null){

alert("Bienvenido a Better Membean!!-Por Carlos Q")
alert("Dale click al icon del chrome extension to create your own theme!!!")


    }
},1000);
*/





document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('');
  // onClick's logic below:
  link.addEventListener('click', function() {


  })
})


setInterval(function(){ 
  
var themeArray = localStorage.getItem("themeArray" + themeNumBM)
themeArray = themeArray.split(",")
console.log(themeNumBM)
console.log(themeArray)
//+ themeNumBM.toString()

var backgroundColorFrontLs= themeArray[0]
var backgroundImageBackLs = themeArray[1]
var topBarColorMaxLs = themeArray[2]
var topBarColorMinLS = themeArray[3]
var backgroundColorFront = document.getElementsByClassName('single-column-layout')[0];
backgroundColorFront.style.setProperty ('background-color', backgroundColorFrontLs, 'important');
//#28359d

 var backgroundImageBack = document.getElementById('section1-wrapper');
 backgroundImageBack.style.setProperty ('background-image', 'url('+backgroundImageBackLs+ ')', 'important');
 backgroundImageBack.style.setProperty ('background-repeat', 'no-repeat', 'important');
 backgroundImageBack.style.setProperty ('background-size', 'cover', 'important');
 
//https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg
 let topBarColorMax = document.getElementsByClassName('screen-width')[0];
 topBarColorMax.style.setProperty ('background-color', topBarColorMaxLs, 'important');
//black

 let topBarColorMin = document.getElementsByClassName('screen-width')[0];
 topBarColorMin.style.setProperty ('border-bottom-color', topBarColorMinLS, 'important');
//#e137dc

backgroundColorFront.style.setProperty ('border-color', topBarColorMinLS, 'important');
},10);

//themeArray = #28359d,https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg,#000000,#e137dc
 











/*
screen-width
background-image: "url(https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg)" !important;


 style= "background-image: 'url(https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg'"
 https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730-702x459.jpg

 */