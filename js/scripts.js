const inputNome = document.querySelector('#nome');
const inputLink = document.querySelector('#link');
const btn = document.querySelector('#organizar');
const errorAlert = document.querySelector('#errorAlert');

btn.addEventListener("click", (event) => {
    event.preventDefault();
    nomeValue = inputNome.value;
    linkValue = inputLink.value;

    if(nomeValue === "" || linkValue === ""){
        errorAlert.textContent = "Preencha os campos!";
    }
    
    setTimeout(() => {
        errorAlert.textContent = "";    
    }, 3000);

    return;
});