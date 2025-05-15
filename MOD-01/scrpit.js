// comentários de única linha

/*
comentários de varias linhas
*/

// Usando a fução integrada alert

let msg = window.alert("function alert");

// usando a função confirm irá da as opções ok e cancelar

let confirmação = window.confirm("está gostando do js");

// usando a função prompt

let propot = window.prompt("Qual o seu nome? ");


// diferença entre variáveis

// LET - permite atribuir valores à variável depois de declarada
let name = window.alert("Paulo");

// reatribuição da variável name
name = window.alert("João");


// CONST - Não permite reatribuição de valores à variável depois de declarada
// OBS: MAS OS OBJETOS E ARRAY AINDA PODEM SER MODIFICADO
const name2 = window.alert("paulo sem reatribuição pois a var e const");

/**
 * Podem usar em variáveis
 * letras, $, _, números, acentos, simbolos
 * 
 * 
 * Não podem usar em variáveis
 * espaços, palvras reservadas, começar com números
 * 
 * 
 * 
 * DICAS DE NOMES DE VARIÁVEIS
 * maiúsculas e minúsculas fazer a diferença
 * nomes coerentes para as variáveis
 */

// CONCATENAÇÃO - JUNÇÃO
// NUMBER + NUMER = ADIÇÃO
// STRING + STRING = CONCATENAÇÃO

let name3 = window.prompt("QUAL O SEU NOME: ");
window.alert("É um prazer, " + name3 + "!");


/**
 * Convertendo string para number em JavaScript
 * 
 * Aqui vamos ver duas das mais usadas: parseInt, parseFloat e Number.
 */

// ✅ Usando parseInt e parseFloat (métodos antigos)
let n1 = parseInt(window.prompt("Digite um número inteiro: ")); // Converte a string digitada para um número inteiro (ex: "5" → 5)
let n2 = parseFloat(window.prompt("Digite um número flutuante: ")); // Converte a string digitada para um número decimal (ex: "5.5" → 5.5)

// ✅ Calculando a soma dos dois números
let resultado = n1 + n2;

// ✅ Exibindo o resultado da soma
window.alert("A soma dos valores é " + resultado);


/**
 * ✅ Usando a nova forma do ECMAScript: Number()
 * 
 * O método Number() é mais moderno e é capaz de converter qualquer tipo de string
 * que represente um número para o tipo Number, seja inteiro ou decimal.
 */

let n3 = Number(window.prompt("Digite um número inteiro: ")); // Converte qualquer string numérica para número (inteiro ou decimal)
let n4 = Number(window.prompt("Digite um número flutuante: ")); // Converte qualquer string numérica para número (inteiro ou decimal)

// ✅ Calculando a soma dos dois números
let resultado5 = n3 + n4;

// ✅ Exibindo o resultado da soma
window.alert("A soma dos valores é " + resultado5);


// Conversão de Número para String

// string() - em parenteses o que quero converter gera uma string

// ().toString - parentese oque quero converter gera uma string



// Usando String()
let numero1 = 123;
let texto1 = String(numero1);
console.log("Usando String():", texto1, " - Tipo:", typeof texto1);

// Usando toString()
let numero2 = 456;
let texto2 = numero2.toString();
console.log("Usando toString():", texto2, " - Tipo:", typeof texto2);



// usando document. wirite -  é um método do JavaScript que permite escrever diretamente no documento HTML durante o carregamento da página

let nome55 = window.prompt("Qula é o seu nome?")
document.writeln(`Olá, ${nome}! Seu nome tem ${nome.length} letras.`)
document.writeln(`Seu nome em maiúsculo é ${nome.toUpperCase}`)

//