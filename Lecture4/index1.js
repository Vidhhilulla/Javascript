
// Generally,we change the color with js
// Adding text while writing something wrong
// textcontent and innerhtml are used for this

const element=document.querySelector('h4')
const element1=document.querySelector('h5')
console.warn(element)
console.log(element1)


element.className='red'



setTimeout(()=>element.innerHTML='<h2>hello,welcome home,again</h2>',2000)
// Here,we have used innerHTML,therefore,it is changing original h4 to h2

// setTimeout(()=>
//     {element1.innerText='vidhhi';
//     element1.className='green';
//     element.style.backgroundColor('blue');
// },2000)



// innerHTML mai HTML parse karta hai
// innerText only prints as it is as text

const timeid=setInterval(()=>{
    if(element1.textContent==='Hello party')
    element1.innerHTML='party Hello'
    else
    element1.innerHTML='Hello party'
},2000)

setTimeout(()=>{console.warn('Clearing');
clearInterval(timeid);element1.innerHTML='Cleared'},13000)

// setAttribute actually changes the attribute
// if we want to give multiple classes=>classlist


// either element.style.color or add or remove the class


