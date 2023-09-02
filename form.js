const $form = document.querySelector(".contacto-form");
const $buttonMailTo = document.querySelector("#mailto") 

$form.addEventListener("submit", function (event){
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('name'))
    $buttonMailTo.setAttribute('href', `mailto:eduardoacu19@gmail.com?subject= Nombre: ${form.get('name')} email: ${form.get('email')}&body=${form.get('mensaje')}`)
    

    $buttonMailTo.click()
})