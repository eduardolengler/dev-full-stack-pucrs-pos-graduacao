function decisao(pergunta, doOK, doCancela) {
    if(pergunta == "OK") doOK();
    else doCancela();
};

decisao ( 
    "OK", 
    function() { console.log("Você concordou."); },
    function() { console.log("Você cancelou a execução."); }
);

decisao ( 
    "Cancelar", 
    function() { console.log("Você concordou."); },
    function() { console.log("Você cancelou a execução."); }
);
