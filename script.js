const plusone=document.getElementById("plusone");
const plustwo=document.getElementById("plustwo");
const plusthree=document.getElementById("plusthree");
const answerone=document.getElementById("answerone");
const answertwo=document.getElementById("answertwo");
const answerthree=document.getElementById("answerthree");

function addStuff(answer,answers,answerss,plus,pluss,plusss){
    if (answer.className=="answer none")
    {
    answer.className="answer";
    answers.className="answer none"
    answerss.className="answer none"
    plus.innerHTML="-";
    pluss.innerHTML="+";
    plusss.innerHTML="+";
}
else{
    answer.className="answer none";
    plus.innerHTML="+";
}
};

plusone.addEventListener("click", () => {
    addStuff(answerone,answertwo,answerthree,plusone,plustwo,plusthree);
});
plustwo.addEventListener("click", () => {
    addStuff(answertwo,answerone,answerthree,plustwo,plusone,plusthree);
});
plusthree.addEventListener("click", () => {
    addStuff(answerthree,answertwo,answerone,plusthree,plusone,plustwo);
});