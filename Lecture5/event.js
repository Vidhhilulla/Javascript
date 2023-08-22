const button=document.querySelector('#submit')
const ip=document.querySelector('.ipname')
const valueParagraph=document.querySelector('.value')

button.addEventListener('click',(event)=>
{
    console.log(ip.value)
    valueParagraph.innerText=ip.value
    // Mostly dont write innerHtml
})
