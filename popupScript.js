

document.addEventListener('DOMContentLoaded', function() {
  var link2 = document.getElementById('plus');
  // onClick's logic below:
  link2.addEventListener('click', function() {
    localStorage.setItem("themeEdit",0)
    window.location.href= "popupAsk.html"

  });
});


document.addEventListener('DOMContentLoaded', function() {
  var link3 = document.getElementById('edit');
  // onClick's logic below:
  link3.addEventListener('click', function() {
    for(var i = 0;i>9;i++){
      console.log( document.getElementsByClassName("themes")[i])
    document.getElementsByClassName("themes")[i].style.borderStyle = "dotted"
  }
      document.getElementById('1').addEventListener('click', function() {
    console.log("Like como q quieres edit a 1")
    localStorage.setItem("themeEdit",1)
    window.location.href= "popupAsk.html"
  })
  document.getElementById('2').addEventListener('click', function() {
    console.log("Like como q quieres edit a 2")
    localStorage.setItem("themeEdit",2)
    window.location.href= "popupAsk.html"
  })
  document.getElementById('3').addEventListener('click', function() {
    console.log("Like como q quieres edit a 3")
    localStorage.setItem("themeEdit",3)
    window.location.href= "popupAsk.html"
  })

  document.getElementById('4').addEventListener('click', function() {
    console.log("Like como q quieres edit a 4")
    localStorage.setItem("themeEdit",4)
    window.location.href= "popupAsk.html"
  })
  document.getElementById('5').addEventListener('click', function() {
    console.log("Like como q quieres edit a 5")
    localStorage.setItem("themeEdit",5)
    window.location.href= "popupAsk.html"
  })
  document.getElementById('6').addEventListener('click', function() {
    console.log("Like como q quieres edit a 6")
    localStorage.setItem("themeEdit",6)
    window.location.href= "popupAsk.html"
  })
  document.getElementById('7').addEventListener('click', function() {
    console.log("Like como q quieres edit a 7")
    localStorage.setItem("themeEdit",7)
    window.location.href= "popupAsk.html"
  })
  document.getElementById('8').addEventListener('click', function() {
    console.log("Like como q quieres edit a 8")
    localStorage.setItem("themeEdit",8)
    window.location.href= "popupAsk.html"
  })
  document.getElementById('9').addEventListener('click', function() {
    console.log("Like como q quieres edit a 9")
    localStorage.setItem("themeEdit",9)
    window.location.href= "popupAsk.html"
  })


  

  });
});




var themePfp 
var themeNum = localStorage.getItem("themeNum");
var theme = "";

for (let i = 1; i <= themeNum; i++){
  themePfp = localStorage.getItem("themePfp" + i);
  console.log("themePfp" + i)
  
  theme = theme + "<img class = 'themes' id='"+i+"' style='border: 0.5px solid white; background-repeat: no repeat;position: sticky'width ='80px' heigth = '45px' src = '" + themePfp+ "'>"
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



 
document.addEventListener('DOMContentLoaded', function() {
 
  var theme = document.getElementById('1');


  // 1
  setInterval(function(){
    document.getElementById('1').addEventListener('click', function() {
  console.log("Like como q funcione souu 1")

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {themeNum: "1"}, function(response) {
          document.getElementById('1').style.borderWidth = "2px 2px"
          document.getElementById('2').style.borderWidth = "0.5px 0.5px"
          document.getElementById('3').style.borderWidth = "0.5px 0.5px"
          document.getElementById('4').style.borderWidth = "0.5px 0.5px"
          document.getElementById('5').style.borderWidth = "0.5px 0.5px"
          document.getElementById('6').style.borderWidth = "0.5px 0.5px"
          document.getElementById('7').style.borderWidth = "0.5px 0.5px"
          document.getElementById('8').style.borderWidth = "0.5px 0.5px"
          document.getElementById('9').style.borderWidth = "0.5px 0.5px"
          
         
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
        document.getElementById('2').style.borderWidth = "2px 2px"
        document.getElementById('1').style.borderWidth = "0.5px 0.5px"
        document.getElementById('3').style.borderWidth = "0.5px 0.5px"
        document.getElementById('4').style.borderWidth = "0.5px 0.5px"
        document.getElementById('5').style.borderWidth = "0.5px 0.5px"
        document.getElementById('6').style.borderWidth = "0.5px 0.5px"
        document.getElementById('7').style.borderWidth = "0.5px 0.5px"
        document.getElementById('8').style.borderWidth = "0.5px 0.5px"
        document.getElementById('9').style.borderWidth = "0.5px 0.5px"
        localStorage.setItem("curentTheme","2")
        });});

});
/*

  
 
*/
}, 1000)


//3
setInterval(function(){
  document.getElementById('3').addEventListener('click', function() {
console.log("Like como q funcione souu 3")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {themeNum: "3"}, function(response) {
        document.getElementById('3').style.borderWidth = "2px 2px"
        document.getElementById('1').style.borderWidth = "0.5px 0.5px"
        document.getElementById('2').style.borderWidth = "0.5px 0.5px"
        document.getElementById('4').style.borderWidth = "0.5px 0.5px"
        document.getElementById('5').style.borderWidth = "0.5px 0.5px"
        document.getElementById('6').style.borderWidth = "0.5px 0.5px"
        document.getElementById('7').style.borderWidth = "0.5px 0.5px"
        document.getElementById('8').style.borderWidth = "0.5px 0.5px"
        document.getElementById('9').style.borderWidth = "0.5px 0.5px"
        
       
        });});

});
/*

  
 
*/
}, 1000)


