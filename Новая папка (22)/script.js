const ChageTheme =document.querySelector('#btn1')
const howImg =document.querySelector('#btn2')
const ShowText =document.querySelector('#btn3')
const ChangeColor =document.querySelector('#btn4')
const body =document.querySelector('.body')
const img =document.querySelector('.img')
const h1 =document.querySelector('.h1')

btn1.onclick = () => {
   body.classList.toggle('theme')
}
btn2.onclick = () => {
   img.classList.toggle('Mega_show')
}
btn3.onclick = () => {
   h1.classList.toggle('Mega_show')
}
btn4.onclick = () => {
   h1.classList.toggle('Color')
}