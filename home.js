let slide = document.querySelectorAll(".patientReview");
 let card = document.querySelectorAll(".card");
 let closeBtn = document.getElementById("closeBtn");
 let connectBtn = document.getElementById("connectBtn");

 card.forEach(function(cards){
    cards.addEventListener("click", function(){
        console.log(cards);
        document.querySelector(".detail").style.display="block"
        document.querySelector(".content").innerHTML=`
        <img src=${cards.firstElementChild.src} alt="">
        <div class="contentText">
                    <h1>Alexa Zoan</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ex accusantium eius magnam, esse repellat veritatis, consectetur aut perspiciatis dolor labore sapiente.</p>
        </div>
        `
       closeBtn.addEventListener("click", function(){
        document.querySelector(".detail").style.display="none"
       })
    })
 })

 connectBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Enter Details")
    }else{
        alert("You Logged IN")
    }

 })
 const handleBook = () =>{
   window.location.href = "http://127.0.0.1:5500/book.html";
 }
