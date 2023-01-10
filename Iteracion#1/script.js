// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const btn = document.getElementById('btnToClick')
btn.addEventListener('click', () => {
    console.log('has hecho click');
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const fcs = document.querySelector('.focus')
fcs.addEventListener('focus', () => {
    console.log('estas haciendo foco');
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const npt = document.querySelector('.value')
npt.addEventListener('input', () =>{
    console.log('estas en el input');
})


