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
       password.type='text'

       if(input.innerText==='')
       button.textContent='show password'
        else 
       button.textContent='hide password' 

    }
    else if(button.textContent==='hide password')
    {
        input.innerHTML='';
        password.type='password'
        button.textContent='show password'

    }
    
})


// Do this by doing type of button 
// if text then do password
// if password then text