//4
setInterval(function(){
  document.getElementById('4').addEventListener('click', function() {
console.log("Like como q funcione souu 4")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {themeNum: "4"}, function(response) {
        document.getElementById('4').style.borderWidth = "2px 2px"
        document.getElementById('1').style.borderWidth = "0.5px 0.5px"
        document.getElementById('2').style.borderWidth = "0.5px 0.5px"
        document.getElementById('3').style.borderWidth = "0.5px 0.5px"
        document.getElementById('5').style.borderWidth = "0.5px 0.5px"
        document.getElementById('6').style.borderWidth = "0.5px 0.5px"
        document.getElementById('7').style.borderWidth = "0.5px 0.5px"
        document.getElementById('8').style.borderWidth = "0.5px 0.5px"
        document.getElementById('9').style.borderWidth = "0.5px 0.5px"
        
       
        });});

});
/*

  
 
*/
}, 1000)

//5
setInterval(function(){
  document.getElementById('5').addEventListener('click', function() {
console.log("Like como q funcione souu 5")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {themeNum: "5"}, function(response) {
        document.getElementById('5').style.borderWidth = "2px 2px"
        document.getElementById('1').style.borderWidth = "0.5px 0.5px"
        document.getElementById('2').style.borderWidth = "0.5px 0.5px"
        document.getElementById('4').style.borderWidth = "0.5px 0.5px"
        document.getElementById('3').style.borderWidth = "0.5px 0.5px"
        document.getElementById('6').style.borderWidth = "0.5px 0.5px"
        document.getElementById('7').style.borderWidth = "0.5px 0.5px"
        document.getElementById('8').style.borderWidth = "0.5px 0.5px"
        document.getElementById('9').style.borderWidth = "0.5px 0.5px"
        
       
        });});

});
/*

  
 
*/
}, 1000)



//6
setInterval(function(){
  document.getElementById('6').addEventListener('click', function() {
console.log("Like como q funcione souu 6")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {themeNum: "6"}, function(response) {
        document.getElementById('6').style.borderWidth = "2px 2px"
        document.getElementById('1').style.borderWidth = "0.5px 0.5px"
        document.getElementById('2').style.borderWidth = "0.5px 0.5px"
        document.getElementById('4').style.borderWidth = "0.5px 0.5px"
        document.getElementById('5').style.borderWidth = "0.5px 0.5px"
        document.getElementById('3').style.borderWidth = "0.5px 0.5px"
        document.getElementById('7').style.borderWidth = "0.5px 0.5px"
        document.getElementById('8').style.borderWidth = "0.5px 0.5px"
        document.getElementById('9').style.borderWidth = "0.5px 0.5px"
        
       
        });});

});
/*

  
 
*/
}, 1000)


//7
setInterval(function(){
  document.getElementById('7').addEventListener('click', function() {
console.log("Like como q funcione souu 7")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {themeNum: "7"}, function(response) {
        document.getElementById('7').style.borderWidth = "2px 2px"
        document.getElementById('1').style.borderWidth = "0.5px 0.5px"
        document.getElementById('2').style.borderWidth = "0.5px 0.5px"
        document.getElementById('4').style.borderWidth = "0.5px 0.5px"
        document.getElementById('5').style.borderWidth = "0.5px 0.5px"
        document.getElementById('6').style.borderWidth = "0.5px 0.5px"
        document.getElementById('3').style.borderWidth = "0.5px 0.5px"
        document.getElementById('8').style.borderWidth = "0.5px 0.5px"
        document.getElementById('9').style.borderWidth = "0.5px 0.5px"
        
       
        });});

});
/*

  
 
*/
}, 1000)



//8
setInterval(function(){
  document.getElementById('8').addEventListener('click', function() {
console.log("Like como q funcione souu 8")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {themeNum: "8"}, function(response) {
        document.getElementById('8').style.borderWidth = "2px 2px"
        document.getElementById('1').style.borderWidth = "0.5px 0.5px"
        document.getElementById('2').style.borderWidth = "0.5px 0.5px"
        document.getElementById('4').style.borderWidth = "0.5px 0.5px"
        document.getElementById('5').style.borderWidth = "0.5px 0.5px"
        document.getElementById('6').style.borderWidth = "0.5px 0.5px"
        document.getElementById('7').style.borderWidth = "0.5px 0.5px"
        document.getElementById('3').style.borderWidth = "0.5px 0.5px"
        document.getElementById('9').style.borderWidth = "0.5px 0.5px"
        
       
        });});

});
/*

  
 
*/
}, 1000)




//9
setInterval(function(){
  document.getElementById('9').addEventListener('click', function() {
console.log("Like como q funcione souu 9")

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {themeNum: "9"}, function(response) {
        document.getElementById('9').style.borderWidth = "2px 2px"
        document.getElementById('1').style.borderWidth = "0.5px 0.5px"
        document.getElementById('2').style.borderWidth = "0.5px 0.5px"
        document.getElementById('4').style.borderWidth = "0.5px 0.5px"
        document.getElementById('5').style.borderWidth = "0.5px 0.5px"
        document.getElementById('6').style.borderWidth = "0.5px 0.5px"
        document.getElementById('7').style.borderWidth = "0.5px 0.5px"
        document.getElementById('8').style.borderWidth = "0.5px 0.5px"
        document.getElementById('3').style.borderWidth = "0.5px 0.5px"
        
       
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
