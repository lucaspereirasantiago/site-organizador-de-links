const inputNome = document.querySelector('#nome');
const inputLink = document.querySelector('#link');
const btn = document.querySelector('#organizar');
const scrollBtn = document.querySelector('#scrollBtn');
const errorAlert = document.querySelector('#errorAlert');
const sections = document.querySelector('.conteudo');

btn.addEventListener("click", (event) => {
    event.preventDefault();
    nomeValue = inputNome.value;
    linkValue = inputLink.value;

    if(nomeValue === "" || linkValue === ""){

        errorAlert.textContent = "Preencha os campos!";

    } else {

        const divSections = document.createElement("ul");
        divSections.classList = "blocks";

        divSections.innerHTML =
        `<li class="sections">
            <div class="block-conteudo">
                <h3 class="titulo-conteudo">${nomeValue}</h3>
                <button class="link-conteudo"><a id="link-btn" href="${linkValue}"
                target="_blank">Ir para o link</a></button>
            </div>
        </li>`
    
        sections.appendChild(divSections);

        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });

    };
    
    setTimeout(() => {
        errorAlert.textContent = "";    
    }, 3000);


    inputNome.value = '';
    inputLink.value = '';

    return;
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});