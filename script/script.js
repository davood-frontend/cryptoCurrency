let show = document.getElementById('show')
let button = document.getElementById('btn')
const toggler = () =>{
    show.classList.toggle("show")
}
button.addEventListener('click', toggler)