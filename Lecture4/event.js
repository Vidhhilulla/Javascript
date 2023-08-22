// EventListeners

// selected element  eventlistenet  eventlistener ka naam  functiont to be execuetd
// events in javascript mdn

// by default it passes an object event

const button=document.querySelector('.clickbutton')
// button.addEventListener('click',()=>
// {
//     console.warn('clicked')
// })

button.addEventListener('click',(event)=>
{
    console.warn('clicked')
    console.warn(event.target)
})

const ip=document.querySelector('.ip')
console.log(ip.value)

const inputvalue=document.querySelector('.input-value')
ip.addEventListener('input',(event)=>{
    console.log(event.target.value);
    inputvalue.innerHTML=event.target.value

})

// element aa gaya toh value aa jayega
// event.target returns the element target(click)
// .textContent for inner text of buttons
// here,ip and event.target are the same because vohi click hua hai
// .value means uske andar ka value(of target)

// Homework:input rahega baju mai button type pe button ke click pe  value console hoga
// Like form banaya toh uske content print hona chaiye



