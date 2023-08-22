const submitButton=document.querySelector('.guessSubmit')
const inputElement=document.querySelector('.guessField')
const randomNumber=Math.ceil(Math.random()*100)
const guesses=document.querySelector('.guesses')
const lastResult=document.querySelector('.lastResult')
const loworHi=document.querySelector('.loworHi')
let counter=0



// console.log(randomNumber)
submitButton.addEventListener('click',checkGuesses)

function checkGuesses()
{
    counter++

    let inputValue=inputElement.value

    if(counter===1)
    {
        guesses.innerHTML="last Guesses:"
    }

    guesses.innerHTML+=" "+inputValue;

    inputElement.value=""
}