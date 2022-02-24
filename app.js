const correctAnswers = ['C','B','B','B','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
form.addEventListener('submit',e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    //check answers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            console.log('answer '+answer);
            console.log('correct answer '+ correctAnswers[index]);
            score+=20;
        }
    });
    window.scrollTo(0,0);
    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(()=>{
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearInterval(timer);
    } else {
        output ++;
    }
},50);
});


