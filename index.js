let randomNumber1 = Math.ceil(Math.random()*6);

let image1 = "images/dice"+randomNumber1+".png"

document.querySelector(".img1").setAttribute("src", image1);


let randomNumber2 = Math.ceil(Math.random()*6);

let image2 = "images/dice"+randomNumber2+".png"

document.querySelector(".img2").setAttribute("src", image2);

let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    heading.textContent = "🎯 Player 1 Wins";

} else if (randomNumber1 < randomNumber2){
    heading.textContent = "Player 2 Wins 🎯";
}
else{
    heading.textContent = "Draw!";
}