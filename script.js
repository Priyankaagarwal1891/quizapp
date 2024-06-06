var ques_number=0;
var current_score=0;
var total_score=0;
var spirit_animal;
var description;

var myQuestions=[
    {
        question:'What is your favourite color?',
        option1:'Yellow',
        option2:'Red',
        option3:'Blue',
        option4:'White',
        ques_no:'1'
    },
    {
        question:'Which would be your favourite way to spend your vacations?',
        option1:'Sailing on a boat',
        option2:'Near a fireplace at home',
        option3:'On a beach',
        option4:'Camping',
        ques_no:'2'
    }
];

var number_questions=myQuestions.length;

function getQuestion(){
    var quiz_div=document.getElementById('quiz_container');
    if(ques_number<number_questions){
        ques=myQuestions[ques_number].question;
        opt1=myQuestions[ques_number].option1;
        opt2=myQuestions[ques_number].option2;
        ques_num=myQuestions[ques_number].ques_no;
        current_question=`<h4> ${ques_num}${"."}${ques}</h4>`;
        quiz_div.innerHTML=current_question;
    }
    else{

    }
}
window.onload(getQuestion());

function checkAnswer(){
    
}