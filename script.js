const obj = {
    pessoaA: {
        nome: 'Dani',
        idade: 27,
        peso: 75,
        altura: 1.67
    },
    
    pessoaB: {
        nome: 'Lara',
        idade: 27,
        peso: 51,
        altura: 1.58
    }
}

let calculaIMC = (peso , altura) => {
    let result= (peso / (altura * altura)).toFixed(2);
    console.log(`Seu IMC é : ${result}`)

    if (result < 18.5) {
        console.log('Classificação: Magreza - Obesidae Grau: 0 ')
    } else if ( result <=24.9){
        console.log('Classificação: NORMAL - Obesidae Grau: 0 ');
    } else if ( result <= 29.9){
        console.log('Classificação: SOBREPESO - Obesidae Grau: I ')
    } else if (result <=39.9) {
        console.log('Classificação: OBESIDADE - Obesidae Grau: II ');
    } else if (result > 40) {
        console.log('Classificação: OBESIDADE GRAVE - Obesidae Grau: III')
    } else {
        console.log('não foi possivel ter uma resposta')
    }

        return result
    }

   

let anoNascimento = (idade) => {
    let anoAtualizado = new Date();
    let ano = anoAtualizado.getFullYear() - idade;
    console.log(`Você nasceu no ano de: ${ano}`);

    return ano;
}    

//Pessoa A
console.log(obj.pessoaA)
calculaIMC(obj.pessoaA.peso , obj.pessoaA.altura)
anoNascimento(obj.pessoaA.idade)

//Pessoa B
console.log(obj.pessoaB)
calculaIMC(obj.pessoaB.peso , obj.pessoaB.altura)
anoNascimento(obj.pessoaB.idade)