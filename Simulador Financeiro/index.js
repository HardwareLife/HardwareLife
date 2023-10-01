
var quantidadeSala = 0;
    
//   Função para gerar dinamicamente os inputs da calculadora
    function gerarInput(){
        this.quantidadeSala = Number(quantidade.value);
        if(quantidadeSala > 10){
            inputs.innerHTML = ``
            erro.innerHTML = `Você pode ter no máximo 10 salas`
            return
        }else{
            erro.innerHTML = ``;
        }
            inputs.innerHTML = ``;
            resultado.innerHTML = ``;
        for(var i = 0; i<quantidadeSala; i++){
            inputs.innerHTML += `
            <label for="area${i+1}">Digite a area da sala ${i+1}: </label>
            <input type="number" id="area${i+1}"><br><br>
            <label for="servidor${i+1}">Digite a quantidade de servidores da sala ${i+1}: </label>
            <input type="number" id="servidor${i+1}"><br><br>
            <label for="rack${i+1}">Digite a quantidade de rack da sala ${i+1}: </label>
            <input type="number" id="rack${i+1}"><br><br>
            <label for="funcionario${i+1}">Quantos funcionários trabalham na sala ${i+1}: </label>
            <input type="number" id="funcionario${i+1}"><br><br>
            `
        }

    }

    //Função para realizar os calculos
    function precificar(){
        
        if(quantidadeSala == 0 || quantidadeSala < 0){
            erro.innerHTML = `O número de salas deve ser maior que 0`
            return
        }

        resultado.innerHTML = ``;

        // var vetorServidore = [];
        // var vetorRack = [];
        // var vetorArea = [];
        // var vetorFuncionario = [];

        var somatorioArea = 0;
        var somatorioServidores = 0;
        var somatorioRacks = 0;
        var somatorioFuncionarios = 0;

        // Gerando as variáveis de forma dinâmica.
        for(var i = 0; i<quantidadeSala; i++){
            eval('var area_sala'+ (i+1) +'= ' + Number(eval('area' + (i+1) +".value")));
            eval('var servidor_sala'+ (i+1) +'= ' + Number(eval('servidor' + (i+1) +".value")));
            eval('var racks_sala'+ (i+1) +'= ' + Number(eval('rack' + (i+1) +".value")));
            eval('var funcionario_sala' + (i+1) + '= ' + Number(eval('funcionario' + (i+1) + ".value")));
        }

        
        // Armazenando os somatórios das variáveis
        for(var i = 0; i<quantidadeSala; i++){
            somatorioArea += eval("area_sala" + (i+1));
            somatorioServidores += eval("servidor_sala" + (i+1));
            somatorioRacks += eval("racks_sala" + (i+1));
            somatorioFuncionarios += eval("funcionario_sala" + (i+1));
            // vetorArea.push(eval("area_sala" + (i+1)));
            // vetorServidore.push(eval("servidor_sala" + (i+1)));
            // vetorRack.push(eval("racks_sala" + (i+1)));
            // vetorFuncionario.push(eval("racks_sala" + (i+1)));
        }
        
        // for(var i = 0; i < quantidadeSala; i++){
        //     if(vetorArea[i] == 0 || vetorArea[i] < 0){
        //         console.log(`Sala ${i+1}`)
        //         erro.innerHTML = `Todos os campos de área devem ser preenchidos`;
        //         return
        //     }
        // }



        var btuSala;
        //precisamos decidir um padrão para utilização dos sensores de umidade
        var quantidadeSensor =  somatorioRacks * 6;
        var quantidadeDesumidificador = Math.ceil( somatorioArea / 90);
        var quantidadeArCondicionado = 0;
        var valorDesumidificadores = quantidadeDesumidificador * 5000;
        var valorPlacaSensor = quantidadeSensor * 80;
        
        // Renderizando as informações para o usuário
        for(var i =0; i<quantidadeSala; i++){
            btuSala = eval("area_sala" + (i+1)) * 600 + eval("servidor_sala" + (i+1)) * 600 + eval("funcionario_sala" + (i+1)) * 600;
            quantidadeArCondicionado += Math.ceil(btuSala/120000)
            resultado.innerHTML += `Sua ${i+1}º sala de datacenter tem ${eval("area_sala" + (i+1))} m² de área, ${eval("servidor_sala" + (i+1))} servidores e ${eval("funcionario_sala" + (i+1))} funcionários, o que resulta na necessidade de ${btuSala} BTUs de potência para refrigerar efetivamente o ambiente, devido a esse fato iremos fornecer ${Math.ceil(btuSala/120000)} ar(es)-condicionado(s).<br>
            Devido à área de ${eval("area_sala" + (i+1))}m², a sala ${i+1} precisará de ${Math.ceil(eval("area_sala" + (i+1))/90)} desumidificador(es), já que nossos desumidificadores atuam efetivamente em uma área de 90m². <br>
            Devido à quantidade de ${eval("racks_sala" + (i+1))} racks na sala ${i+1}, será necessário ${(eval("racks_sala" + (i+1)) * 6)} sensores<br><br>
            `; 
        }

        
        var valorAresCondicionados = quantidadeArCondicionado * 30000;
        var precoTotal = valorAresCondicionados + valorDesumidificadores + valorPlacaSensor;

        resultado.innerHTML += `O preço total será de R$${precoTotal.toLocaleString('pt-BR')}, composto por um total de ${quantidadeArCondicionado} ar(es) condicionado(s) que custará(ão) R$${valorAresCondicionados.toLocaleString('pt-BR')}, ${quantidadeDesumidificador} desumidificador(es) que custará(ão) R$${valorDesumidificadores.toLocaleString('pt-BR')},
        ${quantidadeSensor} sensor(es) que custará(ão) R$${valorPlacaSensor.toLocaleString('pt-BR')}.`;

    }