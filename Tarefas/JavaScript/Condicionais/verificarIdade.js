let idade = Math.random ()*10; // para numeros aleatorios 
let idadeInteira = idade.toFixed(0) * idade.toFixed(0); // para deixar os numeros num padrão 


console.log(idadeInteira)

if (idadeInteira < 18 ) {
    console.log('Você é menor de idade');
} else if (idadeInteira >= 18 && idadeInteira <= 59) {
    console.log('Você é maior de idade!');
} else if (idadeInteira > 59) {
    console.log('Você precisa parar em casa');
}