function decisao(pergunta, doOK, doCancela) {
    if(pergunta == "OK") doOK();
    else doCancela();
};

let beOK = function mostraOK() { console.log("Você concordou."); };

let beCancel = function mostraCancela() { console.log("Você cancelou a execução."); };

decisao("OK", beOK, beCancel);
decisao("Cancelar", beOK, beCancel);