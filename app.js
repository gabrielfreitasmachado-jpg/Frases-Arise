let frases = ["Não importa o quão devagar você vá, desde que não pare.","As pessoas que continuam tentando são as que vencem no final.","Se você não lutar pelo que quer, para que você veio até aqui?"]
        let frasesCopiada = [...frases]
            function geradorMensagem(){
                if(frases.length==0){
                    frases=[...frasesCopiada];
                }
        let indice = Math.floor(Math.random()*(frases.length));
        let fraseGerada = frases[indice]
            document.querySelector("#msg").textContent = fraseGerada;
                frases.splice(indice,1);
}
