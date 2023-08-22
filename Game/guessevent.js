let random_number=Math.ceil(Math.random()*100)
console.log(random_number)
let second_range=100-random_number
let first_part=random_number/2
let second_part=first_part+(random_number/2)
let third_part=(second_range/2)+random_number
let fourth_part=third_part+(second_range/2)
let innercontainer=document.querySelector('.innercontainer')
let restart=document.querySelector('.restart')
console.log(first_part)
console.log(second_part)
console.log(third_part)
console.log(fourth_part)


// const prev_guess=[];
const ip=document.querySelector('#guessnumber')
console.log
const prev_guesses=document.querySelector('#prev-guesses')
const btn=document.querySelector('#btn')
const suggestion=document.querySelector('#suggestion')
let count=0
// let counter=0
let right_or_wrong=document.querySelector('#right_or_wrong')
let start_new_game=document.querySelector('.start_new_game')


btn.addEventListener('click',(event)=>
{   
    
    // prev_guess.push(ip.target.value);
    // console.log(prev_guesses.textContent)
    // console.log(prev_guesses)
    count++
    if(count==1)
    prev_guesses.innerHTML+="PREVIOUS GUESSES:"

    console.log(ip.value)
    prev_guesses.innerHTML=prev_guesses.innerHTML+ip.value+" "
    

    if(count===10)
    {
        // prev_guesses.innerHTML=""
        // btn.innerHTML=""
        // suggestion.innerHTML=""
        innercontainer.innerHTML=" "
        restart.style.display='block'

    }


//     if(ip.value==random_number)
//     {
//         suggestion.innerHTML+="YOUR GUESS IS RIGHT" 
//     }
//     else if(ip.value<(random_number/2))
//     {
//     suggestion.innerHTML+="YOUR GUESS IS TOO LOW"
//     // console.log("YOUR GUESS IS TOO LOW")
//     }
//     else if(ip.value>(random_number/2) && ip.value<(random_number))
// suggestion.innerHTML+="YOUR GUESS IS LOW"
//     else if(ip.value>random_number && ip.value<random_number+(random_number/2))
// suggestion.innerHTML+="YOUR GUESS IS HIGH"
// else if (ip.value>random_number+(random_number/2))
// suggestion.innerHTML+="YOUR GUESS IS TOO HIGH"

    if(ip.value==random_number)
    {
        console.log("YOUR GUESS IS RIGHT")
        suggestion.innerHTML="YOUR GUESS IS RIGHT"
        right_or_wrong.innerText="RIGHT"
        right_or_wrong.className="bg-green"
        start_new_game.style.display='inline-block'; 

       }
    else if(ip.value<=first_part)
    {
        console.log("YOUR GUESS IS TOO LOW")

        suggestion.innerHTML=("YOUR GUESS IS TOO LOW")
        right_or_wrong.innerHTML="WRONG"
        right_or_wrong.className="bg-red"

    }
    else if(ip.value>first_part && ip.value<second_part)
    {
        console.log("YOUR GUESS IS  LOW")
        suggestion.innerHTML="YOUR GUESS IS LOW"
        right_or_wrong.innerHTML="WRONG"
        right_or_wrong.className="bg-red"
        // right_or_wrong.style.color('black')
    }
    else if(ip.value>second_part && ip.value<=third_part)
    {
        console.log("YOUR GUESS IS HIGH")
        suggestion.innerHTML="YOUR GUESS IS HIGH"
        right_or_wrong.innerHTML="WRONG"
        right_or_wrong.className="bg-red"
    }
    else{
        console.log("YOUR GUESS IS TOO HIGH")
        suggestion.innerHTML="YOUR GUESS IS TOO HIGH"
        right_or_wrong.innerHTML="WRONG"
        right_or_wrong.className="bg-red"
    }
    ip.value=""

})

