
const qusts=[
    {
    qust:"who are you",
    answ : [
        {text:"dog",correct : false},
        {text:"cat",correct : true},
        {text:"monkey",correct : false},
        {text:"din",correct : false},
    ]
    },
    
    {
        qust:"who am i",
        answ : [
            {text:"ans1",correct : true},
            {text:"ans2",correct : false},
            {text:"ans3",correct : false},
            {text:"ans4",correct : false},
        ]
        }

]
    
    

const qustionElement=document.getElementById("qus");
const answerButton=document.getElementById("answer-butt");
const nextButton=document.getElementById("ne-bts");

let currentQuestion=0;
let score=0;

function startq(){
    currentQuestion=0;
    s=0;
    nextButton.innerHTML="NEXT";
    showqes();
}
function showqes(){
    rs();
    let curquestion=qusts[currentQuestion];
    let qusno=currentQuestion + 1;
    qustionElement.innerHTML=qusno+ ". " + curquestion.qust;

    curquestion.answ.forEach(answer =>{
        const but=document.createElement("button");
        but.innerHTML = answer.text;
       but.classList.add("bts");
        answerButton.appendChild(but);
        if(answer.correct){
            but.dataset.correct =answer.correct;
        }
        but.addEventListener("click",selectans);
    });
}

function rs(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectans(e){
    const selectedbts=e.target;
    const isCort =selectedbts.dataset.correct=="true";
    if(isCort)
    selectedbts.classList.add("correct");
    else
    selectedbts.classList.add("incorrect");

}
startq();

