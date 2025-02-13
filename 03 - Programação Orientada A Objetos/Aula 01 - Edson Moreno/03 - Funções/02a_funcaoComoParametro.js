function decisao(pergunta, doOK, doCancela) {
    if(pergunta == "OK") doOK();
    else doCancela();
};

function mostraOK() {
    console.log("Você concordou.");
};

function mostartCancela() {
    console.log("Você cancelou a execução.");
};

decisao("OK", mostraOK, mostartCancela);
decisao("Cancelar", mostraOK, mostartCancela);