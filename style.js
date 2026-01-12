  let count = 0 ;
  
  function copy(){
                count = count + 1;
const  text =
  navigator.clipboard.writeText('999')
   
   document.getElementById('copy-count-11').innerText= count 
  alert('নাম্বার টি successful copy করা হয়েছে')
  
  } 



  
  function copp2(){
                count = count + 1;
const  text =
  document.getElementById('red-1').innerText
navigator.clipboard.writeText('1994-999999');
   
  document.getElementById('copy-count-11').innerText= count 
  alert('নাম্বার টি successful copy করা হয়েছে ')
  
  } 


  function copy3(){
                count = count + 1;
const  text =
  
navigator.clipboard.writeText('109');
   
  document.getElementById('copy-count-11').innerText= count 
  alert('নাম্বার টি successful copy করা হয়েছে ')
  
  }

   function copy4(){
                count = count + 1;
const  text =
  
navigator.clipboard.writeText('106');
   
  document.getElementById('copy-count-11').innerText= count 
  alert('নাম্বার টি successful copy করা হয়েছে ')
  
  }

    function copy5(){
                count = count + 1;
const  text =
  
navigator.clipboard.writeText('16216');
   
  document.getElementById('copy-count-11').innerText= count 
  alert('নাম্বার টি successful copy করা হয়েছে ')
  
  }

   function copy6(){
                count = count + 1;
const  text =
  
navigator.clipboard.writeText('16445');
   
  document.getElementById('copy-count-11').innerText= count 
  alert('নাম্বার টি successful copy করা হয়েছে ')
  
  }

  //  heart click count 
    

  
function updadecount(){
  count ++;
  document.getElementById('heart-count').innerText = count;
}
// // call javascrif

let coins = 100;

function addCallLog() {
    
    
    let now = new Date();
    let time = now.toLocaleTimeString(); 





    // coin
   if (coins >= 20){
      coins = coins - 20;
      document.getElementById('coin-1').innerText = coins
    
     
    
    let historyBox = document.getElementById("history");

    
    let newLog = document.createElement("p");
    newLog.innerHTML = "<strong>National Emergency</strong><br>999 -  " + time;
    
  

  
    historyBox.prepend(newLog);      
   
    alert("Calling National Emergency Service 999...");
      }
      else{
        alert('আপনার পযাপ্ত কয়েন নেই। কল করার জন্য কমপক্ষে ২০ টা কয়েক লাগবে')
      }
  
    
    }



    // clear button 

    function clearHistory (){
      let historyBox = document.getElementById('history');
  if(historyBox){
   historyBox.innerHTML=''
     
    
    }

   
       
    }
     