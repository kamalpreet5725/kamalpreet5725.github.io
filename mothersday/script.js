const msg = `Maa, aaj main tere saamne dil se kuch kehna chahta hoon.
Shayad main roz tere paas baith ke apne dil ki baat nahi keh paata.
Shayad main zyada waqt apni duniya mein khoya rehta hoon.
Shayad main har roz shaitani karta hoon, tujhe satata hoon…
Lekin maa, yeh sach hai main tujhe utna
 hi pyar karta hoon jitna ek beta apni maa se kar sakta hai.
Tere bina main kuch bhi nahi hoon maa.
Teri daant mein bhi mohabbat hoti hai,
Teri chinta mein bhi dua chhupi hoti hai.
Main jaanta hoon, main perfect nahi hoon.
Galtiyan karta hoon, kabhi tujhe hurt bhi karta hoon,
Lekin aaj main dil se kehna chahta hoon —
Mujhe maaf kar dena maa.
Tu meri har dua ka jawaab hai,
Tu meri har kamyabi ke peeche khadi wo muskurahat
 hai jo kabhi kisi ne nahi dekhi.
Main chahta hoon tujhe duniya ki har khushi doon,
Teri har thakan mita doon,
Tere chehre pe hamesha muskan banaa ke rakhun.
Maa, tu mera sab kuch hai.
Teri jagah koi nahi le sakta.
Main tujhe shabdon mein nahi samjha sakta —
Bas itna kehna chahta hoon…

I love you maa. Dil se. Hamesha. ❤️`;

const message = document.getElementById("message");
const popup = document.getElementById("popupText");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const heart = document.getElementById("heart");
const contentBox = document.getElementById("contentBox");


let i = 0;
const letters = msg.split("");

function typeLetter() {
  if (i < letters.length) {
    message.innerHTML += letters[i];
    i++;
    setTimeout(typeLetter, 15);
  } else {
   
    resetBtn.style.display = "inline-block";
  }
}

startBtn.onclick = () => {
  startBtn.style.display = "none";
  heart.style.display = "none";
  contentBox.style.display = "flex";
  message.style.display = "block";
  message.innerHTML = "";
  i = 0;
  setTimeout(typeLetter, 800);
};

resetBtn.onclick = () => {
  i = 0;
  message.innerHTML = "";
  message.style.display = "none";
  resetBtn.style.display = "none";
  heart.style.display = "block";
  contentBox.style.display = "none";
  startBtn.style.display = "inline-block";

};
