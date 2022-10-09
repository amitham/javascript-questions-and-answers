const questionData = allQuestionsAndAnswers;

const mainContainer = document.getElementById("main-container");

//create html structure
function createHtmlStructure(questionText, answerText) {
    const question_answer = document.createElement("div");
    question_answer.className = "question-answer";

    const vl = document.createElement("div");
    vl.className = "vl";
    question_answer.appendChild(vl);

    const question = document.createElement("div");
    question.className = "question";

    const mark = document.createElement("div");
    mark.className = "mark";

    const question_text = document.createElement("div");
    question_text.className = "question-text";
    question_text.innerText = questionText;

    question.appendChild(mark);
    question.appendChild(question_text);
    question_answer.appendChild(question);

    const answer = document.createElement("div");
    answer.className = "answer";
    const answerSpan = document.createElement("span");

   
    answerSpan.innerHTML = answerText
    //answerSpan.innerText = answerText;
    answer.appendChild(answerSpan);

    question_answer.appendChild(answer);
    return question_answer;
}

function createQuestion() {

    for (let index = 0; index < questionData.length; index++) {        
        const singleQueAns = createHtmlStructure(questionData[index].question, questionData[index].answer);
        console.log(singleQueAns)
        mainContainer.appendChild(singleQueAns);
    }
}

createQuestion();





