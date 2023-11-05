const confirm = document.querySelector('.confirm-button');
const formSection = document.getElementById('form-section');
const completedState = document.getElementById('completed-state');

const inputName=document.querySelector('.input-name');
const inputNum=document.querySelector('.input-num');
const inputDateMm=document.querySelector('.input-mm');
const inputDateYy=document.querySelector('.input-yy');
const inputCvc=document.querySelector('.input-cvc');


//Function for each input field to uodate in card and also check the validation and remove alert message when corrected//
inputName.addEventListener('input',function(){
    const cardName=inputName.value;
    document.querySelector('.card-name').innerHTML=cardName;

    inputName.classList.remove('red-border');
    document.querySelector('.alert-name').innerHTML="";

    if(cardName===''){
        document.querySelector('.alert-name').innerHTML="Can't be blank"; 
        inputCvc.classList.add('red-border');
    }
})

inputNum.addEventListener('input',function(){
    const cardNum=inputNum.value; 
    document.querySelector('.card-num').innerHTML=cardNum;

    inputNum.classList.remove('red-border');
    document.querySelector('.alert-card-num').innerHTML='';

    if (isNaN(cardNum)){
        document.querySelector('.alert-card-num').innerHTML='Wrong format, number only';
        inputNum.classList.add('red-border');
        }
    else if(cardNum===''){
        document.querySelector('.alert-card-num').innerHTML="Can't be blank"; 
        inputCvc.classList.add('red-border');
    }
})

inputDateMm.addEventListener('input',function(){
    const cardDateMm=inputDateMm.value;  
    document.querySelector('.card-date-mm').innerHTML=cardDateMm

    inputDateMm.classList.remove('red-border');
    document.querySelector('.alert-date').innerHTML="";

    if (cardDateMm===""){
        document.querySelector('.alert-date').innerHTML="Can't be blank"; 
        inputDateMm.classList.add('red-border');
        }
})
inputDateYy.addEventListener('input',function(){
    const cardDateYy=inputDateYy.value; 
    document.querySelector('.card-date-yy').innerHTML=cardDateYy;

    inputDateYy.classList.remove('red-border');
    document.querySelector('.alert-date').innerHTML="";

    if (cardDateYy===""){
        document.querySelector('.alert-date').innerHTML="Can't be blank"; 
        inputDateYy.classList.add('red-border');
        }
})


inputCvc.addEventListener('input',function(){
    const cardCvc=inputCvc.value; 
    document.querySelector('.card-cvc').innerHTML=cardCvc;

    inputCvc.classList.remove('red-border');
    document.querySelector('.alert-cvc').innerHTML="";

    if(cardCvc===''){
        document.querySelector('.alert-cvc').innerHTML="Can't be blank"; 
        inputCvc.classList.add('red-border');
    }
})

//Function to check the validation error and then only run//
confirm.addEventListener('click',function(){
    event.preventDefault();
    const cardName=inputName.value;
    const cardNum=inputNum.value; 
    const cardDateMm=inputDateMm.value;
    const cardDateYy=inputDateYy.value; 
    const cardCvc=inputCvc.value; 
  
    if (cardName===""){
        document.querySelector('.alert-name').innerHTML="Can't be blank";
        document.querySelector('.input-name').classList.add('red-border'); 
        }
    else if (cardNum===''){
        document.querySelector('.alert-card-num').innerHTML="Can't be blank";
        inputNum.classList.add('red-border');
        }
    else if (isNaN(cardNum)){
        document.querySelector('.alert-card-num').innerHTML='Wrong format, number only';
        inputNum.classList.add('red-border');
        }
    else if (cardDateMm===""){
        document.querySelector('.alert-date').innerHTML="Can't be blank";
        document.querySelector('.input-mm').classList.add('red-border'); 
        }
    else if (cardDateYy===""){
        document.querySelector('.alert-date').innerHTML="Can't be blank";
        document.querySelector('.input-yy').classList.add('red-border'); 
        }
    else if (cardCvc===""){
        document.querySelector('.alert-cvc').innerHTML="Can't be blank";
        document.querySelector('.input-cvc').classList.add('red-border'); 
        }
    else{
        event.preventDefault();
        formSection.style.display = 'none';
        completedState.style.display = 'block';
    }
    })

const continueButton=document.querySelector('.continue-button');

continueButton.addEventListener('click', function() {
    formSection.style.display = 'block';
    completedState.style.display = 'none'; // Show the section when the button is clicked
});



