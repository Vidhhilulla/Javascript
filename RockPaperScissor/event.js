var things = ['Rock', 'Paper', 'Scissor']



const Rock=document.querySelector('#Rock')
const Paper=document.querySelector('#Paper')
const Scissor=document.querySelector('#Scissor')
const you=document.querySelector('.you')
const Computer=document.querySelector('.Computer')
const MovesLeft=document.querySelector('.MovesLeft')
let givingDiscussion=document.querySelector('.givingDiscussion')
let discussion=''
let TellingMovesLeft=document.querySelector('#TellingMovesLeft')
let whatComputerChose=document.querySelector('#whatComputerChose')

let TakingDiscussion=document.querySelector('#TakingDiscussion')
let count=0
let yourcount=0
let computercount=0
var random

// const btn=document.querySelector('.btn')

Rock.addEventListener('click',(event)=>
{   

    random= things[Math.floor(Math.random()*things.length)];
    console.log(random)
    TakingDiscussion.innerText=''
    count++
    TellingMovesLeft.innerText=(10-count)
  
    if(Rock.textContent===random)
    {
        console.log('tie')
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'


        TakingDiscussion.innerText+='Its a tie'
        TakingDiscussion.style.backgroundColor='#9EB384'

        yourcount++
        computercount++
        you.innerHTML+='<p>1</p>'
        Computer.innerHTML+='<p>1</p>'
        whatComputerChose.innerText="The Computer chose "+ random

    }
    else if(random=='Paper')
    {
        console.log('Computer won')
        computercount++
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'


        TakingDiscussion.innerText+='Computer Won'
        TakingDiscussion.style.backgroundColor='red'

        Computer.innerHTML+='<p>1</p>'
        you.innerHTML+='<p>0</p>'
        whatComputerChose.innerText="The Computer chose "+ random

    }
    else if(random=='Scissor')
    {
        console.log('You won')
        yourcount++
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'


        TakingDiscussion.innerText+='You won'
        TakingDiscussion.style.backgroundColor='#9EB384'

        yourcount++
        you.innerHTML+='<p>1</p>'
        Computer.innerHTML+='<p>0</p>'
        whatComputerChose.innerText="The Computer chose "+ random

    }

    if(count===10)
    {
        MovesLeft.style.display='none'
        if(yourcount>computercount)
        {
            console.log("YOU WON!!")
            discussion='YOU WON!!'

        }
    else if(computercount>yourcount)
    {
        console.log("COMPUTER WON")
        discussion='COMPUTER WON'

    }
   else if(yourcount==computercount)
{
    console.log("IT'S A TIE!!!")
    discussion='ITS A TIE!!!'


}

you.innerHTML='YOU'
Computer.innerText='COMPUTER'

givingDiscussion.innerHTML+=discussion
givingDiscussion.style.backgroundColor='#D5FFE4'


givingDiscussion.innerHTML+='<button onClick="window.location.reload()">RESTART</button>'








    }
})


Paper.addEventListener('click',(event)=>
{   

    random= things[Math.floor(Math.random()*things.length)];
    console.log(random)


    TakingDiscussion.innerText=''
    count++
    TellingMovesLeft.innerText=(10-count)
  
    if(Paper.textContent===random)
    {
        console.log('tie')
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'
        TakingDiscussion.innerText+='Its a tie'
        TakingDiscussion.style.backgroundColor='#9EB384'

        yourcount++
        computercount++
        you.innerHTML+='<p>1</p>'
        Computer.innerHTML+='<p>1</p>'
        whatComputerChose.innerText="The Computer chose "+ random


    }
    else if(random==='Scissor')
    {
        console.log('Computer won')
        computercount++
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'
        TakingDiscussion.innerText+='Computer Won'
        TakingDiscussion.style.backgroundColor='red'

        Computer.innerHTML+='<p>1</p>'
        you.innerHTML+='<p>0</p>'
        whatComputerChose.innerText="The Computer chose "+ random

    }
    else if(random==='Rock')
    {
        console.log('You won')
        yourcount++
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'
        TakingDiscussion.innerText+='You won'
        TakingDiscussion.style.backgroundColor='#9EB384'

        yourcount++
        you.innerHTML+='<p>1</p>'
        Computer.innerHTML+='<p>0</p>'
        whatComputerChose.innerText="The Computer chose "+ random

    }

    if(count==10)
    {
        MovesLeft.style.display='none'
        if(yourcount>computercount)
        {
            console.log("YOU WON!!")
            discussion='YOU WON!!'

        }
    else if(computercount>yourcount)
    {
        console.log("COMPUTER WON")
        discussion='COMPUTER WON'

    }
else if(yourcount==computercount)
{
    console.log("IT'S A TIE!!!")
    discussion='ITS A TIE!!!'


}

you.innerHTML='YOU'
Computer.innerText='COMPUTER'

givingDiscussion.innerHTML+=discussion
givingDiscussion.style.backgroundColor='#D5FFE4'


givingDiscussion.innerHTML+='<button onClick="window.location.reload()">RESTART</button>'








    }
})


Scissor.addEventListener('click',(event)=>
{   

    random= things[Math.floor(Math.random()*things.length)];
    console.log(random)


    TakingDiscussion.innerText=''
    count++
    TellingMovesLeft.innerText=(10-count)
  
    if(Scissor.textContent===random)
    {
        console.log('tie')
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'
        TakingDiscussion.innerText+='Its a tie'
        TakingDiscussion.style.backgroundColor='#9EB384'

        yourcount++
        computercount++
        you.innerHTML+='<p>1</p>'
        Computer.innerHTML+='<p>1</p>'
        whatComputerChose.innerText="The Computer chose "+ random


    }
    else if(random==='Rock')
    {
        console.log('Computer won')
        computercount++
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'
        TakingDiscussion.innerText+='Computer Won'
        TakingDiscussion.style.backgroundColor='red'

        Computer.innerHTML+='<p>1</p>'
        you.innerHTML+='<p>0</p>'
        whatComputerChose.innerText="The Computer chose "+ random

    }
    else if(random==='Paper')
    {
        console.log('You won')
        yourcount++
        TakingDiscussion.style.height='30px'
        TakingDiscussion.style.width='200px'
        TakingDiscussion.innerText+='You won'
        TakingDiscussion.style.backgroundColor='#9EB384'
        yourcount++
        you.innerHTML+='<p>1</p>'
        Computer.innerHTML+='<p>0</p>'
        whatComputerChose.innerText="The Computer chose "+ random

    }

    if(count==10)
    {
        MovesLeft.style.display='none'
        if(yourcount>computercount)
        {
            console.log("YOU WON!!")

            discussion='YOU WON!!'

        }
    else if(computercount>yourcount)
    {
        console.log("COMPUTER WON")
        discussion='COMPUTER WON'

    }
else if(yourcount==computercount)
{
    console.log("IT'S A TIE!!!")
    discussion='ITS A TIE!!!'


}

you.innerHTML='YOU'
Computer.innerText='COMPUTER'

givingDiscussion.innerHTML+=discussion
givingDiscussion.style.backgroundColor='#D5FFE4'


givingDiscussion.innerHTML+='<button onClick="window.location.reload()">RESTART</button>'








    }
})
