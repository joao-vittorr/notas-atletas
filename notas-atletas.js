let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    // 1. Ordenar as notas
    let notasOrdenadas = atleta.notas.sort(function(a, b) {
        return a - b;
    });
    // 2. Remover a maior e a menor nota
    let notasComputadas = notasOrdenadas.slice(1, 4);

    // 3. Somar as notas restantes
    let soma = 0;
    notasComputadas.forEach(function(nota) {
        soma = soma + nota;
    });

    // 4. Calcular a média
    let media = soma / notasComputadas.length;

    // 5. Apresentar o resultado
    console.log("Atleta: " + atleta.nome);
    console.log("Notas Obtidas: " + notasOrdenadas);
    console.log("Média Válida: " + media);
    console.log(""); // Linha em branco para separar os atletas
}