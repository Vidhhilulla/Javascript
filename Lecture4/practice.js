const button=document.querySelector('.clickbutton')
const password=document.querySelector(".password")
const input=document.querySelector('.input-value')

button.addEventListener('click',(event)=>
{
    // console.log(button.textContent);
    // console.log("CLICKED");
    if(button.textContent==='show password')
    {
       input.innerHTML=password.value;
       if(input.innerText==='')
       button.textContent='show password'
        else 
       button.textContent='hide password' 

    }
    else if(button.textContent==='hide password')
    {
        input.innerHTML='';
        button.textContent='show password'

    }
    
})



