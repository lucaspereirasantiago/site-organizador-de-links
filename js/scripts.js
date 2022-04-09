const inputNome = document.querySelector('#nome');
const inputLink = document.querySelector('#link');
const btn = document.querySelector('#organizar');
const errorMsg = document.querySelector('#errorMsg');

btn.addEventListener("click", (event) => {
    event.preventDefault();
    nomeValue = inputNome.value;
    linkValue = inputLink.value;

    if(nomeValue === "" || linkValue === ""){
        errorMsg.textContent = "Preencha os campos!";
    }
    
    setTimeout(() => {
        errorMsg.textContent = "";    
    }, 3000);

    return;
});