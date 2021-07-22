var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var alvoEvento = event.target; //Selecionando Td
    var paiDoAlvo = alvoEvento.parentNode; //Selecionando o pai da Td que é o Tr
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        paiDoAlvo.remove(); //Removendo Tr
    }, 500);

});