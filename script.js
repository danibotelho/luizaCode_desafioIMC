class Pessoa{
    constructor(nome, idade, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC = (peso , altura) => {
        let result= (this.peso / (this.altura * this.altura)).toFixed(2);
        console.log(`${this.nome}, Seu IMC é : ${result}`)
        
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


     anoNascimento = (idade) => {
            let anoAtualizado = new Date();
            let ano = anoAtualizado.getFullYear() - this.idade;
            console.log(`Você nasceu no ano de: ${ano}`);
            
          return ano;
        }

    }  



  const  pessoaA = new Pessoa('Dani', 27, 75, 1.67);
    
    pessoaA.calculaIMC()
    pessoaA.anoNascimento
    
  const  pessoaB = new Pessoa('Lara', 27, 51, 1.58) 
    
    pessoaB.calculaIMC()
    pessoaB.anoNascimento()
