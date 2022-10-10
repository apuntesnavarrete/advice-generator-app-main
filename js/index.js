let num = document.getElementsByClassName("num")[0]
let advice = document.getElementsByClassName("Advice")[0]
let button = document.getElementById("button")

advice_Random()

button.addEventListener("click",function(){
   advice_Random()
})






function advice_Random(){
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      advice.innerHTML = data.slip.advice
      num.innerHTML = data.slip.id   
    });
    
}


