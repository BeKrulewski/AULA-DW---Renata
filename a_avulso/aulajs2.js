let aluno = {
    nome: "João",
    idade: 18,
    notas: [7, 8, 9]
};
let soma = 0;
let media = 0;
let situacao = "";
for (let i = 0; i < 3; i++) {
    soma += aluno.notas[i];
}
media = soma / 3;

if (media >= 7) {
    situacao = "APROVADO";
} else {
    situacao = "REPROVADO";
}
console.log("ALUNO: " + aluno.nome);
console.log("MEDIA: " + media);
console.log("SITUAÇÃO: " + situacao);