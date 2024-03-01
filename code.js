document.addEventListener("DOMContentLoaded", () => {
    const texto = document.body.querySelector("#texto");
    texto.addEventListener("click", () => {
        if(texto.textContent==="Olá mundo")
           texto.textContent="Hello world";
        else 
           texto.textContent="Olá mundo";

    });
    
});
