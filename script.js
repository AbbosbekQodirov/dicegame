var current1=document.querySelector(".current1")
var current2=document.querySelector(".current2")
var hold=document.querySelector(".btn--hold")
var hand1=document.querySelector(".hand1")
var hand2=document.querySelector(".hand2")
var error1=document.querySelector(".current1-x")
var error2=document.querySelector(".current2-x")

var img=document.querySelector(".img")
current1.addEventListener("click", ()=>{

    var ball1=document.querySelector(".current-score1").innerHTML
    let a=parseInt(Math.random()*6)+1
    img.innerHTML+='<img src="dice-' + a + '.png" alt="Playing dice" class="dice" />'
    let b = parseInt(ball1)+a
    document.querySelector(".current-score1").innerHTML=b


    if(a==1){
        hand2.classList.toggle("active")
        hand1.classList.toggle("active")

        error1.classList.toggle("error")
        error2.classList.toggle("error")

        document.querySelector(".current-score1").innerHTML=0
    }
})
current2.addEventListener("click", ()=>{
    var ball2=document.querySelector(".current-score2").innerHTML
    let x=parseInt(Math.random()*6)+1
    img.innerHTML+='<img src="dice-' + x + '.png" alt="Playing dice" class="dice" />'
    let y = parseInt(ball2)+x
    document.querySelector(".current-score2").innerHTML=y
    if(x==1){
        hand1.classList.toggle("active")
        hand2.classList.toggle("active")

        error1.classList.toggle("error")
        error2.classList.toggle("error")

        document.querySelector(".current-score2").innerHTML=0

    }
})
hold.addEventListener("click", ()=>{
    var c=parseInt(document.querySelector(".current-score1").innerHTML)
    var score1=parseInt(document.querySelector(".score1").innerHTML)

    document.querySelector(".score1").innerHTML = score1+c
    document.querySelector(".current-score1").innerHTML=0

    var d=parseInt(document.querySelector(".current-score2").innerHTML)
    var score2=parseInt(document.querySelector(".score2").innerHTML)

    document.querySelector(".score2").innerHTML = score2+d
    document.querySelector(".current-score2").innerHTML=0
    
    hand1.classList.toggle("active")
    hand2.classList.toggle("active")

    error1.classList.toggle("error")
    error2.classList.toggle("error")
})


    